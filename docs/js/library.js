(() => {
const authors = {
    heisenberg: {
        label: "[BBD] Heisenberg"
    },
    sencifouy: {
        label: "[NFH] Sencifouy"
    },
    badder: {
        label: "[LTZ] Badder"
    },
    lord_fuzzy: {
        label: "[DQD] LORD FUZZY"
    },
    birdsfoot: {
        label: "[HOB] Birdsfoot"
    }
};

const categories = {
    crypting: "Crypting & Clan Chests",
    events: "Events & Epic Monsters",
    pvp: "Player Versus Player",
    beginners: "Beginners",
    leader: "Leader Advice",
    misc: "Miscellaneous"
};

const libraryTranslations = window.LibraryTranslations || {};
const booksIndexUrl = "data/library.json";
const bookContentCache = new Map();
let books = [];

const loadBooksIndex = async () => {
    try {
        const response = await fetch(booksIndexUrl);
        if (!response.ok) {
            throw new Error(`Failed to load ${booksIndexUrl}: ${response.status}`);
        }
        const data = await response.json();
        books = Array.isArray(data.books) ? data.books : [];
    } catch (error) {
        console.error("Failed to load library index.", error);
        books = [];
    }
};

const getBookContentPath = (book, lang) => {
    const file = book.file || `${book.id}.md`;
    return `books/${lang}/${file}`;
};

const fetchBookContent = async (book, lang) => {
    const cacheKey = `${lang}:${book.id}`;
    if (bookContentCache.has(cacheKey)) {
        return bookContentCache.get(cacheKey);
    }
    const tryLoad = async (language) => {
        const response = await fetch(getBookContentPath(book, language));
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
        content = "<p>Book content is unavailable.</p>";
    }
    bookContentCache.set(cacheKey, content);
    return content;
};

const t = (key) => (window.I18N && typeof I18N.t === "function" ? I18N.t(key) : key);
const getLanguage = () => (window.I18N && typeof I18N.getLanguage === "function" ? I18N.getLanguage() : "en");
const getAuthor = (authorId) => (authorId ? authors[authorId] || null : null);
const getCategoryLabel = (categoryId) => {
    const lang = getLanguage();
    return libraryTranslations[lang]?.categories?.[categoryId] || categories[categoryId] || categoryId;
};
const getBookTranslation = (book) => {
    const lang = getLanguage();
    return libraryTranslations[lang]?.books?.[book.id] || null;
};
const getBookTitle = (book) => getBookTranslation(book)?.title || book.title;
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

const resolveBookContent = (content, authorLabel) => {
    const replaced = content.replace(/{{author}}/g, authorLabel || "");
    return shouldRenderMarkdown(replaced) ? renderMarkdown(replaced) : replaced;
};

document.addEventListener("DOMContentLoaded", () => {
    const outline = document.getElementById("library-outline");
    const results = document.getElementById("library-results");
    const count = document.getElementById("library-result-count");
    const searchInput = document.getElementById("library-search");

    const modal = document.getElementById("book-modal");
    const modalCategory = document.getElementById("book-category");
    const modalTitle = document.getElementById("book-title");
    const modalContent = document.getElementById("book-content");
    const modalMedia = document.getElementById("book-media");
    const modalImage = document.getElementById("book-image");
    const authorsList = document.getElementById("authors-list");
    let activeBookId = null;
    let selectedAuthorId = null;

    const groupByCategory = () => {
        const grouped = {};
        books.forEach((book) => {
            if (!grouped[book.categoryId]) grouped[book.categoryId] = [];
            grouped[book.categoryId].push(book);
        });
        return grouped;
    };

    const buildBookLabel = (book) => {
        const wrapper = document.createElement("span");
        wrapper.className = "book-label";

        const title = document.createElement("span");
        title.className = "book-title";
        title.textContent = getBookTitle(book);
        wrapper.appendChild(title);

        const author = getAuthor(book.authorId);
        if (author) {
            const authorTag = document.createElement("span");
            authorTag.className = "pill book-author";
            authorTag.textContent = author.label;
            wrapper.appendChild(authorTag);
        }

        return wrapper;
    };

    const getSelectedAuthorLabel = () => {
        if (!selectedAuthorId) return "";
        const author = getAuthor(selectedAuthorId);
        return author ? author.label : "";
    };

    const renderAuthors = () => {
        if (!authorsList) return;
        authorsList.innerHTML = "";
        const counts = books.reduce((acc, book) => {
            if (!book.authorId) return acc;
            acc[book.authorId] = (acc[book.authorId] || 0) + 1;
            return acc;
        }, {});
        const items = Object.entries(authors)
            .filter(([, author]) => author && author.label)
            .map(([id, author]) => ({ id, label: author.label }))
            .sort((a, b) => (counts[b.id] || 0) - (counts[a.id] || 0));
        items.forEach((author) => {
            const pill = document.createElement("button");
            pill.type = "button";
            pill.className = "pill author-pill";
            if (selectedAuthorId === author.id) {
                pill.classList.add("is-active");
                pill.setAttribute("aria-pressed", "true");
            } else {
                pill.setAttribute("aria-pressed", "false");
            }
            pill.dataset.authorId = author.id;
            const count = counts[author.id] || 0;
            pill.textContent = `${author.label} (${count})`;
            authorsList.appendChild(pill);
        });
    };

    const renderOutline = () => {
        const grouped = groupByCategory();
        outline.innerHTML = "";
        Object.entries(grouped).forEach(([categoryId, list]) => {
            const details = document.createElement("details");
            details.className = "category-block";

            const summary = document.createElement("summary");
            summary.textContent = `${getCategoryLabel(categoryId)} (${list.length})`;

            const booksWrap = document.createElement("div");
            booksWrap.className = "category-books";
            list.forEach((book) => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "book-link";
                btn.dataset.book = book.id;
                btn.appendChild(buildBookLabel(book));
                booksWrap.appendChild(btn);
            });

            details.append(summary, booksWrap);
            outline.appendChild(details);
        });
    };

    const renderResults = (items, query) => {
        results.innerHTML = "";
        if (!query) {
            results.classList.add("is-hidden");
            return;
        }
        results.classList.remove("is-hidden");

        if (!items.length) {
            const empty = document.createElement("div");
            empty.className = "result-empty";
            empty.textContent = t("library.search.empty");
            results.appendChild(empty);
            return;
        }

        items.forEach((book) => {
            const row = document.createElement("button");
            row.type = "button";
            row.className = "book-result";
            row.dataset.book = book.id;
            row.appendChild(buildBookLabel(book));

            const category = document.createElement("span");
            category.className = "book-result__category";
            category.textContent = getCategoryLabel(book.categoryId);
            row.appendChild(category);

            results.appendChild(row);
        });
    };

    const updateCount = (value, isSearch) => {
        if (isSearch) {
            const label = value === 1 ? t("library.count.match") : t("library.count.matches");
            count.textContent = `${value} ${label}`;
            return;
        }
        count.textContent = `${value} ${t("library.count.books")}`;
    };

    const openBook = async (id) => {
        const book = books.find((item) => item.id === id);
        if (!book) return;
        const author = getAuthor(book.authorId);
        const attribution = author
            ? `<p><strong>Courtesy of ${author.label}</strong></p><div class="book-divider"></div>`
            : "";
        modalCategory.textContent = getCategoryLabel(book.categoryId);
        modalTitle.textContent = getBookTitle(book);
        modalContent.innerHTML = `${attribution}<p>Loading...</p>`;
        if (book.image) {
            modalImage.src = book.image;
            modalImage.alt = getBookTitle(book);
            modalMedia.classList.remove("is-hidden");
        } else {
            modalImage.src = "";
            modalImage.alt = "";
            modalMedia.classList.add("is-hidden");
        }
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
        activeBookId = book.id;

        const params = new URLSearchParams(window.location.search);
        params.set("book", book.id);
        history.replaceState({}, "", `${window.location.pathname}?${params}`);

        const content = await fetchBookContent(book, getLanguage());
        if (activeBookId !== book.id) return;
        const resolved = resolveBookContent(content, author ? author.label : "");
        modalContent.innerHTML = `${attribution}${resolved}`;
    };

    const closeBook = () => {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
        activeBookId = null;
        const params = new URLSearchParams(window.location.search);
        params.delete("book");
        history.replaceState({}, "", `${window.location.pathname}?${params}`);
    };

    const handleSearch = () => {
        const query = searchInput.value.trim().toLowerCase();
        const matches = books.filter((book) => {
            const title = getBookTitle(book).toLowerCase();
            const category = getCategoryLabel(book.categoryId).toLowerCase();
            const author = getAuthor(book.authorId);
            const authorLabel = author ? author.label.toLowerCase() : "";
            return (
                title.includes(query) ||
                category.includes(query) ||
                authorLabel.includes(query)
            );
        });
        renderResults(matches, query);
        updateCount(query ? matches.length : books.length, Boolean(query));

        const params = new URLSearchParams(window.location.search);
        if (query) {
            params.set("q", query);
        } else {
            params.delete("q");
        }
        history.replaceState({}, "", `${window.location.pathname}?${params}`);
    };

    const handleSearchInput = () => {
        if (
            selectedAuthorId &&
            searchInput.value.trim().toLowerCase() !==
                getSelectedAuthorLabel().trim().toLowerCase()
        ) {
            selectedAuthorId = null;
            renderAuthors();
        }
        handleSearch();
    };

    outline.addEventListener("click", (event) => {
        const target = event.target.closest("[data-book]");
        if (target) {
            openBook(target.dataset.book);
        }
    });

    results.addEventListener("click", (event) => {
        const target = event.target.closest("[data-book]");
        if (target) {
            openBook(target.dataset.book);
        }
    });

    modal.addEventListener("click", (event) => {
        if (event.target.closest("[data-book-close]")) {
            closeBook();
        }
    });

    document.addEventListener("tb-language-change", () => {
        renderOutline();
        renderAuthors();
        if (selectedAuthorId) {
            searchInput.value = getSelectedAuthorLabel();
        }
        handleSearch();
        if (activeBookId) {
            openBook(activeBookId);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.classList.contains("is-open")) {
            closeBook();
        }
    });

    searchInput.addEventListener("input", handleSearchInput);
    document.addEventListener("tb-language-change", handleSearch);

    const init = async () => {
        await loadBooksIndex();
        renderOutline();
        renderAuthors();

        const params = new URLSearchParams(window.location.search);
        const query = params.get("q");
        if (query) {
            searchInput.value = query;
        }
        handleSearch();
        const bookParam = params.get("book");
        if (bookParam) {
            await openBook(bookParam);
        }
    };

    if (authorsList) {
        authorsList.addEventListener("click", (event) => {
            const target = event.target.closest("[data-author-id]");
            if (!target) return;
            if (selectedAuthorId === target.dataset.authorId) {
                selectedAuthorId = null;
                searchInput.value = "";
            } else {
                selectedAuthorId = target.dataset.authorId;
                searchInput.value = getSelectedAuthorLabel();
            }
            renderAuthors();
            handleSearch();
            searchInput.focus();
        });
    }

    init();
});
})();
