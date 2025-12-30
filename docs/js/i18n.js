(() => {
    const translations = {
        en: {
            strings: {
                "site.languageLabel": "Language",
                "site.footer": "Built for K273 by Zee",
                "index.title": "TotalBattle Kingdom 273",
                "index.hero.eyebrow": "K273 | Tools & Links",
                "index.hero.title": "TotalBattle Kingdom 273",
                "index.hero.lede": "Quick access to our calculators and resources.",
                "index.palace.eyebrow": "Palace",
                "index.palace.card.title": "Palace Roles & ROE",
                "index.palace.card.body": "Check the latest palace assignments and the rules of engagement agreed by the kingdom.",
                "index.palace.card.button": "Open Palace Page",
                "index.tools.eyebrow": "Tools",
                "index.calc.card.title": "Illegal Attack Damage Cost Calculator",
                "index.calc.card.body": "Enter losses and copy the formatted message back to TotalBattle chat.",
                "index.calc.card.button": "Open Calculator",
                "palace.title": "K273 Palace Roles & ROE",
                "palace.hero.eyebrow": "K273 | Palace Overview",
                "palace.hero.title": "Palace Roles & ROE",
                "palace.hero.lede": "Current leadership seats and the rules of engagement for the kingdom.",
                "palace.hero.back": "← Back to Home",
                "palace.roles.eyebrow": "Palace",
                "palace.roles.title": "Current Roles",
                "palace.roles.sub": "Who holds each seat right now.",
                "palace.roles.updated": "Last Updated 12/30/2025",
                "palace.roles.table.role": "Role",
                "palace.roles.table.player": "Player",
                "palace.roles.king": "KING",
                "palace.roles.hand": "Hand of the King",
                "palace.roles.queen": "Queen",
                "palace.roles.centurion": "Centurion",
                "palace.roles.chancellor": "Chancellor",
                "palace.roles.treasurer": "Treasurer",
                "palace.roles.archon": "Archon",
                "palace.roles.quaestor": "Quaestor",
                "palace.roles.tribute": "Tribute",
                "palace.roles.legate": "Legate",
                "palace.image.alt": "TotalBattle palace",
                "palace.roe.eyebrow": "ROE",
                "palace.roe.title": "Rules of Engagement",
                "palace.roe.subtitle": "Kingdom guidelines for combat and conduct.<br>English version is the official ROE (Translations via AI)<br>Last Updated 12/30/2025",
                "palace.back": "← Back to Home",
                "calculator.title": "TotalBattle Damage Calculator",
                "calculator.hero.eyebrow": "K273 | Illegal Attack Calculator",
                "calculator.hero.title": "TotalBattle Damage",
                "calculator.hero.lede": "Enter losses and generate a copy-ready summary for ROE messages.",
                "calculator.hero.back": "← Back to tools",
                "calculator.base.eyebrow": "Base costs",
                "calculator.base.title": "Defaults",
                "calculator.base.sub": "Adjust only if rules change. Values are saved for this session only. (Contact Zee for permanent changes to defaults)",
                "calculator.base.pill": "Base",
                "calculator.clan.eyebrow": "Clan buildings",
                "calculator.clan.title": "Optional losses",
                "calculator.clan.sub": "Include only when forts/capitals are hit. Defaults are editable.",
                "calculator.clan.include": "Include in Report",
                "calculator.armyFlat.eyebrow": "Army losses",
                "calculator.armyFlat.title": "Flat cost entries",
                "calculator.armyFlat.sub": "Enter basic counts for flat cost units lost.",
                "calculator.armyTier.eyebrow": "Army tiered losses",
                "calculator.armyTier.title": "Level-based entries",
                "calculator.armyTier.sub": "Enter counts for each level of units lost.",
                "calculator.summary.eyebrow": "Summary",
                "calculator.summary.title": "Totals & copy block",
                "calculator.summary.sub": "Add in any Silver Taken as well as any resources.",
                "calculator.directSilver": "Silver Taken",
                "calculator.food": "Food",
                "calculator.lumber": "Lumber",
                "calculator.stone": "Stone",
                "calculator.iron": "Iron",
                "calculator.silverSubtotal": "Silver subtotal",
                "calculator.totalLoss": "Total loss (with Silver Taken)",
                "calculator.calculate": "Calculate",
                "calculator.reset": "Reset inputs",
                "calculator.copyLabel": "Copy-ready message",
                "calculator.copyButton": "Copy summary",
                "calculator.back": "← Back to tools",
                "calculator.formula.baseCount": "Base × Count",
                "calculator.formula.baseCountLevel": "Base × Count × Lvl",
                "calculator.formula.baseCountLevelMinusTwo": "Base × Count × (Lvl − 2)",
                "calculator.label.count": "Count",
                "common.show": "Show",
                "common.hide": "Hide",
                "calc.base.scoutingEvents": "Scouting Events",
                "calc.base.attackEvents": "Attack Events",
                "calc.base.portal": "Portal",
                "calc.base.hero": "Hero",
                "calc.base.captain": "Captain",
                "calc.base.monsters12": "Monsters 1-2",
                "calc.base.monsters37": "Monsters 3-7",
                "calc.base.spearmenArchers": "Spearmen / Archers",
                "calc.base.specialistRiders": "Specialist / Riders",
                "calc.base.spies": "Spies",
                "calc.base.griffins": "Griffins",
                "calc.base.catapultsWalls": "Catapults / Walls",
                "calc.base.mercGuard": "Mercenary Guard",
                "calc.base.mercMonster": "Mercenary Monster",
                "calc.base.gold": "Gold",
                "calc.base.tar": "Tar",
                "calc.base.fortScout": "Fort Scouting",
                "calc.base.fortAttack": "Fort Attack (not destroyed)",
                "calc.base.fortDestroy": "Fort Attack (destroyed)",
                "calc.base.capScout": "Capital Scouting",
                "calc.base.capAttack": "Capital Attack (not destroyed)",
                "calc.base.capDestroy": "Capital Attack (destroyed)",
                "calc.output.clanBuildings": "CLAN BUILDINGS",
                "calc.output.armyLoss": "ARMY LOSS",
                "calc.output.additionalLoss": "ADDITIONAL LOSS",
                "calc.output.resourceLoss": "RESOURCE LOSS",
                "calc.output.fortScout": "Fort Scouting",
                "calc.output.fortAttackHit": "Fort Attack (hit)",
                "calc.output.fortAttackDestroy": "Fort Attack (destroy)",
                "calc.output.capScout": "Capital Scouting",
                "calc.output.capAttackHit": "Capital Attack (hit)",
                "calc.output.capAttackDestroy": "Capital Attack (destroy)",
                "calc.output.scoutEvents": "Scout Events",
                "calc.output.attackEvents": "Attack Events",
                "calc.output.portalClosed": "Portal Closed",
                "calc.output.heroCaptains": "Hero/Captains",
                "calc.output.spearmenArchers": "Spearmen/Archers",
                "calc.output.specialistsRiders": "Specialists/Riders",
                "calc.output.spiesTotal": "Spies Total",
                "calc.output.monstersTotal": "Monsters Total",
                "calc.output.mercenaries": "Mercenaries",
                "calc.output.wallsCatapult": "Walls/Catapult",
                "calc.output.goldTotal": "Gold Total",
                "calc.output.tarTotal": "Tar Total",
                "calc.output.directSilver": "Silver Taken",
                "calc.output.totalSilverLoss": "TOTAL SILVER LOSS",
                "calc.output.totalWithTax": "TOTAL (W/ 20% TAX)",
                "calc.output.food": "Food",
                "calc.output.lumber": "Lumber",
                "calc.output.stone": "Stone",
                "calc.output.iron": "Iron"
            },
            roeHtml: `
<p class="roe-intro">By order of King Arihelm, the following ROE is in effect for the kingdom:</p>
<ol class="roe-list">
    <li>
        <h3>1. PEACETIME</h3>
        <ul class="roe-points">
            <li>Attacks on cities are forbidden except during CoT and planned CP exchanges.</li>
            <li>Attacks on portals and clan buildings are prohibited. Unless the portal is proven hostile to the clan and or its resources in its territory.</li>
            <li>Scouting is a form of aggression</li>
        </ul>
    </li>
    <li>
        <h3>2. DIPLOMATS</h3>
        <ul class="roe-points">
            <li>Clans must identify at least one diplomat in their clan description who can assist with dispute resolution. Diplomats must be an active leader or superior.</li>
        </ul>
    </li>
    <li>
        <h3>3. General Rules</h3>
        <ul class="roe-points">
            <li>All resource buildings within the clan territory belong to that clan.</li>
            <li>Including WS and DMs.</li>
            <li>Player created resources belong to the individual who created them unless agreed to share between two parties.</li>
            <li>Rare crypts belong to the individual who unlocked them.</li>
            <li>WS and DMs:
                <ul>
                    <li>a. There is no longer a registration system.</li>
                    <li>b. All wild resource buildings (including DM/WS) are first come, first serve (FCFS).</li>
                    <li>c. Claims cannot be made if you are scouted/attacked in wild resources unless:
                        <ul>
                            <li>You lose the building.</li>
                            <li>You are scouted/attacked and then attacked again. (2x rule)</li>
                        </ul>
                    </li>
                    <li>d. It is your responsibility to message your diplomat, the other player, and their diplomat/clan leader if someone is scouting you or attacking you in a mine.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>4. PALACE COMPENSATION GUIDE --</h3>
        <ul class="roe-points">
            <li>Every attack or scouting carries a base cost of 1 million silver. Any additional losses, damages, or stolen resources are added on top of this base cost.</li>
            <li>RSS: amount equal to the amount stolen</li>
            <li>Gold: 1 Gold = 3,000 Silver or gold mines equal to stolen + 10% (by decision of the victim)</li>
            <li>Tar: 1 Tar = 1,000 Silver</li>
            <li>Gold Bars = no compensation</li>
            <li>Illegally closed portal: 1M silver (+1M for illegal attack itself)</li>
            <li>Damage is calculated according to the following formula: Damage of lost troops are calculated according to the following formula:
                <ul>
                    <li>Hero= 1.5k</li>
                    <li>Captain= 1k</li>
                    <li>Spearmen, Archers = Troops Level x 40</li>
                    <li>Specialists, Riders = Troops Level x 80</li>
                    <li>Spies= Troops Level x 100</li>
                    <li>Griffins= Troops Level x 800</li>
                    <li>Catapults, Walls Walls Level x 200</li>
                    <li>Monsters III-VII (Monster Level ⁃ 2) x1.3k</li>
                    <li>Monsters I & ll=x 8.64k</li>
                    <li>Mercenary Guard Troops Level x120</li>
                    <li>Mercenary Monster = Monster Level x 3k</li>
                </ul>
            </li>
            <li>-FORTS -
                <ul>
                    <li>Scouting = 5 million silver</li>
                    <li>Attacking without destroying = 10 million silver</li>
                    <li>Attacking and destroying = 20 million of each Silver, Iron, Wood, Stone</li>
                </ul>
            </li>
            <li>- CAPITALS -
                <ul>
                    <li>Scouting = 5 million silver</li>
                    <li>Attacking without destroying = 10 million silver</li>
                    <li>Attacking and destroying = 50 million of each Silver, Iron, Wood, Stone</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>5. TAXES</h3>
        <ul class="roe-points">
            <li>Cities with over 3 days of accrued ingots may be attacked by a member of the Royal Guard after being given 24 hours warning. Gold ingots have zero value to you personally, but the King can use them to turn on bonuses for the whole kingdom. If we have the gold bars, they will be used for the benefit of K273.</li>
            <li>Maximum gold ingots per city:
                <ul>
                    <li>City 1-9: 2000 Ingots</li>
                    <li>City 10-19: 3000 Ingots</li>
                    <li>City 20-24: 10000 Ingots</li>
                    <li>City 25-29: 35000 Ingots</li>
                    <li>City 30-34: 60000 Ingots</li>
                    <li>City 35-39: 70000 Ingots</li>
                    <li>City 40+: 90000 Ingots</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>6. Members of the Esteemed Kingdom</h3>
        <ul class="roe-points">
            <li>Every player must abide by these rules to be protected by ROE. Players not protected are:
                <ul>
                    <li>OUTLAWS</li>
                    <li>CLANLESS PLAYERS</li>
                    <li>NON-ROE MEMBERS</li>
                </ul>
            </li>
            <li>Outlaws – If individuals or clans are unwilling to comply with ROE, who attack clan buildings, or refuse to pay compensation for ROE violations will receive outlaw status. Current Outlaws can be found at #K273/OUTLAWS. The current list of outlaws will be struck clean and start new. This means there are currently no outlaws in the kingdom. The new Royal Guard will share responsibilities in kingdom assistance.</li>
            <li>Royal Guard: The new Royal Guard is comprised of many clans and has very strong players as members. The RG duties will continue its normal duties like tax collection and enforcement for the Palace. Additional duties will now include assistance in helping clans with outlaws and the kingdom with precision. They will also act as an elite army and kingdom/territorial patrol and defense unit.</li>
            <li>In addition to activating relationships with the greater clans of the kingdom to assist as needed.</li>
            <li>Clanless players at or below 250k might are protected and not to be freely attacked.</li>
            <li>Clanless players less than 250k might attacked are allowed 2x the compensation amount in claims.</li>
            <li>Interactions with these players should first be to learn about them and their goals in the game. Followed by encouragement to join a clan. Foster growth in the game and play for the kingdom versus personal reward.</li>
        </ul>
    </li>
    <li>
        <h3>7. Clash of Thrones  CoT</h3>
        <ul class="roe-points">
            <li>During, you can scout and attack cities under the following conditions:</li>
            <li>No Clan Fort Attacks: Attacking another clan's forts or buildings is strictly forbidden.</li>
            <li>Portal Management: No might restriction applies. Any portal proven to be hostile to clan territories may be attacked with swift justice by the clan being attacked. Clan marches are fully allowed to close hostile portals. During normal peacetime, portals may not be attacked at any time unless proven hostile.</li>
            <li>Resource Management: Keep resources low during the event to avoid theft; send troops to forts if needed. Practice No Value City (NVC)</li>
            <li>"Fair Play": Attacking someone significantly weaker (e.g., under half your might) is often considered poor sportsmanship and not allowed. The only instance it is allowed is for a hostile portal. Portals left open by players that have other members attack through them are still at fault for leaving the portal open and may be attacked regardless of their might. An attack report must be provided in all claims made. Under half your might is not allowed. The 50% rule applies.</li>
        </ul>
    </li>
    <li>
        <h3>8. Conflict Resolution Process</h3>
        <ul class="roe-points">
            <li>When the ROE is violated, the following steps should be taken:
                <ol>
                    <li>Contact the other player to attempt to resolve. If no resolution within 24 hours, elevate to your clan diplomat.</li>
                    <li>If no resolution is reached between clan Diplomats, they may bring the issue before the Court by posting it in #K273/CLAIMS. Only Clan leaders or diplomats are allowed to post claims in this chat.</li>
                    <li>The judges will adjudicate to define the guilty party (if any) and an acceptable amount of compensation.</li>
                    <li>If the guilty party (or their clan) refuses to compensate, the Royal Court will determine whether the player or clan should be declared an Outlaw and the Royal Guard will be activated on stand-by.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>
        <h3>9. Kingdom Chats to Join</h3>
        <ul class="roe-points">
            <li>#K273/ROE</li>
            <li>#K273/CLAIMS</li>
            <li>#K273/OUTLAWS</li>
            <li>~#K273/CPTHUNDERDOME</li>
            <li>~#K273tbxyz</li>
            <li>~#K273/ACADEMY</li>
        </ul>
    </li>
</ol>
`
        },
        fi: {
            strings: {
                "site.languageLabel": "Kieli",
                "site.footer": "Rakennettu K273:lle, tekijä Zee",
                "index.title": "TotalBattle Kuningaskunta 273",
                "index.hero.eyebrow": "K273 | Työkalut ja linkit",
                "index.hero.title": "TotalBattle Kuningaskunta 273",
                "index.hero.lede": "Nopea pääsy laskureihimme ja resursseihin.",
                "index.palace.eyebrow": "Palatsi",
                "index.palace.card.title": "Palatsiroolit & ROE",
                "index.palace.card.body": "Tarkista viimeisimmät palatsin roolit ja kuningaskunnan hyväksymät ROE-säännöt.",
                "index.palace.card.button": "Avaa palatsisivu",
                "index.tools.eyebrow": "Työkalut",
                "index.calc.card.title": "Laittoman hyökkäyksen vahinkolaskuri",
                "index.calc.card.body": "Syötä tappiot ja kopioi muotoiltu viesti takaisin TotalBattle-chattiin.",
                "index.calc.card.button": "Avaa laskuri",
                "palace.title": "K273 Palatsiroolit & ROE",
                "palace.hero.eyebrow": "K273 | Palatsin yleiskuva",
                "palace.hero.title": "Palatsiroolit & ROE",
                "palace.hero.lede": "Nykyiset johtopaikat ja kuningaskunnan ROE-säännöt.",
                "palace.hero.back": "← Takaisin etusivulle",
                "palace.roles.eyebrow": "Palatsi",
                "palace.roles.title": "Nykyiset roolit",
                "palace.roles.sub": "Kuka pitää mitäkin paikkaa juuri nyt.",
                "palace.roles.updated": "Päivitetty 12/30/2025",
                "palace.roles.table.role": "Rooli",
                "palace.roles.table.player": "Pelaaja",
                "palace.roles.king": "KUNINGAS",
                "palace.roles.hand": "Kuningaan oikea käsi",
                "palace.roles.queen": "Kuningatar",
                "palace.roles.centurion": "Centurion",
                "palace.roles.chancellor": "Kansleri",
                "palace.roles.treasurer": "Rahastonhoitaja",
                "palace.roles.archon": "Archon",
                "palace.roles.quaestor": "Quaestor",
                "palace.roles.tribute": "Tribute",
                "palace.roles.legate": "Legate",
                "palace.image.alt": "TotalBattle palatsi",
                "palace.roe.eyebrow": "ROE",
                "palace.roe.title": "Sotatoimien säännöt",
                "palace.roe.subtitle": "Kuningaskunnan ohjeet taisteluun ja käytökseen.<br>Englanninkielinen versio on virallinen ROE (Käännökset AI:n avulla)<br>Päivitetty 12/30/2025",
                "palace.back": "← Takaisin etusivulle",
                "calculator.title": "TotalBattle Vahinkolaskuri",
                "calculator.hero.eyebrow": "K273 | Laittoman hyökkäyksen laskuri",
                "calculator.hero.title": "TotalBattle Vahinko",
                "calculator.hero.lede": "Syötä tappiot ja luo kopioitava yhteenveto ROE-viesteihin.",
                "calculator.hero.back": "← Takaisin työkaluihin",
                "calculator.base.eyebrow": "Peruskustannukset",
                "calculator.base.title": "Oletukset",
                "calculator.base.sub": "Muuta vain, jos säännöt muuttuvat. Arvot tallentuvat vain tähän istuntoon. (Ota yhteyttä Zeehen pysyvien muutosten vuoksi)",
                "calculator.base.pill": "Perus",
                "calculator.clan.eyebrow": "Klaanin rakennukset",
                "calculator.clan.title": "Valinnaiset tappiot",
                "calculator.clan.sub": "Sisällytä vain kun linnoituksia/pääkaupunkeja on osuttu. Oletuksia voi muokata.",
                "calculator.clan.include": "Sisällytä raporttiin",
                "calculator.armyFlat.eyebrow": "Armeijan tappiot",
                "calculator.armyFlat.title": "Kiinteät kustannukset",
                "calculator.armyFlat.sub": "Syötä perusmäärät kiinteähintaisille yksiköille.",
                "calculator.armyTier.eyebrow": "Armeijan porrastetut tappiot",
                "calculator.armyTier.title": "Tason mukaan",
                "calculator.armyTier.sub": "Syötä määrät jokaiselle tasolle.",
                "calculator.summary.eyebrow": "Yhteenveto",
                "calculator.summary.title": "Summat & kopio",
                "calculator.summary.sub": "Lisää mahdollinen otettu hopea sekä resurssit.",
                "calculator.directSilver": "Otettu hopea",
                "calculator.food": "Ruoka",
                "calculator.lumber": "Puutavara",
                "calculator.stone": "Kivi",
                "calculator.iron": "Rauta",
                "calculator.silverSubtotal": "Hopea-välisummaa",
                "calculator.totalLoss": "Kokonaistappio (sis. otettu hopea)",
                "calculator.calculate": "Laske",
                "calculator.reset": "Tyhjennä",
                "calculator.copyLabel": "Kopioitava viesti",
                "calculator.copyButton": "Kopioi yhteenveto",
                "calculator.back": "← Takaisin työkaluihin",
                "calculator.formula.baseCount": "Perus × Määrä",
                "calculator.formula.baseCountLevel": "Perus × Määrä × Taso",
                "calculator.formula.baseCountLevelMinusTwo": "Perus × Määrä × (Taso − 2)",
                "calculator.label.count": "Määrä",
                "common.show": "Näytä",
                "common.hide": "Piilota",
                "calc.base.scoutingEvents": "Tiedustelut",
                "calc.base.attackEvents": "Hyökkäykset",
                "calc.base.portal": "Portaali",
                "calc.base.hero": "Sankari",
                "calc.base.captain": "Kapteeni",
                "calc.base.monsters12": "Hirviöt 1-2",
                "calc.base.monsters37": "Hirviöt 3-7",
                "calc.base.spearmenArchers": "Keihäsmiehet / Jousimiehet",
                "calc.base.specialistRiders": "Spesialistit / Ratsastajat",
                "calc.base.spies": "Vakoilijat",
                "calc.base.griffins": "Griffinit",
                "calc.base.catapultsWalls": "Katapultit / Muurit",
                "calc.base.mercGuard": "Palkkasoturivartiosto",
                "calc.base.mercMonster": "Palkkasoturihirviö",
                "calc.base.gold": "Kulta",
                "calc.base.tar": "Terva",
                "calc.base.fortScout": "Linnakkeen tiedustelu",
                "calc.base.fortAttack": "Linnakkeen hyökkäys (ei tuhottu)",
                "calc.base.fortDestroy": "Linnakkeen hyökkäys (tuhottu)",
                "calc.base.capScout": "Pääkaupungin tiedustelu",
                "calc.base.capAttack": "Pääkaupungin hyökkäys (ei tuhottu)",
                "calc.base.capDestroy": "Pääkaupungin hyökkäys (tuhottu)",
                "calc.output.clanBuildings": "KLAANIN RAKENNUKSET",
                "calc.output.armyLoss": "ARMEIJAN TAPPIOT",
                "calc.output.additionalLoss": "LISÄTAPPIOT",
                "calc.output.resourceLoss": "RESURSSITAPPIOT",
                "calc.output.fortScout": "Linnakkeen tiedustelu",
                "calc.output.fortAttackHit": "Linnakkeen hyökkäys (osuma)",
                "calc.output.fortAttackDestroy": "Linnakkeen hyökkäys (tuhottu)",
                "calc.output.capScout": "Pääkaupungin tiedustelu",
                "calc.output.capAttackHit": "Pääkaupungin hyökkäys (osuma)",
                "calc.output.capAttackDestroy": "Pääkaupungin hyökkäys (tuhottu)",
                "calc.output.scoutEvents": "Tiedustelut",
                "calc.output.attackEvents": "Hyökkäykset",
                "calc.output.portalClosed": "Portaali suljettu",
                "calc.output.heroCaptains": "Sankari/Kapteenit",
                "calc.output.spearmenArchers": "Keihäsmiehet/Jousimiehet",
                "calc.output.specialistsRiders": "Spesialistit/Ratsastajat",
                "calc.output.spiesTotal": "Vakoilijat yhteensä",
                "calc.output.monstersTotal": "Hirviöt yhteensä",
                "calc.output.mercenaries": "Palkkasoturit",
                "calc.output.wallsCatapult": "Muurit/Katapultit",
                "calc.output.goldTotal": "Kulta yhteensä",
                "calc.output.tarTotal": "Terva yhteensä",
                "calc.output.directSilver": "Otettu hopea",
                "calc.output.totalSilverLoss": "HOPEA KOKONAISTAPPIO",
                "calc.output.totalWithTax": "YHTEENSÄ (SIS. 20% VERO)",
                "calc.output.food": "Ruoka",
                "calc.output.lumber": "Puutavara",
                "calc.output.stone": "Kivi",
                "calc.output.iron": "Rauta"
            },
            roeHtml: `
<p class="roe-intro">Kuningas Arihelmin määräyksestä seuraava ROE on voimassa kuningaskunnassa:</p>
<ol class="roe-list">
    <li>
        <h3>1. RAUHANAIKA</h3>
        <ul class="roe-points">
            <li>Kaupunkien hyökkäykset ovat kiellettyjä paitsi CoT:n aikana ja suunnitelluissa CP-vaihdoissa.</li>
            <li>Hyökkäykset portaalien ja klaanirakennusten kimppuun ovat kiellettyjä. Ellei portaali ole todistetusti vihamielinen klaanille ja tai sen resursseille sen alueella.</li>
            <li>Tiedustelu on aggression muoto.</li>
        </ul>
    </li>
    <li>
        <h3>2. DIPLOMAATIT</h3>
        <ul class="roe-points">
            <li>Klaanien on nimettävä vähintään yksi diplomaatti klaanikuvaussaan, joka voi auttaa kiistojen ratkaisussa. Diplomaatin on oltava aktiivinen johtaja tai ylempi.</li>
        </ul>
    </li>
    <li>
        <h3>3. Yleiset säännöt</h3>
        <ul class="roe-points">
            <li>Kaikki klaanin alueella olevat resurssirakennukset kuuluvat kyseiselle klaanille.</li>
            <li>Mukaan lukien WS ja DMs.</li>
            <li>Pelaajan luomat resurssit kuuluvat ne luoneelle henkilölle, ellei sovita jakamisesta kahden osapuolen välillä.</li>
            <li>Harvinaiset kryptat kuuluvat sen avanneelle henkilölle.</li>
            <li>WS ja DMs:
                <ul>
                    <li>a. Rekisteröintijärjestelmää ei enää ole.</li>
                    <li>b. Kaikki villit resurssirakennukset (mukaan lukien DM/WS) ovat saapumisjärjestyksessä (FCFS).</li>
                    <li>c. Vaateita ei voi esittää, jos sinua scoutataan/hyökätään villiresursseissa, ellei:
                        <ul>
                            <li>Menetät rakennuksen.</li>
                            <li>Sinua scoutataan/hyökätään ja sitten hyökätään uudelleen. (2x-sääntö)</li>
                        </ul>
                    </li>
                    <li>d. On sinun vastuullasi viestittää diplomaatillesi, toiselle pelaajalle ja heidän diplomaatti/klaanijohtajalle, jos joku scouttaa sinua tai hyökkää sinuun kaivoksessa.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>4. PALATSIN KORVAUSOPAS --</h3>
        <ul class="roe-points">
            <li>Jokaisesta hyökkäyksestä tai scoutingista aiheutuu 1 miljoonan hopeain perusmaksu. Kaikki lisätappiot, vahingot tai varastetut resurssit lisätään tämän perusmaksun päälle.</li>
            <li>RSS: määrä yhtä suuri kuin varastettu määrä</li>
            <li>Kulta: 1 Kulta = 3,000 Hopea tai kultakaivokset yhtä suuret kuin varastettu + 10% (uhrin päätöksellä)</li>
            <li>Tar: 1 Tar = 1,000 Hopea</li>
            <li>Kultaharkot = ei korvausta</li>
            <li>Laittomasti suljettu portaali: 1M hopea (+1M laittomasta hyökkäyksestä itsestään)</li>
            <li>Vahinko lasketaan seuraavan kaavan mukaan: Menetettyjen joukkojen vahinko lasketaan seuraavan kaavan mukaan:
                <ul>
                    <li>Hero= 1.5k</li>
                    <li>Captain= 1k</li>
                    <li>Spearmen, Archers = Troops Level x 40</li>
                    <li>Specialists, Riders = Troops Level x 80</li>
                    <li>Spies= Troops Level x 100</li>
                    <li>Griffins= Troops Level x 800</li>
                    <li>Catapults, Walls Walls Level x 200</li>
                    <li>Monsters III-VII (Monster Level ⁃ 2) x1.3k</li>
                    <li>Monsters I & ll=x 8.64k</li>
                    <li>Mercenary Guard Troops Level x120</li>
                    <li>Mercenary Monster = Monster Level x 3k</li>
                </ul>
            </li>
            <li>-LINNAKKEET -
                <ul>
                    <li>Scouting = 5 million hopea</li>
                    <li>Attacking without destroying = 10 million hopea</li>
                    <li>Attacking and destroying = 20 million of each Hopea, Iron, Wood, Stone</li>
                </ul>
            </li>
            <li>- PÄÄKAUPUNGIT -
                <ul>
                    <li>Scouting = 5 million hopea</li>
                    <li>Attacking without destroying = 10 million hopea</li>
                    <li>Attacking and destroying = 50 million of each Hopea, Iron, Wood, Stone</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>5. VEROT</h3>
        <ul class="roe-points">
            <li>Kaupungit, joilla on yli 3 päivää kertyneitä harkkoja, voidaan hyökätä kuninkaallisen kaartin jäsenen toimesta 24 tunnin varoituksen jälkeen. Kultaharkoilla ei ole henkilökohtaista arvoa sinulle, mutta Kuningas voi käyttää niitä bonusien aktivoimiseen koko kuningaskunnalle. Jos meillä on kultaharkot, niitä käytetään K273:n hyväksi.</li>
            <li>Enimmäismäärä kultaharkkoja per kaupunki:
                <ul>
                    <li>Kaupunki 1-9: 2000 Ingots</li>
                    <li>Kaupunki 10-19: 3000 Ingots</li>
                    <li>Kaupunki 20-24: 10000 Ingots</li>
                    <li>Kaupunki 25-29: 35000 Ingots</li>
                    <li>Kaupunki 30-34: 60000 Ingots</li>
                    <li>Kaupunki 35-39: 70000 Ingots</li>
                    <li>Kaupunki 40+: 90000 Ingots</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>6. Arvostetun kuningaskunnan jäsenet</h3>
        <ul class="roe-points">
            <li>Jokaisen pelaajan on noudatettava näitä sääntöjä ollakseen ROE:n suojaama. Pelaajat, joita ei suojata, ovat:
                <ul>
                    <li>LAITTOMAT</li>
                    <li>KLAANITTOMAT PELAAJAT</li>
                    <li>EI-ROE-JÄSENET</li>
                </ul>
            </li>
            <li>Laittomat – Jos yksilöt tai klaanit eivät ole halukkaita noudattamaan ROE:ta, jotka hyökkäävät klaanirakennuksiin tai kieltäytyvät maksamasta korvausta ROE-rikkomuksista, saavat laittoman statuksen. Nykyiset laittomat löytyvät #K273/OUTLAWS. Nykyinen laittomien lista pyyhitään puhtaaksi ja aloitetaan uusi. Tämä tarkoittaa, että kuningaskunnassa ei tällä hetkellä ole laittomia. Uusi kuninkaallinen kaarti jakaa vastuut kuningaskunnan avustamisessa.</li>
            <li>Kuninkaallinen kaarti: Uusi kuninkaallinen kaarti koostuu monista klaaneista ja sillä on erittäin vahvoja pelaajia jäseninä. RG:n tehtävät jatkuvat normaalisti kuten verojen keruu ja Palatsin toimeenpano. Lisätehtäviin kuuluu nyt klaanien auttaminen laittomien kanssa ja kuningaskunnan auttaminen tarkasti. He toimivat myös eliittiarmeijana sekä kuningaskunnan/alueen partiointi- ja puolustusyksikkönä.</li>
            <li>Lisäksi aktivoidaan suhteet kuningaskunnan suuriin klaaneihin avun tarjoamiseksi tarpeen mukaan.</li>
            <li>Klaanittomat pelaajat, joiden might on 250k tai alle, ovat suojattuja eikä heitä saa vapaasti hyökätä.</li>
            <li>Klaanittomat pelaajat, joiden might on alle 250k ja joita hyökätään, saavat vaatia 2x korvausmäärän.</li>
            <li>Vuorovaikutusten näiden pelaajien kanssa tulisi ensiksi olla heidän ja heidän tavoitteidensa oppimista pelissä. Tämän jälkeen rohkaistaan liittymään klaaniin. Edistetään kasvua pelissä ja pelataan kuningaskunnan puolesta henkilökohtaisen palkkion sijaan.</li>
        </ul>
    </li>
    <li>
        <h3>7. Clash of Thrones  CoT</h3>
        <ul class="roe-points">
            <li>Tänä aikana voit scoutata ja hyökätä kaupunkeihin seuraavin ehdoin:</li>
            <li>Ei klaanilinnoituksen hyökkäyksiä: Toisen klaanin linnoitusten tai rakennusten hyökkääminen on ehdottomasti kiellettyä.</li>
            <li>Portaalien hallinta: Might-rajoitusta ei sovelleta. Mikä tahansa portaali, joka on todistetusti vihamielinen klaanialueita kohtaan, voidaan hyökätä nopeasti oikeudella hyökkäyksen kohteena olevan klaanin toimesta. Klaanimarssit ovat täysin sallittuja vihamielisten portaalien sulkemiseksi. Normaalin rauhan aikana portaalien kimppuun ei saa hyökätä missään vaiheessa, ellei niitä todisteta vihamielisiksi.</li>
            <li>Resurssien hallinta: Pidä resurssit matalina tapahtuman aikana varkauden välttämiseksi; lähetä joukkoja linnoituksiin tarvittaessa. Harjoita No Value City (NVC)</li>
            <li>"Fair Play": Hyökkääminen huomattavasti heikomman kimppuun (esim. alle puolet omasta mightista) katsotaan usein huonoksi urheiluhengeksi eikä ole sallittua. Ainoa poikkeus on vihamielinen portaali. Portaalit, jotka pelaajat jättävät auki ja joiden kautta muut jäsenet hyökkäävät, ovat edelleen syyllisiä portaalin auki jättämiseen ja niihin voidaan hyökätä riippumatta heidän mightistaan. Hyökkäysraportti on toimitettava kaikissa tehdyissä vaateissa. Alle puolet omasta mightista ei ole sallittua. 50% sääntö pätee.</li>
        </ul>
    </li>
    <li>
        <h3>8. Konfliktinratkaisuprosessi</h3>
        <ul class="roe-points">
            <li>Kun ROE:ta rikotaan, seuraavat vaiheet tulisi ottaa:
                <ol>
                    <li>Ota yhteyttä toiseen pelaajaan ja yritä ratkaista. Jos ratkaisua ei synny 24 tunnin sisällä, eskaloi klaanidiplomaatillesi.</li>
                    <li>Jos klaanidiplomaattien välillä ei saavuteta ratkaisua, he voivat viedä asian tuomioistuimen käsiteltäväksi julkaisemalla sen #K273/CLAIMS. Vain klaanijohtajat tai diplomaatit saavat julkaista vaateita tässä chatissa.</li>
                    <li>Tuomarit ratkaisevat syyllisen osapuolen (jos sellainen on) ja hyväksyttävän korvaussumman.</li>
                    <li>Jos syyllinen osapuoli (tai heidän klaaninsa) kieltäytyy korvaamasta, kuninkaallinen tuomioistuin päättää, tuleeko pelaaja tai klaani julistaa laittomaksi ja kuninkaallinen kaarti aktivoidaan valmiustilaan.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>
        <h3>9. Kuningaskunnan chatit liittymistä varten</h3>
        <ul class="roe-points">
            <li>#K273/ROE</li>
            <li>#K273/CLAIMS</li>
            <li>#K273/OUTLAWS</li>
            <li>~#K273/CPTHUNDERDOME</li>
            <li>~#K273tbxyz</li>
            <li>~#K273/ACADEMY</li>
        </ul>
    </li>
</ol>
`
        },
        no: {
            strings: {
                "site.languageLabel": "Språk",
                "site.footer": "Bygget for K273 av Zee",
                "index.title": "TotalBattle Kongerike 273",
                "index.hero.eyebrow": "K273 | Verktøy og lenker",
                "index.hero.title": "TotalBattle Kongerike 273",
                "index.hero.lede": "Rask tilgang til våre kalkulatorer og ressurser.",
                "index.palace.eyebrow": "Palass",
                "index.palace.card.title": "Palassroller & ROE",
                "index.palace.card.body": "Se de nyeste palassutnevnelsene og ROE-reglene som er avtalt av kongeriket.",
                "index.palace.card.button": "Åpne palasside",
                "index.tools.eyebrow": "Verktøy",
                "index.calc.card.title": "Kalkulator for ulovlig angrepsskade",
                "index.calc.card.body": "Skriv inn tap og kopier den formaterte meldingen tilbake til TotalBattle-chat.",
                "index.calc.card.button": "Åpne kalkulator",
                "palace.title": "K273 Palassroller & ROE",
                "palace.hero.eyebrow": "K273 | Palassoversikt",
                "palace.hero.title": "Palassroller & ROE",
                "palace.hero.lede": "Nåværende lederplasser og reglene for engasjement i kongeriket.",
                "palace.hero.back": "← Tilbake til Hjem",
                "palace.roles.eyebrow": "Palass",
                "palace.roles.title": "Nåværende roller",
                "palace.roles.sub": "Hvem som holder hvert sete akkurat nå.",
                "palace.roles.updated": "Sist oppdatert 12/30/2025",
                "palace.roles.table.role": "Rolle",
                "palace.roles.table.player": "Spiller",
                "palace.roles.king": "KONGE",
                "palace.roles.hand": "Kongens høyre hånd",
                "palace.roles.queen": "Dronning",
                "palace.roles.centurion": "Centurion",
                "palace.roles.chancellor": "Kansler",
                "palace.roles.treasurer": "Skattmester",
                "palace.roles.archon": "Archon",
                "palace.roles.quaestor": "Quaestor",
                "palace.roles.tribute": "Tribute",
                "palace.roles.legate": "Legate",
                "palace.image.alt": "TotalBattle palass",
                "palace.roe.eyebrow": "ROE",
                "palace.roe.title": "Engasjementsregler",
                "palace.roe.subtitle": "Kongedømmets retningslinjer for kamp og opptreden.<br>Den engelske versjonen er den offisielle ROE (Oversettelser via AI)<br>Sist oppdatert 12/30/2025",
                "palace.back": "← Tilbake til Hjem",
                "calculator.title": "TotalBattle Skadekalkulator",
                "calculator.hero.eyebrow": "K273 | Ulovlig angrepskalkulator",
                "calculator.hero.title": "TotalBattle Skade",
                "calculator.hero.lede": "Skriv inn tap og generer et kopieringsklart sammendrag for ROE-meldinger.",
                "calculator.hero.back": "← Tilbake til verktøy",
                "calculator.base.eyebrow": "Grunnkostnader",
                "calculator.base.title": "Standarder",
                "calculator.base.sub": "Juster bare hvis regler endres. Verdier lagres kun for denne økten. (Kontakt Zee for permanente endringer)",
                "calculator.base.pill": "Basis",
                "calculator.clan.eyebrow": "Klanbygninger",
                "calculator.clan.title": "Valgfrie tap",
                "calculator.clan.sub": "Inkluder bare når fort/hovedsteder treffes. Standarder kan endres.",
                "calculator.clan.include": "Inkluder i rapport",
                "calculator.armyFlat.eyebrow": "Hærtap",
                "calculator.armyFlat.title": "Flate kostnader",
                "calculator.armyFlat.sub": "Skriv inn grunnleggende antall for enheter med flat kost.",
                "calculator.armyTier.eyebrow": "Hær tap per nivå",
                "calculator.armyTier.title": "Nivåbaserte oppføringer",
                "calculator.armyTier.sub": "Skriv inn antall for hvert nivå av tapte enheter.",
                "calculator.summary.eyebrow": "Sammendrag",
                "calculator.summary.title": "Summer & kopitekst",
                "calculator.summary.sub": "Legg til eventuell tatt sølv samt ressurser.",
                "calculator.directSilver": "Tatt sølv",
                "calculator.food": "Mat",
                "calculator.lumber": "Tømmer",
                "calculator.stone": "Stein",
                "calculator.iron": "Jern",
                "calculator.silverSubtotal": "Sølv delsum",
                "calculator.totalLoss": "Totalt tap (med tatt sølv)",
                "calculator.calculate": "Beregn",
                "calculator.reset": "Nullstill",
                "calculator.copyLabel": "Klar-til-kopi melding",
                "calculator.copyButton": "Kopier sammendrag",
                "calculator.back": "← Tilbake til verktøy",
                "calculator.formula.baseCount": "Grunnlag × Antall",
                "calculator.formula.baseCountLevel": "Grunnlag × Antall × Nivå",
                "calculator.formula.baseCountLevelMinusTwo": "Grunnlag × Antall × (Nivå − 2)",
                "calculator.label.count": "Antall",
                "common.show": "Vis",
                "common.hide": "Skjul",
                "calc.base.scoutingEvents": "Speidinger",
                "calc.base.attackEvents": "Angrep",
                "calc.base.portal": "Portal",
                "calc.base.hero": "Helt",
                "calc.base.captain": "Kaptein",
                "calc.base.monsters12": "Monstre 1-2",
                "calc.base.monsters37": "Monstre 3-7",
                "calc.base.spearmenArchers": "Spydmenn / Bueskyttere",
                "calc.base.specialistRiders": "Spesialister / Ryttere",
                "calc.base.spies": "Spioner",
                "calc.base.griffins": "Griffiner",
                "calc.base.catapultsWalls": "Katapulter / Murer",
                "calc.base.mercGuard": "Leiesoldatvakt",
                "calc.base.mercMonster": "Leiesoldatmonster",
                "calc.base.gold": "Gull",
                "calc.base.tar": "Tjære",
                "calc.base.fortScout": "Fort speiding",
                "calc.base.fortAttack": "Fort angrep (ikke ødelagt)",
                "calc.base.fortDestroy": "Fort angrep (ødelagt)",
                "calc.base.capScout": "Hovedstad speiding",
                "calc.base.capAttack": "Hovedstad angrep (ikke ødelagt)",
                "calc.base.capDestroy": "Hovedstad angrep (ødelagt)",
                "calc.output.clanBuildings": "KLANBYGNINGER",
                "calc.output.armyLoss": "HÆRTAP",
                "calc.output.additionalLoss": "EKSTRA TAP",
                "calc.output.resourceLoss": "RESSURSTAP",
                "calc.output.fortScout": "Fort speiding",
                "calc.output.fortAttackHit": "Fort angrep (treff)",
                "calc.output.fortAttackDestroy": "Fort angrep (ødelagt)",
                "calc.output.capScout": "Hovedstad speiding",
                "calc.output.capAttackHit": "Hovedstad angrep (treff)",
                "calc.output.capAttackDestroy": "Hovedstad angrep (ødelagt)",
                "calc.output.scoutEvents": "Speidingshendelser",
                "calc.output.attackEvents": "Angrepshendelser",
                "calc.output.portalClosed": "Portal stengt",
                "calc.output.heroCaptains": "Helt/Kapteiner",
                "calc.output.spearmenArchers": "Spydmenn/Bueskyttere",
                "calc.output.specialistsRiders": "Spesialister/Ryttere",
                "calc.output.spiesTotal": "Spioner totalt",
                "calc.output.monstersTotal": "Monstre totalt",
                "calc.output.mercenaries": "Leiesoldater",
                "calc.output.wallsCatapult": "Murer/Katapulter",
                "calc.output.goldTotal": "Gull totalt",
                "calc.output.tarTotal": "Tjære totalt",
                "calc.output.directSilver": "Tatt sølv",
                "calc.output.totalSilverLoss": "TOTALT SØLV TAP",
                "calc.output.totalWithTax": "TOTALT (MED 20% SKATT)",
                "calc.output.food": "Mat",
                "calc.output.lumber": "Tømmer",
                "calc.output.stone": "Stein",
                "calc.output.iron": "Jern"
            },
            roeHtml: `
<p class="roe-intro">På ordre fra Kong Arihelm er følgende ROE gjeldende for kongeriket:</p>
<ol class="roe-list">
    <li>
        <h3>1. FREDSTID</h3>
        <ul class="roe-points">
            <li>Angrep på byer er forbudt bortsett fra under CoT og planlagte CP-bytter.</li>
            <li>Angrep på portaler og klanbygninger er forbudt. Med mindre portalen er bevist fiendtlig mot klanen og eller dens ressurser i territoriet.</li>
            <li>Speiding er en form for aggresjon.</li>
        </ul>
    </li>
    <li>
        <h3>2. DIPLOMATER</h3>
        <ul class="roe-points">
            <li>Klaner må identifisere minst én diplomat i klanbeskrivelsen som kan hjelpe med konfliktløsning. Diplomater må være en aktiv leder eller overordnet.</li>
        </ul>
    </li>
    <li>
        <h3>3. Generelle regler</h3>
        <ul class="roe-points">
            <li>Alle ressursbygninger innenfor klanens territorium tilhører den klanen.</li>
            <li>Inkludert WS og DMs.</li>
            <li>Spillerskapte ressurser tilhører personen som opprettet dem med mindre det er avtalt å dele mellom to parter.</li>
            <li>Sjeldne kryptene tilhører personen som låste dem opp.</li>
            <li>WS og DMs:
                <ul>
                    <li>a. Det finnes ikke lenger et registreringssystem.</li>
                    <li>b. Alle ville ressursbygninger (inkludert DM/WS) er førstemann til mølla (FCFS).</li>
                    <li>c. Krav kan ikke gjøres hvis du blir speidet/angrepet i ville ressurser med mindre:
                        <ul>
                            <li>Du mister bygningen.</li>
                            <li>Du blir speidet/angrepet og deretter angrepet igjen. (2x-regel)</li>
                        </ul>
                    </li>
                    <li>d. Det er ditt ansvar å sende melding til diplomaten din, den andre spilleren og deres diplomat/klanleder hvis noen speider deg eller angriper deg i en gruve.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>4. KOMPENSASJONSGUIDE FOR PALASSET --</h3>
        <ul class="roe-points">
            <li>Hvert angrep eller scouting har en grunnkostnad på 1 million sølv. Eventuelle ekstra tap, skader eller stjålne ressurser legges til på toppen av denne grunnkostnaden.</li>
            <li>RSS: beløp lik mengden som er stjålet</li>
            <li>Gull: 1 Gull = 3,000 Sølv eller gullgruver likt stjålet + 10% (etter offerets beslutning)</li>
            <li>Tar: 1 Tar = 1,000 Sølv</li>
            <li>Gullbarrer = ingen kompensasjon</li>
            <li>Ulovlig lukket portal: 1M sølv (+1M for det ulovlige angrepet i seg selv)</li>
            <li>Skade beregnes etter følgende formel: Tap av tropper beregnes etter følgende formel:
                <ul>
                    <li>Hero= 1.5k</li>
                    <li>Captain= 1k</li>
                    <li>Spearmen, Archers = Troops Level x 40</li>
                    <li>Specialists, Riders = Troops Level x 80</li>
                    <li>Spies= Troops Level x 100</li>
                    <li>Griffins= Troops Level x 800</li>
                    <li>Catapults, Walls Walls Level x 200</li>
                    <li>Monsters III-VII (Monster Level ⁃ 2) x1.3k</li>
                    <li>Monsters I & ll=x 8.64k</li>
                    <li>Mercenary Guard Troops Level x120</li>
                    <li>Mercenary Monster = Monster Level x 3k</li>
                </ul>
            </li>
            <li>-FORTER -
                <ul>
                    <li>Scouting = 5 million sølv</li>
                    <li>Attacking without destroying = 10 million sølv</li>
                    <li>Attacking and destroying = 20 million of each Sølv, Iron, Wood, Stone</li>
                </ul>
            </li>
            <li>- HOVEDSTADER -
                <ul>
                    <li>Scouting = 5 million sølv</li>
                    <li>Attacking without destroying = 10 million sølv</li>
                    <li>Attacking and destroying = 50 million of each Sølv, Iron, Wood, Stone</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>5. SKATTER</h3>
        <ul class="roe-points">
            <li>Byer med over 3 dager med opptjente ingots kan angripes av et medlem av Den Kongelige Gard etter å ha fått 24 timers varsel. Gull-ingots har ingen personlig verdi for deg, men Kongen kan bruke dem til å slå på bonuser for hele kongeriket. Hvis vi har gullbarrene, vil de brukes til fordel for K273.</li>
            <li>Maksimale gull-ingots per by:
                <ul>
                    <li>By 1-9: 2000 Ingots</li>
                    <li>By 10-19: 3000 Ingots</li>
                    <li>By 20-24: 10000 Ingots</li>
                    <li>By 25-29: 35000 Ingots</li>
                    <li>By 30-34: 60000 Ingots</li>
                    <li>By 35-39: 70000 Ingots</li>
                    <li>By 40+: 90000 Ingots</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>6. Medlemmer av det aktede kongeriket</h3>
        <ul class="roe-points">
            <li>Hver spiller må følge disse reglene for å være beskyttet av ROE. Spillere som ikke er beskyttet er:
                <ul>
                    <li>UTLAGTE</li>
                    <li>KLANLØSE SPILLERE</li>
                    <li>IKKE-ROE-MEDLEMMER</li>
                </ul>
            </li>
            <li>Utlagte – Hvis individer eller klaner ikke er villige til å følge ROE, som angriper klanbygninger, eller nekter å betale kompensasjon for ROE-brudd vil få status som utlagt. Nåværende utlagte finnes på #K273/OUTLAWS. Den nåværende listen over utlagte vil bli strøket og starte på nytt. Dette betyr at det for øyeblikket ikke finnes utlagte i kongeriket. Den nye Kongelige Gard vil dele ansvar i hjelp til kongeriket.</li>
            <li>Kongelig garde: Den nye Kongelige Gard består av mange klaner og har veldig sterke spillere som medlemmer. RGs oppgaver vil fortsette sine normale oppgaver som skatteinnkreving og håndheving for Palasset. Ekstra oppgaver vil nå inkludere assistanse til å hjelpe klaner med utlagte og kongeriket med presisjon. De vil også fungere som en elitehær og en patrulje- og forsvarsenhet for kongeriket/territoriet.</li>
            <li>I tillegg til å aktivere relasjoner med de større klanene i kongeriket for å assistere ved behov.</li>
            <li>Klanløse spillere på eller under 250k might er beskyttet og skal ikke angripes fritt.</li>
            <li>Klanløse spillere under 250k might som blir angrepet er tillatt 2x kompensasjonsbeløpet i krav.</li>
            <li>Interaksjoner med disse spillerne bør først være å lære om dem og deres mål i spillet. Deretter oppmuntre til å bli med i en klan. Fremme vekst i spillet og spill for kongeriket versus personlig belønning.</li>
        </ul>
    </li>
    <li>
        <h3>7. Clash of Thrones  CoT</h3>
        <ul class="roe-points">
            <li>Under kan du speide og angripe byer under følgende betingelser:</li>
            <li>Ingen klanfort-angrep: Å angripe en annen klans fort eller bygninger er strengt forbudt.</li>
            <li>Portaladministrasjon: Ingen might-begrensning gjelder. Enhver portal som er bevist fiendtlig mot klanens territorier kan angripes med rask rettferdighet av klanen som blir angrepet. Klanmarsjer er fullt tillatt for å lukke fiendtlige portaler. Under normal fredstid kan portaler ikke angripes på noe tidspunkt med mindre de er bevist fiendtlige.</li>
            <li>Ressursadministrasjon: Hold ressurser lave under arrangementet for å unngå tyveri; send tropper til fort hvis nødvendig. Praktiser No Value City (NVC)</li>
            <li>"Fair Play": Å angripe noen som er betydelig svakere (f.eks. under halvparten av din might) anses ofte som dårlig sportsånd og er ikke tillatt. Den eneste instansen det er tillatt er for en fiendtlig portal. Portaler som blir stående åpne av spillere som har andre medlemmer angrep gjennom dem, er fortsatt i feil for å ha latt portalen stå åpen og kan angripes uavhengig av deres might. En angrepsrapport må gis i alle krav som blir gjort. Under halvparten av din might er ikke tillatt. 50%-regelen gjelder.</li>
        </ul>
    </li>
    <li>
        <h3>8. Konfliktløsningsprosess</h3>
        <ul class="roe-points">
            <li>Når ROE brytes, bør følgende trinn tas:
                <ol>
                    <li>Kontakt den andre spilleren for å forsøke å løse. Hvis ingen løsning innen 24 timer, eskaler til klanens diplomat.</li>
                    <li>Hvis ingen løsning oppnås mellom klan-diplomater, kan de bringe saken inn for retten ved å poste den i #K273/CLAIMS. Kun klanledere eller diplomater har lov til å poste krav i denne chatten.</li>
                    <li>Dommerne vil avgjøre for å definere den skyldige parten (hvis noen) og et akseptabelt kompensasjonsbeløp.</li>
                    <li>Hvis den skyldige parten (eller klanen) nekter å kompensere, vil Den Kongelige Domstol avgjøre om spilleren eller klanen skal erklæres som utlagt og Den Kongelige Garde vil bli aktivert i beredskap.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>
        <h3>9. Kongerikets chatter å bli med i</h3>
        <ul class="roe-points">
            <li>#K273/ROE</li>
            <li>#K273/CLAIMS</li>
            <li>#K273/OUTLAWS</li>
            <li>~#K273/CPTHUNDERDOME</li>
            <li>~#K273tbxyz</li>
            <li>~#K273/ACADEMY</li>
        </ul>
    </li>
</ol>
`
        },
        de: {
            strings: {
                "site.languageLabel": "Sprache",
                "site.footer": "Erstellt für K273 von Zee",
                "index.title": "TotalBattle Königreich 273",
                "index.hero.eyebrow": "K273 | Tools & Links",
                "index.hero.title": "TotalBattle Königreich 273",
                "index.hero.lede": "Schneller Zugriff auf unsere Rechner und Ressourcen.",
                "index.palace.eyebrow": "Palast",
                "index.palace.card.title": "Palastrollen & ROE",
                "index.palace.card.body": "Sieh dir die aktuellen Palastrollen und die ROE-Regeln des Königreichs an.",
                "index.palace.card.button": "Palastseite öffnen",
                "index.tools.eyebrow": "Tools",
                "index.calc.card.title": "Rechner für illegale Angriffsschäden",
                "index.calc.card.body": "Gib Verluste ein und kopiere die formatierte Nachricht zurück in den TotalBattle-Chat.",
                "index.calc.card.button": "Rechner öffnen",
                "palace.title": "K273 Palastrollen & ROE",
                "palace.hero.eyebrow": "K273 | Palastübersicht",
                "palace.hero.title": "Palastrollen & ROE",
                "palace.hero.lede": "Aktuelle Führungsplätze und Einsatzregeln des Königreichs.",
                "palace.hero.back": "← Zurück zur Startseite",
                "palace.roles.eyebrow": "Palast",
                "palace.roles.title": "Aktuelle Rollen",
                "palace.roles.sub": "Wer derzeit welchen Platz hält.",
                "palace.roles.updated": "Zuletzt aktualisiert 12/30/2025",
                "palace.roles.table.role": "Rolle",
                "palace.roles.table.player": "Spieler",
                "palace.roles.king": "KÖNIG",
                "palace.roles.hand": "Hand des Königs",
                "palace.roles.queen": "Königin",
                "palace.roles.centurion": "Zenturio",
                "palace.roles.chancellor": "Kanzler",
                "palace.roles.treasurer": "Schatzmeister",
                "palace.roles.archon": "Archon",
                "palace.roles.quaestor": "Quästor",
                "palace.roles.tribute": "Tribut",
                "palace.roles.legate": "Legat",
                "palace.image.alt": "TotalBattle Palast",
                "palace.roe.eyebrow": "ROE",
                "palace.roe.title": "Einsatzregeln",
                "palace.roe.subtitle": "Richtlinien des Königreichs für Kampf und Verhalten.<br>Die englische Version ist das offizielle ROE (Übersetzungen via KI)<br>Zuletzt aktualisiert 12/30/2025",
                "palace.back": "← Zurück zur Startseite",
                "calculator.title": "TotalBattle Schadensrechner",
                "calculator.hero.eyebrow": "K273 | Rechner für illegale Angriffe",
                "calculator.hero.title": "TotalBattle Schaden",
                "calculator.hero.lede": "Gib Verluste ein und erstelle eine kopierfertige Zusammenfassung für ROE-Nachrichten.",
                "calculator.hero.back": "← Zurück zu den Tools",
                "calculator.base.eyebrow": "Basiskosten",
                "calculator.base.title": "Standards",
                "calculator.base.sub": "Nur anpassen, wenn sich Regeln ändern. Werte werden nur für diese Sitzung gespeichert. (Kontaktiere Zee für dauerhafte Änderungen)",
                "calculator.base.pill": "Basis",
                "calculator.clan.eyebrow": "Clan-Gebäude",
                "calculator.clan.title": "Optionale Verluste",
                "calculator.clan.sub": "Nur einbeziehen, wenn Forts/Hauptstädte getroffen werden. Standards sind bearbeitbar.",
                "calculator.clan.include": "In Bericht aufnehmen",
                "calculator.armyFlat.eyebrow": "Armeeverluste",
                "calculator.armyFlat.title": "Pauschale Einträge",
                "calculator.armyFlat.sub": "Gib Grundzahlen für Einheiten mit Pauschalkosten ein.",
                "calculator.armyTier.eyebrow": "Armeeverluste nach Stufe",
                "calculator.armyTier.title": "Stufenbasierte Einträge",
                "calculator.armyTier.sub": "Gib Zahlen für jede Stufe der verlorenen Einheiten ein.",
                "calculator.summary.eyebrow": "Zusammenfassung",
                "calculator.summary.title": "Summen & Kopierblock",
                "calculator.summary.sub": "Füge entnommenes Silber sowie Ressourcen hinzu.",
                "calculator.directSilver": "Entnommenes Silber",
                "calculator.food": "Nahrung",
                "calculator.lumber": "Holz",
                "calculator.stone": "Stein",
                "calculator.iron": "Eisen",
                "calculator.silverSubtotal": "Silber Zwischensumme",
                "calculator.totalLoss": "Gesamtverlust (mit entnommenem Silber)",
                "calculator.calculate": "Berechnen",
                "calculator.reset": "Zurücksetzen",
                "calculator.copyLabel": "Kopierfertige Nachricht",
                "calculator.copyButton": "Zusammenfassung kopieren",
                "calculator.back": "← Zurück zu den Tools",
                "calculator.formula.baseCount": "Basis × Anzahl",
                "calculator.formula.baseCountLevel": "Basis × Anzahl × Stufe",
                "calculator.formula.baseCountLevelMinusTwo": "Basis × Anzahl × (Stufe − 2)",
                "calculator.label.count": "Anzahl",
                "common.show": "Anzeigen",
                "common.hide": "Ausblenden",
                "calc.base.scoutingEvents": "Spähereignisse",
                "calc.base.attackEvents": "Angriffsereignisse",
                "calc.base.portal": "Portal",
                "calc.base.hero": "Held",
                "calc.base.captain": "Kapitän",
                "calc.base.monsters12": "Monster 1-2",
                "calc.base.monsters37": "Monster 3-7",
                "calc.base.spearmenArchers": "Speerträger / Bogenschützen",
                "calc.base.specialistRiders": "Spezialisten / Reiter",
                "calc.base.spies": "Spione",
                "calc.base.griffins": "Greifen",
                "calc.base.catapultsWalls": "Katapulte / Mauern",
                "calc.base.mercGuard": "Söldnergarde",
                "calc.base.mercMonster": "Söldnermonster",
                "calc.base.gold": "Gold",
                "calc.base.tar": "Teer",
                "calc.base.fortScout": "Festung Spähung",
                "calc.base.fortAttack": "Festungsangriff (nicht zerstört)",
                "calc.base.fortDestroy": "Festungsangriff (zerstört)",
                "calc.base.capScout": "Hauptstadt Spähung",
                "calc.base.capAttack": "Hauptstadt Angriff (nicht zerstört)",
                "calc.base.capDestroy": "Hauptstadt Angriff (zerstört)",
                "calc.output.clanBuildings": "CLAN-GEBÄUDE",
                "calc.output.armyLoss": "ARMEEVERLUSTE",
                "calc.output.additionalLoss": "ZUSÄTZLICHE VERLUSTE",
                "calc.output.resourceLoss": "RESSOURCENVERLUSTE",
                "calc.output.fortScout": "Festung Spähung",
                "calc.output.fortAttackHit": "Festungsangriff (Treffer)",
                "calc.output.fortAttackDestroy": "Festungsangriff (zerstört)",
                "calc.output.capScout": "Hauptstadt Spähung",
                "calc.output.capAttackHit": "Hauptstadt Angriff (Treffer)",
                "calc.output.capAttackDestroy": "Hauptstadt Angriff (zerstört)",
                "calc.output.scoutEvents": "Spähereignisse",
                "calc.output.attackEvents": "Angriffsereignisse",
                "calc.output.portalClosed": "Portal geschlossen",
                "calc.output.heroCaptains": "Held/Kapitäne",
                "calc.output.spearmenArchers": "Speerträger/Bogenschützen",
                "calc.output.specialistsRiders": "Spezialisten/Reiter",
                "calc.output.spiesTotal": "Spione gesamt",
                "calc.output.monstersTotal": "Monster gesamt",
                "calc.output.mercenaries": "Söldner",
                "calc.output.wallsCatapult": "Mauern/Katapulte",
                "calc.output.goldTotal": "Gold gesamt",
                "calc.output.tarTotal": "Teer gesamt",
                "calc.output.directSilver": "Entnommenes Silber",
                "calc.output.totalSilverLoss": "GESAMT SILBER VERLUST",
                "calc.output.totalWithTax": "GESAMT (MIT 20% STEUER)",
                "calc.output.food": "Nahrung",
                "calc.output.lumber": "Holz",
                "calc.output.stone": "Stein",
                "calc.output.iron": "Eisen"
            },
            roeHtml: `
<p class="roe-intro">Im Auftrag von König Arihelm ist das folgende ROE für das Königreich in Kraft:</p>
<ol class="roe-list">
    <li>
        <h3>1. FRIEDENSZEIT</h3>
        <ul class="roe-points">
            <li>Angriffe auf Städte sind verboten, außer während CoT und geplanten CP-Austauschen.</li>
            <li>Angriffe auf Portale und Clan-Gebäude sind verboten. Es sei denn, das Portal ist nachweislich feindlich gegenüber dem Clan und oder seinen Ressourcen in seinem Gebiet.</li>
            <li>Scouting ist eine Form der Aggression.</li>
        </ul>
    </li>
    <li>
        <h3>2. DIPLOMATEN</h3>
        <ul class="roe-points">
            <li>Clans müssen mindestens einen Diplomaten in ihrer Clanbeschreibung benennen, der bei der Streitbeilegung helfen kann. Diplomaten müssen ein aktiver Anführer oder Vorgesetzter sein.</li>
        </ul>
    </li>
    <li>
        <h3>3. Allgemeine Regeln</h3>
        <ul class="roe-points">
            <li>Alle Ressourcen-Gebäude innerhalb des Clan-Territoriums gehören diesem Clan.</li>
            <li>Einschließlich WS und DMs.</li>
            <li>Von Spielern erstellte Ressourcen gehören der Person, die sie erstellt hat, sofern nicht vereinbart, zwischen zwei Parteien zu teilen.</li>
            <li>Seltene Krypten gehören der Person, die sie freigeschaltet hat.</li>
            <li>WS und DMs:
                <ul>
                    <li>a. Es gibt kein Registrierungssystem mehr.</li>
                    <li>b. Alle wilden Ressourcen-Gebäude (einschließlich DM/WS) sind first come, first serve (FCFS).</li>
                    <li>c. Ansprüche können nicht geltend gemacht werden, wenn du in wilden Ressourcen gescoutet/angegriffen wirst, es sei denn:
                        <ul>
                            <li>Du verlierst das Gebäude.</li>
                            <li>Du wirst gescoutet/angegriffen und dann erneut angegriffen. (2x-Regel)</li>
                        </ul>
                    </li>
                    <li>d. Es liegt in deiner Verantwortung, deinem Diplomaten, dem anderen Spieler und ihrem Diplomaten/Clanführer eine Nachricht zu senden, wenn dich jemand in einer Mine scoutet oder angreift.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>4. PALAST-ENTSCHÄDIGUNGSLEITFADEN --</h3>
        <ul class="roe-points">
            <li>Jeder Angriff oder jedes Scouting hat einen Grundpreis von 1 Million Silber. Zusätzliche Verluste, Schäden oder gestohlene Ressourcen werden zu diesem Grundpreis hinzugefügt.</li>
            <li>RSS: Betrag in Höhe des gestohlenen Betrags</li>
            <li>Gold: 1 Gold = 3,000 Silber oder Goldminen entsprechend dem gestohlenen Betrag + 10% (nach Entscheidung des Opfers)</li>
            <li>Tar: 1 Tar = 1,000 Silber</li>
            <li>Goldbarren = keine Entschädigung</li>
            <li>Illegal geschlossenes Portal: 1M Silber (+1M für den illegalen Angriff selbst)</li>
            <li>Schaden wird nach folgender Formel berechnet: Verluste an Truppen werden nach folgender Formel berechnet:
                <ul>
                    <li>Held= 1.5k</li>
                    <li>Kapitän= 1k</li>
                    <li>Speerträger, Bogenschützen = Truppenstufe x 40</li>
                    <li>Spezialisten, Reiter = Truppenstufe x 80</li>
                    <li>Spione= Truppenstufe x 100</li>
                    <li>Greifen= Truppenstufe x 800</li>
                    <li>Katapulte, Mauern Mauerstufe x 200</li>
                    <li>Monster III-VII (Monsterstufe ⁃ 2) x1.3k</li>
                    <li>Monster I & II = x 8.64k</li>
                    <li>Söldnergarde Truppenstufe x120</li>
                    <li>Söldnermonster = Monsterstufe x 3k</li>
                </ul>
            </li>
            <li>-FORTS -
                <ul>
                    <li>Scouting = 5 Millionen Silber</li>
                    <li>Angriff ohne Zerstörung = 10 Millionen Silber</li>
                    <li>Angriff und Zerstörung = 20 Millionen von jedem Silber, Iron, Wood, Stone</li>
                </ul>
            </li>
            <li>- HAUPTSTÄDTE -
                <ul>
                    <li>Scouting = 5 Millionen Silber</li>
                    <li>Angriff ohne Zerstörung = 10 Millionen Silber</li>
                    <li>Angriff und Zerstörung = 50 Millionen von jedem Silber, Iron, Wood, Stone</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>5. STEUERN</h3>
        <ul class="roe-points">
            <li>Städte mit mehr als 3 Tagen angesammelter Barren können von einem Mitglied der Königlichen Garde nach 24 Stunden Warnung angegriffen werden. Goldbarren haben für dich persönlich keinen Wert, aber der König kann sie verwenden, um Boni für das gesamte Königreich zu aktivieren. Wenn wir die Goldbarren haben, werden sie zum Nutzen von K273 verwendet.</li>
            <li>Maximale Goldbarren pro Stadt:
                <ul>
                    <li>Stadt 1-9: 2000 Barren</li>
                    <li>Stadt 10-19: 3000 Barren</li>
                    <li>Stadt 20-24: 10000 Barren</li>
                    <li>Stadt 25-29: 35000 Barren</li>
                    <li>Stadt 30-34: 60000 Barren</li>
                    <li>Stadt 35-39: 70000 Barren</li>
                    <li>Stadt 40+: 90000 Barren</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>6. Mitglieder des Geschätzten Königreichs</h3>
        <ul class="roe-points">
            <li>Jeder Spieler muss diese Regeln befolgen, um durch das ROE geschützt zu sein. Spieler, die nicht geschützt sind, sind:
                <ul>
                    <li>GEÄCHTETE</li>
                    <li>CLANLOSE SPIELER</li>
                    <li>NICHT-ROE-MITGLIEDER</li>
                </ul>
            </li>
            <li>Geächtete – Wenn Einzelpersonen oder Clans nicht bereit sind, das ROE einzuhalten, die Clan-Gebäude angreifen oder sich weigern, Entschädigung für ROE-Verstöße zu zahlen, erhalten sie den Status Geächteter. Aktuelle Geächtete sind unter #K273/OUTLAWS zu finden. Die aktuelle Liste der Geächteten wird gelöscht und neu begonnen. Das bedeutet, dass es derzeit keine Geächteten im Königreich gibt. Die neue Königliche Garde wird die Verantwortlichkeiten in der Unterstützung des Königreichs teilen.</li>
            <li>Königliche Garde: Die neue Königliche Garde besteht aus vielen Clans und hat sehr starke Spieler als Mitglieder. Die Aufgaben der RG werden ihre normalen Aufgaben wie Steuereintreibung und Durchsetzung für den Palast fortsetzen. Zusätzliche Aufgaben werden nun die Unterstützung von Clans mit Geächteten und dem Königreich mit Präzision einschließen. Sie werden auch als Elitearmee und Patrouillen- und Verteidigungseinheit des Königreichs/der Territorien agieren.</li>
            <li>Zusätzlich zur Aktivierung von Beziehungen zu den großen Clans des Königreichs, um bei Bedarf zu helfen.</li>
            <li>Clanlose Spieler mit oder unter 250k Macht sind geschützt und dürfen nicht frei angegriffen werden.</li>
            <li>Clanlose Spieler unter 250k Macht, die angegriffen werden, dürfen 2x den Entschädigungsbetrag in Ansprüchen geltend machen.</li>
            <li>Interaktionen mit diesen Spielern sollten zuerst dazu dienen, sie und ihre Ziele im Spiel kennenzulernen. Danach Ermutigung, einem Clan beizutreten. Wachstum im Spiel fördern und für das Königreich spielen statt für persönlichen Gewinn.</li>
        </ul>
    </li>
    <li>
        <h3>7. Clash of Thrones  CoT</h3>
        <ul class="roe-points">
            <li>Währenddessen kannst du Städte unter folgenden Bedingungen scouten und angreifen:</li>
            <li>Keine Clan-Fort-Angriffe: Angriffe auf die Forts oder Gebäude eines anderen Clans sind strikt verboten.</li>
            <li>Portalverwaltung: Keine Machtbeschränkung gilt. Jedes Portal, das nachweislich feindlich gegenüber Clan-Gebieten ist, kann vom angegriffenen Clan mit schneller Gerechtigkeit angegriffen werden. Clan-Märsche sind vollständig erlaubt, um feindliche Portale zu schließen. Während der normalen Friedenszeit dürfen Portale zu keiner Zeit angegriffen werden, es sei denn, sie sind nachweislich feindlich.</li>
            <li>Ressourcenverwaltung: Halte Ressourcen während des Events niedrig, um Diebstahl zu vermeiden; schicke bei Bedarf Truppen zu Forts. Praktiziere No Value City (NVC)</li>
            <li>"Fair Play": Jemanden deutlich Schwächeren anzugreifen (z. B. unter der Hälfte deiner Macht) wird oft als unsportlich angesehen und ist nicht erlaubt. Die einzige Ausnahme ist ein feindliches Portal. Portale, die von Spielern offen gelassen werden, die andere Mitglieder durch sie angreifen lassen, sind weiterhin schuld daran, das Portal offen gelassen zu haben, und können unabhängig von ihrer Macht angegriffen werden. Ein Angriffsbericht muss bei allen geltend gemachten Ansprüchen vorgelegt werden. Unter der Hälfte deiner Macht ist nicht erlaubt. Die 50%-Regel gilt.</li>
        </ul>
    </li>
    <li>
        <h3>8. Konfliktlösungsprozess</h3>
        <ul class="roe-points">
            <li>Wenn das ROE verletzt wird, sollten die folgenden Schritte unternommen werden:
                <ol>
                    <li>Kontaktiere den anderen Spieler, um zu versuchen, eine Lösung zu finden. Wenn innerhalb von 24 Stunden keine Lösung erfolgt, eskaliere zu deinem Clan-Diplomaten.</li>
                    <li>Wenn zwischen Clan-Diplomaten keine Lösung erreicht wird, können sie das Thema vor den Hof bringen, indem sie es in #K273/CLAIMS posten. Nur Clanführer oder Diplomaten dürfen in diesem Chat Ansprüche posten.</li>
                    <li>Die Richter werden entscheiden, um die schuldige Partei (falls vorhanden) und eine akzeptable Entschädigungssumme zu bestimmen.</li>
                    <li>Wenn die schuldige Partei (oder ihr Clan) sich weigert zu entschädigen, entscheidet der Königliche Hof, ob der Spieler oder Clan als Geächteter erklärt werden soll und die Königliche Garde wird in Bereitschaft aktiviert.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>
        <h3>9. Königreichs-Chats zum Beitreten</h3>
        <ul class="roe-points">
            <li>#K273/ROE</li>
            <li>#K273/CLAIMS</li>
            <li>#K273/OUTLAWS</li>
            <li>~#K273/CPTHUNDERDOME</li>
            <li>~#K273tbxyz</li>
            <li>~#K273/ACADEMY</li>
        </ul>
    </li>
</ol>
`
        },
        es: {
            strings: {
                "site.languageLabel": "Idioma",
                "site.footer": "Creado para K273 por Zee",
                "index.title": "TotalBattle Reino 273",
                "index.hero.eyebrow": "K273 | Herramientas y enlaces",
                "index.hero.title": "TotalBattle Reino 273",
                "index.hero.lede": "Acceso rápido a nuestros calculadores y recursos.",
                "index.palace.eyebrow": "Palacio",
                "index.palace.card.title": "Roles del palacio y ROE",
                "index.palace.card.body": "Consulta las últimas asignaciones del palacio y las reglas de enfrentamiento del reino.",
                "index.palace.card.button": "Abrir página del palacio",
                "index.tools.eyebrow": "Herramientas",
                "index.calc.card.title": "Calculadora de costo de daño por ataque ilegal",
                "index.calc.card.body": "Ingresa pérdidas y copia el mensaje formateado de vuelta al chat de TotalBattle.",
                "index.calc.card.button": "Abrir calculadora",
                "palace.title": "K273 Roles del palacio y ROE",
                "palace.hero.eyebrow": "K273 | Resumen del palacio",
                "palace.hero.title": "Roles del palacio y ROE",
                "palace.hero.lede": "Asientos de liderazgo actuales y las reglas de enfrentamiento del reino.",
                "palace.hero.back": "← Volver a inicio",
                "palace.roles.eyebrow": "Palacio",
                "palace.roles.title": "Roles actuales",
                "palace.roles.sub": "Quién ocupa cada puesto en este momento.",
                "palace.roles.updated": "Última actualización 12/30/2025",
                "palace.roles.table.role": "Rol",
                "palace.roles.table.player": "Jugador",
                "palace.roles.king": "REY",
                "palace.roles.hand": "Mano del Rey",
                "palace.roles.queen": "Reina",
                "palace.roles.centurion": "Centurión",
                "palace.roles.chancellor": "Canciller",
                "palace.roles.treasurer": "Tesorero",
                "palace.roles.archon": "Arconte",
                "palace.roles.quaestor": "Cuestor",
                "palace.roles.tribute": "Tributo",
                "palace.roles.legate": "Legado",
                "palace.image.alt": "Palacio TotalBattle",
                "palace.roe.eyebrow": "ROE",
                "palace.roe.title": "Reglas de enfrentamiento",
                "palace.roe.subtitle": "Directrices del reino para el combate y la conducta.<br>La versión en inglés es el ROE oficial (Traducciones vía IA)<br>Última actualización 12/30/2025",
                "palace.back": "← Volver a inicio",
                "calculator.title": "Calculadora de Daño TotalBattle",
                "calculator.hero.eyebrow": "K273 | Calculadora de ataque ilegal",
                "calculator.hero.title": "Daño TotalBattle",
                "calculator.hero.lede": "Ingresa pérdidas y genera un resumen listo para copiar para mensajes ROE.",
                "calculator.hero.back": "← Volver a herramientas",
                "calculator.base.eyebrow": "Costos base",
                "calculator.base.title": "Valores predeterminados",
                "calculator.base.sub": "Ajusta solo si cambian las reglas. Los valores se guardan solo para esta sesión. (Contacta a Zee para cambios permanentes)",
                "calculator.base.pill": "Base",
                "calculator.clan.eyebrow": "Edificios de clan",
                "calculator.clan.title": "Pérdidas opcionales",
                "calculator.clan.sub": "Incluye solo cuando se golpean fuertes/capitales. Los valores se pueden editar.",
                "calculator.clan.include": "Incluir en el informe",
                "calculator.armyFlat.eyebrow": "Pérdidas del ejército",
                "calculator.armyFlat.title": "Entradas de costo plano",
                "calculator.armyFlat.sub": "Ingresa recuentos básicos para unidades de costo plano perdidas.",
                "calculator.armyTier.eyebrow": "Pérdidas de ejército por nivel",
                "calculator.armyTier.title": "Entradas por nivel",
                "calculator.armyTier.sub": "Ingresa recuentos para cada nivel de unidades perdidas.",
                "calculator.summary.eyebrow": "Resumen",
                "calculator.summary.title": "Totales y bloque de copia",
                "calculator.summary.sub": "Agrega cualquier plata tomada así como recursos.",
                "calculator.directSilver": "Plata tomada",
                "calculator.food": "Comida",
                "calculator.lumber": "Madera",
                "calculator.stone": "Piedra",
                "calculator.iron": "Hierro",
                "calculator.silverSubtotal": "Subtotal de plata",
                "calculator.totalLoss": "Pérdida total (con plata tomada)",
                "calculator.calculate": "Calcular",
                "calculator.reset": "Restablecer",
                "calculator.copyLabel": "Mensaje listo para copiar",
                "calculator.copyButton": "Copiar resumen",
                "calculator.back": "← Volver a herramientas",
                "calculator.formula.baseCount": "Base × Cantidad",
                "calculator.formula.baseCountLevel": "Base × Cantidad × Nivel",
                "calculator.formula.baseCountLevelMinusTwo": "Base × Cantidad × (Nivel − 2)",
                "calculator.label.count": "Cantidad",
                "common.show": "Mostrar",
                "common.hide": "Ocultar",
                "calc.base.scoutingEvents": "Eventos de scouting",
                "calc.base.attackEvents": "Eventos de ataque",
                "calc.base.portal": "Portal",
                "calc.base.hero": "Héroe",
                "calc.base.captain": "Capitán",
                "calc.base.monsters12": "Monstruos 1-2",
                "calc.base.monsters37": "Monstruos 3-7",
                "calc.base.spearmenArchers": "Lanceros / Arqueros",
                "calc.base.specialistRiders": "Especialistas / Jinetes",
                "calc.base.spies": "Espías",
                "calc.base.griffins": "Grifos",
                "calc.base.catapultsWalls": "Catapultas / Murallas",
                "calc.base.mercGuard": "Guardia mercenaria",
                "calc.base.mercMonster": "Monstruo mercenario",
                "calc.base.gold": "Oro",
                "calc.base.tar": "Alquitrán",
                "calc.base.fortScout": "Scouting de fort",
                "calc.base.fortAttack": "Ataque a fort (no destruido)",
                "calc.base.fortDestroy": "Ataque a fort (destruido)",
                "calc.base.capScout": "Scouting de capital",
                "calc.base.capAttack": "Ataque a capital (no destruida)",
                "calc.base.capDestroy": "Ataque a capital (destruida)",
                "calc.output.clanBuildings": "EDIFICIOS DE CLAN",
                "calc.output.armyLoss": "PÉRDIDAS DEL EJÉRCITO",
                "calc.output.additionalLoss": "PÉRDIDAS ADICIONALES",
                "calc.output.resourceLoss": "PÉRDIDA DE RECURSOS",
                "calc.output.fortScout": "Scouting de fort",
                "calc.output.fortAttackHit": "Ataque a fort (impacto)",
                "calc.output.fortAttackDestroy": "Ataque a fort (destruido)",
                "calc.output.capScout": "Scouting de capital",
                "calc.output.capAttackHit": "Ataque a capital (impacto)",
                "calc.output.capAttackDestroy": "Ataque a capital (destruida)",
                "calc.output.scoutEvents": "Eventos de scouting",
                "calc.output.attackEvents": "Eventos de ataque",
                "calc.output.portalClosed": "Portal cerrado",
                "calc.output.heroCaptains": "Héroe/Capitanes",
                "calc.output.spearmenArchers": "Lanceros/Arqueros",
                "calc.output.specialistsRiders": "Especialistas/Jinetes",
                "calc.output.spiesTotal": "Espías total",
                "calc.output.monstersTotal": "Monstruos total",
                "calc.output.mercenaries": "Mercenarios",
                "calc.output.wallsCatapult": "Murallas/Catapultas",
                "calc.output.goldTotal": "Oro total",
                "calc.output.tarTotal": "Alquitrán total",
                "calc.output.directSilver": "Plata tomada",
                "calc.output.totalSilverLoss": "PÉRDIDA TOTAL DE PLATA",
                "calc.output.totalWithTax": "TOTAL (CON 20% IMPUESTO)",
                "calc.output.food": "Comida",
                "calc.output.lumber": "Madera",
                "calc.output.stone": "Piedra",
                "calc.output.iron": "Hierro"
            },
            roeHtml: `
<p class="roe-intro">Por orden del Rey Arihelm, el siguiente ROE está en vigor para el reino:</p>
<ol class="roe-list">
    <li>
        <h3>1. TIEMPO DE PAZ</h3>
        <ul class="roe-points">
            <li>Los ataques a ciudades están prohibidos excepto durante CoT y los intercambios de CP planificados.</li>
            <li>Los ataques a portales y edificios de clan están prohibidos. A menos que el portal esté probado como hostil al clan y o sus recursos en su territorio.</li>
            <li>El scouting es una forma de agresión.</li>
        </ul>
    </li>
    <li>
        <h3>2. DIPLOMÁTICOS</h3>
        <ul class="roe-points">
            <li>Los clanes deben identificar al menos un diplomático en la descripción de su clan que pueda ayudar con la resolución de disputas. Los diplomáticos deben ser un líder o superior activo.</li>
        </ul>
    </li>
    <li>
        <h3>3. Reglas Generales</h3>
        <ul class="roe-points">
            <li>Todos los edificios de recursos dentro del territorio del clan pertenecen a ese clan.</li>
            <li>Incluyendo WS y DMs.</li>
            <li>Los recursos creados por jugadores pertenecen al individuo que los creó a menos que se acuerde compartir entre dos partes.</li>
            <li>Las criptas raras pertenecen al individuo que las desbloqueó.</li>
            <li>WS y DMs:
                <ul>
                    <li>a. Ya no hay un sistema de registro.</li>
                    <li>b. Todos los edificios de recursos salvajes (incluyendo DM/WS) son por orden de llegada (FCFS).</li>
                    <li>c. No se pueden hacer reclamos si eres scoutado/atacado en recursos salvajes a menos que:
                        <ul>
                            <li>Pierdas el edificio.</li>
                            <li>Seas scoutado/atacado y luego atacado de nuevo. (regla 2x)</li>
                        </ul>
                    </li>
                    <li>d. Es tu responsabilidad enviar un mensaje a tu diplomático, al otro jugador y a su diplomático/líder de clan si alguien te scoutea o te ataca en una mina.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>4. GUÍA DE COMPENSACIÓN DEL PALACIO --</h3>
        <ul class="roe-points">
            <li>Cada ataque o scouting conlleva un costo base de 1 millón de plata. Cualquier pérdida adicional, daño o recurso robado se agrega encima de este costo base.</li>
            <li>RSS: cantidad igual a la cantidad robada</li>
            <li>Oro: 1 Oro = 3,000 Plata o minas de oro iguales a lo robado + 10% (por decisión de la víctima)</li>
            <li>Tar: 1 Tar = 1,000 Plata</li>
            <li>Barras de oro = sin compensación</li>
            <li>Portal cerrado ilegalmente: 1M plata (+1M por el ataque ilegal en sí)</li>
            <li>El daño se calcula de acuerdo con la siguiente fórmula: Las pérdidas de tropas se calculan de acuerdo con la siguiente fórmula:
                <ul>
                    <li>Héroe= 1.5k</li>
                    <li>Capitán= 1k</li>
                    <li>Lanceros, Arqueros = Nivel de tropas x 40</li>
                    <li>Especialistas, Jinetes = Nivel de tropas x 80</li>
                    <li>Espías= Nivel de tropas x 100</li>
                    <li>Grifos= Nivel de tropas x 800</li>
                    <li>Catapultas, Murallas Nivel de murallas x 200</li>
                    <li>Monstruos III-VII (Nivel de monstruo ⁃ 2) x1.3k</li>
                    <li>Monstruos I & II = x 8.64k</li>
                    <li>Guardia mercenaria Nivel de tropas x120</li>
                    <li>Monstruo mercenario = Nivel de monstruo x 3k</li>
                </ul>
            </li>
            <li>- FUERTES -
                <ul>
                    <li>Scouting = 5 millones de plata</li>
                    <li>Atacar sin destruir = 10 millones de plata</li>
                    <li>Atacar y destruir = 20 millones de cada Plata, Iron, Wood, Stone</li>
                </ul>
            </li>
            <li>- CAPITALES -
                <ul>
                    <li>Scouting = 5 millones de plata</li>
                    <li>Atacar sin destruir = 10 millones de plata</li>
                    <li>Atacar y destruir = 50 millones de cada Plata, Iron, Wood, Stone</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>5. IMPUESTOS</h3>
        <ul class="roe-points">
            <li>Las ciudades con más de 3 días de lingotes acumulados pueden ser atacadas por un miembro de la Guardia Real después de recibir 24 horas de aviso. Los lingotes de oro no tienen valor para ti personalmente, pero el Rey puede usarlos para activar bonificaciones para todo el reino. Si tenemos las barras de oro, se usarán en beneficio de K273.</li>
            <li>Máximo de lingotes de oro por ciudad:
                <ul>
                    <li>Ciudad 1-9: 2000 Lingotes</li>
                    <li>Ciudad 10-19: 3000 Lingotes</li>
                    <li>Ciudad 20-24: 10000 Lingotes</li>
                    <li>Ciudad 25-29: 35000 Lingotes</li>
                    <li>Ciudad 30-34: 60000 Lingotes</li>
                    <li>Ciudad 35-39: 70000 Lingotes</li>
                    <li>Ciudad 40+: 90000 Lingotes</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>6. Miembros del Reino Estimado</h3>
        <ul class="roe-points">
            <li>Cada jugador debe cumplir estas reglas para estar protegido por el ROE. Los jugadores no protegidos son:
                <ul>
                    <li>FORAJIDOS</li>
                    <li>JUGADORES SIN CLAN</li>
                    <li>MIEMBROS NO-ROE</li>
                </ul>
            </li>
            <li>Forajidos – Si individuos o clanes no están dispuestos a cumplir con el ROE, que atacan edificios de clan, o se niegan a pagar compensación por violaciones del ROE recibirán el estatus de forajido. Los Forajidos actuales se pueden encontrar en #K273/OUTLAWS. La lista actual de forajidos se eliminará y comenzará de nuevo. Esto significa que actualmente no hay forajidos en el reino. La nueva Guardia Real compartirá responsabilidades en la asistencia del reino.</li>
            <li>Guardia Real: La nueva Guardia Real está compuesta por muchos clanes y tiene jugadores muy fuertes como miembros. Los deberes de la RG continuarán sus deberes normales como la recolección de impuestos y la aplicación para el Palacio. Los deberes adicionales ahora incluirán asistencia para ayudar a los clanes con forajidos y al reino con precisión. También actuarán como un ejército de élite y una unidad de patrulla y defensa del reino/territorio.</li>
            <li>Además de activar relaciones con los grandes clanes del reino para ayudar según sea necesario.</li>
            <li>Los jugadores sin clan en o por debajo de 250k de poder están protegidos y no deben ser atacados libremente.</li>
            <li>Los jugadores sin clan de menos de 250k de poder atacados tienen permitido reclamar 2x el monto de compensación.</li>
            <li>Las interacciones con estos jugadores primero deben ser para conocerlos y sus objetivos en el juego. Seguido de aliento para unirse a un clan. Fomentar el crecimiento en el juego y jugar por el reino versus recompensa personal.</li>
        </ul>
    </li>
    <li>
        <h3>7. Clash of Thrones  CoT</h3>
        <ul class="roe-points">
            <li>Durante, puedes scoutear y atacar ciudades bajo las siguientes condiciones:</li>
            <li>Sin ataques a fuertes de clan: Atacar los fuertes o edificios de otro clan está estrictamente prohibido.</li>
            <li>Gestión de Portales: No aplica restricción de poder. Cualquier portal probado como hostil a los territorios del clan puede ser atacado con justicia rápida por el clan que está siendo atacado. Las marchas de clan están totalmente permitidas para cerrar portales hostiles. Durante la paz normal, los portales no pueden ser atacados en ningún momento a menos que se demuestre hostiles.</li>
            <li>Gestión de Recursos: Mantén los recursos bajos durante el evento para evitar robo; envía tropas a fuertes si es necesario. Practica No Value City (NVC)</li>
            <li>"Fair Play": Atacar a alguien significativamente más débil (p. ej., por debajo de la mitad de tu poder) a menudo se considera mala deportividad y no está permitido. La única instancia en que se permite es para un portal hostil. Los portales dejados abiertos por jugadores que tienen otros miembros atacando a través de ellos siguen siendo culpables por dejar el portal abierto y pueden ser atacados independientemente de su poder. Se debe proporcionar un informe de ataque en todas las reclamaciones realizadas. Por debajo de la mitad de tu poder no está permitido. Se aplica la regla del 50%.</li>
        </ul>
    </li>
    <li>
        <h3>8. Proceso de resolución de conflictos</h3>
        <ul class="roe-points">
            <li>Cuando el ROE es violado, se deben seguir los siguientes pasos:
                <ol>
                    <li>Contacta al otro jugador para intentar resolver. Si no hay resolución dentro de 24 horas, eleva a tu diplomático de clan.</li>
                    <li>Si no se llega a una resolución entre diplomáticos de clan, pueden llevar el asunto ante la Corte publicándolo en #K273/CLAIMS. Solo líderes de clan o diplomáticos pueden publicar reclamaciones en este chat.</li>
                    <li>Los jueces adjudicarán para definir la parte culpable (si la hay) y una cantidad aceptable de compensación.</li>
                    <li>Si la parte culpable (o su clan) se niega a compensar, la Corte Real determinará si el jugador o clan debe ser declarado forajido y la Guardia Real será activada en espera.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>
        <h3>9. Chats del Reino para Unirse</h3>
        <ul class="roe-points">
            <li>#K273/ROE</li>
            <li>#K273/CLAIMS</li>
            <li>#K273/OUTLAWS</li>
            <li>~#K273/CPTHUNDERDOME</li>
            <li>~#K273tbxyz</li>
            <li>~#K273/ACADEMY</li>
        </ul>
    </li>
</ol>
`
        },
        fr: {
            strings: {
                "site.languageLabel": "Langue",
                "site.footer": "Créé pour K273 par Zee",
                "index.title": "TotalBattle Royaume 273",
                "index.hero.eyebrow": "K273 | Outils & Liens",
                "index.hero.title": "TotalBattle Royaume 273",
                "index.hero.lede": "Accès rapide à nos calculateurs et ressources.",
                "index.palace.eyebrow": "Palais",
                "index.palace.card.title": "Rôles du palais & ROE",
                "index.palace.card.body": "Consultez les rôles actuels du palais et les règles d'engagement du royaume.",
                "index.palace.card.button": "Ouvrir la page du palais",
                "index.tools.eyebrow": "OUTILS",
                "index.calc.card.title": "Calculateur de coût des dégâts d'attaque illégale",
                "index.calc.card.body": "Saisissez les pertes et copiez le message formaté dans le chat TotalBattle.",
                "index.calc.card.button": "Ouvrir le calculateur",
                "palace.title": "K273 Rôles du palais & ROE",
                "palace.hero.eyebrow": "K273 | Aperçu du palais",
                "palace.hero.title": "Rôles du palais & ROE",
                "palace.hero.lede": "Postes de direction actuels et règles d'engagement du royaume.",
                "palace.hero.back": "← Retour à l'accueil",
                "palace.roles.eyebrow": "Palais",
                "palace.roles.title": "Rôles actuels",
                "palace.roles.sub": "Qui occupe chaque poste actuellement.",
                "palace.roles.updated": "Dernière mise à jour 12/30/2025",
                "palace.roles.table.role": "Rôle",
                "palace.roles.table.player": "Joueur",
                "palace.roles.king": "ROI",
                "palace.roles.hand": "Main du Roi",
                "palace.roles.queen": "Reine",
                "palace.roles.centurion": "Centurion",
                "palace.roles.chancellor": "Chancelier",
                "palace.roles.treasurer": "Trésorier",
                "palace.roles.archon": "Archonte",
                "palace.roles.quaestor": "Questeur",
                "palace.roles.tribute": "Tribut",
                "palace.roles.legate": "Légat",
                "palace.image.alt": "Palais TotalBattle",
                "palace.roe.eyebrow": "ROE",
                "palace.roe.title": "Règles d'engagement",
                "palace.roe.subtitle": "Directives du royaume pour le combat et la conduite.<br>La version anglaise est le ROE officiel (Traductions via IA)<br>Dernière mise à jour 12/30/2025",
                "palace.back": "← Retour à l'accueil",
                "calculator.title": "TotalBattle Calculateur de dégâts",
                "calculator.hero.eyebrow": "K273 | Calculateur d'attaque illégale",
                "calculator.hero.title": "TotalBattle Dégâts",
                "calculator.hero.lede": "Saisissez les pertes et générez un résumé prêt à copier pour les messages ROE.",
                "calculator.hero.back": "← Retour aux outils",
                "calculator.base.eyebrow": "Coûts de base",
                "calculator.base.title": "Par défaut",
                "calculator.base.sub": "Ajustez uniquement si les règles changent. Les valeurs sont enregistrées uniquement pour cette session. (Contactez Zee pour des changements permanents)",
                "calculator.base.pill": "Base",
                "calculator.clan.eyebrow": "Bâtiments de clan",
                "calculator.clan.title": "Pertes optionnelles",
                "calculator.clan.sub": "Inclure uniquement lorsque des forts/capitales sont touchés. Les valeurs par défaut sont modifiables.",
                "calculator.clan.include": "Inclure dans le rapport",
                "calculator.armyFlat.eyebrow": "Pertes d'armée",
                "calculator.armyFlat.title": "Entrées à coût fixe",
                "calculator.armyFlat.sub": "Saisissez des comptes de base pour les unités à coût fixe perdues.",
                "calculator.armyTier.eyebrow": "Pertes d'armée par niveau",
                "calculator.armyTier.title": "Entrées basées sur le niveau",
                "calculator.armyTier.sub": "Saisissez les comptes pour chaque niveau d'unités perdues.",
                "calculator.summary.eyebrow": "Résumé",
                "calculator.summary.title": "Totaux & bloc à copier",
                "calculator.summary.sub": "Ajoutez tout argent pris ainsi que les ressources.",
                "calculator.directSilver": "Argent pris",
                "calculator.food": "Nourriture",
                "calculator.lumber": "Bois",
                "calculator.stone": "Pierre",
                "calculator.iron": "Fer",
                "calculator.silverSubtotal": "Sous-total argent",
                "calculator.totalLoss": "Perte totale (avec argent pris)",
                "calculator.calculate": "Calculer",
                "calculator.reset": "Réinitialiser",
                "calculator.copyLabel": "Message prêt à copier",
                "calculator.copyButton": "Copier le résumé",
                "calculator.back": "← Retour aux outils",
                "calculator.formula.baseCount": "Base × Quantité",
                "calculator.formula.baseCountLevel": "Base × Quantité × Niv.",
                "calculator.formula.baseCountLevelMinusTwo": "Base × Quantité × (Niv. − 2)",
                "calculator.label.count": "Quantité",
                "common.show": "Afficher",
                "common.hide": "Masquer",
                "calc.base.scoutingEvents": "Événements d'éclaireur",
                "calc.base.attackEvents": "Événements d'attaque",
                "calc.base.portal": "Portail",
                "calc.base.hero": "Héros",
                "calc.base.captain": "Capitaine",
                "calc.base.monsters12": "Monstres 1-2",
                "calc.base.monsters37": "Monstres 3-7",
                "calc.base.spearmenArchers": "Lanciers / Archers",
                "calc.base.specialistRiders": "Spécialistes / Cavaliers",
                "calc.base.spies": "Espions",
                "calc.base.griffins": "Griffons",
                "calc.base.catapultsWalls": "Catapultes / Murs",
                "calc.base.mercGuard": "Garde mercenaire",
                "calc.base.mercMonster": "Monstre mercenaire",
                "calc.base.gold": "Or",
                "calc.base.tar": "Goudron",
                "calc.base.fortScout": "Éclaireur de fort",
                "calc.base.fortAttack": "Attaque de fort (non détruit)",
                "calc.base.fortDestroy": "Attaque de fort (détruit)",
                "calc.base.capScout": "Éclaireur de capitale",
                "calc.base.capAttack": "Attaque de capitale (non détruite)",
                "calc.base.capDestroy": "Attaque de capitale (détruite)",
                "calc.output.clanBuildings": "BÂTIMENTS DE CLAN",
                "calc.output.armyLoss": "PERTES D'ARMÉE",
                "calc.output.additionalLoss": "PERTES SUPPLÉMENTAIRES",
                "calc.output.resourceLoss": "PERTES DE RESSOURCES",
                "calc.output.fortScout": "Éclaireur de fort",
                "calc.output.fortAttackHit": "Attaque de fort (coup)",
                "calc.output.fortAttackDestroy": "Attaque de fort (détruit)",
                "calc.output.capScout": "Éclaireur de capitale",
                "calc.output.capAttackHit": "Attaque de capitale (coup)",
                "calc.output.capAttackDestroy": "Attaque de capitale (détruite)",
                "calc.output.scoutEvents": "Événements d'éclaireur",
                "calc.output.attackEvents": "Événements d'attaque",
                "calc.output.portalClosed": "Portail fermé",
                "calc.output.heroCaptains": "Héros/Capitaines",
                "calc.output.spearmenArchers": "Lanciers/Archers",
                "calc.output.specialistsRiders": "Spécialistes/Cavaliers",
                "calc.output.spiesTotal": "Espions total",
                "calc.output.monstersTotal": "Monstres total",
                "calc.output.mercenaries": "Mercenaires",
                "calc.output.wallsCatapult": "Murs/Catapultes",
                "calc.output.goldTotal": "Or total",
                "calc.output.tarTotal": "Goudron total",
                "calc.output.directSilver": "Argent pris",
                "calc.output.totalSilverLoss": "PERTE TOTALE DE ARGENT",
                "calc.output.totalWithTax": "TOTAL (AVEC 20% TAXE)",
                "calc.output.food": "Nourriture",
                "calc.output.lumber": "Bois",
                "calc.output.stone": "Pierre",
                "calc.output.iron": "Fer"
            },
            roeHtml: `
<p class="roe-intro">Par ordre du Roi Arihelm, le ROE suivant est en vigueur pour le royaume:</p>
<ol class="roe-list">
    <li>
        <h3>1. TEMPS DE PAIX</h3>
        <ul class="roe-points">
            <li>Les attaques sur les villes sont interdites sauf pendant CoT et les échanges de CP planifiés.</li>
            <li>Les attaques sur les portails et les bâtiments de clan sont interdites. Sauf si le portail est prouvé hostile au clan et ou à ses ressources sur son territoire.</li>
            <li>Le scouting est une forme d'agression.</li>
        </ul>
    </li>
    <li>
        <h3>2. DIPLOMATES</h3>
        <ul class="roe-points">
            <li>Les clans doivent identifier au moins un diplomate dans la description de leur clan qui peut aider à la résolution des conflits. Les diplomates doivent être un leader actif ou supérieur.</li>
        </ul>
    </li>
    <li>
        <h3>3. Règles générales</h3>
        <ul class="roe-points">
            <li>Tous les bâtiments de ressources dans le territoire du clan appartiennent à ce clan.</li>
            <li>Y compris WS et DMs.</li>
            <li>Les ressources créées par les joueurs appartiennent à l'individu qui les a créées sauf accord de partage entre deux parties.</li>
            <li>Les cryptes rares appartiennent à l'individu qui les a déverrouillées.</li>
            <li>WS et DMs:
                <ul>
                    <li>a. Il n'y a plus de système d'enregistrement.</li>
                    <li>b. Tous les bâtiments de ressources sauvages (y compris DM/WS) sont premiers arrivés, premiers servis (FCFS).</li>
                    <li>c. Les réclamations ne peuvent pas être faites si vous êtes scouté/attaqué dans des ressources sauvages sauf si:
                        <ul>
                            <li>Vous perdez le bâtiment.</li>
                            <li>Vous êtes scouté/attaqué puis attaqué à nouveau. (règle 2x)</li>
                        </ul>
                    </li>
                    <li>d. Il est de votre responsabilité d'envoyer un message à votre diplomate, à l'autre joueur et à leur diplomate/chef de clan si quelqu'un vous scoute ou vous attaque dans une mine.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>4. GUIDE DE COMPENSATION DU PALAIS --</h3>
        <ul class="roe-points">
            <li>Chaque attaque ou scouting entraîne un coût de base de 1 million de argent. Toute perte supplémentaire, dommage ou ressource volée s'ajoute à ce coût de base.</li>
            <li>RSS: montant égal au montant volé</li>
            <li>Or: 1 Or = 3,000 Argent ou mines d'or égales au volé + 10% (décision de la victime)</li>
            <li>Tar: 1 Tar = 1,000 Argent</li>
            <li>Barres d'or = aucune compensation</li>
            <li>Portail fermé illégalement: 1M argent (+1M pour l'attaque illégale elle-même)</li>
            <li>Les dégâts sont calculés selon la formule suivante: Les pertes de troupes sont calculées selon la formule suivante:
                <ul>
                    <li>Héros= 1.5k</li>
                    <li>Capitaine= 1k</li>
                    <li>Lanciers, Archers = Niveau des troupes x 40</li>
                    <li>Spécialistes, Cavaliers = Niveau des troupes x 80</li>
                    <li>Espions= Niveau des troupes x 100</li>
                    <li>Griffons= Niveau des troupes x 800</li>
                    <li>Catapultes, Murs Niveau des murs x 200</li>
                    <li>Monstres III-VII (Niveau du monstre ⁃ 2) x1.3k</li>
                    <li>Monstres I & II=x 8.64k</li>
                    <li>Garde mercenaire Niveau des troupes x120</li>
                    <li>Monstre mercenaire = Niveau du monstre x 3k</li>
                </ul>
            </li>
            <li>-FORTS -
                <ul>
                    <li>Scouting = 5 million argent</li>
                    <li>Attaque sans détruire = 10 million argent</li>
                    <li>Attaque et destruction = 20 million de chaque Argent, Iron, Wood, Stone</li>
                </ul>
            </li>
            <li>- CAPITALES -
                <ul>
                    <li>Scouting = 5 million argent</li>
                    <li>Attaque sans détruire = 10 million argent</li>
                    <li>Attaque et destruction = 50 million de chaque Argent, Iron, Wood, Stone</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>5. TAXES</h3>
        <ul class="roe-points">
            <li>Les villes avec plus de 3 jours d'ingots accumulés peuvent être attaquées par un membre de la Garde Royale après un avertissement de 24 heures. Les lingots d'or n'ont aucune valeur personnelle, mais le Roi peut les utiliser pour activer des bonus pour tout le royaume. Si nous avons les barres d'or, elles seront utilisées au profit de K273.</li>
            <li>Maximum de lingots d'or par ville:
                <ul>
                    <li>Ville 1-9: 2000 Ingots</li>
                    <li>Ville 10-19: 3000 Ingots</li>
                    <li>Ville 20-24: 10000 Ingots</li>
                    <li>Ville 25-29: 35000 Ingots</li>
                    <li>Ville 30-34: 60000 Ingots</li>
                    <li>Ville 35-39: 70000 Ingots</li>
                    <li>Ville 40+: 90000 Ingots</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>6. Membres du Royaume Estimé</h3>
        <ul class="roe-points">
            <li>Chaque joueur doit respecter ces règles pour être protégé par le ROE. Les joueurs non protégés sont:
                <ul>
                    <li>HORS-LA-LOI</li>
                    <li>JOUEURS SANS CLAN</li>
                    <li>NON-MEMBRES DU ROE</li>
                </ul>
            </li>
            <li>Hors-la-loi – Si des individus ou des clans ne veulent pas se conformer au ROE, attaquent des bâtiments de clan ou refusent de payer une compensation pour des violations du ROE recevront le statut de hors-la-loi. Les hors-la-loi actuels peuvent être trouvés sur #K273/OUTLAWS. La liste actuelle des hors-la-loi sera effacée et recommencera. Cela signifie qu'il n'y a actuellement aucun hors-la-loi dans le royaume. La nouvelle Garde Royale partagera les responsabilités d'assistance au royaume.</li>
            <li>Garde Royale: La nouvelle Garde Royale est composée de nombreux clans et compte des joueurs très puissants comme membres. Les devoirs de la RG continueront ses fonctions normales comme la collecte des taxes et l'application pour le Palais. Les tâches supplémentaires incluront désormais l'aide aux clans avec des hors-la-loi et le royaume avec précision. Elle agira aussi comme armée d'élite et unité de patrouille et de défense du royaume/territoire.</li>
            <li>En plus d'activer des relations avec les grands clans du royaume pour aider au besoin.</li>
            <li>Les joueurs sans clan à 250k de puissance ou moins sont protégés et ne doivent pas être librement attaqués.</li>
            <li>Les joueurs sans clan de moins de 250k de puissance attaqués ont droit à 2x le montant de compensation dans les réclamations.</li>
            <li>Les interactions avec ces joueurs devraient d'abord servir à apprendre à les connaître et leurs objectifs dans le jeu. Ensuite encouragement à rejoindre un clan. Favoriser la croissance dans le jeu et jouer pour le royaume plutôt que pour la récompense personnelle.</li>
        </ul>
    </li>
    <li>
        <h3>7. Clash of Thrones  CoT</h3>
        <ul class="roe-points">
            <li>Pendant, vous pouvez scouter et attaquer des villes sous les conditions suivantes:</li>
            <li>Aucune attaque de fort de clan: Attaquer les forts ou bâtiments d'un autre clan est strictement interdit.</li>
            <li>Gestion des portails: Aucune restriction de puissance ne s'applique. Tout portail prouvé hostile aux territoires du clan peut être attaqué avec une justice rapide par le clan attaqué. Les marches de clan sont entièrement autorisées pour fermer les portails hostiles. Pendant la paix normale, les portails ne peuvent être attaqués à aucun moment sauf s'ils sont prouvés hostiles.</li>
            <li>Gestion des ressources: Gardez les ressources basses pendant l'événement pour éviter le vol; envoyez des troupes aux forts si nécessaire. Pratiquez No Value City (NVC)</li>
            <li>"Fair Play": Attaquer quelqu'un de significativement plus faible (par ex., en dessous de la moitié de votre puissance) est souvent considéré comme une mauvaise sportivité et n'est pas autorisé. La seule instance où c'est autorisé est pour un portail hostile. Les portails laissés ouverts par des joueurs qui ont d'autres membres attaquant à travers eux sont toujours en faute pour avoir laissé le portail ouvert et peuvent être attaqués quel que soit leur puissance. Un rapport d'attaque doit être fourni dans toutes les réclamations faites. En dessous de la moitié de votre puissance n'est pas autorisé. La règle des 50% s'applique.</li>
        </ul>
    </li>
    <li>
        <h3>8. Processus de résolution des conflits</h3>
        <ul class="roe-points">
            <li>Lorsque le ROE est violé, les étapes suivantes doivent être suivies:
                <ol>
                    <li>Contactez l'autre joueur pour tenter de résoudre. Si aucune résolution dans les 24 heures, élevez vers votre diplomate de clan.</li>
                    <li>Si aucune résolution n'est atteinte entre diplomates de clan, ils peuvent porter l'affaire devant la Cour en la publiant dans #K273/CLAIMS. Seuls les chefs de clan ou diplomates sont autorisés à poster des réclamations dans ce chat.</li>
                    <li>Les juges statueront pour définir la partie coupable (le cas échéant) et un montant de compensation acceptable.</li>
                    <li>Si la partie coupable (ou son clan) refuse de compenser, la Cour Royale déterminera si le joueur ou le clan doit être déclaré hors-la-loi et la Garde Royale sera activée en attente.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>
        <h3>9. Chats du Royaume à rejoindre</h3>
        <ul class="roe-points">
            <li>#K273/ROE</li>
            <li>#K273/CLAIMS</li>
            <li>#K273/OUTLAWS</li>
            <li>~#K273/CPTHUNDERDOME</li>
            <li>~#K273tbxyz</li>
            <li>~#K273/ACADEMY</li>
        </ul>
    </li>
</ol>
`
        },
        it: {
            strings: {
                "site.languageLabel": "Lingua",
                "site.footer": "Creato per K273 da Zee",
                "index.title": "TotalBattle Regno 273",
                "index.hero.eyebrow": "K273 | Strumenti & Link",
                "index.hero.title": "TotalBattle Regno 273",
                "index.hero.lede": "Accesso rapido ai nostri calcolatori e risorse.",
                "index.palace.eyebrow": "Palazzo",
                "index.palace.card.title": "Ruoli del palazzo e ROE",
                "index.palace.card.body": "Consulta gli incarichi attuali del palazzo e le regole di ingaggio del regno.",
                "index.palace.card.button": "Apri pagina del palazzo",
                "index.tools.eyebrow": "STRUMENTI",
                "index.calc.card.title": "Calcolatore del costo dei danni da attacco illegale",
                "index.calc.card.body": "Inserisci le perdite e copia il messaggio formattato nella chat di TotalBattle.",
                "index.calc.card.button": "Apri calcolatore",
                "palace.title": "K273 Ruoli del palazzo e ROE",
                "palace.hero.eyebrow": "K273 | Panoramica palazzo",
                "palace.hero.title": "Ruoli del palazzo e ROE",
                "palace.hero.lede": "Posti di leadership attuali e regole di ingaggio del regno.",
                "palace.hero.back": "← Torna alla home",
                "palace.roles.eyebrow": "Palazzo",
                "palace.roles.title": "Ruoli attuali",
                "palace.roles.sub": "Chi occupa ogni posto in questo momento.",
                "palace.roles.updated": "Ultimo aggiornamento 12/30/2025",
                "palace.roles.table.role": "Ruolo",
                "palace.roles.table.player": "Giocatore",
                "palace.roles.king": "RE",
                "palace.roles.hand": "Mano del Re",
                "palace.roles.queen": "Regina",
                "palace.roles.centurion": "Centurione",
                "palace.roles.chancellor": "Cancelliere",
                "palace.roles.treasurer": "Tesoriere",
                "palace.roles.archon": "Arconte",
                "palace.roles.quaestor": "Questore",
                "palace.roles.tribute": "Tributo",
                "palace.roles.legate": "Legato",
                "palace.image.alt": "Palazzo TotalBattle",
                "palace.roe.eyebrow": "ROE",
                "palace.roe.title": "Regole di ingaggio",
                "palace.roe.subtitle": "Linee guida del regno per combattimento e condotta.<br>La versione inglese è il ROE ufficiale (Traduzioni via IA)<br>Ultimo aggiornamento 12/30/2025",
                "palace.back": "← Torna alla home",
                "calculator.title": "TotalBattle Calcolatore danni",
                "calculator.hero.eyebrow": "K273 | Calcolatore attacco illegale",
                "calculator.hero.title": "TotalBattle Danni",
                "calculator.hero.lede": "Inserisci le perdite e genera un riepilogo pronto da copiare per i messaggi ROE.",
                "calculator.hero.back": "← Torna agli strumenti",
                "calculator.base.eyebrow": "Costi base",
                "calculator.base.title": "Predefiniti",
                "calculator.base.sub": "Modifica solo se le regole cambiano. I valori sono salvati solo per questa sessione. (Contatta Zee per modifiche permanenti)",
                "calculator.base.pill": "Base",
                "calculator.clan.eyebrow": "Edifici del clan",
                "calculator.clan.title": "Perdite opzionali",
                "calculator.clan.sub": "Includi solo quando forti/capitali vengono colpiti. I valori predefiniti sono modificabili.",
                "calculator.clan.include": "Includi nel report",
                "calculator.armyFlat.eyebrow": "Perdite esercito",
                "calculator.armyFlat.title": "Voci a costo fisso",
                "calculator.armyFlat.sub": "Inserisci conteggi base per unità perse a costo fisso.",
                "calculator.armyTier.eyebrow": "Perdite esercito per livello",
                "calculator.armyTier.title": "Voci per livello",
                "calculator.armyTier.sub": "Inserisci conteggi per ogni livello di unità perse.",
                "calculator.summary.eyebrow": "Riepilogo",
                "calculator.summary.title": "Totali e blocco copia",
                "calculator.summary.sub": "Aggiungi eventuale argento preso e anche le risorse.",
                "calculator.directSilver": "Argento preso",
                "calculator.food": "Cibo",
                "calculator.lumber": "Legname",
                "calculator.stone": "Pietra",
                "calculator.iron": "Ferro",
                "calculator.silverSubtotal": "Subtotale argento",
                "calculator.totalLoss": "Perdita totale (con argento preso)",
                "calculator.calculate": "Calcola",
                "calculator.reset": "Reimposta",
                "calculator.copyLabel": "Messaggio pronto da copiare",
                "calculator.copyButton": "Copia riepilogo",
                "calculator.back": "← Torna agli strumenti",
                "calculator.formula.baseCount": "Base × Quantità",
                "calculator.formula.baseCountLevel": "Base × Quantità × Liv.",
                "calculator.formula.baseCountLevelMinusTwo": "Base × Quantità × (Liv. − 2)",
                "calculator.label.count": "Quantità",
                "common.show": "Mostra",
                "common.hide": "Nascondi",
                "calc.base.scoutingEvents": "Eventi di esplorazione",
                "calc.base.attackEvents": "Eventi di attacco",
                "calc.base.portal": "Portale",
                "calc.base.hero": "Eroe",
                "calc.base.captain": "Capitano",
                "calc.base.monsters12": "Mostri 1-2",
                "calc.base.monsters37": "Mostri 3-7",
                "calc.base.spearmenArchers": "Lancieri / Arcieri",
                "calc.base.specialistRiders": "Specialisti / Cavalieri",
                "calc.base.spies": "Spie",
                "calc.base.griffins": "Grifoni",
                "calc.base.catapultsWalls": "Catapulte / Mura",
                "calc.base.mercGuard": "Guardia mercenaria",
                "calc.base.mercMonster": "Mostro mercenario",
                "calc.base.gold": "Oro",
                "calc.base.tar": "Catrame",
                "calc.base.fortScout": "Esplorazione forte",
                "calc.base.fortAttack": "Attacco forte (non distrutto)",
                "calc.base.fortDestroy": "Attacco forte (distrutto)",
                "calc.base.capScout": "Esplorazione capitale",
                "calc.base.capAttack": "Attacco capitale (non distrutta)",
                "calc.base.capDestroy": "Attacco capitale (distrutta)",
                "calc.output.clanBuildings": "EDIFICI DEL CLAN",
                "calc.output.armyLoss": "PERDITE ESERCITO",
                "calc.output.additionalLoss": "PERDITE AGGIUNTIVE",
                "calc.output.resourceLoss": "PERDITA RISORSE",
                "calc.output.fortScout": "Esplorazione forte",
                "calc.output.fortAttackHit": "Attacco forte (colpito)",
                "calc.output.fortAttackDestroy": "Attacco forte (distrutto)",
                "calc.output.capScout": "Esplorazione capitale",
                "calc.output.capAttackHit": "Attacco capitale (colpito)",
                "calc.output.capAttackDestroy": "Attacco capitale (distrutta)",
                "calc.output.scoutEvents": "Eventi di esplorazione",
                "calc.output.attackEvents": "Eventi di attacco",
                "calc.output.portalClosed": "Portale chiuso",
                "calc.output.heroCaptains": "Eroe/Capitani",
                "calc.output.spearmenArchers": "Lancieri/Arcieri",
                "calc.output.specialistsRiders": "Specialisti/Cavalieri",
                "calc.output.spiesTotal": "Spie totali",
                "calc.output.monstersTotal": "Mostri totali",
                "calc.output.mercenaries": "Mercenari",
                "calc.output.wallsCatapult": "Mura/Catapulte",
                "calc.output.goldTotal": "Oro totale",
                "calc.output.tarTotal": "Catrame totale",
                "calc.output.directSilver": "Argento preso",
                "calc.output.totalSilverLoss": "PERDITA TOTALE ARGENTO",
                "calc.output.totalWithTax": "TOTALE (CON 20% TASSA)",
                "calc.output.food": "Cibo",
                "calc.output.lumber": "Legname",
                "calc.output.stone": "Pietra",
                "calc.output.iron": "Ferro"
            },
            roeHtml: `
<p class="roe-intro">Per ordine del Re Arihelm, il seguente ROE è in vigore per il regno:</p>
<ol class="roe-list">
    <li>
        <h3>1. TEMPO DI PACE</h3>
        <ul class="roe-points">
            <li>Gli attacchi alle città sono vietati tranne durante CoT e gli scambi CP pianificati.</li>
            <li>Gli attacchi ai portali e agli edifici del clan sono proibiti. A meno che il portale non sia dimostrato ostile al clan e o alle sue risorse nel suo territorio.</li>
            <li>Lo scouting è una forma di aggressione.</li>
        </ul>
    </li>
    <li>
        <h3>2. DIPLOMATICI</h3>
        <ul class="roe-points">
            <li>I clan devono identificare almeno un diplomatico nella descrizione del clan che possa aiutare nella risoluzione delle dispute. I diplomatici devono essere un leader attivo o superiore.</li>
        </ul>
    </li>
    <li>
        <h3>3. Regole generali</h3>
        <ul class="roe-points">
            <li>Tutti gli edifici di risorse all'interno del territorio del clan appartengono a quel clan.</li>
            <li>Inclusi WS e DMs.</li>
            <li>Le risorse create dai giocatori appartengono all'individuo che le ha create, a meno che non si concordi di condividere tra due parti.</li>
            <li>Le cripte rare appartengono all'individuo che le ha sbloccate.</li>
            <li>WS e DMs:
                <ul>
                    <li>a. Non esiste più un sistema di registrazione.</li>
                    <li>b. Tutti gli edifici di risorse selvatiche (inclusi DM/WS) sono first come, first serve (FCFS).</li>
                    <li>c. Le rivendicazioni non possono essere fatte se vieni scoutato/attaccato in risorse selvatiche a meno che:
                        <ul>
                            <li>Perdi l'edificio.</li>
                            <li>Vieni scoutato/attaccato e poi attaccato di nuovo. (regola 2x)</li>
                        </ul>
                    </li>
                    <li>d. È tua responsabilità inviare un messaggio al tuo diplomatico, all'altro giocatore e al loro diplomatico/capo clan se qualcuno ti scouta o ti attacca in una miniera.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>4. GUIDA ALLA COMPENSAZIONE DEL PALAZZO --</h3>
        <ul class="roe-points">
            <li>Ogni attacco o scouting comporta un costo base di 1 milione di argento. Eventuali perdite aggiuntive, danni o risorse rubate si aggiungono a questo costo base.</li>
            <li>RSS: importo pari alla quantità rubata</li>
            <li>Oro: 1 Oro = 3,000 Argento o miniere d'oro pari al rubato + 10% (a decisione della vittima)</li>
            <li>Catrame: 1 Catrame = 1,000 Argento</li>
            <li>Lingotti d'oro = nessuna compensazione</li>
            <li>Portale chiuso illegalmente: 1M argento (+1M per l'attacco illegale stesso)</li>
            <li>Il danno è calcolato secondo la seguente formula: Le perdite di truppe sono calcolate secondo la seguente formula:
                <ul>
                    <li>Eroe= 1.5k</li>
                    <li>Capitano= 1k</li>
                    <li>Lancieri, Arcieri = Livello truppe x 40</li>
                    <li>Specialisti, Cavalieri = Livello truppe x 80</li>
                    <li>Spie= Livello truppe x 100</li>
                    <li>Grifoni= Livello truppe x 800</li>
                    <li>Catapulte, Mura Livello mura x 200</li>
                    <li>Mostri III-VII (Livello mostro ⁃ 2) x1.3k</li>
                    <li>Mostri I & II=x 8.64k</li>
                    <li>Guardia mercenaria Livello truppe x120</li>
                    <li>Mostro mercenario = Livello mostro x 3k</li>
                </ul>
            </li>
            <li>-FORTI -
                <ul>
                    <li>Scouting = 5 milioni argento</li>
                    <li>Attaccare senza distruggere = 10 milioni argento</li>
                    <li>Attaccare e distruggere = 20 milioni di ciascuno Argento, Ferro, Legno, Pietra</li>
                </ul>
            </li>
            <li>- CAPITALI -
                <ul>
                    <li>Scouting = 5 milioni argento</li>
                    <li>Attaccare senza distruggere = 10 milioni argento</li>
                    <li>Attaccare e distruggere = 50 milioni di ciascuno Argento, Ferro, Legno, Pietra</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>5. TASSE</h3>
        <ul class="roe-points">
            <li>Le città con oltre 3 giorni di lingotti accumulati possono essere attaccate da un membro della Guardia Reale dopo un preavviso di 24 ore. I lingotti d'oro non hanno alcun valore personale per te, ma il Re può usarli per attivare bonus per tutto il regno. Se abbiamo i lingotti d'oro, saranno usati a beneficio di K273.</li>
            <li>Numero massimo di lingotti d'oro per città:
                <ul>
                    <li>Città 1-9: 2000 Ingots</li>
                    <li>Città 10-19: 3000 Ingots</li>
                    <li>Città 20-24: 10000 Ingots</li>
                    <li>Città 25-29: 35000 Ingots</li>
                    <li>Città 30-34: 60000 Ingots</li>
                    <li>Città 35-39: 70000 Ingots</li>
                    <li>Città 40+: 90000 Ingots</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>6. Membri del Regno Stimato</h3>
        <ul class="roe-points">
            <li>Ogni giocatore deve rispettare queste regole per essere protetto dal ROE. I giocatori non protetti sono:
                <ul>
                    <li>FUORILEGGE</li>
                    <li>GIOCATORI SENZA CLAN</li>
                    <li>NON-MEMBRI ROE</li>
                </ul>
            </li>
            <li>Fuorilegge – Se individui o clan non sono disposti a rispettare il ROE, attaccano edifici del clan o rifiutano di pagare compensazioni per violazioni del ROE riceveranno lo status di fuorilegge. I fuorilegge attuali si trovano in #K273/OUTLAWS. L'elenco attuale dei fuorilegge verrà cancellato e ricomincerà. Questo significa che attualmente non ci sono fuorilegge nel regno. La nuova Guardia Reale condividerà le responsabilità nell'assistenza del regno.</li>
            <li>Guardia Reale: La nuova Guardia Reale è composta da molti clan e ha giocatori molto forti come membri. I doveri della RG continueranno i suoi doveri normali come la riscossione delle tasse e l'applicazione per il Palazzo. I compiti aggiuntivi ora includeranno assistenza ai clan con i fuorilegge e al regno con precisione. Agiranno anche come un esercito d'élite e unità di pattuglia e difesa del regno/territorio.</li>
            <li>In aggiunta attivando relazioni con i grandi clan del regno per assistere quando necessario.</li>
            <li>I giocatori senza clan a 250k di might o meno sono protetti e non devono essere attaccati liberamente.</li>
            <li>I giocatori senza clan con meno di 250k di might attaccati hanno diritto a 2x l'importo della compensazione nelle richieste.</li>
            <li>Le interazioni con questi giocatori dovrebbero prima servire a conoscerli e i loro obiettivi nel gioco. Seguite dall'incoraggiamento a unirsi a un clan. Favorire la crescita nel gioco e giocare per il regno versus ricompensa personale.</li>
        </ul>
    </li>
    <li>
        <h3>7. Clash of Thrones  CoT</h3>
        <ul class="roe-points">
            <li>Durante, puoi scouteare e attaccare città alle seguenti condizioni:</li>
            <li>Nessun attacco ai forti del clan: Attaccare i forti o gli edifici di un altro clan è severamente proibito.</li>
            <li>Gestione dei portali: Non si applica alcuna restrizione di might. Qualsiasi portale dimostrato ostile ai territori del clan può essere attaccato con rapida giustizia dal clan attaccato. Le marce di clan sono pienamente consentite per chiudere portali ostili. Durante il normale tempo di pace, i portali non possono essere attaccati in alcun momento a meno che non siano dimostrati ostili.</li>
            <li>Gestione delle risorse: Mantieni le risorse basse durante l'evento per evitare furti; invia truppe ai forti se necessario. Pratica No Value City (NVC)</li>
            <li>"Fair Play": Attaccare qualcuno significativamente più debole (ad esempio, sotto la metà del tuo might) è spesso considerato cattivo sport e non è consentito. L'unica istanza in cui è consentito è per un portale ostile. I portali lasciati aperti da giocatori che hanno altri membri che attaccano attraverso di essi sono ancora responsabili per aver lasciato il portale aperto e possono essere attaccati indipendentemente dal loro might. Un rapporto di attacco deve essere fornito in tutte le richieste fatte. Sotto la metà del tuo might non è consentito. La regola del 50% si applica.</li>
        </ul>
    </li>
    <li>
        <h3>8. Processo di risoluzione dei conflitti</h3>
        <ul class="roe-points">
            <li>Quando il ROE viene violato, devono essere seguiti i seguenti passaggi:
                <ol>
                    <li>Contatta l'altro giocatore per tentare di risolvere. Se non c'è risoluzione entro 24 ore, eleva al tuo diplomatico di clan.</li>
                    <li>Se non si raggiunge una risoluzione tra diplomatici di clan, possono portare la questione davanti alla Corte pubblicandola in #K273/CLAIMS. Solo i leader di clan o i diplomatici possono pubblicare richieste in questa chat.</li>
                    <li>I giudici giudicheranno per definire la parte colpevole (se presente) e un importo di compensazione accettabile.</li>
                    <li>Se la parte colpevole (o il suo clan) rifiuta di compensare, la Corte Reale determinerà se il giocatore o il clan deve essere dichiarato fuorilegge e la Guardia Reale sarà attivata in stand-by.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>
        <h3>9. Chat del Regno a cui unirsi</h3>
        <ul class="roe-points">
            <li>#K273/ROE</li>
            <li>#K273/CLAIMS</li>
            <li>#K273/OUTLAWS</li>
            <li>~#K273/CPTHUNDERDOME</li>
            <li>~#K273tbxyz</li>
            <li>~#K273/ACADEMY</li>
        </ul>
    </li>
</ol>
`
        },

        pt: {
            strings: {
                "site.languageLabel": "Idioma",
                "site.footer": "Criado para K273 por Zee",
                "index.title": "TotalBattle Reino 273",
                "index.hero.eyebrow": "K273 | Ferramentas e Links",
                "index.hero.title": "TotalBattle Reino 273",
                "index.hero.lede": "Acesso rápido aos nossos calculadores e recursos.",
                "index.palace.eyebrow": "Palácio",
                "index.palace.card.title": "Cargos do palácio e ROE",
                "index.palace.card.body": "Veja as atribuições atuais do palácio e as regras de engajamento do reino.",
                "index.palace.card.button": "Abrir página do palácio",
                "index.tools.eyebrow": "FERRAMENTAS",
                "index.calc.card.title": "Calculadora de custo de dano por ataque ilegal",
                "index.calc.card.body": "Informe perdas e copie a mensagem formatada para o chat do TotalBattle.",
                "index.calc.card.button": "Abrir calculadora",
                "palace.title": "K273 Cargos do palácio e ROE",
                "palace.hero.eyebrow": "K273 | Visão geral do palácio",
                "palace.hero.title": "Cargos do palácio e ROE",
                "palace.hero.lede": "Assentos de liderança atuais e as regras de engajamento do reino.",
                "palace.hero.back": "← Voltar ao início",
                "palace.roles.eyebrow": "Palácio",
                "palace.roles.title": "Cargos atuais",
                "palace.roles.sub": "Quem ocupa cada posto agora.",
                "palace.roles.updated": "Última atualização 12/30/2025",
                "palace.roles.table.role": "Cargo",
                "palace.roles.table.player": "Jogador",
                "palace.roles.king": "REI",
                "palace.roles.hand": "Mão do Rei",
                "palace.roles.queen": "Rainha",
                "palace.roles.centurion": "Centurião",
                "palace.roles.chancellor": "Chanceler",
                "palace.roles.treasurer": "Tesoureiro",
                "palace.roles.archon": "Arconte",
                "palace.roles.quaestor": "Questor",
                "palace.roles.tribute": "Tributo",
                "palace.roles.legate": "Legado",
                "palace.image.alt": "Palácio TotalBattle",
                "palace.roe.eyebrow": "ROE",
                "palace.roe.title": "Regras de Engajamento",
                "palace.roe.subtitle": "Diretrizes do reino para combate e conduta.<br>A versão em inglês é o ROE oficial (Traduções via IA)<br>Última atualização 12/30/2025",
                "palace.back": "← Voltar ao início",
                "calculator.title": "Calculadora de Dano TotalBattle",
                "calculator.hero.eyebrow": "K273 | Calculadora de ataque ilegal",
                "calculator.hero.title": "Dano TotalBattle",
                "calculator.hero.lede": "Informe perdas e gere um resumo pronto para copiar para mensagens ROE.",
                "calculator.hero.back": "← Voltar às ferramentas",
                "calculator.base.eyebrow": "Custos base",
                "calculator.base.title": "Padrões",
                "calculator.base.sub": "Ajuste apenas se as regras mudarem. Os valores são salvos apenas para esta sessão. (Fale com Zee para mudanças permanentes)",
                "calculator.base.pill": "Base",
                "calculator.clan.eyebrow": "Edifícios do clã",
                "calculator.clan.title": "Perdas opcionais",
                "calculator.clan.sub": "Inclua apenas quando fortes/capitais forem atingidos. Os padrões são editáveis.",
                "calculator.clan.include": "Incluir no relatório",
                "calculator.armyFlat.eyebrow": "Perdas do exército",
                "calculator.armyFlat.title": "Entradas de custo fixo",
                "calculator.armyFlat.sub": "Informe contagens básicas de unidades de custo fixo perdidas.",
                "calculator.armyTier.eyebrow": "Perdas do exército por nível",
                "calculator.armyTier.title": "Entradas por nível",
                "calculator.armyTier.sub": "Informe contagens para cada nível de unidades perdidas.",
                "calculator.summary.eyebrow": "Resumo",
                "calculator.summary.title": "Totais e bloco de cópia",
                "calculator.summary.sub": "Adicione qualquer prata tomada e também recursos.",
                "calculator.directSilver": "Prata tomada",
                "calculator.food": "Comida",
                "calculator.lumber": "Madeira",
                "calculator.stone": "Pedra",
                "calculator.iron": "Ferro",
                "calculator.silverSubtotal": "Subtotal de prata",
                "calculator.totalLoss": "Perda total (com prata tomada)",
                "calculator.calculate": "Calcular",
                "calculator.reset": "Redefinir",
                "calculator.copyLabel": "Mensagem pronta para copiar",
                "calculator.copyButton": "Copiar resumo",
                "calculator.back": "← Voltar às ferramentas",
                "calculator.formula.baseCount": "Base × Quantidade",
                "calculator.formula.baseCountLevel": "Base × Quantidade × Nível",
                "calculator.formula.baseCountLevelMinusTwo": "Base × Quantidade × (Nível − 2)",
                "calculator.label.count": "Quantidade",
                "common.show": "Mostrar",
                "common.hide": "Ocultar",
                "calc.base.scoutingEvents": "Eventos de scouting",
                "calc.base.attackEvents": "Eventos de ataque",
                "calc.base.portal": "Portal",
                "calc.base.hero": "Herói",
                "calc.base.captain": "Capitão",
                "calc.base.monsters12": "Monstros 1-2",
                "calc.base.monsters37": "Monstros 3-7",
                "calc.base.spearmenArchers": "Lanceiros / Arqueiros",
                "calc.base.specialistRiders": "Especialistas / Cavaleiros",
                "calc.base.spies": "Espiões",
                "calc.base.griffins": "Grifos",
                "calc.base.catapultsWalls": "Catapultas / Muralhas",
                "calc.base.mercGuard": "Guarda mercenária",
                "calc.base.mercMonster": "Monstro mercenário",
                "calc.base.gold": "Ouro",
                "calc.base.tar": "Alcatrão",
                "calc.base.fortScout": "Scouting de forte",
                "calc.base.fortAttack": "Ataque ao forte (não destruído)",
                "calc.base.fortDestroy": "Ataque ao forte (destruído)",
                "calc.base.capScout": "Scouting de capital",
                "calc.base.capAttack": "Ataque à capital (não destruída)",
                "calc.base.capDestroy": "Ataque à capital (destruída)",
                "calc.output.clanBuildings": "EDIFÍCIOS DO CLÃ",
                "calc.output.armyLoss": "PERDAS DO EXÉRCITO",
                "calc.output.additionalLoss": "PERDAS ADICIONAIS",
                "calc.output.resourceLoss": "PERDA DE RECURSOS",
                "calc.output.fortScout": "Scouting de forte",
                "calc.output.fortAttackHit": "Ataque ao forte (impacto)",
                "calc.output.fortAttackDestroy": "Ataque ao forte (destruído)",
                "calc.output.capScout": "Scouting de capital",
                "calc.output.capAttackHit": "Ataque à capital (impacto)",
                "calc.output.capAttackDestroy": "Ataque à capital (destruída)",
                "calc.output.scoutEvents": "Eventos de scouting",
                "calc.output.attackEvents": "Eventos de ataque",
                "calc.output.portalClosed": "Portal fechado",
                "calc.output.heroCaptains": "Herói/Capitães",
                "calc.output.spearmenArchers": "Lanceiros/Arqueiros",
                "calc.output.specialistsRiders": "Especialistas/Cavaleiros",
                "calc.output.spiesTotal": "Espiões total",
                "calc.output.monstersTotal": "Monstros total",
                "calc.output.mercenaries": "Mercenários",
                "calc.output.wallsCatapult": "Muralhas/Catapultas",
                "calc.output.goldTotal": "Ouro total",
                "calc.output.tarTotal": "Alcatrão total",
                "calc.output.directSilver": "Prata tomada",
                "calc.output.totalSilverLoss": "PERDA TOTAL DE PRATA",
                "calc.output.totalWithTax": "TOTAL (COM 20% IMPOSTO)",
                "calc.output.food": "Comida",
                "calc.output.lumber": "Madeira",
                "calc.output.stone": "Pedra",
                "calc.output.iron": "Ferro"
            },
            roeHtml: `
<p class="roe-intro">Por ordem do Rei Arihelm, o seguinte ROE está em vigor para o reino:</p>
<ol class="roe-list">
    <li>
        <h3>1. TEMPO DE PAZ</h3>
        <ul class="roe-points">
            <li>Ataques a cidades são proibidos exceto durante CoT e trocas de CP planejadas.</li>
            <li>Ataques a portais e edifícios de clã são proibidos. A menos que o portal seja comprovadamente hostil ao clã e ou aos seus recursos no território.</li>
            <li>Scouting é uma forma de agressão.</li>
        </ul>
    </li>
    <li>
        <h3>2. DIPLOMATAS</h3>
        <ul class="roe-points">
            <li>Os clãs devem identificar pelo menos um diplomata na descrição do clã que possa ajudar na resolução de disputas. Diplomatas devem ser um líder ativo ou superior.</li>
        </ul>
    </li>
    <li>
        <h3>3. Regras gerais</h3>
        <ul class="roe-points">
            <li>Todos os edifícios de recursos dentro do território do clã pertencem a esse clã.</li>
            <li>Incluindo WS e DMs.</li>
            <li>Recursos criados por jogadores pertencem ao indivíduo que os criou, a menos que acordado para compartilhar entre duas partes.</li>
            <li>Criptas raras pertencem ao indivíduo que as desbloqueou.</li>
            <li>WS e DMs:
                <ul>
                    <li>a. Não há mais um sistema de registro.</li>
                    <li>b. Todos os edifícios de recursos selvagens (incluindo DM/WS) são por ordem de chegada (FCFS).</li>
                    <li>c. Reivindicações não podem ser feitas se você for scoutado/atacado em recursos selvagens a menos que:
                        <ul>
                            <li>Você perca o edifício.</li>
                            <li>Você seja scoutado/atacado e depois atacado novamente. (regra 2x)</li>
                        </ul>
                    </li>
                    <li>d. É sua responsabilidade enviar mensagem ao seu diplomata, ao outro jogador e ao diplomata/líder de clã deles se alguém estiver scouteando ou atacando você em uma mina.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>4. GUIA DE COMPENSAÇÃO DO PALÁCIO --</h3>
        <ul class="roe-points">
            <li>Cada ataque ou scouting tem um custo base de 1 milhão de prata. Quaisquer perdas adicionais, danos ou recursos roubados são adicionados a esse custo base.</li>
            <li>RSS: valor igual ao valor roubado</li>
            <li>Ouro: 1 Ouro = 3,000 Prata ou minas de ouro iguais ao roubado + 10% (por decisão da vítima)</li>
            <li>Tar: 1 Tar = 1,000 Prata</li>
            <li>Barras de ouro = sem compensação</li>
            <li>Portal fechado ilegalmente: 1M prata (+1M pelo ataque ilegal em si)</li>
            <li>O dano é calculado de acordo com a seguinte fórmula: As perdas de tropas são calculadas de acordo com a seguinte fórmula:
                <ul>
                    <li>Herói= 1.5k</li>
                    <li>Capitão= 1k</li>
                    <li>Lanceiros, Arqueiros = Nível das tropas x 40</li>
                    <li>Especialistas, Cavaleiros = Nível das tropas x 80</li>
                    <li>Espiões= Nível das tropas x 100</li>
                    <li>Grifos= Nível das tropas x 800</li>
                    <li>Catapultas, Muralhas Nível das muralhas x 200</li>
                    <li>Monstros III-VII (Nível do monstro ⁃ 2) x1.3k</li>
                    <li>Monstros I & II=x 8.64k</li>
                    <li>Guarda mercenária Nível das tropas x120</li>
                    <li>Monstro mercenário = Nível do monstro x 3k</li>
                </ul>
            </li>
            <li>-FORTES -
                <ul>
                    <li>Scouting = 5 milhões de prata</li>
                    <li>Atacar sem destruir = 10 milhões de prata</li>
                    <li>Atacar e destruir = 20 milhões de cada Prata, Iron, Wood, Stone</li>
                </ul>
            </li>
            <li>- CAPITAIS -
                <ul>
                    <li>Scouting = 5 milhões de prata</li>
                    <li>Atacar sem destruir = 10 milhões de prata</li>
                    <li>Atacar e destruir = 50 milhões de cada Prata, Iron, Wood, Stone</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>5. TAXAS</h3>
        <ul class="roe-points">
            <li>Cidades com mais de 3 dias de ingots acumulados podem ser atacadas por um membro da Guarda Real após receber 24 horas de aviso. Lingotes de ouro não têm valor para você pessoalmente, mas o Rei pode usá-los para ativar bônus para todo o reino. Se tivermos barras de ouro, eles serão usados para o benefício de K273.</li>
            <li>Máximo de lingotes de ouro por cidade:
                <ul>
                    <li>Cidade 1-9: 2000 Ingots</li>
                    <li>Cidade 10-19: 3000 Ingots</li>
                    <li>Cidade 20-24: 10000 Ingots</li>
                    <li>Cidade 25-29: 35000 Ingots</li>
                    <li>Cidade 30-34: 60000 Ingots</li>
                    <li>Cidade 35-39: 70000 Ingots</li>
                    <li>Cidade 40+: 90000 Ingots</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>6. Membros do Reino Estimado</h3>
        <ul class="roe-points">
            <li>Todo jogador deve cumprir essas regras para ser protegido pelo ROE. Jogadores não protegidos são:
                <ul>
                    <li>FORAS DA LEI</li>
                    <li>JOGADORES SEM CLÃ</li>
                    <li>NÃO-MEMBROS DO ROE</li>
                </ul>
            </li>
            <li>Fora da lei – Se indivíduos ou clãs não estiverem dispostos a cumprir o ROE, atacarem edifícios de clã ou se recusarem a pagar compensação por violações do ROE, receberão status de fora da lei. Os atuais foras da lei podem ser encontrados em #K273/OUTLAWS. A lista atual de foras da lei será limpa e reiniciada. Isso significa que atualmente não há foras da lei no reino. A nova Guarda Real compartilhará responsabilidades na assistência ao reino.</li>
            <li>Guarda Real: A nova Guarda Real é composta por muitos clãs e possui jogadores muito fortes como membros. Os deveres da RG continuarão suas tarefas normais como coleta de impostos e fiscalização para o Palácio. Tarefas adicionais agora incluirão assistência aos clãs com foras da lei e ao reino com precisão. Eles também atuarão como um exército de elite e unidade de patrulha e defesa do reino/território.</li>
            <li>Além de ativar relações com os grandes clãs do reino para ajudar conforme necessário.</li>
            <li>Jogadores sem clã com 250k de might ou menos estão protegidos e não podem ser atacados livremente.</li>
            <li>Jogadores sem clã com menos de 250k de might atacados têm direito a 2x o valor de compensação nas reivindicações.</li>
            <li>Interações com esses jogadores devem primeiro ser para conhecê-los e seus objetivos no jogo. Em seguida, incentivo para entrar em um clã. Fomentar o crescimento no jogo e jogar pelo reino versus recompensa pessoal.</li>
        </ul>
    </li>
    <li>
        <h3>7. Clash of Thrones  CoT</h3>
        <ul class="roe-points">
            <li>Durante, você pode scoutear e atacar cidades sob as seguintes condições:</li>
            <li>Sem ataques a fortes de clã: Atacar os fortes ou edifícios de outro clã é estritamente proibido.</li>
            <li>Gestão de Portais: Não há restrição de might. Qualquer portal comprovadamente hostil aos territórios do clã pode ser atacado com justiça rápida pelo clã atacado. Marchas de clã são totalmente permitidas para fechar portais hostis. Durante a paz normal, portais não podem ser atacados em nenhum momento a menos que sejam comprovadamente hostis.</li>
            <li>Gestão de Recursos: Mantenha recursos baixos durante o evento para evitar roubo; envie tropas para fortes se necessário. Pratique No Value City (NVC)</li>
            <li>"Fair Play": Atacar alguém significativamente mais fraco (por exemplo, abaixo da metade da sua might) é frequentemente considerado falta de esportividade e não é permitido. A única instância em que é permitido é para um portal hostil. Portais deixados abertos por jogadores que têm outros membros atacando através deles ainda estão em falta por deixar o portal aberto e podem ser atacados independentemente da sua might. Um relatório de ataque deve ser fornecido em todas as reivindicações feitas. Abaixo da metade da sua might não é permitido. A regra de 50% se aplica.</li>
        </ul>
    </li>
    <li>
        <h3>8. Processo de resolução de conflitos</h3>
        <ul class="roe-points">
            <li>Quando o ROE é violado, os seguintes passos devem ser seguidos:
                <ol>
                    <li>Entre em contato com o outro jogador para tentar resolver. Se não houver resolução em 24 horas, eleve para o seu diplomata de clã.</li>
                    <li>Se nenhuma resolução for alcançada entre diplomatas de clã, eles podem levar a questão à Corte postando em #K273/CLAIMS. Somente líderes de clã ou diplomatas podem postar reivindicações neste chat.</li>
                    <li>Os juízes irão adjudicar para definir a parte culpada (se houver) e um valor aceitável de compensação.</li>
                    <li>Se a parte culpada (ou seu clã) se recusar a compensar, a Corte Real determinará se o jogador ou clã deve ser declarado fora da lei e a Guarda Real será ativada em prontidão.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>
        <h3>9. Chats do Reino para Participar</h3>
        <ul class="roe-points">
            <li>#K273/ROE</li>
            <li>#K273/CLAIMS</li>
            <li>#K273/OUTLAWS</li>
            <li>~#K273/CPTHUNDERDOME</li>
            <li>~#K273tbxyz</li>
            <li>~#K273/ACADEMY</li>
        </ul>
    </li>
</ol>
`
        },
        pl: {
            strings: {
                "site.languageLabel": "Język",
                "site.footer": "Stworzone dla K273 przez Zee",
                "index.title": "TotalBattle Królestwo 273",
                "index.hero.eyebrow": "K273 | Narzędzia i linki",
                "index.hero.title": "TotalBattle Królestwo 273",
                "index.hero.lede": "Szybki dostęp do naszych kalkulatorów i zasobów.",
                "index.palace.eyebrow": "Pałac",
                "index.palace.card.title": "Role pałacu i ROE",
                "index.palace.card.body": "Sprawdź aktualne przydziały w pałacu i zasady zaangażowania królestwa.",
                "index.palace.card.button": "Otwórz stronę pałacu",
                "index.tools.eyebrow": "NARZĘDZIA",
                "index.calc.card.title": "Kalkulator kosztów szkód z nielegalnego ataku",
                "index.calc.card.body": "Wpisz straty i skopiuj sformatowaną wiadomość do czatu TotalBattle.",
                "index.calc.card.button": "Otwórz kalkulator",
                "palace.title": "K273 Role pałacu i ROE",
                "palace.hero.eyebrow": "K273 | Przegląd pałacu",
                "palace.hero.title": "Role pałacu i ROE",
                "palace.hero.lede": "Aktualne stanowiska przywódcze i zasady zaangażowania królestwa.",
                "palace.hero.back": "← Wróć na stronę główną",
                "palace.roles.eyebrow": "Pałac",
                "palace.roles.title": "Aktualne role",
                "palace.roles.sub": "Kto obecnie zajmuje każde stanowisko.",
                "palace.roles.updated": "Ostatnia aktualizacja 12/30/2025",
                "palace.roles.table.role": "Rola",
                "palace.roles.table.player": "Gracz",
                "palace.roles.king": "KRÓL",
                "palace.roles.hand": "Ręka Króla",
                "palace.roles.queen": "Królowa",
                "palace.roles.centurion": "Centurion",
                "palace.roles.chancellor": "Kanclerz",
                "palace.roles.treasurer": "Skarbnik",
                "palace.roles.archon": "Archont",
                "palace.roles.quaestor": "Kwestor",
                "palace.roles.tribute": "Trybut",
                "palace.roles.legate": "Legat",
                "palace.image.alt": "Pałac TotalBattle",
                "palace.roe.eyebrow": "ROE",
                "palace.roe.title": "Zasady zaangażowania",
                "palace.roe.subtitle": "Wytyczne królestwa dotyczące walki i zachowania.<br>Wersja angielska jest oficjalnym ROE (Tłumaczenia przez AI)<br>Ostatnia aktualizacja 12/30/2025",
                "palace.back": "← Wróć na stronę główną",
                "calculator.title": "TotalBattle Kalkulator szkód",
                "calculator.hero.eyebrow": "K273 | Kalkulator nielegalnego ataku",
                "calculator.hero.title": "TotalBattle Szkody",
                "calculator.hero.lede": "Wpisz straty i wygeneruj gotowe do skopiowania podsumowanie dla wiadomości ROE.",
                "calculator.hero.back": "← Wróć do narzędzi",
                "calculator.base.eyebrow": "Koszty bazowe",
                "calculator.base.title": "Domyślne",
                "calculator.base.sub": "Dostosuj tylko, jeśli zasady się zmienią. Wartości są zapisywane tylko dla tej sesji. (Skontaktuj się z Zee w sprawie trwałych zmian)",
                "calculator.base.pill": "Podstawa",
                "calculator.clan.eyebrow": "Budynki klanowe",
                "calculator.clan.title": "Opcjonalne straty",
                "calculator.clan.sub": "Uwzględnij tylko, gdy trafiono forty/kapitały. Domyślne wartości są edytowalne.",
                "calculator.clan.include": "Uwzględnij w raporcie",
                "calculator.armyFlat.eyebrow": "Straty armii",
                "calculator.armyFlat.title": "Pozycje o stałym koszcie",
                "calculator.armyFlat.sub": "Wpisz podstawowe liczby utraconych jednostek o stałym koszcie.",
                "calculator.armyTier.eyebrow": "Straty armii według poziomu",
                "calculator.armyTier.title": "Pozycje zależne od poziomu",
                "calculator.armyTier.sub": "Wpisz liczby dla każdego poziomu utraconych jednostek.",
                "calculator.summary.eyebrow": "Podsumowanie",
                "calculator.summary.title": "Sumy i blok do kopiowania",
                "calculator.summary.sub": "Dodaj utracone srebro oraz zasoby.",
                "calculator.directSilver": "Srebro zabrane",
                "calculator.food": "Żywność",
                "calculator.lumber": "Drewno",
                "calculator.stone": "Kamień",
                "calculator.iron": "Żelazo",
                "calculator.silverSubtotal": "Suma częściowa srebro",
                "calculator.totalLoss": "Łączna strata (z srebrem zabranym)",
                "calculator.calculate": "Oblicz",
                "calculator.reset": "Resetuj",
                "calculator.copyLabel": "Wiadomość gotowa do skopiowania",
                "calculator.copyButton": "Kopiuj podsumowanie",
                "calculator.back": "← Wróć do narzędzi",
                "calculator.formula.baseCount": "Podstawa × Ilość",
                "calculator.formula.baseCountLevel": "Podstawa × Ilość × Poziom",
                "calculator.formula.baseCountLevelMinusTwo": "Podstawa × Ilość × (Poziom − 2)",
                "calculator.label.count": "Ilość",
                "common.show": "Pokaż",
                "common.hide": "Ukryj",
                "calc.base.scoutingEvents": "Wydarzenia zwiadu",
                "calc.base.attackEvents": "Wydarzenia ataku",
                "calc.base.portal": "Portal",
                "calc.base.hero": "Bohater",
                "calc.base.captain": "Kapitan",
                "calc.base.monsters12": "Potwory 1-2",
                "calc.base.monsters37": "Potwory 3-7",
                "calc.base.spearmenArchers": "Włócznicy / Łucznicy",
                "calc.base.specialistRiders": "Specjaliści / Jeźdźcy",
                "calc.base.spies": "Szpiedzy",
                "calc.base.griffins": "Gryfy",
                "calc.base.catapultsWalls": "Katapulty / Mury",
                "calc.base.mercGuard": "Straż najemna",
                "calc.base.mercMonster": "Potwór najemny",
                "calc.base.gold": "Złoto",
                "calc.base.tar": "Smoła",
                "calc.base.fortScout": "Zwiad fortu",
                "calc.base.fortAttack": "Atak na fort (niezniszczony)",
                "calc.base.fortDestroy": "Atak na fort (zniszczony)",
                "calc.base.capScout": "Zwiad stolicy",
                "calc.base.capAttack": "Atak na stolicę (niezniszczona)",
                "calc.base.capDestroy": "Atak na stolicę (zniszczona)",
                "calc.output.clanBuildings": "BUDYNKI KLANOWE",
                "calc.output.armyLoss": "STRATY ARMII",
                "calc.output.additionalLoss": "DODATKOWE STRATY",
                "calc.output.resourceLoss": "STRATA ZASOBÓW",
                "calc.output.fortScout": "Zwiad fortu",
                "calc.output.fortAttackHit": "Atak na fort (trafienie)",
                "calc.output.fortAttackDestroy": "Atak na fort (zniszczenie)",
                "calc.output.capScout": "Zwiad stolicy",
                "calc.output.capAttackHit": "Atak na stolicę (trafienie)",
                "calc.output.capAttackDestroy": "Atak na stolicę (zniszczenie)",
                "calc.output.scoutEvents": "Wydarzenia zwiadu",
                "calc.output.attackEvents": "Wydarzenia ataku",
                "calc.output.portalClosed": "Portal zamknięty",
                "calc.output.heroCaptains": "Bohater/Kapitanowie",
                "calc.output.spearmenArchers": "Włócznicy/Łucznicy",
                "calc.output.specialistsRiders": "Specjaliści/Jeźdźcy",
                "calc.output.spiesTotal": "Szpiedzy łącznie",
                "calc.output.monstersTotal": "Potwory łącznie",
                "calc.output.mercenaries": "Najemnicy",
                "calc.output.wallsCatapult": "Mury/Katapulty",
                "calc.output.goldTotal": "Złoto łącznie",
                "calc.output.tarTotal": "Smoła łącznie",
                "calc.output.directSilver": "Srebro zabrane",
                "calc.output.totalSilverLoss": "ŁĄCZNA STRATA SREBRO",
                "calc.output.totalWithTax": "RAZEM (Z 20% PODATKIEM)",
                "calc.output.food": "Żywność",
                "calc.output.lumber": "Drewno",
                "calc.output.stone": "Kamień",
                "calc.output.iron": "Żelazo"
            },
            roeHtml: `
<p class="roe-intro">Z rozkazu Króla Arihelma następujące ROE obowiązuje w królestwie:</p>
<ol class="roe-list">
    <li>
        <h3>1. CZAS POKOJU</h3>
        <ul class="roe-points">
            <li>Ataki na miasta są zabronione z wyjątkiem CoT i planowanych wymian CP.</li>
            <li>Ataki na portale i budynki klanowe są zabronione. Chyba że portal jest udowodniony jako wrogi klanowi i lub jego zasobom na jego terytorium.</li>
            <li>Scouting jest formą agresji.</li>
        </ul>
    </li>
    <li>
        <h3>2. DYPLOMACI</h3>
        <ul class="roe-points">
            <li>Klany muszą wskazać co najmniej jednego dyplomatę w opisie klanu, który może pomóc w rozwiązywaniu sporów. Dyplomaci muszą być aktywnym liderem lub przełożonym.</li>
        </ul>
    </li>
    <li>
        <h3>3. Zasady ogólne</h3>
        <ul class="roe-points">
            <li>Wszystkie budynki zasobów w terytorium klanu należą do tego klanu.</li>
            <li>W tym WS i DMs.</li>
            <li>Zasoby stworzone przez graczy należą do osoby, która je stworzyła, chyba że uzgodniono współdzielenie między dwiema stronami.</li>
            <li>Rzadkie krypty należą do osoby, która je odblokowała.</li>
            <li>WS i DMs:
                <ul>
                    <li>a. Nie ma już systemu rejestracji.</li>
                    <li>b. Wszystkie dzikie budynki zasobów (w tym DM/WS) są na zasadzie kto pierwszy, ten lepszy (FCFS).</li>
                    <li>c. Roszczenia nie mogą być składane, jeśli jesteś scoutowany/atakowany w dzikich zasobach, chyba że:
                        <ul>
                            <li>Stracisz budynek.</li>
                            <li>Jesteś scoutowany/atakowany, a potem zaatakowany ponownie. (zasada 2x)</li>
                        </ul>
                    </li>
                    <li>d. Twoim obowiązkiem jest wysłanie wiadomości do swojego dyplomaty, drugiego gracza i jego dyplomaty/lidera klanu, jeśli ktoś scouteuje lub atakuje cię w kopalni.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>4. PRZEWODNIK KOMPENSACJI PAŁACU --</h3>
        <ul class="roe-points">
            <li>Każdy atak lub scouting wiąże się z bazowym kosztem 1 miliona srebro. Wszelkie dodatkowe straty, szkody lub skradzione zasoby są dodawane do tego kosztu bazowego.</li>
            <li>RSS: kwota równa skradzionej ilości</li>
            <li>Złoto: 1 Złoto = 3,000 Srebro lub kopalnie złota równe skradzionemu + 10% (decyzją ofiary)</li>
            <li>Tar: 1 Tar = 1,000 Srebro</li>
            <li>Sztabki złota = brak rekompensaty</li>
            <li>Nielegalnie zamknięty portal: 1M srebro (+1M za sam nielegalny atak)</li>
            <li>Obrażenia są obliczane według następującej formuły: Straty wojsk są obliczane według następującej formuły:
                <ul>
                    <li>Bohater= 1.5k</li>
                    <li>Kapitan= 1k</li>
                    <li>Włócznicy, Łucznicy = Poziom wojsk x 40</li>
                    <li>Specjaliści, Jeźdźcy = Poziom wojsk x 80</li>
                    <li>Szpiedzy= Poziom wojsk x 100</li>
                    <li>Gryfy= Poziom wojsk x 800</li>
                    <li>Katapulty, Mury Poziom murów x 200</li>
                    <li>Potwory III-VII (Poziom potwora ⁃ 2) x1.3k</li>
                    <li>Potwory I & II=x 8.64k</li>
                    <li>Straż najemna Poziom wojsk x120</li>
                    <li>Potwór najemny = Poziom potwora x 3k</li>
                </ul>
            </li>
            <li>-FORTY -
                <ul>
                    <li>Scouting = 5 milionów srebro</li>
                    <li>Atak bez zniszczenia = 10 milionów srebro</li>
                    <li>Atak i zniszczenie = 20 milionów każdego Srebro, Iron, Wood, Stone</li>
                </ul>
            </li>
            <li>- STOLICE -
                <ul>
                    <li>Scouting = 5 milionów srebro</li>
                    <li>Atak bez zniszczenia = 10 milionów srebro</li>
                    <li>Atak i zniszczenie = 50 milionów każdego Srebro, Iron, Wood, Stone</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>5. PODATKI</h3>
        <ul class="roe-points">
            <li>Miasta z ponad 3 dniami zgromadzonych ingotów mogą zostać zaatakowane przez członka Gwardii Królewskiej po 24 godzinach ostrzeżenia. Sztabki złota nie mają dla ciebie osobistej wartości, ale Król może ich użyć do włączenia bonusów dla całego królestwa. Jeśli mamy sztabki złota, zostaną użyte dla dobra K273.</li>
            <li>Maksymalna liczba sztabki złota na miasto:
                <ul>
                    <li>Miasto 1-9: 2000 Ingots</li>
                    <li>Miasto 10-19: 3000 Ingots</li>
                    <li>Miasto 20-24: 10000 Ingots</li>
                    <li>Miasto 25-29: 35000 Ingots</li>
                    <li>Miasto 30-34: 60000 Ingots</li>
                    <li>Miasto 35-39: 70000 Ingots</li>
                    <li>Miasto 40+: 90000 Ingots</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>6. Członkowie Szacownego Królestwa</h3>
        <ul class="roe-points">
            <li>Każdy gracz musi przestrzegać tych zasad, aby być chronionym przez ROE. Gracze niechronieni to:
                <ul>
                    <li>WYJĘCI SPOD PRAWA</li>
                    <li>GRACZE BEZ KLANU</li>
                    <li>NIENALĘŻĄCY DO ROE</li>
                </ul>
            </li>
            <li>Wyjęci spod prawa – Jeśli osoby lub klany nie chcą przestrzegać ROE, atakują budynki klanowe lub odmawiają zapłaty rekompensaty za naruszenia ROE, otrzymają status wyjętego spod prawa. Aktualnych wyjętych spod prawa można znaleźć w #K273/OUTLAWS. Aktualna lista wyjętych spod prawa zostanie wyczyszczona i rozpoczęta od nowa. Oznacza to, że obecnie nie ma wyjętych spod prawa w królestwie. Nowa Gwardia Królewska będzie współdzielić odpowiedzialności za pomoc w królestwie.</li>
            <li>Gwardia Królewska: Nowa Gwardia Królewska składa się z wielu klanów i ma bardzo silnych graczy jako członków. Obowiązki RG będą kontynuować normalne zadania, takie jak pobór podatków i egzekwowanie dla Pałacu. Dodatkowe obowiązki będą teraz obejmować pomoc klanom z wyjętymi spod prawa i królestwu z precyzją. Będą także działać jako elitarna armia i jednostka patrolowo-obronna królestwa/terytorium.</li>
            <li>Dodatkowo aktywując relacje z większymi klanami królestwa, aby pomóc w razie potrzeby.</li>
            <li>Gracze bez klanu z might 250k lub mniej są chronieni i nie mogą być swobodnie atakowani.</li>
            <li>Gracze bez klanu z mniej niż 250k might zaatakowani mogą dochodzić 2x kwoty rekompensaty w roszczeniach.</li>
            <li>Interakcje z tymi graczami powinny najpierw służyć poznaniu ich i ich celów w grze. Następnie zachęta do dołączenia do klanu. Wspierać rozwój w grze i grać dla królestwa zamiast dla osobistej nagrody.</li>
        </ul>
    </li>
    <li>
        <h3>7. Clash of Thrones  CoT</h3>
        <ul class="roe-points">
            <li>Podczas, możesz scoutować i atakować miasta na następujących warunkach:</li>
            <li>Brak ataków na forty klanowe: Atakowanie fortów lub budynków innego klanu jest surowo zabronione.</li>
            <li>Zarządzanie portalami: Nie obowiązuje ograniczenie might. Każdy portal udowodniony jako wrogi terytoriom klanu może zostać zaatakowany z szybką sprawiedliwością przez atakowany klan. Marsze klanowe są w pełni dozwolone do zamykania wrogich portali. W normalnym czasie pokoju portale nie mogą być atakowane w żadnym momencie, chyba że są udowodnione jako wrogie.</li>
            <li>Zarządzanie zasobami: Utrzymuj zasoby niskie podczas wydarzenia, aby uniknąć kradzieży; w razie potrzeby wysyłaj wojska do fortów. Praktykuj No Value City (NVC)</li>
            <li>"Fair Play": Atakowanie kogoś znacznie słabszego (np. poniżej połowy twojego might) jest często uznawane za złą sportową postawę i nie jest dozwolone. Jedyny przypadek, w którym jest dozwolone, to wrogi portal. Portale pozostawione otwarte przez graczy, którzy mają innych członków atakujących przez nie, nadal są winni pozostawienia portalu otwartego i mogą być atakowani niezależnie od ich might. Raport z ataku musi być dostarczony we wszystkich roszczeniach. Poniżej połowy twojego might nie jest dozwolone. Obowiązuje zasada 50%.</li>
        </ul>
    </li>
    <li>
        <h3>8. Proces rozwiązywania konfliktów</h3>
        <ul class="roe-points">
            <li>Gdy ROE zostanie naruszone, należy podjąć następujące kroki:
                <ol>
                    <li>Skontaktuj się z drugim graczem, aby spróbować rozwiązać. Jeśli brak rozwiązania w ciągu 24 godzin, eskaluj do swojego dyplomaty klanowego.</li>
                    <li>Jeśli nie osiągnięto rozwiązania między dyplomatami klanowymi, mogą wnieść sprawę przed Sąd publikując ją w #K273/CLAIMS. Tylko liderzy klanu lub dyplomaci mogą publikować roszczenia w tym czacie.</li>
                    <li>Sędziowie rozstrzygną, aby określić winnego (jeśli taki istnieje) i akceptowalną kwotę rekompensaty.</li>
                    <li>Jeśli winna strona (lub jej klan) odmówi rekompensaty, Królewski Sąd zdecyduje, czy gracz lub klan powinien zostać uznany za wyjętego spod prawa, a Gwardia Królewska zostanie aktywowana w gotowości.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>
        <h3>9. Czaty Królestwa do dołączenia</h3>
        <ul class="roe-points">
            <li>#K273/ROE</li>
            <li>#K273/CLAIMS</li>
            <li>#K273/OUTLAWS</li>
            <li>~#K273/CPTHUNDERDOME</li>
            <li>~#K273tbxyz</li>
            <li>~#K273/ACADEMY</li>
        </ul>
    </li>
</ol>
`
        },
        ru: {
            strings: {
                "site.languageLabel": "Язык",
                "site.footer": "Сделано для K273 от Zee",
                "index.title": "TotalBattle Королевство 273",
                "index.hero.eyebrow": "K273 | Инструменты и ссылки",
                "index.hero.title": "TotalBattle Королевство 273",
                "index.hero.lede": "Быстрый доступ к нашим калькуляторам и ресурсам.",
                "index.palace.eyebrow": "Дворец",
                "index.palace.card.title": "Роли дворца и ROE",
                "index.palace.card.body": "Проверьте текущие назначения дворца и правила боя королевства.",
                "index.palace.card.button": "Открыть страницу дворца",
                "index.tools.eyebrow": "ИНСТРУМЕНТЫ",
                "index.calc.card.title": "Калькулятор стоимости ущерба от незаконной атаки",
                "index.calc.card.body": "Введите потери и скопируйте форматированное сообщение в чат TotalBattle.",
                "index.calc.card.button": "Открыть калькулятор",
                "palace.title": "K273 Роли дворца и ROE",
                "palace.hero.eyebrow": "K273 | Обзор дворца",
                "palace.hero.title": "Роли дворца и ROE",
                "palace.hero.lede": "Текущие руководящие места и правила боя королевства.",
                "palace.hero.back": "← Назад на главную",
                "palace.roles.eyebrow": "Дворец",
                "palace.roles.title": "Текущие роли",
                "palace.roles.sub": "Кто сейчас занимает каждую должность.",
                "palace.roles.updated": "Последнее обновление 12/30/2025",
                "palace.roles.table.role": "Роль",
                "palace.roles.table.player": "Игрок",
                "palace.roles.king": "КОРОЛЬ",
                "palace.roles.hand": "Рука короля",
                "palace.roles.queen": "Королева",
                "palace.roles.centurion": "Центурион",
                "palace.roles.chancellor": "Канцлер",
                "palace.roles.treasurer": "Казначей",
                "palace.roles.archon": "Архон",
                "palace.roles.quaestor": "Квестор",
                "palace.roles.tribute": "Дань",
                "palace.roles.legate": "Легат",
                "palace.image.alt": "Дворец TotalBattle",
                "palace.roe.eyebrow": "ROE",
                "palace.roe.title": "Правила ведения боя",
                "palace.roe.subtitle": "Руководство королевства по бою и поведению.<br>Английская версия — официальная ROE (Переводы через ИИ)<br>Последнее обновление 12/30/2025",
                "palace.back": "← Назад на главную",
                "calculator.title": "TotalBattle Калькулятор ущерба",
                "calculator.hero.eyebrow": "K273 | Калькулятор незаконной атаки",
                "calculator.hero.title": "TotalBattle Ущерб",
                "calculator.hero.lede": "Введите потери и создайте готовое к копированию резюме для сообщений ROE.",
                "calculator.hero.back": "← Назад к инструментам",
                "calculator.base.eyebrow": "Базовые стоимости",
                "calculator.base.title": "По умолчанию",
                "calculator.base.sub": "Настройте только при изменении правил. Значения сохраняются только для этой сессии. (Свяжитесь с Zee для постоянных изменений)",
                "calculator.base.pill": "База",
                "calculator.clan.eyebrow": "Клановые здания",
                "calculator.clan.title": "Необязательные потери",
                "calculator.clan.sub": "Включайте только когда атакованы форты/столицы. Значения по умолчанию редактируются.",
                "calculator.clan.include": "Включить в отчет",
                "calculator.armyFlat.eyebrow": "Потери армии",
                "calculator.armyFlat.title": "Записи с фиксированной стоимостью",
                "calculator.armyFlat.sub": "Введите базовые количества потерянных юнитов с фиксированной стоимостью.",
                "calculator.armyTier.eyebrow": "Потери армии по уровню",
                "calculator.armyTier.title": "Записи по уровню",
                "calculator.armyTier.sub": "Введите количества для каждого уровня потерянных юнитов.",
                "calculator.summary.eyebrow": "Сводка",
                "calculator.summary.title": "Итоги и блок для копирования",
                "calculator.summary.sub": "Добавьте взятое серебро, а также ресурсы.",
                "calculator.directSilver": "Серебро взято",
                "calculator.food": "Еда",
                "calculator.lumber": "Древесина",
                "calculator.stone": "Камень",
                "calculator.iron": "Железо",
                "calculator.silverSubtotal": "Промежуточный итог серебро",
                "calculator.totalLoss": "Общая потеря (с взятым серебром)",
                "calculator.calculate": "Рассчитать",
                "calculator.reset": "Сбросить",
                "calculator.copyLabel": "Сообщение для копирования",
                "calculator.copyButton": "Копировать сводку",
                "calculator.back": "← Назад к инструментам",
                "calculator.formula.baseCount": "База × Количество",
                "calculator.formula.baseCountLevel": "База × Количество × Уровень",
                "calculator.formula.baseCountLevelMinusTwo": "База × Количество × (Уровень − 2)",
                "calculator.label.count": "Количество",
                "common.show": "Показать",
                "common.hide": "Скрыть",
                "calc.base.scoutingEvents": "События разведки",
                "calc.base.attackEvents": "События атаки",
                "calc.base.portal": "Портал",
                "calc.base.hero": "Герой",
                "calc.base.captain": "Капитан",
                "calc.base.monsters12": "Монстры 1-2",
                "calc.base.monsters37": "Монстры 3-7",
                "calc.base.spearmenArchers": "Копейщики / Лучники",
                "calc.base.specialistRiders": "Специалисты / Всадники",
                "calc.base.spies": "Шпионы",
                "calc.base.griffins": "Грифоны",
                "calc.base.catapultsWalls": "Катапульты / Стены",
                "calc.base.mercGuard": "Наёмная стража",
                "calc.base.mercMonster": "Наёмный монстр",
                "calc.base.gold": "Золото",
                "calc.base.tar": "Смола",
                "calc.base.fortScout": "Разведка форта",
                "calc.base.fortAttack": "Атака форта (не разрушен)",
                "calc.base.fortDestroy": "Атака форта (разрушен)",
                "calc.base.capScout": "Разведка столицы",
                "calc.base.capAttack": "Атака столицы (не разрушена)",
                "calc.base.capDestroy": "Атака столицы (разрушена)",
                "calc.output.clanBuildings": "КЛАНОВЫЕ ЗДАНИЯ",
                "calc.output.armyLoss": "ПОТЕРИ АРМИИ",
                "calc.output.additionalLoss": "ДОПОЛНИТЕЛЬНЫЕ ПОТЕРИ",
                "calc.output.resourceLoss": "ПОТЕРЯ РЕСУРСОВ",
                "calc.output.fortScout": "Разведка форта",
                "calc.output.fortAttackHit": "Атака форта (попадание)",
                "calc.output.fortAttackDestroy": "Атака форта (уничтожение)",
                "calc.output.capScout": "Разведка столицы",
                "calc.output.capAttackHit": "Атака столицы (попадание)",
                "calc.output.capAttackDestroy": "Атака столицы (уничтожение)",
                "calc.output.scoutEvents": "События разведки",
                "calc.output.attackEvents": "События атаки",
                "calc.output.portalClosed": "Портал закрыт",
                "calc.output.heroCaptains": "Герой/Капитаны",
                "calc.output.spearmenArchers": "Копейщики/Лучники",
                "calc.output.specialistsRiders": "Специалисты/Всадники",
                "calc.output.spiesTotal": "Шпионы всего",
                "calc.output.monstersTotal": "Монстры всего",
                "calc.output.mercenaries": "Наёмники",
                "calc.output.wallsCatapult": "Стены/Катапульты",
                "calc.output.goldTotal": "Золото всего",
                "calc.output.tarTotal": "Смола всего",
                "calc.output.directSilver": "Серебро взято",
                "calc.output.totalSilverLoss": "ОБЩАЯ ПОТЕРЯ СЕРЕБРО",
                "calc.output.totalWithTax": "ИТОГО (С 20% НАЛОГОМ)",
                "calc.output.food": "Еда",
                "calc.output.lumber": "Древесина",
                "calc.output.stone": "Камень",
                "calc.output.iron": "Железо"
            },
            roeHtml: `
<p class="roe-intro">По приказу Короля Арихельма следующие ROE действуют в королевстве:</p>
<ol class="roe-list">
    <li>
        <h3>1. МИРНОЕ ВРЕМЯ</h3>
        <ul class="roe-points">
            <li>Атаки на города запрещены, кроме CoT и запланированных обменов CP.</li>
            <li>Атаки на порталы и клановые здания запрещены. Если только портал не доказан как враждебный клану и или его ресурсам на его территории.</li>
            <li>Разведка является формой агрессии.</li>
        </ul>
    </li>
    <li>
        <h3>2. ДИПЛОМАТЫ</h3>
        <ul class="roe-points">
            <li>Кланы должны указать хотя бы одного дипломата в описании клана, который может помочь в разрешении споров. Дипломаты должны быть активным лидером или старшим.</li>
        </ul>
    </li>
    <li>
        <h3>3. Общие правила</h3>
        <ul class="roe-points">
            <li>Все здания ресурсов на территории клана принадлежат этому клану.</li>
            <li>Включая WS и DMs.</li>
            <li>Ресурсы, созданные игроками, принадлежат человеку, который их создал, если не согласовано разделение между двумя сторонами.</li>
            <li>Редкие крипты принадлежат человеку, который их открыл.</li>
            <li>WS и DMs:
                <ul>
                    <li>a. Больше нет системы регистрации.</li>
                    <li>b. Все дикие здания ресурсов (включая DM/WS) работают по принципу первым пришел, первым обслужен (FCFS).</li>
                    <li>c. Претензии не могут быть заявлены, если вас разведали/атаковали на диких ресурсах, кроме случаев:
                        <ul>
                            <li>Вы теряете здание.</li>
                            <li>Вас разведали/атаковали, а затем атаковали снова. (правило 2x)</li>
                        </ul>
                    </li>
                    <li>d. Ваша обязанность — написать вашему дипломату, другому игроку и их дипломату/лидеру клана, если кто-то разведует или атакует вас в шахте.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>4. РУКОВОДСТВО ПО КОМПЕНСАЦИИ ДВОРЦА --</h3>
        <ul class="roe-points">
            <li>Каждая атака или разведка имеет базовую стоимость 1 миллион серебро. Любые дополнительные потери, повреждения или украденные ресурсы добавляются к этой базовой стоимости.</li>
            <li>RSS: сумма равная украденной сумме</li>
            <li>Золото: 1 Золото = 3,000 Серебро или золотые шахты равные украденному + 10% (по решению жертвы)</li>
            <li>Tar: 1 Tar = 1,000 Серебро</li>
            <li>Золотые слитки = без компенсации</li>
            <li>Незаконно закрытый портал: 1M серебро (+1M за сам незаконный атаку)</li>
            <li>Урон рассчитывается по следующей формуле: Потери войск рассчитываются по следующей формуле:
                <ul>
                    <li>Герой= 1.5k</li>
                    <li>Капитан= 1k</li>
                    <li>Копейщики, Лучники = Уровень войск x 40</li>
                    <li>Специалисты, Всадники = Уровень войск x 80</li>
                    <li>Шпионы= Уровень войск x 100</li>
                    <li>Грифоны= Уровень войск x 800</li>
                    <li>Катапульты, Стены Уровень стен x 200</li>
                    <li>Монстры III-VII (Уровень монстра ⁃ 2) x1.3k</li>
                    <li>Монстры I & II=x 8.64k</li>
                    <li>Наёмная стража Уровень войск x120</li>
                    <li>Наёмный монстр = Уровень монстра x 3k</li>
                </ul>
            </li>
            <li>-ФОРТЫ -
                <ul>
                    <li>Разведка = 5 миллионов серебро</li>
                    <li>Атака без уничтожения = 10 миллионов серебро</li>
                    <li>Атака и уничтожение = 20 миллионов каждого Серебро, Iron, Wood, Stone</li>
                </ul>
            </li>
            <li>- СТОЛИЦЫ -
                <ul>
                    <li>Разведка = 5 миллионов серебро</li>
                    <li>Атака без уничтожения = 10 миллионов серебро</li>
                    <li>Атака и уничтожение = 50 миллионов каждого Серебро, Iron, Wood, Stone</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>5. НАЛОГИ</h3>
        <ul class="roe-points">
            <li>Города с более чем 3 днями накопленных ingots могут быть атакованы членом Королевской Гвардии после предупреждения за 24 часа. Золотые слитки не имеют личной ценности для вас, но Король может использовать их, чтобы включать бонусы для всего королевства. Если у нас есть золотые слитки, они будут использованы на благо K273.</li>
            <li>Максимум золотые слитки на город:
                <ul>
                    <li>Город 1-9: 2000 Ingots</li>
                    <li>Город 10-19: 3000 Ingots</li>
                    <li>Город 20-24: 10000 Ingots</li>
                    <li>Город 25-29: 35000 Ingots</li>
                    <li>Город 30-34: 60000 Ingots</li>
                    <li>Город 35-39: 70000 Ingots</li>
                    <li>Город 40+: 90000 Ingots</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>6. Члены Почитаемого Королевства</h3>
        <ul class="roe-points">
            <li>Каждый игрок должен соблюдать эти правила, чтобы быть защищенным ROE. Игроки, не защищенные:
                <ul>
                    <li>ВНЕ ЗАКОНА</li>
                    <li>ИГРОКИ БЕЗ КЛАНА</li>
                    <li>НЕ-УЧАСТНИКИ ROE</li>
                </ul>
            </li>
            <li>Вне закона – Если отдельные лица или кланы не готовы соблюдать ROE, атакуют клановые здания или отказываются платить компенсацию за нарушения ROE, они получают статус вне закона. Текущих вне закона можно найти в #K273/OUTLAWS. Текущий список вне закона будет очищен и начат заново. Это означает, что сейчас в королевстве нет вне закона. Новая Королевская Гвардия разделит обязанности по помощи королевству.</li>
            <li>Королевская Гвардия: Новая Королевская Гвардия состоит из многих кланов и имеет очень сильных игроков в составе. Обязанности RG продолжат свои обычные обязанности, такие как сбор налогов и обеспечение порядка для Дворца. Дополнительные обязанности теперь будут включать помощь кланам с вне законами и королевству с точностью. Они также будут действовать как элитная армия и патрульно-оборонное подразделение королевства/территории.</li>
            <li>Кроме того, активируя отношения с большими кланами королевства, чтобы помогать при необходимости.</li>
            <li>Игроки без клана с might 250k или ниже защищены и не должны свободно атаковаться.</li>
            <li>Игроки без клана с менее чем 250k might, подвергшиеся атаке, могут требовать 2x компенсации в претензиях.</li>
            <li>Взаимодействия с этими игроками должны сначала быть направлены на знакомство с ними и их целями в игре. Затем — поощрение вступить в клан. Способствовать росту в игре и играть за королевство, а не ради личной выгоды.</li>
        </ul>
    </li>
    <li>
        <h3>7. Clash of Thrones  CoT</h3>
        <ul class="roe-points">
            <li>Во время, вы можете разведывать и атаковать города при следующих условиях:</li>
            <li>Без атак на клановые форты: Атаки на форты или здания другого клана строго запрещены.</li>
            <li>Управление порталами: Ограничение might не применяется. Любой портал, доказано враждебный территориям клана, может быть атакован с быстрой справедливостью атакуемым кланом. Клановые марши полностью разрешены для закрытия враждебных порталов. В обычное мирное время порталы не могут быть атакованы в любое время, если не доказано, что они враждебны.</li>
            <li>Управление ресурсами: Держите ресурсы низкими во время события, чтобы избежать краж; отправляйте войска в форты при необходимости. Практикуйте No Value City (NVC)</li>
            <li>"Fair Play": Атаковать кого-то значительно слабее (например, меньше половины вашей might) часто считается плохой спортивностью и не допускается. Единственный случай, когда это допускается, — враждебный портал. Порталы, оставленные открытыми игроками, через которые атакуют другие участники, все еще виновны в том, что оставили портал открытым, и могут быть атакованы независимо от их might. Отчет об атаке должен быть предоставлен во всех заявленных претензиях. Ниже половины вашей might не допускается. Применяется правило 50%.</li>
        </ul>
    </li>
    <li>
        <h3>8. Процесс разрешения конфликтов</h3>
        <ul class="roe-points">
            <li>Когда ROE нарушен, следует предпринять следующие шаги:
                <ol>
                    <li>Свяжитесь с другим игроком, чтобы попытаться решить. Если нет решения в течение 24 часов, эскалируйте к вашему клановому дипломату.</li>
                    <li>Если решение не достигнуто между клановыми дипломатами, они могут вынести вопрос в Суд, разместив его в #K273/CLAIMS. Только лидеры клана или дипломаты могут публиковать претензии в этом чате.</li>
                    <li>Судьи вынесут решение, чтобы определить виновную сторону (если есть) и приемлемую сумму компенсации.</li>
                    <li>Если виновная сторона (или ее клан) отказывается компенсировать, Королевский Суд определит, следует ли объявить игрока или клан вне закона, и Королевская Гвардия будет активирована в ожидании.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>
        <h3>9. Чаты Королевства для присоединения</h3>
        <ul class="roe-points">
            <li>#K273/ROE</li>
            <li>#K273/CLAIMS</li>
            <li>#K273/OUTLAWS</li>
            <li>~#K273/CPTHUNDERDOME</li>
            <li>~#K273tbxyz</li>
            <li>~#K273/ACADEMY</li>
        </ul>
    </li>
</ol>
`
        },
        sv: {
            strings: {
                "site.languageLabel": "Språk",
                "site.footer": "Skapad för K273 av Zee",
                "index.title": "TotalBattle Kungarike 273",
                "index.hero.eyebrow": "K273 | Verktyg & Länkar",
                "index.hero.title": "TotalBattle Kungarike 273",
                "index.hero.lede": "Snabb åtkomst till våra kalkylatorer och resurser.",
                "index.palace.eyebrow": "Palats",
                "index.palace.card.title": "Palatsroller & ROE",
                "index.palace.card.body": "Se de senaste palatsuppdragen och rikets regler för engagemang.",
                "index.palace.card.button": "Öppna palatssidan",
                "index.tools.eyebrow": "VERKTYG",
                "index.calc.card.title": "Kalkylator för kostnad av olaglig attackskada",
                "index.calc.card.body": "Ange förluster och kopiera det formaterade meddelandet tillbaka till TotalBattle-chatten.",
                "index.calc.card.button": "Öppna kalkylator",
                "palace.title": "K273 Palatsroller & ROE",
                "palace.hero.eyebrow": "K273 | Palatsöversikt",
                "palace.hero.title": "Palatsroller & ROE",
                "palace.hero.lede": "Aktuella ledningsplatser och rikets regler för engagemang.",
                "palace.hero.back": "← Tillbaka till hem",
                "palace.roles.eyebrow": "Palats",
                "palace.roles.title": "Aktuella roller",
                "palace.roles.sub": "Vem som innehar varje plats just nu.",
                "palace.roles.updated": "Senast uppdaterad 12/30/2025",
                "palace.roles.table.role": "Roll",
                "palace.roles.table.player": "Spelare",
                "palace.roles.king": "KUNG",
                "palace.roles.hand": "Kungens hand",
                "palace.roles.queen": "Drottning",
                "palace.roles.centurion": "Centurion",
                "palace.roles.chancellor": "Kansler",
                "palace.roles.treasurer": "Skattmästare",
                "palace.roles.archon": "Archon",
                "palace.roles.quaestor": "Kvestor",
                "palace.roles.tribute": "Tribut",
                "palace.roles.legate": "Legat",
                "palace.image.alt": "TotalBattle-palats",
                "palace.roe.eyebrow": "ROE",
                "palace.roe.title": "Regler för engagemang",
                "palace.roe.subtitle": "Rikets riktlinjer för strid och uppförande.<br>Engelska versionen är officiell ROE (Översättningar via AI)<br>Senast uppdaterad 12/30/2025",
                "palace.back": "← Tillbaka till hem",
                "calculator.title": "TotalBattle Skadekalkylator",
                "calculator.hero.eyebrow": "K273 | Kalkylator för olaglig attack",
                "calculator.hero.title": "TotalBattle Skada",
                "calculator.hero.lede": "Ange förluster och skapa en kopieringsklar sammanfattning för ROE-meddelanden.",
                "calculator.hero.back": "← Tillbaka till verktyg",
                "calculator.base.eyebrow": "Baskostnader",
                "calculator.base.title": "Standard",
                "calculator.base.sub": "Justera endast om reglerna ändras. Värden sparas endast för denna session. (Kontakta Zee för permanenta ändringar)",
                "calculator.base.pill": "Bas",
                "calculator.clan.eyebrow": "Klanbyggnader",
                "calculator.clan.title": "Valfria förluster",
                "calculator.clan.sub": "Inkludera endast när fort/huvudstäder träffas. Standardvärden är redigerbara.",
                "calculator.clan.include": "Inkludera i rapport",
                "calculator.armyFlat.eyebrow": "Armeförluster",
                "calculator.armyFlat.title": "Poster med fast kostnad",
                "calculator.armyFlat.sub": "Ange grundantal för förlorade enheter med fast kostnad.",
                "calculator.armyTier.eyebrow": "Armeförluster per nivå",
                "calculator.armyTier.title": "Nivåbaserade poster",
                "calculator.armyTier.sub": "Ange antal för varje nivå av förlorade enheter.",
                "calculator.summary.eyebrow": "Sammanfattning",
                "calculator.summary.title": "Totaler och kopieringsblock",
                "calculator.summary.sub": "Lägg till eventuellt silver taget samt resurser.",
                "calculator.directSilver": "Silver taget",
                "calculator.food": "Mat",
                "calculator.lumber": "Trä",
                "calculator.stone": "Sten",
                "calculator.iron": "Järn",
                "calculator.silverSubtotal": "Silver delsumma",
                "calculator.totalLoss": "Total förlust (med silver taget)",
                "calculator.calculate": "Beräkna",
                "calculator.reset": "Återställ",
                "calculator.copyLabel": "Kopieringsklart meddelande",
                "calculator.copyButton": "Kopiera sammanfattning",
                "calculator.back": "← Tillbaka till verktyg",
                "calculator.formula.baseCount": "Bas × Antal",
                "calculator.formula.baseCountLevel": "Bas × Antal × Nivå",
                "calculator.formula.baseCountLevelMinusTwo": "Bas × Antal × (Nivå − 2)",
                "calculator.label.count": "Antal",
                "common.show": "Visa",
                "common.hide": "Dölj",
                "calc.base.scoutingEvents": "Spaningshändelser",
                "calc.base.attackEvents": "Attackhändelser",
                "calc.base.portal": "Portal",
                "calc.base.hero": "Hjälte",
                "calc.base.captain": "Kapten",
                "calc.base.monsters12": "Monster 1-2",
                "calc.base.monsters37": "Monster 3-7",
                "calc.base.spearmenArchers": "Spjutmän / Bågskyttar",
                "calc.base.specialistRiders": "Specialister / Ryttare",
                "calc.base.spies": "Spioner",
                "calc.base.griffins": "Griffiner",
                "calc.base.catapultsWalls": "Katapulter / Murar",
                "calc.base.mercGuard": "Legosoldatsvakt",
                "calc.base.mercMonster": "Legosoldatmonster",
                "calc.base.gold": "Guld",
                "calc.base.tar": "Tjära",
                "calc.base.fortScout": "Fortspaning",
                "calc.base.fortAttack": "Fortattack (inte förstörd)",
                "calc.base.fortDestroy": "Fortattack (förstörd)",
                "calc.base.capScout": "Huvudstadsspaning",
                "calc.base.capAttack": "Huvudstadsattack (inte förstörd)",
                "calc.base.capDestroy": "Huvudstadsattack (förstörd)",
                "calc.output.clanBuildings": "KLANBYGGNADER",
                "calc.output.armyLoss": "ARMEFÖRLUST",
                "calc.output.additionalLoss": "YTTERLIGARE FÖRLUST",
                "calc.output.resourceLoss": "RESURSFÖRLUST",
                "calc.output.fortScout": "Fortspaning",
                "calc.output.fortAttackHit": "Fortattack (träff)",
                "calc.output.fortAttackDestroy": "Fortattack (förstörd)",
                "calc.output.capScout": "Huvudstadsspaning",
                "calc.output.capAttackHit": "Huvudstadsattack (träff)",
                "calc.output.capAttackDestroy": "Huvudstadsattack (förstörd)",
                "calc.output.scoutEvents": "Spaningshändelser",
                "calc.output.attackEvents": "Attackhändelser",
                "calc.output.portalClosed": "Portal stängd",
                "calc.output.heroCaptains": "Hjälte/Kaptener",
                "calc.output.spearmenArchers": "Spjutmän/Bågskyttar",
                "calc.output.specialistsRiders": "Specialister/Ryttare",
                "calc.output.spiesTotal": "Spioner totalt",
                "calc.output.monstersTotal": "Monster totalt",
                "calc.output.mercenaries": "Legosoldater",
                "calc.output.wallsCatapult": "Murar/Katapulter",
                "calc.output.goldTotal": "Guld totalt",
                "calc.output.tarTotal": "Tjära totalt",
                "calc.output.directSilver": "Silver taget",
                "calc.output.totalSilverLoss": "TOTAL SILVERFÖRLUST",
                "calc.output.totalWithTax": "TOTAL (MED 20% SKATT)",
                "calc.output.food": "Mat",
                "calc.output.lumber": "Trä",
                "calc.output.stone": "Sten",
                "calc.output.iron": "Järn"
            },
            roeHtml: `
<p class="roe-intro">På order av Kung Arihelm gäller följande ROE för riket:</p>
<ol class="roe-list">
    <li>
        <h3>1. FREDSTID</h3>
        <ul class="roe-points">
            <li>Attacker på städer är förbjudna förutom under CoT och planerade CP-byten.</li>
            <li>Attacker på portaler och klanbyggnader är förbjudna. Om inte portalen är bevisat fientlig mot klanen och eller dess resurser i dess territorium.</li>
            <li>Spaning är en form av aggression.</li>
        </ul>
    </li>
    <li>
        <h3>2. DIPLOMATER</h3>
        <ul class="roe-points">
            <li>Klaner måste ange minst en diplomat i sin klanbeskrivning som kan hjälpa till med tvistlösning. Diplomater måste vara en aktiv ledare eller överordnad.</li>
        </ul>
    </li>
    <li>
        <h3>3. Allmänna regler</h3>
        <ul class="roe-points">
            <li>Alla resursbyggnader inom klanens territorium tillhör den klanen.</li>
            <li>Inklusive WS och DMs.</li>
            <li>Resurser skapade av spelare tillhör individen som skapade dem om inte annat överenskommits mellan två parter.</li>
            <li>Sällsynta kryptor tillhör individen som låste upp dem.</li>
            <li>WS och DMs:
                <ul>
                    <li>a. Det finns inte längre ett registreringssystem.</li>
                    <li>b. Alla vilda resursbyggnader (inklusive DM/WS) är först till kvarn (FCFS).</li>
                    <li>c. Krav kan inte göras om du blir scoutad/attackerad i vilda resurser om inte:
                        <ul>
                            <li>Du förlorar byggnaden.</li>
                            <li>Du blir scoutad/attackerad och sedan attackerad igen. (2x regel)</li>
                        </ul>
                    </li>
                    <li>d. Det är ditt ansvar att meddela din diplomat, den andra spelaren och deras diplomat/klanledare om någon scoutar dig eller attackerar dig i en gruva.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>4. PALATSETS KOMPENSATIONSGUIDE --</h3>
        <ul class="roe-points">
            <li>Varje attack eller scouting har en baskostnad på 1 miljon silver. Eventuella ytterligare förluster, skador eller stulna resurser läggs ovanpå denna baskostnad.</li>
            <li>RSS: belopp lika med det stulna beloppet</li>
            <li>Guld: 1 Guld = 3,000 Silver eller guldgruvor lika med stulen + 10% (enligt offrets beslut)</li>
            <li>Tar: 1 Tar = 1,000 Silver</li>
            <li>Guldtackor = ingen kompensation</li>
            <li>Olagligt stängd portal: 1M silver (+1M för själva olagliga attacken)</li>
            <li>Skador beräknas enligt följande formel: Förluster av trupper beräknas enligt följande formel:
                <ul>
                    <li>Hjälte= 1.5k</li>
                    <li>Kapten= 1k</li>
                    <li>Spjutmän, Bågskyttar = Truppnivå x 40</li>
                    <li>Specialister, Ryttare = Truppnivå x 80</li>
                    <li>Spioner= Truppnivå x 100</li>
                    <li>Griffiner= Truppnivå x 800</li>
                    <li>Katapulter, Murar Murnivå x 200</li>
                    <li>Monster III-VII (Monsternivå ⁃ 2) x1.3k</li>
                    <li>Monster I & II=x 8.64k</li>
                    <li>Legosoldatsvakt Truppnivå x120</li>
                    <li>Legosoldatmonster = Monsternivå x 3k</li>
                </ul>
            </li>
            <li>-FORTS -
                <ul>
                    <li>Spaning = 5 miljoner silver</li>
                    <li>Attacker utan att förstöra = 10 miljoner silver</li>
                    <li>Attacker och förstöring = 20 miljoner av varje Silver, Iron, Wood, Stone</li>
                </ul>
            </li>
            <li>- HUVUDSTÄDER -
                <ul>
                    <li>Spaning = 5 miljoner silver</li>
                    <li>Attacker utan att förstöra = 10 miljoner silver</li>
                    <li>Attacker och förstöring = 50 miljoner av varje Silver, Iron, Wood, Stone</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>5. SKATTER</h3>
        <ul class="roe-points">
            <li>Städer med mer än 3 dagars ackumulerade ingots kan attackeras av en medlem av den Kungliga Gardet efter 24 timmars varning. Guldtackor har inget personligt värde för dig, men Kungen kan använda dem för att aktivera bonusar för hela riket. Om vi har guldtackor kommer de att användas till fördel för K273.</li>
            <li>Maximalt antal guldtackor per stad:
                <ul>
                    <li>Stad 1-9: 2000 Ingots</li>
                    <li>Stad 10-19: 3000 Ingots</li>
                    <li>Stad 20-24: 10000 Ingots</li>
                    <li>Stad 25-29: 35000 Ingots</li>
                    <li>Stad 30-34: 60000 Ingots</li>
                    <li>Stad 35-39: 70000 Ingots</li>
                    <li>Stad 40+: 90000 Ingots</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h3>6. Medlemmar av det Ärade Riket</h3>
        <ul class="roe-points">
            <li>Varje spelare måste följa dessa regler för att vara skyddad av ROE. Spelare som inte skyddas är:
                <ul>
                    <li>FREDLÖSA</li>
                    <li>KLANSÖSA SPELARE</li>
                    <li>ICKE-ROE MEDLEMMAR</li>
                </ul>
            </li>
            <li>Fredlösa – Om individer eller klaner inte vill följa ROE, som attackerar klanbyggnader eller vägrar att betala kompensation för ROE-brott, får de fredlös status. Nuvarande fredlösa kan hittas på #K273/OUTLAWS. Den nuvarande listan över fredlösa kommer att rensas och starta om. Det betyder att det för närvarande inte finns några fredlösa i riket. Den nya Kungliga Gardet kommer att dela ansvar i rikets assistans.</li>
            <li>Kungliga Gardet: Den nya Kungliga Gardet består av många klaner och har mycket starka spelare som medlemmar. RG:s uppgifter kommer att fortsätta sina normala uppgifter som skatteuppbörd och genomdrivning för Palatset. Ytterligare uppgifter kommer nu att inkludera hjälp till klaner med fredlösa och riket med precision. De kommer också att agera som en elitarmé och patrull- och försvarsenhet för riket/territorium.</li>
            <li>Utöver att aktivera relationer med rikets större klaner för att hjälpa vid behov.</li>
            <li>Klanslösa spelare med 250k might eller mindre är skyddade och ska inte fritt attackeras.</li>
            <li>Klanslösa spelare under 250k might som blir attackerade får kräva 2x kompensationsbeloppet.</li>
            <li>Interaktioner med dessa spelare bör först handla om att lära känna dem och deras mål i spelet. Därefter uppmuntran att gå med i en klan. Främja tillväxt i spelet och spela för riket snarare än personlig belöning.</li>
        </ul>
    </li>
    <li>
        <h3>7. Clash of Thrones  CoT</h3>
        <ul class="roe-points">
            <li>Under, kan du spana och attackera städer under följande villkor:</li>
            <li>Inga klanfort-attacker: Attacker på en annan klans fort eller byggnader är strikt förbjudna.</li>
            <li>Portalhantering: Ingen might-begränsning gäller. Varje portal som är bevisat fientlig mot klanens territorier kan attackeras med snabb rättvisa av den attackerade klanen. Klanmarscher är helt tillåtna för att stänga fientliga portaler. Under normal fredstid får portaler inte attackeras vid någon tidpunkt om de inte är bevisat fientliga.</li>
            <li>Resurshantering: Håll resurser låga under eventet för att undvika stöld; skicka trupper till fort om det behövs. Praktisera No Value City (NVC)</li>
            <li>"Fair Play": Att attackera någon betydligt svagare (t.ex. under hälften av din might) anses ofta som dålig sportslighet och är inte tillåtet. Den enda instans där det är tillåtet är för en fientlig portal. Portaler som lämnas öppna av spelare som låter andra medlemmar attackera genom dem är fortfarande ansvariga för att lämna portalen öppen och kan attackeras oavsett deras might. En attackrapport måste tillhandahållas i alla krav som görs. Under hälften av din might är inte tillåtet. 50%-regeln gäller.</li>
        </ul>
    </li>
    <li>
        <h3>8. Konfliktlösningsprocess</h3>
        <ul class="roe-points">
            <li>När ROE bryts bör följande steg tas:
                <ol>
                    <li>Kontakta den andra spelaren för att försöka lösa. Om ingen lösning inom 24 timmar, eskalera till din klan-diplomat.</li>
                    <li>Om ingen lösning nås mellan klan-diplomater kan de ta ärendet till domstolen genom att posta det i #K273/CLAIMS. Endast klanledare eller diplomater får posta krav i denna chatt.</li>
                    <li>Domarna kommer att avgöra för att definiera den skyldiga parten (om någon) och ett acceptabelt kompensationsbelopp.</li>
                    <li>Om den skyldiga parten (eller deras klan) vägrar att kompensera, kommer den Kungliga Domstolen att avgöra om spelaren eller klanen ska förklaras fredlös och den Kungliga Gardet aktiveras i beredskap.</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>
        <h3>9. Rikets chattar att gå med i</h3>
        <ul class="roe-points">
            <li>#K273/ROE</li>
            <li>#K273/CLAIMS</li>
            <li>#K273/OUTLAWS</li>
            <li>~#K273/CPTHUNDERDOME</li>
            <li>~#K273tbxyz</li>
            <li>~#K273/ACADEMY</li>
        </ul>
    </li>
</ol>
`
        }

    };

    const getStoredLanguage = () => {
        try {
            return localStorage.getItem("tb-lang");
        } catch (error) {
            return null;
        }
    };

    const normalize = (lang) => (translations[lang] ? lang : "en");
    let current = normalize(getStoredLanguage() || "en");

    const t = (key) => {
        return translations[current]?.strings?.[key] ?? translations.en.strings[key] ?? "";
    };

    const setLanguage = (lang) => {
        current = normalize(lang);
        try {
            localStorage.setItem("tb-lang", current);
        } catch (error) {
            // ignore storage errors
        }
        document.documentElement.lang = current;
        return current;
    };

    const getLanguage = () => current;
    const getRoeHtml = () => translations[current]?.roeHtml ?? translations.en.roeHtml;

    window.I18N = {
        t,
        setLanguage,
        getLanguage,
        getRoeHtml,
        normalize
    };
})();
