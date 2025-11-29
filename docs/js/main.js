(() => {
    const defaultBaseCosts = {
        scoutingEvents: 1000000,
        attackEvents: 1000000,
        portal: 1000000,
        hero: 1500,
        captain: 1000,
        monsters12: 8640,
        monsters37: 1300,
        spearmenArchers: 40,
        specialistRiders: 80,
        spies: 100,
        griffins: 800,
        catapultsWalls: 200,
        mercGuard: 120,
        mercMonster: 3000,
        gold: 3000,
        tar: 1000,
        fortScout: 5000000,
        fortAttack: 10000000,
        fortDestroy: 20000000,
        capScout: 5000000,
        capAttack: 10000000,
        capDestroy: 50000000
    };

    const baseCostOrder = [
        { id: "scoutingEvents", label: "Scouting Events" },
        { id: "attackEvents", label: "Attack Events" },
        { id: "portal", label: "Portal" },
        { id: "hero", label: "Hero" },
        { id: "captain", label: "Captain" },
        { id: "monsters12", label: "Monsters 1-2" },
        { id: "monsters37", label: "Monsters 3-7" },
        { id: "spearmenArchers", label: "Spearmen / Archers" },
        { id: "specialistRiders", label: "Specialist / Riders" },
        { id: "spies", label: "Spies" },
        { id: "griffins", label: "Griffins" },
        { id: "catapultsWalls", label: "Catapults / Walls" },
        { id: "mercGuard", label: "Mercenary Guard" },
        { id: "mercMonster", label: "Mercenary Monster" },
        { id: "gold", label: "Gold" },
        { id: "tar", label: "Tar" },
        { id: "fortScout", label: "Fort Scouting" },
        { id: "fortAttack", label: "Fort Attack (not destroyed)" },
        { id: "fortDestroy", label: "Fort Attack (destroyed)" },
        { id: "capScout", label: "Capital Scouting" },
        { id: "capAttack", label: "Capital Attack (not destroyed)" },
        { id: "capDestroy", label: "Capital Attack (destroyed)" }
    ];

    const clanBaseOrder = [
        { id: "fortScout", label: "Fort Scouting" },
        { id: "fortAttack", label: "Fort Attack (no destruction)" },
        { id: "fortDestroy", label: "Fort Attack (destroyed)" },
        { id: "capScout", label: "Capital Scouting" },
        { id: "capAttack", label: "Capital Attack (no destruction)" },
        { id: "capDestroy", label: "Capital Attack (destroyed)" }
    ];

    const clanCategories = [
        { id: "fortScout", label: "Fort Scouting", resources: null },
        { id: "fortAttack", label: "Fort Attack (hit)", resources: null },
        { id: "fortDestroy", label: "Fort Attack (destroy)", resources: { lumber: true, stone: true, iron: true } },
        { id: "capScout", label: "Capital Scouting", resources: null },
        { id: "capAttack", label: "Capital Attack (hit)", resources: null },
        { id: "capDestroy", label: "Capital Attack (destroy)", resources: { lumber: true, stone: true, iron: true } }
    ];

    const flatCategories = [
        { id: "scoutingEvents", label: "Scouting Events" },
        { id: "attackEvents", label: "Attack Events" },
        { id: "portal", label: "Portal" },
        { id: "hero", label: "Hero" },
        { id: "captain", label: "Captain" },
        { id: "monsters12", label: "Monsters 1-2" },
        { id: "gold", label: "Gold" },
        { id: "tar", label: "Tar" }
    ];

    const tierCategories = [
        {
            id: "spearmenArchers",
            label: "Spearmen / Archers",
            levels: [1, 2, 3, 4, 5, 6, 7],
            multiplier: "tier"
        },
        {
            id: "specialistRiders",
            label: "Specialist / Riders",
            levels: [1, 2, 3, 4, 5, 6, 7],
            multiplier: "tier"
        },
        {
            id: "spies",
            label: "Spies",
            levels: [1, 2, 3, 4, 5, 6, 7],
            multiplier: "tier"
        },
        {
            id: "griffins",
            label: "Griffins",
            levels: [1, 2, 3, 4, 5, 6, 7],
            multiplier: "tier"
        },
        {
            id: "catapultsWalls",
            label: "Catapults / Walls",
            levels: [1, 2, 3, 4, 5, 6, 7],
            multiplier: "tier"
        },
        {
            id: "mercGuard",
            label: "Mercenary Guard",
            levels: [1, 2, 3, 4, 5, 6, 7],
            multiplier: "tier"
        },
        {
            id: "mercMonster",
            label: "Mercenary Monster",
            levels: [1, 2, 3, 4, 5, 6, 7],
            multiplier: "tier"
        },
        {
            id: "monsters37",
            label: "Monsters 3-7",
            levels: [3, 4, 5, 6, 7],
            multiplier: "tierMinusTwo"
        }
    ];

    const baseCostInputs = new Map();
    const basePills = new Map();
    let baseCostsCollapsed = true;
    let clanCollapsed = true;

    const formatInteger = (value) => {
        const num = Number(value);
        if (!Number.isFinite(num)) return "0";
        const rounded = Math.round(num);
        const sign = rounded < 0 ? "-" : "";
        const digits = Math.abs(rounded).toString();
        const withCommas = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return sign + withCommas;
    };

    const formatLine = (label, value) => `${label}: ${value}`;

    const parseNonNegative = (value) => {
        const cleaned = `${value ?? ""}`.replace(/,/g, "");
        const num = Number(cleaned);
        if (!Number.isFinite(num) || num < 0) return 0;
        return num;
    };

    const renderBaseCosts = () => {
        const container = document.getElementById("base-costs");
        baseCostOrder.forEach(({ id, label }) => {
            const field = document.createElement("div");
            field.className = "field";

            const labelEl = document.createElement("label");
            labelEl.htmlFor = `base-${id}`;
            labelEl.textContent = label;

            const input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.id = `base-${id}`;
            input.value = defaultBaseCosts[id];
            input.inputMode = "numeric";

            baseCostInputs.set(id, input);

            field.appendChild(labelEl);
            field.appendChild(input);
            container.appendChild(field);
        });
    };

    const renderClanBaseCosts = () => {
        const container = document.getElementById("clan-base-costs");
        clanBaseOrder.forEach(({ id, label }) => {
            const field = document.createElement("div");
            field.className = "field";

            const labelEl = document.createElement("label");
            labelEl.htmlFor = `clan-base-${id}`;
            labelEl.textContent = label;

            const input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.id = `clan-base-${id}`;
            input.value = defaultBaseCosts[id];
            input.inputMode = "numeric";

            baseCostInputs.set(id, input);

            field.appendChild(labelEl);
            field.appendChild(input);
            container.appendChild(field);
        });
    };

    const makeBasePill = (id) => {
        const pill = document.createElement("span");
        pill.className = "pill";
        pill.dataset.baseId = id;
        pill.textContent = `Base: ${defaultBaseCosts[id]}`;
        basePills.set(id, pill);
        return pill;
    };

    const refreshBasePills = () => {
        basePills.forEach((pill, id) => {
            pill.textContent = `Base: ${formatInteger(getBase(id))}`;
        });
    };

    const renderFlatLosses = () => {
        const container = document.getElementById("flat-losses");
        flatCategories.forEach(({ id, label }) => {
            const card = document.createElement("div");
            card.className = "card";

            const title = document.createElement("div");
            title.className = "card__title";
            const h3 = document.createElement("h3");
            h3.textContent = label;
            title.append(h3);

            const meta = document.createElement("div");
            meta.className = "card__meta";
            const pill = makeBasePill(id);
            const formula = document.createElement("span");
            formula.className = "formula";
            formula.textContent = "Base × Count";
            meta.append(pill, formula);

            const field = document.createElement("div");
            field.className = "field";
            const labelEl = document.createElement("label");
            labelEl.htmlFor = `count-${id}`;
            labelEl.textContent = "Count";
            const input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.id = `count-${id}`;
            input.placeholder = "0";
            input.inputMode = "numeric";
            field.append(labelEl, input);

            card.append(title, meta, field);
            container.appendChild(card);
        });
    };

    const renderClanLosses = () => {
        const container = document.getElementById("clan-losses");
        clanCategories.forEach(({ id, label }) => {
            const card = document.createElement("div");
            card.className = "card";

            const title = document.createElement("div");
            title.className = "card__title";
            const h3 = document.createElement("h3");
            h3.textContent = label;
            title.append(h3);

            const meta = document.createElement("div");
            meta.className = "card__meta";
            const pill = makeBasePill(id);
            const formula = document.createElement("span");
            formula.className = "formula";
            formula.textContent = "Base × Count";
            meta.append(pill, formula);

            const field = document.createElement("div");
            field.className = "field";
            const labelEl = document.createElement("label");
            labelEl.htmlFor = `clan-count-${id}`;
            labelEl.textContent = "Count";
            const input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.id = `clan-count-${id}`;
            input.placeholder = "0";
            input.inputMode = "numeric";
            field.append(labelEl, input);

            card.append(title, meta, field);
            container.appendChild(card);
        });
    };

    const renderTierLosses = () => {
        const container = document.getElementById("tier-losses");
        tierCategories.forEach(({ id, label, levels, multiplier }) => {
            const card = document.createElement("div");
            card.className = "card";

            const title = document.createElement("div");
            title.className = "card__title";
            const h3 = document.createElement("h3");
            h3.textContent = label;
            title.append(h3);

            const meta = document.createElement("div");
            meta.className = "card__meta";
            const pill = makeBasePill(id);
            const formula = document.createElement("span");
            formula.className = "formula";
            formula.textContent =
                multiplier === "tierMinusTwo"
                    ? "Base × Count × (Lvl − 2)"
                    : "Base × Count × Lvl";
            meta.append(pill, formula);

            const levelsWrap = document.createElement("div");
            levelsWrap.className = "level-grid";

            levels.forEach((lvl) => {
                const field = document.createElement("div");
                field.className = "field";
                const labelEl = document.createElement("label");
                labelEl.htmlFor = `count-${id}-lvl${lvl}`;
                labelEl.textContent = `L${lvl} Count`;
                const input = document.createElement("input");
                input.type = "number";
                input.min = "0";
                input.id = `count-${id}-lvl${lvl}`;
                input.placeholder = "0";
                input.inputMode = "numeric";
                field.append(labelEl, input);
                levelsWrap.appendChild(field);
            });

            card.append(title, meta, levelsWrap);
            container.appendChild(card);
        });
    };

    const getBase = (id) => {
        const input = baseCostInputs.get(id);
        return input ? parseNonNegative(input.value) : 0;
    };

    const sumFlat = () => {
        const totals = {};
        flatCategories.forEach(({ id }) => {
            const base = getBase(id);
            const count = parseNonNegative(document.getElementById(`count-${id}`)?.value);
            totals[id] = Math.round(base * count);
        });
        return totals;
    };

    const sumTiered = () => {
        const totals = {};
        tierCategories.forEach(({ id, levels, multiplier }) => {
            const base = getBase(id);
            let subtotal = 0;
            levels.forEach((lvl) => {
                const count = parseNonNegative(document.getElementById(`count-${id}-lvl${lvl}`)?.value);
                const mult = multiplier === "tierMinusTwo" ? Math.max(lvl - 2, 0) : lvl;
                subtotal += base * count * mult;
            });
            totals[id] = Math.round(subtotal);
        });
        return totals;
    };

    const sumClan = () => {
        const includeClan = document.getElementById("include-clan")?.checked;
        const totals = {};
        let silver = 0;
        const resources = { food: 0, lumber: 0, stone: 0, iron: 0 };
        if (!includeClan) {
            clanCategories.forEach(({ id }) => (totals[id] = 0));
            return { totals, silver, resources };
        }
        clanCategories.forEach(({ id, resources: resKeys }) => {
            const base = getBase(id);
            const count = parseNonNegative(document.getElementById(`clan-count-${id}`)?.value);
            const subtotal = Math.round(base * count);
            totals[id] = subtotal;
            silver += subtotal;
            if (resKeys) {
                if (resKeys.lumber) resources.lumber += base * count;
                if (resKeys.stone) resources.stone += base * count;
                if (resKeys.iron) resources.iron += base * count;
            }
        });
        return { totals, silver, resources };
    };

    const calculate = () => {
        const includeClan = document.getElementById("include-clan")?.checked;
        const flatTotals = sumFlat();
        const tierTotals = sumTiered();
        const clanTotals = sumClan();
        const directSilver = parseNonNegative(document.getElementById("direct-silver")?.value);

        const silverSubtotal =
            flatTotals.scoutingEvents +
            flatTotals.attackEvents +
            flatTotals.portal +
            flatTotals.hero +
            flatTotals.captain +
            flatTotals.monsters12 +
            tierTotals.monsters37 +
            tierTotals.spearmenArchers +
            tierTotals.specialistRiders +
            tierTotals.spies +
            tierTotals.griffins +
            tierTotals.catapultsWalls +
            tierTotals.mercGuard +
            tierTotals.mercMonster +
            flatTotals.gold +
            flatTotals.tar +
            clanTotals.silver;

        const monstersTotal = flatTotals.monsters12 + tierTotals.monsters37 + tierTotals.griffins;
        const mercsTotal = tierTotals.mercGuard + tierTotals.mercMonster;
        const heroCaptainsTotal = flatTotals.hero + flatTotals.captain;

        const totalLoss = silverSubtotal + directSilver;
        const totalWithTax = Math.round(totalLoss / 0.8);

        const resourcesRaw = {
            food: document.getElementById("res-food")?.value.trim() || "0",
            lumber: document.getElementById("res-lumber")?.value.trim() || "0",
            stone: document.getElementById("res-stone")?.value.trim() || "0",
            iron: document.getElementById("res-iron")?.value.trim() || "0"
        };
        const resources = {
            food: formatInteger(parseNonNegative(resourcesRaw.food) + clanTotals.resources.food),
            lumber: formatInteger(parseNonNegative(resourcesRaw.lumber) + clanTotals.resources.lumber),
            stone: formatInteger(parseNonNegative(resourcesRaw.stone) + clanTotals.resources.stone),
            iron: formatInteger(parseNonNegative(resourcesRaw.iron) + clanTotals.resources.iron)
        };

        document.getElementById("silver-subtotal").textContent = formatInteger(silverSubtotal);
        document.getElementById("total-loss").textContent = formatInteger(totalLoss);

        const barLength = 33;
        const bar = "=".repeat(barLength);
        const divider = "-".repeat(barLength);
        const lines = [
            bar
        ];

        if (includeClan) {
            lines.push(
                "CLAN BUILDINGS",
                formatLine(" Fort Scouting                 ", formatInteger(clanTotals.totals.fortScout || 0)),
                formatLine(" Fort Attack (hit)            ", formatInteger(clanTotals.totals.fortAttack || 0)),
                formatLine(" Fort Attack (destroy)     ", formatInteger(clanTotals.totals.fortDestroy || 0)),
                formatLine(" Capital Scouting            ", formatInteger(clanTotals.totals.capScout || 0)),
                formatLine(" Capital Attack (destroy) ", formatInteger(clanTotals.totals.capDestroy || 0)),
                divider
            );
        }

        lines.push(
            "ARMY LOSS",
            formatLine(" Scout Events         ", formatInteger(flatTotals.scoutingEvents)),      // 7 spaces
            formatLine(" Attack Events        ", formatInteger(flatTotals.attackEvents)),      // 6 spaces
            formatLine(" Portal Closed         ", formatInteger(flatTotals.portal)),            // 7 spaces
            formatLine(" Hero/Captains       ", formatInteger(heroCaptainsTotal)),             // 6 spaces
            formatLine(" Spearmen/Archers ", formatInteger(tierTotals.spearmenArchers)),      // 1 space
            formatLine(" Specialists/Riders  ", formatInteger(tierTotals.specialistRiders)),  // 2 spaces
            formatLine(" Spies Total              ", formatInteger(tierTotals.spies)),           // 11 spaces
            formatLine(" Monsters Total       ", formatInteger(monstersTotal)),                 // 6 spaces
            formatLine(" Mercenaries            ", formatInteger(mercsTotal)),                    // 9 spaces
            formatLine(" Walls/Catapult        ", formatInteger(tierTotals.catapultsWalls)),     // 6 spaces
            "ADDITIONAL LOSS",
            formatLine(" Gold Total                ", formatInteger(flatTotals.gold)),              // 12 spaces
            formatLine(" Tar Total                   ", formatInteger(flatTotals.tar)),              // 14 spaces
            formatLine(" Direct Silver             ", formatInteger(directSilver)),                // 10 spaces
            divider,
            formatLine(" TOTAL SILVER LOSS      ", formatInteger(totalLoss)),                  // 7 spaces
            formatLine(" TOTAL (W/ 20% TAX)    ", formatInteger(totalWithTax)),
            bar,
            "RESOURCE LOSS",
            formatLine(" Food                       ", resources.food || "0"),                       // 19 spaces
            formatLine(" Lumber                  ", resources.lumber || "0"),                      // 16 spaces
            formatLine(" Stone                      ", resources.stone || "0"),                      // 18 spaces
            formatLine(" Iron                        ", resources.iron || "0"),                     // 20 spaces
            bar
        );

        document.getElementById("summary-text").value = lines.join("\n");
        refreshBasePills();
    };

    const setBaseCostsCollapsed = (collapsed) => {
        baseCostsCollapsed = collapsed;
        const wrap = document.getElementById("base-costs-wrap");
        const toggle = document.getElementById("toggle-base-costs");
        if (!wrap || !toggle) return;

        if (collapsed) {
            wrap.classList.add("is-collapsed");
            wrap.style.maxHeight = "0px";
            wrap.setAttribute("aria-hidden", "true");
            toggle.textContent = "Show";
            toggle.setAttribute("aria-expanded", "false");
        } else {
            wrap.classList.remove("is-collapsed");
            wrap.style.maxHeight = `${wrap.scrollHeight}px`;
            wrap.setAttribute("aria-hidden", "false");
            toggle.textContent = "Hide";
            toggle.setAttribute("aria-expanded", "true");
        }
    };

    const copySummary = async () => {
        const textarea = document.getElementById("summary-text");
        const text = textarea.value;
        if (!text) return;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            try {
                await navigator.clipboard.writeText(text);
                textarea.setSelectionRange(0, text.length);
                return;
            } catch (err) {
                // Fallback below
            }
        }
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
    };

    const setClanCollapsed = (collapsed) => {
        clanCollapsed = collapsed;
        const wrap = document.getElementById("clan-wrap");
        const toggle = document.getElementById("toggle-clan");
        if (!wrap || !toggle) return;

        if (collapsed) {
            wrap.classList.add("is-collapsed");
            wrap.style.maxHeight = "0px";
            wrap.setAttribute("aria-hidden", "true");
            toggle.textContent = "Show";
            toggle.setAttribute("aria-expanded", "false");
        } else {
            wrap.classList.remove("is-collapsed");
            wrap.style.maxHeight = `${wrap.scrollHeight}px`;
            wrap.setAttribute("aria-hidden", "false");
            toggle.textContent = "Hide";
            toggle.setAttribute("aria-expanded", "true");
        }
    };

    const resetInputs = () => {
        baseCostOrder.forEach(({ id }) => {
            const input = baseCostInputs.get(id);
            if (input) input.value = defaultBaseCosts[id];
        });

        flatCategories.forEach(({ id }) => {
            const input = document.getElementById(`count-${id}`);
            if (input) input.value = "";
        });

        tierCategories.forEach(({ id, levels }) => {
            levels.forEach((lvl) => {
                const input = document.getElementById(`count-${id}-lvl${lvl}`);
                if (input) input.value = "";
            });
        });

        clanCategories.forEach(({ id }) => {
            const baseInput = baseCostInputs.get(id);
            if (baseInput) baseInput.value = defaultBaseCosts[id];
            const countInput = document.getElementById(`clan-count-${id}`);
            if (countInput) countInput.value = "";
        });

        document.getElementById("direct-silver").value = "";
        document.getElementById("res-food").value = "";
        document.getElementById("res-lumber").value = "";
        document.getElementById("res-stone").value = "";
        document.getElementById("res-iron").value = "";

        calculate();
    };

    const bindEvents = () => {
        document.getElementById("calculate-btn").addEventListener("click", calculate);
        document.getElementById("copy-btn").addEventListener("click", copySummary);
        document.getElementById("reset-btn").addEventListener("click", resetInputs);
        document.getElementById("toggle-base-costs").addEventListener("click", () => {
            setBaseCostsCollapsed(!baseCostsCollapsed);
        });
        document.getElementById("toggle-clan").addEventListener("click", () => {
            setClanCollapsed(!clanCollapsed);
        });

        document.addEventListener("input", (event) => {
            const target = event.target;
            if (target.tagName === "INPUT") {
                calculate();
            }
        });
    };

    document.addEventListener("DOMContentLoaded", () => {
        renderBaseCosts();
        renderFlatLosses();
        renderTierLosses();
        renderClanLosses();
        bindEvents();
        setBaseCostsCollapsed(true);
        setClanCollapsed(true);
        calculate();
    });
})();
