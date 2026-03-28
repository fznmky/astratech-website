// script.js

// --- 1. Translation Dictionary ---
const translations = {
    en: {
        nav_sectors: "Sectors We Serve",
        nav_approach: "Our Approach",
        nav_impact: "Our Impact",
        nav_security: "Security",
        nav_cta: "Contact",

        hero_badge: "Global Supply Chain Expertise",
        hero_title: "We de-risk global manufacturing with <br><span style='color: #C9ADA7'>precision sourcing.</span>",
        hero_desc: "Astratech Solutions provides end-to-end procurement, rigorous quality control, and seamless export logistics tailored to your exact engineering standards.",
        hero_cta: "Book a Feasibility Call",

        m1: "Strategic Sourcing", m2: "Pre-Shipment Inspections", m3: "Export Logistics",
        m4: "Supplier Audits", m5: "IP Protection", m6: "Customs Clearance",

        sectors_title: "Sectors we serve",
        tab_auto: "Automotive", tab_elec: "Electronics", tab_pack: "Packaging", tab_agri: "Agriculture", tab_hard: "Hardware",

        auto_title: "Automotive & Precision Engineering",
        auto_desc: "Sourcing for high-tolerance automotive components. We vet TS16949-compliant supplier networks, managing rigorous on-site verification and complete sample workflow approvals.",
        auto_b1: "TS16949-compliant networks", auto_b2: "PPAP Level 3 readiness", auto_b3: "Strict IPQC & material tolerances",

        elec_title: "Electronics & PCB Assembly",
        elec_desc: "India's premier choice for 'China+1' electronics manufacturing. Astratech Solutions sources global-standard components from highly vetted facilities.",
        elec_b1: "Clean-room audited facilities", elec_b2: "RoHS, CE, and UL compliance", elec_b3: "Anti-static packaging protocols",

        pack_title: "Sustainable Packaging Solutions",
        pack_desc: "Protect products and margins. Astratech Solutions sources industrial-grade corrugated boxes and protective materials designed for global transit.",
        pack_b1: "FSC-certified sustainable materials", pack_b2: "High-impact transit durability", pack_b3: "Custom tooling and molds",

        agri_title: "Agriculture & Fresh Produce",
        agri_desc: "We are an APEDA-registered exporter managing complex cold-chains, strict Phytosanitary clearances, and international compliance for global distribution.",
        agri_b1: "APEDA-registered compliance", agri_b2: "Strict MRL pre-shipment testing", agri_b3: "End-to-end cold-chain logistics",

        hard_title: "Industrial Hardware & Tooling",
        hard_desc: "Access metallurgical quality. Astratech Solutions sources heavy machinery and precision tools directly from specialized Indian foundries.",
        hard_b1: "Lab-certified metallurgical tests", hard_b2: "Advanced surface treatments", hard_b3: "Direct SME foundry access",

        btn_quote: "Get Quote",

        unlock_title: "Unlock India’s Untapped <br class='hidden md:block'><span class='text-gray-400 font-normal'>Manufacturing Power.</span>",
        unlock_desc: "70% of India's best manufacturers are small-scale experts who don't export. We bridge the gap as your \"Exporter of Record,\" giving you access to these hidden gems risk-free.",
        buy_direct: "Buying Direct",
        bd_1: "Communication barriers & language gaps",
        bd_2: "No quality accountability",
        bd_3: "Complex export compliance",
        bd_4: "Payment & fraud risks",
        buy_us: "Buying Through Us",
        bu_1: "Single point of contact, full transparency",
        bu_2: "Verified quality with on-site inspections",
        bu_3: "We handle all export documentation",
        bu_4: "Secure payment terms & escrow protection",

        impact_title: "Delivering measurable impact <br class='hidden md:block'><span class='text-gray-400 font-normal'>across the supply chain.</span>",
        imp1_title: "Cost Optimization", imp1_desc: "By auditing top Tier-1 and hidden SME manufacturers across India, we negotiate transparent, open-book pricing that directly protects your margins.",
        imp2_title: "Risk Mitigation", imp2_desc: "Our deployed engineers conduct strict IQC and Pre-Shipment Inspections on the factory floor, verifying absolute compliance before shipping.",
        imp3_title: "Seamless Delivery", imp3_desc: "Astratech Solutions acts as your Exporter of Record. From navigating complex customs to final container freight forwarding, we handle it all.",

        trust1_title: "Secure File Exchange",
        trust1_desc: "Your CAD files and technical data are legally protected before a single conversation begins.",
        trust2_title: "Strict IP Governance",
        trust2_desc: "We enforce rigorous data silos and audit trails to guarantee zero intellectual property leakage.",
        trust3_title: "Zero Liability Sourcing",
        trust3_desc: "Contract securely with our registered entity. We absorb all local compliance and financial risks.",

        contact_title: "Request a Feasibility Study",
        contact_desc: "Submit your requirements. Our engineering team will assess feasibility and costs.",
        form_name: "Full Name", form_email: "Corporate Email", form_req: "Project Requirements",
        form_nda: "I require a Non-Disclosure Agreement (NDA) before sharing CAD files.",
        form_nda_msg: "Understood. Please submit the form. We will email our standard NDA to you immediately for signature.",
        form_upload: "Upload Drawings (PDF, CAD)", form_submit: "Submit Request",

        footer_desc: "Your Strategic Procurement Partner in India. Global Supply Chain Expertise.",
        foot_nav: "Navigation", foot_legal: "Legal", foot_comp: "Compliance",
        foot_priv: "Privacy Policy", foot_terms: "Terms & Conditions",
        foot_gdpr: "GDPR Ready", foot_ip: "IP Safe", foot_rights: "© 2026 Astratech Solutions. All rights reserved.",

        priv_title: "Privacy Policy",
        priv_date: "Last Updated: March 2026",
        priv_h1: "1. Scope and Introduction",
        priv_p1: "Astratech Solutions (\"we,\" \"our,\" or \"us\") operates as a global procurement and sourcing agent. This Privacy Policy governs the collection, processing, and protection of corporate and personal data submitted through our platform or via direct business communication. We strictly adhere to the General Data Protection Regulation (GDPR) and international data protection standards.",
        priv_h2: "2. Data Collection and Purpose",
        priv_p2: "As a B2B service provider, we collect data necessary to evaluate manufacturing feasibility and fulfill contractual obligations. This includes:",
        priv_l2_1: "<strong>Corporate Contact Details:</strong> Names, corporate emails, and business addresses.",
        priv_l2_2: "<strong>Technical Specifications:</strong> CAD drawings, schematics, material tolerances, and intellectual property submitted for feasibility requests.",
        priv_l2_3: "<strong>Financial Data:</strong> Tax identification numbers, billing addresses, and banking details required for escrow and international freight forwarding.",
        priv_h3: "3. Legal Basis for Processing",
        priv_p3: "Under GDPR Article 6, we process your data strictly under the following legal bases: (a) Performance of a contract (processing Request for Quotations and managing supply chains), and (b) Legitimate interests (ensuring fraud prevention and improving our B2B services).",
        priv_h4: "4. Data Sharing and International Transfers",
        priv_p4: "Astratech Solutions operates heavily within India's manufacturing sector. Therefore, technical data and specifications are transferred to our audited supplier network. <strong>We mitigate all international transfer risks through:</strong>",
        priv_l4_1: "<strong>Pre-Signed NDAs:</strong> No technical files are shared with manufacturing partners without a mutually executed Non-Disclosure Agreement.",
        priv_l4_2: "<strong>Standard Contractual Clauses (SCCs):</strong> All data transferred outside of the European Economic Area (EEA) is protected by legally binding mechanisms ensuring GDPR-equivalent security.",
        priv_h5: "5. User Rights (GDPR)",
        priv_p5: "European residents and corporate entities have the right to request access to, rectification of, or erasure of their data (\"Right to be Forgotten\" - Article 17). You may also request data portability or object to specific processing methods by contacting our compliance team directly.",

        term_title: "Terms & Conditions",
        term_date: "Last Updated: March 2026",
        term_h1: "1. Scope of Services",
        term_p1: "Astratech Solutions operates as a sourcing facilitator, quality assurance auditor, and Exporter of Record within India. By submitting a Request for Quotation (RFQ) or engaging our services, you agree that Astratech Solutions acts as an intermediary coordinating with Tier-1 and SME manufacturers, and managing local logistics.",
        term_h2: "2. Intellectual Property (IP) Protection",
        term_p2: "The client retains all legal rights, titles, and ownership over any schematics, CAD files, or technical designs shared with Astratech Solutions. No IP will be distributed to manufacturing partners without the explicit execution of a Non-Disclosure Agreement (NDA).",
        term_h3: "3. Commodity-Specific Compliance",
        term_p3: "Astratech manages local compliance verifications tailored to the client's industry sector. However, final import compliance rests with the client. Our protocols include:",
        term_l3_1: "<strong>Automotive & Hardware:</strong> Verification of TS16949 standards and metallurgical lab testing.",
        term_l3_2: "<strong>Electronics:</strong> Enforcement of RoHS and CE compliance standards.",
        term_l3_3: "<strong>Agriculture:</strong> Verification of APEDA registration, cold-chain documentation, and Phytosanitary certificates.",
        term_h4: "4. Quality Assurance and Liability",
        term_p4: "Astratech Solutions conducts Pre-Shipment Inspections (PSI) utilizing standardized Acceptable Quality Limit (AQL) methodologies. Once goods pass PSI and are loaded onto export vessels, Astratech’s liability for physical product damage or defects transfers to the freight carrier or is governed by the specific Incoterms (e.g., FOB, CIF) agreed upon in the final contract.",
        term_h5: "5. Escrow and Payments",
        term_p5: "To shield clients from local fraud, Astratech Solutions acts as the financial buffer. All payments are remitted to our secure corporate entity. We absorb currency fluctuations as agreed in the final Pro Forma Invoice and manage factory advances directly. Down payments are non-refundable once tooling or mass production has commenced."
    },
    de: {
        nav_sectors: "Branchen",
        nav_approach: "Unser Ansatz",
        nav_impact: "Unsere Wirkung",
        nav_security: "Sicherheit",
        nav_cta: "Kontakt",

        hero_badge: "Globale Lieferketten-Expertise",
        hero_title: "Wir minimieren globale Fertigungsrisiken durch <br><span style='color: #C9ADA7'>Präzisionsbeschaffung.</span>",
        hero_desc: "Astratech Solutions bietet End-to-End-Beschaffung, strenge Qualitätskontrolle und nahtlose Exportlogistik, exakt zugeschnitten auf Ihre technischen Standards.",
        hero_cta: "Beratungsgespräch buchen",

        m1: "Strategischer Einkauf", m2: "Vorversandkontrollen", m3: "Exportlogistik",
        m4: "Lieferantenaudits", m5: "IP-Schutz", m6: "Zollabfertigung",

        sectors_title: "Branchen, die wir bedienen",
        tab_auto: "Automobil", tab_elec: "Elektronik", tab_pack: "Verpackung", tab_agri: "Agrar", tab_hard: "Hardware",

        auto_title: "Automobil & Feinmechanik",
        auto_desc: "Beschaffung hochpräziser Automobilkomponenten. Wir prüfen TS16949-konforme Lieferantennetzwerke und verwalten Vor-Ort-Verifizierungen und Musterfreigaben.",
        auto_b1: "TS16949-konforme Netzwerke", auto_b2: "PPAP Level 3 Bereitschaft", auto_b3: "Strenge IPQC & Materialtoleranzen",

        elec_title: "Elektronik & Leiterplattenbestückung",
        elec_desc: "Indiens erste Wahl für 'China+1' Elektronikfertigung. Astratech Solutions bezieht Komponenten nach globalen Standards aus streng geprüften Werken.",
        elec_b1: "Geprüfte Reinraumanlagen", elec_b2: "RoHS, CE und UL Konformität", elec_b3: "Antistatische Verpackungsprotokolle",

        pack_title: "Nachhaltige Verpackungslösungen",
        pack_desc: "Schützen Sie Produkte und Margen. Wir beschaffen Wellpappkartons in Industriequalität und Schutzmaterialien für den weltweiten Transport.",
        pack_b1: "FSC-zertifizierte Materialien", pack_b2: "Hohe Widerstandsfähigkeit", pack_b3: "Individuelle Werkzeuge & Formen",

        agri_title: "Agrar & Frischeprodukte",
        agri_desc: "Wir sind ein APEDA-registrierter Exporteur und verwalten komplexe Kühlketten, pflanzenschutzrechtliche Freigaben und internationale Konformität.",
        agri_b1: "APEDA-registrierte Konformität", agri_b2: "Strenge MRL-Vorversandtests", agri_b3: "End-to-End-Kühlkettenlogistik",

        hard_title: "Industrie-Hardware & Werkzeuge",
        hard_desc: "Zugang zu metallurgischer Qualität. Wir beziehen schwere Maschinen und Präzisionswerkzeuge direkt von spezialisierten indischen Gießereien.",
        hard_b1: "Laborgeprüfte Metallurgie", hard_b2: "Fortschrittliche Oberflächen", hard_b3: "Direkter Zugang zu KMU-Gießereien",

        btn_quote: "Angebot anfordern",

        unlock_title: "Erschließen Sie Indiens ungenutztes <br class='hidden md:block'><span class='text-gray-400 font-normal'>Fertigungspotenzial.</span>",
        unlock_desc: "70 % der besten Hersteller Indiens sind kleine Experten, die nicht exportieren. Wir schließen diese Lücke als Ihr \"Exporter of Record\" und bieten Ihnen risikofreien Zugang zu diesen verborgenen Schätzen.",
        buy_direct: "Direkteinkauf",
        bd_1: "Kommunikationsbarrieren & Sprachlücken",
        bd_2: "Keine Qualitätsverantwortung",
        bd_3: "Komplexe Export-Compliance",
        bd_4: "Zahlungs- & Betrugsrisiken",
        buy_us: "Einkauf über uns",
        bu_1: "Zentraler Ansprechpartner, volle Transparenz",
        bu_2: "Geprüfte Qualität durch Vor-Ort-Inspektionen",
        bu_3: "Wir übernehmen die gesamte Exportdokumentation",
        bu_4: "Sichere Zahlungsbedingungen & Treuhandschutz",

        impact_title: "Wir liefern messbare Ergebnisse <br class='hidden md:block'><span class='text-gray-400 font-normal'>über die gesamte Lieferkette.</span>",
        imp1_title: "Kostenoptimierung", imp1_desc: "Durch die Prüfung von Tier-1- und versteckten KMU-Herstellern in Indien verhandeln wir transparente Preise, die Ihre Margen direkt schützen.",
        imp2_title: "Risikominderung", imp2_desc: "Unsere Ingenieure führen strenge IQC- und Vorversandinspektionen in den Fabriken durch und überprüfen die absolute Konformität vor dem Versand.",
        imp3_title: "Nahtlose Lieferung", imp3_desc: "Astratech Solutions agiert als Ihr Exporter of Record. Von der Zollabfertigung bis zur Containerfrachtspedition erledigen wir alles.",

        trust1_title: "Sicherer Datenaustausch",
        trust1_desc: "Ihre CAD-Dateien und technischen Daten sind rechtlich geschützt, bevor das erste Gespräch beginnt.",
        trust2_title: "Strenge IP-Richtlinien",
        trust2_desc: "Wir erzwingen strikte Datensilos und Prüfprotokolle, um den Schutz Ihres geistigen Eigentums zu garantieren.",
        trust3_title: "Risikofreie Beschaffung",
        trust3_desc: "Vertragssicherheit durch unsere registrierte Entität. Wir übernehmen alle lokalen Compliance- und Finanzrisiken.",

        contact_title: "Machbarkeitsstudie anfordern",
        contact_desc: "Reichen Sie Ihre Anforderungen ein. Unser Technikteam prüft Machbarkeit und Kosten.",
        form_name: "Vollständiger Name", form_email: "Firmen-E-Mail", form_req: "Projektanforderungen",
        form_nda: "Ich benötige eine Geheimhaltungsvereinbarung (NDA), bevor ich CAD-Dateien teile.",
        form_nda_msg: "Verstanden. Bitte senden Sie das Formular ab. Wir senden Ihnen umgehend unser Standard-NDA zur Unterschrift per E-Mail.",
        form_upload: "Zeichnungen hochladen (PDF, CAD)", form_submit: "Anfrage absenden",

        footer_desc: "Ihr strategischer Beschaffungspartner in Indien. Globale Lieferketten-Expertise.",
        foot_nav: "Navigation", foot_legal: "Rechtliches", foot_comp: "Konformität",
        foot_priv: "Datenschutzerklärung", foot_terms: "AGB",
        foot_gdpr: "DSGVO-konform", foot_ip: "IP-Sicher", foot_rights: "© 2026 Astratech Solutions. Alle Rechte vorbehalten.",

        priv_title: "Datenschutzerklärung",
        priv_date: "Zuletzt aktualisiert: März 2026",
        priv_h1: "1. Geltungsbereich und Einleitung",
        priv_p1: "Astratech Solutions („wir“, „unser“ oder „uns“) agiert als globaler Beschaffungs- und Sourcing-Agent. Diese Datenschutzerklärung regelt die Erhebung, Verarbeitung und den Schutz von Unternehmens- und personenbezogenen Daten, die über unsere Plattform oder direkte Geschäftskommunikation übermittelt werden. Wir halten uns strikt an die Datenschutz-Grundverordnung (DSGVO) und internationale Datenschutzstandards.",
        priv_h2: "2. Datenerhebung und Zweck",
        priv_p2: "Als B2B-Dienstleister erheben wir Daten, die zur Bewertung der Machbarkeit von Fertigungsprozessen und zur Erfüllung vertraglicher Verpflichtungen erforderlich sind. Dazu gehören:",
        priv_l2_1: "<strong>Unternehmenskontaktdaten:</strong> Namen, Firmen-E-Mails und Geschäftsadressen.",
        priv_l2_2: "<strong>Technische Spezifikationen:</strong> CAD-Zeichnungen, Schaltpläne, Materialtoleranzen und geistiges Eigentum, das für Machbarkeitsanfragen übermittelt wird.",
        priv_l2_3: "<strong>Finanzdaten:</strong> Steueridentifikationsnummern, Rechnungsadressen und Bankdaten, die für Treuhandkonten und internationale Frachtweiterleitung erforderlich sind.",
        priv_h3: "3. Rechtsgrundlage der Verarbeitung",
        priv_p3: "Gemäß Artikel 6 DSGVO verarbeiten wir Ihre Daten streng nach folgenden Rechtsgrundlagen: (a) Vertragserfüllung (Bearbeitung von Angebotsanfragen und Verwaltung von Lieferketten) und (b) Berechtigte Interessen (Betrugsprävention und Verbesserung unserer B2B-Dienstleistungen).",
        priv_h4: "4. Datenweitergabe und internationale Transfers",
        priv_p4: "Astratech Solutions ist stark im indischen Fertigungssektor tätig. Daher werden technische Daten und Spezifikationen an unser geprüftes Lieferantennetzwerk übermittelt. <strong>Wir mindern alle Risiken bei internationalen Transfers durch:</strong>",
        priv_l4_1: "<strong>Vorab unterzeichnete NDAs:</strong> Ohne eine beidseitig unterzeichnete Geheimhaltungsvereinbarung werden keine technischen Dateien an Fertigungspartner weitergegeben.",
        priv_l4_2: "<strong>Standardvertragsklauseln (SCCs):</strong> Alle außerhalb des Europäischen Wirtschaftsraums (EWR) übermittelten Daten sind durch rechtsverbindliche Mechanismen geschützt, die eine DSGVO-äquivalente Sicherheit gewährleisten.",
        priv_h5: "5. Nutzerrechte (DSGVO)",
        priv_p5: "Europäische Einwohner und Unternehmenseinheiten haben das Recht, Zugang, Berichtigung oder Löschung ihrer Daten zu verlangen („Recht auf Vergessenwerden“ – Artikel 17). Sie können auch Datenübertragbarkeit anfordern oder bestimmten Verarbeitungsmethoden widersprechen, indem Sie sich direkt an unser Compliance-Team wenden.",

        term_title: "Allgemeine Geschäftsbedingungen",
        term_date: "Zuletzt aktualisiert: März 2026",
        term_h1: "1. Leistungsumfang",
        term_p1: "Astratech Solutions agiert als Sourcing-Vermittler, Prüfer für Qualitätssicherung und Exporter of Record in Indien. Durch das Einreichen einer Angebotsanfrage (RFQ) oder die Beauftragung unserer Dienstleistungen erklären Sie sich damit einverstanden, dass Astratech Solutions als Vermittler auftritt, der mit Tier-1- und KMU-Herstellern koordiniert und die lokale Logistik verwaltet.",
        term_h2: "2. Schutz des geistigen Eigentums (IP)",
        term_p2: "Der Kunde behält alle rechtlichen Ansprüche, Titel und Eigentumsrechte an allen Schaltplänen, CAD-Dateien oder technischen Entwürfen, die mit Astratech Solutions geteilt werden. Kein geistiges Eigentum wird ohne die ausdrückliche Unterzeichnung einer Geheimhaltungsvereinbarung (NDA) an Fertigungspartner weitergegeben.",
        term_h3: "3. Rohstoffspezifische Compliance",
        term_p3: "Astratech verwaltet lokale Compliance-Prüfungen, die auf den Industriesektor des Kunden zugeschnitten sind. Die endgültige Import-Compliance liegt jedoch beim Kunden. Unsere Protokolle umfassen:",
        term_l3_1: "<strong>Automobil & Hardware:</strong> Überprüfung der TS16949-Standards und metallurgische Labortests.",
        term_l3_2: "<strong>Elektronik:</strong> Durchsetzung von RoHS- und CE-Konformitätsstandards.",
        term_l3_3: "<strong>Agrarwirtschaft:</strong> Überprüfung der APEDA-Registrierung, der Kühlkettendokumentation und phytosanitärer Zertifikate.",
        term_h4: "4. Qualitätssicherung und Haftung",
        term_p4: "Astratech Solutions führt Vorversandkontrollen (PSI) unter Verwendung standardisierter Acceptable Quality Limit (AQL)-Methoden durch. Sobald Waren die PSI bestehen und auf Exportbehälter verladen werden, geht die Haftung von Astratech für physische Produktschäden oder -mängel auf den Frachtführer über oder richtet sich nach den im endgültigen Vertrag vereinbarten Incoterms (z. B. FOB, CIF).",
        term_h5: "5. Treuhand und Zahlungen",
        term_p5: "Um Kunden vor lokalem Betrug zu schützen, fungiert Astratech Solutions als finanzieller Puffer. Alle Zahlungen werden an unsere sichere Unternehmenseinheit überwiesen. Wir übernehmen Währungsschwankungen wie in der endgültigen Proforma-Rechnung vereinbart und verwalten Werksvorschüsse direkt. Anzahlungen sind nicht erstattungsfähig, sobald mit der Werkzeugerstellung oder Massenproduktion begonnen wurde."
    }
};

