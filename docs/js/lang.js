(() => {
    const roeCache = new Map();
    let roeRequestId = 0;
    const htmlBlockPattern = /<\s*(p|div|ul|ol|li|h[1-6]|table|thead|tbody|tr|td|th|img|strong|em|a|br)\b/i;
    const shouldRenderMarkdown = (content) => !htmlBlockPattern.test(content);

    const formatInline = (text) => {
        let output = text;
        output = output.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');
        output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
        output = output.replace(/<((https?:\/\/)[^>]+)>/g, '<a href="$1">$1</a>');
        output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
        output = output.replace(/\*([^*]+)\*/g, "<em>$1</em>");
        output = output.replace(/`([^`]+)`/g, "<code>$1</code>");
        return output;
    };

    const renderMarkdown = (content) => {
        const lines = content.replace(/\r\n/g, "\n").split("\n");
        const output = [];
        let paragraph = [];
        const listStack = [];
        let inTable = false;

        const flushParagraph = () => {
            if (paragraph.length) {
                output.push(`<p>${formatInline(paragraph.join(" "))}</p>`);
                paragraph = [];
            }
        };
        const openList = (type) => {
            output.push(`<${type}>`);
            listStack.push({ type });
        };
        const closeLists = (targetLevel = 0) => {
            while (listStack.length > targetLevel) {
                output.push(`</${listStack.pop().type}>`);
            }
        };
        const closeTable = () => {
            if (inTable) {
                output.push("</tbody></table>");
                inTable = false;
            }
        };
        const isTableSeparator = (line) =>
            /^\s*\|?\s*:?[-]{3,}:?\s*(\|\s*:?[-]{3,}:?\s*)+\|?\s*$/.test(line);
        const parseTableRow = (line) => {
            let row = line.trim();
            if (row.startsWith("|")) row = row.slice(1);
            if (row.endsWith("|")) row = row.slice(0, -1);
            return row.split("|").map((cell) => formatInline(cell.trim()));
        };
        const parseListItem = (rawLine) => {
            const match = rawLine.match(/^(\s*)(-|\d+\.)\s+(.+)$/);
            if (!match) return null;
            const indent = match[1].length;
            const type = match[2] === "-" ? "ul" : "ol";
            const level = Math.floor(indent / 2);
            return { level, type, text: match[3].trim() };
        };

        for (let i = 0; i < lines.length; i += 1) {
            const rawLine = lines[i];
            const line = rawLine.trim();
            if (!line) {
                flushParagraph();
                closeLists();
                closeTable();
                continue;
            }

            const nextLine = lines[i + 1] ? lines[i + 1].trim() : "";
            if (!inTable && line.includes("|") && nextLine && isTableSeparator(nextLine)) {
                flushParagraph();
                closeLists();
                const headers = parseTableRow(line);
                output.push(
                    `<table class="book-table"><thead><tr>${headers
                        .map((header) => `<th>${header}</th>`)
                        .join("")}</tr></thead><tbody>`
                );
                inTable = true;
                i += 1;
                continue;
            }

            if (inTable) {
                if (line.includes("|")) {
                    const cells = parseTableRow(line);
                    output.push(`<tr>${cells.map((cell) => `<td>${cell}</td>`).join("")}</tr>`);
                    continue;
                }
                closeTable();
            }

            const listItem = parseListItem(rawLine);
            if (listItem) {
                flushParagraph();
                closeTable();
                const targetLevel = listItem.level + 1;
                if (listStack.length > targetLevel) {
                    closeLists(targetLevel);
                }
                if (listStack.length === targetLevel && listStack[listItem.level].type !== listItem.type) {
                    closeLists(listItem.level);
                }
                while (listStack.length < targetLevel) {
                    openList(listItem.type);
                }
                output.push(`<li>${formatInline(listItem.text)}</li>`);
                continue;
            }

            if (listStack.length) {
                closeLists();
            }

            const headingMatch = line.match(/^(#{1,6})\s+(.+)/);
            if (headingMatch) {
                flushParagraph();
                const level = Math.min(6, headingMatch[1].length);
                output.push(`<h${level}>${formatInline(headingMatch[2].trim())}</h${level}>`);
                continue;
            }

            paragraph.push(line);
        }

        flushParagraph();
        closeLists();
        closeTable();

        return output.join("\n");
    };

    const resolveRoeContent = (content) => (shouldRenderMarkdown(content) ? renderMarkdown(content) : content);

    const fetchRoe = async (lang) => {
        const cacheKey = lang;
        if (roeCache.has(cacheKey)) {
            return roeCache.get(cacheKey);
        }

        const tryLoad = async (language) => {
            const response = await fetch(`roe/${language}/roe.md`);
            if (!response.ok) {
                return null;
            }
            return response.text();
        };

        let content = await tryLoad(lang);
        if (!content && lang !== "en") {
            content = await tryLoad("en");
        }
        if (!content) {
            content = "<p>ROE content is unavailable.</p>";
        }
        roeCache.set(cacheKey, content);
        return content;
    };

    const applyTranslations = () => {
        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach((el) => {
            const key = el.dataset.i18n;
            if (!key) return;
            el.textContent = I18N.t(key);
        });

        const htmlElements = document.querySelectorAll("[data-i18n-html]");
        htmlElements.forEach((el) => {
            const key = el.dataset.i18nHtml;
            if (!key) return;
            el.innerHTML = I18N.t(key);
        });

        const attrElements = document.querySelectorAll("[data-i18n-attr]");
        attrElements.forEach((el) => {
            const raw = el.dataset.i18nAttr || "";
            raw.split(",").forEach((pair) => {
                const [attr, key] = pair.split(":").map((part) => part.trim()).filter(Boolean);
                if (!attr || !key) return;
                el.setAttribute(attr, I18N.t(key));
            });
        });

        const roeTarget = document.getElementById("roe-content");
        if (roeTarget) {
            const requestId = ++roeRequestId;
            const lang = I18N.getLanguage();
            fetchRoe(lang)
                .then((content) => {
                    if (requestId !== roeRequestId) return;
                    roeTarget.innerHTML = resolveRoeContent(content);
                })
                .catch((error) => {
                    console.error("Failed to load ROE content.", error);
                    if (requestId !== roeRequestId) return;
                    roeTarget.innerHTML = "<p>ROE content is unavailable.</p>";
                });
        }
    };

    const syncSelectors = (lang) => {
        document.querySelectorAll(".lang-select").forEach((select) => {
            select.value = lang;
        });
    };

    const updateLinks = (lang) => {
        const anchors = document.querySelectorAll("a[href]");
        anchors.forEach((anchor) => {
            const href = anchor.getAttribute("href");
            if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
                return;
            }
            if (/^https?:\/\//i.test(href)) {
                return;
            }
            const [path, query] = href.split("?");
            const params = new URLSearchParams(query || "");
            params.set("lang", lang);
            anchor.setAttribute("href", `${path}?${params.toString()}`);
        });
    };

    const updateQueryString = (lang) => {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", lang);
        window.history.replaceState({}, "", url.toString());
    };

    const getQueryLang = () => {
        const params = new URLSearchParams(window.location.search);
        const lang = params.get("lang");
        return lang && lang.trim() ? lang.trim() : null;
    };

    const setLanguage = (lang) => {
        const applied = I18N.setLanguage(lang);
        updateQueryString(applied);
        syncSelectors(applied);
        applyTranslations();
        updateLinks(applied);
        document.dispatchEvent(new CustomEvent("tb-language-change", { detail: { lang: applied } }));
        return applied;
    };

    document.addEventListener("DOMContentLoaded", () => {
        const queryLang = getQueryLang();
        const current = I18N.setLanguage(queryLang || I18N.getLanguage());
        syncSelectors(current);
        applyTranslations();
        updateLinks(current);

        document.querySelectorAll(".lang-select").forEach((select) => {
            select.addEventListener("change", (event) => {
                setLanguage(event.target.value);
            });
        });
    });

    window.applyTranslations = applyTranslations;
})();
