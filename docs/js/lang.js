(() => {
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
            roeTarget.innerHTML = I18N.getRoeHtml();
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
