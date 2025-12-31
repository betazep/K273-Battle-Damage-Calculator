(() => {
    const defaultBaseCosts = {
        scoutingEvents: 1000000,
        attackEvents: 1000000,
        portal: 1000000,
        hero: 1500,
        captain: 1000,
        monsters12: 8640,
        monsters37: 1300,
        spearmen: 40,
        archers: 40,
        riders: 80,
        specialists: 80,
        spies: 100,
        griffins: 800,
        walls: 200,
        catapults: 200,
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
        { id: "scoutingEvents", labelKey: "calc.base.scoutingEvents" },
        { id: "attackEvents", labelKey: "calc.base.attackEvents" },
        { id: "portal", labelKey: "calc.base.portal" },
        { id: "hero", labelKey: "calc.base.hero" },
        { id: "captain", labelKey: "calc.base.captain" },
        { id: "monsters12", labelKey: "calc.base.monsters12" },
        { id: "monsters37", labelKey: "calc.base.monsters37" },
        { id: "spearmen", labelKey: "calc.base.spearmen" },
        { id: "archers", labelKey: "calc.base.archers" },
        { id: "riders", labelKey: "calc.base.riders" },
        { id: "specialists", labelKey: "calc.base.specialists" },
        { id: "spies", labelKey: "calc.base.spies" },
        { id: "griffins", labelKey: "calc.base.griffins" },
        { id: "walls", labelKey: "calc.base.walls" },
        { id: "catapults", labelKey: "calc.base.catapults" },
        { id: "mercGuard", labelKey: "calc.base.mercGuard" },
        { id: "mercMonster", labelKey: "calc.base.mercMonster" },
        { id: "gold", labelKey: "calc.base.gold" },
        { id: "tar", labelKey: "calc.base.tar" },
        { id: "fortScout", labelKey: "calc.base.fortScout" },
        { id: "fortAttack", labelKey: "calc.base.fortAttack" },
        { id: "fortDestroy", labelKey: "calc.base.fortDestroy" },
        { id: "capScout", labelKey: "calc.base.capScout" },
        { id: "capAttack", labelKey: "calc.base.capAttack" },
        { id: "capDestroy", labelKey: "calc.base.capDestroy" }
    ];

    const clanBaseOrder = [
        { id: "fortScout", labelKey: "calc.base.fortScout" },
        { id: "fortAttack", labelKey: "calc.base.fortAttack" },
        { id: "fortDestroy", labelKey: "calc.base.fortDestroy" },
        { id: "capScout", labelKey: "calc.base.capScout" },
        { id: "capAttack", labelKey: "calc.base.capAttack" },
        { id: "capDestroy", labelKey: "calc.base.capDestroy" }
    ];

    const clanCategories = [
        { id: "fortScout", labelKey: "calc.output.fortScout" },
        { id: "fortAttack", labelKey: "calc.output.fortAttackHit" },
        { id: "fortDestroy", labelKey: "calc.output.fortAttackDestroy" },
        { id: "capScout", labelKey: "calc.output.capScout" },
        { id: "capAttack", labelKey: "calc.output.capAttackHit" },
        { id: "capDestroy", labelKey: "calc.output.capAttackDestroy" }
    ];

    const flatCategories = [
        { id: "scoutingEvents", labelKey: "calc.base.scoutingEvents" },
        { id: "attackEvents", labelKey: "calc.base.attackEvents" },
        { id: "portal", labelKey: "calc.base.portal" },
        { id: "hero", labelKey: "calc.base.hero" },
        { id: "captain", labelKey: "calc.base.captain" },
        { id: "monsters12", labelKey: "calc.base.monsters12" },
        { id: "gold", labelKey: "calc.base.gold" },
        { id: "tar", labelKey: "calc.base.tar" }
    ];

    const tierCategories = [
        {
            id: "spearmen",
            labelKey: "calc.base.spearmen",
            levels: [1, 2, 3, 4, 5, 6, 7],
            multiplier: "tier"
        },
        {
            id: "archers",
            labelKey: "calc.base.archers",
            levels: [1, 2, 3, 4, 5, 6, 7],
            multiplier: "tier"
        },
        {
            id: "riders",
            labelKey: "calc.base.riders",
            levels: [1, 2, 3, 4, 5, 6, 7],
            multiplier: "tier"
        },
        {
            id: "specialists",
            labelKey: "calc.base.specialists",
            levels: [1, 2, 3, 4, 5, 6, 7],
            multiplier: "tier"
        },
        {
            id: "spies",
            labelKey: "calc.base.spies",
            levels: [1, 2, 3, 4, 5, 6, 7],
            multiplier: "tier"
        },
        {
            id: "griffins",
            labelKey: "calc.base.griffins",
            levels: [1, 2, 3, 4, 5, 6, 7],
            multiplier: "tier"
        },
        {
            id: "walls",
            labelKey: "calc.base.walls",
            levels: [1, 2, 3, 4, 5, 6, 7],
            multiplier: "tier"
        },
        {
            id: "catapults",
            labelKey: "calc.base.catapults",
            levels: [1, 2, 3, 4, 5, 6, 7],
            multiplier: "tier"
        },
        {
            id: "mercGuard",
            labelKey: "calc.base.mercGuard",
            levels: [1, 2, 3, 4, 5, 6, 7],
            multiplier: "tier"
        },
        {
            id: "mercMonster",
            labelKey: "calc.base.mercMonster",
            levels: [1, 2, 3, 4, 5, 6, 7],
            multiplier: "tier"
        },
        {
            id: "monsters37",
            labelKey: "calc.base.monsters37",
            levels: [3, 4, 5, 6, 7],
            multiplier: "tierMinusTwo"
        }
    ];

    const baseCostInputs = new Map();
    const basePills = new Map();
    const dynamicLabels = [];
    const dynamicFormulas = [];
    let baseCostsCollapsed = true;
    let clanCollapsed = true;

    const getLabel = (key) => (window.I18N ? I18N.t(key) : key);

    const registerLabel = (el, key, level = null) => {
        el.dataset.i18nKey = key;
        if (level !== null) {
            el.dataset.level = level;
        }
        dynamicLabels.push(el);
    };

    const registerFormula = (el, key) => {
        el.dataset.i18nKey = key;
        dynamicFormulas.push(el);
    };

    const updateDynamicLabels = () => {
        dynamicLabels.forEach((el) => {
            const key = el.dataset.i18nKey;
            if (!key) return;
            if (el.dataset.level) {
                el.textContent = `L${el.dataset.level} ${getLabel(key)}`;
                return;
            }
            el.textContent = getLabel(key);
        });
        dynamicFormulas.forEach((el) => {
            const key = el.dataset.i18nKey;
            if (!key) return;
            el.textContent = getLabel(key);
        });
        refreshBasePills();
    };

    const formatInteger = (value) => {
        const num = Number(value);
        if (!Number.isFinite(num)) return "0";
        const rounded = Math.round(num);
        const sign = rounded < 0 ? "-" : "";
        const digits = Math.abs(rounded).toString();
        const withCommas = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return sign + withCommas;
    };

    const TAB_WIDTH = 8;

    const getMaxValueLength = (values) =>
        values.reduce((max, value) => Math.max(max, value.length), 0);

    const formatValueLine = (value, label, maxValueLength) => {
        const paddedValue = value.padStart(maxValueLength, " ");
        return `${paddedValue}\t${label}`;
    };

    const parseNonNegative = (value) => {
        const cleaned = `${value ?? ""}`.replace(/,/g, "");
        const num = Number(cleaned);
        if (!Number.isFinite(num) || num < 0) return 0;
        return num;
    };

    const renderBaseCosts = () => {
        const container = document.getElementById("base-costs");
        baseCostOrder.forEach(({ id, labelKey }) => {
            const field = document.createElement("div");
            field.className = "field";

            const labelEl = document.createElement("label");
            labelEl.htmlFor = `base-${id}`;
            labelEl.textContent = getLabel(labelKey);
            registerLabel(labelEl, labelKey);

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
        clanBaseOrder.forEach(({ id, labelKey }) => {
            const field = document.createElement("div");
            field.className = "field";

            const labelEl = document.createElement("label");
            labelEl.htmlFor = `clan-base-${id}`;
            labelEl.textContent = getLabel(labelKey);
            registerLabel(labelEl, labelKey);

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
        pill.textContent = `${getLabel("calculator.base.pill")}: ${defaultBaseCosts[id]}`;
        basePills.set(id, pill);
        return pill;
    };

    const refreshBasePills = () => {
        basePills.forEach((pill, id) => {
            pill.textContent = `${getLabel("calculator.base.pill")}: ${formatInteger(getBase(id))}`;
        });
    };

    const renderFlatLosses = () => {
        const container = document.getElementById("flat-losses");
        flatCategories.forEach(({ id, labelKey }) => {
            const card = document.createElement("div");
            card.className = "card";

            const title = document.createElement("div");
            title.className = "card__title";
            const h3 = document.createElement("h3");
            h3.textContent = getLabel(labelKey);
            registerLabel(h3, labelKey);
            title.append(h3);

            const meta = document.createElement("div");
            meta.className = "card__meta";
            const pill = makeBasePill(id);
            const formula = document.createElement("span");
            formula.className = "formula";
            formula.textContent = getLabel("calculator.formula.baseCount");
            registerFormula(formula, "calculator.formula.baseCount");
            meta.append(pill, formula);

            const field = document.createElement("div");
            field.className = "field";
            const labelEl = document.createElement("label");
            labelEl.htmlFor = `count-${id}`;
            labelEl.textContent = getLabel("calculator.label.count");
            registerLabel(labelEl, "calculator.label.count");
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
        clanCategories.forEach(({ id, labelKey }) => {
            const card = document.createElement("div");
            card.className = "card";

            const title = document.createElement("div");
            title.className = "card__title";
            const h3 = document.createElement("h3");
            h3.textContent = getLabel(labelKey);
            registerLabel(h3, labelKey);
            title.append(h3);

            const meta = document.createElement("div");
            meta.className = "card__meta";
            const pill = makeBasePill(id);
            const formula = document.createElement("span");
            formula.className = "formula";
            formula.textContent = getLabel("calculator.formula.baseCount");
            registerFormula(formula, "calculator.formula.baseCount");
            meta.append(pill, formula);

            const field = document.createElement("div");
            field.className = "field";
            const labelEl = document.createElement("label");
            labelEl.htmlFor = `clan-count-${id}`;
            labelEl.textContent = getLabel("calculator.label.count");
            registerLabel(labelEl, "calculator.label.count");
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
        tierCategories.forEach(({ id, labelKey, levels, multiplier }) => {
            const card = document.createElement("div");
            card.className = "card";

            const title = document.createElement("div");
            title.className = "card__title";
            const h3 = document.createElement("h3");
            h3.textContent = getLabel(labelKey);
            registerLabel(h3, labelKey);
            title.append(h3);

            const meta = document.createElement("div");
            meta.className = "card__meta";
            const pill = makeBasePill(id);
            const formula = document.createElement("span");
            formula.className = "formula";
            const formulaKey =
                multiplier === "tierMinusTwo"
                    ? "calculator.formula.baseCountLevelMinusTwo"
                    : "calculator.formula.baseCountLevel";
            formula.textContent = getLabel(formulaKey);
            registerFormula(formula, formulaKey);
            meta.append(pill, formula);

            const levelsWrap = document.createElement("div");
            levelsWrap.className = "level-grid";

            levels.forEach((lvl) => {
                const field = document.createElement("div");
                field.className = "field";
                const labelEl = document.createElement("label");
                labelEl.htmlFor = `count-${id}-lvl${lvl}`;
                labelEl.textContent = `L${lvl} ${getLabel("calculator.label.count")}`;
                registerLabel(labelEl, "calculator.label.count", lvl);
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
        if (!includeClan) {
            clanCategories.forEach(({ id }) => (totals[id] = 0));
            return { totals, silver };
        }
        clanCategories.forEach(({ id }) => {
            const base = getBase(id);
            const count = parseNonNegative(document.getElementById(`clan-count-${id}`)?.value);
            const subtotal = Math.round(base * count);
            totals[id] = subtotal;
            silver += subtotal;
        });
        return { totals, silver };
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
            tierTotals.spearmen +
            tierTotals.archers +
            tierTotals.riders +
            tierTotals.specialists +
            tierTotals.spies +
            tierTotals.griffins +
            tierTotals.walls +
            tierTotals.catapults +
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
        const resourcesNumeric = {
            food: parseNonNegative(resourcesRaw.food),
            lumber: parseNonNegative(resourcesRaw.lumber),
            stone: parseNonNegative(resourcesRaw.stone),
            iron: parseNonNegative(resourcesRaw.iron)
        };
        const resources = {
            food: formatInteger(resourcesNumeric.food),
            lumber: formatInteger(resourcesNumeric.lumber),
            stone: formatInteger(resourcesNumeric.stone),
            iron: formatInteger(resourcesNumeric.iron)
        };
        const resourcesWithTax = {
            food: formatInteger(Math.round(resourcesNumeric.food / 0.8)),
            lumber: formatInteger(Math.round(resourcesNumeric.lumber / 0.8)),
            stone: formatInteger(Math.round(resourcesNumeric.stone / 0.8)),
            iron: formatInteger(Math.round(resourcesNumeric.iron / 0.8))
        };

        document.getElementById("silver-subtotal").textContent = formatInteger(silverSubtotal);
        document.getElementById("total-loss").textContent = formatInteger(totalLoss);

        const dividerLength = 33;
        const barLength = dividerLength - 10;
        const bar = "=".repeat(barLength);
        const divider = "-".repeat(dividerLength);
        const lines = [bar];

        const valuesForAlignment = [];
        if (includeClan) {
            valuesForAlignment.push(
                formatInteger(clanTotals.totals.fortScout || 0),
                formatInteger(clanTotals.totals.fortAttack || 0),
                formatInteger(clanTotals.totals.fortDestroy || 0),
                formatInteger(clanTotals.totals.capScout || 0),
                formatInteger(clanTotals.totals.capDestroy || 0)
            );
        }
        valuesForAlignment.push(
            formatInteger(flatTotals.scoutingEvents),
            formatInteger(flatTotals.attackEvents),
            formatInteger(flatTotals.portal),
            formatInteger(heroCaptainsTotal),
            formatInteger(tierTotals.spearmen),
            formatInteger(tierTotals.archers),
            formatInteger(tierTotals.riders),
            formatInteger(tierTotals.specialists),
            formatInteger(tierTotals.spies),
            formatInteger(monstersTotal),
            formatInteger(mercsTotal),
            formatInteger(tierTotals.walls),
            formatInteger(tierTotals.catapults),
            formatInteger(flatTotals.gold),
            formatInteger(flatTotals.tar),
            formatInteger(directSilver),
            formatInteger(totalLoss),
            formatInteger(totalWithTax),
            resources.food || "0",
            resources.lumber || "0",
            resources.stone || "0",
            resources.iron || "0"
        );

        const maxValueLength = getMaxValueLength(valuesForAlignment);

        if (includeClan) {
            lines.push(
                getLabel("calc.output.clanBuildings"),
                formatValueLine(formatInteger(clanTotals.totals.fortScout || 0), getLabel("calc.output.fortScout"), maxValueLength),
                formatValueLine(formatInteger(clanTotals.totals.fortAttack || 0), getLabel("calc.output.fortAttackHit"), maxValueLength),
                formatValueLine(formatInteger(clanTotals.totals.fortDestroy || 0), getLabel("calc.output.fortAttackDestroy"), maxValueLength),
                formatValueLine(formatInteger(clanTotals.totals.capScout || 0), getLabel("calc.output.capScout"), maxValueLength),
                formatValueLine(formatInteger(clanTotals.totals.capDestroy || 0), getLabel("calc.output.capAttackDestroy"), maxValueLength),
                divider
            );
        }

        lines.push(
            getLabel("calc.output.armyLoss"),
            formatValueLine(formatInteger(flatTotals.scoutingEvents), getLabel("calc.output.scoutEvents"), maxValueLength),
            formatValueLine(formatInteger(flatTotals.attackEvents), getLabel("calc.output.attackEvents"), maxValueLength),
            formatValueLine(formatInteger(flatTotals.portal), getLabel("calc.output.portalClosed"), maxValueLength),
            formatValueLine(formatInteger(heroCaptainsTotal), getLabel("calc.output.heroCaptains"), maxValueLength),
            formatValueLine(formatInteger(tierTotals.spearmen), getLabel("calc.output.spearmen"), maxValueLength),
            formatValueLine(formatInteger(tierTotals.archers), getLabel("calc.output.archers"), maxValueLength),
            formatValueLine(formatInteger(tierTotals.riders), getLabel("calc.output.riders"), maxValueLength),
            formatValueLine(formatInteger(tierTotals.specialists), getLabel("calc.output.specialists"), maxValueLength),
            formatValueLine(formatInteger(tierTotals.spies), getLabel("calc.output.spiesTotal"), maxValueLength),
            formatValueLine(formatInteger(monstersTotal), getLabel("calc.output.monstersTotal"), maxValueLength),
            formatValueLine(formatInteger(mercsTotal), getLabel("calc.output.mercenaries"), maxValueLength),
            formatValueLine(formatInteger(tierTotals.walls), getLabel("calc.output.walls"), maxValueLength),
            formatValueLine(formatInteger(tierTotals.catapults), getLabel("calc.output.catapults"), maxValueLength),
            divider,
            getLabel("calc.output.additionalLoss"),
            formatValueLine(formatInteger(flatTotals.gold), getLabel("calc.output.goldTotal"), maxValueLength),
            formatValueLine(formatInteger(flatTotals.tar), getLabel("calc.output.tarTotal"), maxValueLength),
            formatValueLine(formatInteger(directSilver), getLabel("calc.output.directSilver"), maxValueLength),
            divider,
            formatValueLine(formatInteger(totalLoss), getLabel("calc.output.totalSilverLoss"), maxValueLength),
            bar,
            getLabel("calc.output.resourceLoss"),
            formatValueLine(formatInteger(totalWithTax), getLabel("calc.output.totalWithTax"), maxValueLength),
            formatValueLine(
                resourcesWithTax.food || "0",
                `${getLabel("calc.output.food")} ${getLabel("calc.output.withTaxSuffix")}`,
                maxValueLength
            ),
            formatValueLine(
                resourcesWithTax.lumber || "0",
                `${getLabel("calc.output.lumber")} ${getLabel("calc.output.withTaxSuffix")}`,
                maxValueLength
            ),
            formatValueLine(
                resourcesWithTax.stone || "0",
                `${getLabel("calc.output.stone")} ${getLabel("calc.output.withTaxSuffix")}`,
                maxValueLength
            ),
            formatValueLine(
                resourcesWithTax.iron || "0",
                `${getLabel("calc.output.iron")} ${getLabel("calc.output.withTaxSuffix")}`,
                maxValueLength
            ),
            bar,
            getLabel("calc.output.taxNote")
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
            toggle.textContent = getLabel("common.show");
            toggle.setAttribute("aria-expanded", "false");
        } else {
            wrap.classList.remove("is-collapsed");
            wrap.style.maxHeight = `${wrap.scrollHeight}px`;
            wrap.setAttribute("aria-hidden", "false");
            toggle.textContent = getLabel("common.hide");
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
            toggle.textContent = getLabel("common.show");
            toggle.setAttribute("aria-expanded", "false");
        } else {
            wrap.classList.remove("is-collapsed");
            wrap.style.maxHeight = `${wrap.scrollHeight}px`;
            wrap.setAttribute("aria-hidden", "false");
            toggle.textContent = getLabel("common.hide");
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
        updateDynamicLabels();
        calculate();

        document.addEventListener("tb-language-change", () => {
            updateDynamicLabels();
            setBaseCostsCollapsed(baseCostsCollapsed);
            setClanCollapsed(clanCollapsed);
            calculate();
        });
    });
})();
