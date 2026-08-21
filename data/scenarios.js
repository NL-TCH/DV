/**
 * GENERATED FILE — do not edit by hand.
 *
 * Built from "08-21-26_cyber_breaches.xlsx" (Prompt Output - BreachDatabase)
 * by tools/build-scenarios.ps1 on 2026-08-21 14:49.
 * Re-run that script after changing the workbook.
 *
 * Only rows carrying a DV-Type are exported. Text is English only, as
 * the workbook is; KDQ.i18n.tr() passes plain strings through in both
 * languages rather than inventing a translation.
 */
window.KDQ = window.KDQ || {};
KDQ.CONTENT = KDQ.CONTENT || {};
KDQ.CONTENT.scenarios =[
  {
    "id": "2898",
    "year": 2023,
    "name": "Russian FNS Wiper Attack (Ukrainian Defence Intelligence, 2023)",
    "breachType": "Destructive wiper attack",
    "resultKey": "execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Russian Federal Taxation Service (FNS)",
    "actor": "Ukrainian defence intelligence",
    "countries": [
      "Russia"
    ],
    "sectors": [
      "Corporate Targets",
      "State institutions / political system"
    ],
    "subSectors": [
      "Not available",
      "Civil service / administration"
    ],
    "primaryMarker": "M9",
    "secondaryMarkers": [
      "M8",
      "M7",
      "M4"
    ],
    "summary": "The Ukrainian Ministry of Defence announced on 12 December 2023 that cyber units within the Ukrainian defence intelligence services were behind a malware infection operation which led to the shutdown of central servers and 2,300 regional servers of the Russian Federal Taxation Service (FNS) for at least four days, as well as the infiltration of a Russian IT company that hosts FNS data, Office.ed-it.ru. The regional servers included systems in Russia, as well as in occupied Crimea, according to the Ministry of Defence.\nAccording to Ukraine's Ministry of Defence, the deployed malware caused the shutdown of all communications between the FNS central office and the regional offices, as well as those between the IT company servicing them, and Ukrainian sources claim that the configuration files, databases, and their backups within the IT company have all been \"destroyed,\" while Internet traffic of tax data was also accessed by Ukrainian defence intelligence.",
    "rationale": "From the FNS's perspective, its formal continuity doctrine as Russia's central revenue authority would presume resilient, redundant infrastructure across an 11-time-zone estate. The lifecycle evidence, as claimed by the attacking party, points to failures well beyond the entry point. Blast radius: one compromised central server reportedly led on to more than 2,300 regional servers across Russia and occupied Crimea, indicating a flat trust relationship between the centre and the regions rather than segmentation that would confine an intrusion. Third-party dependency: the same operation reached Office.ed-it.ru, the IT company operating the FNS data centre, so the agency and its outsourced data-centre provider fell together rather than one containing the other. Recovery: the decisive claim is that the primary database and its backup copies were destroyed in the same event, with configuration files eliminated -- i.e. backups were not isolated from the production estate they were meant to protect, which is the classic Strategy-to-Execution signature. Disclosure: the FNS made no public statement; the incident is known only through the attacker's own account, and Kommersant reported the FNS denying any operational impact. That denial is itself relevant to the lifecycle reading, but it is unverified in both directions.",
    "status": "Manual verified",
    "sources": [
      {
        "label": "gur.gov.ua",
        "url": "https://gur.gov.ua/en/content/zlam-federalnoi-podatkovoi-sluzhby-rf-detali-cherhovoi-kiberspetsoperatsii-hur.html"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/ukraine-intelligence-claims-attack-on-russia-tax-service"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/ukrainian-military-says-it-hacked-russias-federal-tax-agency/"
      },
      {
        "label": "cybernews.com",
        "url": "https://cybernews.com/cyber-war/ukraine-breached-russian-tax-service/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/155727/cyber-warfare-2/ukraine-hacked-russian-federal-taxation-service.html"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/ukraine-hack-wiped-2-petabytes-of-data-from-russian-research-center/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/ukraine-claims-it-hacked-russian-ministry-of-defense-servers/"
      }
    ],
    "notes": "MAJOR SOURCE CAVEAT: every substantive detail originates from the attacking party's own statement (Ukraine's GUR). The Record states the claims have not been independently verified; Russian state media stayed silent; and per Kommersant the FNS denied any impact on daily operations, calling GUR's account inaccurate. Confidence lowered from 4 to 3 on that basis: the lifecycle picture is coherent and consistently reported, but rests on a single interested source and is contradicted by the victim."
  },
  {
    "id": "3162",
    "year": 2024,
    "name": "Moobot EdgeRouter Botnet (APT28 / GRU Unit 26165, 2022-2024)",
    "breachType": "Edge-device compromise repurposed as espionage infrastructure",
    "resultKey": "execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Owners of internet-exposed Ubiquiti EdgeRouter SOHO devices (1,000+ routers); downstream, the government, military, security and corporate organisations whose credentials were harvested through them, including strategically targeted individuals in Ukraine",
    "actor": "Non-GRU cybercriminals (initial Moobot infection) and GRU Military Unit 26165 / APT28 (repurposing); disrupted by the FBI/DoJ",
    "countries": [
      "United States"
    ],
    "sectors": [
      "Unknown",
      "End user(s) / specially protected groups"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M1",
    "secondaryMarkers": [
      "M5",
      "M6",
      "M3",
      "M14",
      "M4"
    ],
    "summary": "The US Department of Justice (DoJ) and the Federal Bureau of Investigation (FBI) neutralised an APT-28-controlled botnet, Moobot, following a court authorization in January 2024. The botnet, which used small office/home office routers (SOHO) to commit crimes such as credential harvesting against security, corporate, and military targets deemed of interest to the Russian government, was infiltrated by the DoJ, which then copied and deleted stolen data from infected routers and further blocked remote access to the routers by APT28, which by US and Western government sources is considered to operate as part of the Russian military, specifically GRU Military Unit 26165. \nAccording to a spokesperson of the German Federal Ministry of the German security authorities supported the operation. The German Federal Office for Constitutional Protection revoked that the hacker group had also used the international infrastructure for attacks on German targets over the past two years with the goal of gaining information about Germany's political-strategic orientation in connection with Russia and support supplies of military goods for Ukraine.\nA TrendMicro report from 1 May 2024 described the continued use of the Moobot Botnet by Russian state hacker group APT28 beyond the law enforcement operation from January 2024, but also a parallel use by criminal groups.",
    "rationale": "The decisive victim-side condition is an ownership vacuum around edge infrastructure rather than any single technical mistake. Per the joint FBI/NSA/CyberCom advisory, EdgeRouters ship with publicly documented default credentials (ubnt/ubnt), with limited to no firewall protection by design so as to accommodate wireless ISPs, and they do not update firmware unless the owner configures it. The doctrinal assumption held by the people operating these devices -- that a router is an appliance somebody else keeps secure -- was therefore never matched by any material process for credential rotation or patching, and the party best placed to close the gap (the vendor, through secure defaults) had shipped the opposite. Access chain: criminals monetised the default credentials first, and the GRU then bought into that existing criminal foothold rather than building its own, so a consumer-grade hygiene failure became a state espionage platform. Detection and ownership: the compromise persisted from at least 2022 and was neither noticed nor remediable by the device owners; a court-authorised FBI operation had to reach into privately owned equipment, delete the files and reversibly change firewall rules on the owners' behalf. Persistence after remediation: Trend Micro found in May 2024 that the botnet remained in use by APT28 and at least two criminal groups, with 350+ compromised VPS addresses still active -- the takedown removed the symptom while the underlying insecure-by-default population remained, which is the whack-a-mole pattern in its purest form. Remediation guidance placed the burden (factory reset, firmware upgrade, credential change, firewall rules) precisely on the least-equipped owners.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "justice.gov",
        "url": "https://www.justice.gov/archives/opa/pr/justice-department-conducts-court-authorized-disruption-botnet-controlled-russian"
      },
      {
        "label": "media.defense.gov",
        "url": "https://media.defense.gov/2024/Feb/27/2003400753/-1/-1/0/CSA-Russian-Actors-Use-Routers-Facilitate-Cyber_Operations.PDF"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/fbi-disrupts-russian-moobot-botnet-infecting-ubiquiti-routers/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/162706/apt/moobot-botnet-is-still-active.html"
      },
      {
        "label": "forescout.com",
        "url": "https://www.forescout.com/blog/doj-moobot-botnet-commandeered-by-russian-apt28-analysis-of-attacks-against-routers-and-malware-samples/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/159197/cyber-crime/feds-dismantled-moobot-botnet.html"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/doj-fbi-disrupt-russian-intelligence-botnet/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/us-kicked-gru-out-of-routers-fbi"
      },
      {
        "label": "rferl.org",
        "url": "https://www.rferl.org/a/us-russia-intelligence-hacking/32821384.html"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/fbi-disrupts-moobot-botnet-used-by-russian-military-hackers/"
      },
      {
        "label": "justice.gov",
        "url": "https://www.justice.gov/opa/pr/justice-department-conducts-court-authorized-disruption-botnet-controlled-russian"
      },
      {
        "label": "rferl.org",
        "url": "https://www.rferl.org/a/germany-russia-spy-network/32823965.html"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/FBI-und-BKA-uebernehmen-russisches-Spionagenetz-aus-Routern-9631625.html?wt_mc=rss.red.ho.beitrag.rdf.beitrag.beitrag"
      },
      {
        "label": "sueddeutsche.de",
        "url": "https://www.sueddeutsche.de/politik/cyberspionage-hacker-russland-fbi-faeser-1.6369424"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/how-to-not-get-scammed-out-of-50000/"
      },
      {
        "label": "toscanacalcio.net",
        "url": "https://www.toscanacalcio.net/operazione-americana-le-autorita-hanno-chiuso-una-rete-di-spionaggio-russa/"
      },
      {
        "label": "faz.net",
        "url": "https://www.faz.net/aktuell/politik/inland/behoerden-russisches-spionagenetz-ausgeschaltet-router-uebernommen-19526870.html"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/159273/breaking-news/security-affairs-newsletter-round-459-by-pierluigi-paganini-international-edition.html"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/fbi-operation-seizes-infrastructure-of-lockbit-ransomware-group/"
      },
      {
        "label": "stadt-bremerhaven.de",
        "url": "https://stadt-bremerhaven.de/us-und-deutsche-sicherheitsbehoerden-hebeln-russisches-spionagenetz-aus/"
      },
      {
        "label": "techspot.com",
        "url": "https://www.techspot.com/news/101928-another-day-another-fbi-takedown-routers-infected-malware.html"
      },
      {
        "label": "techstory.in",
        "url": "https://techstory.in/fbi-unearths-alarming-router-infection-linked-to-russian-hackers/"
      },
      {
        "label": "news.mynavi.jp",
        "url": "https://news.mynavi.jp/techplus/article/20240220-2887025/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/russian-hackers-hijack-ubiquiti-routers-to-launch-stealthy-attacks/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/intel-agencies-issue-guidance-gru-russia-botnet"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/159691/breaking-news/russia-apt28-compromised-ubiquiti-edgerouters.html"
      },
      {
        "label": "arstechnica.com",
        "url": "https://arstechnica.com/security/2024/02/kremlin-backed-hackers-are-infecting-ubiquity-edgerouters-fbi-warns/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/fbi-director-christopher-wray-interview-click-here-podcast"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/159874/breaking-news/security-affairs-newsletter-round-461-by-pierluigi-paganini-international-edition.html"
      },
      {
        "label": "strategypage.com",
        "url": "https://www.strategypage.com/htmw/htecm/articles/20240302.aspx"
      },
      {
        "label": "trendmicro.com",
        "url": "https://www.trendmicro.com/en%5Fus/research/24/e/router-roulette.html"
      }
    ],
    "notes": "Unusual victim structure: the compromised asset owners and the ultimate espionage targets are different parties, and the analysis is written from the asset owners' side. Insecure-by-default shipping and the absence of auto-update are stated in the joint advisory itself, i.e. vendor-confirmed rather than inferred. Post-takedown persistence is from Trend Micro, May 2024."
  },
  {
    "id": "2937",
    "year": 2023,
    "name": "ALPHV/BlackCat Takedown (FBI, Dec 2023)",
    "breachType": "Law-enforcement infiltration (attacker infrastructure takedown)",
    "resultKey": "none",
    "confidence": "1/5 — Indicative — case is atypical for the framework",
    "victim": "ALPHV/BlackCat ransomware group (attacker infrastructure)",
    "actor": "FBI / US Department of Justice",
    "countries": [
      "Not available"
    ],
    "sectors": [
      "Social groups"
    ],
    "subSectors": [
      "Criminal"
    ],
    "primaryMarker": "M1",
    "secondaryMarkers": [
      "M6"
    ],
    "summary": "The FBI infiltrated the ALPHV/BlackCat ransomware group in an effort to disrupt the criminal collective's operations, the US Department of Justice revealed on 19 December 2023. An unsealed search warrant accompanying the press release detailed the FBI's engagement of a confidential human source, who applied for and was granted access to BlackCat tools as an affiliate. Through a separate search warrant, the FBI received access to an affiliate panel known to the source, allowing the authorities to develop a deeper understanding of the ransomware network's operations. Based on the search warrant published on 19 December, the FBI subsequently obtained 946 public and private key pairs for BlackCat's victim communication, leak sites, and affiliate panels through which the group manages its operations on the Tor network. The warrant did not disclose by which means the FBI developed this visibility into the ransomware group's network.  The Deputy Attorney General, Lisa O. Monaco, broadly summarised the law enforcement intervention as having \"hacked the hackers\". Among the seized keys, the FBI gained possession of the public and private key pair for BlackCat's main leak register. Law enforcement rerouted the associated Tor address to a splashpage declaring that the site had been seized. As both law enforcement and BlackCat share access to the keys, both have been competing for control over the leak site, with BlackCat seeking to reclaim ownership. \nThe FBI developed a decryption tool, which based on the information gleaned from the seized victim communication sites, was made available to 500 organisations affected by ALPHV/BlackCat ransomware saving the targets $68 million.",
    "rationale": "Law-enforcement infiltration of a ransomware group's own infrastructure, not a breach of a victim organisation, so the victim-side lifecycle the framework assesses does not exist here. Read against the group's own operations, the lifecycle is nonetheless instructive: BlackCat's doctrine was decentralisation through an affiliate model, while materially a single confidential human source admitted as an affiliate opened a path to 946 public/private key pairs spanning victim-communication sites, leak sites and affiliate panels -- key management was centralised in a way that contradicted the operating model. Containment failed symmetrically: because both parties then held the keys to the main leak register, the FBI and the group contested control of the same Tor address. The recovery side is the mirror image for the group's victims: 500 organisations obtained a decryptor and avoided about $68 million in ransom. Recorded as Unknown/atypical rather than forced onto an axis, consistent with the treatment of other attacker-infrastructure cases in this dataset.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "krebsonsecurity.com",
        "url": "https://krebsonsecurity.com/2023/12/blackcat-ransomware-raises-ante-after-fbi-disruption/"
      },
      {
        "label": "justice.gov",
        "url": "https://www.justice.gov/opa/pr/justice-department-disrupts-prolific-alphvblackcat-ransomware-variant"
      },
      {
        "label": "justice.gov",
        "url": "https://www.justice.gov/media/1329536/dl?inline"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/156124/breaking-news/alphv-blackcat-ransomware-group-seizure.html"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/alphv-blackcat-ransomware-doj-takedown/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/fbi-alphv-ransomware-raked-in-300-million-from-over-1-000-victims/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/fbi-seizes-alphv-leak-website-hours-later-ransomware-gang-claims-it-unseized-it/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/how-the-fbi-seized-blackcat-alphv-ransomwares-servers/"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/12/fbi-takes-down-blackcat-ransomware.html"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/fbi-warrant-reveals-confidential-source-helped-alphv-ransomware-takedown"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/fbi-disrupts-blackcat-ransomware-operation-creates-decryption-tool/"
      },
      {
        "label": "socradar.io",
        "url": "https://socradar.io/alphv-seized-unseized-decrypted-pandoras-box-may-be-reopened/"
      },
      {
        "label": "tarnkappe.info",
        "url": "https://tarnkappe.info/artikel/cyberangriff/ransomware-gang-alphv-mit-hilfe-der-thurgauer-polizei-gestoppt-285366.html"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Ransomware-Ermittlungsbehoerden-gelingt-Schlag-gegen-Blackcat-ALPHV-9579196.html?wt_mc=rss.red.ho.beitrag.rdf.beitrag.beitrag"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/most-dangerous-people-2023/"
      },
      {
        "label": "unit42.paloaltonetworks.com",
        "url": "https://unit42.paloaltonetworks.com/unit-42-ransomware-leak-site-data-analysis/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/neuberger-pace-of-ransomware-takedowns-is-not-enough"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/159273/breaking-news/security-affairs-newsletter-round-459-by-pierluigi-paganini-international-edition.html"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/lockbit-ransomware-returns-restores-servers-after-police-disruption/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/lockbit-comeback-less-than-a-week-after-major-disruption/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/alphv-website-ransomware-attack-change-healthcare/"
      },
      {
        "label": "it-daily.net",
        "url": "https://www.it-daily.net/it-sicherheit/cybercrime/ransomware-zahlungen-auf-rekordhoch"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/blackcat-ransomware-turns-off-servers-amid-claim-they-stole-22-million-ransom/"
      },
      {
        "label": "techrepublic.com",
        "url": "https://www.techrepublic.com/article/blackcat-ransomware-site-seized-in-international-takedown-effort/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/change-healthcare-brings-some-systems-online"
      },
      {
        "label": "fr.news.yahoo.com",
        "url": "https://fr.news.yahoo.com/gang-pirates-fait-croire-qu-083655279.html"
      },
      {
        "label": "cpomagazine.com",
        "url": "https://www.cpomagazine.com/cyber-security/under-increasing-federal-scrutiny-blackcat-ransomware-gang-pulls-exit-scam-on-its-way-out/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/s4x24-volt-typhoon-critical-infrastructure/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/the-week-in-ransomware-december-22nd-2023-blackcat-hacked/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/156356/breaking-news/security-affairs-newsletter-round-451-by-pierluigi-paganini-international-edition.html"
      },
      {
        "label": "research.checkpoint.com",
        "url": "https://research.checkpoint.com/2023/25th-december-threat-intelligence-report/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/fidelity-national-financial-subsidiary-breach-disclosure"
      },
      {
        "label": "trendmicro.com",
        "url": "https://www.trendmicro.com/vinfo/us/security/news/ransomware-by-the-numbers/rise-in-active-raas-groups-parallel-growing-victim-counts-ransomware-in-2h-2023"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/cybercrime-organization-stole-customer-data-sec-marinemax"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/ohio-lottery-hit-by-cyberattack-claimed-by-dragonforce-ransomware/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/extortion-group-threatens-to-sell-change-healthcare-data/"
      },
      {
        "label": "surnoticias.com",
        "url": "https://surnoticias.com/index.php/279-ransomware/9534-ataques-ciberneticos-causado-por-ransomware"
      },
      {
        "label": "quointelligence.eu",
        "url": "https://quointelligence.eu/2024/06/analyzing-shift-in-ransomware-dynamics/"
      }
    ],
    "notes": "Attacker-infrastructure case: no victim organisation with governance structures to assess, so DV-Type stays Unknown. Retained because the group's own doctrine-to-execution mismatch is a useful illustration that the construct is symmetric. Details from the unsealed search warrant and DoJ press release of 19 December 2023."
  },
  {
    "id": "3184",
    "year": 2021,
    "name": "LockBit Takedown (Operation Cronos, Feb 2024)",
    "breachType": "Law-enforcement takedown (Operation Cronos)",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "LockBit ransomware operation's own infrastructure (34 servers, leak site and mirrors, affiliate panel, StealBit exfiltration platform)",
    "actor": "NCA/FBI/Europol",
    "countries": [
      "Russia"
    ],
    "sectors": [
      "Social groups"
    ],
    "subSectors": [
      "Criminal"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [
      "M8",
      "M1"
    ],
    "summary": "UK, US and other law enforcement agencies seized the public websites and servers of the LockBit ransomware group beginning in 2021, the US Department of Justice and the Federal Bureau of Investigation (FBI) as well as the UK National Crime Agency (NCA) and the National Cyber Security Center (NCSC) announced on 20 February 2024.\nIn addition to the aforementioned authorities, the NCA South West Regional Organised Crime Unit; France’s Gendarmerie Nationale Cyberspace Command; Germany’s Landeskriminalamt Schleswig-Holstein and the Bundeskriminalamt; Switzerland’s Federal Office of Police, Public Prosecutor’s Office of the Canton of Zurich, and Zurich Cantonal Police; Japan’s National Policy Agency; Australian Federal Police; Sweden’s Polismyndighetens; Royal Canadian Mounted Police; Politie Dienst Regionale Recherche Oost-Brabant of the Netherlands; Finland’s Poliisi; Europol; and Eurojust also took part in the intervention called Operation Cronos.\nOperation Cronos included the takeover of LockBit's public websites, where they published their ransomware attacks and subsequent ransom demands; and the takeover of the LockBit ransomware group's administrative environment, from which they controlled the ransomware attacks; the arrest of two LockBit actors in Poland and Ukraine, as well as the disruption of multiple US servers used by LockBit's administrators to host the StealBit platform to organise and collect stolen data. In total, security authorities seized 34 servers hosting the data leak website and its mirrors, data stolen from the victims, cryptocurrency addresses, 1000 decryption keys, and the affiliate panel.\nOn the same day, the Office of Foreign Assets Control (OFAC) sanctioned Ivan Gennadievich Kondratiev, a Russian citizen and leader of LockBit's affiliate National Hazard Society, as well as another Russian citizen, Artur Sungatov. In addition, the US District Court in New Jersey indicted Ivan Gennadievich Kondratiev (also known as \"Bassterlord\" or \"Fisheye\") and Artur Sungatov for conspiracy to commit fraud and related activity in connection with computers, conspiracy to commit wire fraud as well as computer fraud and abuse.\nThe US department of state offers a reward of up to $15 million for information that could lead to the identification or location of Lockbit members and affiliates, as published in a press statement on 21 February 2024. \nIn a statement on 24 February 2024, LockBit shares detailed information about the breach of their servers. According to this timeline, the first penetration testing occuredat 6:36 UTC resulting in a 502 Bad Gateway error. 20:47 the site gave an 404 Not Found nginx error, the server was not able to accessed and information was erased. LockBit suspects that the authorities gained access through CVE-2023-3824 to two main servers, which had installed the PHP 8.1.2 version known for that vulnerability. LockBit implicates the reason behind the attack by the authorities lies in the menaced leak information from https://fultoncountyga.gov/. As confirmed on 24 February 2024, LockBit has undertaken efforts to relaunch their operation on a new infrastructure, which is now running the latest version of PHP 8.3.3. LockBit offers a reward for anyone informing them about new CVEs while threatening to increase their attacks on government sectors. According to Bleeping Computer, the statement appears to be an attempt at damage control and restoring their credibility.",
    "rationale": "Attacker-side case, read from the perspective of the organisation that was penetrated. LockBit ran a large, well-resourced criminal enterprise whose entire business depended on the availability and secrecy of its own infrastructure, yet per its own post-incident statement the two main servers ran PHP 8.1.2, vulnerable to the publicly disclosed CVE-2023-3824 for which a patch had long been available. Blast radius: that single unpatched software version fronted the leak site, the affiliate panel and the StealBit platform together, so one flaw exposed the whole estate; law enforcement seized 34 servers, 1,000 decryption keys, cryptocurrency addresses and the affiliate panel in one operation. Recovery and disclosure: the group rebuilt on new infrastructure running PHP 8.3.3 and published a timeline and a bug bounty for new CVEs -- remediation only after compromise, and framed by Bleeping Computer as credibility management. The irony is analytically useful for the thesis: LockBit fell to exactly the patch-management failure it exploited in thousands of victims.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "fox5atlanta.com",
        "url": "https://www.fox5atlanta.com/news/law-enforcement-disrupts-lockbit-ransomware-group-believed-to-be-behind-fulton-county-attack"
      },
      {
        "label": "euronews.com",
        "url": "https://www.euronews.com/2024/02/20/most-harmful-hacker-network-lockbit-disrupted-by-global-police-operation"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/159388/cyber-crime/operation-cronos-against-lockbit.html"
      },
      {
        "label": "arstechnica.com",
        "url": "https://arstechnica.com/security/2024/02/after-years-of-losing-its-finally-feds-turn-to-troll-ransomware-group/"
      },
      {
        "label": "nationalcrimeagency.gov.uk",
        "url": "https://www.nationalcrimeagency.gov.uk/news/nca-leads-international-investigation-targeting-worlds-most-harmful-ransomware-group"
      },
      {
        "label": "ncsc.gov.uk",
        "url": "https://www.ncsc.gov.uk/news/ncsc-statement-on-law-enforcement-disruption-of-lockbit-ransomware-operation"
      },
      {
        "label": "channelnewsasia.com",
        "url": "https://www.channelnewsasia.com/world/international-operation-uk-us-agencies-smashes-most-harmful-cyber-crime-group-lockbit-4136476"
      },
      {
        "label": "home.treasury.gov",
        "url": "https://home.treasury.gov/news/press-releases/jy2114"
      },
      {
        "label": "techrepublic.com",
        "url": "https://www.techrepublic.com/article/fbi-shut-down-lockbit-ransomware-group/"
      },
      {
        "label": "fbi.gov",
        "url": "https://www.fbi.gov/news/speeches/fbi-cyber-deputy-assistant-director-brett-leathermans-remarks-at-press-conference-announcing-the-disruption-of-the-lockbit-ransomware-group"
      },
      {
        "label": "malwarebytes.com",
        "url": "https://www.malwarebytes.com/blog/business/2024/02/law-enforcement-trolls-lockbit-reveals-massive-takedown"
      },
      {
        "label": "justice.gov",
        "url": "https://www.justice.gov/opa/pr/us-and-uk-disrupt-lockbit-ransomware-variant"
      },
      {
        "label": "rferl.org",
        "url": "https://www.rferl.org/a/lockbit-ransomware-group-disrupted-russia/32827997.html"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/lockbit-ransomware-indictments-us-doj-bassterlord"
      },
      {
        "label": "hardwareluxx.de",
        "url": "https://www.hardwareluxx.de/index.php/news/allgemein/netzpolitik/62993-mg-cyberkriminalitaet-hackergruppe-lockbit-zerschlagen.html"
      },
      {
        "label": "teletrader.com",
        "url": "https://www.teletrader.com/us-sanctions-two-lockbit-affiliates/news/details/61525851"
      },
      {
        "label": "krebsonsecurity.com",
        "url": "https://krebsonsecurity.com/2024/02/feds-seize-lockbit-ransomware-websites-offer-decryption-tools-troll-affiliates/"
      },
      {
        "label": "patronlardunyasi.com",
        "url": "https://www.patronlardunyasi.com/haber/abd-den-rusya-merkezli-fidye-yazilimi-grubuyla-iliskili-2-kisiye-yaptirim/306970"
      },
      {
        "label": "sondakika.com",
        "url": "https://www.sondakika.com/ekonomi/haber-abd-lockbit-fidye-yazilimi-saldirilarindan-sorumlu-16872352/"
      },
      {
        "label": "haberler.com",
        "url": "https://www.haberler.com/ekonomi/abd-lockbit-fidye-yazilimi-saldirilarindan-sorumlu-iki-kisiyi-yaptirim-kapsamina-aldi-16872351-haberi/"
      },
      {
        "label": "justice.gov",
        "url": "https://www.justice.gov/opa/media/1338956/dl?inline"
      },
      {
        "label": "actu.fr",
        "url": "https://actu.fr/sciences-technologie/lockbit-le-groupe-de-hackers-le-plus-nuisible-au-monde-demantele_60724138.html"
      },
      {
        "label": "courrierinternational.com",
        "url": "https://www.courrierinternational.com/article/cybercriminalite-les-hackeurs-de-lockbit-neutralises-par-une-vaste-operation-policiere-internationale"
      },
      {
        "label": "finance.yahoo.com",
        "url": "https://finance.yahoo.com/news/authorities-down-hackers-targeted-manufacturers-164746995.html"
      },
      {
        "label": "ndr.de",
        "url": "https://www.ndr.de/nachrichten/schleswig-holstein/wellenord/Internationales-Hacker-Netzwerk-zerschlagen-Auch-LKA-SH-dabei,lockbit100.html"
      },
      {
        "label": "news.mydrivers.com",
        "url": "https://news.mydrivers.com/1/964/964396.htm"
      },
      {
        "label": "techprincess.it",
        "url": "https://techprincess.it/polizie-internazionali-sito-hacker-lockbit/"
      },
      {
        "label": "rtl.fr",
        "url": "https://www.rtl.fr/actu/sciences-tech/lockbit-demantele-ce-que-l-on-sait-de-l-operation-contre-le-groupe-de-hackers-le-plus-nuisible-au-monde-7900354959"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/lockbit-ransomware-gang-shutdown-cybercrime-intelligence-captured"
      },
      {
        "label": "freemalaysiatoday.com",
        "url": "https://www.freemalaysiatoday.com/category/world/2024/02/20/international-operation-smashes-worlds-most-harmful-cyber-crime-group/"
      },
      {
        "label": "euroweeklynews.com",
        "url": "https://euroweeklynews.com/2024/02/20/worlds-most-prolific-cyber-crime-group-dismantled/"
      },
      {
        "label": "diariolasamericas.com",
        "url": "https://www.diariolasamericas.com/eeuu/desmantelan-grupo-hackers-lockbit-que-realizo-cientos-ataques-eeuu-n5351849"
      },
      {
        "label": "haber3.com",
        "url": "https://www.haber3.com/dunya/dunyanin-en-buyuk-siber-suc-orgutu-cokertildi-haberi-6171511"
      },
      {
        "label": "arstechnica.com",
        "url": "https://arstechnica.com/information-technology/2024/02/lockbit-ransomware-group-taken-down-in-multinational-operation/"
      },
      {
        "label": "dailymail.co.uk",
        "url": "https://www.dailymail.co.uk/news/article-13104371/ransomware-gang-lockbit-shut-nca-fbi.html"
      },
      {
        "label": "silicon.de",
        "url": "https://www.silicon.de/41712054/lockbit-wirklich-endgueltig-zerschlagen"
      },
      {
        "label": "taz.de",
        "url": "https://taz.de/Lockbit-zerschlagen/!5993744/"
      },
      {
        "label": "channelobserver.de",
        "url": "https://channelobserver.de/produkte/lockbit-ermittler-zerschlagen-ransomware-hackergruppe-37561/"
      },
      {
        "label": "video.lefigaro.fr",
        "url": "https://video.lefigaro.fr/figaro/video/cyberattaques-le-groupe-de-hackers-lockbit-vise-par-une-operation-de-police-internationale/"
      },
      {
        "label": "theguardian.com",
        "url": "https://www.theguardian.com/technology/2024/feb/20/uk-and-fbi-lock-cybercrime-group-out-of-lockbit-website"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Ransomware-Lockbit-durch-Ermittler-zerschlagen-zwei-Festnahmen-9633327.html?wt_mc=rss.red.ho.beitrag.rdf.beitrag.beitrag"
      },
      {
        "label": "wiwo.de",
        "url": "https://www.wiwo.de/technologie/digitale-welt/lockbit-ermittler-legen-eine-der-gefaehrlichsten-hackergruppe-lahm/29663996.html"
      },
      {
        "label": "thepeninsulaqatar.com",
        "url": "https://thepeninsulaqatar.com/article/20/02/2024/hacked-the-hackers-international-operation-smashes-most-harmful-cyber-crime-group"
      },
      {
        "label": "sudouest.fr",
        "url": "https://www.sudouest.fr/faits-divers/cyberattaque-lockbit-le-groupe-de-hackers-russes-le-plus-nuisible-au-monde-a-ete-demantele-18654645.php"
      },
      {
        "label": "bbc.co.uk",
        "url": "https://www.bbc.co.uk/news/technology-68344987"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/police-arrest-lockbit-ransomware-members-release-decryptor-in-global-crackdown/"
      },
      {
        "label": "lavoixdunord.fr",
        "url": "https://www.lavoixdunord.fr/1432475/article/2024-02-20/lockbit-auteur-de-la-cyberattaque-de-l-hopital-d-armentieres-vise-par-une"
      },
      {
        "label": "ultimahora.com",
        "url": "https://www.ultimahora.com/una-operacion-de-10-paises-contra-la-red-de-chantajes-mas-grande-del-mundo"
      },
      {
        "label": "giornalettismo.com",
        "url": "https://www.giornalettismo.com/lockbit-chi-sono-come-agiscono/"
      },
      {
        "label": "t3n.de",
        "url": "https://t3n.de/news/schlag-gegen-lockbit-hacker-fbi-europol-1608784/"
      },
      {
        "label": "netzwoche.ch",
        "url": "https://www.netzwoche.ch/news/2024-02-20/strafverfolger-uebernehmen-darknet-praesenz-der-ransomware-gruppe-lockbit"
      },
      {
        "label": "zeit.de",
        "url": "https://www.zeit.de/news/2024-02/20/internationale-ermittler-zerschlagen-ransomware-hackergruppe"
      },
      {
        "label": "sueddeutsche.de",
        "url": "https://www.sueddeutsche.de/wirtschaft/internet-internationale-ermittler-zerschlagen-ransomware-hackergruppe-dpa.urn-newsml-dpa-com-20090101-240220-99-54212"
      },
      {
        "label": "faz.net",
        "url": "https://www.faz.net/agenturmeldungen/dpa/internationale-ermittler-zerschlagen-ransomware-hackergruppe-19532134.html"
      },
      {
        "label": "tarnkappe.info",
        "url": "https://tarnkappe.info/artikel/it-sicherheit/fbi-beschlagnahmt-lockbit-infrastruktur-289468.html"
      },
      {
        "label": "huffingtonpost.it",
        "url": "https://www.huffingtonpost.it/tecnologia/2024/02/20/news/lockbit_hacker_operazione_polizia_ransomware-422168334/"
      },
      {
        "label": "sg.news.yahoo.com",
        "url": "https://sg.news.yahoo.com/hacker-groups-taken-over-law-015500961.html"
      },
      {
        "label": "rnd.de",
        "url": "https://www.rnd.de/wirtschaft/lockbit-internationale-ermittler-legen-hacker-gruppe-lahm-GBZ2DLH2GVOSFOZV6D7PEC3RUQ.html"
      },
      {
        "label": "malwarebytes.com",
        "url": "https://www.malwarebytes.com/blog/cybercrime/2024/02/lockbit-the-worlds-worst-ransomware-is-down"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/159360/cyber-crime/operation-cronos-disrupted-lockbit-operation.html"
      },
      {
        "label": "new.qq.com",
        "url": "https://new.qq.com/rain/a/20240220A08FYV00"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/159454/cyber-crime/lockbit-members-reward.html"
      },
      {
        "label": "security-insider.de",
        "url": "https://www.security-insider.de/zerschlagung-weltweit-schaedlichste-cyberkriminalitaetsgruppe-lockbit-a-f8610b09691beaefb5ca12ebd9a76efc/"
      },
      {
        "label": "zdnet.fr",
        "url": "https://www.zdnet.fr/actualites/le-gang-lockbit-touche-par-cronos-spectaculaire-operation-policiere-internationale-39964374.htm"
      },
      {
        "label": "gazeteduvar.com.tr",
        "url": "https://www.gazeteduvar.com.tr/rus-fidye-yazilim-grubu-lockbite-uluslararasi-operasyon-hackerlari-hackledik-haber-1671128"
      },
      {
        "label": "cadenaser.com",
        "url": "https://cadenaser.com/baleares/2024/02/21/una-operacion-policial-internacional-jaquea-los-servicios-del-grupo-responsable-del-ciberataque-a-sant-antoni-radio-ibiza/"
      },
      {
        "label": "cope.es",
        "url": "https://www.cope.es/emisoras/andalucia/sevilla-provincia/sevilla/noticias/asi-caido-grupo-piratas-informaticos-lockbitt-responsables-del-ciberataque-ayuntamiento-20240221_3156980"
      },
      {
        "label": "ladepeche.fr",
        "url": "https://www.ladepeche.fr/2024/02/21/nous-avons-hacke-les-hackers-pourquoi-le-demantelement-du-groupe-cybercriminel-lockbit-est-un-coup-dur-pour-les-pirates-du-web-11778486.php"
      },
      {
        "label": "telecinco.es",
        "url": "https://www.telecinco.es/noticias/ciencia-y-tecnologia/20240221/desmantelado-lockbit-hackers-ciberataque-ayuntamiento-sevilla_18_011764528.html"
      },
      {
        "label": "cronicabalear.es",
        "url": "https://www.cronicabalear.es/2024/cae-el-grupo-de-hackers-que-ataco-al-ayuntamiento-de-calvia-y-de-sant-antoni/"
      },
      {
        "label": "inside-it.ch",
        "url": "https://www.inside-it.ch/wir-legen-den-schwerpunkt-auf-die-stoerung-der-bedrohununsakteure-20240221"
      },
      {
        "label": "diariodesevilla.es",
        "url": "https://www.diariodesevilla.es/sevilla/Cae-piratas-informaticos-hackeo-Ayuntamiento-Sevilla_0_1877812744.html"
      },
      {
        "label": "derstandard.at",
        "url": "https://www.derstandard.at/story/3000000208397/hackergruppe-lockbit-war-wohl-auch-in-oesterreich-aktiv"
      },
      {
        "label": "lavoixdunord.fr",
        "url": "https://www.lavoixdunord.fr/1432862/article/2024-02-21/cyberattaque-de-l-hopital-d-armentieres-ou-en-est-dix-jours-plus-tard"
      },
      {
        "label": "diariodemallorca.es",
        "url": "https://www.diariodemallorca.es/part-forana/2024/02/21/cae-grupo-hackers-ataco-ayuntamiento-98452468.html"
      },
      {
        "label": "actu.fr",
        "url": "https://actu.fr/societe/lockbit-ce-groupe-de-hackers-a-vole-des-donnees-de-98-des-grandes-entreprises-francaises_60727242.html"
      },
      {
        "label": "diariodeibiza.es",
        "url": "https://www.diariodeibiza.es/ibiza/2024/02/21/hackers-sant-antoni-cercados-operacion-98464175.html"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/lockbit-affiliates-arrested-in-ukraine-poland"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/us-offers-15-million-bounty-for-info-on-lockbit-ransomware-gang/"
      },
      {
        "label": "noudiari.es",
        "url": "https://www.noudiari.es/local-ibiza/desmantelado-el-grupo-responsable-del-ciberataque-al-ayuntamiento-de-sant-antoni/"
      },
      {
        "label": "kelo.com",
        "url": "https://kelo.com/2024/02/21/ukraine-arrests-father-son-duo-in-lockbit-cybercrime-bust/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/russia-arrests-sugarlocker-ransomware-members"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/screenconnect-servers-hacked-in-lockbit-ransomware-attacks/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/lockbit-ransomware-secretly-building-next-gen-encryptor-before-takedown/"
      },
      {
        "label": "badische-zeitung.de",
        "url": "https://www.badische-zeitung.de/ermittler-zerschlagen-internationale-hackergruppe"
      },
      {
        "label": "wirtschaft.com",
        "url": "https://wirtschaft.com/russischsprachiges-lockbit-schaedlichstes-hacker-netzwerk-der-welt-zerschlagen/"
      },
      {
        "label": "dailymail.co.uk",
        "url": "https://www.dailymail.co.uk/news/article-13103367/lockbit-ransomware-hackers-seized-nca-fbi.html"
      },
      {
        "label": "trendmicro.com",
        "url": "https://www.trendmicro.com/vinfo/us/security/news/ransomware-spotlight/ransomware-spotlight-lockbit"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Zwischen-Selbstkritik-und-Trotz-LockBit-rechtfertigt-cyberkriminelle-Handlungen-9638063.html?wt_mc=rss.red.security.security"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Zwischen-Selbstkritik-und-Trotz-LockBit-rechtfertigt-cyberkriminelle-Handlungen-9638063.html?wt_mc=rss.red.ho.beitrag.rdf.beitrag.beitrag"
      },
      {
        "label": "it-daily.net",
        "url": "https://www.it-daily.net/shortnews/was-bedeutet-die-lockbit-zerschlagung-fuer-die-bedrohungslandschaft"
      },
      {
        "label": "varesenews.it",
        "url": "https://www.varesenews.it/2024/02/scacco-matto-alla-piu-grande-gang-di-attacchi-informatici/1855104/"
      },
      {
        "label": "lesoleil.com",
        "url": "https://www.lesoleil.com/jeunesse/les-as-de-l-info/2024/02/23/qui-sont-les-puissants-cyberpirates-de-lockbit-arretes-CRG3V6TPZ5CEPIR7LU67D5CYMY/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/lockbit-ransomware-gang-has-over-110-million-in-unspent-bitcoin/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/lockbit-administrator-engaging-with-police"
      },
      {
        "label": "industrie.de",
        "url": "https://industrie.de/cybersecurity/was-die-lockbit-zerschlagung-fuer-die-bedrohungslandschaft-bedeutet/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/lockbit-ransomware-returns-restores-servers-after-police-disruption/"
      },
      {
        "label": "samples.vx-underground.org",
        "url": "https://samples.vx-underground.org/tmp/Lockbit_Statement_2024-02-24.txt"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/lockbit-takedown-messaging-campaign/"
      },
      {
        "label": "theguardian.com",
        "url": "https://www.theguardian.com/technology/2024/feb/26/russian-based-lockbit-ransomware-hackers-attempt-comeback"
      },
      {
        "label": "phonandroid.com",
        "url": "https://www.phonandroid.com/lockbit-nest-pas-mort-le-plus-celebre-groupe-de-pirates-prepare-deja-son-retour.html"
      },
      {
        "label": "roubaix.maville.com",
        "url": "https://roubaix.maville.com/actu/actudet_-des-fichiers-diffuses-sement-le-doute-sont-ils-issus-du-piratage-de-l-hopital-d-armentieres-_fil-6175925_actu.Htm"
      },
      {
        "label": "bluewin.ch",
        "url": "https://www.bluewin.ch/de/digital/vermeintlich-zerschlagene-hackergruppe-lockbit-meldet-sich-zurueck-2100784.html"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/159584/cyber-crime/lockbit-gang-resumed-raas.html"
      },
      {
        "label": "krebsonsecurity.com",
        "url": "https://krebsonsecurity.com/2024/02/fbis-lockbit-takedown-postponed-a-ticking-time-bomb-in-fulton-county-ga/"
      },
      {
        "label": "new.qq.com",
        "url": "https://new.qq.com/rain/a/20240226A04P5400"
      },
      {
        "label": "research.checkpoint.com",
        "url": "https://research.checkpoint.com/2024/26th-february-threat-intelligence-report/"
      },
      {
        "label": "datensicherheit.de",
        "url": "https://www.datensicherheit.de/lockbit-disruption-strafverfolgungsbehoerden-nutzung-trend-micro-expertise"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/lockbit-relaunch-attempt-follwing-takedown"
      },
      {
        "label": "malwarebytes.com",
        "url": "https://www.malwarebytes.com/blog/news/2024/02/a-week-in-security-february-19-february-25-2"
      },
      {
        "label": "inside-it.ch",
        "url": "https://www.inside-it.ch/lockbit-ist-zurueck-20240226"
      },
      {
        "label": "computerworld.dk",
        "url": "https://www.computerworld.dk/art/286324/lockbit-er-tilbage-har-genskabt-servere-under-en-uge-efter-politiet-lukkede-dem-ned"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/lockbit-comeback-less-than-a-week-after-major-disruption/"
      },
      {
        "label": "freiburger-nachrichten.ch",
        "url": "https://www.freiburger-nachrichten.ch/digitale-erpressungen-nehmen-zu-ermittler-haben-es-schwer/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/159555/breaking-news/security-affairs-newsletter-round-460-by-pierluigi-paganini-international-edition.html"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/lockbit-ransomware-returns-to-attacks-with-new-encryptors-servers/"
      },
      {
        "label": "finance.ifeng.com",
        "url": "https://finance.ifeng.com/c/8XVotVAS6ix"
      },
      {
        "label": "dailymail.co.uk",
        "url": "https://www.dailymail.co.uk/news/article-13129041/Russian-linked-cyber-gang-attacks-Royal-Mail-Porton-ONLINE-just-week-Britains-FBI-celebrated-taking-down.html"
      },
      {
        "label": "it-daily.net",
        "url": "https://www.it-daily.net/it-sicherheit/cybercrime/ransomware-lockbit-kehrt-zurueck-und-greift-krankenhaeuser-an"
      },
      {
        "label": "it-daily.net",
        "url": "https://www.it-daily.net/it-sicherheit/cybercrime/lockbit-ransomware-meldet-sich-zurueck"
      },
      {
        "label": "zdnet.fr",
        "url": "https://www.zdnet.fr/actualites/lockbit-est-de-retour-mais-sur-tois-pattes-39964494.htm"
      },
      {
        "label": "krebsonsecurity.com",
        "url": "https://krebsonsecurity.com/2024/02/fulton-county-security-experts-call-lockbits-bluff/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/159757/cyber-crime/lockbit-gang-resuming-operation.html"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/lockbit-fulton-county-georgia-trump-ransomware-leak/"
      },
      {
        "label": "finance.yahoo.com",
        "url": "https://finance.yahoo.com/news/cyber-attacks-constant-threat-tech-172051189.html?fr=sycsrp_catchall"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/push-notification-privacy-security-roundup/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/the-week-in-ransomware-march-1st-2024-healthcare-under-siege/"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/LockBit-Drohung-mit-Leak-zu-Verfahren-gegen-Donald-Trump-wohl-nur-ein-Bluff-9643336.html?wt_mc=rss.red.ho.beitrag.rdf.beitrag.beitrag"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/fulton-county-services-restored-rolling"
      },
      {
        "label": "research.checkpoint.com",
        "url": "https://research.checkpoint.com/2024/4th-march-threat-intelligence-report/"
      },
      {
        "label": "eng.obozrevatel.com",
        "url": "https://eng.obozrevatel.com/section-war/news-diu-cyber-specialists-hacked-into-the-servers-of-the-russian-ministry-of-defense-and-seized-an-array-of-classified-documents-04-03-2024.html"
      },
      {
        "label": "andaluciainformacion.es",
        "url": "https://andaluciainformacion.es/sevilla/1580323/juan-bueno-sobre-el-psoe-y-los-presupuestos-no-habia-ni-una-cifra/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/europol-doj-nca-deny-involvement-in-alphv-blackcat-ransomware-takedown"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/160054/cyber-crime/lockbit-3-0s-comeback-torrent-based-p2p-data-leakage.html"
      },
      {
        "label": "tarnkappe.info",
        "url": "https://tarnkappe.info/artikel/it-sicherheit/alphv-blackcat-exit-scam-ein-abgang-mit-betrug-und-chaos-290226.html"
      },
      {
        "label": "lefigaro.fr",
        "url": "https://www.lefigaro.fr/social/cyberattaque-a-l-hopital-d-armentieres-300-000-patients-concernes-par-le-vol-de-donnees-20240228"
      },
      {
        "label": "state.gov",
        "url": "https://www.state.gov/reward-offers-for-information-on-lockbit-leaders-and-designating-affiliates/"
      },
      {
        "label": "malwarebytes.com",
        "url": "https://www.malwarebytes.com/blog/threat-intelligence/2024/03/ransomware-review-march-2024"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/lockbit-administrator-mikhail-vasiliev-sentenced-canada"
      },
      {
        "label": "theguardian.com",
        "url": "https://www.theguardian.com/technology/2024/mar/12/ransomware-groups-warned-there-is-no-money-in-attacking-british-state"
      },
      {
        "label": "theguardian.com",
        "url": "https://www.theguardian.com/technology/2024/mar/17/british-library-did-the-right-thing-by-not-paying-cybercriminals"
      },
      {
        "label": "arstechnica.com",
        "url": "https://arstechnica.com/security/2024/03/member-of-lockbit-ransomware-group-sentenced-to-4-years-in-prison/"
      },
      {
        "label": "tarnkappe.info",
        "url": "https://tarnkappe.info/artikel/it-sicherheit/malware/lockbit-mitglied-verurteilt-vier-jahre-haft-fuer-bandenmitglied-290602.html"
      },
      {
        "label": "finance.yahoo.com",
        "url": "https://finance.yahoo.com/news/hackers-roil-entire-industries-attacks-100000390.html"
      },
      {
        "label": "asahi.com",
        "url": "https://www.asahi.com/articles/ASS2W6S4NS2TULZU00G.html"
      },
      {
        "label": "trendmicro.com",
        "url": "https://www.trendmicro.com/vinfo/us/security/news/ransomware-by-the-numbers/rise-in-active-raas-groups-parallel-growing-victim-counts-ransomware-in-2h-2023"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/cybercrime-organization-stole-customer-data-sec-marinemax"
      },
      {
        "label": "datanet.co.kr",
        "url": "https://www.datanet.co.kr/news/articleView.html?idxno=192269"
      },
      {
        "label": "ejanews.co.kr",
        "url": "https://www.ejanews.co.kr/news/articleView.html?idxno=322146"
      },
      {
        "label": "silicon.de",
        "url": "https://www.silicon.de/41713065/malware-im-maerz-remcos-loest-cloudeye-ab"
      },
      {
        "label": "cybersecasia.net",
        "url": "https://cybersecasia.net/news/the-lockbit-group-may-have-been-busted-but-its-code-lives-on/"
      },
      {
        "label": "solutions-numeriques.com",
        "url": "https://www.solutions-numeriques.com/lockbit-revient-sur-le-devant-de-la-scene-malgre-les-coups-portes-par-la-police/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/162778/cyber-crime/law-enforcement-seized-lockbit-site-again.html"
      },
      {
        "label": "lemagit.fr",
        "url": "https://www.lemagit.fr/actualites/366583573/Ransomware-nouvelle-bataille-de-communication-entre-LockBit-et-les-autorites"
      },
      {
        "label": "govinfosecurity.com",
        "url": "https://www.govinfosecurity.com/operation-cronos-again-threatens-to-reveal-lockbitsupp-a-25127"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Lockbit-Darknet-Seite-erneut-von-Strafverfolgern-uebernommen-9708860.html?wt_mc=rss.red.ho.beitrag.rdf.beitrag.beitrag"
      },
      {
        "label": "hackread.com",
        "url": "https://www.hackread.com/lockbit-ransomware-leader-dmitry-yuryevich-khoroshev/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/us-uk-authorities-unmask-russian-national-as-lockbit-administrator/"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/lockbitsupp-lockbit-ransomware/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/lockbit-ransomware-admin-identified-sanctioned-in-us-uk-australia/"
      },
      {
        "label": "inside-it.ch",
        "url": "https://www.inside-it.ch/ist-das-der-kopf-hinter-lockbit-30-20240507"
      },
      {
        "label": "sudouest.fr",
        "url": "https://www.sudouest.fr/economie/cybersecurite/cyberattaque-qui-est-dmitri-khoroshev-le-patron-russe-du-groupe-de-hackers-russes-lockbit-19639429.php"
      },
      {
        "label": "zdnet.de",
        "url": "https://www.zdnet.de/88415823/ermittlern-gelingt-weiterer-schlag-gegen-ransomware-gruppe-lockbit/"
      },
      {
        "label": "itmagazine.ch",
        "url": "https://www.itmagazine.ch/artikel/82170/Chef_der_Ransomware-Gruppe_Lockbit_identifiziert_.html"
      },
      {
        "label": "ibarakinews.jp",
        "url": "https://ibarakinews.jp/news/newsdetail.php?f_jun=CO2024050701001975.2.N.20240508T060047.xml&elem=z"
      },
      {
        "label": "iask.ca",
        "url": "https://www.iask.ca/news/883079"
      },
      {
        "label": "decoded.avast.io",
        "url": "https://decoded.avast.io/threatresearch/avast-q1-2024-threat-report/?utm_source=rss&utm_medium=rss&utm_campaign=avast-q1-2024-threat-report"
      },
      {
        "label": "krebsonsecurity.com",
        "url": "https://krebsonsecurity.com/2024/05/operation-endgame-hits-malware-delivery-platforms/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/global-police-operation-strikes-against-malware-infrastructure/"
      },
      {
        "label": "quointelligence.eu",
        "url": "https://quointelligence.eu/2024/06/analyzing-shift-in-ransomware-dynamics/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/russians-plead-guilty-to-involvement-in-lockbit-ransomware-attacks/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/ransomware-terrorism-ndaa-2025/"
      },
      {
        "label": "miragenews.com",
        "url": "https://www.miragenews.com/uk-sanctions-evil-corp-cyber-gang-amid-putin-1328312/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/lockbit-arrests-ransomware-fbi-uk-nca-evil-corp/"
      },
      {
        "label": "justice.gov",
        "url": "https://www.justice.gov/opa/pr/russian-national-indicted-series-ransomware-attacks"
      },
      {
        "label": "europol.europa.eu",
        "url": "https://www.europol.europa.eu/media-press/newsroom/news/lockbit-power-cut-four-new-arrests-and-financial-sanctions-against-affiliates"
      },
      {
        "label": "gov.uk",
        "url": "https://www.gov.uk/government/news/uk-sanctions-members-of-notorious-evil-corp-cyber-crime-gang-after-lammy-calls-out-putins-mafia-state"
      },
      {
        "label": "inside-it.ch",
        "url": "https://www.inside-it.ch/neue-ransomware-banden-zielen-auch-auf-schweizer-firmen-20241021"
      },
      {
        "label": "wired.it",
        "url": "https://www.wired.it/article/lockbit-ransomware-attacchi/"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/en/news/Ransomware-USA-puts-LockBit-developers-on-trial-10218484.html"
      },
      {
        "label": "justice.gov",
        "url": "https://www.justice.gov/opa/media/1381806/dl"
      }
    ],
    "notes": "Attacker-side case retained for contrast. The technical detail (PHP version, CVE-2023-3824) is self-reported by LockBit on 24 February 2024 and was never confirmed by the NCA or DoJ; Bleeping Computer assesses the statement as damage control. Treat as an attacker claim, not a forensic finding."
  },
  {
    "id": "3151",
    "year": 2024,
    "name": "SEIU Local 1000 Ransomware (LockBit, 2024)",
    "breachType": "Ransomware attack",
    "resultKey": "none",
    "confidence": "1/5 — Indicative — case is atypical for the framework",
    "victim": "Service Employees International Union Local 1000 (SEIU Local 1000)",
    "actor": "LockBit",
    "countries": [
      "United States"
    ],
    "sectors": [
      "Social groups"
    ],
    "subSectors": [
      "Advocacy / activists (e.g. human rights organizations)"
    ],
    "primaryMarker": "M10",
    "secondaryMarkers": [],
    "summary": "LockBit conducted a ransomware attack against California-based Service Employees International Union Local 1000 (SEIU Local 1000) on 18 January 2024, as acknowledged by the Union, following claims by the threat actor that they obtained data. SEIU Local 1000, representing almost 100,000 employees of Californian state institutions, confirmed the encryption of certain data and efforts to investigate whether and which data may have been exfiltrated. LockBit alleged to have stolen social security numbers, salary information, financial documents. A forensic investigation was initiated and SEIU has informed authorities.",
    "rationale": "SEIU Local 1000 confirmed encryption of data and possible exfiltration of highly sensitive member records (social security numbers, salary information, financial documents) for a union representing roughly 100,000 California state employees, engaged forensics and informed authorities. Beyond that, no lifecycle stage is documented in any source located across three separate search rounds: nothing on dwell time or how the intrusion was noticed, on whether backups were isolated, on the extent of internal spread, or on when members were individually notified. LockBit's affiliate model makes several entry routes plausible but none is incident-confirmed. With impact established and every causal stage dark, the case is left Unknown rather than assigned an axis on the strength of the data categories alone.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "therecord.media",
        "url": "https://therecord.media/california-union-lockbit-attack-ransomware"
      },
      {
        "label": "facebook.com",
        "url": "https://www.facebook.com/seiu1000/posts/pfbid02dPMESPfkk1crUP8upTrvL9o38f1WGQN1W5KwvajDi4dXUVioo2cpt8CudcUUnyJql"
      },
      {
        "label": "research.checkpoint.com",
        "url": "https://research.checkpoint.com/2024/12th-february-threat-intelligence-report/"
      },
      {
        "label": "facebook.com",
        "url": "https://www.facebook.com/seiu1000/posts/pfbid0sXYNGMAoZu7tb5ueJyhy7ZxngCiVoeQAJ7VUQjN7ht2phU1tw5AfmEPEFgDernhJl"
      }
    ],
    "notes": "Searched in three separate rounds (14-08, 21-08) including Check Point, teiss and litigation-tracking sources: impact and the ~308GB attacker claim are corroborated, but no victim-side lifecycle detail has ever been published."
  },
  {
    "id": "2721",
    "year": 2023,
    "name": "Trigona Ransomware Group Infiltration (Ukrainian Cyber Alliance, Oct 2023)",
    "breachType": "Law-enforcement-style infiltration (hacktivist takedown of attacker infrastructure)",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Trigona ransomware group's own infrastructure (Confluence server, admin/hot wallets, leak site, development environment)",
    "actor": "Hacktivist group Ukrainian Cyber Alliance",
    "countries": [
      "Not available"
    ],
    "sectors": [
      "Social groups"
    ],
    "subSectors": [
      "Criminal"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [
      "M11",
      "M6",
      "M9"
    ],
    "summary": "The Ukrainian Cyber Alliance (UCA) breached the servers of the Trigona ransomware gang in October 2023. The hacktivists claimed that they gained access to Trigona's servers by leveraging an n-day exploit for the vulnerability CVE-2023-22515 affecting Confluence Data Center and Server software. Following this initial access, the Ukraine Cyber Alliance was able to exfiltrate internal data, wipe Trigona's servers and deface its leak site. According to a UCA social media post, exfiltrated data included source code, credentials for cryptocurrency hot wallets and database records, the latter of which may potentially contain decryption keys. UCA affirmed the group would release decryption keys if included in the obtained files.",
    "rationale": "Attacker-side case, read from the perspective of the penetrated organisation. Trigona's own servers ran an Atlassian Confluence instance exposed to CVE-2023-22515, a publicly disclosed and already-patched privilege-escalation flaw, which the Ukrainian Cyber Alliance used to gain access -- a criminal operation with evident technical capability had not applied an available patch to its own critical infrastructure. Dwell time favoured the intruders: they reportedly moved through the environment for a period before acting, exfiltrating data and cryptocurrency. Recovery: the group's environment was wiped and its leak site defaced, with no evident isolated backup allowing restoration, and the operation did not return. As with LockBit, the analytically interesting point is that the patch-management gap the group exploited commercially was present in its own estate.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/ukrainian-activists-hack-trigona-ransomware-gang-wipe-servers/"
      },
      {
        "label": "arstechnica.com",
        "url": "https://arstechnica.com/security/2023/10/two-ransomware-gangs-knocked-out-of-commission-in-a-single-week/"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Ukrainian-Cyber-Alliance-legt-Ransomware-Gruppierung-Trigona-lahm-9340550.html?wt_mc=rss.red.ho.ho.rdf.beitrag.beitrag"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/the-week-in-ransomware-october-20th-2023-fighting-back/"
      },
      {
        "label": "govinfosecurity.com",
        "url": "https://www.govinfosecurity.com/ukrainian-hacktivists-claim-trigona-ransomware-takedown-a-23343"
      },
      {
        "label": "socradar.io",
        "url": "https://socradar.io/cyber-awakeness-month-takedown-of-trigona-hive-ransomware-resurges-ransomedforum-and-new-raas-qbit/"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Montag-Aenderungen-am-Strassenverkehrsrecht-Ransomware-Gang-gehackt-und-gelaehmt-9340886.html?wt_mc=rss.red.ho.ho.rdf.beitrag.beitrag"
      },
      {
        "label": "malwarebytes.com",
        "url": "https://www.malwarebytes.com/blog/threat-intelligence/2023/11/ransomware-review-november-2023"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/ragnar-locker-ransomwares-dark-web-extortion-sites-seized-by-police/"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/10/europol-dismantles-ragnar-locker.html"
      },
      {
        "label": "trendmicro.com",
        "url": "https://www.trendmicro.com/vinfo/us/security/news/ransomware-spotlight/ransomware-spotlight-trigona"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/ransomware-tracker-the-latest-figures"
      },
      {
        "label": "unit42.paloaltonetworks.com",
        "url": "https://unit42.paloaltonetworks.com/unit-42-ransomware-leak-site-data-analysis/"
      }
    ],
    "notes": "Attacker-side case retained for contrast; DV-Type applied to the group's own operational posture rather than to a victim organisation."
  },
  {
    "id": "2779",
    "year": 2023,
    "name": "KaDeWe Group Ransomware (Play, 2023)",
    "breachType": "Ransomware attack / attempted extortion",
    "resultKey": "leadership",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "The KaDeWe Group (KaDeWe Berlin, Alsterhaus Hamburg, Oberpollinger Munich); ~857 employees and ~4,300 customers and gift recipients",
    "actor": "Play (PlayCrypt), Russian-speaking ransomware group",
    "countries": [
      "Germany"
    ],
    "sectors": [
      "Corporate Targets"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M10",
    "secondaryMarkers": [
      "M13",
      "M9",
      "M17",
      "M2"
    ],
    "summary": "Russian cyber-crime group PLAY disrupted the department store KaDeWe in Berlin on 3 November 2023. According to a company statement, they were able to thwart the attack in an early stage. However, card payments were not possible over the subsequent weekend due to the attack. Whether data had been stolen remained unclear at the time of the reporting. The Berlin Police said that the attackers tried to blackmail the KaDeWe. German parliament member Misbah Khan from the party Bündnis 90/Die Grünen issued a statement via media calling for increased awareness about cyber security as a part of national security in Germany.\nOne day after the disclosure, the ransomware group posted alleged KaDeWe data on their leak site, including customer and employee data, Supervisory Board minutes, data from the company's finance department and information on a number of the KaDeWe Group's business partners.\nIn contrast to initial statements by the head of KaDeWe, who downplayed the impact of the incident and also the amount and severity of stolen data, the final report of the Berlin Commissioner for Data Protection and Freedom of Information stated that data of 850 employees and around 4300 customers were stolen by the attackers.",
    "rationale": "The primary gap sits inside the doctrinal column, between what leadership knew or could establish and what it told the outside world. Detection and containment genuinely worked: the intrusion on the night of 2-3 November 2023 was spotted, systems were pulled offline into an 'Offline-Notbetrieb' across all three stores, police and the Berlin data protection authority were engaged, and the group did not pay. But management's public account -- the attack was stopped at a very early stage, card payment was secure at all times, no data leak established -- did not survive the facts. Card payment was in practice unavailable for a period, with cash only; and the final report the company filed with the Berlin DPA in late February 2024, roughly four months later, showed data of about 857 employees and 4,300 customers and gift recipients had in fact been taken, described by the supervisory authority as the first concrete figures it had received and by the press as more than previously assumed. Recovery is the second, compounding gap: the group had introduced a new ERP system in October 2023 and was struck in the middle of that migration, and it stated in February 2024 that the systems were still damaged, with ERP transition processes slowed many times over and effects still felt by suppliers, business partners and customers -- a months-long operational tail behind a publicly 'repelled' attack. Change-window exposure and reassurance-first communication, not the entry vector, are what this case evidences.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "tagesspiegel.de",
        "url": "https://www.tagesspiegel.de/berlin/berliner-wirtschaft/cyberangriff-auf-das-kadewe-in-berlin-mehr-daten-von-kunden-und-beschaftigten-betroffen-als-bisher-bekannt-11271970.html"
      },
      {
        "label": "berliner-zeitung.de",
        "url": "https://www.berliner-zeitung.de/article/cyberangriff-bei-kadewe-mehrere-tausend-kunden-betroffen-2191327"
      },
      {
        "label": "csoonline.com",
        "url": "https://www.csoonline.com/de/a/hacker-greifen-berliner-luxuskaufhaus-an,3681155"
      },
      {
        "label": "handelsblatt.com",
        "url": "https://www.handelsblatt.com/unternehmen/handel-konsumgueter/signa-beteiligung-kadewe-chef-nach-cyberangriff-in-erklaerungsnot/100003482.html"
      },
      {
        "label": "borncity.com",
        "url": "https://borncity.com/blog/2023/11/07/kadw-in-berlin-von-play-ransomware-gruppe-angegriffen/"
      },
      {
        "label": "kleinezeitung.at",
        "url": "https://www.kleinezeitung.at/wirtschaft/17800182/russische-hacker-greifen-berliner-luxuskaufhaus-kadewe-an"
      },
      {
        "label": "egovernment.de",
        "url": "https://www.egovernment.de/unbuerokratisch-15-digitalisierung-aber-sicher-misbah-khan-a-121253814f3d7d6bf3915aa40bf4450a/"
      },
      {
        "label": "rbb24.de",
        "url": "https://www.rbb24.de/panorama/beitrag/2023/11/berlin-kadewe-hacker-angriff-bargeld-zahlungen-it-probleme.html"
      },
      {
        "label": "taz.de",
        "url": "https://taz.de/IT-Berater-ueber-Sicherheit-im-Netz/!5983306/"
      },
      {
        "label": "textilwirtschaft.de",
        "url": "https://www.textilwirtschaft.de/business/news/4300-kundendaten-betroffen-kadewe-alle-details-zum-hacker-angriff-244008"
      },
      {
        "label": "handelsblatt.com",
        "url": "https://www.handelsblatt.com/unternehmen/handel-konsumgueter/cyberattacke-bei-kadewe-group-tausende-kundendaten-durch-hacker-gestohlen/100017650.html"
      }
    ],
    "notes": "The KaDeWe Group filed for insolvency in late January 2024; management attributed this to Signa-related rents rather than the attack, and no source establishes a causal link -- recorded here only because it sets the context in which the ERP recovery was still running. Figures are the company's own and are described by the DPA as approximate and possibly containing duplicates. No entry vector was ever disclosed."
  },
  {
    "id": "2411",
    "year": 2023,
    "name": "NZZ/CH Media Ransomware (Play, 2023)",
    "breachType": "Ransomware attack (cross-organisational cascade)",
    "resultKey": "execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "NZZ Media Group and CH Media (Swiss news publishers sharing IT infrastructure/CIO), with downstream cascade to Vogt-Schild (shared print JV) and Swiss FDFA / Schweizer Revue expat subscribers",
    "actor": "Play ransomware group (Playcrypt)",
    "countries": [
      "Switzerland"
    ],
    "sectors": [
      "Media"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M8",
    "secondaryMarkers": [
      "M7",
      "M1",
      "M10",
      "M4"
    ],
    "summary": "The 'Play' ransomware group disrupted the network of the Swiss media company Neue Züricher Zeitung (NZZ) with ransomware, affecting other Swiss media on 24 March 2023, the Swiss IT magazine Inside IT reported the same day based on information provided by the victims. \nBesides NZZ, the incident also affected CH Media, as both media companies rely on shared IT infrastructure. The criminal group leaked 500 GB of data obtained from NZZ, including employee and possibly customer data, as well as files exfiltrated from CH Media. Within CH Media, the radio station FM1, its digital counterpart FM1 Today and the TV station TVO were named as specific victims. The incident left FM1 without access to the database used to play music. Both NZZ and CH Media subsequently declared to not have paid any ransom.\nThe incident gained prominence when the Play ransomware group published email addresses of subscribers for the March 2023 issue of Swiss Review on the darknet in mid-May. Swiss Review is a magazine for Swiss citizens abroad, published six times a year to inform those citizens about what is happening in Switzerland. On 21 June, the Federal Department of Foreign Affairs (FDFA) confirmed the incident and traced the compromise back to an intrusion at the Swiss printing company Vogt-Schild, which includes the media companies NZZ and CH Media. The data theft happened after the FDFA sent the current addresses to the Vogt-Schild printing company so that it could issue the Swiss Review. As of 4 July, it remained unclear how the ransomware group got hold of the email and postal addresses of Swiss citizens abroad, given that the FDFA transmits these contact details through encrypted channels and regulations require these records be stored in an encrypted format.\nA member of the Swiss National Council for the Swiss People's Party, Franz Grüter, voiced concern that such stolen information could be exploited for election advertising, especially after the reintroduction of electronic voting in 2023.",
    "rationale": "NZZ had unusually strong doctrinal crisis-readiness -- a roughly 30-page crisis playbook updated two weeks before the attack and a standing incident-response retainer -- which makes this a clean test of whether doctrine translates. It did not. Blast radius: NZZ and the legally separate CH Media shared IT services and even the same CIO, so the intrusion crossed an organisational boundary that existed on paper but not in the infrastructure, and regional titles appeared in reduced form for weeks while both publishers' websites went down. The propagation then crossed a second boundary: via the shared print joint venture Vogt-Schild, address data of over 400,000 Swiss expatriates subscribing to the federal foreign ministry's Schweizer Revue was exposed -- an external government body reached through a private media group's printing chain. Scope determination was slow, running from the 24 March 2023 intrusion to the June FDFA confirmation and beyond. A regulatory execution gap sits alongside it: the data was subject to an encryption requirement in transmission and storage, and it remained unclear how it leaked regardless. A weaker Strategy-to-Leadership tension also exists between the early public account of prompt detection and isolation and the months-long cascade that followed. Play's group pattern is exploitation of unpatched public-facing applications and valid accounts, but no NZZ-specific vector was disclosed and it is not load-bearing here.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "nzz.ch",
        "url": "https://www.nzz.ch/technologie/kriminelle-hacker-greifen-die-nzz-an-und-erpressen-sie-cyberangriff-ransomware-ld.1778725"
      },
      {
        "label": "databreaches.net",
        "url": "https://www.databreaches.net/data-breach-by-play-affects-425000-swiss-abroad/"
      },
      {
        "label": "inside-it.ch",
        "url": "https://www.inside-it.ch/mehrere-schweizer-medien-von-cyberangriff-betroffen-20230324"
      },
      {
        "label": "persoenlich.com",
        "url": "https://www.persoenlich.com/medien/reduzierte-printausgaben-wegen-hackerangriff"
      },
      {
        "label": "blick.ch",
        "url": "https://www.blick.ch/schweiz/journalisten-duerfen-computer-nicht-benutzen-hacker-legen-nzz-netzwerk-lahm-id18429128.html"
      },
      {
        "label": "swissinfo.ch",
        "url": "https://www.swissinfo.ch/eng/politics/data-leak-affects-425-000-swiss-abroad/48628744"
      },
      {
        "label": "eda.admin.ch",
        "url": "https://www.eda.admin.ch/eda/en/fdfa/living-abroad/schweizerinnen-und-schweizer-im-ausland.html"
      },
      {
        "label": "chmedia.ch",
        "url": "https://chmedia.ch/news/daten-von-ch-media-nach-cyberangriff-veroeffentlicht"
      },
      {
        "label": "unternehmen.nzz.ch",
        "url": "https://unternehmen.nzz.ch/2023/05/cyberangriff-auf-das-unternehmen-nzz-veroeffentlichung-von-nzz-daten-im-darknet/"
      },
      {
        "label": "diepresse.com",
        "url": "https://www.diepresse.com/6273600/nzz-muss-nach-cyberangriff-system-fuer-zeitungsproduktion-abschalten"
      },
      {
        "label": "inside-it.ch",
        "url": "https://www.inside-it.ch/vogt-am-freitag-die-halbe-wahrheit-20240223"
      },
      {
        "label": "persoenlich.com",
        "url": "https://www.persoenlich.com/medien?page=831&stage=pers"
      },
      {
        "label": "persoenlich.com",
        "url": "https://www.persoenlich.com/medien?admforce=af_vhd&afcmp=5544597&page=840"
      }
    ],
    "notes": "Reconstructed from multiple Swiss-language sources (NZZ, swissinfo.ch, WOZ, Inside-IT); the FDFA/Schweizer Revue cross-boundary spillover detail originates from a prior session's synthesis and was not independently re-verified in this pass."
  },
  {
    "id": "2398",
    "year": 2023,
    "name": "Dozor-Teleport Wiper Attack (UCA, 2023)",
    "breachType": "Destructive wiper attack (third-party cloud infrastructure)",
    "resultKey": "execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Dozor-Teleport / Amtel-Svyaz (Russian satellite telecom provider serving FSB, Gazprom, Rosatom, and military clients)",
    "actor": "Ukrainian Cyber Alliance (UCA); initially falsely claimed via a spoofed 'Wagner Group' persona",
    "countries": [
      "Russia",
      "Not available"
    ],
    "sectors": [
      "Unknown",
      "Critical infrastructure"
    ],
    "subSectors": [
      "Not available",
      "Telecommunications",
      "Space"
    ],
    "primaryMarker": "M7",
    "secondaryMarkers": [
      "M6",
      "M9",
      "M4"
    ],
    "summary": "Dozor, a Russian satellite telecommunications provider that services power lines, oil fields was hit by a cyberattack from unnamed hackers on 28 June 2023. Initial reports also referred to but also parts of the Russian military and Federal Security Service (FSB) as Dozor clients. A company executive denied that Dozor was providing services to the Russian Ministry of Defense. The hack resulted in destruction of information, leakage of communications between the satellite provider and the Federal Security Service, stoppage of services. The group in parallel conducted defacements against four unrelated Russian websites to post messages in support of the Wagner Group, which four days earlier marched on Moscow in a brief violent revolt in an apparent challenge to Russia's top military leadership. \nThe group claimed to be the Wagner group, using insignia from the group, but analysts believe that it may have been a Ukrainian campaign masquerading as Wagner to cause unrest. The identity of the group remains unclear as of 30 June.\nOn June 30, the general director of \"Dozor-Teleport\" and the first deputy general director of \"Amtel-Svyaz\" Alexander Anosov confirmed the cyber incident and explained that the cloud provider's infrastructure had been compromised.",
    "rationale": "Dozor-Teleport served systemically sensitive clients -- reported to include the FSB, Gazprom, Rosatom and military sites -- which sets a high doctrinal bar that the operational estate did not meet. Entry and dependency: the company's own director confirmed the compromise occurred through its cloud provider's infrastructure, so the layer the operator did not control was the layer that failed. Access control: leaked documents indicate the password used to verify FSB personnel was rotated only every two months, a weak and predictable practice for a high-sensitivity verification function. Impact and recovery: information was destroyed, service stopped, and communications between the provider and its clients leaked, with roughly a day of outage and degraded service afterwards. Attribution and disclosure: responsibility was falsely claimed under Wagner Group insignia at the time and only acknowledged by the Ukrainian Cyber Alliance in August 2025, which means the victim was responding to a deliberately misleading attribution during the incident itself -- a response-stage complication worth recording.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/russian-satellite-hack-wagner-group/"
      },
      {
        "label": "satellitetoday.com",
        "url": "https://www.satellitetoday.com/cybersecurity/2025/10/06/self-attribution-in-cyberspace-the-hack-on-russias-dozor-teleport-satellite-network/"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/cyberstalking-first-amendment-us-supreme-court-security-roundup/"
      },
      {
        "label": "comnews.ru",
        "url": "https://www.comnews.ru/content/227163/2023-07-03/2023-w27/khakery-obrushili-dozor-teleport-cherez-oblako"
      },
      {
        "label": "securitylab.ru",
        "url": "https://www.securitylab.ru/news/539455.php"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/attacks-breaches/hackers-claiming-wagner-group-ties-down-russian-satellite-internet-comms-"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/russia-satellite-hack-wagner/"
      },
      {
        "label": "comnews.ru",
        "url": "https://www.comnews.ru/content/227150/2023-06-30/2023-w26/dozor-teleport-stal-zhertvoy-bukvy-z"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/hackers-take-down-russian-satellite-provider"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/edge/how-researchers-hijacked-a-satellite"
      }
    ],
    "notes": "First unavailable due to lack of sources, additional internet sources made analysis possible"
  },
  {
    "id": "3911",
    "year": 2020,
    "name": "KHNP Nuclear Data Theft (N. Korea, 2020/2024)",
    "breachType": "Data theft via privileged-account compromise",
    "resultKey": "expertise-execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Korea Hydro & Nuclear Power (KHNP)",
    "actor": "Suspected North Korean state-linked hackers",
    "countries": [
      "Not available",
      "Korea, Republic of"
    ],
    "sectors": [
      "Corporate Targets",
      "Critical infrastructure"
    ],
    "subSectors": [
      "Not available",
      "Energy"
    ],
    "primaryMarker": "M7",
    "secondaryMarkers": [
      "M6",
      "M5",
      "M14",
      "M3",
      "M12"
    ],
    "summary": "Unidentified North Korean hackers gained access to an unnamed company and stole data from the Korea Hydro & Nuclear Power (KHNP) energy company in September 2020 and June 2024, various media reported without referring to a specific source. The data theft included 110,000 technical sources of water technology and nuclear data. The leaked data mainly related to older prototypes, such as the APR 1000 and APR-1400. The hack was attributed to North Korea due to using a password for the management account with system privileges. The incident was reported by the head of the Congress's Science and Information Communications Commission and the Democratic Council for the People's Republic of Korea's CHOI on 9 and 10 October 2024, respectively.",
    "rationale": "KHNP is a nuclear operator whose doctrinal expectation of stringent privileged access management was not enforced where the data actually sat. Per the South Korean National Assembly disclosure, the compromised party was a KHNP subcontractor, breached twice -- September 2020 and June 2024 -- with attackers exploiting a software vulnerability in the subcontractor's ECM document system, deployed in 2017, to obtain the password of a top-privilege administrator account. Blast radius and egress: roughly 720,000 files left the environment, of which about 110,000 were KHNP technical materials, out of 6.77 million held. Recurrence is the decisive lifecycle finding: the same supplier was compromised twice across four years, so the first incident did not produce remediation that prevented the second. KHNP itself acknowledged that the subcontractor lacked adequate security investment, which is the doctrinal-material gap stated by the victim: nuclear-grade data obligations placed on a supplier resourced well below them, with no assurance regime closing the difference.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "issuevalley.com",
        "url": "https://www.issuevalley.com/news/articleView.html?idxno=40993"
      },
      {
        "label": "news.chosun.com",
        "url": "https://news.chosun.com/svc/bulletin/cs_bulletin_art.html?sname=news&contid=2024100902478"
      },
      {
        "label": "safetimes.co.kr",
        "url": "https://www.safetimes.co.kr/news/articleView.html?idxno=220030"
      },
      {
        "label": "koreadailyus.com",
        "url": "https://www.koreadailyus.com/north-korean-hackers-breach-south-korean-nuclear-power-partner-leak-sensitive-data/"
      },
      {
        "label": "news.kbs.co.kr",
        "url": "https://news.kbs.co.kr/news/view.do?ncd=8083316"
      },
      {
        "label": "koreajoongangdaily.joins.com",
        "url": "https://koreajoongangdaily.joins.com/news/2024-10-10/national/northKorea/North-Korean-hackers-plunder-thousands-of-nuclear-plant-tech-documents-from-Souths-company/2152248"
      }
    ],
    "notes": "-"
  },
  {
    "id": "3693",
    "year": 2024,
    "name": "SK Defense Subcontractor Leak (N. Korea, 2024)",
    "breachType": "Data leak via lower-tier supply-chain compromise",
    "resultKey": "none",
    "confidence": "2/5 — Low — rests on a sector-wide pattern or an unverified claim",
    "victim": "Unnamed South Korean defense subcontractor (produces operation/maintenance manuals for military equipment)",
    "actor": "Suspected North Korean state-linked hackers",
    "countries": [
      "Korea, Republic of"
    ],
    "sectors": [
      "Corporate Targets"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M3",
    "secondaryMarkers": [
      "M7"
    ],
    "summary": "North Korean hackers targeted a South Korean defense contractor in early 2024.\nLocal media, citing defense and police sources, reported that a subcontractor for a major defense technology company had been hacked, leading to the leak of technical data about the South Korean military’s Baekdu and Geumgang surveillance aircraft.\nSouth Korean officials suspect that North Korea orchestrated the breach of the company that produces operation and maintenance manuals for military equipment, reflecting its renewed focus on small subcontractors whose security level tends to be lower than big manufacturers.",
    "rationale": "South Korean defence subcontractors are documented as operating at materially lower security maturity than the prime manufacturers they serve, and North Korea is reported to target that weaker tier deliberately -- roughly ten defence manufacturers were breached in a parallel April 2024 wave, and technical data on the Baekdu and Geumgang surveillance aircraft left this supplier, which produces operation and maintenance manuals. That establishes the sector-level condition but not this organisation's lifecycle: nothing is published on detection, dwell time, blast radius within the supplier, egress volume, or notification to the prime or the ministry. The sector pattern is real and worth recording, but on its own it does not locate the failure on an axis for this specific case, so the classification is held at Unknown with the capability constraint recorded as a marker.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "koreaherald.com",
        "url": "https://koreaherald.com/view.php?ud=20240811050230"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/south-korea-says-dprk-hackers-stole-spy-plane-technical-data/"
      },
      {
        "label": "nknews.org",
        "url": "https://www.nknews.org/2024/08/north-korea-stole-technical-data-about-key-rok-military-spy-planes-ruling-party/"
      },
      {
        "label": "hankyung.com",
        "url": "https://www.hankyung.com/article/202408078398i"
      },
      {
        "label": "donga.com",
        "url": "https://www.donga.com/en/article/all/20240809/5104150/1"
      },
      {
        "label": "donga.com",
        "url": "https://www.donga.com/news/Politics/article/all/20240809/126426105/2"
      },
      {
        "label": "koreajoongangdaily.joins.com",
        "url": "https://koreajoongangdaily.joins.com/news/2024-08-12/opinion/editorials/Boost-our-cybersecurity-against-North-Korea/2111264"
      },
      {
        "label": "asianews.network",
        "url": "https://asianews.network/north-korean-cyberattacks-the-korea-herald/"
      },
      {
        "label": "peoplepowerparty.kr",
        "url": "https://www.peoplepowerparty.kr/news/comment_view/BBSDD0001/102601?page=1&"
      }
    ],
    "notes": "-"
  },
  {
    "id": "2879",
    "year": 2023,
    "name": "Ukraine Agri-Sector Wiper Attacks (Seashell Blizzard, 2023)",
    "breachType": "Destructive wiper attack (WalnutWipe/SharpWipe)",
    "resultKey": "expertise-execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Ukrainian food/agricultural-sector organisations and grain-shipping infrastructure",
    "actor": "Seashell Blizzard (Russian GRU Unit 74455, aka Sandworm/APT44)",
    "countries": [
      "Ukraine"
    ],
    "sectors": [
      "Corporate Targets",
      "Critical infrastructure"
    ],
    "subSectors": [
      "Not available",
      "Food"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [
      "M3",
      "M7",
      "M9"
    ],
    "summary": "Microsoft Threat Intelligence observed network penetration, data exfiltration and the deployment of destructive malware by Russian state-sponsored hacking groups against Ukrainian organisations of the food/agricultural sector and grain-related shipping infrastructure between June and September 2023.\nIn one operation, Russian state-sponsored hacking group Seashell Blizzard (formerly tracked as IRIDIUM; also known as Sandworm) deployed destructive malware (WalnutWipe/SharpWipe) against networks of Ukrainian organisations of the food/agricultural sector from July to August 2023.  On 31 July 2023, Seashell Blizzard conducted wiper attacks against two Ukrainian agricultural organisations. In another instance identified for 2 August 2023, Seashell Blizzard conducted a reconnaissance operation on another network.",
    "rationale": "Microsoft Threat Intelligence documents two victim-side conditions at these Ukrainian food and grain-logistics organisations. Exposure: perimeter server systems, including Exchange and Tomcat, were reachable and exploitable. Software provenance: the same organisations ran pirated Microsoft Office carrying the DarkCrystalRAT backdoor, so unlicensed software bypassed the vetted update channel entirely -- a supply-chain and licensing gap rather than a patching oversight. Impact and recovery: WalnutWipe/SharpWipe are destructive rather than extortive, so there was no decryption path and recovery depended wholly on isolated backups, in a sector operating under wartime resource constraints. Sequencing also matters: reconnaissance on a separate network on 2 August followed wiper deployment against two organisations on 31 July, indicating a campaign moving across a sector whose members shared the same weaknesses rather than a single isolated victim.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "microsoft.com",
        "url": "https://www.microsoft.com/en-us/security/security-insider/intelligence-reports/russian-threat-actors-dig-in-prepare-to-seize-on-war-fatigue"
      },
      {
        "label": "aka.ms",
        "url": "https://aka.ms/mtac1"
      }
    ],
    "notes": "-"
  },
  {
    "id": "2340",
    "year": 2023,
    "name": "Infotel JSC Wiper Attack (Cyber Anarchy Squad, 2023)",
    "breachType": "Destructive wiper attack with backup destruction",
    "resultKey": "execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Infotel JSC (Russian telecom; routes communications between the Russian Central Bank and other banks/organisations)",
    "actor": "Cyber Anarchy Squad / Ukrainian Cyber Alliance",
    "countries": [
      "Russia"
    ],
    "sectors": [
      "Corporate Targets",
      "Unknown",
      "Critical infrastructure",
      "Social groups",
      "Media"
    ],
    "subSectors": [
      "Not available",
      "Telecommunications",
      "Health",
      "Food",
      "Religious"
    ],
    "primaryMarker": "M9",
    "secondaryMarkers": [
      "M8",
      "M4",
      "M7"
    ],
    "summary": "The pro-Ukrainian hacker group Cyber Anarchy Squad disrupted the Russian telecommunications company Infotel JSC, the hackers claimed via their Telegram channel on 8 June 2023. Infotel in a statement acknowledged being targeted and noted that network equipment had been damaged. A spokesperson for the Ukrainian Cyber Alliance, an umbrella group of various hacktivist cells, declared central systems at Infotel had been \"wiped, including servers (backups too) and core routers (configs reset, firmware erased)\". As a result, Infotel had been unable to route Internet traffic. \nThe Ukrainian news portal Economichna Pravda reported on the same day that the disruption of Infotel JSC resulted in banks being unable to get into their computer systems and make payments, as Infotel JSC is responsible for telecommunications between the Russian Central Bank and other banks and organizations. Coinciding with the disruption, several Russian websites were defaced to show a picture of a Ukrainian soldier and messages blessing Ukraine's counteroffensive that had been initiated a few days earlier.",
    "rationale": "Infotel routed communications between the Russian Central Bank and other banks, so continuity was the whole point of the organisation, and the lifecycle shows that duty unmet at the layers that mattered. Blast radius: servers and core routers were hit together, with router configurations reset and firmware erased, meaning the network layer had no protected recovery state of its own. Recovery: backups were destroyed in the same event as production, per the Ukrainian Cyber Alliance spokesperson, so restoration capability and the thing it was meant to restore shared a fate -- the same signature seen in the FNS case. Sector blast radius: the failure of one routing provider left banks unable to reach their systems and make payments, so a single-entity compromise produced sector-level disruption, which is the clearest evidence that continuity doctrine at the national-payments level was not matched by redundancy at the provider level. The entry vector was never disclosed and is not load-bearing.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/ukraine-counteroffensive-hackers-infotel/"
      },
      {
        "label": "scworld.com",
        "url": "https://www.scworld.com/brief/russian-telecom-firm-claimed-to-be-hit-by-ukrainian-hackers"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/proukraine-hackers-claim-to-take-down-russian-isp"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/147307/hacktivism/cyber-anarchy-squad-hacks-infotel-jsc.html"
      },
      {
        "label": "epravda.com.ua",
        "url": "https://www.epravda.com.ua/news/2023/06/8/700979/"
      },
      {
        "label": "infotel.ru",
        "url": "https://infotel.ru/"
      },
      {
        "label": "t.me",
        "url": "https://t.me/anarchy_squad/818"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/ukrainian-hackers-take-down-service-provider-for-russian-banks/"
      },
      {
        "label": "databreaches.net",
        "url": "https://www.databreaches.net/ukrainian-hackers-take-down-service-provider-for-russian-banks/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/147570/breaking-news/security-affairs-newsletter-round-424.html"
      }
    ],
    "notes": "-"
  },
  {
    "id": "1894",
    "year": 2023,
    "name": "RSAWeb Ransomware Attack (Unattributed / ESXiArgs?, 2023)",
    "breachType": "Ransomware attack (mass-exploitation campaign)",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "RSAWeb (South African telecom & cloud hosting provider)",
    "actor": "Unattributed; industry speculation links it to the global ESXiArgs mass-exploitation campaign",
    "countries": [
      "South Africa",
      "Global (region)"
    ],
    "sectors": [
      "Unknown",
      "Critical infrastructure"
    ],
    "subSectors": [
      "Not available",
      "Telecommunications"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [
      "M8",
      "M9",
      "M10"
    ],
    "summary": "The South African telecommunication and cloud hosting provider RSAWeb was hit by a ransomware attack on 1 February 2023, causing a days-long outage. According to a letter from RSAWeb CEO Rudy van Staden sent to the company’s clients on 5 February, the attack affected its website, fibre, mobile, hosting, VoIP, and PBX services. Van Staden further claimed that his company was targeted by an “extremely capable and devious threat actor\" and that this attack was \"part of a campaign that has victimized many other businesses both in South Africa and globally.” According to the CEO, the company does not believe that customer or employee data was accessed as part of the attack.",
    "rationale": "RSAWeb is a hosting and cloud provider, so virtualization integrity is the core of its service promise. If the widely reported ESXiArgs attribution holds, the exposed condition was CVE-2021-21974 in VMware ESXi -- publicly known and patched since February 2021, roughly two years before the incident -- and VMware's own statement afterwards that security hygiene is a key component of preventing ransomware attacks underlines that this was preventable rather than novel. Blast radius is the stronger victim-side evidence and does not depend on that attribution: a single infrastructure layer took down website, fibre, mobile, hosting, VoIP and PBX together, so heterogeneous customer-facing services had no isolation from one another. Recovery: the outage ran for days. Disclosure: the CEO's letter to clients framed the attacker as extremely capable and devious and the event as part of a wider campaign, and RSAWeb never disclosed a root cause -- an externalising account that sits awkwardly against a two-year-old unpatched vulnerability, though the company has never confirmed that cause either way.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "mybroadband.co.za",
        "url": "https://mybroadband.co.za/news/security/479051-rsaweb-hit-by-ransomware-attack.html"
      },
      {
        "label": "citizen.co.za",
        "url": "https://www.citizen.co.za/lifestyle/technology/rsaweb-outage-global-ransomware-threat/"
      },
      {
        "label": "techcrunch.com",
        "url": "https://techcrunch.com/2023/02/06/hackers-vmware-esxi-ransomware/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/UK_Daniel_Card/status/1622496897612087298"
      },
      {
        "label": "mybroadband.co.za",
        "url": "https://mybroadband.co.za/news/security/479051-rsaweb-hit-by-ransomware-attack.html?utm_source=substack&utm_medium=email"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/DarkReading/status/1631368024824373286"
      }
    ],
    "notes": "First unavailable due to lack of sources, additional internet sources made analysis possible"
  },
  {
    "id": "3137",
    "year": 2023,
    "name": "KV-Botnet SOHO Router Takedown (Volt Typhoon, 2023-2024)",
    "breachType": "Edge-device compromise repurposed as attack infrastructure",
    "resultKey": "execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "SOHO router owners across the United States (hijacked botnet nodes); indirectly, U.S. critical-infrastructure organisations that Volt Typhoon targeted via this botnet",
    "actor": "Chinese state-sponsored actor Volt Typhoon (botnet operator); disrupted by the FBI",
    "countries": [
      "United States"
    ],
    "sectors": [
      "End user(s) / specially protected groups"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M1",
    "secondaryMarkers": [
      "M5",
      "M4",
      "M3"
    ],
    "summary": "Executing four successive search and seizure warrants under Criminal Procedure Rule 41 since 6 December 2023, the FBI has been dismantling a botnet of small-office/home-office (SOHO) across the United States controlled by the Chinese state actor Volt Typhoon. \nThe law enforcement deleted malware tying targeted devices to the KV botnet followed by steps to prevent a re-infection with KV botnet malware and isolate the devices from further communications with the botnet’s control nodes. \nThe US Department of Justice issued a press release on 31 January 2024 officially disclosing the disruption of Volt Typhoon’s US-based attack infrastructure, following a report by Reuters on the court-authorised operation on 29 January.\nIn a hearing before the Select Committee on the Chinese Communist Party of the US House of Representatives on 31 January, FBI Director Christopher Wray linked Volt Typhoon’s activity to efforts by China to preposition disruptive capabilities in critical infrastructure networks in the communications, energy, transportation, and water sectors. Reporting by Lumen Technologies first publicly connected the use of KV botnet malware to Volt Typhoon, in targeting a range of organisations since at least July 2022, including US military entities and telecommunication companies.",
    "rationale": "Treated consistently with the Moobot case: the analysable victims are the owners of the hijacked SOHO devices, and the condition is structural rather than a single mistake. The compromised Cisco and Netgear routers were largely end-of-life models no longer receiving vendor security support, so for these owners patching was not merely neglected -- it was unavailable. The doctrinal assumption that a router keeps itself safe met a material reality in which the vendor had exited, no one owned the lifecycle of the device, and the equipment nonetheless remained load-bearing on the network edge. Detection and remediation confirm the ownership vacuum: the compromise was invisible to owners and had to be removed for them under court authorisation by the FBI. Blast radius extends beyond the owners themselves, since Volt Typhoon used the botnet to obscure onward operations against US critical infrastructure, so an unmanaged consumer asset became a staging point against national infrastructure.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "justice.gov",
        "url": "https://www.justice.gov/opa/pr/us-government-disrupts-botnet-peoples-republic-china-used-conceal-hacking-critical"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/fbi-disrupts-chinese-botnet-by-wiping-malware-from-infected-routers/"
      },
      {
        "label": "reuters.com",
        "url": "https://www.reuters.com/world/us/us-disabled-chinese-hacking-network-targeting-critical-infrastructure-sources-2024-01-29/"
      },
      {
        "label": "fbi.gov",
        "url": "https://www.fbi.gov/news/speeches/director-wrays-opening-statement-to-the-house-select-committee-on-the-chinese-communist-party"
      },
      {
        "label": "defenseone.com",
        "url": "https://www.defenseone.com/threats/2024/02/how-fbi-hamstrung-chinese-hacker-group/393992/"
      },
      {
        "label": "defenseone.com",
        "url": "https://www.defenseone.com/threats/2024/02/the-d-brief-february-08-2024/394027/"
      },
      {
        "label": "theguardian.com",
        "url": "https://www.theguardian.com/technology/2024/feb/08/chinese-hack-us-transportation-infrastructure"
      },
      {
        "label": "new.qq.com",
        "url": "https://new.qq.com/rain/a/20240208A074FL00"
      },
      {
        "label": "cktimes.net",
        "url": "https://www.cktimes.net/news/%EC%A4%91%EA%B5%AD-%ED%95%B4%EC%BB%A4%EC%9D%98-%EB%AF%B8%EA%B5%AD-%EC%82%AC%EC%9D%B4%EB%B2%84-%EA%B3%B5%EA%B2%A9%EC%84%A4/"
      },
      {
        "label": "techrepublic.com",
        "url": "https://www.techrepublic.com/article/volt-typhoon-botnet-attack/"
      },
      {
        "label": "theguardian.com",
        "url": "https://www.theguardian.com/technology/2024/feb/13/volt-typhoon-what-is-it-how-does-it-work-chinese-cyber-operation-china-hackers-explainer"
      },
      {
        "label": "unit42.paloaltonetworks.com",
        "url": "https://unit42.paloaltonetworks.com/volt-typhoon-threat-brief/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/fbi-operation-seizes-infrastructure-of-lockbit-ransomware-group/"
      },
      {
        "label": "defenseone.com",
        "url": "https://www.defenseone.com/defense-systems/2024/02/biden-sign-executive-order-boosting-cybersecurity-ports-maritime-vessels/394340/"
      },
      {
        "label": "menafn.com",
        "url": "https://menafn.com/1107898438/Chinas-Involvement-In-Cyber-Espionage-In-The-US-And-The-Netherlands-Raise-Global-Concern"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/intel-agencies-issue-guidance-gru-russia-botnet"
      },
      {
        "label": "controlglobal.com",
        "url": "https://www.controlglobal.com/blogs/unfettered/blog/33038009/the-us-electric-industry-is-not-responding-to-cyber-vulnerable-chinese-equipment"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/intelligence-national-security-artificial-intelligence-threats/"
      },
      {
        "label": "defenseone.com",
        "url": "https://www.defenseone.com/threats/2024/04/some-volt-typhoon-victims-wont-know-theyre-impacted-mandiant-ceo-says/395664/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/how-to-fine-tune-the-white-houses-new-critical-infrastructure-directive/"
      },
      {
        "label": "fanpage.it",
        "url": "https://www.fanpage.it/esteri/cosa-rappresentano-le-esercitazioni-militari-cinesi-attorno-taiwan-e-perche-sono-diverse-da-quelle-del-passato/"
      },
      {
        "label": "haberler.com",
        "url": "https://www.haberler.com/guncel/cin-in-raporu-abd-nin-volt-typhoon-kampanyasinin-17500692-haberi/"
      }
    ],
    "notes": "End-of-life status of the affected router models means no patch existed, which is a stronger condition than patch latency alone; recorded under the patch marker for taxonomy consistency but flagged here. Classified consistently with row 4 (Moobot), which shares the structure."
  },
  {
    "id": "2546",
    "year": 2023,
    "name": "Qakbot Botnet Takedown (FBI 'Duck Hunt', Aug 2023)",
    "breachType": "Botnet takedown (law-enforcement action against attacker infrastructure)",
    "resultKey": "none",
    "confidence": "2/5 — Low — rests on a sector-wide pattern or an unverified claim",
    "victim": "700,000+ Qakbot-infected computers globally (compromised end users/organisations); indirectly, ransomware-affiliate victims who received Qakbot as an initial-access precursor",
    "actor": "Qakbot botnet operators (cybercriminal group linked to Black Basta and other ransomware affiliates); disrupted by the FBI ('Operation Duck Hunt')",
    "countries": [
      "Not available"
    ],
    "sectors": [
      "Social groups"
    ],
    "subSectors": [
      "Criminal"
    ],
    "primaryMarker": "M11",
    "secondaryMarkers": [
      "M2",
      "M14",
      "M3"
    ],
    "summary": "In an operation named 'Duck Hunt', the FBI disrupted control infrastructure of the Qakbot botnet, to isolate more than 700,000 infected computers in the US and elsewhere from further malicious communications from Qakbot operators and other criminal actors to which the group was selling access, the FBI and the US Department of Justice announced on 29 August 2023. \nExecuting a seize warrant, the FBI replaced a communication module on Qakbot-controlled servers to block the group's access to the control infrastructure and all connected infected computers. Redirecting the traffic from these command servers to a server managed by the FBI, law enforcement distributed an uninstaller to infected computers that removed the Qakbot malware and prevented the installation of additional malware. The FBI in collaboration with law enforcement partners in France, Germany, Latvia, the Netherlands, Romania, and the UK seized 52 servers used by Qakbot to permanently debilitate the group's operations.",
    "rationale": "Held at Unknown deliberately, and for a different reason than a missing entry vector. The affected population -- more than 700,000 machines worldwide, over 200,000 in the US, spanning home users, financial institutions, a critical-infrastructure government contractor and a medical device manufacturer -- is heterogeneous, so there is no single organisational doctrine or execution posture to place on an axis, unlike the SOHO-router cases where one uniform vendor-driven condition applies to every owner. The lifecycle evidence is nonetheless recorded because it is instructive: infections persisted undetected long enough for Qakbot to serve as the initial-access layer for Conti, REvil, Egregor, Black Basta and others, with roughly $58m in ransoms traced to its administrators; victims could not remediate themselves, so the FBI pushed an uninstaller to their machines under court order; and CISA explicitly warned that the operation removed Qakbot but did not remediate other malware already present, leaving nominally cleaned machines still compromised. Persistence after disruption is the strongest finding: no arrests were made, Talos assessed that only the C2 rather than the spam-delivery infrastructure had been hit, affiliate distribution of Ransom Knight and Remcos continued throughout, and Microsoft observed a fresh Qakbot campaign on 11 December 2023 -- roughly 3.5 months after a takedown announced as permanently dismantling the botnet.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "cisa.gov",
        "url": "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-242a"
      },
      {
        "label": "techcrunch.com",
        "url": "https://techcrunch.com/2023/10/05/qakbot-hackers-are-still-spamming-victims-despite-fbi-takedown/"
      },
      {
        "label": "theregister.com",
        "url": "https://www.theregister.com/security/2023/12/19/qakbot-returns-fbi-led-takedown-lasts-just-3-months/1278093"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/qbot-malware-returns-in-campaign-targeting-hospitality-industry/"
      },
      {
        "label": "krebsonsecurity.com",
        "url": "https://krebsonsecurity.com/2023/08/u-s-hacks-qakbot-quietly-removes-botnet-infections/"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/threat-intelligence/sprawling-qakbot-malware-takedown-spans-700-000-infected-machines"
      },
      {
        "label": "fbi.gov",
        "url": "https://www.fbi.gov/news/stories/fbi-partners-dismantle-qakbot-infrastructure-in-multinational-cyber-takedown"
      },
      {
        "label": "eurojust.europa.eu",
        "url": "https://www.eurojust.europa.eu/news/malware-network-infected-more-700000-victims-and-caused-hundreds-millions-dollars-damage"
      },
      {
        "label": "bka.de",
        "url": "https://www.bka.de/DE/Presse/Listenseite_Pressemitteilungen/2023/Presse2023/230830_PM_SchadsoftwareNetzwerk_Qakbot.html"
      },
      {
        "label": "justice.gov",
        "url": "https://www.justice.gov/usao-cdca/divisions/national-security-division/qakbot-resources"
      },
      {
        "label": "justice.gov",
        "url": "https://www.justice.gov/usao-cdca/pr/qakbot-malware-disrupted-international-cyber-takedown"
      },
      {
        "label": "justice.gov",
        "url": "https://www.justice.gov/opa/pr/qakbot-malware-disrupted-international-cyber-takedown"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Kurz-informiert-Internetbetrug-Qakbot-Botnet-E-Rezepte-Forschung-9289458.html?wt_mc=rss.red.ho.ho.rdf.beitrag.beitrag"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/150068/cyber-crime/fbi-dismantled-qakbot-botnet.html"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Botnet-Internationale-Strafverfolger-deinstallieren-700-000-Qakbot-Drohnen-9289070.html?wt_mc=rss.red.ho.beitrag.rdf.beitrag.beitrag"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/08/fbi-dismantles-qakbot-malware-frees.html"
      },
      {
        "label": "hackread.com",
        "url": "https://www.hackread.com/qakbot-botnet-disrupted-infected-computers/"
      },
      {
        "label": "tarnkappe.info",
        "url": "https://tarnkappe.info/artikel/cyberangriff/qakbot-behoerden-nahmen-700-000-bots-vom-netz-280164.html"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/how-the-fbi-nuked-qakbot-malware-from-infected-windows-pcs/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/qakbot-cybercrime-botnet-takedown-fbi"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/fbi-doj-major-botnet-and-malware-takedown-qakbot/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/qakbot-botnet-dismantled-after-infecting-over-700-000-computers/"
      },
      {
        "label": "jpost.com",
        "url": "https://www.jpost.com/breaking-news/article-756753"
      },
      {
        "label": "nrc.nl",
        "url": "https://www.nrc.nl/nieuws/2023/08/29/wereldwijd-botnet-opgerold-ook-in-nederland-servers-in-beslag-genomen-a4173055"
      },
      {
        "label": "govinfosecurity.com",
        "url": "https://www.govinfosecurity.com/operation-duck-hunt-dismantles-qakbot-a-22959"
      },
      {
        "label": "symantec-enterprise-blogs.security.com",
        "url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/qakbot-takedown-disruption"
      },
      {
        "label": "faz.net",
        "url": "https://www.faz.net/aktuell/wirtschaft/digitec/cyberkriminalitaet-bka-zerschlaegt-das-grosse-hacker-netzwerk-qakbot-19137991.html"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/150277/breaking-news/security-affairs-newsletter-round-435-by-pierluigi-paganini-international-edition.html"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/poland-train-radio-attack-security-roundup/"
      },
      {
        "label": "research.checkpoint.com",
        "url": "https://research.checkpoint.com/2023/4th-september-threat-intelligence-report/"
      },
      {
        "label": "malwarebytes.com",
        "url": "https://www.malwarebytes.com/blog/news/2023/09/a-week-in-security-august-28-september-3"
      },
      {
        "label": "socradar.io",
        "url": "https://socradar.io/qakbot-one-of-the-most-observed-malware/"
      },
      {
        "label": "techrepublic.com",
        "url": "https://www.techrepublic.com/article/fbi-led-takes-down-qakbot/"
      },
      {
        "label": "elpais.com",
        "url": "https://elpais.com/https:/elpais.com/tecnologia/2023-09-06/el-ayuntamiento-de-sevilla-suspende-todos-los-servicios-telematicos-por-un-secuestro-informatico-no-se-negociara.html"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/vulnerabilities-threats/how-to-mitigate-cybersecurity-risks-from-misguided-trust"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/10/qakbot-threat-actors-still-in-action.html"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/attacks-breaches/qakbot-infections-continue-even-after-high-profile-raid"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Kurz-informiert-MGM-Hacker-Klage-gegen-Musk-Qakbot-Epic-Games-vs-Apple-9326900.html?wt_mc=rss.red.ho.ho.rdf.beitrag.beitrag"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/152118/breaking-news/security-affairs-newsletter-round-440-by-pierluigi-paganini-international-edition.html"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/152087/cyber-crime/qakbot-threat-actors-still-operational.html"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Botnet-Trotz-Qakbot-Schlag-verteilt-Cybergang-weiter-Malware-9326478.html?wt_mc=rss.red.ho.beitrag.rdf.beitrag.beitrag"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/ragnar-locker-ransomware-site-taken-down-fbi-europol"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/cactus-ransomware-actors-using-malvertising-microsoft"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/11/darkgate-and-pikabot-malware-resurrect.html"
      },
      {
        "label": "techrepublic.com",
        "url": "https://www.techrepublic.com/article/cisco-talos-year-end-report/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/fbi-takes-down-ipstorm-malware-botnet"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/darkgate-and-pikabot-malware-emerge-as-qakbots-successors/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/doj-to-increase-cybercrime-efforts"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/ransomware-tracker-the-latest-figures"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/new-qbot-malware-variant-uses-fake-adobe-installer-popup-for-evasion/"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/12/qakbot-malware-resurfaces-with-new.html"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/156047/cyber-crime/qakbot-targets-hospitality-industry.html"
      },
      {
        "label": "tarnkappe.info",
        "url": "https://tarnkappe.info/artikel/cyberangriffe/cybercrime-faelle-liegen-im-aufwaertstrend-293782.html"
      },
      {
        "label": "behoerden-spiegel.de",
        "url": "https://www.behoerden-spiegel.de/2024/05/13/bundeslagebild-cybercrime-2023-anstieg-der-auslandstaten/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/microsoft/microsoft-fixes-windows-zero-day-exploited-in-qakbot-malware-attacks/"
      },
      {
        "label": "govinfosecurity.com",
        "url": "https://www.govinfosecurity.com/mandiant-uncovers-threat-group-behind-basta-ransomware-a-25901"
      },
      {
        "label": "gttkorea.com",
        "url": "https://www.gttkorea.com/news/articleView.html?idxno=12582"
      }
    ],
    "notes": "Kept Unknown because the victim population is heterogeneous, not because evidence is absent -- contrast rows 4 and 17, where a single uniform vendor-driven condition applies across all owners and classification is therefore possible."
  },
  {
    "id": "3652",
    "year": 2024,
    "name": "Globes Ransomware Attack (Medusa, 2024)",
    "breachType": "Ransomware attack",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Globes (Israeli financial/business newspaper)",
    "actor": "Medusa ransomware group (RaaS, tracked as Spearwing)",
    "countries": [
      "Israel"
    ],
    "sectors": [
      "Media"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [
      "M2",
      "M8"
    ],
    "summary": "The Medusa Ransomware Group targeted Israeli Financial Newspaper Globes with ransomware on 18 July 2024, the company disclosed on their website on 18 July 2024. The threat actor allegedly exfiltrated financial data, photos, employee data, and email correspondence according to the ransomware statement.\nThe Medusa Ransomware Group demanded a ransom of $1 million, which has to be paid by 30 July 2024. On 29 July 2024, Globes stated on their website they decided not to pay the demanded ransom as they are \"a media organization that advocates transparency and non-cooperation with crime.\" \nThe media organization is working with cybersecurity consultants and authorities while dealing with the incident.",
    "rationale": "Globes is a national financial daily, so the doctrinal expectation is continuity of publication and custody of newsroom and commercial data. Medusa's documented, CISA-confirmed pattern (AA25-071A) is phishing-obtained or broker-purchased credentials and exploitation of unpatched internet-facing services such as ConnectWise ScreenConnect (CVE-2024-1709) and Fortinet EMS (CVE-2023-48788) -- known, patchable weaknesses rather than novel tradecraft, which is what places this in the material column. The victim-side stages that are documented reinforce it: the exfiltration reached across categories that should sit in different trust zones -- financial data, photo archives, employee records and email correspondence in one haul -- and the incident became public through the attacker's extortion listing rather than the paper's own detection narrative. On the response side the paper performed well: it disclosed publicly, refused the $1m demand on stated principle as a media organisation opposing cooperation with crime, and worked with consultants and authorities. No Globes-specific entry vector has ever been published, so the material-column placement rests on the group pattern plus the breadth of the haul.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "ransomware.live",
        "url": "https://www.ransomware.live/group/medusa"
      },
      {
        "label": "en.globes.co.il",
        "url": "https://en.globes.co.il/en/article-update-about-cyberattack-on-globes-1001484983"
      },
      {
        "label": "x.com",
        "url": "https://x.com/H4ckManac/status/1815615689979261075"
      }
    ],
    "notes": "Interpretative analysis, not directly fact based (based on medusa wow patterns)."
  },
  {
    "id": "3290",
    "year": 2022,
    "name": "Monmouth College Ransomware (Unattributed, 2023)",
    "breachType": "Ransomware attack + data theft",
    "resultKey": "expertise-execution",
    "confidence": "2/5 — Low — rests on a sector-wide pattern or an unverified claim",
    "victim": "Monmouth College (Illinois, small private liberal-arts college)",
    "actor": "Unattributed ransomware group",
    "countries": [
      "United States"
    ],
    "sectors": [
      "Education"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M3",
    "secondaryMarkers": [
      "M10"
    ],
    "summary": "An unknown threat group targeted Monmouth College in the US state of Illinois with ransomware on 14 December 2022, according to a data breach notification filed with the General Attorney's Office in Maine and California in March 2024. \nThe notification stated that the attacker accessed the school's system on 6 December 2022. According to the breach notification, the incident resulted in the compromise of personal data of almost 44,737 people. Affected information included names, and numbers of driving licences and other ID cards.",
    "rationale": "Monmouth College is a small private liberal-arts institution in a sector repeatedly identified by FBI and CISA advisories as under-resourced for security relative to the data it holds, and the haul here bears that out: roughly 44,700-45,000 individuals' records including social security numbers and financial and medical data, a population far larger than the current student body and therefore reaching deep into historical records that were retained but evidently not protected differently from live data. That data-retention profile is the clearest victim-side condition available. The remaining lifecycle stages are undocumented -- no detection or dwell-time account, no statement on backups or recovery, no attribution -- so the classification continues to rest on the sector-level capability constraint plus the retention footprint, and confidence stays low accordingly.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "therecord.media",
        "url": "https://therecord.media/illinois-county-gov-college-hit-with-ransomware"
      },
      {
        "label": "apps.web.maine.gov",
        "url": "https://apps.web.maine.gov/online/aeviewer/ME/40/41823236-e91a-43cc-9b28-6d69d4f5e166.shtml"
      },
      {
        "label": "oag.ca.gov",
        "url": "https://oag.ca.gov/system/files/Monmouth%20Notice%20Letter%20-%20CA%20Sample.pdf"
      }
    ],
    "notes": "Web-verified (14-08-26): impact and timeline confirmed across 6+ sources; no technical vector found."
  },
  {
    "id": "2281",
    "year": 2023,
    "name": "Unspecified Israeli organisation Ransomware (Agrius, 2023)",
    "breachType": "Ransomware attack",
    "resultKey": "expertise-execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Unspecified Israeli organisation(s) (Agrius/Moneybird ransomware targets)",
    "actor": "Agrius/Pink Sandstorm fka AMERICIUM (DEV-0227)/Deadwood/Black Shadow/SharpBoys (Jahatpardaz Information Technology Solutions, MOIS)",
    "countries": [
      "Israel"
    ],
    "sectors": [
      "Unknown"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M6",
    "secondaryMarkers": [
      "M9",
      "M3"
    ],
    "summary": "Iran-aligned hacker group Agrius gained access to networks of unspecified Israeli organizations and stole information using Moneybird ransomware, Israeli cybersecurity firm Check Point Research reported on 24 May 2023.\nAgrius has been linked to the Iranian Ministry of Intelligence and Security (MOIS) in the past. The group aims to disguise its intent to carry out destructive influence operations primarily against Israeli targets as ransomware attacks.",
    "rationale": "Check Point Research documents that the affected Israeli organisations exposed remote-access services to the internet without controls adequate to a target set that Agrius/Pink Sandstorm was known to be pursuing -- an identity and access-control condition on the victim side rather than novel attacker capability. Two later-stage findings matter more than the entry point. First, Moneybird is deployed by an actor whose lineage is destructive wiper operations conducted under a ransomware guise, so victims faced an incident in which paying would not restore data and recovery depended entirely on isolated backups -- the ransomware framing itself misleads the response. Second, the campaign ran across multiple Israeli organisations, indicating a shared sectoral exposure profile rather than one outlier, in a threat environment those organisations had every reason to anticipate.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "twitter.com",
        "url": "https://twitter.com/cahlberg/status/1661478135769202688"
      },
      {
        "label": "research.checkpoint.com",
        "url": "https://research.checkpoint.com/2023/agrius-deploys-moneybird-in-targeted-attacks-against-israeli-organizations/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/DigitalPeaceNow/status/1661473393588465665"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/iranian-hackers-use-new-moneybird-ransomware-to-attack-israeli-orgs/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/cyb3rops/status/1661455682552446977"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/iran-hackers-agrius-deploying-new-ransomware"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Arkbird_SOLG/status/1661704848700497922"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Cyber_O51NT/status/1661553862833213442"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/05/iranian-agrius-hackers-targeting.html"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/the-week-in-ransomware-may-26th-2023-cities-under-attack/"
      },
      {
        "label": "welivesecurity.com",
        "url": "https://www.welivesecurity.com/2023/07/11/eset-threat-report-h1-2023/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/iran-linked-hackers-target-israel-education-tech-sectors"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/microsoft-iran-is-refining-its-cyber-operations/"
      }
    ],
    "notes": "Web-verified (14-08-26) via Check Point Research primary reporting."
  },
  {
    "id": "1891",
    "year": 2023,
    "name": "Charlie Hebdo Data Theft (Cotton Sandstorm, 2023)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "2/5 — Low — rests on a sector-wide pattern or an unverified claim",
    "victim": "Charlie Hebdo",
    "actor": "Cotton Sandstorm fka NEPTUNIUM, DEV-0198/Vice Leaker/Marnanbridge (Emennet Pasargad, IRGC)",
    "countries": [
      "France"
    ],
    "sectors": [
      "Media"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M3",
    "secondaryMarkers": [
      "M10",
      "M11"
    ],
    "summary": "The Iranian state-sponsored hacking group Neptunium stole the personal information of subscribers of the French satire magazine Charlie Hebdo and defaced its website in January 2023, Microsoft's Digital Threat Analysis Center (DTAC) assesses with high confidence.\nThe operation traces back to December 2022, when Charlie Hebdo announced a cartoon contest featuring Iran's Supreme Leader Ali Khamenei as the subject. \nOn 4 January 2023, a user by the name Holy Souls claimed to have obtained the personal information of 230,000 Charlie Hebdo subscribers. Samples released togehter with the online post show the full names, phone numbers, financial information, as well as email and home addresses of individuals that Le Monde confirmed as actual subscribers of the magazine. The information could expose readers to harm, digitally and in the real world. News about both the defacement and alleged data theft were pushed in a concerted effort across social media platforms that matches with tactics Microsoft had observed for earlier Iranian-directed influence campaigns. \nReports that the purported cache of customer details was obtained in a breach of the outlet's database are based on statements by Holy Souls that have not been independently or directly confirmed by Charlie Hebdo.\nMicrosoft identifies Neptunium as Emennet Pasargad, an Iranian cyber firm that was sanctioned by the US Treasury Department in November 2021 over attempts to interfere in the 2020 US presidential elections. The company had previously been designated under the US sanctions regime in February 2019 as Net Peygard Samavat Company before later rebranding as Emennet Pasargad.",
    "rationale": "Charlie Hebdo carries an exceptionally high and entirely foreseeable threat profile -- it had already been the target of a mass-casualty attack in 2015 and the intrusion followed its cartoon contest concerning the Iranian leadership -- while operating as a small satirical publisher without the security function that threat level would warrant. That mismatch between foreseeable exposure and material capability is the victim-side condition. The stages that are documented support it: a subscriber database of roughly 200,000 people was taken whole, indicating no tiering or minimisation around the single most sensitive dataset the magazine holds, given that exposure of subscriber identities carries physical-safety consequences for that readership; and the breach surfaced through the attacker offering the data for sale rather than through the publisher's own detection. Attribution to Cotton Sandstorm/NEPTUNIUM (Emennet Pasargad, IRGC-linked) is solid via Microsoft DTAC, but no technical entry vector has ever been disclosed, so confidence stays low and the classification rests on capability constraint and data handling.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "blogs.microsoft.com",
        "url": "https://blogs.microsoft.com/on-the-issues/2023/02/03/dtac-charlie-hebdo-hack-iran-neptunium/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/iran-charlie-hebdo-hack/"
      },
      {
        "label": "jpost.com",
        "url": "https://www.jpost.com/international/article-730541"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/attacks-breaches/iran-backed-actor-behind-cyberattack-charlie-hebdo-microsoft-says"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/iblametom/status/1621513502149206023"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/campuscodi/status/1621529797619752962"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/141855/apt/charlie-hebdo-data-leak-iran.html"
      },
      {
        "label": "jyllands-posten.dk",
        "url": "https://jyllands-posten.dk/international/ECE14953615/microsoft-iranere-stod-bag-hackerangreb-paa-charlie-hebdo/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/securityaffairs/status/1622219319823241220"
      },
      {
        "label": "lesechos.fr",
        "url": "https://www.lesechos.fr/tech-medias/medias/microsoft-affirme-que-liran-est-a-lorigine-de-la-cyberattaque-contre-charlie-hebdo-1903746"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/02/microsoft-iranian-nation-state-group.html"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/asfakian/status/1622555787158605826"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/fr0gger_/status/1622475455805935621"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/unix_root/status/1622636487169671169"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/780thC/status/1622584638144147457"
      },
      {
        "label": "lemonde.fr",
        "url": "https://www.lemonde.fr/lmdgft/1/NjE1NjkxNi1mZjNlZmMwMGQ1NGUyMWVlMTBmYzRmZjBjZjAzYjU2YzNkY2JkM2NlYjNhZjIwZTg2ZGIwMTJlYThjODA0OWE3?random=1150217085"
      },
      {
        "label": "web.archive.org",
        "url": "https://web.archive.org/web/20230109230217/https://www.youtube.com/watch?v=GKRnCjbMqEM"
      },
      {
        "label": "web.archive.org",
        "url": "https://web.archive.org/web/20230109230105/https://breached.vc/Thread-Personal-information-of-230000-customers-of-charliehebdo-fr"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/CERTEU/status/1631572192667353089"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/iranian-information-operations-hacking-microsoft-report/"
      },
      {
        "label": "microsoft.com",
        "url": "https://www.microsoft.com/en-us/security/business/security-insider/wp-content/uploads/2023/05/Iran-turning-to-cyber-enabled-influence-operations-for-greater-effect-05022023.pdf"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/05/meta-uncovers-massive-social-media.html"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/application-security/microsoft-peach-sandstorm-cyberattacks-target-defense-pharmaceutical-orgs"
      }
    ],
    "notes": "Reclassified from Unknown on capability-constraint and data-handling grounds, consistent with the treatment of Charles Darwin School and Monmouth College. Attribution is well established (Microsoft DTAC); the entry vector is not, hence confidence 2."
  },
  {
    "id": "806",
    "year": 2016,
    "name": "Islamic State Data Theft (Australian Signals Directorate, n.d.)",
    "breachType": "Data theft / espionage",
    "resultKey": "none",
    "confidence": "1/5 — Indicative — case is atypical for the framework",
    "victim": "Islamic State",
    "actor": "Australian Signals Directorate (ASD), United States Cyber Command (US CYCOM)",
    "countries": [
      "Unknown"
    ],
    "sectors": [
      "Social groups"
    ],
    "subSectors": [
      "Terrorist"
    ],
    "primaryMarker": "X",
    "secondaryMarkers": [],
    "summary": "The United States has opened a new line of combat against the Islamic State, directing the military’s six-year-old Cyber Command together with allies such as the ASD (Australian agency) for the first time to mount computer -network attacks that are being used alongside more traditional weapons. ABC news has revealed that the Australian team has obtained terabytes of data from the Islamic State network. This data includes photos, videos, and documents. The hack would have left Islamic State fighters bewildered when they tried to log into their computers.",
    "rationale": "State offensive operation by allied military cyber commands against a terrorist organisation's media and propaganda infrastructure, not a breach of an organisation with governance structures the framework can assess. There is no doctrinal security model, no accountable risk owner and no disclosure obligation on the target side, so none of the lifecycle stages translate. Recorded as Unknown/atypical rather than forced onto an axis, consistent with the treatment of the law-enforcement takedown cases in this dataset.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "nytimes.com",
        "url": "https://www.nytimes.com/2016/04/25/us/politics/us-directs-cyberweapons-at-isis-for-first-time.html?_r=0"
      },
      {
        "label": "abc.net.au",
        "url": "https://www.abc.net.au/news/2019-12-18/inside-the-secret-hack-on-islamic-state-propaganda-network/11809426"
      },
      {
        "label": "abc.net.au",
        "url": "https://www.abc.net.au/news/2019-12-18/inside-the-islamic-state-hack-that-crippled-the-terror-group/11792958?nw=0"
      }
    ],
    "notes": "Atypical case retained for completeness; excluded from victim-side pattern analysis."
  },
  {
    "id": "3398",
    "year": 2024,
    "name": "Coppel Ransomware (MexicanMafia, 2024)",
    "breachType": "Ransomware attack",
    "resultKey": "none",
    "confidence": "2/5 — Low — rests on a sector-wide pattern or an unverified claim",
    "victim": "Coppel, BanCoppel",
    "actor": "MexicanMafia",
    "countries": [
      "Mexico"
    ],
    "sectors": [
      "Corporate Targets",
      "Critical infrastructure"
    ],
    "subSectors": [
      "Not available",
      "Finance"
    ],
    "primaryMarker": "M9",
    "secondaryMarkers": [],
    "summary": "Unknown hackers breached the systems of Coppel, a Mexican department store that also offers banking services under the name of BanCoppel, on 14 April 2024. As a result, around 6.5 million active user records are allegedly for sale on hacker forums. The records include contact information as well as credit card numbers and expiration dates.  \nCybersecurity experts are suspecting SEXi, a variant of the LockBit3 ransomware, behind the attack.",
    "rationale": "Coppel operates a large Mexican retail chain alongside BanCoppel, a licensed bank, and the reported disruption ran for well over fifteen hours across customer-facing services, with Mexican reporting (R3D, El Financiero) documenting the outage and subsequent recovery. The lifecycle evidence stops there. Coppel never disclosed a root cause; the LockBit3 attribution circulating at the time was found inconsistent and remains unverified; and there is no public account of detection, dwell time, whether customer or banking data left the environment, or how recovery proceeded. The single suggestive point -- that a retail group and its regulated banking arm were affected in the same event, which would raise a segmentation question between a retailer and a supervised financial institution -- cannot be confirmed from available sources and is therefore not used to drive the classification. Held at Unknown with the resilience dependency recorded as the one defensible marker.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "diariodelyaqui.mx",
        "url": "https://diariodelyaqui.mx/nacional/video--hackeo-a-coppel-usuario-senala-que-le-borraron-la-deuda-abogado-les-tiene-noticias/82465"
      },
      {
        "label": "ipsec.mx",
        "url": "https://www.ipsec.mx/en/blog/posible-ataque-de-ransomware-a-servidores-de-coppel/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/H4ckManac/status/1782287830485455117"
      },
      {
        "label": "elfinanciero.com.mx",
        "url": "https://www.elfinanciero.com.mx/opinion/javier-murillo/2024/04/22/las-lecciones-del-ciberataque-a-coppel/"
      },
      {
        "label": "france3-regions.francetvinfo.fr",
        "url": "https://france3-regions.francetvinfo.fr/occitanie/tarn/albi/attaque-informatique-a-la-ville-d-albi-une-plainte-deposee-les-services-municipaux-perturbes-2959580.html"
      },
      {
        "label": "eltiempomonclova.mx",
        "url": "https://eltiempomonclova.mx/noticia/2024/tras-hackeo-a-coppel-advierten-sobre-fraude-de-phishing.html"
      },
      {
        "label": "elsiglodetorreon.com.mx",
        "url": "https://www.elsiglodetorreon.com.mx/noticia/2024/todo-lo-que-se-sabe-del-hackeo-a-coppel.html"
      },
      {
        "label": "elsiglodedurango.com.mx",
        "url": "https://www.elsiglodedurango.com.mx/noticia/2024/todo-lo-que-se-sabe-del-hackeo-a-coppel.html"
      },
      {
        "label": "elsoldemexico.com.mx",
        "url": "https://www.elsoldemexico.com.mx/finanzas/coppel-reestablece-su-sistema-cuales-son-los-servicios-que-puedes-hacer-11819158.html#!"
      },
      {
        "label": "computerweekly.com",
        "url": "https://www.computerweekly.com/de/news/366582334/Die-Cyberangriffe-der-KW17-2024-im-Ueberblick"
      },
      {
        "label": "revistaespejo.com",
        "url": "https://revistaespejo.com/2024/05/06/ciberseguridad-en-empresas-desafios-amenazas-y-estrategias-para-protegerse/"
      },
      {
        "label": "heraldodemexico.com.mx",
        "url": "https://heraldodemexico.com.mx/nacional/2024/9/6/coppel-admite-que-sufrio-un-hackeo-cual-fue-el-grupo-que-lo-hizo-635696.html"
      }
    ],
    "notes": "The retail/bank shared-infrastructure question is flagged as an open lead, not evidence. If a CNBV or bank supervisory statement can be located it would likely settle the classification."
  },
  {
    "id": "2763",
    "year": 2023,
    "name": "Israeli education and technology sector organisations Data Theft (Agrius, 2023)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "5/5 — Very high — incident-specific mechanism confirmed by a primary source",
    "victim": "Israeli education and technology sector organisations",
    "actor": "Agrius/Pink Sandstorm fka AMERICIUM (DEV-0227)/Deadwood/Black Shadow/SharpBoys (Jahatpardaz Information Technology Solutions, MOIS)",
    "countries": [
      "Israel"
    ],
    "sectors": [
      "Corporate Targets",
      "Education"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [
      "M11",
      "M12",
      "M9",
      "M3"
    ],
    "summary": "The suspected Iranian state-aligned hacker group Agonizing Serpens (also tracked as Black Shadow/Agrius) has stolen and published information from education and technology organisations in Israel during January and October 2023 in the likely attempt to inflict reputational damage, at times masquerading their operations as a ransomware outfit, according to a report by Palo Alto Networks.",
    "rationale": "Palo Alto Unit 42's primary research gives an unusually complete victim-side lifecycle for these Israeli education and technology organisations. Exposure: internet-facing web servers were weaponised directly. Persistence: web shells were installed and remained available. Egress: a custom SQL-extraction tool was used to pull data out in bulk before any destructive action, so the exfiltration stage ran unimpeded. Recovery: wipers were then deployed, meaning there was no decryption path and restoration depended wholly on isolated backups. Blast radius: the campaign ran across a sector rather than a single organisation, indicating a shared exposure profile among institutions holding student, staff and research data. Every stage of the chain -- exposed perimeter, undetected persistence, bulk egress, destruction -- is documented incident-specifically, which is why this row carries the highest confidence in the set.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "therecord.media",
        "url": "https://therecord.media/iran-linked-hackers-target-israel-education-tech-sectors"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/11/iranian-hackers-launches-destructive.html"
      },
      {
        "label": "unit42.paloaltonetworks.com",
        "url": "https://unit42.paloaltonetworks.com/agonizing-serpens-targets-israeli-tech-higher-ed-sectors/"
      },
      {
        "label": "unit42.paloaltonetworks.com",
        "url": "https://unit42.paloaltonetworks.com/agonizing-serpens-targets-israeli-tech-higher-ed-sectors/#post-131008-_wwfu4qvc6d3j"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/153703/apt/iranian-agonizing-serpens-apt-wipers.html"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/dr-global/iran-linked-agrius-apt-group-israeli-education-tech-sectors"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/charming-kitten-targeted-israel-cyberattacks"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/israel-warns-of-bibi-wiper-attacks-targeting-linux-and-windows/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/154056/breaking-news/security-affairs-newsletter-round-445-by-pierluigi-paganini-international-edition.html"
      }
    ],
    "notes": "Web-verified (14-08-26) via Unit 42 primary threat research (high-confidence technical detail)."
  },
  {
    "id": "2006",
    "year": 2022,
    "name": "Various Russian entities Ransomware (NB65, 2022)",
    "breachType": "Ransomware attack",
    "resultKey": "none",
    "confidence": "1/5 — Indicative — case is atypical for the framework",
    "victim": "Various Russian entities (unspecified)",
    "actor": "NB65 (Anonymous-affiliated hacktivist collective)",
    "countries": [
      "Russia"
    ],
    "sectors": [
      "Corporate Targets",
      "Media",
      "State institutions / political system"
    ],
    "subSectors": [
      "Not available",
      "Other (e.g., embassies)"
    ],
    "primaryMarker": "X",
    "secondaryMarkers": [],
    "summary": "Anonymous-linked group NB65 targeted various Russian entities with modified Conti Ransomware in order to hack-and-leak their data in March 2022. The data (786.2 GB) was released on DDoSecrets on April 4, 2022. NB65 allegedly deployed versions of Conti's leaked ransomware in its attacks, according to an NB65 hacker they base their encryptor on a modified version of the first Conti source code. The attacks were attributed to Anonymous and NB65 by Anonymous Twitter, NB65 Twitter, Tom Malka, BleepingComputer, Intezer Analyze, and even Russia Today. NB65 has clearly stated that they intend to hack no other targets except for Russian entities. NB65 declared that any ransom payments would be donated to Ukraine. Affected targets have been the Russian document management operator Tensor, Russian space agency Roscosmos, and VGTRK, the state-owned Russian Television and Radio broadcaster.",
    "rationale": "A hack-and-leak campaign by an Anonymous-affiliated collective against a range of Russian entities, using a modified build of the leaked Conti source code. The victims are named only as a loose set of Russian organisations with no common sector, governance model or disclosure obligation, and none of them published anything: no detection account, no scope statement, no recovery or notification record. With neither a uniform structural condition across the population nor any individual organisation's lifecycle documented, there is nothing to place on an axis, so the case stays Unknown.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "twitter.com",
        "url": "https://twitter.com/twitter/status/1512918186462691328"
      },
      {
        "label": "ddosecrets.substack.com",
        "url": "https://ddosecrets.substack.com/p/release-vgtrk-7862-gb?s=r"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/anonymous_link/status/1508382464711925766?s=21&t=Br_0w_853t7JrxNPEuupNw"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/hackers-use-contis-leaked-ransomware-to-attack-russian-companies/"
      },
      {
        "label": "golem.de",
        "url": "https://www.golem.de/news/malware-hackergruppe-greift-russland-mit-conti-ransomware-an-2204-164542.html"
      },
      {
        "label": "securityaffairs.co",
        "url": "https://securityaffairs.co/wordpress/130726/cyber-warfare-2/anonymous-hack-russian-companies.html"
      }
    ],
    "notes": "Wartime hacktivist campaign against a heterogeneous target set; retained for completeness but excluded from pattern analysis."
  },
  {
    "id": "1538",
    "year": 2021,
    "name": "Semiconductor companies and other organisations aligned Ransomware (BRONZE STARLIGHT, 2021)",
    "breachType": "Ransomware attack",
    "resultKey": "expertise-execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Semiconductor companies and other organisations aligned with China's industrial priorities",
    "actor": "BRONZE STARLIGHT (aka DEV-0401, Cinnamon Tempest, Emperor Dragonfly) -- Chinese state-sponsored",
    "countries": [
      "Europe (region)",
      "India",
      "Japan",
      "Brazil",
      "Kazakhstan",
      "United States",
      "Not available"
    ],
    "sectors": [
      "Corporate Targets",
      "Critical infrastructure",
      "Unknown",
      "State institutions / political system",
      "Media"
    ],
    "subSectors": [
      "Not available",
      "Defence industry",
      "Health",
      "Finance",
      "Civil service / administration"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [
      "M11",
      "M12",
      "M3"
    ],
    "summary": "Since mid-2021, the state-sponsored Chinese APT Group BRONZE STARLIGHT has engaged in a campaign of deploying ransomware in an effort to conceal the theft of steal strategic intellectual property. Targeted organizations, including semiconductor companies, largely operate in sectors that align with China's industrial priorities. In what appears to be a bid to avoid attention, the group has limited targeting to a few select organizations at a time and frequently moved on to new ransomware families. The group seeks to leverage unmitigated vulnerabilities, such as Log4j 2, that enable it to establish access and escalate privileges during early phases of an intrusion.",
    "rationale": "Secureworks CTU documents that the affected organisations -- semiconductor firms and others aligned with Chinese industrial priorities -- were entered through known, patchable vulnerabilities in perimeter products (Log4j, Exchange Server, Zoho ManageEngine ADSelfService Plus, Atlassian Confluence) for which fixes were available at the time of exploitation. Two later stages carry equal weight. Egress and detection: the objective was strategic intellectual property, extracted quietly, with roughly three-quarters of victims assessed as espionage-relevant to Chinese state interests, so bulk IP left these networks without interruption. Anti-forensics: ransomware was deployed deliberately as cover, which both destroys evidence and steers the victim's own incident response toward a criminal-extortion narrative and away from an espionage investigation -- a response-stage failure engineered by the attacker but only effective because victim triage relies on the visible symptom. Rapid rotation through six ransomware families in under a year sustained that misdirection across victims.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "secureworks.com",
        "url": "https://www.secureworks.com/research/bronze-starlight-ransomware-operations-use-hui-loader"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/149686/breaking-news/security-affairs-newsletter-round-433-by-pierluigi-paganini-international-edition.html"
      },
      {
        "label": "recordedfuture.com",
        "url": "https://www.recordedfuture.com/semiconductor-companies-targeted-by-ransomware"
      },
      {
        "label": "microsoft.com",
        "url": "https://www.microsoft.com/security/blog/2021/12/11/guidance-for-preventing-detecting-and-hunting-for-cve-2021-44228-log4j-2-exploitation/#Night%20Sky"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/unix_root/status/1576954728121974785"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/cheerscrypt-ransomware-linked-to-a-chinese-hacking-group/"
      },
      {
        "label": "securityaffairs.co",
        "url": "https://securityaffairs.co/wordpress/136611/malware/apt10-cheerscrypt-ransomware.html"
      },
      {
        "label": "blog.sygnia.co",
        "url": "https://blog.sygnia.co/revealing-emperor-dragonfly-a-chinese-ransomware-group"
      },
      {
        "label": "trendmicro.com",
        "url": "https://www.trendmicro.com/en_us/research/22/e/new-linux-based-ransomware-cheerscrypt-targets-exsi-devices.html"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/new-cheers-linux-ransomware-targets-vmware-esxi-servers/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/MsftSecIntel/status/1480730559739359233"
      },
      {
        "label": "microsoft.com",
        "url": "https://www.microsoft.com/security/blog/2022/05/09/ransomware-as-a-service-understanding-the-cybercrime-gig-economy-and-how-to-protect-yourself/#DEV-0401"
      }
    ]
  },
  {
    "id": "644",
    "year": 2014,
    "name": "Sony Pictures Entertainment Data Theft (Lazarus Group, 2014)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "5/5 — Very high — incident-specific mechanism confirmed by a primary source",
    "victim": "Sony Pictures Entertainment",
    "actor": "Lazarus Group/Labyrinth Chollima/HIDDEN COBRA/Guardians of Peace/Diamond Sleet fka ZINC/NICKEL ACADEMY/NewRomanic Cyber Army Team/Whois Hacking Team/Appleworm/Group 77/G0032 (Reconnaissance General Bureau, Bureau 121, Unit 180, Lab 110), Reconnaissance General Bureau",
    "countries": [
      "United States"
    ],
    "sectors": [
      "Corporate Targets"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M2",
    "secondaryMarkers": [
      "M6",
      "M8",
      "M11"
    ],
    "summary": "The American media and entertainment studio group Sony Pictures Entertainment fell victim to a large-scale cyber attack in mid to late 2014, carried out by a group called Guardians of Peace, more commonly known as the Lazarus Group, which has been linked to North Korea. The attack, a meticulously planned intrusion, targeted Sony's network and culminated in the theft of extensive confidential data. The hackers strategically disseminated parts of the stolen information, both directly and through the media. They also demanded to stop the release of \"The Interview\", a satirical film depicting the assassination of North Korean leader Kim Jong Un by two American characters.\nSony Pictures became aware of the hack on 24 November 2014. However, there are indications that the perpetrators had already gained access to Sony's networks months before the attack. The FBI's subsequent investigation led them to attribute the attack to the North Korean government, although they did not officially disclose their evidence. North Korea vehemently denied any involvement.\nThe main target of the cyber attack was Sony Pictures Entertainment in New York, with the attackers exploiting Microsoft Windows-based systems. The malware responsible for the intrusion, after physically infiltrating Sony's networks, spread as a Windows service and exploited Microsoft Windows' administrative and network file sharing features. This allowed the hackers to connect to the Sony network and enable the theft and destruction of data.\nThe cyber-attack was in retaliation for Sony's refusal to comply with an earlier request to stop the release of said film. The consequences included the leaking of unreleased films and scripts, the theft of employees' personal information such as national insurance numbers and medical records, and the publication of payrolls and sensitive email correspondence. Sony was forced to suspend all online activities and shut down its network for several days.\nAs a result, on 19 December 2014, President Obama promised \"appropriate action against the perpetrators\", particularly the North Korean government. This cyber attack not only caused harm to Sony employees and their families, but also undermined the economic and social well-being of American citizens. In response, the US government may have responded with cyber attacks on critical infrastructure in North Korea, resulting in temporary internet outages in the country. If confirmed, this was the first instance of the United States responding to a cyberattack on its soil with such measures.",
    "rationale": "Sony Pictures Entertainment's highest-privilege employees (executives with broad network access) fell for targeted spear-phishing emails impersonating Facebook/Apple login-verification prompts -- a security-awareness/training gap at precisely the level of the organisation where compromise carries the most risk. Once inside, attackers reportedly moved with 'unfettered access to the entire network' for months undetected (Kaspersky), and destructive malware ultimately affected roughly three-quarters of Sony's servers -- indicating an absence of network segmentation and monitoring that would have contained a single compromised account. Confirmed via the unsealed 2018 US DoJ indictment (Park Jin Hyok) and consistent independent reporting (Kaspersky, CSO Online, academic case studies).",
    "status": "AI analysed",
    "sources": [
      {
        "label": "justice.gov",
        "url": "https://www.justice.gov/archives/opa/pr/north-korean-regime-backed-programmer-charged-conspiracy-conduct-multiple-cyber-attacks-and"
      },
      {
        "label": "govinfosecurity.com",
        "url": "https://www.govinfosecurity.com/south-korea-sanctions-pyongyang-hackers-a-21193"
      },
      {
        "label": "welivesecurity.com",
        "url": "https://www.welivesecurity.com/2023/02/23/winordll64-backdoor-vast-lazarus-arsenal/"
      },
      {
        "label": "securitymea.com",
        "url": "https://securitymea.com/2023/02/28/apt-group-lazarus-likely-using-winordll64-backdoor-to-exfiltrate-data/"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/vulnerabilities-threats/lazarus-group-deathnote-cluster-pivots-defense-sector"
      },
      {
        "label": "govinfosecurity.com",
        "url": "https://www.govinfosecurity.com/north-korean-apt-group-now-deploying-linux-malware-variant-a-21737"
      },
      {
        "label": "nytimes.com",
        "url": "https://www.nytimes.com/2023/04/24/us/politics/justice-dept-cryptocurrency-north-korea.html"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/nickelodeon-alleged-data-breach"
      },
      {
        "label": "hackread.com",
        "url": "https://www.hackread.com/nickelodeon-data-leak-interview-with-ghostytongue/"
      },
      {
        "label": "elpais.com",
        "url": "https://elpais.com/https:/elpais.com/economia/negocios/2023-07-22/codigo-rojo-nos-han-hackeado-asi-son-los-ciberataques-empresariales.html"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/paramount-data-breach-cyberattack"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/sony-investigates-cyberattack-as-hackers-fight-over-whos-responsible/"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/cloud/north-korea-meta-complex-backdoor-aerospace"
      },
      {
        "label": "hackread.com",
        "url": "https://www.hackread.com/ransomedvc-ransomware-quit-sell-infrastructure/"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/vulnerabilities-threats/defending-against-attacks-on-vulnerable-iot-devices"
      },
      {
        "label": "forbes.com.mx",
        "url": "https://www.forbes.com.mx/el-costo-oculto-de-los-ciberataques-cuando-la-tecnologia-amenaza-la-existencia-empresarial/"
      },
      {
        "label": "ht4u.net",
        "url": "https://www.ht4u.net/news/alarmstufe-rot-im-cyberspace-der-unaufhaltsame-anstieg-von-cyberangriffen-und-datenbruechen-erreicht-neue-hoehen/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/north-korean-hackers-linked-to-defense-sector-supply-chain-attack/"
      },
      {
        "label": "thediplomat.com",
        "url": "https://thediplomat.com/2022/10/the-future-of-south-korea-us-cyber-cooperation/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/more-than-2000-cybersecurity-patent-applications-filed-since-2010-report/"
      },
      {
        "label": "operationblockbuster.com",
        "url": "https://www.operationblockbuster.com/wp-content/uploads/2016/02/Operation-Blockbuster-Report.pdf"
      },
      {
        "label": "nytimes.com",
        "url": "https://www.nytimes.com/2014/12/18/world/asia/us-links-north-korea-to-sony-hacking.html?_r=0"
      },
      {
        "label": "theregister.co.uk",
        "url": "https://www.theregister.co.uk/2017/05/30/nork_spy_agency_lazarus_group_attribution/"
      },
      {
        "label": "nytimes.com",
        "url": "https://www.nytimes.com/roomfordebate/2014/12/23/when-does-a-cyberattack-warrant-a-military-response"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/MischaHansel/status/1623012083854979083"
      },
      {
        "label": "schneier.com",
        "url": "https://www.schneier.com/essays/archives/2014/12/did_north_korea_real.html"
      },
      {
        "label": "arstechnica.com",
        "url": "https://arstechnica.com/information-technology/2018/09/us-indicts-north-korean-agents-for-wannacry-sony-attacks/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/mondelez-and-zurich-reach-settlement-in-notpetya-cyberattack-insurance-suit/"
      },
      {
        "label": "welt.de",
        "url": "https://www.welt.de/politik/ausland/article251277348/Nordkorea-Wie-Kims-Elite-Hacker-zum-globalen-Sicherheitsproblem-werden.html"
      },
      {
        "label": "es.ign.com",
        "url": "https://es.ign.com/disney/205505/news/disney-dice-que-esta-investigando-el-presunto-pirateo-de-12-tb-de-sus-documentos-internos"
      },
      {
        "label": "badtaste.it",
        "url": "https://www.badtaste.it/cinema/articoli/disney-avvia-indagine-grosso-attacco-hacker/"
      },
      {
        "label": "lexpress.mu",
        "url": "https://lexpress.mu/s/bug-informatique-maurice-chope-le-virus-536673"
      }
    ]
  },
  {
    "id": "4146",
    "year": 2024,
    "name": "NGO Krokodil activist Spyware (Serbian Security Intelligence Agency, 2024)",
    "breachType": "Spyware / surveillance",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "NGO Krokodil activist (unnamed), Serbia",
    "actor": "Serbian Security Intelligence Agency (BIA), using Cellebrite forensic tools",
    "countries": [
      "Serbia"
    ],
    "sectors": [
      "Social groups"
    ],
    "subSectors": [
      "Advocacy / activists (e.g. human rights organizations)"
    ],
    "primaryMarker": "M3",
    "secondaryMarkers": [
      "M5",
      "M7"
    ],
    "summary": "Amnesty International investigated a case involving an activist from the NGO Krokodil who suspected tampering with their phone following an October 2024 interview with Serbian BIA officials. Krokodil, an organization advocating for reconciliation in the Western Balkans and openly supporting Ukrainian and Russian dissidents, has faced frequent threats and vandalism, including a September 2024 incident where Russian-speaking intruders removed a Ukrainian flag from their office.\nOn October 1, 2024, after requesting a meeting with BIA regarding the incident, the activist was interviewed at the Ministry of Interior in Belgrade. Before the questioning, BIA officials asked the activist to restart their phone, which he unlocked using a pattern-based PIN. Although the officials could not visibly observe the unlock pattern, room cameras likely captured it. During the interview, which lasted from 10:17 to 11:40, the activist’s phone was left unattended in their jacket outside the room.\nUpon leaving the interview, the activist noticed suspicious activity on their Samsung Galaxy S24+, including a notification that their contacts had been exported at 10:38. Confronting BIA officials yielded denials, prompting the activist to seek Amnesty International’s Security Lab assistance.\nForensic analysis confirmed that two spyware applications, NoviSpyAdmin and NoviSpyAccess, were installed on the phone during the interview. Logs revealed that at 10:20, the phone was powered on shortly after the interview began and connected to a ThinkPad X1 Yoga via USB. Authorities used the Android ADB protocol to gain control, disable security features, and manually browse the device, including its photo gallery, while exporting contacts.\nNoviSpyAdmin, a device admin app, collected sensitive data such as call logs, contacts, SMS messages, and audio recordings. NoviSpyAccess exploited Android accessibility features to capture screenshots, track location, exfiltrate files, and activate the phone’s camera. By 10:27, NoviSpyAccess was configured as the active accessibility service, enabling comprehensive surveillance.\nThe spyware remained active on the device at the time of Amnesty International’s analysis, uploading screenshots of sensitive information, including emails, Signal and WhatsApp messages, and social media activity, to a spyware server. Data logs confirmed that NoviSpy communicated with IP addresses linked to Telekom Srbija, a government-controlled ISP.\nAmnesty International reported on many cyber incidents against Serbian civil society. Amnesty International attributed this cyber incident to the Serbian Security Intelligence Agency\n (BIA). Amnesty International also wrote that Google was able to identify further incidents, i.e. incidents outside of the ones mentioned in the Amnesty International report. Amnesty International also assumes additional compromises based on the sample numbers of the malware.",
    "rationale": "The target here is an NGO Krokodil activist, an individual in state custody, which relocates every lifecycle stage away from the person. Exposure: the device was physically seized during detention, so no configuration or behaviour on the target's part was available as a defence. Entry: Amnesty International's Security Lab forensics establish that Cellebrite UFED tooling exploited a Qualcomm chipset zero-day (CVE-2024-43047) to unlock the device -- an unpatched vulnerability in the mobile platform, i.e. a gap in a supply chain the individual does not control. Persistence: NoviSpy spyware was covertly installed before the device was returned, so the compromise continued after custody ended. Detection: the infection surfaced only because an external forensic lab examined the handset. The material gap is therefore structural -- high-risk individuals carrying state-grade exposure on consumer devices, with remediation resting on platform patching and forensic-vendor accountability rather than on anything the target could execute. Cellebrite subsequently halted sales to Serbia following the disclosure.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/new-android-novispy-spyware-linked-to-qualcomm-zero-day-bugs/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/172039/malware/novispy-spyware-serbian-journalist.html"
      },
      {
        "label": "amnesty.org",
        "url": "https://www.amnesty.org/en/documents/eur70/8813/2024/en/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/amnesty-international-exposes-serbian-polices-use-of-spyware-on-journalists-activists/"
      }
    ],
    "notes": "Web-verified (14-08-26) via Amnesty International Security Lab (primary forensic report) + The Hacker News, Balkan Insight."
  },
  {
    "id": "4145",
    "year": 2024,
    "name": "Serbian youth activist Nikola Ristic Spyware (Serbian Security Intelligence Agency, 2024)",
    "breachType": "Spyware / surveillance",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Serbian youth activist Nikola Ristic",
    "actor": "Serbian Security Intelligence Agency (BIA), using Cellebrite forensic tools",
    "countries": [
      "Serbia"
    ],
    "sectors": [
      "Social groups"
    ],
    "subSectors": [
      "Advocacy / activists (e.g. human rights organizations)"
    ],
    "primaryMarker": "M3",
    "secondaryMarkers": [
      "M5",
      "M7"
    ],
    "summary": "In November 2024, Amnesty International conducted a forensic analysis of the phone belonging to Nikola Ristić, a youth activist. The analysis confirmed that the phone was infected with NoviSpy spyware after being unlocked using Cellebrite UFED while in Serbian authorities' custody.\nNikola was a key organizer of a protest in Belgrade following the tragic collapse of a train station roof in Novi Sad, which killed 14 people and injured dozens on November 1, 2024. On November 3, Nikola and his partner arrived at Belgrade’s Trg Republike carrying red paint for the protest. Shortly after, they were stopped by four men who identified themselves as BIA officers. Despite Nikola’s initial resistance due to the absence of a warrant, he was taken to a police station after a brief altercation, during which an officer threatened him and acted aggressively.\nNikola’s belongings, including his phone, were confiscated at the station. During questioning, officers returned his phone and instructed him to call his partner to request the removal of a video of his arrest circulating on social media. After the call, his phone was taken out of the room. Nikola was interrogated; he perceived the questioning as a tactic to waste time, and no court order was presented to justify his detention. He was released after over two hours, around 1:30 PM.\nSuspicious of tampering, Nikola contacted Amnesty International’s Security Lab. Forensic analysis of his Huawei Honor 20 Pro revealed traces of NoviSpy spyware installed during his detention, with evidence showing physical access to his device via the Android ADB protocol.  One week after the infection, the spyware was still active, and logs indicated that operators had reconfigured it to upload data every three minutes, showing active device management. The analysis also confirmed that Cellebrite UFED was used to unlock the phone before the spyware installation.\nAmnesty International reported on many cyber incidents against Serbian civil society. Amnesty International attributed this cyber incident to the Serbian Security Intelligence Agency (BIA). Amnesty International also wrote that Google was able to identify further incidents, i.e. incidents outside of the ones mentioned in the Amnesty International report. Amnesty International also assumes additional compromises based on the sample numbers of the malware.",
    "rationale": "The target here is youth activist Nikola Ristic, an individual in state custody, which relocates every lifecycle stage away from the person. Exposure: the device was physically seized during detention, so no configuration or behaviour on the target's part was available as a defence. Entry: Amnesty International's Security Lab forensics establish that Cellebrite UFED tooling exploited a Qualcomm chipset zero-day (CVE-2024-43047) to unlock the device -- an unpatched vulnerability in the mobile platform, i.e. a gap in a supply chain the individual does not control. Persistence: NoviSpy spyware was covertly installed before the device was returned, so the compromise continued after custody ended. Detection: the infection surfaced only because an external forensic lab examined the handset. The material gap is therefore structural -- high-risk individuals carrying state-grade exposure on consumer devices, with remediation resting on platform patching and forensic-vendor accountability rather than on anything the target could execute. Cellebrite subsequently halted sales to Serbia following the disclosure.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/new-android-novispy-spyware-linked-to-qualcomm-zero-day-bugs/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/172039/malware/novispy-spyware-serbian-journalist.html"
      },
      {
        "label": "amnesty.org",
        "url": "https://www.amnesty.org/en/documents/eur70/8813/2024/en/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/amnesty-international-exposes-serbian-polices-use-of-spyware-on-journalists-activists/"
      }
    ],
    "notes": "Web-verified (14-08-26) via Amnesty International Security Lab primary forensic report."
  },
  {
    "id": "4144",
    "year": 2024,
    "name": "Slavisa Milanov Spyware (Security Intelligence Agency, 2024)",
    "breachType": "Spyware / surveillance",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Slavisa Milanov (Journalist, Serbia)",
    "actor": "Security Intelligence Agency (BIA)",
    "countries": [
      "Serbia"
    ],
    "sectors": [
      "Media"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M3",
    "secondaryMarkers": [
      "M5",
      "M7"
    ],
    "summary": "Amnesty International conducted a forensic analysis of the Android phone belonging to Serbian journalist Slaviša Milanov, who suspected tampering by Serbian authorities. Milanov, an investigative journalist from Dimitrovgrad working with the FAR news portal, focuses on sensitive topics such as local government spending and corruption.\nOn February 21, 2024, Milanov and a colleague were stopped by traffic police en route to a business meeting in Pirot. He was taken to the police station for additional tests for alcohol and drugs, which were conducted after a 20-minute delay and returned negative results. During his time at the station, Milanov was asked to leave his belongings, including his phone, and was later questioned by two men in civilian clothes about his journalistic work and the financing of FAR. Following the questioning, his devices were returned, but Milanov noticed unusual behavior on his phone, such as mobile data and Wi-Fi being turned off and excessive battery use by certain apps.\nSuspecting unauthorized access, Milanov installed a security app, which revealed that some apps were accessed and new ones installed while he was in custody. Amnesty International’s Security Lab confirmed that NoviSpy spyware apps were covertly installed on his Xiaomi Redmi Note 10S during his detention. The analysis also found evidence that Cellebrite’s UFED forensic tool was used to unlock the phone, enabling the spyware installation.",
    "rationale": "The target here is journalist Slavisa Milanov, an individual in state custody, which relocates every lifecycle stage away from the person. Exposure: the device was physically seized during detention, so no configuration or behaviour on the target's part was available as a defence. Entry: Amnesty International's Security Lab forensics establish that Cellebrite UFED tooling exploited a Qualcomm chipset zero-day (CVE-2024-43047) to unlock the device -- an unpatched vulnerability in the mobile platform, i.e. a gap in a supply chain the individual does not control. Persistence: NoviSpy spyware was covertly installed before the device was returned, so the compromise continued after custody ended. Detection: the infection surfaced only because an external forensic lab examined the handset. The material gap is therefore structural -- high-risk individuals carrying state-grade exposure on consumer devices, with remediation resting on platform patching and forensic-vendor accountability rather than on anything the target could execute. Cellebrite subsequently halted sales to Serbia following the disclosure.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/172039/malware/novispy-spyware-serbian-journalist.html"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/new-android-novispy-spyware-linked-to-qualcomm-zero-day-bugs/"
      },
      {
        "label": "amnesty.org",
        "url": "https://www.amnesty.org/en/documents/eur70/8813/2024/en/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/amnesty-international-exposes-serbian-polices-use-of-spyware-on-journalists-activists/"
      }
    ],
    "notes": "Web-verified (14-08-26) via Amnesty International Security Lab primary forensic report; Cellebrite halted Serbia sales following disclosure."
  },
  {
    "id": "3984",
    "year": 2024,
    "name": "OnePoint Patient Care Ransomware (INC Ransom, 2024)",
    "breachType": "Ransomware attack",
    "resultKey": "none",
    "confidence": "2/5 — Low — rests on a sector-wide pattern or an unverified claim",
    "victim": "OnePoint Patient Care",
    "actor": "INC Ransom",
    "countries": [
      "United States"
    ],
    "sectors": [
      "International / supranational organization"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M10",
    "secondaryMarkers": [
      "M3"
    ],
    "summary": "Criminal actors compromised the systems of US-based OnePoint Patient Care, a pharmacy specializing in hospice and palliative care, exposing the personal data of 795,916 individuals between 6 and 8 August 2024. The breach affected names, addresses, medical records, diagnoses, prescriptions, and, for some, Social Security numbers. OnePoint detected suspicious network activity on 8 August, initiating an investigation and containment measures with forensic experts. The incident, while not affecting operations, was later linked to the Inc Ransom ransomware group, which leaked stolen data after the company declined to pay the ransom. Impacted individuals have been advised to monitor credit and financial activity for suspicious transactions. OnePoint notified their customers on 21 October 2024.",
    "rationale": "OnePoint Patient Care is a hospice pharmacy serving patients at the end of life, so the data at stake is unusually sensitive and the doctrinal duty of care correspondingly high. What is documented is impact and disclosure: INC Ransom claimed the intrusion and published data, and the provider notified affected individuals. What is not documented is any causal stage -- no detection or dwell-time account, no statement on segmentation between pharmacy operations and patient records, no backup or recovery position, and no confirmed entry route at this organisation. INC Ransom's group pattern (spear phishing, exploitation of known vulnerabilities) is not incident-confirmed here. Held at Unknown with the data-handling condition recorded as a marker.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/170247/data-breach/onepoint-patient-care-data-breach.html"
      },
      {
        "label": "globenewswire.com",
        "url": "https://www.globenewswire.com/news-release/2024/10/22/2966603/0/en/OnePoint-Patient-Care-Notifies-Individuals-of-Data-Security-Incident.html"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/170629/cyber-crime/memorial-hospital-and-manor-ransomware-attack.html"
      }
    ],
    "notes": "Web-verified (14-08-26); group-pattern only, incident-specific vector undisclosed -- kept Undefined per framework rules."
  },
  {
    "id": "3773",
    "year": 2024,
    "name": "Free Russia Foundation and other Eastern Data Theft (Star Blizzard, 2024)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Free Russia Foundation and other Eastern European / Russian-Belarusian civil society organisations, NGOs, and independent media",
    "actor": "Star Blizzard / COLDRIVER (Russian FSB Centre 18, Unit 64829)",
    "countries": [
      "Belarus",
      "Russia",
      "United States"
    ],
    "sectors": [
      "Social groups"
    ],
    "subSectors": [
      "Advocacy / activists (e.g. human rights organizations)"
    ],
    "primaryMarker": "M3",
    "secondaryMarkers": [
      "M2",
      "M6",
      "M11"
    ],
    "summary": "Between April and June 2024, the Kremlin-linked cyberespionage group COLDRIVER aka Star Blizzard conducted a spear-phishing campaign targeting civil society members, NGOs, and the US-based Free Russia Foundation, a pro-democracy think tank. The group focused on organizations operating in Eastern Europe, sending phishing emails containing malicious PDF links designed to compromise victims' systems.\nCOLDRIVER impersonated trusted contacts to lure targets into downloading the malicious PDFs. Once accessed, victims' devices were scanned, and data was transmitted to command-and-control servers hosted on virtual private servers from Hostinger International Limited. The group used Proton Mail accounts to maintain anonymity throughout the operation.\nIn addition to NGOs and media outlets in Russia and Belarus, the campaign notably targeted the Free Russia Foundation in the beginning of September 2024, leading to the theft of over 2,500 email chains and 13GB of sensitive documents. These included grant reports, internal correspondence, and personal information, which were subsequently leaked on a Telegram channel. The leak is believed to be linked to COLDRIVER’s continued efforts to destabilize pro-democracy entities.",
    "rationale": "Free Russia Foundation and comparable exile-media and civil-society organisations face a persistent, state-resourced adversary (Star Blizzard / COLDRIVER, FSB Centre 18) whose targeting of exactly this community is extensively documented by Access Now, Citizen Lab and Microsoft -- so the threat is not merely foreseeable but publicly catalogued. Exposure: the attack surface is individual staff mailboxes reached through sustained, highly tailored impersonation, against which the available defences are sender authentication, technical filtering and continuous training -- all functions requiring a security capability these organisations do not have. Persistence: the campaigns run for months per target rather than as one-off attempts, so a single lapse anywhere in a small staff is sufficient. Detection: compromises surfaced through external research labs rather than internal monitoring. Blast radius: credential capture into personal and organisational accounts exposes contacts and sources inside Russia and Belarus, where consequences are physical. This is a capability-constrained knowing-doing gap at sector level, not negligence by any one organisation.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "4freerussia.org",
        "url": "https://www.4freerussia.org/press-center/free-russia-foundation-response-to-data-breach/"
      },
      {
        "label": "novayagazeta.eu",
        "url": "https://novayagazeta.eu/articles/2024/09/07/free-russia-foundation-to-investigate-data-breach-after-internal-documents-published-online-en-news"
      },
      {
        "label": "accessnow.org",
        "url": "https://www.accessnow.org/wp-content/uploads/2024/08/Spearphishing-cases-in-Eastern-Europe-2022-2024-technical-brief.pdf"
      },
      {
        "label": "t.me",
        "url": "https://t.me/sotaproject/86569"
      },
      {
        "label": "research.checkpoint.com",
        "url": "https://research.checkpoint.com/2024/16th-september-threat-intelligence-report/"
      }
    ],
    "notes": "Re-analysed 14-08-26 with victim-centred DV reasoning (per user feedback) and broadened actor/victim naming."
  },
  {
    "id": "3767",
    "year": 2024,
    "name": "Charles Darwin School Ransomware (BlackSuit ransomware group, 2024)",
    "breachType": "Ransomware attack",
    "resultKey": "expertise-execution",
    "confidence": "2/5 — Low — rests on a sector-wide pattern or an unverified claim",
    "victim": "Charles Darwin School (UK state secondary school, Biggin Hill)",
    "actor": "BlackSuit ransomware group (claimed responsibility; attribution not independently confirmed by the school)",
    "countries": [
      "United Kingdom"
    ],
    "sectors": [
      "Education"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M3",
    "secondaryMarkers": [
      "M9"
    ],
    "summary": "Unknown threat actors attacked Charles Darwin School in Biggin Hill, Westerham (United Kingdom) in September 2024. Since they were experiencing IT issues, they found out that the school has become a victim of ransomware. Due to the attack, the school must remain closed on 9 September till 11 September. Within that time, the staff devices can be removed and cleansed. The school is currently available by phone only.",
    "rationale": "A UK state secondary school operating in a sector repeatedly documented as under-resourced for security relative to its publicised risk profile -- the headteacher's own closure notice drew the parallel to the NHS and Transport for London incidents, so sector-level awareness was explicit. Recovery is the stage that is actually documented and it is the telling one: the school was closed and disrupted for around three weeks, which indicates that neither continuity arrangements nor restoration capability were sized for an incident of this type, in an organisation where the operational consequence falls directly on pupils mid-term. BlackSuit claimed roughly 200GB exfiltrated. No entry vector, detection account or backup position was ever disclosed, so the classification continues to rest on the sector capability constraint plus the length of the recovery, and confidence stays low.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "newsshopper.co.uk",
        "url": "https://www.newsshopper.co.uk/news/24568640.charles-darwin-school-bromley-closes-due-cyber-attack/"
      }
    ],
    "notes": "Re-analysed 14-08-26 with victim-centred DV reasoning (per user feedback); reclassified from Undefined to Expertise to Execution (low confidence, sector-pattern basis) and actor broadened from 'Not attributed' to named claimant."
  },
  {
    "id": "4160",
    "year": 2023,
    "name": "Major Chinese high-tech enterprise Data Theft (Suspected US intelligence agencies, 2023)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Major Chinese high-tech enterprise (smart energy and digital information sector)",
    "actor": "Suspected US intelligence agencies (per Chinese government/CNCERT claim; not independently confirmed by Western sources)",
    "countries": [
      "China"
    ],
    "sectors": [
      "Corporate Targets"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [
      "M8",
      "M11",
      "M12"
    ],
    "summary": "The Chinese National Internet Emergency Response Center (CNCERT) reported two cyberattacks on December 18, 2024, in which the United States stole trade secrets.\nIn the second incident, suspected U.S. intelligence agencies have targeted a major high-tech enterprise in China's smart energy and digital information sector since May 2023. The attackers exploited vulnerabilities in Microsoft Exchange to hack into and control the company's mail servers, implanting backdoors to steal email data continuously. They also used the compromised mail servers as a springboard to attack and control over 30 devices belonging to the company and its subsidiaries. As a result, the attackers stole a significant amount of the company’s trade secret information. The incident involved using multiple overseas platforms to mask the attack's origin.",
    "rationale": "A major Chinese smart energy and digital information organisation whose internet-facing Microsoft Exchange mail server remained exploitable over a sustained period from at least May 2023, per the CNCERT account. Persistence: backdoors were implanted and email exfiltrated continuously rather than in a single grab. Blast radius: the intrusion pivoted from the mail server to more than thirty further devices across the organisation and its subsidiaries, so there was no segmentation between a perimeter service and the internal estate, nor between parent and subsidiary networks. Detection: the activity ran for over a year before being characterised publicly. These are victim-side conditions independent of the disputed question of who the attacker was, which is why the classification does not depend on the attribution.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/chinese-cyber-center-us-alleged-cyberattacks-trade-secrets/"
      },
      {
        "label": "cert.org.cn",
        "url": "https://www.cert.org.cn/publish/main/49/2024/20241218184234131217571/20241218184234131217571_.html#:~:text=%E5%9B%BD%E5%AE%B6%E4%BA%92%E8%81%94%E7%BD%91%E5%BA%94%E6%80%A5%E4%B8%AD%E5%BF%83%E5%8F%91%E7%8E%B0%E5%A4%84%E7%BD%AE%E4%B8%A4%E8%B5%B7%E7%BE%8E%E5%AF%B9%E6%88%91%E5%A4%A7%E5%9E%8B%E7%A7%91%E6%8A%80%E4%BC%81%E4%B8%9A%E6%9C%BA%E6%9E%84%E8%BF%9B%E8%A1%8C%E7%BD%91%E7%BB%9C%E6%94%BB%E5%87%BB%E7%AA%83%E5%8F%96%E5%95%86%E4%B8%9A%E7%A7%98%E5%AF%86%E4%BA%8B%E4%BB%B6%E3%80%82%202024%E5%B9%B48%E6%9C%88%E8%B5%B7%EF%BC%8C%E6%88%91%E5%9B%BD%E6%9F%90%E5%85%88%E8%BF%9B%E6%9D%90%E6%96%99%E8%AE%BE%E8%AE%A1%E7%A0%94%E7%A9%B6%E5%8D%95%E4%BD%8D%E9%81%AD%E7%96%91%E4%BC%BC%E7%BE%8E%E5%9B%BD%E6%83%85%E6%8A%A5%E6%9C%BA%E6%9E%84%E7%BD%91%E7%BB%9C%E6%94%BB%E5%87%BB%E3%80%82,%E7%BB%8F%E5%88%86%E6%9E%90%EF%BC%8C%E6%94%BB%E5%87%BB%E8%80%85%E5%88%A9%E7%94%A8%E6%88%91%E5%A2%83%E5%86%85%E6%9F%90%E7%94%B5%E5%AD%90%E6%96%87%E6%A1%A3%E5%AE%89%E5%85%A8%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E6%BC%8F%E6%B4%9E%EF%BC%8C%E5%85%A5%E4%BE%B5%E8%AF%A5%E5%85%AC%E5%8F%B8%E9%83%A8%E7%BD%B2%E7%9A%84%E8%BD%AF%E4%BB%B6%E5%8D%87%E7%BA%A7%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E9%80%9A%E8%BF%87%E8%BD%AF%E4%BB%B6%E5%8D%87%E7%BA%A7%E6%9C%8D%E5%8A%A1%E5%90%91%E8%AF%A5%E5%85%AC%E5%8F%B8%E7%9A%84270%E4%BD%99%E5%8F%B0%E4%B8%BB%E6%9C%BA%E6%8A%95%E9%80%92%E6%8E%A7%E5%88%B6%E6%9C%A8%E9%A9%AC%EF%BC%8C%E7%AA%83%E5%8F%96%E8%AF%A5%E5%85%AC%E5%8F%B8%E5%A4%A7%E9%87%8F%E5%95%86%E4%B8%9A%E7%A7%98%E5%AF%86%E4%BF%A1%E6%81%AF%E5%92%8C%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E3%80%82%202023%E5%B9%B45%E6%9C%88%E8%B5%B7%EF%BC%8C%E6%88%91%E5%9B%BD%E6%9F%90%E6%99%BA%E6%85%A7%E8%83%BD%E6%BA%90%E5%92%8C%E6%95%B0%E5%AD%97%E4%BF%A1%E6%81%AF%E5%A4%A7%E5%9E%8B%E9%AB%98%E7%A7%91%E6%8A%80%E4%BC%81%E4%B8%9A%E9%81%AD%E7%96%91%E4%BC%BC%E7%BE%8E%E5%9B%BD%E6%83%85%E6%8A%A5%E6%9C%BA%E6%9E%84%E7%BD%91%E7%BB%9C%E6%94%BB%E5%87%BB%E3%80%82%20%E7%BB%8F%E5%88%86%E6%9E%90%EF%BC%8C%E6%94%BB%E5%87%BB%E8%80%85%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E5%A2%83%E5%A4%96%E8%B7%B3%E6%9D%BF%EF%BC%8C%E5%88%A9%E7%94%A8%E5%BE%AE%E8%BD%AFExchange%E6%BC%8F%E6%B4%9E%EF%BC%8C%E5%85%A5%E4%BE%B5%E6%8E%A7%E5%88%B6%E8%AF%A5%E5%85%AC%E5%8F%B8%E9%82%AE%E4%BB%B6%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%B9%B6%E6%A4%8D%E5%85%A5%E5%90%8E%E9%97%A8%E7%A8%8B%E5%BA%8F%EF%BC%8C%E6%8C%81%E7%BB%AD%E7%AA%83%E5%8F%96%E9%82%AE%E4%BB%B6%E6%95%B0%E6%8D%AE%E3%80%82"
      }
    ],
    "notes": "Attribution to US intelligence agencies rests solely on a Chinese government (CNCERT) claim with no independent Western corroboration -- treated the same way as the Ukrainian MoD claim in row 3. The victim-side lifecycle facts are also from that single source, which caps confidence at 3."
  },
  {
    "id": "4159",
    "year": 2024,
    "name": "Unnamed Chinese advanced materials design and Data Theft (Suspected US intelligence agency, 2024)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Unnamed Chinese advanced materials design and research institute",
    "actor": "Suspected US intelligence agency (per Chinese government/CNCERT claim; not independently confirmed)",
    "countries": [
      "China"
    ],
    "sectors": [
      "Corporate Targets",
      "Critical infrastructure"
    ],
    "subSectors": [
      "Not available",
      "Research"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [
      "M8",
      "M11",
      "M12"
    ],
    "summary": "The Chinese National Internet Emergency Response Center (CNCERT) reported two cyberattacks on December 18, 2024, involving the theft of trade secrets by the United States.\nIn the first cyber incident, a Chinese advanced materials design and research unit has allegedly been targeted by U.S. intelligence agencies since August 2024. The attackers exploited a vulnerability in an electronic document security management system, compromising the company's software upgrade management server. Through this breach, they delivered control Trojans to over 270 company hosts via the software upgrade service, stealing significant amounts of trade secret information and intellectual property.",
    "rationale": "A major Chinese advanced materials design and research organisation whose internet-facing Microsoft Exchange mail server remained exploitable over a sustained period from at least May 2023, per the CNCERT account. Persistence: backdoors were implanted and email exfiltrated continuously rather than in a single grab. Blast radius: the intrusion pivoted from the mail server to more than thirty further devices across the organisation and its subsidiaries, so there was no segmentation between a perimeter service and the internal estate, nor between parent and subsidiary networks. Detection: the activity ran for over a year before being characterised publicly. These are victim-side conditions independent of the disputed question of who the attacker was, which is why the classification does not depend on the attribution.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/chinese-cyber-center-us-alleged-cyberattacks-trade-secrets/"
      },
      {
        "label": "cert.org.cn",
        "url": "https://www.cert.org.cn/publish/main/49/2024/20241218184234131217571/20241218184234131217571_.html#:~:text=%E5%9B%BD%E5%AE%B6%E4%BA%92%E8%81%94%E7%BD%91%E5%BA%94%E6%80%A5%E4%B8%AD%E5%BF%83%E5%8F%91%E7%8E%B0%E5%A4%84%E7%BD%AE%E4%B8%A4%E8%B5%B7%E7%BE%8E%E5%AF%B9%E6%88%91%E5%A4%A7%E5%9E%8B%E7%A7%91%E6%8A%80%E4%BC%81%E4%B8%9A%E6%9C%BA%E6%9E%84%E8%BF%9B%E8%A1%8C%E7%BD%91%E7%BB%9C%E6%94%BB%E5%87%BB%E7%AA%83%E5%8F%96%E5%95%86%E4%B8%9A%E7%A7%98%E5%AF%86%E4%BA%8B%E4%BB%B6%E3%80%82%202024%E5%B9%B48%E6%9C%88%E8%B5%B7%EF%BC%8C%E6%88%91%E5%9B%BD%E6%9F%90%E5%85%88%E8%BF%9B%E6%9D%90%E6%96%99%E8%AE%BE%E8%AE%A1%E7%A0%94%E7%A9%B6%E5%8D%95%E4%BD%8D%E9%81%AD%E7%96%91%E4%BC%BC%E7%BE%8E%E5%9B%BD%E6%83%85%E6%8A%A5%E6%9C%BA%E6%9E%84%E7%BD%91%E7%BB%9C%E6%94%BB%E5%87%BB%E3%80%82,%E7%BB%8F%E5%88%86%E6%9E%90%EF%BC%8C%E6%94%BB%E5%87%BB%E8%80%85%E5%88%A9%E7%94%A8%E6%88%91%E5%A2%83%E5%86%85%E6%9F%90%E7%94%B5%E5%AD%90%E6%96%87%E6%A1%A3%E5%AE%89%E5%85%A8%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E6%BC%8F%E6%B4%9E%EF%BC%8C%E5%85%A5%E4%BE%B5%E8%AF%A5%E5%85%AC%E5%8F%B8%E9%83%A8%E7%BD%B2%E7%9A%84%E8%BD%AF%E4%BB%B6%E5%8D%87%E7%BA%A7%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E9%80%9A%E8%BF%87%E8%BD%AF%E4%BB%B6%E5%8D%87%E7%BA%A7%E6%9C%8D%E5%8A%A1%E5%90%91%E8%AF%A5%E5%85%AC%E5%8F%B8%E7%9A%84270%E4%BD%99%E5%8F%B0%E4%B8%BB%E6%9C%BA%E6%8A%95%E9%80%92%E6%8E%A7%E5%88%B6%E6%9C%A8%E9%A9%AC%EF%BC%8C%E7%AA%83%E5%8F%96%E8%AF%A5%E5%85%AC%E5%8F%B8%E5%A4%A7%E9%87%8F%E5%95%86%E4%B8%9A%E7%A7%98%E5%AF%86%E4%BF%A1%E6%81%AF%E5%92%8C%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E3%80%82%202023%E5%B9%B45%E6%9C%88%E8%B5%B7%EF%BC%8C%E6%88%91%E5%9B%BD%E6%9F%90%E6%99%BA%E6%85%A7%E8%83%BD%E6%BA%90%E5%92%8C%E6%95%B0%E5%AD%97%E4%BF%A1%E6%81%AF%E5%A4%A7%E5%9E%8B%E9%AB%98%E7%A7%91%E6%8A%80%E4%BC%81%E4%B8%9A%E9%81%AD%E7%96%91%E4%BC%BC%E7%BE%8E%E5%9B%BD%E6%83%85%E6%8A%A5%E6%9C%BA%E6%9E%84%E7%BD%91%E7%BB%9C%E6%94%BB%E5%87%BB%E3%80%82%20%E7%BB%8F%E5%88%86%E6%9E%90%EF%BC%8C%E6%94%BB%E5%87%BB%E8%80%85%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E5%A2%83%E5%A4%96%E8%B7%B3%E6%9D%BF%EF%BC%8C%E5%88%A9%E7%94%A8%E5%BE%AE%E8%BD%AFExchange%E6%BC%8F%E6%B4%9E%EF%BC%8C%E5%85%A5%E4%BE%B5%E6%8E%A7%E5%88%B6%E8%AF%A5%E5%85%AC%E5%8F%B8%E9%82%AE%E4%BB%B6%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%B9%B6%E6%A4%8D%E5%85%A5%E5%90%8E%E9%97%A8%E7%A8%8B%E5%BA%8F%EF%BC%8C%E6%8C%81%E7%BB%AD%E7%AA%83%E5%8F%96%E9%82%AE%E4%BB%B6%E6%95%B0%E6%8D%AE%E3%80%82"
      }
    ],
    "notes": "Attribution to US intelligence agencies rests solely on a Chinese government (CNCERT) claim with no independent Western corroboration -- treated the same way as the Ukrainian MoD claim in row 3. The victim-side lifecycle facts are also from that single source, which caps confidence at 3."
  },
  {
    "id": "4072",
    "year": 2024,
    "name": "The Real World Data Theft (Unknown, 2024)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "The Real World",
    "actor": "Unknown",
    "countries": [
      "United States"
    ],
    "sectors": [
      "Corporate Targets"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [
      "M10",
      "M11"
    ],
    "summary": "On 21 November 2024, unknown hacktivists breached The Real World platform associated with Andrew Tate. The threat actors exploited a critical security vulnerability and leaked over 794,000 usernames, nearly 325,000 email addresses, and private chat messages. Additionally, the primary chatroom was flooded with pro-feminist and LGBTQ emojis, temporarily banning users, and deleting attachments. The incident was first reported by DailyDot and DDoSecrets.",
    "rationale": "The Real World operated a paid membership platform holding roughly 800,000 users' data while running with an unpatched vulnerability and a misconfigured database reachable from the internet -- a preventable technical condition rather than a sophisticated compromise, which is what places it in the material column. Blast radius: the same access permitted both exfiltration of the user base and the uploading of content into the platform, so read and write paths were not separated. Detection and disclosure: the breach became public through the intruders' own actions and third-party reporting rather than through platform monitoring or a proactive notification to members, leaving a paying user base to learn of their exposure from the press.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "malwarebytes.com",
        "url": "https://www.malwarebytes.com/blog/news/2024/11/hilariously-insecure-andrew-tates-the-real-world-breached-800000-users-affected"
      },
      {
        "label": "hackread.com",
        "url": "https://hackread.com/andrew-tate-university-breach-user-records-chats-leak/"
      },
      {
        "label": "assodigitale.it",
        "url": "https://assodigitale.it/hacker-attaccano-luniversita-online-di-andrew-tate-ecco-cosa-sapere/"
      },
      {
        "label": "tomshw.it",
        "url": "https://www.tomshw.it/altro/hacker-colpiscono-luniversita-online-di-andrew-tate-2024-11-22"
      }
    ]
  },
  {
    "id": "3608",
    "year": 2022,
    "name": "Unnamed organisation Data Theft (APT40, 2022)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Unnamed organisation (APT40 target, since July 2022)",
    "actor": "APT40 (Chinese state-sponsored)",
    "countries": [
      "Australia"
    ],
    "sectors": [
      "Unknown"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [
      "M6",
      "M4",
      "M11"
    ],
    "summary": "The Chinese state-sponsored hacking group APT40 gained access to the network of an unnamed organization from July to September 2022, the Australian Signals Directorate (ASD), in cooperation with various other international agencies, attributed on 9 July 2024.\nThe Australian Cyber Security Centre (ACSC) notified the affected organization in mid-August 2022 about malicious activity on their network stemming from a compromised device, likely a Small Office, Home Office (SOHO) device. The hacker group also gained unauthorized access to a large amount of sensitive data.",
    "rationale": "The joint ASD/CISA advisory (AA24-190A) sets out an unusually complete victim-side chain. Exposure: a public-facing application was compromised and a web shell installed, and the advisory stresses that APT40 weaponises new proof-of-concept exploits within hours to days, so any patch latency at all is sufficient. Persistence and identity: the actor then harvested credentials and multi-factor tokens, converting a perimeter foothold into legitimate-looking access that survives the original flaw being fixed. Blast radius: lateral movement followed, with the advisory noting APT40's preference for exploiting end-of-life and unmanaged edge devices -- assets the organisation typically does not know it still depends on. Detection: the intrusion had persisted since July 2022 before being characterised. The victim-side condition is therefore not one unpatched system but an unmanaged perimeter combined with credential material that was not invalidated once compromised.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "cisa.gov",
        "url": "https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-190a"
      },
      {
        "label": "cyber.gov.au",
        "url": "https://www.cyber.gov.au/sites/default/files/2024-07/apt40-advisory-prc-mss-tradecraft-in-action.pdf"
      },
      {
        "label": "karar.com",
        "url": "https://www.karar.com/dunya-haberleri/apt40-hacker-grubu-uzerinden-yeni-gerilim-8-ulke-cini-siber-casuslukla-1876888"
      },
      {
        "label": "news.ifeng.com",
        "url": "https://news.ifeng.com/c/8b4xBQsP22j"
      },
      {
        "label": "techworm.net",
        "url": "https://www.techworm.net/2024/07/australia-chinese-hacker-cyber-attacks.html"
      },
      {
        "label": "hackread.com",
        "url": "https://hackread.com/five-eyes-blames-chinese-apt40-for-govt-hacks/"
      },
      {
        "label": "govinfosecurity.com",
        "url": "https://www.govinfosecurity.com/australia-flags-persistent-chinese-cyberespionage-hacking-a-25737"
      },
      {
        "label": "sbs.com.au",
        "url": "https://www.sbs.com.au/news/article/attempts-to-smear-and-frame-china-rejects-claims-of-cyber-attacks/v9q1xjui6"
      },
      {
        "label": "datanet.co.kr",
        "url": "https://www.datanet.co.kr/news/articleView.html?idxno=194954"
      },
      {
        "label": "ia.acs.org.au",
        "url": "https://ia.acs.org.au/article/2024/australia-blames-china-for-repeated-cyber-attacks.html"
      },
      {
        "label": "adsadvance.co.uk",
        "url": "https://www.adsadvance.co.uk/ncsc-and-partners-issue-alert-about-china-state-sponsored-cyber-attacks.html"
      },
      {
        "label": "etnews.com",
        "url": "https://www.etnews.com/20240711000202"
      },
      {
        "label": "siecledigital.fr",
        "url": "https://siecledigital.fr/2024/07/11/laustralie-et-ses-allies-exposent-de-nouvelles-activites-de-cyberespionnage-de-la-chine/"
      },
      {
        "label": "digitaltoday.co.kr",
        "url": "https://www.digitaltoday.co.kr/news/articleView.html?idxno=525032"
      },
      {
        "label": "hstoday.us",
        "url": "https://www.hstoday.us/subject-matter-areas/cybersecurity/ncsc-and-partners-issue-alert-about-evolving-techniques-used-by-china-state-sponsored-cyber-attackers/"
      }
    ]
  },
  {
    "id": "3596",
    "year": 2024,
    "name": "HealthEquity Data Theft (Unattributed, 2024)",
    "breachType": "Data theft via third-party account compromise",
    "resultKey": "execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "HealthEquity (US health savings account and benefits administrator, 14M+ accounts) and 4.3 million affected members",
    "actor": "Unattributed (no group claimed responsibility; no data published)",
    "countries": [
      "Not available",
      "United States"
    ],
    "sectors": [
      "Unknown",
      "Critical infrastructure"
    ],
    "subSectors": [
      "Not available",
      "Finance"
    ],
    "primaryMarker": "M7",
    "secondaryMarkers": [
      "M10",
      "M6",
      "M13",
      "M11",
      "M14"
    ],
    "summary": "Unknown actors stole personal health information from HealthEquity through one of its partners in the first half of 2024, HealthEquity disclosed on 2 July 2024.\nAccording to the notification, the hackers compromised the personal device of an employee of one of HealthEquity's partner companies, from where the hackers stole personally-identifiable information belonging to HealthEquity.",
    "rationale": "HealthEquity is an IRS-designated non-bank HSA trustee administering benefits for over 14 million accounts, so custody of PHI and PII is the regulated core of the business. The lifecycle shows that duty unmet at three stages, none of them the entry point. Data governance: the exposed records sat in an unstructured data repository outside the company's core systems -- a shadow store holding names, addresses, SSNs, health plan numbers, dependent details, diagnoses and prescription information for 4.3 million people, evidently outside the controls applied to the core platform. Third-party access: a business partner's user accounts, compromised via that partner's personal device, held standing access to that repository, so the trust boundary between the administrator and its vendor was not enforced at the data layer. Detection and validation: the anomaly alert came on 25 March 2024 for a breach dated 9 March, but forensics ran until 10 June and validation only completed on 26 June, with individual notification following on 9 August -- five months from breach to member notification. Containment, once understood, was competent: vendor accounts disabled, sessions terminated, IPs blocked, global password reset. A recurrence signal also exists: HealthEquity reported a separate incident in May 2024 involving fraudulent account updates affecting Kentucky health plan members.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "healthequity.com",
        "url": "https://www.healthequity.com/breach"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/healthequity-says-data-breach-impacts-43-million-people/"
      },
      {
        "label": "securityweek.com",
        "url": "https://www.securityweek.com/4-3-million-impacted-by-healthequity-data-breach/"
      },
      {
        "label": "cpomagazine.com",
        "url": "https://www.cpomagazine.com/cyber-security/healthequity-third-party-breach-leaks-personal-and-health-data-of-4-3-million-people/"
      },
      {
        "label": "theregister.com",
        "url": "https://www.theregister.com/2024/07/29/healthequity_says_data_breach_affects/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/healthequity-data-breach-exposes-protected-health-information/"
      },
      {
        "label": "sec.gov",
        "url": "https://www.sec.gov/Archives/edgar/data/1428336/000142833624000055/hqy-20240702.htm"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/165228/data-breach/healthequity-disclosed-data-breach.html"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/165401/breaking-news/security-affairs-newsletter-round-479-by-pierluigi-paganini-international-edition.html"
      },
      {
        "label": "govinfosecurity.com",
        "url": "https://www.govinfosecurity.com/health-benefits-administrator-reports-3rd-party-hack-to-sec-a-25715"
      }
    ],
    "notes": "Timeline is from the company's own breach notice and Form 8-K. No malicious code was found on HealthEquity systems and no actor claimed the data, so this was an access-and-extract event rather than extortion. The vendor was never named publicly."
  },
  {
    "id": "3505",
    "year": 2024,
    "name": "Unspecified organisation Ransomware (Moonstone Sleet, 2024)",
    "breachType": "Ransomware attack",
    "resultKey": "expertise-execution",
    "confidence": "2/5 — Low — rests on a sector-wide pattern or an unverified claim",
    "victim": "Unspecified organisation (Moonstone Sleet / FakePenny ransomware target)",
    "actor": "Moonstone Sleet / Storm-1789 (North Korean state-linked)",
    "countries": [
      "Not available"
    ],
    "sectors": [
      "Unknown"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M2",
    "secondaryMarkers": [
      "M7"
    ],
    "summary": "The North Korean state-aligned hacking group Moonstone Sleet (previously tracked as Storm-1789) compromised an unspecified company in April 2024 with the FakePenny ransomware, Microsoft reported in a technical report on 28 May 2024.\nAccording to the report, the hacker group is said to have been financially motivated and demanded $6.6 million in bitcoins from the company that they had previously compromised in February.",
    "rationale": "Microsoft's primary research documents the delivery mechanism -- trojanised software and fake-company/job-offer lures whose execution the victim's endpoint and software-provenance controls did not intercept -- but the victim organisation is not named, so nothing is known about its containment, detection, recovery or disclosure behaviour. The classification therefore rests on a single lifecycle stage (execution control at the endpoint) rather than on the whole victim-side picture, and confidence is lowered accordingly, in line with the rule that an unnamed victim caps attributable confidence.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "microsoft.com",
        "url": "https://www.microsoft.com/en-us/security/blog/2024/05/28/moonstone-sleet-emerges-as-new-north-korean-threat-actor-with-new-bag-of-tricks/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/microsoft/microsoft-links-moonstone-sleet-north-korean-hackers-to-new-fakepenny-ransomware/"
      },
      {
        "label": "malwarebytes.com",
        "url": "https://www.malwarebytes.com/blog/news/2024/06/a-week-in-security-may-27-june-2-2"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/microsoft-links-scattered-spider-hackers-to-qilin-ransomware-attacks/"
      }
    ],
    "notes": "Victim unnamed in all reporting; only the delivery stage of the lifecycle is observable, hence confidence 2."
  },
  {
    "id": "3757",
    "year": 2024,
    "name": "Young Consulting Ransomware (BlackSuit, 2024)",
    "breachType": "Ransomware attack",
    "resultKey": "execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Young Consulting / Connexure (US stop-loss insurance software vendor), with downstream exposure of Blue Shield of California and other HIPAA-covered entities",
    "actor": "BlackSuit (rebrand of Royal ransomware)",
    "countries": [
      "United States"
    ],
    "sectors": [
      "Corporate Targets",
      "Critical infrastructure"
    ],
    "subSectors": [
      "Not available",
      "Finance"
    ],
    "primaryMarker": "M7",
    "secondaryMarkers": [
      "M11",
      "M12",
      "M13",
      "M10"
    ],
    "summary": "BlackSuit Ransomware Group gained access to Young Consulting Data between 10–13 April 2024. \nYoung Consulting, a software company that develops integrated software solutions for the underwriting, marketing and administering of medical stop-loss insurance, experienced technical difficulties within its computer environment on 13 April 2024. Further investigation determined that an unauthorized actor gained access to Young Consulting's network between 10 April and 13 April 2024 and downloaded copies of certain files. The information involved in the breach varied by individual but included names, dates of birth, Social Security numbers and insurance policy and claim information.\nBlue Shield, a provider of healthcare plans in California, was affected by this data breach and directed affected patients to view Young Consulting's breach notice for more information.\nThe BlackSuit ransomware group claimed responsibility for the attack that resulted in the data breach.",
    "rationale": "As custodian of roughly 954,000 individuals' names, Social Security numbers, dates of birth, prescription and insurance-claim data on behalf of Blue Shield of California and other covered entities, Young Consulting carried an explicit doctrinal duty of care that its operational controls did not match across several lifecycle stages. Detection: the intrusion ran from 10 to 13 April 2024 and was noticed only when the attackers triggered encryption -- the company 'became aware of technical difficulties', meaning neither the intrusion nor the bulk file download was detected on its own. Egress: files were copied out during that window without interception. Containment, by contrast, worked -- systems were taken offline promptly and forensics engaged. Disclosure is where the gap widens again: the investigation closed on 28 June 2024, downstream covered entities were told the same day, but individual notification did not begin until about 26 August 2024, roughly four and a half months after discovery, and only after BlackSuit had already published the data following a refusal to pay. Downstream entities relied on this vendor's security without independent assurance, so a single vendor's detection gap became a near-million-person exposure.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/blacksuit-ransomware-stole-data-of-950-000-from-software-vendor/"
      },
      {
        "label": "securityweek.com",
        "url": "https://www.securityweek.com/950000-impacted-by-young-consulting-data-breach/"
      },
      {
        "label": "hipaajournal.com",
        "url": "https://www.hipaajournal.com/young-consulting-ransomware-attack/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/167714/data-breach/blacksuit-group-attack-young-consulting.html"
      },
      {
        "label": "research.checkpoint.com",
        "url": "https://research.checkpoint.com/2024/2nd-september-threat-intelligence-report/"
      },
      {
        "label": "techtarget.com",
        "url": "https://www.techtarget.com/healthtechsecurity/news/366609316/Medical-insurance-info-of-954K-affected-by-vendor-data-breach"
      },
      {
        "label": "youngconsulting.com",
        "url": "https://youngconsulting.com/notice/youngconsulting-notice.html"
      },
      {
        "label": "maine.gov",
        "url": "https://www.maine.gov/agviewer/content/ag/985235c7-cb95-4be2-8792-a1252b4f8318/9cb5e8fe-3d04-48e5-a403-d478cdaf5c7f.html"
      },
      {
        "label": "news.blueshieldca.com",
        "url": "https://news.blueshieldca.com/2024/08/26/young-consulting-inc-notifies-blue-shield-of-california-regarding-a-cyber-security-incident"
      }
    ],
    "notes": "Initial access vector still undisclosed and deliberately not load-bearing (Prompt8); classification rests on documented detection, egress and notification evidence from the company's Maine AG filing and its own breach notice."
  },
  {
    "id": "3420",
    "year": 2024,
    "name": "La Nación Ransomware (Unattributed, 2024)",
    "breachType": "Ransomware attack",
    "resultKey": "none",
    "confidence": "1/5 — Indicative — case is atypical for the framework",
    "victim": "La Nación (Argentine national newspaper)",
    "actor": "Unattributed",
    "countries": [
      "Argentina"
    ],
    "sectors": [
      "Media"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M9",
    "secondaryMarkers": [],
    "summary": "The Argentinian newspaper La Nación experienced a ransomware attack on 25 April 2024. Disrupted access to internal systems affected communications with subscribers and prevented the newspaper from running obituary notices.",
    "rationale": "Argentine reporting establishes that core editorial and subscriber-facing production functions were unavailable and that the newspaper pursued the matter legally, which points to a dependency of publishing operations on systems that could not absorb a single ransomware event. Beyond that, no lifecycle stage is documented: there is no public information on detection, dwell time, the extent of lateral movement, whether backups were isolated or usable, how recovery proceeded, or whether personal data left the network. An operational outage on its own does not indicate which axis failed -- it is equally consistent with a technical execution gap and with a continuity-planning gap -- so the case is left Unknown rather than forced onto an axis.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "clarin.com",
        "url": "https://www.clarin.com/tecnologia/diario-nacion-sufrio-ciberataque-restablecen-servicios-llevaran-caso-justicia_0_1jQIPhAgMP.html"
      }
    ],
    "notes": "Re-checked under the lifecycle rule: outage impact is documented but no lifecycle stage is described in enough detail to place the failure on an axis."
  },
  {
    "id": "3756",
    "year": 2024,
    "name": "Octave Ransomware (Unattributed, 2024)",
    "breachType": "Ransomware attack",
    "resultKey": "execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Octave (French IT/ERP and e-commerce hosting provider serving publishers and booksellers)",
    "actor": "Unattributed",
    "countries": [
      "France"
    ],
    "sectors": [
      "Corporate Targets",
      "Critical infrastructure"
    ],
    "subSectors": [
      "Not available",
      "Digital Provider"
    ],
    "primaryMarker": "M9",
    "secondaryMarkers": [
      "M7"
    ],
    "summary": "Octave, a French software publisher specializing in the retail sector, which hosts the data for the Amiens philately publisher's website, suffered a cyberattack on the night of August 15-16, 2024. As a result, all the group's data was encrypted, and the hackers demanded a ransom, causing the philately publisher's website to be taken offline. In total, eight independent publishing distributors are affected. Direct consequences include the inability to process orders placed before this date and to generate shipping notices and invoices. The company confirmed the hack and tries to recover the systems in the next weeks. The director estimates that the losses caused by the incident \"amount to several tens of thousands of euros\".",
    "rationale": "Octave's business was hosting other organisations' ERP, websites and order flows, which carries an implicit doctrinal commitment to recoverability on behalf of every downstream customer. Materially, the encryption of the group's data was not survivable: the incident escalated into the company's insolvency, and its publisher and bookseller clients had to organise around the outage themselves. An outcome that severe indicates that backup isolation and restore capability were not provisioned at the level the provider's own service promise implied -- a recovery-path failure rather than a mere entry failure. The initial access vector was never disclosed and is not load-bearing here; the decisive evidence sits at the resilience stage of the lifecycle, and the concentration of many small publishers on one provider turned that single recovery failure into a sector-level disruption.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "actualitte.com",
        "url": "https://actualitte.com/article/118979/acteurs-numeriques/face-a-une-cyberattaque-les-distributeurs-font-front"
      },
      {
        "label": "francebleu.fr",
        "url": "https://www.francebleu.fr/infos/economie-social/amiens-le-site-du-celebre-editeur-de-philatelie-yvert-et-tellier-inaccessible-en-raison-d-une-cyberattaque-1186400"
      },
      {
        "label": "france3-regions.francetvinfo.fr",
        "url": "https://france3-regions.francetvinfo.fr/hauts-de-france/somme/amiens/cyberattaque-la-maison-d-edition-de-timbres-yvert-tellier-touchee-par-une-attaque-informatique-3024047.html"
      },
      {
        "label": "sudouest.fr",
        "url": "https://www.sudouest.fr/gironde/bordeaux/victime-d-une-cyberattaque-majeure-la-societe-girondine-3as-racing-tente-de-rebondir-au-plus-vite-21289395.php"
      },
      {
        "label": "letelegramme.fr",
        "url": "https://www.letelegramme.fr/morbihan/lorient-56100/a-lorient-victime-dune-cyberattaque-lyophilise-co-renait-de-ses-cendres-6652041.php"
      },
      {
        "label": "lejournaldesentreprises.com",
        "url": "https://www.lejournaldesentreprises.com/article/comment-lyophilise-co-reussi-relancer-son-activite-apres-une-cyberattaque-2104495"
      },
      {
        "label": "angers.maville.com",
        "url": "https://angers.maville.com/actu/actudet_-apres-une-cyberattaque-une-societe-d-angers-placee-en-redressement-judiciaire-_loc-6565438_actu.Htm"
      }
    ],
    "notes": "Reclassified on resilience evidence (insolvency following full encryption), not on an entry vector, which remains undisclosed."
  },
  {
    "id": "3430",
    "year": 2024,
    "name": "KJF Augsburg Group Ransomware (LockBit, 2024)",
    "breachType": "Ransomware attack",
    "resultKey": "execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Katholische Jugendfuersorge Augsburg group (Frere-Roger-Kinderzentrum gGmbH, IFD Schwaben gGmbH, KJF Klinik Josefinum gGmbH, InHoga gGmbH, Klinik St. Elisabeth, St. Franziskus and further affiliated entities)",
    "actor": "LockBit",
    "countries": [
      "Germany"
    ],
    "sectors": [
      "Social groups",
      "Critical infrastructure"
    ],
    "subSectors": [
      "Religious",
      "Health"
    ],
    "primaryMarker": "M8",
    "secondaryMarkers": [
      "M1"
    ],
    "summary": "LockBit Ransomware Group attacked the IT infrastructure of the Catholic Youth Welfare (KJF) of the German Diocese of Augsburg on 17 April 2024. The exfiltrated data includes personal, financial, patient and health data. The patient and health data originates from clinics and other facilities associated with the KJF.",
    "rationale": "The decisive victim-side evidence is blast radius rather than entry. A single intrusion reached a long list of legally separate gGmbH entities across the KJF Augsburg group -- children's centres, clinics, integration services and care providers -- indicating a shared IT estate operated across those entities without segmentation that would confine an incident to one of them, and no single entity able to isolate itself from the others. For a group handling clinical and social-care records of vulnerable people, the doctrinal duty of care sits with each entity while the material infrastructure was evidently common and flat. On the response side the group performed better: it published a dedicated incident page and communicated with affected people. The specific technical failing was never disclosed and is not load-bearing here.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "kjf-augsburg.de",
        "url": "https://www.kjf-augsburg.de/cyberangriff/"
      },
      {
        "label": "sueddeutsche.de",
        "url": "https://www.sueddeutsche.de/bayern/cyberangriff-kliniken-augsburg-patientendaten-hacker-1.6838298"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Cyberangriffe-treffen-Uniklinik-und-Krankenhaeuser-9705081.html?wt_mc=rss.red.ho.beitrag.rdf.beitrag.beitrag"
      },
      {
        "label": "br.de",
        "url": "https://www.br.de/nachrichten/bayern/warum-hacker-auf-die-gesundheitsbranche-zielen,UBicwDf"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Ueber-100-neue-Leaks-LockBit-entfaltet-nach-Doxxing-hektische-Aktivitaet-9713751.html?wt_mc=rss.red.ho.beitrag.rdf.beitrag.beitrag"
      }
    ],
    "notes": "German reporting (heise.de) and the group's own incident page confirm scope across multiple legal entities; no technical entry vector disclosed, and the group declined further technical questions."
  },
  {
    "id": "3680",
    "year": 2024,
    "name": "Mobile Guardian Device Wipe (Unattributed, 2024)",
    "breachType": "Destructive device wipe via management platform",
    "resultKey": "execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Mobile Guardian (UK-based school MDM vendor) and its downstream school customers, notably ~13,000 students across 26 Singaporean secondary schools",
    "actor": "Unattributed",
    "countries": [
      "United Kingdom",
      "Singapore"
    ],
    "sectors": [
      "Corporate Targets",
      "State institutions / political system",
      "Education"
    ],
    "subSectors": [
      "Not available",
      "Civil service / administration"
    ],
    "primaryMarker": "M7",
    "secondaryMarkers": [
      "M14",
      "M15",
      "M16",
      "M6",
      "M9"
    ],
    "summary": "Unknown hackers breached Systems of mobile device management company Mobile Guardian on 4 August 2024, which impacted users globally, the attackers remotely wiped a small percentage of devices, according to the company.\nMobile Guardian’s investigations found that there had been a global cybersecurity incident involving unauthorised access to its platform that affected its customers globally, including those in Singapore. Based on preliminary checks, about 13,000 students in Singapore from 26 secondary schools had their devices wiped remotely by the perpetrator. There is currently no evidence that the perpetrator had accessed user files.\nAs a precautionary measure, the Ministry of Education of Singapore has removed the Mobile Guardian Device Management Application from all iPads and Chromebooks. Efforts are underway to safely restore these devices to normal usage.\nThis attack is similar to an incident on April 19th 2024, also involving Mobile Guardian and Schools in Singapore.",
    "rationale": "This is the third security failure at the same vendor inside one year -- an April 2024 leak exposing parent and staff data from 127 schools, a July 2024 outage that the vendor itself attributed to a configuration error, and the 4 August 2024 compromise -- so the doctrinal position that a device-management vendor is a trusted control point was repeatedly contradicted by its own operational record without either the vendor or its customers changing course. A student had reported to Singapore's MOE in late May 2024 a flaw granting any signed-in user 'super admin' rights over the user-management system, sufficient to reset every enrolled device; the government states it was fixed before August, while MOE's own post-incident forensics found a further vulnerability enabling the attack -- so a disclosure arrived, was handled, and the underlying class of weakness persisted. The blast radius was destructive rather than confidential: the intruder turned the platform's own legitimate remote-wipe capability against enrolled endpoints across North America, Europe and Singapore, and the vendor's containment option was to take the whole platform offline, which itself locked customers out. MOE terminated the contract and pursued legal action against the contractors, and the destruction fell on students who had no recovery path for locally stored work.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "moe.gov.sg",
        "url": "https://www.moe.gov.sg/news/press-releases/20240805-mobile-guardian-device-management-application-to-be-removed-from-personal-learning-devices"
      },
      {
        "label": "techcrunch.com",
        "url": "https://techcrunch.com/2024/08/09/student-raised-security-concerns-in-mobile-guardian-mdm-weeks-before-cyberattack"
      },
      {
        "label": "mothership.sg",
        "url": "https://mothership.sg/2024/09/moe-contractors-legal-action-mobile-guardian/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/hacker-wipes-13-000-devices-after-breaching-classroom-management-platform/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/166710/hacking/mobile-guardian-firm-security-breach.html"
      },
      {
        "label": "channelnewsasia.com",
        "url": "https://www.channelnewsasia.com/singapore/mobile-guardian-ipad-chromebook-hacking-how-recover-data-4532181"
      },
      {
        "label": "arstechnica.com",
        "url": "https://arstechnica.com/security/2024/08/students-scramble-after-security-breach-wipes-13000-devices/"
      },
      {
        "label": "mobileguardian.com",
        "url": "https://www.mobileguardian.com/security-incident-august-2024/"
      },
      {
        "label": "tomshw.it",
        "url": "https://www.tomshw.it/hardware/hacker-cancella-da-remoto-13000-dispositivi-scolastici"
      },
      {
        "label": "teknofilo.com",
        "url": "https://www.teknofilo.com/un-hacker-borra-remotamente-miles-de-ipads-y-chromebooks-de-estudiantes/"
      },
      {
        "label": "channelnewsasia.com",
        "url": "https://www.channelnewsasia.com/singapore/mobile-guardian-hacking-singapore-cybersecurity-moe-secondary-schools-ipad-4536331"
      },
      {
        "label": "cybersecasia.net",
        "url": "https://cybersecasia.net/newsletter/in-mobile-device-usage-management-who-guards-the-guardian/"
      },
      {
        "label": "research.checkpoint.com",
        "url": "https://research.checkpoint.com/2024/12th-august-threat-intelligence-report/"
      },
      {
        "label": "manilatimes.net",
        "url": "https://www.manilatimes.net/2024/08/25/business/sunday-business-it/singapore-malaysia-to-update-cybersecurity-stance/1966524"
      },
      {
        "label": "channelnewsasia.com",
        "url": "https://www.channelnewsasia.com/singapore/mobile-guardian-moe-contract-terminated-cybersecurity-breach-4595056"
      },
      {
        "label": "channelnewsasia.com",
        "url": "https://www.channelnewsasia.com/singapore/mobile-guardian-cybersecurity-breach-attack-legal-action-contractors-chan-chun-sing-4597791"
      }
    ],
    "notes": "Attacker unattributed. MOE states the May-reported super-admin flaw was fixed before 4 August and that forensics identified a different, new vulnerability; the two accounts are recorded here as reported rather than reconciled."
  },
  {
    "id": "3528",
    "year": 2024,
    "name": "Northern Minerals Data Theft (BianLian, 2024)",
    "breachType": "Data theft / extortion",
    "resultKey": "execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Northern Minerals (Australian heavy rare earths producer, Browns Range project)",
    "actor": "BianLian (financially motivated; Australian government sources assess likely Russia-based)",
    "countries": [
      "Australia"
    ],
    "sectors": [
      "Corporate Targets"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M3",
    "secondaryMarkers": [
      "M8",
      "M12",
      "M13",
      "M6"
    ],
    "summary": "Northern Minerals, an Australian mining company, has disclosed on 4 June 2024 that it became the victim of a ransomware attack in late March. \nThe company has several active projects in Australia involving the development of rare earth materials, which are important for the production of batteries and other electronics. \nThe ransomware group BianLian claimed responsibility for the attack in which it allegedly acquired operational details, Australian and foreign project documents, research and development data, financial information, personal data of employees, data of shareholders and potential investors as well as email archives of Northern Minerals' chairman and those of the executive director and CFO. According to BleepingComputer, the publication of the data indicates that Northern Minerals refused to pay the ransom. \nThe leak followed instructions by the Australian Department of the Treasure to companies with links to China to sell their shares in the company. \nThe Australian shadow Minister for Home Affairs, James Paterson, wrote on X that if it is confirmed that the attack was sponsored by a state actor, a robust response is warranted.",
    "rationale": "Northern Minerals is doctrinally designated as nationally strategic -- the Treasurer ordered China-linked investors to divest a 10.4% holding, FIRB scrutiny was ongoing, and Browns Range dysprosium/terbium output underpins an Iluka offtake backed by ~A$1.6bn of government funding -- while materially operating as a junior explorer (~A$2.5m revenue) resourced accordingly. The gap shows across the lifecycle rather than at the entry point. Blast radius: one intrusion reached the entire estate at once, including geological and competitor research, R&D, financial and operational data, employee and shareholder records, and the complete mailboxes of the executive chairman, executive director and CFO -- some 1.65TB -- so no tiering protected precisely the strategic data the national-interest designation exists to safeguard. Egress: an exfiltration of that volume was neither prevented nor stopped in progress. Disclosure: the company knew in late March 2024 and notified the ACSC and OAIC promptly, but market disclosure followed only on 4 June 2024, prompted by its own consultant finding the data on the dark web rather than by its own assessment, with individual notification still 'underway and ongoing' at that date -- roughly ten weeks on, at an ASX-listed entity under prompt-disclosure obligations. Recovery was not the constraint: BianLian encrypts nothing, so backups were irrelevant and mining operations continued, which is precisely why containment and egress control rather than restore capability were the decisive gaps. A secondary Strategy-to-Leadership tension exists: the Chairman's 6 June AGM address states the company supported those whose data had been breached as soon as it became aware, which sits awkwardly against the 4 June filing recording individual notification as still in progress. Expertise to Execution is secondary only: BianLian's documented pattern is compromised or purchased RDP credentials, not incident-confirmed and no longer load-bearing.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "cyberdaily.au",
        "url": "https://www.cyberdaily.au/security/10662-exclusive-aussie-rare-earth-metals-producer-northern-minerals-confirms-ransomware-attack"
      },
      {
        "label": "announcements.asx.com.au",
        "url": "https://announcements.asx.com.au/asxpdf/20240606/pdf/064bh7vf4rzdds.pdf"
      },
      {
        "label": "nsw.gov.au",
        "url": "https://www.nsw.gov.au/id-support-nsw/learn/data-breaches/data-breach-announcements/northern-minerals-limited-data-breach"
      },
      {
        "label": "teiss.co.uk",
        "url": "https://www.teiss.co.uk/news/australian-mining-giant-northern-minerals-suffers-a-major-data-breach-14162"
      },
      {
        "label": "thenightly.com.au",
        "url": "https://thenightly.com.au/business/mining/another-twist-in-the-northern-minerals-saga-as-sources-say-hack-was-almost-certainly-not-from-china-c-15089232"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/australian-mining-company-discloses-breach-after-bianlian-leaks-data/"
      },
      {
        "label": "rnd.de",
        "url": "https://www.rnd.de/wirtschaft/australien-hackerangriff-auf-firma-einen-tag-nach-rauswurf-von-china-investor-A74RGHIMVFDKHFFQ7HPVFRJBBA.html"
      },
      {
        "label": "abc.net.au",
        "url": "https://www.abc.net.au/news/2024-06-04/rare-earths-miner-targeted-in-cyber-attack/103934020"
      },
      {
        "label": "x.com",
        "url": "https://x.com/SenPaterson/status/1797883102586712574"
      },
      {
        "label": "wcsecure.weblink.com.au",
        "url": "https://wcsecure.weblink.com.au/pdf/NTU/02814126.pdf"
      }
    ],
    "notes": "Entry vector unconfirmed and deliberately not load-bearing (Prompt8). The 1.65TB figure is BianLian's own claim; data categories are corroborated by the ASX filing. Government sources assess the perpetrators as likely Russia-based and financially motivated despite the coincidental timing with the divestment order."
  },
  {
    "id": "3449",
    "year": 2024,
    "name": "UK MoD Payroll Data Theft (Suspected China-linked, 2024)",
    "breachType": "Data theft / espionage",
    "resultKey": "execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "UK Ministry of Defence armed-forces payroll data, processed by contractor Shared Services Connected Ltd (SSCL)",
    "actor": "Suspected Chinese state-linked actor (attribution reported by UK government sources, not formally confirmed)",
    "countries": [
      "United Kingdom"
    ],
    "sectors": [
      "Corporate Targets",
      "State institutions / political system"
    ],
    "subSectors": [
      "Not available",
      "Government / ministries"
    ],
    "primaryMarker": "M7",
    "secondaryMarkers": [
      "M1",
      "M4"
    ],
    "summary": "According to the British Minister of Defence, \"malicious actors\" accessed the data of UK service members from a database of the Ministry of Defence in late April 2024 through infiltrating an external contractor's systems. The attackers were likely linked to the People's Republic of China, according to Sky News and the BBC, citing unnamed members of parliament following a briefing by the Defence Minister Grant Shapps. As of 8 May 2024, the link to China is unconfirmed by the British government. Without directly linking China to the attack, Prime Minister Rishi Sunak noted in his remarks that, although an unnamed \"malicious actor\" was behind the attack, \"[. . .] we need to take the powers which we have done to protect ourselves against the risk that China and other countries pose to us [. . .] they are a country with fundamentally different values to ours that are acting in a way that is more authoritarian and assertive abroad.\"\n\nThe accessed data was primarily banking data from roughly 270,000 current and former British service members, with the data being accessed through a payroll database of the UK Ministry of Defence through an external contractor. The contractor impacted was Shared Services Connected, Ltd.\n\nAccording to Sky News, Tobias Ellwood, a current Member of Parliament and former soldier, worried that China's intention was to use stolen banking data to try to bribe financially-strapped soldiers into providing the PRC intelligence.",
    "rationale": "The MoD held the doctrinal duty of care over serving and former personnel's payroll and bank details but had outsourced the processing entirely to SSCL, and the decisive gap is that this dependency was never independently assured: the Defence Secretary told Parliament that 'potential failings' by the contractor may have made it easier for the actor to gain entry. The MoD therefore had neither visibility into, nor control over, the security posture of the system holding some of its most sensitive personnel data, and only learned of the exposure through the incident itself. Containment on the customer side was decisive once known -- the payroll system was taken offline and an eight-point response plan announced -- but that is remediation after the fact of a structural arrangement in which a single contractor's weakness exposed the personnel records of the armed forces. The gap is doctrinal-to-material: outsourcing policy assumed a secure supplier without the assurance regime that assumption required.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "csoonline.com",
        "url": "https://www.csoonline.com/article/2099498/suspected-chinese-hack-of-britains-ministry-of-defence-payroll-linked-to-government-contractor-minister-confirms.html"
      },
      {
        "label": "karar.com",
        "url": "https://www.karar.com/dunya-haberleri/ingiltere-savunma-bakanligina-siber-saldiri-1860955"
      },
      {
        "label": "tokyo-np.co.jp",
        "url": "https://www.tokyo-np.co.jp/article/325739?rct=world"
      },
      {
        "label": "fr.news.yahoo.com",
        "url": "https://fr.news.yahoo.com/minist%C3%A8re-d%C3%A9fense-britannique-touch%C3%A9-cyberattaque-081525714.html"
      },
      {
        "label": "milligazete.com.tr",
        "url": "https://www.milligazete.com.tr/haber/20102053/ingiltere-savunma-bakanligi-hacklendi-askeri-bilgiler-calindi"
      },
      {
        "label": "h24info.ma",
        "url": "https://www.h24info.ma/cyberattaque-au-coeur-du-ministere-britannique-de-la-defense/"
      },
      {
        "label": "hackread.com",
        "url": "https://www.hackread.com/china-cyberattack-uk-ministry-of-defence-mod/"
      },
      {
        "label": "gazeteduvar.com.tr",
        "url": "https://www.gazeteduvar.com.tr/ingiltere-savunma-bakanligi-hacklendi-askerlerin-bilgileri-ifsa-oldu-haber-1689466"
      },
      {
        "label": "nyheder.tv2.dk",
        "url": "https://nyheder.tv2.dk/udland/2024-05-07-kina-staar-bag-massivt-hackerangreb-mod-britisk-forsvarsministerium-erfarer-medie"
      },
      {
        "label": "dunya.com",
        "url": "https://www.dunya.com/dunya/ingiliz-savunma-bakanligina-siber-saldiri-haberi-725726"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Grossbritannien-Gehaltsabrechnungssystem-des-Militaers-gehackt-wohl-von-China-9710040.html?wt_mc=rss.red.ho.ho.rdf.beitrag.beitrag"
      },
      {
        "label": "journaldequebec.com",
        "url": "https://www.journaldequebec.com/2024/05/07/royaume-uni-le-ministere-de-la-defense-victime-dune-cyberattaque"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/uk-confirms-ministry-of-defence-payroll-data-exposed-in-data-breach/"
      },
      {
        "label": "bbc.co.uk",
        "url": "https://www.bbc.co.uk/news/uk-68967805"
      },
      {
        "label": "rfi.fr",
        "url": "https://www.rfi.fr/cn/%E5%9B%BD%E9%99%85/20240507-%E8%8B%B1%E9%A6%96%E7%9B%B8%E6%89%BF%E8%AE%A4%E6%81%B6%E6%84%8F%E8%A1%8C%E4%B8%BA%E8%80%85%E5%85%A5%E4%BE%B5%E4%BA%86%E8%8B%B1%E5%86%9B%E8%96%AA%E8%B5%84%E7%B3%BB%E7%BB%9F-%E6%8B%92%E7%BB%9D%E7%82%B9%E5%90%8D%E4%B8%AD%E5%9B%BD"
      },
      {
        "label": "finance.ifeng.com",
        "url": "https://finance.ifeng.com/c/8ZOzEpwmCrw"
      },
      {
        "label": "rfi.fr",
        "url": "https://www.rfi.fr/es/m%C3%A1s-noticias/20240507-el-ministerio-de-defensa-brit%C3%A1nico-v%C3%ADctima-de-un-ciberataque"
      },
      {
        "label": "fukuishimbun.co.jp",
        "url": "https://www.fukuishimbun.co.jp/articles/-/2032683"
      },
      {
        "label": "lajornadanet.com",
        "url": "https://www.lajornadanet.com/mundo/sky-news-china-hackea-al-ministerio-de-defensa-britanico/"
      },
      {
        "label": "hokkoku.co.jp",
        "url": "https://www.hokkoku.co.jp/articles/-/1392674"
      },
      {
        "label": "abcgazetesi.com",
        "url": "https://abcgazetesi.com/savunma-bakanliginin-sistemi-hacklendi-cinin-izleri-mi-743778"
      },
      {
        "label": "tamindir.com",
        "url": "https://www.tamindir.com/haber/ingiltere-savunma-bakanligi-hacklendi_87923/"
      },
      {
        "label": "krone.at",
        "url": "https://www.krone.at/3366409"
      },
      {
        "label": "noticiassin.com",
        "url": "https://noticiassin.com/china-hackea-al-ministerio-de-defensa-britanico-1636593/"
      },
      {
        "label": "amp.today.it",
        "url": "https://amp.today.it/mondo/hackerato-ministero-difesa-regno-unito-sospetti-cina.html"
      },
      {
        "label": "ekonomim.com",
        "url": "https://www.ekonomim.com/dunya/ingiltere-savunma-bakanliginin-maas-sistemine-siber-saldiri-sistem-kapatildi-haberi-741525"
      },
      {
        "label": "canal13sanjuan.com",
        "url": "https://www.canal13sanjuan.com/mundo/2024/5/7/bbc-china-hackeo-el-ministerio-de-defensa-britanico-226333.html"
      },
      {
        "label": "tomshw.it",
        "url": "https://www.tomshw.it/altro/grave-furto-di-dati-al-ministero-della-difesa-inglese-cina-sotto-accusa"
      },
      {
        "label": "ekstrabladet.dk",
        "url": "https://ekstrabladet.dk/nyheder/medier-kina-har-hacket-storbritannien/10224052"
      },
      {
        "label": "abc.es",
        "url": "https://www.abc.es/internacional/acusan-china-ciberataque-acceder-datos-personales-soldados-20240507094359-nt.html"
      },
      {
        "label": "theguardian.com",
        "url": "https://www.theguardian.com/technology/article/2024/may/06/uk-military-personnels-data-hacked-in-mod-payroll-breach"
      },
      {
        "label": "abcgazetesi.com",
        "url": "https://abcgazetesi.com/cinli-hackerlar-ingiltere-savunma-bakanligina-siber-saldiri-duzenledi-asker-bilgiler-cali-743756"
      },
      {
        "label": "lemonde.fr",
        "url": "https://www.lemonde.fr/international/article/2024/05/07/royaume-uni-une-cyberattaque-touche-le-ministere-de-la-defense_6232055_3210.html"
      },
      {
        "label": "news.kbs.co.kr",
        "url": "https://news.kbs.co.kr/news/view.do?ncd=7957780"
      },
      {
        "label": "krone.at",
        "url": "https://www.krone.at/3366406"
      },
      {
        "label": "letelegramme.fr",
        "url": "https://www.letelegramme.fr/monde/le-ministere-britannique-de-la-defense-victime-dune-cyberattaque-la-chine-rejette-sa-responsabilite-6579922.php"
      },
      {
        "label": "sudouest.fr",
        "url": "https://www.sudouest.fr/international/chine/le-ministere-de-la-defense-britannique-victime-d-une-cyberattaque-la-chine-accusee-dement-vivement-19614732.php"
      },
      {
        "label": "tvsantiago.icrt.cu",
        "url": "https://www.tvsantiago.icrt.cu/2024/05/piratean-base-de-datos-del-ministerio-de-defensa-britanico/"
      },
      {
        "label": "es-us.noticias.yahoo.com",
        "url": "https://es-us.noticias.yahoo.com/supuesto-ciberataque-chino-acceso-datos-100637226.html"
      },
      {
        "label": "tagesschau.de",
        "url": "https://www.tagesschau.de/ausland/europa/cyberangriff-grossbritannien-verteidigungsministerium-100.html"
      },
      {
        "label": "lorientlejour.com",
        "url": "https://www.lorientlejour.com/article/1412899/pekin-accuse-dune-cyberattaque-au-royaume-uni-une-absurdite-totale-affirme-la-chine.html"
      },
      {
        "label": "karar.com",
        "url": "https://www.karar.com/teknoloji-haberleri/cin-ingiltere-savunma-bakanligini-hackledi-buyuk-veri-ihlali-ortaya-1861051"
      },
      {
        "label": "cumhuriyet.com.tr",
        "url": "https://www.cumhuriyet.com.tr/dunya/londra-alarmda-siber-saldirganlar-ingiliz-ordusunu-hedef-aldi-2203987"
      },
      {
        "label": "news.ifeng.com",
        "url": "https://news.ifeng.com/c/8ZOhJF4xB1a"
      },
      {
        "label": "news.sky.com",
        "url": "https://news.sky.com/story/china-calls-accusations-it-hacked-mod-completely-fabricated-and-malicious-slanders-13130985#:~:text=%22We%20strongly%20oppose%20such%20accusations,other%20countries%20without%20factual%20evidence."
      },
      {
        "label": "bbc.com",
        "url": "https://www.bbc.com/news/uk-68967805"
      },
      {
        "label": "voachinese.com",
        "url": "https://www.voachinese.com/a/uk-mod-data-hacked-china/7602420.html"
      },
      {
        "label": "digitalreport.com.tr",
        "url": "https://digitalreport.com.tr/ingiltere-savunma-bakanligi-siber-saldiriya-ugradi-158810/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/162840/data-breach/uk-ministry-of-defense-third-party-data-breach.html"
      },
      {
        "label": "infobae.com",
        "url": "https://www.infobae.com/america/mundo/2024/05/08/china-fue-senalada-como-responsable-de-un-ciberataque-que-afecto-a-miles-de-soldados-marineros-y-pilotos-britanicos/"
      },
      {
        "label": "haberekspres.com.tr",
        "url": "https://www.haberekspres.com.tr/londrada-siber-saldiri-savunma-bakanligindan-hassas-veriler-calindi"
      },
      {
        "label": "japantimes.co.jp",
        "url": "https://www.japantimes.co.jp/news/2024/05/08/asia-pacific/politics/china-hacks-uk-defense-personnel/"
      },
      {
        "label": "french.china.org.cn",
        "url": "http://french.china.org.cn/china/txt/2024-05/08/content_117174057.htm"
      },
      {
        "label": "voachinese.com",
        "url": "https://www.voachinese.com/a/malign-actor-hacked-uk-defense-ministry-payroll-sunak-says-after-china-reports-20240507/7601166.html"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Cyberangriffe-Abrechnungssystem-britischer-Armee-und-Testsystem-bei-Zscaler-9714701.html?wt_mc=rss.red.ho.beitrag.rdf.beitrag.beitrag"
      },
      {
        "label": "computerworld.dk",
        "url": "https://www.computerworld.dk/art/287246/det-britiske-militaer-ramt-af-cyberangreb-personlige-oplysninger-laekket"
      },
      {
        "label": "research.checkpoint.com",
        "url": "https://research.checkpoint.com/2024/13th-may-threat-intelligence-report/"
      },
      {
        "label": "uk.news.yahoo.com",
        "url": "https://uk.news.yahoo.com/chinese-nationalist-groups-launching-cyber-134239150.html"
      },
      {
        "label": "dailymail.co.uk",
        "url": "https://www.dailymail.co.uk/news/article-13416483/china-genuine-increasing-cyber-risk-uk-beijing-hackers-internet-secure.html"
      },
      {
        "label": "haberler.com",
        "url": "https://www.haberler.com/guncel/cin-buyukelcisi-ingiltere-disisleri-bakanligina-cagrildi-17326975-haberi/"
      },
      {
        "label": "politico.eu",
        "url": "https://www.politico.eu/article/uk-summons-chinese-ambassador-zheng-zeguang-complain-about-spying-after-three-people-charged-assisting-hong-kong-intelligence/"
      }
    ],
    "notes": "Attribution to a Chinese state-linked actor was reported by UK government sources and not formally confirmed by ministers in the parliamentary statement."
  },
  {
    "id": "3419",
    "year": 2024,
    "name": "Ayesa Ransomware (Black Basta, 2024)",
    "breachType": "Ransomware attack",
    "resultKey": "none",
    "confidence": "1/5 — Indicative — case is atypical for the framework",
    "victim": "Ayesa (Spanish engineering and technology consultancy)",
    "actor": "Black Basta",
    "countries": [
      "Spain"
    ],
    "sectors": [
      "Corporate Targets"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "X",
    "secondaryMarkers": [],
    "summary": "The ransomware group BlackBasta is suspected to have targeted the consulting and engineering firm Ayesa, headquartered in Spain. The criminal collective disrupted access to several systems required to run tools Ayesa is offering to its customers as part of its business process outsourcing (BPO) services. These limitations affected the emergency response call management of the regional government of Andalusia, necessitating manual support to track calls. Ayesa initially expressed concerns about its ability to pay salaries to its 12,500 employees on schedule, noting that the servers used for processing payroll information had been corrupted. The company was able to restore access to payroll data in time.",
    "rationale": "This case functions as a counter-example rather than a dual vulnerability. Per INCIBE-CERT, Ayesa's own detection systems identified the intrusion and its backup procedures held, so the incident was confined to a limited number of corporate servers with no reported disruption to client-facing operations, and the company communicated the incident rather than concealing it. Across the observable lifecycle stages -- detection, containment, recovery and disclosure -- doctrine and execution were aligned, which is precisely the condition under which a dual vulnerability does not materialise. The entry vector was never disclosed, but here that absence is not what blocks classification: there is no evidenced victim-side gap to classify. Retained in the dataset as a negative case, useful for contrast in cross-case analysis.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "vozpopuli.com",
        "url": "https://www.vozpopuli.com/espana/andalucia/grupo-black-basta-ciberataque-ayesa.html"
      },
      {
        "label": "diariodesevilla.es",
        "url": "https://www.diariodesevilla.es/economia/Ayesa-Policia-publicacion-Dark-Web_0_1909011015.html"
      },
      {
        "label": "andaluciainformacion.es",
        "url": "https://andaluciainformacion.es/rota/1699917/la-plantilla-formaliza-la-denuncia-contra-ayesa-at-ante-la-agencia-de-proteccion-de-datos/"
      }
    ],
    "notes": "Negative case: no victim-side gap evidenced across detection, containment, recovery or disclosure. Valuable as a contrast case in cross-case pattern matching."
  },
  {
    "id": "3344",
    "year": 2023,
    "name": "Greylock McKinnon Data Theft (Unattributed, 2023)",
    "breachType": "Data theft / extortion",
    "resultKey": "execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Greylock McKinnon Associates (US litigation-support consultancy), holding US Department of Justice-supplied Medicare data on 341,650 individuals",
    "actor": "Unattributed",
    "countries": [
      "United States"
    ],
    "sectors": [
      "Corporate Targets",
      "State institutions / political system"
    ],
    "subSectors": [
      "Not available",
      "Government / ministries"
    ],
    "primaryMarker": "M7",
    "secondaryMarkers": [
      "M10",
      "M13",
      "M11"
    ],
    "summary": "Unknown threat actors breached data of Greylock McKinnon Associates on 30 May 2023. This data breach affected personal data such as name, date of birth, address, social security number and health insurance information of about 341,650 US citizens. The data was originally requested by the US Department of Justice as part of a civil litigation matter. The company received the information of the impacted individuals in their provision of services to the DOJ in support of that matter. The incident was discovered on 7 February 2024, while the official notification was published almost two months later on 5 April 2024.",
    "rationale": "The DOJ transferred Medicare records of 341,650 people -- including Health Insurance Claim Numbers containing Social Security numbers, plus medical and insurance data -- to a litigation-support consultancy for a civil matter in which those individuals were not even parties. Because neither the DOJ nor GMA is a HIPAA-covered entity or business associate, that data sat outside the HIPAA protection perimeter once transferred, so the doctrinal expectation that federally held health data is protected was not matched by any equivalent obligation on the contractor actually holding it. The response stages then compound the gap: GMA detected unusual network activity on 30 May 2023 and notified law enforcement and the DOJ promptly, but the forensic review only established whose data was affected on 7 February 2024, and affected individuals were notified from 5-8 April 2024 -- around ten months after detection, a lag that is itself the subject of class-action claims alleging breach of state and federal notification law. The entry vector was never disclosed and is not load-bearing: the classification rests on the custody arrangement and the notification timeline.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "techcrunch.com",
        "url": "https://techcrunch.com/2024/04/08/hackers-stole-340000-social-security-numbers-from-government-consulting-firm"
      },
      {
        "label": "oag.ca.gov",
        "url": "https://oag.ca.gov/system/files/GMA%20Individual%20DOJ%20Notice%20English%204.5.pdf"
      },
      {
        "label": "hipaajournal.com",
        "url": "https://www.hipaajournal.com/medicare-data-exposed-in-data-breach-at-boston-consulting-firm/"
      },
      {
        "label": "fedscoop.com",
        "url": "https://fedscoop.com/doj-not-aware-of-identity-theft-following-consultant-breach/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/161592/data-breach/greylock-mckinnon-associates-data-breach.html"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/doj-data-leaked-in-attack-on-consulting-firm"
      },
      {
        "label": "apps.web.maine.gov",
        "url": "https://apps.web.maine.gov/online/aeviewer/ME/40/865575ae-973b-4430-a06c-d780da040c74.shtml"
      },
      {
        "label": "doj.nh.gov",
        "url": "https://www.doj.nh.gov/consumer/security-breaches/documents/greylock-mckinnon-associates-20240223.pdf"
      },
      {
        "label": "s3.documentcloud.org",
        "url": "https://s3.documentcloud.org/documents/24536240/gma-individual-doj-notice-english-45.pdf"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/161806/breaking-news/security-affairs-newsletter-round-467-by-pierluigi-paganini-international-edition.html"
      }
    ],
    "notes": "Dates taken from GMA's own notification letter filed with state attorneys general. The HIPAA-perimeter point is from HIPAA Journal's analysis. Class-action filings allege the notification delay violated state and federal law; that is an allegation, not a finding."
  },
  {
    "id": "3052",
    "year": 2021,
    "name": "Togo Journalists Spyware (Suspected state client, 2021)",
    "breachType": "Spyware / surveillance",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Anani Sossou (journalist, Togo) and Loic Lawson (editor, Le Flambeau des Democrates, Togo)",
    "actor": "Unattributed state client of NSO Group (Togolese state authorities suspected; not confirmed)",
    "countries": [
      "Togo"
    ],
    "sectors": [
      "Media"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M3",
    "secondaryMarkers": [
      "M5"
    ],
    "summary": "According to a report by Reporters Without Borders (RWB) in January 2024, the state of Togo is suspected of spying on the phones of Togolese journalists Loic Lawson and Anani Sossou in 2021 using the spyware Pegasus developed by the Israeli company NSO Group. The phone of Loic Lawson, director of the independent Togolese newspaper \"Flambeau des démocrates\", was infected at least during the period of 1 February and 10 July 2021, according to an investigation by RWB's Berlin-based Digital Security Lab. The phone of independent journalist Anani Sossou was targeted several months later, on 25 October 2021. An analysis by Amnesty International's Security Lab had previously confirmed the state of Togo as a Pegasus customer. RWB had been working on the cases of the two Togolese journalists since early December 2023. At that time, the two had spent 18 days in detention after the Togolese Minister of Urbanism, Housing and Land Reform, Kodjo Adedze, brought unspecified defamation charges against them over reporting related to a break-in at the minister's private residence.",
    "rationale": "The targets were individual journalists, not organisations, which changes where the gap can sit. Pegasus infections of this kind exploit unpatched or zero-day mobile OS weaknesses through zero-click delivery, so at the exposure stage the individuals had no practical control: no configuration choice or user behaviour would have prevented it. At the detection stage the asymmetry is the same -- the infections surfaced only because RSF's Digital Security Lab and, independently, Amnesty International's Security Lab performed forensic analysis on the devices, not through anything available to the journalists themselves. The material gap is therefore a structural capability constraint: high-risk individuals in a repressive context carry state-grade threat exposure with consumer-grade defences and no institutional security function, and the remedy sits with platform patching and spyware-vendor accountability rather than with anything the targets could execute.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "netzpolitik.org",
        "url": "https://netzpolitik.org/2024/ueberwachung-mit-staatstrojanern-erstmals-pegasus-infektionen-in-togo-enthuellt/"
      },
      {
        "label": "reporter-ohne-grenzen.de",
        "url": "https://www.reporter-ohne-grenzen.de/pressemitteilungen/meldung/zwei-journalisten-mit-pegasus-spyware-angegriffen"
      }
    ],
    "notes": "Independent forensic confirmation by two labs (RSF Digital Security Lab and Amnesty International Security Lab). The operating state client is suspected but not confirmed."
  },
  {
    "id": "3250",
    "year": 2023,
    "name": "Rashim Software Data Theft (Lord Nemesis, 2023)",
    "breachType": "Data theft / espionage",
    "resultKey": "execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Rashim Software, Ltd.",
    "actor": "Lord Nemesis",
    "countries": [
      "Israel"
    ],
    "sectors": [
      "Education",
      "Corporate Targets"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M7",
    "secondaryMarkers": [
      "M6",
      "M1",
      "M11"
    ],
    "summary": "Lord Nemesis, an Iran-funded hacktivist group and subgroup of APT35, was observed by the Israeli cybersecurity company OP Innovate as infiltrating the systems of Rashim Software, an Israeli academic software company, in November 2023. \nAccording to OP Innovate, the hacktivists' goal was to intimidate victims, which they managed to access through the breach of Rashim. According to both Lord Nemesis, in a post made on its website, and OP Innovate, the group was able to gain access to Rashim's systems and utilise an admin account to access clients through the use of a VPN, enabled through the unauthorised access to one of the company's products, Michlol. The abuse of Michlol and the subsequent connection to the VPN enabled the group to exfiltrate data. Furthermore, Lord Nemesis was able to compromise Rashim's Office 365 infrastructure, allowing them to send emails to the academic institutions utilising Rashim's software and Michlol in particular. On 4 March 2024, Lord Nemesis claimed to have leaked sensitive information obtained from Israeli academic institutions as part of the operation.",
    "rationale": "Israeli academic institutions delegated identity and access management for student and staff systems to a shared sector vendor, Rashim Software, without independently verifying that vendor's own administrative security. Entry: Lord Nemesis hijacked an admin account at the vendor. Blast radius: that single account then reached into the vendor's university and college customers, so a boundary that existed contractually did not exist technically -- Op Innovate characterised it explicitly as a supply chain attack. Detection and dwell: the compromise was identified by an external incident-response firm rather than by the institutions, several months after the vendor breach. The decisive victim-side condition is sector-wide concentration: a narrow vendor ecosystem serving many institutions means one vendor's credential hygiene sets the floor for an entire sector's identity layer, and no customer had assurance over it.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "op-c.net",
        "url": "https://op-c.net/blog/lord-nemesis-strikes-supply-chain-attack-on-the-israeli-academic-sector/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/iran-linked-lord-nemesis-hacktivists-target-israel"
      }
    ]
  },
  {
    "id": "3095",
    "year": 2019,
    "name": "35 members of civil society in Spyware (Not attributed, 2019)",
    "breachType": "Spyware / surveillance",
    "resultKey": "expertise-execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "35 members of civil society in Jordan",
    "actor": "Not attributed",
    "countries": [
      "Jordan",
      "Not available"
    ],
    "sectors": [
      "Unknown",
      "Social groups",
      "Corporate Targets",
      "State institutions / political system",
      "Media"
    ],
    "subSectors": [
      "Not available",
      "Advocacy / activists (e.g. human rights organizations)"
    ],
    "primaryMarker": "M3",
    "secondaryMarkers": [
      "M5",
      "M7"
    ],
    "summary": "A partnership of civil society organisations identified 35 individuals in Jordan, including activists, journalists, and lawyers, that were targeted with the NSO Group's Pegasus spyware between 2019 and September 2023. During 2022 and 2023, Access Now's Digital Security Helpline, in collaboration with the Citizen Lab, conducted a forensic investigation confirming the deployment of NSO Group's Pegasus spyware against nine devices of members of Jordan's civil society. The investigation identified traces of Pegasus' zero-click and one-click exploits on iOS devices (specifically, PWNYOURHOME, FINDMYPWN, FORCEDENTRY, and BLASTPASS). For an additional 21 individuals, the probe confirmed forensic findings indicating that they had been targeted. Investigative partners at Human Rights Watch, Amnesty International’s Security Lab, and the Organized Crime and Corruption Reporting Project identified five further victims.\nAffected individuals that agreed to be identified include Adam Coogle and Hiba Zayadin of Human Rights Watch, focusing on Middle East and North Africa issues; Manal Kasht, a Jordanian translator and civil society activist; lawyers Omar Atout, Hala Ahed, Alaa Al-Hiyari, Jamal Jeet, Asem Al-Omari, and Loay Obeidat, known for their activism and legal defense of human rights; journalists Rana Sabbagh of the Organized Crime and Corruption Reporting Project (OCCRP) and Daoud Kuttab, a Palestinian-American media activist, along with Lara Dihmis, also from OCCRP; and Hosam Gharaibeh, director of Husna Radio. Out of privacy and safety concerns, the identities of the remaining victims were not disclosed.",
    "rationale": "Thirty-five members of Jordanian civil society -- journalists, lawyers, activists -- targeted with Pegasus. As with the other individual-target cases in this dataset, the lifecycle relocates away from the victim: Access Now and Citizen Lab's joint forensics establish zero-click and one-click iOS exploit chains (FORCEDENTRY, FINDMYPWN, PWNYOURHOME, BLASTPASS), i.e. unpatched or then-unknown platform vulnerabilities against which no user configuration or behaviour offers a defence. Detection came only through external forensic labs. Blast radius is the distinguishing feature here: with 35 targets across one civil-society community, compromise of any one device exposes the contacts, sources and movements of the whole network, so the effective impact is collective even though each infection is individual. The material gap is a structural capability constraint plus the absence of any accountability regime over commercial spyware vendors and their state clients.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "accessnow.org",
        "url": "https://www.accessnow.org/publication/between-a-hack-and-a-hard-place-how-pegasus-spyware-crushes-civic-space-in-jordan/"
      },
      {
        "label": "apnews.com",
        "url": "https://apnews.com/article/jordan-hacking-pegasus-spyware-nso-group-99b0b1e4ee256e0b4df055f926349a43#"
      },
      {
        "label": "accessnow.org",
        "url": "https://www.accessnow.org/wp-content/uploads/2024/01/Public-Pegasus-infections-in-Jordan-in-2022-and-2023-a-technical-brief.pdf"
      },
      {
        "label": "citizenlab.ca",
        "url": "https://citizenlab.ca/2024/02/confirming-large-scale-pegasus-surveillance-of-jordan-based-civil-society/"
      },
      {
        "label": "netzpolitik.org",
        "url": "https://netzpolitik.org/2024/spionagetechnologie-in-jordanien-mehr-spionageopfer-durch-staatstrojaner-pegasus/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/visa-travel-commercial-spyware/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/google-governments-need-to-do-more-to-combat-commercial-spyware/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/159847/security/nso-group-vs-meta-pegasus-hand-over.html"
      }
    ],
    "notes": "Web-verified (14-08-26) via Access Now + Citizen Lab joint investigation."
  },
  {
    "id": "2750",
    "year": 2023,
    "name": "Unspecified Israeli entities Wiper Attack (Pro-Hamas hacktivist group, n.d.)",
    "breachType": "Destructive wiper attack",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Unspecified Israeli entities",
    "actor": "Pro-Hamas hacktivist group",
    "countries": [
      "Israel"
    ],
    "sectors": [
      "Unknown"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [
      "M9"
    ],
    "summary": "A pro-Hamas hacktivist group targeted Linux systems belonging to Israeli companies with updated BiBi-Linux wiper malware. The malware conducts file corruption by overwriting files with useless data, damaging both the data and the operating system. Windows versions of the wiper have subsequently been deployed.",
    "rationale": "Unspecified Israeli entities compromised via internet-facing systems during the wartime hacktivist surge. Exposure: a public-facing service was exploited, indicating a discoverable and remediable weakness on the perimeter. Recovery is the stage that distinguishes this case: pro-Hamas hacktivist operations of this period deployed destructive payloads rather than extortion, so there was no decryption path and restoration depended entirely on isolated backups, in an environment where the volume of concurrent attacks stretched national response capacity. Because the victims are unnamed, nothing is available on their detection, containment or disclosure, so confidence is capped and the classification rests on the exposure and recovery stages alone.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/new-bibi-linux-wiper-malware-targets-israeli-orgs-in-destructive-attacks/"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/10/pro-hamas-hacktivists-targeting-israeli.html"
      },
      {
        "label": "hackread.com",
        "url": "https://www.hackread.com/hamas-hackers-israeli-bibi-linux-wiper-malware/"
      },
      {
        "label": "securityjoes.com",
        "url": "https://www.securityjoes.com/post/bibi-linux-a-new-wiper-dropped-by-pro-hamas-hacktivist-group"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/153341/malware/pro-hamas-group-bibi-linux-wiper.html"
      },
      {
        "label": "research.checkpoint.com",
        "url": "https://research.checkpoint.com/2023/6th-november-threat-intelligence-report/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/the-week-in-ransomware-november-3rd-2023-hives-back/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/156065/hacktivism/pro-israel-predatory-sparrow-iran-fuel-stations.html"
      },
      {
        "label": "hackread.com",
        "url": "https://www.hackread.com/hamas-group-sysjoker-malware-leverages-onedrive/"
      },
      {
        "label": "services.google.com",
        "url": "https://services.google.com/fh/files/misc/tool-of-first-resort-israel-hamas-war-cyber.pdf"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/fake-f5-big-ip-zero-day-warning-emails-push-data-wipers/"
      }
    ],
    "notes": "Victims unnamed, so only two lifecycle stages are observable; confidence lowered from 4 to 3 accordingly."
  },
  {
    "id": "2670",
    "year": 2023,
    "name": "Foreign ministry of an ASEAN member Data Theft (Suspected Chinese state-sponsored hacking group, 2023)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Foreign ministry of an ASEAN member state; organisations in Mongolia",
    "actor": "Suspected Chinese state-sponsored hacking group",
    "countries": [
      "Mongolia",
      "Southeast Asia (region)"
    ],
    "sectors": [
      "Not available",
      "State institutions / political system"
    ],
    "subSectors": [
      "Not available",
      "Government / ministries"
    ],
    "primaryMarker": "M2",
    "secondaryMarkers": [
      "M6",
      "M11"
    ],
    "summary": "On 4 October 2023, the IT security firm Elastic Security Labs disclosed an intrusion set, tracked as REF5961, associated with a China-nexus actor targeting the foreign ministry of an ASEAN member state. \nElastic observed three malware families, EAGERBEE, RUDEBIRD and DOWNTOWN, being leveraged against two unspecified ASEAN-related victims. The samples investigated in the assessment of REF5961 were discovered in an environment where a second intrusion set, REF2924, was active in parallel. Elastic has not concluded whether both intrusion sets are operated by the same threat actor. As part of the analysis of REF5961 activity, Elastic disovered EAGERBEE samples that were used in a targeted campaign likely aimed at governmental entities or NGOs in Mongolian that exfiltrated data from affected organisations. Elastic linked these targeting efforts to REF2924.\nEAGERBEE samples identified by Elastic correlated with previous research on the Chinese state-sponsored hacking group APT27. A review of the implant DOWNTOWN showed overlaps in the victimology and similarities in code with the SManager/PhantomNet malware, previously attributed to the Chinese state-sponsored hacking group TA428.",
    "rationale": "A foreign ministry of an ASEAN member state, plus organisations in Mongolia, compromised by the China-nexus REF5961 intrusion set. Exposure: delivery was by email against a target whose data holdings -- diplomatic correspondence and negotiating positions -- carry state-level sensitivity, so the doctrinal expectation of protective monitoring is high. Persistence: Elastic Security Labs documents multiple custom malware families deployed and maintained, meaning this was not a single lure but sustained presence that endpoint and email controls did not surface. Detection: the intrusion set was characterised by an external research team rather than by the ministry. Blast radius: a diplomatic ministry's compromise exposes counterparties as well as itself, so the consequence extends to states that never had a relationship with the failing control.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "elastic.co",
        "url": "https://www.elastic.co/security-labs/introducing-the-ref5961-intrusion-set"
      }
    ]
  },
  {
    "id": "3002",
    "year": 2024,
    "name": "Ministry of Foreign Affairs Ransomware (Black Hunt, 2024)",
    "breachType": "Ransomware attack",
    "resultKey": "execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Ministry of Foreign Affairs (Paraguay), Tupi, Farmacenter, Tigo Business, Tigo Business",
    "actor": "Black Hunt",
    "countries": [
      "Not available",
      "Paraguay"
    ],
    "sectors": [
      "Unknown",
      "State institutions / political system",
      "Corporate Targets",
      "Critical infrastructure"
    ],
    "subSectors": [
      "Not available",
      "Government / ministries",
      "Health",
      "Telecommunications",
      "Digital Provider"
    ],
    "primaryMarker": "M6",
    "secondaryMarkers": [
      "M9",
      "M7",
      "M8"
    ],
    "summary": "Tigo Business, Paraguay's largest mobile operator, was hit by a cyberattack on 4 January 2024, which affected the provision of some of the company's services. The company, which also operates an enterprise division that provides cybersecurity consulting, cloud and data centre hosting for businesses, stressed that the incident had no impact on Internet and mobile services. Prior to the company's official confirmation of the incident, client companies were struggling with website outages. On 6 January, the Paraguayan foundation Ciberseguro, which investigated the incident, declared that the company had been affected by a ransomware attack that encrypted data on the company's server. Following the company's official statement, the General Directorate of Information and Communication Technologies of the Paraguayan Armed Forces (FFAA) issued a warning to the country's companies about ransomware attacks by Black Hunt. The warning was related to the incident at Tigo Business. The company previously acknowledged receiving an $8 million ransom demand. The General Directorate later deleted the official statement.",
    "rationale": "A single Black Hunt intrusion at Tigo Business, Paraguay's principal business ISP, propagated into the Ministry of Foreign Affairs, Tupi, Farmacenter and roughly 300 further corporate customers. Entry: Black Hunt's documented route is unsecured RDP. Recovery is the decisive stage: some 300-330 servers were encrypted and the backups were compromised in the same event, so a provider whose customers depend on it for continuity had no isolated restore path of its own. Blast radius: because those customers, including a foreign ministry, had outsourced hosting to a single provider without independent assurance, the provider's recovery failure became theirs -- national-level disruption from one commodity intrusion. This mirrors the FNS and Infotel pattern of backups sharing the fate of production.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/paraguay-warns-of-black-hunt-ransomware-attacks-after-tigo-business-breach/"
      },
      {
        "label": "ultimahora.com",
        "url": "https://www.ultimahora.com/telefonia-aclara-que-incidente-de-ciberseguridad-afecta-a-grupo-limitado-de-clientes-corporativos"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Cyberattacken-und-Ransomware-Mehrere-Opfer-Code-Verkauf-und-freier-Decryptor-9593275.html?wt_mc=rss.red.ho.ho.rdf.beitrag.beitrag"
      },
      {
        "label": "research.checkpoint.com",
        "url": "https://research.checkpoint.com/2024/15th-january-threat-intelligence-report/"
      },
      {
        "label": "finance.yahoo.com",
        "url": "https://finance.yahoo.com/news/hackers-roil-entire-industries-attacks-100000390.html"
      }
    ]
  },
  {
    "id": "2935",
    "year": 2023,
    "name": "Asper Biogene Ransomware (Not attributed, 2023)",
    "breachType": "Ransomware attack",
    "resultKey": "expertise-execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Asper Biogene, Elva Hospital, Synlab Estonia OÜ, Ida-Viru Central Hospital, Mari Viik OÜ, OÜ Miltop, OÜ Silmalaser, Merelahe TK OÜ, Reveron Baltic OÜ, SA Tartu University Clinic, Linnamõisa Family Medical Center, Star Company OÜ, Läänemaa Hospital, Tallinn Children's Hospital, Stigma Private Clinic, Jelena Pletnjova (mealmind), Fitlap OÜ, Confido Medical Center, Sports Gene OÜ, Rakvere Hospital, LS Health OÜ, Selfdiagnostics OÜ, Western Tallinn Central Hospital, DNA-Test OÜ, MediTA Baltics OÜ, AS Clinic Elite, Bioclinic, Nova Vita Clinic, Renmar OÜ, Genorama OÜ, Biotheka OÜ, Pärnu Hospital, Northern Estonia Regional Hospital, Kuressaare Hospital, Nutrition Coach OÜ, Viljandi Hospital, Ida-Tallinn Central Hospital, Krista Turman OÜ, Medifum Group OÜ, Estonian Vegan Society, Innomedica OÜ, Innomedica OÜ",
    "actor": "Not attributed",
    "countries": [
      "Estonia"
    ],
    "sectors": [
      "Corporate Targets",
      "Critical infrastructure",
      "Social groups"
    ],
    "subSectors": [
      "Not available",
      "Health",
      "Advocacy / activists (e.g. human rights organizations)",
      "Research"
    ],
    "primaryMarker": "M7",
    "secondaryMarkers": [
      "M5",
      "M10",
      "M11"
    ],
    "summary": "The Estonian genetic analysis company Asper Biogene experienced a ransomware incident in mid-November 2023. During that incident, around 100,000 data sets were copied and downloaded, consisting of personal and health data of around 10,000 people, including results from genetic tests. According to the general Director of the Estonian Data Protection Agency, over 40 health care companies were affected by the data theft. \nThe Estonian ministry of justice released a press statement on 18 December 2023, naming the affected companies and warning citizens about phishing emails leveraging stolen data.\nThe list of the 40 health companies includes: Jelena Pletnjova's MealMind, Miltop OÜ, Merelahe TK OÜ, Sports Gene OÜ, Renmar OÜ, Reveron Baltic OÜ, AS Clinic Elite, Confido Medical Center, Elva Hospital, Fitlap OÜ, Ida-Tallinn Central Hospital, Ida-Viru Central Hospital, Kuressaare Hospital, Läänemaa Hospital, Western Tallinn Central Hospital, MediTA Baltics OÜ, Nova Vita Clinic, OÜ Silmalaser, Northern Estonia Regional Hospital, Pärnu Hospital, Rakvere Hospital, SA Tartu University Clinic, Tallinn Children's Hospital, Viljandi Hospital, Bioclinic, Biotheka OÜ, DNA Test OÜ, Estonian Vegan Society, Genorama OÜ, Innomedica OÜ, Linnamõisa Family Medical Center, LS Health OÜ, Mari Viik OÜ, Medifum Group OÜ, Nutrition Coach OÜ, Selfdiagnostics OÜ, Star Company OÜ, Stigma Private Clinic, Synlab Estonia OÜ, Krista Turman OÜ, Asper Biogene OÜ.",
    "rationale": "Asper Biogene operated as the shared genetic-testing laboratory for dozens of independent Estonian clinics and hospitals, so it held the most sensitive category of health data -- genomic and diagnostic records -- on behalf of organisations that had no visibility into its security. Exposure: a vulnerability in Asper Biogene's own public-facing infrastructure was exploited. Blast radius: patients of more than forty downstream providers were affected through a single laboratory compromise, none of them having a direct relationship with the failing party. Data governance is the aggravating stage: genetic data is irrevocable -- it cannot be reissued like a card number and it implicates biological relatives who were never patients -- so the consequence of the custody arrangement outlasts every technical remedy applied afterwards.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Estland-10-000-Menschen-von-Gendaten-Leak-betroffen-9577868.html?wt_mc=rss.red.ho.beitrag.rdf.beitrag.beitrag"
      },
      {
        "label": "aki.ee",
        "url": "https://www.aki.ee/et/uudised/andmelekkega-seotud-ongitsused"
      }
    ]
  },
  {
    "id": "2682",
    "year": 2023,
    "name": "Food and retail company e-commerce websites Skimming (Unattributed payment-card-skimming threat actor(s), 2023)",
    "breachType": "Payment-card skimming",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Food and retail company e-commerce websites (unspecified, payment-skimming victims)",
    "actor": "Unattributed payment-card-skimming threat actor(s) (Magecart-style)",
    "countries": [
      "Not available"
    ],
    "sectors": [
      "Corporate Targets",
      "Critical infrastructure"
    ],
    "subSectors": [
      "Not available",
      "Food"
    ],
    "primaryMarker": "M11",
    "secondaryMarkers": [
      "M12",
      "M7",
      "M10"
    ],
    "summary": "Unknown actors compromised the websites of food and retail companies, Akamai Technologies reported in a technical report published on 9 October 2023. Using novel obfuscation techniques, the threat actors leveraged the Magecart malware framework to intercept potentially sensitive payment details of customers using the targeted e-commerce sites.",
    "rationale": "Food and retail e-commerce operators whose checkout pages carried injected skimming code. Exposure: third-party and first-party scripts run in the payment page's own trust context, so any weakness in that supply chain executes with full access to card entry. Detection is the defining failure: Akamai's analysis notes novel obfuscation, and skimming is silent by design -- there is no outage, no encryption and no ransom note, so the only thing that surfaces it is deliberate integrity monitoring of the payment page, which these operators did not have. Dwell time is consequently long and every transaction during it is compromised. Egress: card data was exfiltrated continuously to attacker infrastructure without interruption. The victim-side condition is the absence of client-side integrity and egress controls on the one page that handles regulated payment data.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/hackers-modify-online-stores-404-pages-to-steal-credit-cards/"
      },
      {
        "label": "akamai.com",
        "url": "https://www.akamai.com/blog/security-research/magecart-new-technique-404-pages-skimmer"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/us-congress-spyware/"
      },
      {
        "label": "tarnkappe.info",
        "url": "https://tarnkappe.info/artikel/it-sicherheit/magecart-hacker-stehlen-von-kartendaten-ueber-404-fehlerseiten-281306.html"
      }
    ],
    "notes": "Victims unnamed, so confidence capped at 3; the condition described is generic to the campaign rather than to one merchant."
  },
  {
    "id": "2676",
    "year": 2023,
    "name": "DataNet Data Theft (Ransomed.vc, 2023)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "DataNet, District of Columbia Board of Elections (DCBOE)",
    "actor": "Ransomed.vc",
    "countries": [
      "Not available",
      "United States"
    ],
    "sectors": [
      "Corporate Targets",
      "State institutions / political system"
    ],
    "subSectors": [
      "Not available",
      "Election infrastructure / related systems"
    ],
    "primaryMarker": "M7",
    "secondaryMarkers": [
      "M10",
      "M4",
      "M5"
    ],
    "summary": "The criminal group RansomedVC gained access to the web server of hosting provider DataNet and stole voter data of the District of Columbia Board of Elections (DCBOE), RansomedVC claimed on 5 October 2023.\nThe group alleges the dataset includes over 600,000 lines of US voter data, including individual's name, registration ID, voter ID, partial Social Security number, driver's license number, date of birth, phone number, email contact details. RansomedVC plans to sell the information to a single buyer.\nAn anonymous source told Bleeping Computer on 3 October that this database had first been offered for sale on BreachForums and Sinister.ly, by a user named 'pwncoder'. These posts have since been deleted. According to the anonymous source, the voter records were obtained from an MSSQL database.\nIn an update on 20 October, the Board of Elections admitted that DataNet Systems’ breached database server did contain a copy of the DCBOE’s voter roll.",
    "rationale": "The District of Columbia Board of Elections held voter records but hosted them on a third-party web server operated by DataNet, and it was that provider which RansomedVC compromised. The custody arrangement is the condition: an electoral authority delegated the hosting of the voter roll -- data whose integrity and confidentiality carry democratic as well as personal consequences -- to a commercial provider without evident independent assurance over its exposure. Detection and scope: the Board initially characterised the exposure narrowly and the assessed scope subsequently widened, so its own visibility into data held on someone else's infrastructure was limited at the moment it had to inform voters. Blast radius extends beyond the individuals to public confidence in the electoral process, which is why an election body's third-party arrangements carry weight beyond the record count.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/dc-board-of-elections-confirms-voter-data-stolen-in-site-hack/"
      },
      {
        "label": "databreaches.net",
        "url": "https://www.databreaches.net/d-c-board-of-elections-voter-registration-data-up-for-sale-on-dark-web/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/washington-dc-board-elections-breach/"
      },
      {
        "label": "research.checkpoint.com",
        "url": "https://research.checkpoint.com/2023/9th-october-threat-intelligence-report/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/dc-board-elections-breach/"
      },
      {
        "label": "dcboe.org",
        "url": "https://www.dcboe.org/databreach/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/dc-board-of-elections-hackers-may-have-breached-entire-voter-roll/"
      },
      {
        "label": "research.checkpoint.com",
        "url": "https://research.checkpoint.com/2023/23rd-october-threat-intelligence-report/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/washington-dc-voter-roles-hackers"
      },
      {
        "label": "theregister.com",
        "url": "https://www.theregister.com/2023/10/23/washington_elections_agency_breach/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/159273/breaking-news/security-affairs-newsletter-round-459-by-pierluigi-paganini-international-edition.html"
      }
    ]
  },
  {
    "id": "2624",
    "year": 2023,
    "name": "Variety of unspecified targets Ransomware (Scattered Spider, 2023)",
    "breachType": "Ransomware attack",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Variety of unspecified targets (UNC3944/Scattered Spider, mid-2023 wave)",
    "actor": "Scattered Spider/Octo Tempest fka Storm-0875/UNC3944/Scatter Swine/Muddled Libra/Roasted 0ktapus/Star Fraud < The Comm",
    "countries": [
      "Not available"
    ],
    "sectors": [
      "Corporate Targets",
      "Media",
      "Critical infrastructure"
    ],
    "subSectors": [
      "Not available",
      "Telecommunications",
      "Finance"
    ],
    "primaryMarker": "M2",
    "secondaryMarkers": [
      "M6",
      "M7",
      "M11"
    ],
    "summary": "The financially-motivated hacking group 'UNC3944' stole data and deployed ransomware against a variety of targets in mid-2023, the US IT security firm Mandiant reported on 14 September 2023.\nTargets included telecommunications companies and business process outsourcers (BPOs), in addition to hospitality, retail, media, entertainment and financial service organisations.\nIn an unspecified cyber incident, the hacker group downloaded malicious files from a victim environment in Amazon Web Service (AWS) S3 and executed an ALPHV ransomware payload.",
    "rationale": "Scattered Spider/UNC3944 against a mixed target set across sectors. Exposure: the attack surface is the IT service desk, not a system. Per Mandiant, operators used voice phishing and SIM-swap social engineering to have help-desk staff reset credentials and enrol new MFA devices -- so the failing control is an identity-verification procedure performed by people under time pressure, and the organisation's MFA investment is bypassed rather than defeated. Persistence: because the reset produces legitimate credentials and a legitimately enrolled token, subsequent activity looks authorised, which suppresses detection. Blast radius is why this target set was chosen: telecoms and BPOs hold delegated administrative access into their own clients' environments, so a help-desk lapse at the outsourcer propagates to organisations that never interacted with the attacker. The victim-side condition is a human verification process that was never hardened to the standard of the technical controls it can override.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "mandiant.com",
        "url": "https://www.mandiant.com/resources/blog/unc3944-sms-phishing-sim-swapping-ransomware"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/scattered-spider-ransomware-attacks-hospitality-retail"
      }
    ]
  },
  {
    "id": "2623",
    "year": 2022,
    "name": "Unspecified telecoms companies and business process Data Theft (Scattered Spider, 2022)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Unspecified telecoms companies and business process outsourcers (BPOs)",
    "actor": "Scattered Spider / UNC3944 (financially motivated)",
    "countries": [
      "Not available"
    ],
    "sectors": [
      "Corporate Targets",
      "Critical infrastructure"
    ],
    "subSectors": [
      "Not available",
      "Telecommunications"
    ],
    "primaryMarker": "M2",
    "secondaryMarkers": [
      "M6",
      "M7",
      "M11"
    ],
    "summary": "The financially-motivated hacking group 'UNC3944' stole data from unspecified telecoms companies and business process outsourcers (BPOs) from 2022 to early 2023, the US-based IT security firm Mandiant reported on 14 September 2023.\nThe threat actor accessed credentials and systems to conduct SIM swapping.",
    "rationale": "Scattered Spider/UNC3944 against telecoms operators and business process outsourcers. Exposure: the attack surface is the IT service desk, not a system. Per Mandiant, operators used voice phishing and SIM-swap social engineering to have help-desk staff reset credentials and enrol new MFA devices -- so the failing control is an identity-verification procedure performed by people under time pressure, and the organisation's MFA investment is bypassed rather than defeated. Persistence: because the reset produces legitimate credentials and a legitimately enrolled token, subsequent activity looks authorised, which suppresses detection. Blast radius is why this target set was chosen: telecoms and BPOs hold delegated administrative access into their own clients' environments, so a help-desk lapse at the outsourcer propagates to organisations that never interacted with the attacker. The victim-side condition is a human verification process that was never hardened to the standard of the technical controls it can override.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "mandiant.com",
        "url": "https://www.mandiant.com/resources/blog/unc3944-sms-phishing-sim-swapping-ransomware"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/scattered-spider-ransomware-attacks-hospitality-retail"
      }
    ]
  },
  {
    "id": "2500",
    "year": 2020,
    "name": "African Union Data Theft (Mustang Panda, 2020)",
    "breachType": "Data theft / espionage",
    "resultKey": "execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "African Union",
    "actor": "Mustang Panda/RedDelta/Bronze President/Stately Taurus/Earth Preta/TA416/HoneyMyte/Camaro Dragon",
    "countries": [
      "Africa"
    ],
    "sectors": [
      "International / supranational organization"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M7",
    "secondaryMarkers": [
      "M4",
      "M1",
      "M14",
      "M11"
    ],
    "summary": "Suspected Chinese hacking group Mustang Panda/Bronze President infiltrated the African Union's headquarters in Addis Ababa, Ethiopia in a cyber espionage incident that was first discovered on 17 January 2020 by Japanese cybersecurity researchers. The hackers gained access to internal servers to extract surveillance camera footage from various key locations across the AU HQ, including offices, parking areas, corridors, and meeting rooms. In an internal memo circulated within the African Union, it is stated that ‘a huge volume of traffic’ was exfiltrated, though the full scope of the stolen data remains uncertain.",
    "rationale": "The African Union accepted a headquarters built and equipped as a donated gift, including the servers and network infrastructure, and that acceptance is the doctrinal decision the material posture never caught up with. Prior knowledge is what makes this case unusually strong: the AU's own technicians had already found years earlier that the building's servers were transmitting data to Shanghai nightly, so the organisation was not unaware -- it continued operating on the same donated estate without independent security verification or an ownership transfer of the infrastructure lifecycle. Recurrence follows directly: this later Mustang Panda intrusion, including exfiltration of camera footage, is the second documented episode on the same estate. Detection: both episodes surfaced through internal discovery or external research long after the fact rather than through monitoring. Blast radius: a continental political body's internal deliberations and physical surveillance feeds affect all 55 member states, none of which had a say in the infrastructure decision.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "cfr.org",
        "url": "https://www.cfr.org/cyber-operations/2020/12/16/targeting-of-the-african-union/"
      },
      {
        "label": "cyberlaw.ccdcoe.org",
        "url": "https://cyberlaw.ccdcoe.org/wiki/African_Union_headquarters_hack_(2020)"
      },
      {
        "label": "reuters.com",
        "url": "https://www.reuters.com/article/us-ethiopia-african-union-cyber-exclusiv-idUSKBN28Q1DB"
      }
    ]
  },
  {
    "id": "2581",
    "year": 2023,
    "name": "Zaun Ransomware (LockBit, 2023)",
    "breachType": "Ransomware attack",
    "resultKey": "expertise-execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Zaun",
    "actor": "LockBit",
    "countries": [
      "United Kingdom"
    ],
    "sectors": [
      "Corporate Targets"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M4",
    "secondaryMarkers": [
      "M5",
      "M11",
      "M10"
    ],
    "summary": "The Russia-linked ransomware group 'Lockbit' stole 10 GB worth of information from UK security fence manufacturer Zaun during 5-6 August 2023, the manufacturer reported in a statement on 1 September.\nAccording to this communication, security measures prevented the encryption of files, though the ransomware group managed to steal 10 GB of data via an unnamed vulnerability on a computer running Windows 7. Zaun said the stolen information included archived emails, folders, drawings and project files. Zaun did not believe that classified documents were stored on the compromised computer, noting that its products are available for unrestricted purchase and product information are published on the company's website.\nOn 2 September, the British Daily Mirror claimed that stolen documents that Lockbit had subsequently leaked may still reveal potentially security-relevant information about British military and intelligence facilities. Disclosed information are said to have included details on certain equipment purchased to protect the chemical and biological weapons research center at Porton Down in Wiltshire; a sales order report for equipment for the GCHQ military base at Bude in Cornwall; information on safety equipment for the Royal Air Force military airfield at Waddington in Loncolnshire; information on British Cawdor Barracks at Brawdy in Pembrokeshire; and information on the navy base in Clyde (HMNB Clyde).\nIn the same article, British Labour MP Kevan Jones expressed concern about the incident and called on the government to explain why the company's computer systems were so vulnerable. Tory MP Tobias Ellwood insisted on better protections from Russia-associated interferences, which he linked to the UK's support for Ukraine.",
    "rationale": "Zaun manufactures perimeter fencing for UK defence and critical-infrastructure sites, so its drawings and specifications carry national-security value well above the company's size. Its own statement identifies the condition precisely: despite security measures being in place, roughly 10GB left through a legacy, disconnected server retained for archival purposes. That is an asset the organisation believed was out of scope -- not patched, not monitored, not part of the estate anyone owned -- which is the clearest form of the visibility gap in this dataset. Detection and scope: Zaun initially assessed the exposure as limited and the assessed scope subsequently widened, showing that its picture of what that forgotten server held was itself incomplete. Blast radius: the data concerns third-party sites, so the consequence lands on customers whose security posture had nothing to do with the failing control.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/attacks-breaches/lockbit-leaks-documents-filched-from-uk-defence-contractor"
      },
      {
        "label": "zaun.co.uk",
        "url": "https://www.zaun.co.uk/zaun-data-breach-update/"
      },
      {
        "label": "mirror.co.uk",
        "url": "https://www.mirror.co.uk/news/uk-news/russia-linked-hackers-hit-uk-30850139"
      },
      {
        "label": "socradar.io",
        "url": "https://socradar.io/threat-actors-accessed-uk-military-data-from-weakest-link/"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Lockbit-veroeffentlicht-Daten-von-britischem-Hochsicherheits-Zaunbauer-9296464.html?wt_mc=rss.red.ho.beitrag.rdf.beitrag.beitrag"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/endpoint/boeing-breached-ransomware-lockbit-gang-claims"
      },
      {
        "label": "techrepublic.com",
        "url": "https://www.techrepublic.com/article/cyber-security-trends-uk/"
      },
      {
        "label": "techreport.com",
        "url": "https://techreport.com/news/french-officials-cyber-threats-paris-olympics/"
      }
    ]
  },
  {
    "id": "2427",
    "year": 2023,
    "name": "~25 organisations' email accounts Data Theft (Storm-0558, 2023)",
    "breachType": "Data theft / espionage",
    "resultKey": "execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "~25 organisations' email accounts, including US government agencies (Microsoft Exchange Online tenants)",
    "actor": "Storm-0558",
    "countries": [
      "United States",
      "Not available",
      "Western Europe"
    ],
    "sectors": [
      "Social groups",
      "State institutions / political system",
      "Education"
    ],
    "subSectors": [
      "Advocacy / activists (e.g. human rights organizations)",
      "Government / ministries",
      "Not available",
      "Legislative",
      "Civil service / administration"
    ],
    "primaryMarker": "M7",
    "secondaryMarkers": [
      "M6",
      "M4",
      "M11",
      "M1"
    ],
    "summary": "Storm-0558, a group with suspected state links, gained access to email accounts of approximately 25 organizations, including government agencies, beginning on 15 May 2023. Other related consumer accounts were potentially compromised as well. Microsoft assessed with moderate confidence that the actor is China-based. In response to a media question, State Department spokesperson Matthew Miller on 12 July expressed that the US government had no reason to doubt Microsoft's conclusions but had not made its own attribution at this time. \nThe Washington Post reported that the US Department of State, the US Department of Commerce, a congressional staffer, a US human rights advocate, and US think tanks were affected. Citing anonymous officials, the report names Commerce Secretary Gina Raimondo as among the senior government representatives individually targeted in the operation.\nOn 16 July, US National Security Advisor Jack Sullivan told CNN that the hacked email accounts were not classified and no secret/confidential data from state agencies could have been obtained by the hackers. Secretary of State Antony Blinken is said to have raised the issue with China's leading diplomat Wang Yi during a meeting in Jakarta, according to the same news report. \nOn 20 July 2023, the Wall Street Journal reported that these same Beijing-linked threat actors had also managed to access the email accounts of key US diplomats, including the US ambassador to China, Nicholas Burns, and the Assistant Secretary of State for East Asia, Daniel Kritenbrink. \nOn 27 July 2023 US Senator Ron Wyden (D-OR) asked the Department of Justice (DOJ), Federal Trade Commission (FTC) and Cybersecurity and Infrastructure Security Agency (CISA) in a letter to investigate whether negligent security practices of Microsoft allowed this breach to happen.\nIn a technical report dated 6 September 2023, Microsoft explained that a crash on the consumer signing system in April 2021 resulted in the acquisition of the consumer key by the threat actor.  As the crash dump was believed to contain no sensitive data, it was moved from the isolated production environment to the debug environment on the internet-connected corporate network. Storm-0558 had subsequently compromised a corporate network account belonging to a Microsoft engineer. The account had access to the debug environment with the crash dump, which mistakenly contained the key.\nOn 27 September 2023, Reuters reported that 60,000 emails were stolen from 10 State Department email accounts, a staffer of republican senator Eric Schmitt was told in a briefing by State Department IT officials. Nine of those email accounts belonged to people working in East Asia and the Pacific, and one email account belonged to a person working in Europe. Senator Eric Schmitt, wrote in an email to Reuters that \"we need to harden our defences against these types of cyber attacks\". Some affected institutions could not trace evidence of a breach as that would have required expanded logging, which is only available for premium clients. After criticism by the United States National Security Council and the Cybersecurity and Infrastructure Security Agency (USA), Microsoft rolled out expanded logging at the end of February 2024.\nOn 20 March 2024, the US Cyber Safety Review Board, which investigated the role Microsoft played in the intrusion, concluded that the intrusion was an \"avoidable error\" due to \"deprioritizing security\" that could have been prevented. According to the Board's review, industry had identified links between Storm-0558 and Operation Aurora, which in 2009 targeted Google alongside over twenty other companies, and the 2011 supply chain compromise involving RSA SecurID. The Board criticized the provider for lacking security and monitoring measures and urged Microsoft to focus on security first.\nAnother response came from Senator Ron Wyden, D-Ore., who released a draft legislation on 8 April 2024 to set mandatory cybersecurity standards, directly referencing the incident.",
    "rationale": "The affected tenants -- roughly 25 organisations including US government agencies -- were compromised without any failure of their own configuration. Microsoft's investigation found Storm-0558 had obtained an inactive consumer MSA signing key and exploited a token-validation flaw to forge credentials for enterprise Azure AD accounts. Every relevant lifecycle stage sat with the cloud provider: key lifecycle management, validation logic, and the telemetry needed to notice forged tokens. Detection is the decisive point for the customers: the intrusion was found by a US federal agency reviewing its own audit logs, and access to the logging tier that made that possible was at the time a paid add-on, so most tenants were structurally incapable of detecting the same activity. That is the doctrinal-material gap in this case: organisations accept a shared-responsibility model that assigns identity assurance to the provider while retaining accountability for their own data, without visibility to verify either. Microsoft subsequently made expanded logging available to all tenants -- a remedy that concedes the gap.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "hackread.com",
        "url": "https://www.hackread.com/chinese-group-storm-0558-hacked-europe-microsoft/"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/microsoft-cloud-attack-china-hackers/"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/endpoint/chinese-apt-cracks-microsoft-outlook-emails-government-agencies"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/148387/hacking/microsoft-blocked-storm-0558-attack.html"
      },
      {
        "label": "databreaches.net",
        "url": "https://www.databreaches.net/chinese-hackers-breached-government-email-accounts-microsoft-says/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/chinese-hackers-breached-us-and-european-governments"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/microsoft-chinese-hackers-breached-us-govt-exchange-email-accounts/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/china-hackers-email-us-government/"
      },
      {
        "label": "c4isrnet.com",
        "url": "https://www.c4isrnet.com/management/2023/07/12/us-government-linked-email-accounts-hacked-from-china-microsoft-says/"
      },
      {
        "label": "jpost.com",
        "url": "https://www.jpost.com/international/article-749783"
      },
      {
        "label": "thediplomat.com",
        "url": "https://thediplomat.com/2023/07/china-based-hackers-breached-government-and-individual-email-accounts-microsoft-says/"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/07/microsoft-thwarts-chinese-cyber-attack.html"
      },
      {
        "label": "govinfosecurity.com",
        "url": "https://www.govinfosecurity.com/china-based-hacker-hijacked-eu-us-government-emails-a-22527"
      },
      {
        "label": "elmundo.es",
        "url": "https://www.elmundo.es/tecnologia/2023/07/12/64ae8f1021efa0357c8b45c2.html"
      },
      {
        "label": "elpais.com",
        "url": "https://elpais.com/https:/elpais.com/internacional/2023-07-12/microsoft-desvela-un-ataque-informatico-chino-a-cuentas-de-correo-del-gobierno-estadounidense.html"
      },
      {
        "label": "blogs.microsoft.com",
        "url": "https://blogs.microsoft.com/on-the-issues/2023/07/11/mitigation-china-based-threat-actor/"
      },
      {
        "label": "msrc.microsoft.com",
        "url": "https://msrc.microsoft.com/blog/2023/07/microsoft-mitigates-china-based-threat-actor-storm-0558-targeting-of-customer-email/"
      },
      {
        "label": "kleinezeitung.at",
        "url": "https://www.kleinezeitung.at/wirtschaft/6306407/Laut-MicrosoftAngaben_Hacker-aus-China-drangen-in-EMailKonten"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/07/us-government-agencies-emails.html"
      },
      {
        "label": "defenseone.com",
        "url": "https://www.defenseone.com/threats/2023/07/chinese-cybercriminals-breach-government-email-accounts-microsoft-cloud-hack/388461/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/148422/intelligence/chinese-hackers-compromised-emails-us-gov.html"
      },
      {
        "label": "cisa.gov",
        "url": "https://www.cisa.gov/sites/default/files/2023-07/aa23-193a_joint_csa_enhanced_monitoring_to_detect_apt_activity_targeting_outlook_online_1.pdf"
      },
      {
        "label": "microsoft.com",
        "url": "https://www.microsoft.com/en-us/security/blog/2023/07/14/analysis-of-storm-0558-techniques-for-unauthorized-email-access/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/china-hacking-uk-members-parliament"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/hikvision-cameras-telegram-children/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/microsoft/microsoft-still-unsure-how-hackers-stole-azure-ad-signing-key/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/microsoft-changes-signing-key-system"
      },
      {
        "label": "jpost.com",
        "url": "https://www.jpost.com/international/article-750118"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/microsoft-china-hacking-state/"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/07/microsoft-bug-allowed-hackers-to-breach.html"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/148500/breaking-news/security-affairs-newsletter-round-428-by-pierluigi-paganini-international-edition.html"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/bide-cybersecurity-strategy-implementation/"
      },
      {
        "label": "n-tv.de",
        "url": "https://www.n-tv.de/politik/Hacker-erbeuten-wohl-keine-US-Geheiminformationen-article24265321.html"
      },
      {
        "label": "govinfosecurity.com",
        "url": "https://www.govinfosecurity.com/hacker-stole-signing-key-hit-us-governments-microsoft-365-a-22565"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/remote-workforce/microsoft-logging-tax-hinders-incident-response"
      },
      {
        "label": "nakedsecurity.sophos.com",
        "url": "https://nakedsecurity.sophos.com/2023/07/18/microsoft-hit-by-storm-season-a-tale-of-two-semi-zero-days/"
      },
      {
        "label": "jyllands-posten.dk",
        "url": "https://jyllands-posten.dk/international/usa/ECE16286287/kinesisk-gruppe-har-hacket-sig-ind-i-amerikanske-regeringsemails/"
      },
      {
        "label": "politiken.dk",
        "url": "https://politiken.dk/udland/art9439907/Kinesisk-gruppe-hacker-sig-ind-i-amerikanske-regerings-e-mails"
      },
      {
        "label": "nrc.nl",
        "url": "https://www.nrc.nl/nieuws/2023/07/13/chinese-cyberspionnen-braken-in-bij-westerse-overheden-a4169674"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/microsoft-cloud-breach-china/"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/application-security/microsoft-relents-offers-free-key-logging-365-customers"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/07/microsoft-expands-cloud-logging-to.html"
      },
      {
        "label": "channelnewsasia.com",
        "url": "https://www.channelnewsasia.com/world/us-ambassador-china-hacked-china-linked-spying-operation-report-3643856"
      },
      {
        "label": "reuters.com",
        "url": "https://www.reuters.com/world/us-ambassador-china-hacked-china-linked-spying-operation-wsj-2023-07-20/"
      },
      {
        "label": "wsj.com",
        "url": "https://www.wsj.com/articles/u-s-ambassador-to-china-hacked-in-china-linked-spying-operation-f03de3e4"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/china-breach-microsoft-cloud-email-may-expose-deeper-problems/"
      },
      {
        "label": "ilsole24ore.com",
        "url": "https://www.ilsole24ore.com/art/spionaggio-internazionale-hacker-cinesi-violano-account-posta-ambasciatore-usa-pechino-burns-AF7BK0I"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/stolen-azure-ad-key-offered-widespread-access-to-microsoft-cloud-services/"
      },
      {
        "label": "wiz.io",
        "url": "https://www.wiz.io/blog/storm-0558-compromised-microsoft-key-enables-authentication-of-countless-micr"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/microsoft-disputes-report-on-chinese-hacking"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/cloud/microsoft-365-breach-risk-widens-millions-of-azure-ad-apps"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/07/azure-ad-token-forging-technique-in.html"
      },
      {
        "label": "diepresse.com",
        "url": "https://www.diepresse.com/13447406/smarte-geraete-aber-sicher-weisses-haus-kuendigt-initiative-an"
      },
      {
        "label": "tarnkappe.info",
        "url": "https://tarnkappe.info/artikel/cyberangriff/hacker-stehlen-microsoft-keys-und-bedienen-sich-an-e-mails-278689.html"
      },
      {
        "label": "malwarebytes.com",
        "url": "https://www.malwarebytes.com/blog/news/2023/07/a-week-in-security-july-17-23"
      },
      {
        "label": "state.gov",
        "url": "https://www.state.gov/briefings/department-press-briefing-july-12-2023/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/senator-calls-on-doj-to-investigate-alleged-china-microsoft-hack"
      },
      {
        "label": "wyden.senate.gov",
        "url": "https://www.wyden.senate.gov/imo/media/doc/wyden%5Fletter%5Fto%5Fcisa%5Fdoj%5Fftc%5Fre%5F2023%5Fmicrosoft%5Fbreach.pdf"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/perimeter/senator-microsoft-negligence-365-email-breach"
      },
      {
        "label": "d.newsweek.com",
        "url": "https://d.newsweek.com/en/file/466662/senators-write-state-department-about-outlook-hack.pdf"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/microsoft-china-breach-encryption-key/"
      },
      {
        "label": "c4isrnet.com",
        "url": "https://www.c4isrnet.com/c2-comms/2023/07/31/a-win-a-miss-and-a-path-to-stronger-digital-authentication/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/tenable-microsoft-negligence-security-flaw/"
      },
      {
        "label": "hackread.com",
        "url": "https://www.hackread.com/china-apt-group-gapped-systems-malware-europe/"
      },
      {
        "label": "govinfosecurity.com",
        "url": "https://www.govinfosecurity.com/tenable-ceo-slams-microsoft-for-failing-to-quickly-patch-bug-a-22719"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/russian-hackers-sent-phishing-lures"
      },
      {
        "label": "schneier.com",
        "url": "https://www.schneier.com/blog/archives/2023/08/microsoft-signing-key-stolen-by-chinese.html"
      },
      {
        "label": "decoded.avast.io",
        "url": "https://decoded.avast.io/threatresearch/avast-q2-2023-threat-report/?utm_source=rss&utm_medium=rss&utm_campaign=avast-q2-2023-threat-report"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/chinese-cyber-spies-improve-but-have-not-eclipsed-nsa"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/dr-tech/microsoft-expands-cloud-security-posture-management-to-google-cloud"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/keystroke-attack-security-roundup/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/us-cyber-safety-board-to-analyze-microsoft-exchange-hack-of-govt-emails/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/china-microsoft-hack-rep-don-bacon"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/meinung/Kommentar-Microsoft-provoziert-den-Cloud-GAU-und-reagiert-dann-katastrophal-9258697.html?wt_mc=rss.red.ho.ho.rdf.beitrag.beitrag"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/08/the-vulnerability-of-zero-trust-lessons.html"
      },
      {
        "label": "faz.net",
        "url": "https://www.faz.net/aktuell/wirtschaft/unternehmen/das-steckt-hinter-dem-hackerangriff-auf-microsoft-outlook-19065644.html"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Microsofts-gestohlener-Master-Key-FBI-informiert-wohl-noch-immer-Betroffene-9248083.html?wt_mc=rss.red.ho.ho.rdf.beitrag.beitrag"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/hintergrund/Storm-558-Angriff-auf-Exchange-Mails-von-Regierungsbehoerden-und-vielleicht-mehr-9243694.html?wt_mc=rss.red.ho.ho.rdf.beitrag_plus.beitrag_plus"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/ratgeber/LoRaWAN-Selbstbaunetz-fuer-die-Smart-City-9229746.html?wt_mc=rss.red.ho.ho.rdf.beitrag_plus.beitrag_plus"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/hintergrund/Wohlfuehl-Kontrolle-Wie-Apps-die-Stimmungslage-von-Schuelern-kontrollieren-9237010.html?wt_mc=rss.red.ho.ho.rdf.beitrag_plus.beitrag_plus"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/tests/Test-SoftMaker-Office-2024-und-NX-mit-KI-Anbindung-9242074.html?wt_mc=rss.red.ho.ho.rdf.beitrag_plus.beitrag_plus"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/cyber-safety-review-board-microsoft-cisa-dhs/"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/tests/3D-Drucker-Wir-haben-den-neuen-AnkerMake-M5C-getestet-9239449.html?wt_mc=rss.red.ho.ho.rdf.beitrag_plus.beitrag_plus"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/new-hiatusrat-malware-attacks-target-us-defense-department/"
      },
      {
        "label": "arstechnica.com",
        "url": "https://arstechnica.com/security/2023/08/cybersecurity-experts-say-the-west-has-failed-to-learn-lessons-from-ukraine/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/microsoft-details-outlook-hack-on-government-officials-china"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/microsoft/hackers-stole-microsoft-signing-key-from-windows-crash-dump/"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/china-backed-hackers-steal-microsofts-signing-key-post-mortem/"
      },
      {
        "label": "arstechnica.com",
        "url": "https://arstechnica.com/security/2023/09/hack-of-a-microsoft-corporate-account-led-to-azure-breach-by-chinese-hackers/"
      },
      {
        "label": "msrc.microsoft.com",
        "url": "https://msrc.microsoft.com/blog/2023/09/results-of-major-technical-investigations-for-storm-0558-key-acquisition/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/microsoft-china-signing-key/"
      },
      {
        "label": "socradar.io",
        "url": "https://socradar.io/microsoft-reveals-how-storm-0558-acquired-the-signing-key-they-stole-from-a-crash-dump/"
      },
      {
        "label": "govinfosecurity.com",
        "url": "https://www.govinfosecurity.com/trail-errors-led-to-chinese-hack-microsoft-cloud-email-a-23035"
      },
      {
        "label": "hackread.com",
        "url": "https://www.hackread.com/microsoft-chinese-hackers-signing-key-breach-outlook/"
      },
      {
        "label": "channelnewsasia.com",
        "url": "https://www.channelnewsasia.com/business/microsoft-says-compromise-its-engineers-account-led-chinese-hack-us-officials-3751616"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/150449/hacking/chinese-hackers-stole-microsoft-signing-key.html"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/09/outlook-breach-microsoft-reveals-how.html"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Gestohlener-Microsoft-Schluessel-stammte-aus-einem-Crash-Dump-9297240.html?wt_mc=rss.red.ho.beitrag.rdf.beitrag.beitrag"
      },
      {
        "label": "blogs.microsoft.com",
        "url": "https://blogs.microsoft.com/on-the-issues/2023/09/07/digital-threats-cyberattacks-east-asia-china-north-korea/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/chinese-ai-ops-microsoft/"
      },
      {
        "label": "malwarebytes.com",
        "url": "https://www.malwarebytes.com/blog/news/2023/09/how-critical-microsoft-accounts-were-hacked"
      },
      {
        "label": "query.prod.cms.rt.microsoft.com",
        "url": "https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RW1aFyW"
      },
      {
        "label": "techrepublic.com",
        "url": "https://www.techrepublic.com/article/microsoft-apple-spyware/"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/attacks-breaches/microsoft-ids-security-gaps-that-let-threat-actor-steal-signing-key"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/attacks-breaches/double-edged-sword-cyber-espionage"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/ncsc-director-michael-casey-senate-confirmation"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/application-security/microsoft-azure-hdinsight-xss-vulnerabilities"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/microsoft-breach-led-to-theft-of-60-000-us-state-dept-emails/"
      },
      {
        "label": "reuters.com",
        "url": "https://www.reuters.com/world/us/chinese-hackers-stole-60000-emails-us-state-department-microsoft-hack-senate-2023-09-27/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/151744/breaking-news/security-affairs-newsletter-round-439-by-pierluigi-paganini-international-edition.html"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/china-blacktech-router-hack/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/151685/hacking/u-s-state-department-stolen-emails.html"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/60-000-geklaute-Regierungsmails-Erste-Zahlen-nach-Microsofts-Cloud-Key-Debakel-9321044.html?wt_mc=rss.red.ho.ho.rdf.beitrag.beitrag"
      },
      {
        "label": "techrepublic.com",
        "url": "https://www.techrepublic.com/article/new-nsa-cisa-iam-guidance/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/microsoft-extends-purview-audit-log-retention-after-july-breach/"
      },
      {
        "label": "techrepublic.com",
        "url": "https://www.techrepublic.com/article/five-eyes-five-principles-secure-innovation/"
      },
      {
        "label": "diepresse.com",
        "url": "https://www.diepresse.com/13443917/hacker-aus-china-drangen-in-e-mail-konten-westlicher-regierungen-ein"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/cisa-google-workspace-scuba-baselines-microsoft-breach-china/"
      },
      {
        "label": "01net.com",
        "url": "https://www.01net.com/actualites/hackers-russes-pirate-microsoft-mot-passe-epu-securise.html"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/microsoft-critics-accuse-the-firm-of-negligence-in-latest-breach/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/microsoft-reveals-how-hackers-breached-its-exchange-online-accounts/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/hpe-investigates-new-breach-after-data-for-sale-on-hacking-forum/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/microsoft-expands-free-logging-capabilities-after-may-breach/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/microsoft-logging-cisa-omb/"
      },
      {
        "label": "firstpost.com",
        "url": "https://www.firstpost.com/tech/chinas-attack-on-microsoft-was-preventable-if-they-had-taken-cybersecurity-seriously-says-us-govt-13755823.html"
      },
      {
        "label": "euronews.com",
        "url": "https://www.euronews.com/next/2024/04/03/microsoft-criticised-for-cascade-of-security-failures-in-chinese-hacking-investigation"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/microosft-csrb-china-hacking/"
      },
      {
        "label": "voachinese.com",
        "url": "https://www.voachinese.com/a/us-says-china-hacking-us-officials-preventable-20240403/7554569.html"
      },
      {
        "label": "spiegel.de",
        "url": "https://www.spiegel.de/netzwelt/netzpolitik/microsoft-regierungskommission-wirft-nachlaessigkeit-bei-chinesischem-hackerangriff-vor-a-acdf3f26-e0ef-4078-956f-8a449a7ac74f"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/dhs-cascade-of-security-failures-microsoft-china-hack"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Klatsche-fuer-Microsoft-US-Behoerde-wirft-MS-Sicherheitsversagen-vor-9674431.html?wt_mc=rss.red.ho.ho.rdf.beitrag.beitrag"
      },
      {
        "label": "01net.com",
        "url": "https://www.01net.com/actualites/etats-unis-microsoft-negligence-cyberattaque-chinoise.html"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2024/04/us-cyber-safety-board-slams-microsoft.html"
      },
      {
        "label": "usine-digitale.fr",
        "url": "https://www.usine-digitale.fr/article/le-piratage-de-microsoft-par-la-chine-etait-evitable-assure-un-comite-gouvernemental-americain.N2211014"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/microsoft-still-unsure-how-hackers-stole-msa-key-in-2023-exchange-attack/"
      },
      {
        "label": "voachinese.com",
        "url": "https://www.voachinese.com/a/scathing-federal-report-rips-microsoft-for-shoddy-security-insincerity-in-response-to-chinese-hack-20240403/7556148.html"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/Donnerstag-Comeback-der-Netzneutralitaet-in-den-USA-eintaegige-Google-I-O-im-Mai-9674505.html?wt_mc=rss.red.ho.ho.rdf.beitrag.beitrag"
      },
      {
        "label": "es.benzinga.com",
        "url": "https://es.benzinga.com/2024/04/04/microsoft-enfrenta-criticas-ciberataque-2023/"
      },
      {
        "label": "tomshw.it",
        "url": "https://www.tomshw.it/hardware/exchange-e-un-colabrodo-lattacco-hacker-del-2023-poteva-essere-evitato-2024-04-04"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/federal-government-russian-breach-microsoft/"
      },
      {
        "label": "lemondeinformatique.fr",
        "url": "https://www.lemondeinformatique.fr/actualites/lire-apres-le-piratage-d-exchange-le-gouvernement-us-etrille-la-securite-de-microsoft-93427.html"
      },
      {
        "label": "blogs.microsoft.com",
        "url": "https://blogs.microsoft.com/on-the-issues/2024/04/04/china-ai-influence-elections-mtac-cybersecurity/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/microsoft-ai-election-taiwan/"
      },
      {
        "label": "fr.finance.yahoo.com",
        "url": "https://fr.finance.yahoo.com/actualites/cyberattaque-chinoise-n%C3%A9gligence-microsoft-point%C3%A9e-153500929.html"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/identity-thief-lived-as-a-different-man-for-33-years/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/china-ai-influence-operations"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/161558/breaking-news/security-affairs-newsletter-round-466-by-pierluigi-paganini-international-edition.html"
      },
      {
        "label": "schneier.com",
        "url": "https://www.schneier.com/blog/archives/2024/04/us-cyber-safety-review-board-on-the-2023-microsoft-exchange-hack.html"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/the-us-government-has-a-microsoft-problem/"
      },
      {
        "label": "wyden.senate.gov",
        "url": "https://www.wyden.senate.gov/news/press-releases/wyden-releases-draft-legislation-to-end-federal-dependence-on-insecure-proprietary-software-in-response-to-repeated-damaging-breaches-of-government-systems"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/cuttlefish-malware-routers-turkey"
      },
      {
        "label": "arstechnica.com",
        "url": "https://arstechnica.com/information-technology/2024/05/microsoft-ties-executive-pay-to-security-following-multiple-failures-and-breaches/"
      },
      {
        "label": "windowsblogitalia.com",
        "url": "https://www.windowsblogitalia.com/2024/05/microsoft-accusa-usa-email-hacker/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/microsoft-security-organizational-changes/"
      },
      {
        "label": "govinfosecurity.com",
        "url": "https://www.govinfosecurity.com/microsoft-overhauls-security-practices-after-major-breaches-a-25130"
      },
      {
        "label": "itmedia.co.jp",
        "url": "https://www.itmedia.co.jp/enterprise/articles/2405/26/news046.html"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/microsoft-president-brad-smith-lawmakers-cyber"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2024/06/microsoft-delays-ai-powered-recall.html"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/lawmakers-question-microsoft-president-over-china-ties-repeated-breaches/"
      },
      {
        "label": "ciodive.com",
        "url": "https://www.ciodive.com/news/microsoft-customers-compromised-threat-group/720230/"
      },
      {
        "label": "cnnturk.com",
        "url": "https://www.cnnturk.com/teknoloji/microsoft-rus-hacker-saldirilari-hakkinda-konustu-2128941"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/2024-microsoft-security-initiative/"
      }
    ],
    "notes": "Reclassified from Expertise to Execution: the failing controls were entirely the cloud provider's, and the victim-side condition is the governance arrangement under which tenants carry accountability without assurance or telemetry - a doctrinal-to-material gap rather than a technical execution gap at the tenant."
  },
  {
    "id": "2542",
    "year": 2023,
    "name": "Digital ID Ransomware (Not attributed, 2023)",
    "breachType": "Ransomware attack",
    "resultKey": "execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Digital ID, Greater Manchester Police, Greater London Metropolitan Police",
    "actor": "Not attributed",
    "countries": [
      "United Kingdom"
    ],
    "sectors": [
      "Corporate Targets",
      "State institutions / political system"
    ],
    "subSectors": [
      "Not available",
      "Police"
    ],
    "primaryMarker": "M7",
    "secondaryMarkers": [
      "M1",
      "M4",
      "M10"
    ],
    "summary": "In a recent cybersecurity incident that first affected the Greater London Metropolitan Police, and has now also affected Greater Manchester Police (GMP), it has been revealed that a third party provider, Digital ID, has fallen victim to a ransomware attack. Digital ID, a firm in Stockport which makes ID cards, holds information on various UK organisations.\nThe security breach involved the theft of sensitive data from 47,000 Greater London Metropolitan Police officers. This included important data such as names, ranks, photographs, vetting levels, salary numbers and various other forms of intra-agency identification. Among the officers affected were members of counter-terrorism units responsible for protecting the Royal Family, as well as undercover officers who were subsequently withdrawn from their assignments. The seriousness of this security breach prompted the Deputy Chairman of the Metropolitan Police Federation to warn of the possible misuse of the stolen data, which could cause \"incalculable damage\".\nIn addition to the Greater London Metropolitan Police, it was revealed on 14 September that the Greater Manchester Police was also affected by the security breach, in which personal data of over 12,500 officers and staff was stolen. The security breach exposed data on officers' warrant cards, raising concerns about the potential impact on officer safety and ongoing investigations.\nBoth law enforcement agencies immediately reported the incidents to the National Crime Agency and the UK Information Commissioner's Office, highlighting the importance of robust cybersecurity measures to protect sensitive law enforcement data. These incidents underscore the vulnerability of third-party providers entrusted with law enforcement data and highlight the need for comprehensive security strategies in the face of evolving cyber threats.",
    "rationale": "Two separate police forces delegated production of warrant cards and staff ID to the same supplier, Digital ID, and a single ransomware incident at that supplier exposed personnel data for both simultaneously -- roughly 47,000 Metropolitan Police staff and over 20,000 at Greater Manchester Police. The condition is concentration without assurance: neither force independently verified the supplier's security, and neither appears to have known that a common dependency made them correlated risks rather than independent ones. Data sensitivity aggravates it: names, ranks, photographs and warrant numbers of serving officers, including those in covert roles, cannot be reissued the way a payment card can, so the exposure is permanent and physical. Sector context confirms this was systemic rather than isolated -- reporting at the time identified it as the fifth UK policing data breach within two months, several of them through third parties.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "techcrunch.com",
        "url": "https://techcrunch.com/2023/09/18/uk-police-officers-data-stolen-cyberattack-digital-id"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/attacks-breaches/london-police-warned-to-stay-vigilant-amid-major-data-breach"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/metropolitan-police-data-leak-hackers-uk"
      },
      {
        "label": "theguardian.com",
        "url": "https://www.theguardian.com/uk-news/2023/aug/26/met-police-on-high-alert-after-it-system-holding-officers-details-hacked"
      },
      {
        "label": "bankinfosecurity.com",
        "url": "https://www.bankinfosecurity.com/met-police-officers-at-risk-after-serious-data-breach-a-22947"
      },
      {
        "label": "bbc.com",
        "url": "https://www.bbc.com/news/uk-england-london-66631386"
      },
      {
        "label": "thesun.co.uk",
        "url": "https://www.thesun.co.uk/news/23668982/metropolitan-police-hacked-security-breach/"
      },
      {
        "label": "news.met.police.uk",
        "url": "https://news.met.police.uk/news/statement-re-unauthorised-access-to-it-system-of-a-met-supplier-471333"
      },
      {
        "label": "metfed.org.uk",
        "url": "https://metfed.org.uk/news/metropolitan-police-officer-it-system-breach-mpf-statement"
      },
      {
        "label": "news.sky.com",
        "url": "https://news.sky.com/story/greater-manchester-police-officers-details-targeted-in-ransomware-attack-12960852"
      },
      {
        "label": "gmp.police.uk",
        "url": "https://www.gmp.police.uk/news/greater-manchester/news/news/2023/september/greater-manchester-police-statement-on-data-breach/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/150828/data-breach/greater-manchester-police-gmp-data-breach.html"
      },
      {
        "label": "bbc.co.uk",
        "url": "https://www.bbc.co.uk/news/uk-england-manchester-66810756?at_medium=RSS&at_campaign=KARANGA"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/manchester-police-officers-data-exposed-in-ransomware-attack/"
      },
      {
        "label": "hackread.com",
        "url": "https://www.hackread.com/contractor-data-breach-greater-manchester-police/"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/endpoint/greater-manchester-police-hack-third-party-supplier-fumble"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/the-week-in-ransomware-september-15th-2023-russian-roulette/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/150931/breaking-news/security-affairs-newsletter-round-437-by-pierluigi-paganini-international-edition.html"
      },
      {
        "label": "theguardian.com",
        "url": "https://www.theguardian.com/technology/2023/sep/14/who-is-behind-latest-wave-of-ransomware-attacks"
      },
      {
        "label": "research.checkpoint.com",
        "url": "https://research.checkpoint.com/2023/25th-september-threat-intelligence-report/"
      },
      {
        "label": "hackread.com",
        "url": "https://www.hackread.com/contractor-data-breach-irish-national-police-vehicle-seizure/"
      },
      {
        "label": "techrepublic.com",
        "url": "https://www.techrepublic.com/article/cyber-security-trends-uk/"
      }
    ]
  },
  {
    "id": "2354",
    "year": 2023,
    "name": "Variety of Ukrainian organisations Data Theft (Gamaredon, 2023)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Variety of Ukrainian organisations",
    "actor": "Gamaredon/Shuckworm/BlueAlpha/Aqua Blizzard fka ACTINIUM, DEV-0157/Primitive Bear/Armageddon/UNC530/G0047 (FSB Centre 18, Crimea)",
    "countries": [
      "Ukraine"
    ],
    "sectors": [
      "Unknown",
      "State institutions / political system",
      "Critical infrastructure"
    ],
    "subSectors": [
      "Not available",
      "Government / ministries",
      "Research",
      "Military"
    ],
    "primaryMarker": "M2",
    "secondaryMarkers": [
      "M3",
      "M14",
      "M11"
    ],
    "summary": "The Russia-linked state-sponsored hacking group Shuckworm (aka Gamaredon) gained access to a variety of Ukrainian organisations from February 2023 to, in some cases, May 2023, US IT security firm Symantec reported on 15 June 2023. Ukrainian officials previously had linked Shuckworm to the FSB.\nThe hacking group intended to infiltrate organisations holding military and security intelligence to support the ongoing Russian invasion. Human resource departments of victim organizations, in particular, were a frequent target - suggesting an interest in information about individuals working at the respective institutions. The group also searched for reports on the number of dead Ukrainian military service members, enemy engagements and air strikes, arsenal inventories, and military training activities on compromised systems. \nA new PowerShell script deployed by Shuckworm identifies and spreads to any removable media connected to infected devices, in the apparent attempt to migrate attack tools to air-gapped systems within compromised organisations.",
    "rationale": "Gamaredon/Shuckworm runs high-volume, technically unremarkable phishing against Ukrainian organisations, and has done so under continuous public documentation for years -- which is precisely what makes the victim-side reading interesting. Exposure: the entry route is ordinary email and removable media, not novel exploitation, so the failing controls are user awareness, attachment handling and endpoint execution policy. Persistence: the actor's method is repeated re-entry rather than long stealth, so organisations were compromised, cleaned and compromised again, meaning remediation did not change the conditions that allowed entry. Detection: infections were typically characterised by external research rather than internal monitoring. The victim-side condition is a wartime capability constraint -- organisations under sustained attack with reduced staff and budget cannot sustain the awareness and hygiene programme that this specific, well-known threat requires, so a low-sophistication actor stays effective indefinitely.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/147497/apt/gamaredon-targets-ukraine-new-ttps.html"
      },
      {
        "label": "symantec-enterprise-blogs.security.com",
        "url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/shuckworm-russia-ukraine-military"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/06/new-report-reveals-shuckworms-long.html"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/russian-hackers-use-powershell-usb-malware-to-drop-backdoors/"
      },
      {
        "label": "govinfosecurity.com",
        "url": "https://www.govinfosecurity.com/russian-hackers-using-usb-malware-to-target-ukraine-a-22318"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/147570/breaking-news/security-affairs-newsletter-round-424.html"
      }
    ]
  },
  {
    "id": "2535",
    "year": 2020,
    "name": "Various targets in different countries Ransomware (CosmicBeetle, 2020)",
    "breachType": "Ransomware attack",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Various targets in different countries (CosmicBeetle/Scarab ransomware victims)",
    "actor": "CosmicBeetle",
    "countries": [
      "Taiwan",
      "Poland",
      "Korea, Republic of",
      "Japan",
      "French Guiana",
      "Brazil",
      "Spain",
      "Turkey",
      "China",
      "Paraguay",
      "Hungary",
      "France",
      "Morocco",
      "Israel",
      "Mexico",
      "Canada",
      "Italy",
      "Venezuela",
      "Belgium",
      "Greece",
      "Botswana",
      "Thailand"
    ],
    "sectors": [
      "Unknown",
      "State institutions / political system",
      "Corporate Targets",
      "Education",
      "Critical infrastructure"
    ],
    "subSectors": [
      "Not available",
      "Civil service / administration",
      "Health"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [
      "M11",
      "M9",
      "M3"
    ],
    "summary": "The hacker group 'CosmicBeetle' gained access to the networks of various targets in different countries and deployed the Scarab ransomware during the period of May 2020 to May 2023, the Slovakian IT security firm ESET disclosed in a technical report on 22 August 2023.\nThe hackers very likely gained initial access by exploiting the ZeroLogon vulnerability (CVE-2020-1472) on web servers or via brute forcing remote desktop protocol (RDP) credentials. CosmicBeetle used the Spacecolon malware, which contained the three Delphi components ScHackTool, ScInstaller and ScService. The presence of Turkish strings suggested a Turkish-speaking developer may have authored the malware.\nThe targets were located in East and Southeast Asia, Europe, Turkey and Israel, Morocco and Botswana, North and South America. Specifically named were a hospital and a tourist resort in Thailand, an insurance company in Israel, a local government institution in Poland, an entertainment provider in Brazil, an environmental company in Turkey and a school in Mexico.",
    "rationale": "CosmicBeetle ran opportunistically across many countries and sectors from 2020 to 2023 using long-known unpatched vulnerabilities and a comparatively crude toolset, which tells us more about the victim population than about the actor. Exposure: what these unrelated organisations shared was deferred patching on internet-facing systems over multi-year periods, not a common sector or a common technology. Recovery: Scarab-family deployment is frequently unreliable in its encryption and key handling, so victims who paid could not always recover, making isolated backups the only real restore path. Detection: an unsophisticated actor persisting for three years indicates that entry-level monitoring was absent across much of the target set. Because the victims are unnamed and heterogeneous, confidence is capped: the pattern is well evidenced at population level but no single organisation's lifecycle is documented.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/08/spacecolon-toolset-fuels-global-surge.html"
      },
      {
        "label": "welivesecurity.com",
        "url": "https://www.welivesecurity.com/en/eset-research/scarabs-colon-izing-vulnerable-servers/"
      }
    ],
    "notes": "Victims unnamed and heterogeneous; confidence lowered from 4 to 3 as the evidence is population-level rather than incident-level."
  },
  {
    "id": "2534",
    "year": 2023,
    "name": "5610eu Ransomware (Not attributed, 2023)",
    "breachType": "Ransomware attack",
    "resultKey": "expertise-execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "5610eu, CloudNordic, AzeroCloud",
    "actor": "Not attributed",
    "countries": [
      "Denmark"
    ],
    "sectors": [
      "Corporate Targets",
      "Critical infrastructure"
    ],
    "subSectors": [
      "Not available",
      "Telecommunications"
    ],
    "primaryMarker": "M17",
    "secondaryMarkers": [
      "M9",
      "M8",
      "M7",
      "M6"
    ],
    "summary": "An unknown ransomware group disrupted the entire IT system of two Danish cloud computing service providers CloudNordic and AzeroCloud, both owned by Certiqa Holding, in the early morning of 18 August 2023, both service providers reported in notifications. Ten days after the incident was detected, Azero announced that it was winding down its activities.\nAccording to the notifications, the ransomware group managed to gain access to the critical administrative system, all data storage silos and all backup systems. They encrypted all server disks and data. The ransomware group demanded six Bitcoins in ransom, which is the equivalent of about €146,000.\nConsequently, a majority of both CloudNordic and AzeroCloud customers lost their data stored in the respective clouds. Danish Radio4 reported that hundreds of Danish companies could no longer access their data. Among them was the retail company 5610eu, whose director Per Jakobsen said that business was no longer possible because customers could no longer reach him via the internet.",
    "rationale": "CloudNordic and AzeroCloud lost essentially all customer data in one event, and the providers' own notifications identify the condition: the attack landed during a server migration, when systems were moved between data centres and machines that had previously been isolated were connected to the same network segment, carrying infections and exposed administrative credentials into the new environment. That is a change-window failure -- controls that held in the steady state lapsed during the transition, and no compensating control covered the gap. Recovery is the catastrophic stage: backups were encrypted along with production because they sat within the same newly-connected estate, the providers stated plainly that they could not restore customer data and would not pay, and customers lost websites, mail and archives outright. Blast radius: hosting customers had no visibility into their provider's migration plan and no independent copy of their own data, so a single provider's change management became total data loss for hundreds of businesses.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/hosting-firm-says-it-lost-all-customer-data-after-ransomware-attack/"
      },
      {
        "label": "radio4.dk",
        "url": "https://www.radio4.dk/nyheder/mange-danske-virksomheder-er-ramt-af-hackerangreb-der-er-ingen-virksomhed-tilbage/"
      },
      {
        "label": "cloudnordic.com",
        "url": "https://www.cloudnordic.com/"
      },
      {
        "label": "azero.cloud",
        "url": "https://azero.cloud/"
      },
      {
        "label": "onlinehaendler-news.de",
        "url": "https://www.onlinehaendler-news.de/digital-tech/cyberkriminalitaet/139940-unternehmen-pleite-wegen-hackerangriff"
      },
      {
        "label": "it-daily.net",
        "url": "https://www.it-daily.net/shortnews/nach-ransomware-attacke-cloudnordic-ist-pleite"
      }
    ]
  },
  {
    "id": "2287",
    "year": 2020,
    "name": "Astghik Bedevyan Spyware (Unknown, 2020)",
    "breachType": "Spyware / surveillance",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Astghik Bedevyan (Senior Journalist at RFE/RL’s Armenian Service (Radio Azatutyun), Armenia), Karlen Aslanyan (Journalist at RFE/RL Armenian Service (Radio Azatutyun), Armenia), Ruben Melikyan (Co-founder of Path of Law, Armenia), Kristinne Grigoryan (Human Rights Ombudsperson of the Republic of Armenia, Armenia), Samvel Farmanyan (Co-Founder of ArmNews TV, Armenia), Anna Naghdalyan (NGO representative and former Spokesperson of the Ministry of Foreign Affairs of the Republic of Armenia, Armenia), Anna Naghdalyan (NGO representative and former Spokesperson of the Ministry of Foreign Affairs of the Republic of Armenia, Armenia), Dr. Varuzhan Geghamyan (Assisstant Professor at Yerevan State University, Armenia), Dr. Varuzhan Geghamyan (Assisstant Professor at Yerevan State University, Armenia), Dr. Varuzhan Geghamyan (Assisstant Professor at Yerevan State University, Armenia)",
    "actor": "Unknown",
    "countries": [
      "Armenia",
      "United Nations"
    ],
    "sectors": [
      "Media",
      "Social groups",
      "International / supranational organization",
      "State institutions / political system",
      "Critical infrastructure",
      "Education"
    ],
    "subSectors": [
      "Not available",
      "Advocacy / activists (e.g. human rights organizations)",
      "Civil service / administration",
      "Government / ministries",
      "Research"
    ],
    "primaryMarker": "M3",
    "secondaryMarkers": [
      "M5",
      "M7"
    ],
    "summary": "An undisclosed government used the Pegasus spyware to infect the cell phones of 12 Armenian civil society activists and journalists in the period from 11 October 2020, to 7 December 2022, CitizenLab reported in collaboration with Access Now, CyberHUB-AM, Amnesty International's Security Lab, and independent mobile security researcher Ruben Muradyan on May 25, 2023.\nThe individuals affected are two NGO representatives, one of whom was the spokesperson for the Armenian Ministry of Foreign Affairs, a professor, five journalists, a United Nations official, a former Ombudsman for Human Rights of the Armenian Republic, and two other activists.\nCitizenLab was able to identify two Pegasus operators in Azerbaijan, one investigators called BOZBASH, who is responsible for monitoring targets both inside and outside Azerbaijan, and a second identified as Yamar, who is responsible only for monitoring targets inside Azerbaijan. Both operators were registered on the Pegasus platform by the end of 2018 at the latest. \nCircumstantial evidence suggested that the infections are related to the military conflict between Azerbaijan and Armenia in the disputed Nagorno-Karabakh region.",
    "rationale": "Pegasus targeting of twelve Armenian journalists and civil-society figures, whose exposure derives from the Armenia-Azerbaijan conflict. As with the other individual-target cases here, no lifecycle stage sits with the victim: zero-click delivery against unpatched or then-unknown mobile platform vulnerabilities leaves no configuration or behavioural defence available; there is no organisational security function to detect or contain; and the infection surfaced only because an external forensic lab (Citizen Lab, Access Now or Amnesty International) examined the device, often long afterwards. Blast radius is collective rather than individual -- a journalist's or activist's phone carries the identities of sources and contacts who never consented to that risk. The material gap is structural: state-grade targeting met consumer-grade defences, and the remedies available are platform patching and accountability over commercial spyware vendors and their government clients, neither of which the target controls.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "therecord.media",
        "url": "https://therecord.media/pegasus-used-armenia-during-war"
      },
      {
        "label": "citizenlab.ca",
        "url": "https://citizenlab.ca/2023/05/cr1-armenia-pegasus/"
      },
      {
        "label": "accessnow.org",
        "url": "https://www.accessnow.org/publication/armenia-spyware-victims-pegasus-hacking-in-war/"
      },
      {
        "label": "nbcnews.com",
        "url": "https://www.nbcnews.com/tech/security/nso-spyware-used-armenia-azerbaijan-conflict-report-finds-rcna84035"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Cyber_O51NT/status/1661715427050004480"
      },
      {
        "label": "haaretz.com",
        "url": "https://www.haaretz.com/israel-news/security-aviation/2023-05-25/ty-article/.premium/azerbaijan-suspected-in-hacking-of-armenian-officials-with-israeli-nso-spyware/00000188-4d93-df79-a19d-ff9f51c10000"
      },
      {
        "label": "jpost.com",
        "url": "https://www.jpost.com/international/article-744207"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/k8em0/status/1661872959433359360"
      },
      {
        "label": "govinfosecurity.com",
        "url": "https://www.govinfosecurity.com/pegasus-spyware-spotted-in-nagorno-karabakh-war-a-22183"
      },
      {
        "label": "haaretz.com",
        "url": "https://www.haaretz.com/israel-news/security-aviation/2023-05-29/ty-article/azerbaijan-suspected-in-hacking-of-armenian-officials-with-israeli-nso-spyware/00000188-4d93-df79-a19d-ff9f51c10000"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/05/predator-android-spyware-researchers.html"
      },
      {
        "label": "heise.de",
        "url": "https://www.heise.de/news/iPhone-Spyware-Pegasus-erstmals-in-militaerischem-Konflikt-eingesetzt-9067624.html?wt_mc=rss.red.security.security.rdf.beitrag.beitrag"
      },
      {
        "label": "netzpolitik.org",
        "url": "https://netzpolitik.org/2023/justizstatistik-2021-polizei-hackt-alle-elf-tage-mit-staatstrojanern/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/meduza-ceo-hacked-pegasus-spyware-russian-journalist"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/apple-warns-armenians-state-sponsored-hacking-attempts-azerbaijan"
      }
    ]
  },
  {
    "id": "2198",
    "year": 2020,
    "name": "Dominican Republic journalist Nuria Piera Spyware (Suspected Dominican Republic state authorities, 2020)",
    "breachType": "Spyware / surveillance",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Dominican Republic journalist Nuria Piera",
    "actor": "Suspected Dominican Republic state authorities (per allegation; not independently confirmed)",
    "countries": [
      "Dominican Republic"
    ],
    "sectors": [
      "Media"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M3",
    "secondaryMarkers": [
      "M5",
      "M7"
    ],
    "summary": "State Authorities in the Dominican Republic allegedly used spyware on the mobile devices of the investigative journalist Nuria Piera between 2020 and 2021. A forensic analysis by Amnesty International found evidence for the use of Pegasus, a spyware sold by the Israeli company NSO, on three separate occasions dating back to 7 July 2020.",
    "rationale": "Pegasus targeting of investigative journalist Nuria Piera, whose exposure derives from her reporting on corruption in the Dominican Republic. As with the other individual-target cases here, no lifecycle stage sits with the victim: zero-click delivery against unpatched or then-unknown mobile platform vulnerabilities leaves no configuration or behavioural defence available; there is no organisational security function to detect or contain; and the infection surfaced only because an external forensic lab (Citizen Lab, Access Now or Amnesty International) examined the device, often long afterwards. Blast radius is collective rather than individual -- a journalist's or activist's phone carries the identities of sources and contacts who never consented to that risk. The material gap is structural: state-grade targeting met consumer-grade defences, and the remedies available are platform patching and accountability over commercial spyware vendors and their government clients, neither of which the target controls.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "theguardian.com",
        "url": "https://www.theguardian.com/world/2023/may/02/nuria-piera-spyware-target-nso-group"
      },
      {
        "label": "hackread.com",
        "url": "https://www.hackread.com/threat-actors-spoofing-pegasus-spyware-fake-code/"
      }
    ]
  },
  {
    "id": "2192",
    "year": 2020,
    "name": "Iranian individuals from religious/ethnic minority groups Spyware (Law Enforcement Command of the, 2020)",
    "breachType": "Spyware / surveillance",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Iranian individuals from religious/ethnic minority groups",
    "actor": "Law Enforcement Command of the Islamic Republic of Iran (FARAJA)",
    "countries": [
      "Iran, Islamic Republic of"
    ],
    "sectors": [
      "Social groups"
    ],
    "subSectors": [
      "Ethnic",
      "Criminal"
    ],
    "primaryMarker": "M3",
    "secondaryMarkers": [
      "M8",
      "M6"
    ],
    "summary": "The Law Enforcement Command of the Islamic Republic of Iran (FARAJA) allegedly has infected more than 300 deviceswith the spyware \"BouldSpy\" since March 2020, including those belonging to members of minority groups. Devices of affected individuals are suspected to have been compromised through physical access, when victims had been detained, arrested or passed government checkpoints. According to the cybersecurity company Lookout, the android spyware enabled authorities to access personal information and monitor personal communication on compromised devices. Targeted devices belonged to Iranian Kurds, Baluchis, Azeris or possibly members of other minority groups but also individuals possibly involved with illegal trafficking of alcohol, arms, and drugs. Lookout observed most of the spyware activity around late 2022 during the widespread \"women, life, freedom\" protests in Iran.",
    "rationale": "Members of Iranian religious and ethnic minority communities placed under state surveillance via BouldSpy. Exposure: reporting indicates the spyware was installed through direct physical access to devices -- during detentions or checkpoint stops -- and propagated further via connected and removable media, so the entry route is coercive rather than technical and offers the target no defensive option at all. Persistence and containment: once installed on a device seized by the authority that polices the user, there is no boundary left to enforce; the compromise extends to everything the phone touches. Detection: the campaign surfaced through external malware research, not through anything available to those affected. Blast radius: within a minority community under surveillance, one compromised device maps a social network, so the consequence is collective and physical. Classification records a structural capability constraint, not a lapse by the individuals.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/145550/hacking/iran-bouldspy-android-spyware.html"
      },
      {
        "label": "lookout.com",
        "url": "https://www.lookout.com/blog/iranian-spyware-bouldspy"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/securityaffairs/status/1653516800653492225"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/unix_root/status/1653369364865769474"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/05/bouldspy-android-spyware-iranian.html"
      }
    ]
  },
  {
    "id": "2159",
    "year": 2022,
    "name": "Two Mexican human rights defenders Spyware (Mexican military, 2022)",
    "breachType": "Spyware / surveillance",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Two Mexican human rights defenders",
    "actor": "Mexican military (per investigative reporting)",
    "countries": [
      "Mexico"
    ],
    "sectors": [
      "Social groups"
    ],
    "subSectors": [
      "Advocacy / activists (e.g. human rights organizations)"
    ],
    "primaryMarker": "M3",
    "secondaryMarkers": [
      "M1",
      "M7"
    ],
    "summary": "The Mexican military gained access to the cell phones of two prominent Mexican human rights defenders between 22 June and 29 September 2023, the New York Times reported based on four anonymous sources with knowledge of the contract situation between the Mexican military and the Israeli NSO Group.\nThe two human rights defenders are the director, Santiago Aguirre, and the international coordinator, Maria Luisa Aguilar, of Centro PRODH. Centro PRODH is a human rights and legal aid organization. The espionage also correlated with activities of Centro PRODH in relation to human rights violations committed by the Mexican military.",
    "rationale": "Two Mexican human rights defenders targeted with spyware by their own country's military. As in the other individual-target cases, no lifecycle stage sits with the victim: covert deployment against a personal device offers no configuration or behavioural defence, there is no organisational security function to detect or contain it, and the infection surfaced only through external forensic examination. What distinguishes this case is the accountability stage. The operator is a domestic state institution acting against citizens it is constitutionally bound to protect, so the failing control is civilian oversight of military surveillance capability rather than anything technical -- the remedy sits in law and institutional supervision, not in patching. Blast radius is collective: a defender's device exposes the victims, witnesses and colleagues who trusted them.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "nytimes.com",
        "url": "https://www.nytimes.com/2023/04/18/world/americas/pegasus-spyware-mexico.html"
      },
      {
        "label": "foxnews.com",
        "url": "https://www.foxnews.com/world/press-freedom-groups-spyware-again-used-against-mexican-human-rights-activists"
      },
      {
        "label": "foxnews.com",
        "url": "https://www.foxnews.com/world/mexican-president-accused-wiretapping-activists-violating-pledge"
      },
      {
        "label": "washingtonpost.com",
        "url": "https://www.washingtonpost.com/world/2023/04/18/mexico-pegasus-spyware-activists-press-freedom-army/11027b68-de09-11ed-a78e-9a7c2418b00c_story.html"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/citizenlab/status/1648282686950195201"
      },
      {
        "label": "citizenlab.ca",
        "url": "https://citizenlab.ca/2023/04/nso-groups-pegasus-spyware-returns-in-2022/"
      },
      {
        "label": "tarnkappe.info",
        "url": "https://tarnkappe.info/artikel/it-sicherheit/pegasus-so-kam-der-staatstrojaner-in-2022-auf-dein-iphone-273248.html"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/144981/hacking/nso-group-zero-click-exploits-2022.html"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/04/nso-group-used-3-zero-click-iphone.html"
      },
      {
        "label": "lawfareblog.com",
        "url": "https://www.lawfareblog.com/bidens-spyware-order-needed-first-step"
      },
      {
        "label": "elpais.com",
        "url": "https://elpais.com/https:/elpais.com/mexico/2023-05-22/el-ejercito-espio-con-pegasus-a-alejandro-encinas-subsecretario-de-derechos-humanos.html"
      },
      {
        "label": "elpais.com",
        "url": "https://elpais.com/https:/elpais.com/mexico/2023-05-30/lopez-obrador-acusa-a-israel-de-proteger-a-tomas-zeron-y-anuncia-que-enviara-otra-carta-a-netanyahu.html"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/09/apple-rushes-to-patch-zero-day-flaws.html"
      },
      {
        "label": "zdnet.com",
        "url": "https://www.zdnet.com/article/9-top-mobile-security-threats-and-how-you-can-avoid-them/"
      },
      {
        "label": "eff.org",
        "url": "https://www.eff.org/deeplinks/2023/12/recent-surveillance-revelations-enduring-latin-american-issues-2023-year-review"
      }
    ]
  },
  {
    "id": "2137",
    "year": 2023,
    "name": "NATO School Oberammergau Data Theft (Killnet, 2023)",
    "breachType": "Data theft / espionage",
    "resultKey": "none",
    "confidence": "2/5 — Low — rests on a sector-wide pattern or an unverified claim",
    "victim": "NATO School Oberammergau (NSO), NATO Support and Procurement Agency (NSPA), Allied Command Transformation (NATO), NATO Communications and Information Agency (NCI)",
    "actor": "Killnet",
    "countries": [
      "Germany",
      "Luxembourg",
      "United States",
      "Belgium"
    ],
    "sectors": [
      "International / supranational organization"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M6",
    "secondaryMarkers": [],
    "summary": "The pro-Russian hacktivist group Killnet claimed to have targeted NATO websites and online resources with DDoS attacks in April 2023, according to announcements via its Telegram channel. \nAttempts to disrupt access to online resources allegedly were directed against Allied Command Transformation, the NATO Support and Procurement Agency, and cyber training centers of the alliance. \nThe group further announced to have obtained 150 NATO email addresses and corresponding passwords through the NATO School Oberammergau, which the group leaked and declared to have used to set up accounts on a dating portal used by the LGBTQ+ community in Kyiv and Moldova. Killnet also claimed to have breached a not further specified employee database maintained by NATO Communications and Information Agency (NCIA). None of these claims have been directly confirmed by NATO.",
    "rationale": "A Killnet volumetric campaign against NATO public-facing web properties, alongside a credential leak affecting NATO School Oberammergau. Two different things sit in one row and neither classifies cleanly. The DDoS component is an availability attack on public websites: it exercises upstream mitigation capacity rather than exposing an internal doctrinal or execution gap, and no material compromise of NATO systems was established, so there is no victim-side failure of the kind this framework characterises. The credential leak at the NATO School is a genuinely different condition -- an access-control exposure at a training establishment rather than at operational NATO infrastructure -- but nothing was published on how those credentials were obtained, whether they were reused, or what containment followed. Held at Unknown, with the access-control condition recorded as a marker and the DDoS element explicitly excluded from the classification.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "hackread.com",
        "url": "https://www.hackread.com/killnet-create-gay-dating-profiles-nato-logins/"
      },
      {
        "label": "t.me",
        "url": "https://t.me/killnet_reservs/6078"
      },
      {
        "label": "t.me",
        "url": "https://t.me/killnet_reservs/6079"
      },
      {
        "label": "socradar.io",
        "url": "https://socradar.io/collective-security-in-cyberspace-with-nato/"
      },
      {
        "label": "hackread.com",
        "url": "https://www.hackread.com/siegedsec-hacktivist-hack-nato-data-leak/"
      }
    ],
    "notes": "Composite row: a DDoS campaign and a separate credential leak. DDoS as such is treated in this dataset as outside the DV construct, since availability exhaustion of a public website does not evidence a doctrinal-material or knowing-doing gap. If the two events are to be analysed separately they should be split into two rows."
  },
  {
    "id": "2097",
    "year": 2022,
    "name": "Unknown/unspecified targets Data Theft (Mustang Panda, 2022)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Unknown/unspecified targets (Earth Preta/Mustang Panda spear-phishing campaign)",
    "actor": "Mustang Panda/RedDelta/Bronze President/Stately Taurus/Earth Preta/TA416/HoneyMyte/Camaro Dragon",
    "countries": [
      "Not available"
    ],
    "sectors": [
      "Not available"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M2",
    "secondaryMarkers": [
      "M11",
      "M3"
    ],
    "summary": "Trend Micro reports a new campaign by threat actor Earth Preta (also known as Mustang Panda) in March 2023, which has been using password-protected lure archives through spear phishing emails and Google Drive links since October 2022 to exfiltrate confidential data. This campaign used modified tactics, techniques, and procedures (TTP) to avoid detection.",
    "rationale": "An Earth Preta/Mustang Panda campaign whose targets are unspecified, which caps what can be said. Exposure: delivery used password-protected archives distributed by spear phishing and Google Drive links -- deliberately chosen because password protection defeats automated gateway inspection, so the control that would normally catch the payload is bypassed by design and the decision to open falls to a recipient who has been given a plausible reason and a password. Persistence: the actor is documented as maintaining long-term access in government and NGO targets rather than acting once. Detection: the campaign was characterised by external research. The victim-side condition is an attachment-handling and gateway-inspection policy that had not adapted to a delivery method this actor has used publicly for years. Confidence stays at 3 because no named victim's lifecycle is available.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/03/researchers-uncover-chinese-nation.html"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/switch_d/status/1639228505014558720"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/780thC/status/1639222023309148165"
      },
      {
        "label": "trendmicro.com",
        "url": "https://www.trendmicro.com/en_us/research/23/c/earth-preta-updated-stealthy-strategies.html"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Dinosn/status/1639220060802674688"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/144078/apt/earth-preta-infection-chain.html"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/03/chinese-redgolf-group-targeting-windows.html"
      },
      {
        "label": "trendmicro.com",
        "url": "https://www.trendmicro.com/vinfo/us/security/research-and-analysis/threat-reports/roundup/annual-trend-micro-email-threats-report"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/vulnerabilities-threats/defending-against-attacks-on-vulnerable-iot-devices"
      }
    ]
  },
  {
    "id": "2082",
    "year": 2021,
    "name": "Artemis Seaford Spyware (National Intelligence Service Greece, 2021)",
    "breachType": "Spyware / surveillance",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Artemis Seaford (Meta Manager)",
    "actor": "National Intelligence Service Greece (EYP)",
    "countries": [
      "United States"
    ],
    "sectors": [
      "End user(s) / specially protected groups"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M3",
    "secondaryMarkers": [
      "M1",
      "M7"
    ],
    "summary": "Artemis Seaford, a dual US-Greek Manager from Meta, who lived and worked partly in Greece from 2020 until 2022, was targeted with Predator spyware from September 2021 onwards for at least two months. According to the New York Times, Seaford saw her name on a leaked list of spyware targets in the Greek media and sent her phone to the Canada-based Citizen Lab. The Times obtained the report of the analysis which confirmed the infection of Seaford's phone with the surveillance tool. Seaford filed a lawsuit in Greece against anyone involved in the surveillance order. The forensic analysis conducted by Citizen Lab revealed an SMS containing a malicious link as the infection vector. Sent five hours after an initial SMS confirmation of a Covid vaccination Seaford had booked in September 2021, the text asked her to click on the link ostensibly to verify the request. Two anonymous sources with \"direct knowledge of the case\" stated that Seaford had been wiretapped by the Greek national intelligence service EYP in August 2021, a possible indication of how attackers discovered the opening to package the malicious SMS as an appointment confirmation request.",
    "rationale": "Artemis Seaford was a Meta employee living in Greece, targeted with Predator spyware via an SMS lure by her own state's intelligence service. The case sits across three accountability boundaries, which is what makes it hard to place. The individual had no meaningful defence: commercial spyware delivered by SMS to a personal device is not something a user configuration prevents. Her employer carried a duty of care to a staff member targeted abroad but no jurisdictional means to act. And the operating party was a state intelligence service acting against a citizen, so the failing control is again civilian oversight rather than a technical measure -- the affair contributed to a national political crisis in Greece precisely because that oversight had not functioned. Detection came through external forensic research. Recorded as a structural capability constraint with a governance dimension, not a lapse by the target.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/google-predator-spyware-infected-android-devices-using-zero-days/"
      },
      {
        "label": "nytimes.com",
        "url": "https://www.nytimes.com/2023/03/20/world/europe/greece-spyware-hacking-meta.html"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/03/president-biden-signs-executive-order.html"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/05/predator-android-spyware-researchers.html"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/12/multi-million-dollar-predator-spyware.html"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/us-announces-visa-ban-on-those-linked-to-commercial-spyware/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/new-predator-spyware-infrastructure-identified"
      }
    ]
  },
  {
    "id": "2352",
    "year": 2022,
    "name": "GSC Game World Data Theft (Unknown, 2022)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "GSC Game World",
    "actor": "Unknown",
    "countries": [
      "Ukraine"
    ],
    "sectors": [
      "Corporate Targets"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M3",
    "secondaryMarkers": [
      "M10",
      "M12"
    ],
    "summary": "An apparent Russian hacker group gained access to the network of Ukrainian video game developer GSC Game World and stole as well as leaked a version of the first-person shooter game S.T.A.L.K.E.R. 2: Heart of Chornobyl in 2022. \nThe stolen files were distributed via the Russian social network VK by an account called \"That Very Stalker\" on 30 May 2023. Two days later, on 1 June, the Ukrainian video game developer GSC Game World confirmed that Russian hackers had gained access to the internal test builds of the studio through a vulnerability. The Ukrainian company said that they have been attacked by Russian hackers for one and a half years. \nBritish computer magazine PC Gamer connected the leak to a message from 11 March 2023, when the same VK account claimed to have stolen content from the game. In his message, the account demanded that the Ukrainian video game developer apologize to Russian and Belarusian gamers, lift the ban on user NF Star on Discord, and restore Russian localization for the upcoming Stalker 2 game. The Ukrainian game developer confirmed the compromise of an employee account a day later, on 12 March.",
    "rationale": "GSC Game World is a mid-sized Ukrainian studio holding pre-release assets for a title with very high commercial value, and it was operating under wartime displacement -- staff relocated, offices moved -- while carrying an attacker interest driven partly by the game's Ukrainian identity. The asset-value-to-security-investment mismatch is the core condition: the material worth of the data resembled that of a major publisher while the security function resembled that of a mid-sized studio under duress. Egress and blast radius: development builds and internal materials left the environment and were published, an exposure that cannot be undone and that reaches partners and staff as well as the company. Response: the studio disclosed publicly and asked the community not to distribute the material, which is candid but is also the only remaining control once content is out. Confidence lowered to 3 because no detection, containment or entry detail was ever published.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Dennis_Kipker/status/1664260031385157635"
      },
      {
        "label": "pcgamer.com",
        "url": "https://www.pcgamer.com/gsc-game-world-says-russian-hackers-are-leaking-stalker-2-test-builds-please-dont-look-at-them/?utm_source=substack&utm_medium=email"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/stalker_thegame/status/1664315994683195412"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/stalker%5Fthegame/status/1634939872317411329"
      },
      {
        "label": "vk.com",
        "url": "https://vk.com/wall-165011456_31259"
      },
      {
        "label": "vk.com",
        "url": "https://vk.com/vestnik_tss?w=wall-165011456_49833"
      }
    ]
  },
  {
    "id": "1972",
    "year": 2022,
    "name": "Abulfaz Gurbanli Disruption (Not attributed, 2022)",
    "breachType": "Network disruption / hijacking",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Abulfaz Gurbanli",
    "actor": "Not attributed",
    "countries": [
      "Azerbaijan"
    ],
    "sectors": [
      "Social groups"
    ],
    "subSectors": [
      "Advocacy / activists (e.g. human rights organizations)"
    ],
    "primaryMarker": "M3",
    "secondaryMarkers": [
      "M6",
      "M2"
    ],
    "summary": "On 15 February 2022, Azerbaijan Internet Watch reported that the political activist Abulfaz Gurbanli lost access to his Gmail and Facebook account through a phishing email after deleting and resetting his device, and could not access it again until 17 February. A few months earlier, a report was released on the dissemination of the Pegasus spy software and listed numbers of activists, including Gurbanli, whose devices had been infected. This caused Gurbanli to reset his device. On 15 February, he was asked for an interview by an alleged journalist from the BBC Azerbaijan Service, who sent him an email with an infected attachment that, when opened, downloaded malware. Through the backdoor which was installed in the context, the hacker was able to access Gurbanli's accounts and delete the content of at least seven community sites where the activist was an administrator. The attack came shortly after the publication of an article by a pro-government media outlet that accused Gurbanli of organising colour revolutions in Azerbaijan. Based on that, this incident is assigned to the domestic conflict between Azerbaijan and the opposition, even though no attribution has been published.",
    "rationale": "Abulfaz Gurbanli, an Azerbaijani civil-society figure, had personal email and social-media accounts compromised through phishing. The condition is the same structural one seen across the individual-target rows: no organisational IT function exists to enforce credential hygiene, run awareness training or provide MFA and monitoring, so the entire defence rests on one person's judgement against an operator with time and resources. Persistence and blast radius: account compromise in a repressive context grants access to correspondence with other activists and with sources, so the consequence is collective and can be physical. Detection: compromises of this kind typically surface through external civil-society security labs rather than through the platform or the individual. The remedy sits in accessible, well-supported account-protection programmes for at-risk individuals rather than in anything the target could have executed alone.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "az-netwatch.org",
        "url": "https://www.az-netwatch.org/news/deliberate-targeting-in-pro-government-media-leads-to-targeted-attacks-online-the-case-of-abulfaz-gurbanli/"
      },
      {
        "label": "qurium.org",
        "url": "https://www.qurium.org/alerts/azerbaijan/yet-another-targeted-malware-against-azerbajani-political-activists/"
      }
    ]
  },
  {
    "id": "2266",
    "year": 2023,
    "name": "Four Ukrainian insurance companies Data Theft (Unattributed pro-Russian hacktivists, 2023)",
    "breachType": "Data theft / espionage",
    "resultKey": "none",
    "confidence": "2/5 — Low — rests on a sector-wide pattern or an unverified claim",
    "victim": "Four Ukrainian insurance companies",
    "actor": "Unattributed pro-Russian hacktivists",
    "countries": [
      "Ukraine"
    ],
    "sectors": [
      "Corporate Targets"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M3",
    "secondaryMarkers": [
      "M10"
    ],
    "summary": "As reported by the State Service of Special Communications and Information Protection of Ukraine (SSSCIP), unnamed Russian hacktivists accessed and stole data from four of Ukraine's ten largest insurance companies in April 2023. This data was reportedly then made public. Depending on the affected insurer, the data included contact details, addresses, employment, travel and vehicle information, as well as medical data.",
    "rationale": "Ukraine's SSCIP reported successful attacks against more than a third of the country's largest insurers, with the data assessed as intended for psychological operations or blackmail rather than extortion. The sector-level condition is therefore well evidenced: a shared exposure profile across an entire regulated industry under wartime conditions, holding policyholder data whose weaponisation is the point of the operation rather than a by-product. What is absent is any organisation's lifecycle: SSCIP published no detection, dwell-time, containment or notification detail, and no individual insurer disclosed. As with the South Korean subcontractor case, a well-evidenced sector pattern does not by itself locate the failure on an axis for these specific victims, so the classification is held at Unknown with the capability and data-governance conditions recorded.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "twitter.com",
        "url": "https://twitter.com/SSSCIP/status/1660575384818143232"
      },
      {
        "label": "cip.gov.ua",
        "url": "https://cip.gov.ua/en/news/vorozhi-khakeri-aktivizuvali-polyuvannya-na-personalni-dani-gromadyan"
      }
    ],
    "notes": "Web-verified (14-08-26) via GovInfoSecurity/SSCIP monthly report; impact confirmed, no vector disclosed."
  },
  {
    "id": "2086",
    "year": 2022,
    "name": "Independent Living Systems Data Theft (Not attributed, 2022)",
    "breachType": "Data theft / espionage",
    "resultKey": "execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Independent Living Systems (ILS)",
    "actor": "Not attributed",
    "countries": [
      "United States"
    ],
    "sectors": [
      "Corporate Targets",
      "Critical infrastructure"
    ],
    "subSectors": [
      "Not available",
      "Health"
    ],
    "primaryMarker": "M13",
    "secondaryMarkers": [
      "M10",
      "M7"
    ],
    "summary": "Florida-based Independent Living Systems (ILS), a healthcare services provider, was targeted by unknown actors between 30 June and 5 July 2022, resulting in the theft of potentially sensitive personal data of over 4.2 million individuals, including names, addresses, dates of birth, health insurance information, social security numbers, billing information, and medical records containing details on diagnoses, treatments, prescriptions and other mental and physical health assessments. In its incident notification, ILS does not directly clarify whether the attack involved ransomware but notes the attack rendered certain computer systems inaccessible, a description that could fit a ransomware attack. ILS took action to remedy the impact of the attack and alerted authorities, which confirmed the scope of the breach. The breach was confirmed by ILS in September 2022 and affected customers were notified in March 2023.",
    "rationale": "Independent Living Systems administers care and health-plan services on behalf of health plans and their members, so it holds protected health information for roughly 4.2 million people as a processor rather than as the originating provider. The documented lifecycle failure is at the disclosure stage and it is substantial: approximately eight months elapsed between detection and notification of affected individuals, during which those people could take no protective action over exposed health and identity data. That is not a gap in a technical control but a failure to translate a custody obligation into timely execution, which places it in the diagonal rather than the material column. Blast radius: because ILS operates for multiple health plans, the exposure propagated to members of organisations that had no relationship with ILS and no visibility into its security. The entry vector was never disclosed and, under the lifecycle rule, is not what the classification rests on.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/143832/data-breach/independent-living-systems-data-breach.html"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/ils-data-breach-patient-information"
      },
      {
        "label": "cpomagazine.com",
        "url": "https://www.cpomagazine.com/cyber-security/massive-data-breach-at-healthcare-provider-ils-compromises-millions-of-patients/"
      },
      {
        "label": "apps.web.maine.gov",
        "url": "https://apps.web.maine.gov/online/aeviewer/ME/40/aacdb720-e082-4ef6-b7e6-f03280b2c4ec.shtml"
      },
      {
        "label": "prnewswire.com",
        "url": "https://www.prnewswire.com/news-releases/independent-living-systems-provides-notice-of-data-event-301771989.html"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/healthcare-provider-ils-warns-42-million-people-of-data-breach/"
      },
      {
        "label": "databreaches.net",
        "url": "https://www.databreaches.net/independent-living-systems-updates-its-breach-disclosure-notifying-more-than-4-2-million-patients/"
      },
      {
        "label": "govinfosecurity.com",
        "url": "https://www.govinfosecurity.com/long-term-care-services-firm-says-breach-affects-42-million-a-21448"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/144054/breaking-news/security-affairs-newsletter-round-412-by-pierluigi-paganini.html"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/clinical-test-data-of-enzio-biochem-stolen"
      }
    ],
    "notes": "Reclassified from Unknown on the strength of the documented ~8-month detection-to-notification gap, which is a victim-side lifecycle failure independent of the undisclosed entry vector. Confidence held at 3 because no other stage is documented."
  },
  {
    "id": "1890",
    "year": 2020,
    "name": "Exclu Data Theft (Dutch Public Prosecution Service, 2020)",
    "breachType": "Data theft / espionage",
    "resultKey": "none",
    "confidence": "1/5 — Indicative — case is atypical for the framework",
    "victim": "Exclu",
    "actor": "Dutch Public Prosecution Service",
    "countries": [
      "Netherlands"
    ],
    "sectors": [
      "Social groups"
    ],
    "subSectors": [
      "Criminal"
    ],
    "primaryMarker": "M7",
    "secondaryMarkers": [],
    "summary": "The National Public Prosecution Service of the Netherlands oversaw two investigations into the encrypted messaging platform Exclu. The efforts resulted in the arrest of the two owners and managers of the communications service as well as 40 users suspected of reyling on the application for the planning and coordination of crimes. Named 26Samber and 26Lytham, the operations that had been underway since September 2020 and April 2022, respectively, broke into Exclu to monitor communications. The platform has subsequently been dismantled. \nAs part of this cross-broder investigation, Dutch investigators collaborated with Eurojust, Europol, and local law enforcement partners in Italy, Sweden, France, and Germany.",
    "rationale": "Law-enforcement infiltration and takedown of Exclu, an encrypted communications platform used by organised crime -- an attacker-side case with no victim organisation in the framework's sense, consistent with the ALPHV/BlackCat, LockBit, Trigona, Hive and Qakbot rows. Read against the platform's own operations there is one instructive point: the decryption capability reportedly derived from a 2019 raid on hosting provider CyberBunker rather than from a fresh exploit, meaning the platform inherited a compromise from a supplier relationship years earlier and never re-established assurance over it. Recorded as Unknown/atypical rather than forced onto an axis.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/police-hacked-exclu-secure-message-platform-to-snoop-on-criminals/"
      },
      {
        "label": "hackread.com",
        "url": "https://www.hackread.com/cybercrime-encrypted-messenger-exclu-seized/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/josephfcox/status/1622617173389676546"
      },
      {
        "label": "politie.nl",
        "url": "https://www.politie.nl/nieuws/2023/februari/3/politie-leest-opnieuw-mee-met-criminelen.html"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/doj-cybercrime-disruption-ransomware/"
      }
    ],
    "notes": "Attacker-infrastructure case retained for completeness; excluded from victim-side pattern analysis."
  },
  {
    "id": "1865",
    "year": 2023,
    "name": "Unspecified Ukrainian organisation Wiper Attack (Sandworm, 2023)",
    "breachType": "Destructive wiper attack",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Unspecified Ukrainian organisation (Sandworm/SwiftSlicer target)",
    "actor": "Sandworm/APT44/VOODOO Bear/Quedagh/TeleBots/FROZENBARENTS/IRON VIKING/Black Energy/Seashell Blizzard fka IRIDIUM/ELECTRUM/G0034 (GRU, Main Centre for Special Technologies (GTsST) Military Unit 74455)",
    "countries": [
      "Ukraine"
    ],
    "sectors": [
      "Unknown"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M6",
    "secondaryMarkers": [
      "M16",
      "M11",
      "M9"
    ],
    "summary": "On 25 January 2023, Slovakian IT security firm ESET discovered a new wiper, named SwiftSlicer, in the network of a Ukrainian organization. The company attributed the destructive malware to the Russian state-sponsored hacking group Sandworm. No details on the impact of the wiper or the known target have been reported.",
    "rationale": "A Ukrainian organisation hit with the SwiftSlicer wiper. The decisive victim-side evidence, per ESET, is the delivery method: SwiftSlicer was pushed via Active Directory Group Policy, which means Sandworm already held domain-administrator control before the destructive stage began. Everything of interest therefore sits upstream of the wiper. Privileged access: domain admin was obtained and not detected or revoked. Dwell and detection: the actor had time to establish that control and to stage distribution, without triggering a response. Blast radius: GPO distribution reaches every domain-joined machine at once, so the organisation's own management plane determined the scale of destruction -- the same management-tooling weaponisation seen in the Mobile Guardian case. Recovery: as a wiper there is no decryption path, so restoration depended entirely on backups isolated from a domain the attacker controlled -- a condition few organisations meet. The original entry vector is undisclosed and is not load-bearing.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "welivesecurity.com",
        "url": "https://www.welivesecurity.com/2023/01/27/swiftslicer-new-destructive-wiper-malware-ukraine/"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/attacks-breaches/russia-sandworm-apt-swarm-wiper-attacks-ukraine"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/ukraine-russia-wiper-malware/"
      },
      {
        "label": "welivesecurity.com",
        "url": "https://www.welivesecurity.com/2023/02/24/year-wiper-attacks-ukraine/"
      },
      {
        "label": "nrc.nl",
        "url": "https://www.nrc.nl/nieuws/2023/02/26/zelfs-rusland-houdt-grote-cyberaanvallen-maar-eventjes-vol-a4158110"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Cyber_O51NT/status/1629280661474508801"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/780thC/status/1629087842516320256"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/03/from-ransomware-to-cyber-espionage-55.html"
      },
      {
        "label": "cybersecasia.net",
        "url": "https://www.cybersecasia.net/news/apt-activities-from-china-n-korea-iran-and-russia"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/sandworm-wiper-ukraine-russia-military-intel/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/sandworm-swiftslicer-malware-ukraine-russia-eset/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/CyberScoopNews/status/1619100786092539906"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/LisaForteUK/status/1619077445264769024"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/ESETresearch/status/1618960022150729728"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/CyberScoopNews/status/1619044030154940417"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/TomHegel/status/1619029756682579968"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/RecordedFuture/status/1619109632882135040"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/CyberScoopNews/status/1619019403890233349"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/ericgeller/status/1618972354264330241"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/01/ukraine-hit-with-new-golang-based.html"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/141473/apt/sandworm-targets-ukraine-swiftslicer.html"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/141509/breaking-news/security-affairs-newsletter-round-404-by-pierluigi-paganini.html"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/AnonOpsSE/status/1619250900689731585"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Cyber_O51NT/status/1619272958786273280"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/780thC/status/1620022717566324741"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/DarkReading/status/1620190750095933440"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/securityaffairs/status/1620174289751384064"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/securityaffairs/status/1620012597360857088"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/BlackBerrySpark/status/1620537202382983173"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/CSIS_Tech/status/1620542650834382849"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/DarkReading/status/1620558295672012807"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Cyber_O51NT/status/1620571509596229632"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Dennis_Kipker/status/1620838241174982656"
      }
    ]
  },
  {
    "id": "1861",
    "year": 2022,
    "name": "Hive Ransomware (Unknown, 2022)",
    "breachType": "Ransomware attack",
    "resultKey": "none",
    "confidence": "1/5 — Indicative — case is atypical for the framework",
    "victim": "Hive (Ransomware Group)",
    "actor": "Unknown",
    "countries": [
      "Not available"
    ],
    "sectors": [
      "Social groups"
    ],
    "subSectors": [
      "Criminal"
    ],
    "primaryMarker": "M11",
    "secondaryMarkers": [],
    "summary": "In a press conference on 26 January 2023, US Attorney General Merrick Garland, FBI Director Christopher Wray, and Deputy US Attorney General Lisa Monaco announced that US law enforcement had infiltrated the ransomware group Hive beginning in July 2022 and had now dismantled it. \nThe investigation into the group's operations is still ongoing, yet officials at the joint press event announced that the intervention managed to stop Hive from extorting over $130 million from over 300 victims by securing encryption keys.\nThe US Department of Justice, in cooperation with the German Federal Criminal Police, the Dutch National High Tech Crime Unit and other law enforcement agencies from a total of 13 countries, seized the ransomware outfit's websites and a variety of associated servers.\nAgainst this backdrop, the US State Department reiterated that it is offering a reward of up to 10 million USD for information linking Hive to a foreign government under its Rewards for Justice program regarding foreign malicious cyber activity against US critical infrastructure, which was first announced in July 2021.",
    "rationale": "FBI infiltration and takedown of the Hive ransomware group's own infrastructure -- an attacker-side operation with no victim organisation in the framework's sense, consistent with the ALPHV/BlackCat, LockBit, Trigona, Qakbot and Exclu rows. Read against the group's own operations, the notable lifecycle point is duration and invisibility: the FBI held covert access to Hive's environment for roughly seven months, distributing over 1,300 decryption keys to victims during that period without the group detecting the presence in its own systems. A criminal enterprise whose business model depends on stealth had no monitoring of its own infrastructure. Recorded as Unknown/atypical rather than forced onto an axis.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "malwarebytes.com",
        "url": "https://www.malwarebytes.com/blog/business/2023/02/ransomware-in-february-2023"
      },
      {
        "label": "socradar.io",
        "url": "https://socradar.io/why-ransomware-groups-switch-to-rust-programming-language/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Dennis_Kipker/status/1623655370613825537"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Dinosn/status/1624253493371367425"
      },
      {
        "label": "malwarebytes.com",
        "url": "https://www.malwarebytes.com/blog/news/2023/01/hive-ransomware-infrastructure-taken-down"
      },
      {
        "label": "telecom.economictimes.indiatimes.com",
        "url": "https://telecom.economictimes.indiatimes.com/news/us-infiltrates-big-ransomware-gang-we-hacked-the-hackers/97362416"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/vulnerabilities-threats/hive-ransomware-gang-loses-honeycomb"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/ics-ot/the-doj-disruption-of-the-hive-ransomware-group-is-a-short-lived-win"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/DarkReading/status/1630603955670507521"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/DigitalPeaceNow/status/1630705797964390401"
      },
      {
        "label": "lawfareblog.com",
        "url": "https://www.lawfareblog.com/biden-harris-administration-releases-new-national-cybersecurity-strategy"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/threat-intelligence/police-raid-alleged-core-members-of-doppelpaymer-ransomware-gang"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/doppelpaymer-ransomware-gang-europol-raid/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/nicoleperlroth/status/1633871105701343233"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/141374/cyber-crime/hive-ransomware-leak-site-seized.html"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/fbi-europol-hive-ransomware-group/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/we-hacked-the-hackers-doj-fbi-take-down-hive-ransomware-after-spending-months-inside-gang-systems/"
      },
      {
        "label": "databreaches.net",
        "url": "https://www.databreaches.net/hive-ransomwares-infrastructure-seized-law-enforcement-hacked-the-hackers/"
      },
      {
        "label": "databreaches.net",
        "url": "https://www.databreaches.net/developing-hives-leak-site-seized/"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/01/hive-ransomware-infrastructure-seized.html"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/CyberScoopNews/status/1618665069457408002"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/vxunderground/status/1618735957905399809"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/iblametom/status/1618636574576762888"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/securityaffairs/status/1618691549747093504"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/securityaffairs/status/1618654659140554760"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/ryanaraine/status/1618645526689513474"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/TheJusticeDept/status/1618693732743651363"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/TheJusticeDept/status/1618642033475723266"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/vxunderground/status/1618637541728743425"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/iblametom/status/1618633273160372225"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/snlyngaas/status/1618625807299272704"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/CryptoInsane/status/1618716691873284097"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/JaneFrankland/status/1618751567775125504"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Cyberknow20/status/1618705284826034179"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/switch_d/status/1618718766061297685"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/darktracer_int/status/1618620256901271552"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/ido_cohen2/status/1618601828786274308"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Bing_Chris/status/1618644695126794242"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/zackwhittaker/status/1618644680492855309"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/snlyngaas/status/1618632775598497792"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/InfoSecSherpa/status/1618667345756704769"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/chuksjonia/status/1618637845698342913"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/cahlberg/status/1618748557875634176"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/WSJCyber/status/1618658354905096192"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/jeffstone500/status/1618640814317662214"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/SentinelOne/status/1618687307586093056"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/unix_root/status/1618666829752242187"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/snlyngaas/status/1618655560118976513"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/lukOlejnik/status/1618656989583921153"
      },
      {
        "label": "diepresse.com",
        "url": "https://www.diepresse.com/6243466/strafverfolgern-gelingt-schlag-gegen-hackergruppe-hive"
      },
      {
        "label": "sueddeutsche.de",
        "url": "https://www.sueddeutsche.de/wirtschaft/hacker-hive-polizei-ransomware-1.5739999"
      },
      {
        "label": "tarnkappe.info",
        "url": "https://tarnkappe.info/artikel/cyberangriff/hive-ransomware-group-hacker-netzwerk-zerschlagen-264221.html"
      },
      {
        "label": "jyllands-posten.dk",
        "url": "https://jyllands-posten.dk/international/usa/ECE14903518/usa-nedlaegger-hjemmeside-brugt-til-afpresning-for-700-millioner-kroner/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Dinosn/status/1618694222714109952"
      },
      {
        "label": "reuters.com",
        "url": "https://www.reuters.com/world/us/announcement-posted-hive-ransomware-groups-site-says-it-has-been-seized-by-fbi-2023-01-26/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/FBI/status/1618637314972086272"
      },
      {
        "label": "justice.gov",
        "url": "https://www.justice.gov/opa/pr/us-department-justice-disrupts-hive-ransomware-variant"
      },
      {
        "label": "justice.gov",
        "url": "https://www.justice.gov/opa/speech/deputy-attorney-general-lisa-o-monaco-delivers-remarks-disruption-hive-ransomware-variant"
      },
      {
        "label": "justice.gov",
        "url": "https://www.justice.gov/opa/speech/attorney-general-merrick-b-garland-delivers-remarks-disruption-hive-ransomware-variant"
      },
      {
        "label": "europol.europa.eu",
        "url": "https://www.europol.europa.eu/media-press/newsroom/news/cybercriminals-stung-hive-infrastructure-shut-down"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/RFJ_USA/status/1618658902626779136"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/ransomware-experts-laud-hive-takedown-but-question-impact-without-arrests/"
      },
      {
        "label": "techrepublic.com",
        "url": "https://www.techrepublic.com/article/fbi-takes-down-hive-ransomware-group/"
      },
      {
        "label": "nakedsecurity.sophos.com",
        "url": "https://nakedsecurity.sophos.com/2023/01/27/hive-ransomware-servers-shut-down-at-last-says-fbi/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/aselawaid/status/1618782536469221377"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/AlexMartin/status/1618970835422961665"
      },
      {
        "label": "lawfareblog.com",
        "url": "https://www.lawfareblog.com/justice-department-thwarts-hive-ransomware-scheme"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/securityaffairs/status/1618904278625849346"
      },
      {
        "label": "hackread.com",
        "url": "https://www.hackread.com/hive-ransomware-gang-disrupted-site-seized/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Cyber_O51NT/status/1618800047839391744"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/CyberScoopNews/status/1618796790815547393"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/hackerfantastic/status/1619120472154836993"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/HackRead/status/1618943365508386817"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/_r_netsec/status/1619035786942488577"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/LisaForteUK/status/1618964276512710660"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/cahlberg/status/1619122051033497600"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/UK_Daniel_Card/status/1618866236716355585"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/NSA_CSDirector/status/1618778557853077507"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/RecordedFuture/status/1619109684421742592"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/TonyaJoRiley/status/1618962048750346241"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/CyberScoopNews/status/1618976249514463232"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/cahlberg/status/1619084779382788096"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/TheJusticeDept/status/1619074452481777677"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/SentinelOne/status/1619002761974091778"
      },
      {
        "label": "abc.es",
        "url": "https://www.abc.es/internacional/fbi-hive-ciberchantajistas-hackers-20230127091246-nt.html"
      },
      {
        "label": "elmundo.es",
        "url": "https://www.elmundo.es/tecnologia/2023/01/26/63d2fcbffc6c83ea348b4584.html"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/141491/cyber-crime/crooks-mimicking-lockbit-gang.html"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/meduza-russia-outlaw-security-roundup/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/chuksjonia/status/1619124899099951104"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/RecordedFuture/status/1619347106841624576"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Cyberknow20/status/1619124446987706370"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/mruef/status/1619742440092467202"
      },
      {
        "label": "cybersecasia.net",
        "url": "https://www.cybersecasia.net/news/fbi-seizes-servers-of-the-notorious-hive-ransomware-threat-group"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/WSJCyber/status/1620129094628171788"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/nicoleperlroth/status/1620088484966064128"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/snlyngaas/status/1620414277818679296"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/DigitalPeaceNow/status/1620546530875957248"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/DigitalPeaceNow/status/1620806681134354432"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/russian-ransomware-ryuk-guilty/"
      },
      {
        "label": "databreaches.net",
        "url": "https://www.databreaches.net/more-lawsuits-filed-over-knox-college-ransomware-attack/"
      },
      {
        "label": "socradar.io",
        "url": "https://socradar.io/whats-next-for-cybercrime-ecosystem-after-genesis-market-takedown/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/doj-lisa-monaco-urges-cisos-to-work-with-gov-uber-sentencing"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/doj-cybercrime-disruption-ransomware/"
      },
      {
        "label": "socradar.io",
        "url": "https://socradar.io/dark-web-profile-blackbyte-ransomware/"
      },
      {
        "label": "decoded.avast.io",
        "url": "https://decoded.avast.io/threatresearch/avast-q1-2023-threat-report/?utm_source=rss&utm_medium=rss&utm_campaign=avast-q1-2023-threat-report"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/ics-ot/2-years-after-colonial-pipeline-attack-us-critical-infrastructure-remains-as-vulnerable-to-ransomware"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/securityaffairs/status/1658585005969293314"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/hive-ransomware-decryptors-fbi-bryan-smith-interview-click-here"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/146483/breaking-news/security-affairs-newsletter-round-420.html"
      },
      {
        "label": "welivesecurity.com",
        "url": "https://www.welivesecurity.com/2023/07/11/eset-threat-report-h1-2023/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/cynthia-kaiser-fbi-ransomware-hive/"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/vulnerabilities-threats/how-to-mitigate-cybersecurity-risks-from-misguided-trust"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/new-hunters-international-ransomware-possible-rebrand-of-hive/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/police-seize-ragnar-locker-leak-site/"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2023/10/europol-dismantles-ragnar-locker.html"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/police-dismantle-ransomware-group-behind-attacks-in-71-countries/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/russian-with-hive-ties-arrested-france"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/fbi-seizes-alphv-leak-website-hours-later-ransomware-gang-claims-it-unseized-it/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/how-the-fbi-seized-blackcat-alphv-ransomwares-servers/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/fbi-warrant-reveals-confidential-source-helped-alphv-ransomware-takedown"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/doj-to-increase-cybercrime-efforts"
      },
      {
        "label": "unit42.paloaltonetworks.com",
        "url": "https://unit42.paloaltonetworks.com/unit-42-ransomware-leak-site-data-analysis/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/us-offers-10-million-for-tips-on-hive-ransomware-leadership/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/us-offers-10-million-dollar-reward-for-hive-ransomware-info"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/158871/cyber-crime/10m-reward-hive-ransomware-group.html"
      },
      {
        "label": "khgames.co.kr",
        "url": "https://www.khgames.co.kr/news/articleView.html?idxno=224468"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/159273/breaking-news/security-affairs-newsletter-round-459-by-pierluigi-paganini-international-edition.html"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/lockbit-ransomware-returns-restores-servers-after-police-disruption/"
      },
      {
        "label": "it-daily.net",
        "url": "https://www.it-daily.net/it-sicherheit/cybercrime/ransomware-zahlungen-auf-rekordhoch"
      },
      {
        "label": "datanet.co.kr",
        "url": "https://www.datanet.co.kr/news/articleView.html?idxno=192269"
      },
      {
        "label": "ejanews.co.kr",
        "url": "https://www.ejanews.co.kr/news/articleView.html?idxno=322146"
      }
    ],
    "notes": "Attacker-infrastructure case retained for completeness; excluded from victim-side pattern analysis."
  },
  {
    "id": "1855",
    "year": 2023,
    "name": "Qulliq Energy Corporation Disruption (Unknown, 2023)",
    "breachType": "Network disruption / hijacking",
    "resultKey": "none",
    "confidence": "2/5 — Low — rests on a sector-wide pattern or an unverified claim",
    "victim": "Qulliq Energy Corporation (QEC)",
    "actor": "Unknown",
    "countries": [
      "Canada"
    ],
    "sectors": [
      "Not available"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M8",
    "secondaryMarkers": [],
    "summary": "Criminal hackers are suspected to have breached the networks of Canadian power generation and distribution company Qulliq Energy Corporation (QEC) beginning on 15 January 2023. The incident disrupted computer systems on the administrative side, including the ability to process credit card payments. Operations related to energy supply remained unaffected. Investigations into whether information was stolen are ungoing. P.J. Akeeagok, the premier of the affected Canadian province of Nunavut, characterized the attack as criminal and authorized technical government support.",
    "rationale": "Qulliq Energy Corporation is the sole electricity utility for Nunavut, so it is critical infrastructure for a remote territory with no alternative supplier. The lifecycle evidence available is narrow but not empty. Containment held where it mattered: administrative systems were locked while power generation and distribution continued unaffected, which indicates a working separation between corporate IT and operational technology -- the control that most often fails in utility incidents. Impact fell on the customer-facing side, including the inability to process card payments. Beyond that nothing is documented: no detection account, no dwell time, no entry vector, no statement on whether data was taken, and no notification timeline. Held at Unknown, with the case worth noting as one where IT/OT separation appears to have worked.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "therecord.media",
        "url": "https://therecord.media/dragos-ransomware-report-2022-ics-ot-lockbit/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/cyberattack-on-nunavut-energy-supplier-limits-company-operations/"
      },
      {
        "label": "gov.nu.ca",
        "url": "https://gov.nu.ca/executive-and-intergovernmental-affairs/news/premier-comments-qec-cyber-security-incident"
      },
      {
        "label": "gov.nu.ca",
        "url": "https://gov.nu.ca/news/qulliq-energy-corporation-impacted-cybersecurity-incident"
      },
      {
        "label": "databreaches.net",
        "url": "https://www.databreaches.net/ca-qulliq-energy-stops-short-of-labelling-cyberattack-another-nunavut-ransomware-incident/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/encino-energy-cyberattack-alleged-data-leak-alphv/"
      }
    ],
    "notes": "Recorded as a partial counter-example: the IT/OT boundary held. The marker is entered because segmentation is the operative dimension in this case, not because it failed -- flagged here so it is not read as a deficiency in cross-case counts."
  },
  {
    "id": "1757",
    "year": 2020,
    "name": "Israeli targets Wiper Attack (Agrius, 2020)",
    "breachType": "Destructive wiper attack",
    "resultKey": "expertise-execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Israeli targets (unspecified; Agrius Apostle/DEADWOOD wiper campaign)",
    "actor": "Agrius/Pink Sandstorm fka AMERICIUM (DEV-0227)/Deadwood/Black Shadow/SharpBoys (Jahatpardaz Information Technology Solutions, MOIS)",
    "countries": [
      "Israel"
    ],
    "sectors": [
      "Unknown"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [
      "M11",
      "M9",
      "M2"
    ],
    "summary": "The hacking group Agrius deployed Apostle and DEADWOOD wipers against Israeli targets from 2020 to 2021, according to IT security company SentinelOne. \nThe intiators masked their wipers as ransomware, suggesting a focus on sabotage. \nDEADWOOD was previously attributed to APT33, an Iranian state-sponsored hacking group - an indication, as SentinelOne observed, that APT33 and Agrius may share resources.",
    "rationale": "Israeli organisations struck in the 2020-2021 Agrius campaign with the Apostle/DEADWOOD wipers disguised as ransomware. The disguise is the decisive victim-side finding and it operates at the response stage: incident-response teams initially treated the event as financially motivated extortion, which sets an expectation that paying or negotiating may restore data and that backups need only cover an encryption event. In reality there was no key and no decryption path, so every hour spent on the extortion track was time not spent on restoration -- the attacker engineered a triage failure that the victims' own playbooks made likely. Exposure: entry was via internet-facing systems. Recovery: with destruction rather than encryption, isolated backups were the only route, in organisations sized for a ransomware scenario. The condition is a response doctrine that assumed the visible symptom described the actual objective.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "assets.sentinelone.com",
        "url": "https://assets.sentinelone.com/sentinellabs/evol-agrius#page=1"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/new-iranian-threat-actor-targets-israel-with-wipers-disguised-as-ransomware/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/SentinelOne/status/1624465790882783240"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/microsoft-iran-is-refining-its-cyber-operations/"
      }
    ]
  },
  {
    "id": "1754",
    "year": 2022,
    "name": "A US newspaper correspondent Data Theft (APT42, 2022)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "A US newspaper correspondent, a Gulf-region women's rights defender, and a Lebanon-based Refugees International advocacy consultant",
    "actor": "APT42 (Iranian state-sponsored)",
    "countries": [
      "Lebanon",
      "Iran, Islamic Republic of",
      "Gulf Countries (region)"
    ],
    "sectors": [
      "Social groups",
      "Media"
    ],
    "subSectors": [
      "Advocacy / activists (e.g. human rights organizations)",
      "Not available"
    ],
    "primaryMarker": "M3",
    "secondaryMarkers": [
      "M6",
      "M2"
    ],
    "summary": "Iranian government-backed hacking group APT42 gained access to the phones of one correspondent for a major US newspaper, of a women's rights defender in the Gulf region and of Nicholas Noe who is an advocacy consultant for Refugees International in Lebanon. The group stole sensitive information throughout the period of 15 September to 25 November 2022, as assessed by Human Rights Watch (HRW) in cooperation with Amnesty International's Security Lab with high confidence. \nThe government-backed hackers further targeted two HRW staffers and 15 other individuals - who are activists, journalists, researchers, academics, diplomats and politicians. Whether their phones had also been compromised has not yet been confirmed.",
    "rationale": "Three individually targeted people -- a US newspaper correspondent, a Gulf-region women's rights defender and a Lebanon-based advocacy consultant -- against APT42, an IRGC-linked actor whose method is patient, highly personalised social engineering rather than exploitation. Exposure: the approach is built over weeks through plausible impersonation of journalists, researchers or conference organisers, so the defence required is sustained scepticism under professional conditions that reward responsiveness to strangers -- the target's job and their security requirement are in direct tension. Persistence: credential capture leads to mailbox access and onward impersonation of the victim to reach their contacts, so compromise propagates through trust rather than through networks. Detection: surfaced by external research. As with the other individual-target rows, no organisational security function exists, so this is a structural capability constraint rather than negligence.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "twitter.com",
        "url": "https://twitter.com/M_Miho_JPN/status/1599783272401489920"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/iran-cyber-army-protests-disinformation/"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2022/12/iranian-state-hackers-targeting-key.html"
      },
      {
        "label": "hrw.org",
        "url": "https://www.hrw.org/news/2022/12/05/iran-state-backed-hacking-activists-journalists-politicians"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Dennis_Kipker/status/1634204080812830727"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/iran-intelligence-used-drug-trafficker-to-recruit-hell-angel-for-assassination"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/campaigns-political-parties-crosshairs-of-election-meddlers/"
      },
      {
        "label": "govinfosecurity.com",
        "url": "https://www.govinfosecurity.com/new-report-exposes-iranian-hacking-groups-media-masquerade-a-25011"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/iranian-hackers-pose-as-journalists-to-push-backdoor-malware/"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2024/05/apt42-hackers-pose-as-journalists-to.html"
      }
    ]
  },
  {
    "id": "1951",
    "year": 2023,
    "name": "~5 Ransomware (Nevada ransomware group, 2023)",
    "breachType": "Ransomware attack",
    "resultKey": "expertise-execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "~5,000 victims across the US and Europe (Nevada ransomware/ESXiArgs mass-exploitation wave)",
    "actor": "Nevada ransomware group",
    "countries": [
      "United Kingdom",
      "France",
      "Europe (region)",
      "United States",
      "Italy",
      "Hungary",
      "Germany"
    ],
    "sectors": [
      "Unknown",
      "Critical infrastructure",
      "Education",
      "Corporate Targets"
    ],
    "subSectors": [
      "Not available",
      "Research",
      "Transportation"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [
      "M8",
      "M9",
      "M4"
    ],
    "summary": "The Nevada ransomware group targeted early 5,000 victims in the US and Europe using the ESXiArgs vulnerability in VMWare servers since February 2023, according to the Financial Times. \nThe hackers specifically targeted servers that remained unpatched after a security updated addressing the software flaw was issued since February 2021. \nThe largest number of victims - 2,000 - is in France. Other highly affected countries include the United States, the United Kingdom and Germany.  Specific victims comprise universities in the United States and Hungary, shipping companies and construction firms in Italy, as well as manufacturing companies in Germany. \nThe Financial Times reports that actors behind the Nevada Group remain unidentified. Based on its online recruitment campaigns, the group appears to be made up of Russian and Chinese hackers.",
    "rationale": "Roughly 5,000 organisations across the US and Europe encrypted in the same wave, all running VMware ESXi hypervisors exposed to the internet and unpatched against a vulnerability fixed publicly some two years earlier. The scale is the finding: this was not a targeted intrusion but indiscriminate scanning against a known-vulnerable population, so the shared victim-side condition is a two-year patch backlog on the virtualisation layer across thousands of unrelated organisations. Blast radius per victim is disproportionate because ESXi hosts many guests at once, so one unpatched hypervisor takes down every workload on it -- the consolidation that makes virtualisation efficient also concentrates the failure. Recovery: victims whose backup infrastructure ran as guests on the same hypervisors lost production and restore capability together. Detection was immaterial: exploitation to encryption was effectively automated, leaving no dwell time in which monitoring could have intervened.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "databreaches.net",
        "url": "https://www.databreaches.net/nevada-group-hackers-target-thousands-of-computer-networks/"
      },
      {
        "label": "ft.com",
        "url": "https://www.ft.com/content/ad987139-e8ac-427d-9a07-25e1dd91d76b"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/apple-google-moveit-security-patches-june-2023-critical-update/"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/threat-intelligence/ransomware-victims-surge-as-threat-actors-pivot-to-zero-day-exploits"
      },
      {
        "label": "computerweekly.com",
        "url": "https://www.computerweekly.com/de/feature/10-der-groessten-Zero-Day-Angriffe-im-Jahr-2023"
      },
      {
        "label": "dailysecu.com",
        "url": "https://www.dailysecu.com/news/articleView.html?idxno=157802"
      }
    ]
  },
  {
    "id": "1826",
    "year": 2022,
    "name": "Advanced Systems Ransomware (Phobos, 2022)",
    "breachType": "Ransomware attack",
    "resultKey": "execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Advanced Systems (Italy), Municipality of Sarno (Italy)",
    "actor": "Phobos",
    "countries": [
      "Italy"
    ],
    "sectors": [
      "Corporate Targets",
      "State institutions / political system"
    ],
    "subSectors": [
      "Not available",
      "Civil service / administration"
    ],
    "primaryMarker": "M7",
    "secondaryMarkers": [
      "M1",
      "M4"
    ],
    "summary": "A ransomware attack disrupted the computer systems of the town hall of the Italian municipality of Sarno on 27 December. \nThe attack was directed against the servers of technology provider Advanced System, which manages the town hall systems and is supporting more than 1000 Italian municipalities in the collection of taxes and asset revenue management.",
    "rationale": "The Municipality of Sarno had outsourced its IT wholesale to a single provider, Advanced System, which also serves other Italian municipalities and public bodies -- so a local authority delivering statutory public services held no direct visibility into, or control over, the infrastructure those services depend on. That custody arrangement is the classifiable condition and it sits in the diagonal: the doctrinal responsibility for citizen data and service continuity remained with the municipality while every material control sat with an unaudited supplier. Concentration compounds it: because the same provider serves multiple public bodies, a single compromise is a multi-municipality event, and none of those authorities was positioned to detect that they shared a correlated dependency. Neither the provider nor Phobos disclosed a technical root cause, but under the lifecycle rule the outsourcing and concentration conditions carry the classification without it.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "twitter.com",
        "url": "https://twitter.com/securityaffairs/status/1608606338229362690"
      },
      {
        "label": "salernotoday.it",
        "url": "https://www.salernotoday.it/cronaca/hacker-comune-sarno-28-dicembre-2022.html"
      },
      {
        "label": "redhotcyber.com",
        "url": "https://www.redhotcyber.com/post/lazienda-italiana-advanced-system-colpita-dal-ransomware-lo-avverte-lazienda-con-un-comunicato-stampa/"
      }
    ],
    "notes": "Reclassified from Unknown on the documented outsourcing/concentration arrangement; confidence held at 3 because no other lifecycle stage is documented."
  },
  {
    "id": "1725",
    "year": 2022,
    "name": "Fars News Agency Data Theft (Black Reward, 2022)",
    "breachType": "Data theft / espionage",
    "resultKey": "none",
    "confidence": "1/5 — Indicative — case is atypical for the framework",
    "victim": "Fars News Agency",
    "actor": "Black Reward",
    "countries": [
      "Iran, Islamic Republic of"
    ],
    "sectors": [
      "Media"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "X",
    "secondaryMarkers": [],
    "summary": "Iranian hacktivist group Black Reward deleted 250 TB of data and stole confidential information from Iranian Fars News Agency on 25 November 2022, according to a Telgram post of the group. \nThe Iranian Fars News Agency disputed the extent of the hack and said that only information and news created on 23 November 2022 was destroyed. \nThe confidential information contained the bulletins and directives sent by the Iranian Fars News Agency to the office of the Supreme Leader Ali Khamenei, based on accounts from the hacktivists. The cache of stolen data reportedly includes a an alleged missive from Supreme Leader Ali Khamenei dated 30 November that orders a smear campaign against a well-known Sunni scholar. \nFollowing the hack, the hacktivists released a video through the compromised Twitter account of the news agency's manager Habib Torkashvand, which allegedly shows one of the economic editors of the news agency in a sexual act.\nOn 4 December 2022, Black Reward published an audio file from the Iranian pro-regime Coalition Council of Islamic Revolution Forces, which appears to show the secretary of the council admitting to the accidental killing of women and children during a bloody crackdown in the southeastern city of Zahedan on September 30.",
    "rationale": "Black Reward's claimed compromise of Fars News Agency, a semi-official Iranian state outlet, reportedly involving destruction of a very large volume of data and exposure of internal bulletins. Every element rests on contested, interested accounts: the hacktivist group claimed the scale, Fars disputed it, and neither side disclosed how entry was obtained, what was detected or how recovery proceeded. Unlike the cases where an undisclosed vector sits alongside documented later stages, here no stage is independently established at all -- the dispute is over the impact itself. Held at Unknown with no marker recorded.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "rferl.org",
        "url": "https://www.rferl.org/a/iran-irgc-commander-warns-province-red-lines/32339011.html"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/iranian-hacking-group-hacked-app/"
      },
      {
        "label": "hackread.com",
        "url": "https://www.hackread.com/fars-news-agency-website-iran-hacked/"
      },
      {
        "label": "databreaches.net",
        "url": "https://www.databreaches.net/iran-blames-israel-for-fars-news-agency-hack/"
      },
      {
        "label": "rferl.org",
        "url": "https://www.rferl.org/a/iran-sunni-cleric-discrediting-leaked-document/32157807.html"
      },
      {
        "label": "jns.org",
        "url": "https://www.jns.org/iran-blames-israel-for-fars-news-agency-hack/"
      },
      {
        "label": "telegram.me",
        "url": "https://telegram.me/s/farsna"
      },
      {
        "label": "iranintl.com",
        "url": "https://www.iranintl.com/en/202211269743"
      },
      {
        "label": "t.me",
        "url": "https://t.me/black_reward/149"
      },
      {
        "label": "rferl.org",
        "url": "https://www.rferl.org/a/iran-official-admits-women-children-killed-protests/32162594.html"
      },
      {
        "label": "securityweek.com",
        "url": "https://www.securityweek.com/iran-arrests-news-agency-deputy-after-reported-cyberattack"
      },
      {
        "label": "rferl.org",
        "url": "https://www.rferl.org/a/iran-rights-security-forces-closing-roads-zahedan-protests/32230871.html"
      }
    ],
    "notes": "Both the attacker's claim and the victim's denial are interested accounts with no third-party corroboration; nothing is independently established."
  },
  {
    "id": "1756",
    "year": 2022,
    "name": "Israeli diamond-industry software-suite users Wiper Attack (Unknown, 2022)",
    "breachType": "Destructive wiper attack",
    "resultKey": "execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Israeli diamond-industry software-suite users (via a compromised vendor)",
    "actor": "Unknown",
    "countries": [
      "Israel",
      "Hong Kong",
      "South Africa"
    ],
    "sectors": [
      "Corporate Targets"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M7",
    "secondaryMarkers": [
      "M4",
      "M9",
      "M11"
    ],
    "summary": "The Iran-affiliated hacking group Agrius channelled a wiper called Fantasy through an Israeli software developer in a supply chain attack against targets in or adjacent to the diamond trade.\nThe destructive tool - disguised as a legitimate update - was deployed against an IT support services company, a diamond wholesaler, and an HR consulting firm in Israel, a South African diamond company, and a jeweller in Hong Kong during the period of 20 February to 12 March 2022. ESET, the cybersecurity firm disclosing the campaign, reported that it was able to intercept the wiper and to prevent the destruction of data for its customers.\nThe Fantasy wiper builds on the Apostle wiper, also developed by Agrius, which was used in a cyber-operation against Israeli organizations in 2020 attributed to the same group.",
    "rationale": "Israeli diamond-industry firms compromised through a shared software vendor whose update channel delivered the Fantasy wiper in place of a legitimate update. Trust boundary: the failing control is update-integrity verification -- customers executed attacker code because it arrived through the channel they were supposed to trust, so no endpoint policy short of verifying vendor signing would have stopped it. Concentration: the diamond trade relies on a small number of specialised suppliers, so one vendor's compromise reaches most of the sector at once, and no individual firm had visibility into that correlated dependency. Recovery: the payload was destructive rather than extortive, so there was no key and restoration depended on backups in mid-sized firms that had procured software, not a security programme. Detection: the campaign was characterised by external research after the destruction, not during the distribution.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "securitymea.com",
        "url": "https://securitymea.com/2023/02/09/eset-threat-reports-on-russian-invasions-impact-on-digital-threats/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/iranian-hackers-accused-of-targeting-diamond-industry-with-wiper-malware/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/hackers-use-new-fantasy-data-wiper-in-coordinated-supply-chain-attack/"
      },
      {
        "label": "welivesecurity.com",
        "url": "https://www.welivesecurity.com/2022/12/07/fantasy-new-agrius-wiper-supply-chain-attack/"
      },
      {
        "label": "assets.sentinelone.com",
        "url": "https://assets.sentinelone.com/sentinellabs/evol-agrius#page=1"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2022/12/iranian-hackers-strike-diamond-industry.html"
      },
      {
        "label": "securityweek.com",
        "url": "https://www.securityweek.com/iranian-hackers-deliver-new-fantasy-wiper-diamond-industry-supply-chain-attack"
      },
      {
        "label": "welivesecurity.com",
        "url": "https://www.welivesecurity.com/videos/diamond-industry-attack-week-security-tony-anscombe/"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/attacks-us-electrical-grid-security-roundup/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/unix_root/status/1600796578159071233"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/attacks-breaches/agrius-iranian-apt-group-cuts-into-diamond-industry"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/campuscodi/status/1601135496943443969"
      },
      {
        "label": "arstechnica.com",
        "url": "https://arstechnica.com/information-technology/2022/12/effective-fast-and-unrecoverable-wiper-malware-is-popping-up-everywhere/"
      },
      {
        "label": "securitymea.com",
        "url": "https://securitymea.com/2022/12/15/eset-researchers-attributes-iran-aligned-agrius-apt-group-targeting-diamond-industry/"
      }
    ]
  },
  {
    "id": "1665",
    "year": 2022,
    "name": "Multiple organisations in Ukraine Ransomware (From Russia with Love, 2022)",
    "breachType": "Ransomware attack",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "Multiple organisations in Ukraine (Somnia ransomware targets)",
    "actor": "From Russia with Love (FRwL)/Z-Team/UAC-0118",
    "countries": [
      "Ukraine"
    ],
    "sectors": [
      "Unknown"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M6",
    "secondaryMarkers": [
      "M9",
      "M3"
    ],
    "summary": "The pro-Russian hacktivist group named \"From Russia with Love\" or \"Z-Team\" infected multiple organizations in Ukraine with a new ransomware strain called \"Sonia\", encrypting the systems on 11 November 2022 and causing operational problems. The group has previously disclosed creating the Somnia ransomware on their Telegram channel. CERT-UA has attributed the attack to the hacktivist group and describes Somnia as a data-wiper malware as it does not provide the possibility of data decryption.",
    "rationale": "Multiple Ukrainian organisations hit with Somnia by FRwL/Z-Team. Exposure: internet-facing remote access without adequate controls, in a wartime environment where remote working expanded the surface faster than the controls around it. Recovery is the distinguishing stage: Somnia was deployed with no functioning decryption path -- the operation was destructive in effect whether or not it was framed as extortion -- so victims faced total data loss unless backups were isolated. Blast radius: the campaign ran across several organisations sharing the same exposure profile rather than against one outlier. Detection and containment are undocumented, and the victims are named only collectively, so confidence stays at 3.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/ukraine-russia-wiper-malware/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/ukraine-says-russian-hacktivists-use-new-somnia-ransomware/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/securityaffairs/status/1592290595309076480"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/hacks4pancakes/status/1592202195138908160"
      },
      {
        "label": "securityaffairs.co",
        "url": "https://securityaffairs.co/wordpress/138496/hacking/somnia-ransomware-attacks-ukraine.html"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/M_Miho_JPN/status/1592502459821592579"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/JAMESWT_MHT/status/1592418378001813504"
      },
      {
        "label": "cert.gov.ua",
        "url": "https://cert.gov.ua/article/2724253"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/the-week-in-ransomware-november-18th-2022-rising-operations/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Cyberknow20/status/1606396705548619776"
      }
    ]
  },
  {
    "id": "1660",
    "year": 2021,
    "name": "Unspecified Ukrainian organisation Wiper Attack (GRU, 2021)",
    "breachType": "Destructive wiper attack",
    "resultKey": "expertise-execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Unspecified Ukrainian organisation (GRU firewall compromise/wiper target)",
    "actor": "GRU (Russian military intelligence service)",
    "countries": [
      "Ukraine"
    ],
    "sectors": [
      "Unknown"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M11",
    "secondaryMarkers": [
      "M14",
      "M9",
      "M5",
      "M4"
    ],
    "summary": "The Russian military intelligence service GRU compromised a firewall of a Ukrainian organization in April 2021 and used that access to launch one wiper attack in February and maintained its presence to deploy a second wiper against the same organization in March 2022. According to a presentation by IT security company Mandiant at the CyberwarCon security conference, the GRU has modified its tactics to \"live on the edge\" - infiltrating gateway devices, such as email servers and routers, to establish a foothold in networks of interest to then faster transition to data-destroyring attacks.",
    "rationale": "The clearest dwell-time case in the dataset. A Ukrainian organisation's firewall was compromised in April 2021 and the GRU retained access for roughly ten months before deploying a first wiper in February 2022 and a second in March 2022 against the same target. Detection: an intrusion sat on the network perimeter device for the better part of a year without being noticed, which is a monitoring failure at the one asset that should be most closely watched. Persistence: the actor was able to return and act twice, so the first destructive event did not lead to eviction -- remediation addressed the symptom and left the access in place, which is the whack-a-mole pattern within a single victim. Recovery: wipers leave no decryption path, and the second wave suggests whatever was restored after the first was restored into a still-compromised environment. Blast radius: control of the perimeter device gives visibility over everything traversing it, so ten months of dwell means the destruction was the end of a long collection phase, not the whole operation.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "twitter.com",
        "url": "https://twitter.com/780thC/status/1629087842516320256"
      },
      {
        "label": "wired.com",
        "url": "https://www.wired.com/story/russia-ukraine-cyberattacks-mandiant/"
      }
    ]
  },
  {
    "id": "1626",
    "year": 2022,
    "name": "A US-based organisation supporting the Iranian Data Theft (Cotton Sandstorm, 2022)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "A US-based organisation supporting the Iranian opposition group MEK (People's Mojahedin Organization of Iran)",
    "actor": "Cotton Sandstorm fka NEPTUNIUM, DEV-0198/Vice Leaker/Marnanbridge (Emennet Pasargad, IRGC)",
    "countries": [
      "United States"
    ],
    "sectors": [
      "Unknown"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M6",
    "secondaryMarkers": [],
    "summary": "Iranian hacker group Emennet Pasargad stole and leaked information of a US-based organization to target the Iranian opposition group People's Mojahedin Organization of Iran (MEK) in early 2022, according to a notification of the Federal Bureau of Investigation (FBI).",
    "rationale": "The US-based organisation supporting the MEK opposition group operated under a heightened, foreseeable threat profile (an Iranian state-linked group with a specific, publicly known interest in this exact opposition movement), yet its externally exposed remote-access infrastructure was not hardened against credential-based intrusion -- an access-control gap that carries particular weight given the organisation's foreseeable status as an Iranian intelligence target.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "databreaches.net",
        "url": "https://www.databreaches.net/iranian-cyber-group-emennet-pasargad-conducting-hack-and-leak-operations-using-false-flag-personas/"
      },
      {
        "label": "ic3.gov",
        "url": "https://www.ic3.gov/Media/News/2022/221020.pdf"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/fbi-warns-of-hack-and-leak-operations-from-group-based-in-iran/"
      },
      {
        "label": "darkreading.com",
        "url": "https://www.darkreading.com/threat-intelligence/fbi-iranian-threat-group-likely-to-target-us-midterms"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://www.cyberscoop.com/fbi-iran-warning-hacktivists-election-israel/"
      },
      {
        "label": "securityweek.com",
        "url": "https://www.securityweek.com/fbi-warns-iranian-cyber-firms-hack-and-leak-operations"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/780thC/status/1584489425144143872"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/securityaffairs/status/1661995453037043712"
      }
    ]
  },
  {
    "id": "1752",
    "year": 2022,
    "name": "Mercury IT Ransomware (LockBit, 2022)",
    "breachType": "Ransomware attack",
    "resultKey": "execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Mercury IT",
    "actor": "LockBit",
    "countries": [
      "New Zealand"
    ],
    "sectors": [
      "Corporate Targets"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M7",
    "secondaryMarkers": [
      "M1"
    ],
    "summary": "A ransomware attack against the New Zealand IT services company Mercury IT affected several government agencies. The organizations concerned included the Ministry of Justice and the National Health Authority. The former reported interrupted access to data, including 14,500 files regarding transportation of deceased people and around 4,000 post mortem reports. The health authority estimated that personal data of probably up to 34,000 individuals were affected. Moreover, 5,500 files in the heart disease registers and bereavement care data of 8,500 records could not be accessed. Health services are otherwise operating normally. In addition to the authorities mentioned above, six other health regulatory authorities are also affected.",
    "rationale": "the New Zealand Ministry of Justice, Health NZ, and multiple regulatory boards had all delegated privileged administrative access to a 25-employee MSP (Mercury IT) without independently verifying that vendor's security capacity, allowing one ransomware incident to cascade across the country's justice and health sectors simultaneously. Confirmed via Tech Monitor/SecurityWeek/CPO Magazine: LockBit 3.0 compromised managed service provider Mercury IT (25 employees), cascading to dozens of downstream customers including the NZ Ministry of Justice, Health NZ, and multiple health regulatory boards -- explicitly described by multiple outlets as a 'supply chain attack.' A small MSP held privileged/administrative access to numerous government systems without those government bodies independently verifying its security posture.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "techmonitor.ai",
        "url": "https://www.techmonitor.ai/cybersecurity/mercury-it-cyberattack-new-zealand-lockbit-ransomware/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/ransomwaremap/status/1599682373905313794"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/multiple-government-departments-in-new-zealand-affected-by-ransomware-attack-on-it-provider/"
      },
      {
        "label": "govinfosecurity.com",
        "url": "https://www.govinfosecurity.com/ransomware-attack-in-new-zealand-has-cascading-effects-a-20636"
      },
      {
        "label": "privacy.org.nz",
        "url": "https://www.privacy.org.nz/publications/statements-media-releases/new-news-page-5/"
      },
      {
        "label": "ncsc.govt.nz",
        "url": "https://www.ncsc.govt.nz/news/response-to-managed-service-provider-cyber-security-incident/"
      },
      {
        "label": "tewhatuora.govt.nz",
        "url": "https://www.tewhatuora.govt.nz/about-us/news-and-updates/cyber-security-incident-dec-2022/"
      },
      {
        "label": "justice.govt.nz",
        "url": "https://www.justice.govt.nz/about/news-and-media/media-releases/cyber/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/AlexMartin/status/1600138255218839552"
      },
      {
        "label": "securityweek.com",
        "url": "https://www.securityweek.com/new-zealand-government-hit-ransomware-attack-it-provider"
      },
      {
        "label": "databreaches.net",
        "url": "https://www.databreaches.net/nz-ransomware-attacks-privacy-commissioner-plans-investigation-as-justice-health-hit/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/the-week-in-ransomware-december-9th-2022-wide-impact/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/ransomwaremap/status/1600753415948156929"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/ido_cohen2/status/1604823853670305792"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Cyberknow20/status/1604812769857273857"
      },
      {
        "label": "stuff.co.nz",
        "url": "https://www.stuff.co.nz/business/130813253/stolen-nz-data-listed-for-sale-on-dark-web"
      }
    ]
  },
  {
    "id": "1615",
    "year": 2022,
    "name": "Technoserv Data Theft (National Republican Army, 2022)",
    "breachType": "Data theft / espionage",
    "resultKey": "none",
    "confidence": "Not assessed",
    "victim": "Technoserv",
    "actor": "National Republican Army (NRA)",
    "countries": [
      "Russia"
    ],
    "sectors": [
      "Corporate Targets",
      "State institutions / political system"
    ],
    "subSectors": [
      "Not available",
      "Government / ministries"
    ],
    "primaryMarker": "X",
    "secondaryMarkers": [],
    "summary": "In October 2022, the Kyiv Post disclosed that the Russian hacktivist group National Republican Army (NRA) hacked and stole data from several Russian technology companies based on information received from the group, including sample data allegedly obtained during the operation. Targets included Technoserv, which provides services to protect the Russian government. The group cites the goal of overthrowing Putin as the reason for the attack. Among the documents, according to the NRA, are records that also indicate a relationship between Technoserv and Russia's Federal Security Service (FSB). In an apparant message to Technoserv system administrators, the group claimed to have extracted over 1.2 TB of data,  the equivalent of one million files, ranging from AutoCAD designs, contracts with clients and partners, personal information of employees, including passport details. NRA threatened to publicly release the data.",
    "rationale": "The Russian hacktivist group NRA's claims (1.2TB+ from Technoserv/Unisoftware) were reported via the Kyiv Post based on information provided by the group itself, with no independent forensic confirmation of scale or technical vector from the victim companies. Absent victim-side confirmation, attributing a specific doctrinal/material mechanism would rest entirely on an unverified attacker claim.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "tarnkappe.info",
        "url": "https://tarnkappe.info/artikel/hacking/cyberangriff-nra-hackt-wichtige-russische-unternehmen-258025.html"
      },
      {
        "label": "kyivpost.com",
        "url": "https://www.kyivpost.com/russias-war/russians-against-putin-nra-claims-massive-hack-of-russian-government-contractors-computers.html"
      }
    ],
    "notes": "Web-verified (14-08-26); no technical vector disclosed."
  },
  {
    "id": "1546",
    "year": 2021,
    "name": "Steven Downes Data Theft (Not attributed, 2021)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "2/5 — Low — rests on a sector-wide pattern or an unverified claim",
    "victim": "Steven Downes",
    "actor": "Not attributed",
    "countries": [
      "United Kingdom"
    ],
    "sectors": [
      "Media"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M6",
    "secondaryMarkers": [],
    "summary": "Email correspondence involving several Labour Party councillors in Croydon and Steven Downes, a journalist reporting for the local newspaper Inside Croydon, was compromised through a hack of Downes account in early 2021, according to the Investigative Unit of Al Jazeera. Material from the hacked emails was subsequently used to expel David White, then secretary of Croydon Central Constituency Labour Party, and Andrew Pelling, then councillor in Croydon.",
    "rationale": "the individuals' own email/social-media credentials were reused or previously exposed elsewhere and purchased on the dark web, per the ICO's assessment -- a personal credential-hygiene gap rather than a targeted technical exploit against the Council or newspaper itself. Confirmed via Inside Croydon (the victim's own reporting): the UK Information Commissioner's Office assessed the most likely explanation as purchased/reused email and Twitter credentials obtained from the dark web -- a credential-hygiene/password-reuse execution gap. Note: this detail comes from the ICO's stated assessment as relayed by the victim, not an independent forensic report, hence moderate rather than high confidence.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "insidecroydon.com",
        "url": "https://insidecroydon.com/2025/10/13/the-fraud-how-reeds-labour-spied-on-croydon-councillors/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/jsrailton/status/1576387939722227712"
      },
      {
        "label": "youtube.com",
        "url": "https://www.youtube.com/watch?v=db-Gpmfajp8"
      },
      {
        "label": "ajiunit.com",
        "url": "https://www.ajiunit.com/article/unprecedented-leak-exposes-inner-workings-of-uk-labour-party/"
      }
    ]
  },
  {
    "id": "1609",
    "year": 2022,
    "name": "SMP Robotics Disruption (CaucasNet, 2022)",
    "breachType": "Network disruption / hijacking",
    "resultKey": "expertise-execution",
    "confidence": "2/5 — Low — rests on a sector-wide pattern or an unverified claim",
    "victim": "SMP Robotics",
    "actor": "CaucasNet",
    "countries": [
      "Russia"
    ],
    "sectors": [
      "Corporate Targets"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [
      "M6"
    ],
    "summary": "The Anonymous-linked group CaucasNet claims to have hacked the administration panel of the patrol robots \"Tral Patrol 4.0\" of the Russian company SMP Robotics worldwide and broadcasted the Ukrainian national anthem and a Georgian song on the robots on May 9, 2022. Targets included robots at Sheremetyevo International Airport.",
    "rationale": "Per hacker's own claim (Daily Dot interview, unconfirmed by SMP Robotics or Sheremetyevo Airport): a critical vulnerability was found in the web-based administration panel controlling the patrol robots, allowing remote takeover -- a patch/configuration execution gap on an internet-facing management interface. Not independently verified by the victim, hence low-moderate confidence.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "dailydot.com",
        "url": "https://dailydot.com/debug/hackers-surveillance-robots-russia"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/caucasnet/status/1524177545465372673?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1524177545465372673%7Ctwgr%5E2caead7fdff69fa732bc4bfa398899c2066e99e6%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.dailydot.com%2Fdebug%2Fhackers-surveillance-robots-russia%2F"
      },
      {
        "label": "dailydot.com",
        "url": "https://www.dailydot.com/debug/hackers-surveillance-robots-russia/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/caucasnet/status/1521643929178939392"
      },
      {
        "label": "vosveteit.zoznam.sk",
        "url": "https://vosveteit.zoznam.sk/hackeri-z-anonymous-rozoberaju-rusko-pribuda-jeden-kyberneticky-utok-za-druhym/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Anonymous_Link/status/1524056118259036162?s=20&t=1tD6JNcAL4R2MjNPMiP6Hw"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/YourAnonOne/status/1496965766435926039"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/YourAnonNewsESP/status/1507880038741458950?s=20&t=TKiTdpmCLm5C1-nJK_XSZg"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/YourAnonDoxx/status/1581970139041652741?s=20&t=TKiTdpmCLm5C1-nJK_XSZg"
      }
    ]
  },
  {
    "id": "1491",
    "year": 2021,
    "name": "US health-sector organisations Ransomware (Suspected North Korean state-sponsored hackers, 2021)",
    "breachType": "Ransomware attack",
    "resultKey": "none",
    "confidence": "Not assessed",
    "victim": "US health-sector organisations (unspecified)",
    "actor": "Suspected North Korean state-sponsored hackers",
    "countries": [
      "India",
      "United States",
      "Japan"
    ],
    "sectors": [
      "Not available",
      "Critical infrastructure",
      "Corporate Targets"
    ],
    "subSectors": [
      "Not available",
      "Health"
    ],
    "primaryMarker": "X",
    "secondaryMarkers": [],
    "summary": "North Korean state-sponsored hackers use Maui ransomware against targets from the US Health Sector since May 2021 for financial gains according to US Cybersecurity and Infrastructure Security Agency.\nKaspersky revisited the incident and came to the conclusion that the incident began on 15.04.2021 and that Japan and India were also affected. An US indictment from July 2024 indicated that Andariel, a sub-group to Lazarus, is behind the incidents",
    "rationale": "this is a case where even the primary government advisory (CISA/FBI/Treasury) explicitly could not determine the initial access vector, so no defensible victim-side condition can be attributed without speculation. Confirmed via CISA/FBI/Treasury joint advisory (AA22-187A), the primary source: the advisory explicitly states 'the initial access vector(s) for these incidents is unknown.' Classification cannot proceed without speculation.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "twitter.com",
        "url": "https://twitter.com/StateCDP/status/1623746020180910080"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/north-korea-ransomware-hospital/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/north-korea-hackers-funding-us-south-korea-advisory/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Cyberknow20/status/1623789450663972864"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/cybersecboardrm/status/1623802230930300929"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/142090/breaking-news/north-korea-hackers-ransomware.html"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/north-korean-ransomware-attacks-on-healthcare-fund-govt-operations/"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/CISAJen/status/1623834199152001024"
      },
      {
        "label": "malwarebytes.com",
        "url": "https://www.malwarebytes.com/blog/news/2023/02/cisa-issues-alert-with-south-korean-government-about-dprks-ransomware-antics"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/Cyber_O51NT/status/1639428701137035264"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/microsoft/microsoft-links-moonstone-sleet-north-korean-hackers-to-new-fakepenny-ransomware/"
      },
      {
        "label": "newscj.com",
        "url": "https://www.newscj.com/news/articleView.html?idxno=3163353"
      },
      {
        "label": "telemundo.com",
        "url": "https://www.telemundo.com/noticias/noticias-telemundo/internacional/ciberataque-corea-del-norte-hospitales-eeuu-nasa-bases-militares-kansa-rcna163762"
      },
      {
        "label": "menafn.com",
        "url": "https://menafn.com/1108490723/West-releases-N-Korean-hacker-caution"
      },
      {
        "label": "new.qq.com",
        "url": "https://new.qq.com/rain/a/20240728A05GDP00"
      },
      {
        "label": "govinfosecurity.com",
        "url": "https://www.govinfosecurity.com/fbi-warns-cyberthreats-to-legacy-medical-devices-a-20066"
      },
      {
        "label": "cisa.gov",
        "url": "https://www.cisa.gov/uscert/ncas/alerts/aa22-187a"
      },
      {
        "label": "securelist.com",
        "url": "https://securelist.com/andariel-deploys-dtrack-and-maui-ransomware/107063/"
      },
      {
        "label": "securelist.com",
        "url": "https://securelist.com/apt-trends-report-q3-2022/107787/"
      },
      {
        "label": "thehackernews.com",
        "url": "https://thehackernews.com/2022/12/2022-top-five-immediate-threats-in.html"
      }
    ],
    "notes": "Web-verified (14-08-26) via CISA AA22-187A -- primary source explicitly confirms vector unknown; kept Undefined."
  },
  {
    "id": "1416",
    "year": 2021,
    "name": "South Korean journalists Data Theft (APT37, n.d.)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "3/5 — Moderate — inferred from a documented group-wide or sector pattern",
    "victim": "South Korean journalists, North Korean defectors, and human rights activists",
    "actor": "APT37/Richochet Chollima/Red Eyes/InkySquid/ScarCruft/Reaper/Group123/TEMP.Reaper/Venus 121/G0067",
    "countries": [
      "Korea, Republic of"
    ],
    "sectors": [
      "Social groups",
      "Media"
    ],
    "subSectors": [
      "Advocacy / activists (e.g. human rights organizations)",
      "Political opposition / dissidents / expats",
      "Not available"
    ],
    "primaryMarker": "M2",
    "secondaryMarkers": [
      "M6"
    ],
    "summary": "North korean state-sponsored hacking group ScarCruft hacked and stole sensitive data from journalists, north korean defector and human rights activists in South Korea.",
    "rationale": "Kaspersky (primary researcher) states it could not determine the initial infection vector for the specific compromised host analysed, but ScarCruft/APT37's well-documented, consistent group-wide initial-access method is spear-phishing with weaponised documents/LNK files (The Hacker News, Zscaler ThreatLabz) -- a human-factor/knowing-doing execution gap, applied here at moderate confidence given the incident-specific vector is unconfirmed.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "securelist.com",
        "url": "https://securelist.com/scarcruft-surveilling-north-korean-defectors-and-human-rights-activists/105074/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/apt37-targets-journalists-with-chinotto-multi-platform-malware/"
      }
    ]
  },
  {
    "id": "1390",
    "year": 2021,
    "name": "Domain-wide targets exploited via ProxyShell Ransomware (Charming Kitten, n.d.)",
    "breachType": "Ransomware attack",
    "resultKey": "expertise-execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Domain-wide targets exploited via ProxyShell (unspecified organisations)",
    "actor": "Charming Kitten/NEWSCASTER/APT35/Mint Sandstorm fka PHOSPHORUS/NewsBeef/Group 83/TA453/Calanque/G0059 (IRGC)",
    "countries": [
      "Unknown"
    ],
    "sectors": [
      "Unknown"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [
      "M11"
    ],
    "summary": "According to DFIR Report, the Iranian state-sponsored APT Phosphorus (also tracked as APT35, Charming Kitten, Newscaster, TA453, Magic Hound) exploited ProxyShell to conduct a ransomware campaign that encrypts systems of targets domain-wide.",
    "rationale": "The domain-wide targets compromised via ProxyShell had not patched a critical, publicly disclosed Microsoft Exchange vulnerability (patched by Microsoft in April-May 2021) by the time Phosphorus/Charming Kitten exploited it to deploy ransomware domain-wide -- a sustained patch-management gap on Exchange infrastructure that, notably, also enabled numerous other unrelated threat actors during the same period.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "hackread.com",
        "url": "https://www.hackread.com/proxyshell-vulnerabilities-domain-wide-ransomware-attacks/"
      },
      {
        "label": "techtarget.com",
        "url": "https://www.techtarget.com/searchsecurity/news/252509511/ProxyShell-leads-to-domain-wide-ransomware-attack"
      },
      {
        "label": "thedfirreport.com",
        "url": "https://thedfirreport.com/2021/11/15/exchange-exploit-leads-to-domain-wide-ransomware/"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://cyberscoop.com/top-routinely-exploited-vulnerabilities/"
      }
    ]
  },
  {
    "id": "1389",
    "year": 2021,
    "name": "Israeli organisations Data Theft (Moses Staff, 2021)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Israeli organisations (unspecified)",
    "actor": "Moses Staff/Marigold Sandstorm fka DEV-0500/Cobalt Sapling (IRGC)",
    "countries": [
      "Israel"
    ],
    "sectors": [
      "Unknown"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [],
    "summary": "Since September 2021, the hacker group Moses Staff has been targeting Israeli organizations by, among other things, publishing sensitive data or encrypting networks without ransom demands. The CheckPoint company therefore assesses the group's attacks as entirely politically motivated.",
    "rationale": "the affected Israeli organisations ran enterprise servers with publicly known, unpatched vulnerabilities (including later Exchange ProxyShell exposure) -- a sustained patch-management gap that Moses Staff repeatedly exploited across its multi-year campaign. Confirmed via Check Point Research (primary source) and The Hacker News: Moses Staff exploits publicly known, unpatched vulnerabilities on enterprise servers to gain initial access (including ProxyShell against Microsoft Exchange in later campaigns), then deploys custom web shells -- a clear patch/configuration execution gap on internet-facing infrastructure.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "research.checkpoint.com",
        "url": "https://research.checkpoint.com/2021/mosesstaff-targeting-israeli-companies/"
      },
      {
        "label": "therecord.media",
        "url": "https://therecord.media/new-moses-staff-group-targets-israeli-organizations-in-destructive-attacks/"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/moses-staff-hackers-wreak-havoc-on-israeli-orgs-with-ransomless-encryptions/"
      },
      {
        "label": "securelist.com",
        "url": "https://securelist.com/a-hack-in-hand-is-worth-two-in-the-bush/110794/"
      }
    ]
  },
  {
    "id": "1354",
    "year": 2021,
    "name": "French organisations Data Theft (APT31, n.d.)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "French organisations (unspecified; ANSSI-warned targets)",
    "actor": "APT31/Violet Typhoon fka ZIRCONIUM/BRONZE VINEWOOD/G0128/Judgment Panda/Red Keres/Altaire (Wuhan Xiaoruizhi Science and Technology Company, MSS Hubei State Security Department)",
    "countries": [
      "France"
    ],
    "sectors": [
      "Unknown"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [
      "M6"
    ],
    "summary": "In a release, the Agence Nationale de la Sécurité des Systèmes d'Information (ANSSI) warns French organizations of an attack campaign by Chinese APT31. The group is converting a network of compromised home routers into operational relay boxes to perform stealth reconnaissance and attacks via them.",
    "rationale": "the affected French organisations operated home/office routers with known, unpatched vulnerabilities and exposed services, which APT31 converted into relay infrastructure -- a sustained patch-management and access-exposure gap on the victim side. Confirmed via ANSSI/CERT-FR (French national cybersecurity agency, primary source): APT31 exploited vulnerable internet-facing routers (via known vulnerabilities), used brute-force against exposed services, and phishing (via GMASS service) to gain initial access -- a combined patch/configuration and identity-access execution gap.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "cert.ssi.gouv.fr",
        "url": "https://www.cert.ssi.gouv.fr/cti/CERTFR-2021-CTI-013/"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/142452/apt/chinese-apts-targets-eu.html"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/RecordedFuture/status/1626633928327954434"
      },
      {
        "label": "securityaffairs.com",
        "url": "https://securityaffairs.com/142698/breaking-news/security-affairs-newsletter-round-408-by-pierluigi-paganini.html"
      },
      {
        "label": "twitter.com",
        "url": "https://twitter.com/shanvav/status/1656800405286789120"
      },
      {
        "label": "intrusiontruth.wordpress.com",
        "url": "https://intrusiontruth.wordpress.com/2023/05/16/introducing-cheng-feng/"
      },
      {
        "label": "bankinfosecurity.com",
        "url": "https://www.bankinfosecurity.com/chinese-apt-group-attacks-french-organizations-a-17124#:~:text=APT%2031%2C%20a%20China%2Dlinked,Agency%20of%20France%2C%20or%20ANSSI."
      },
      {
        "label": "securityaffairs.co",
        "url": "https://securityaffairs.co/wordpress/120392/apt/anssi-warns-apt31-attacks.html"
      },
      {
        "label": "bleepingcomputer.com",
        "url": "https://www.bleepingcomputer.com/news/security/france-warns-of-apt31-cyberspies-targeting-french-organizations/"
      },
      {
        "label": "cert.ssi.gouv.fr",
        "url": "https://cert.ssi.gouv.fr/ioc/CERTFR-2021-IOC-003/"
      },
      {
        "label": "cert.ssi.gouv.fr",
        "url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2021-CTI-013.pdf"
      },
      {
        "label": "cyberscoop.com",
        "url": "https://www.cyberscoop.com/china-midterms-elections-influence-nord-hacking/"
      }
    ]
  },
  {
    "id": "1291",
    "year": 2020,
    "name": "US government agencies and other VMware Data Theft (Unknown, n.d.)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "5/5 — Very high — incident-specific mechanism confirmed by a primary source",
    "victim": "US government agencies and other VMware Workspace ONE Access users (per NSA advisory)",
    "actor": "Unknown",
    "countries": [
      "Unknown"
    ],
    "sectors": [
      "Unknown"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [
      "M6"
    ],
    "summary": "Russian state-sponsored actors use vulnerabilities to steal sensitive information.",
    "rationale": "the affected US government agencies and other organisations ran VMware Workspace ONE Access without applying an already-available patch for a publicly disclosed command-injection vulnerability, and reportedly used weak credentials on the exposed management interface -- both squarely operational failures independent of attacker sophistication. Confirmed via NSA advisory (primary source, December 2020): Russian state-sponsored actors exploited CVE-2020-4006, a command injection vulnerability in VMware Workspace ONE Access -- already publicly disclosed and patched at the time of exploitation. The NSA explicitly noted that credential-based access to the management interface was a precondition, and recommended stronger passwords -- a combined patch-latency and identity-access execution gap, confirmed by a primary government source.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "nsa.gov",
        "url": "https://www.nsa.gov/News-Features/Feature-Stories/Article-View/Article/2434988/"
      },
      {
        "label": "arstechnica.com",
        "url": "https://arstechnica.com/information-technology/2020/12/nsa-says-russian-state-hackers-are-using-a-vmware-flaw-to-ransack-networks/"
      },
      {
        "label": "media.defense.gov",
        "url": "https://media.defense.gov/2020/Dec/07/2002547071/-1/-1/0/CSA_VMWARE%20ACCESS_U_OO_195076_20.PDF"
      }
    ]
  },
  {
    "id": "1270",
    "year": 2016,
    "name": "Unspecified organisations subject to long-term espionage Data Theft (Emissary Panda, n.d.)",
    "breachType": "Data theft / espionage",
    "resultKey": "expertise-execution",
    "confidence": "4/5 — High — confirmed by strong secondary reporting",
    "victim": "Unspecified organisations subject to long-term espionage campaign (per McAfee 'Operation Harvest' research)",
    "actor": "Emissary Panda/APT27/Lucky Mouse/BRONZE UNION/TEMP.Hippo/Group 35/TG-3390/Iron Tiger/ZipToken/G0027, APT41/Brass Typhoon fka BARIUM/Wicked Panda/G0096 (Chengdu 404 Network Technology) < Winnti Umbrella/G0044",
    "countries": [
      "Unknown"
    ],
    "sectors": [
      "Unknown"
    ],
    "subSectors": [
      "Not available"
    ],
    "primaryMarker": "M5",
    "secondaryMarkers": [
      "M11"
    ],
    "summary": "McAfee's Advanced Threat Research Team discovered a malware attack that turned out to be a long-term espionage campaign. The company considers Chinese groups APT27 and APT41 the most likely actors for the attack.",
    "rationale": "the affected organisations' web servers carried a public-facing vulnerability that went undetected and unremediated for a sustained, multi-year period, allowing persistent, low-and-slow espionage access to continue undetected. Confirmed via McAfee Enterprise (primary research, reported by BankInfoSecurity): the threat actor (assessed as Chinese state-linked, APT27/APT41) gained initial access by compromising a victim's web server through exploitation of a public-facing vulnerability, then escalated privileges and moved laterally to exfiltrate data over multiple years -- a clear, sustained patch/configuration execution gap.",
    "status": "AI analysed",
    "sources": [
      {
        "label": "bankinfosecurity.com",
        "url": "https://www.bankinfosecurity.com/chinese-apt-data-harvesting-campaign-analyzed-a-17581"
      },
      {
        "label": "cyware.com",
        "url": "https://cyware.com/news/lets-talk-about-operation-harvest-2d9feff3/?web_view=true"
      },
      {
        "label": "inforisktoday.com",
        "url": "https://www.inforisktoday.com/chinese-apt-data-harvesting-campaign-analyzed-a-17581"
      },
      {
        "label": "techtarget.com",
        "url": "https://www.techtarget.com/searchsecurity/news/252506722/McAfee-discovers-Chinese-APT-campaign-Operation-Harvest"
      },
      {
        "label": "trellix.com",
        "url": "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs/operation-harvest-a-deep-dive-into-a-long-term-campaign.html"
      }
    ]
  }
];

