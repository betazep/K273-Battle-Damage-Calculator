(() => {
    const resetTimeEl = document.getElementById("reset-time");
    if (!resetTimeEl) return;

    const getLocale = () => {
        if (window.I18N && typeof window.I18N.getLanguage === "function") {
            return window.I18N.getLanguage();
        }
        return undefined;
    };

    const updateResetTime = () => {
        const now = new Date();
        const resetUtc = new Date(
            Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 17, 0, 0)
        );
        if (now.getTime() > resetUtc.getTime()) {
            resetUtc.setUTCDate(resetUtc.getUTCDate() + 1);
        }
        const formatter = new Intl.DateTimeFormat(getLocale(), {
            hour: "2-digit",
            minute: "2-digit"
        });
        resetTimeEl.textContent = formatter.format(resetUtc);
    };

    updateResetTime();
    setInterval(updateResetTime, 60000);
    document.addEventListener("tb-language-change", updateResetTime);
})();