// --- 2. Language Logic ---
let currentLang = localStorage.getItem('astratech_lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('astratech_lang', lang);

    // SMART UX: Show the *opposite* language to let the user know what they can switch to.
    const displayLang = lang === 'en' ? 'DE' : 'EN';

    const dtLangText = document.getElementById('current-lang-desktop');
    if (dtLangText) dtLangText.innerText = displayLang;

    const mbLangText = document.getElementById('lang-switch-mobile');
    if (mbLangText) mbLangText.innerText = displayLang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
}

function toggleLanguage() {
    setLanguage(currentLang === 'en' ? 'de' : 'en');
}

// --- 3. Initialization & Event Listeners ---
document.addEventListener("DOMContentLoaded", function () {
    // Bulletproofing AOS so the language script doesn't crash on pages without animations
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 900, easing: 'ease-out-cubic', once: true, offset: 50 });
    }

    if (!localStorage.getItem('astratech_lang')) {
        const userLang = navigator.language || navigator.userLanguage;
        if (userLang.startsWith('de')) {
            currentLang = 'de';
        }
    }

    setLanguage(currentLang);

    const langBtnDesktop = document.getElementById('lang-switch-desktop');
    const langBtnMobile = document.getElementById('lang-switch-mobile');
    if (langBtnDesktop) langBtnDesktop.addEventListener('click', toggleLanguage);
    if (langBtnMobile) langBtnMobile.addEventListener('click', toggleLanguage);

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    const ndaCheckbox = document.getElementById('nda-checkbox');
    const ndaMessage = document.getElementById('nda-message');
    if (ndaCheckbox && ndaMessage) {
        ndaCheckbox.addEventListener('change', function () {
            if (this.checked) {
                ndaMessage.classList.remove('hidden');
            } else {
                ndaMessage.classList.add('hidden');
            }
        });
    }
});

// --- 4. Tabs Logic (Updated Array Order) ---
const tabs = ['auto', 'electronics', 'packaging', 'hardware', 'agri'];

function switchTab(selected) {
    tabs.forEach(tab => {
        const contentEl = document.getElementById('content-' + tab);
        if (contentEl) {
            contentEl.classList.add('hidden');
            contentEl.classList.remove('md:grid', 'grid', 'tab-pane-enter');
        }
        const tabEl = document.getElementById('tab-' + tab);
        if (tabEl) {
            tabEl.classList.remove('tab-active');
        }
    });

    const selectedContent = document.getElementById('content-' + selected);
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
        void selectedContent.offsetWidth;
        selectedContent.classList.add('grid', 'md:grid', 'tab-pane-enter');
    }

    const selectedTab = document.getElementById('tab-' + selected);
    if (selectedTab) {
        selectedTab.classList.add('tab-active');
    }
}