// script.js

// --- 1. Translation Dictionary ---
const translations = {
    en: {
        nav_sectors: "Sectors We Serve",
        nav_model: "Our Model",
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

        unlock_title: "Unlock India’s Untapped Manufacturing Power",
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

        // --- NEW: Security Trust Bar ---
        trust1_title: "Ironclad Non-Disclosure",
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

        footer_desc: "Your Strategic Procurement Partner in India. Modern supply chain expertise.",
        foot_nav: "Navigation", foot_legal: "Legal", foot_comp: "Compliance",
        foot_priv: "Privacy Policy", foot_terms: "Terms & Conditions",
        foot_gdpr: "GDPR Ready", foot_ip: "IP Safe", foot_rights: "© 2026 Astratech Solutions. All rights reserved."
    },
    de: {
        nav_sectors: "Branchen",
        nav_model: "Unser Modell",
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

        unlock_title: "Erschließen Sie Indiens ungenutztes Fertigungspotenzial",
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

        // --- NEW: Security Trust Bar ---
        trust1_title: "Strikte Geheimhaltung (NDA)",
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

        footer_desc: "Ihr strategischer Beschaffungspartner in Indien. Moderne Lieferketten-Expertise.",
        foot_nav: "Navigation", foot_legal: "Rechtliches", foot_comp: "Konformität",
        foot_priv: "Datenschutzerklärung", foot_terms: "AGB",
        foot_gdpr: "DSGVO-konform", foot_ip: "IP-Sicher", foot_rights: "© 2026 Astratech Solutions. Alle Rechte vorbehalten."
    }
};

// --- 2. Language Logic ---
let currentLang = localStorage.getItem('astratech_lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('astratech_lang', lang);

    const displayLang = lang.toUpperCase();
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
    AOS.init({ duration: 900, easing: 'ease-out-cubic', once: true, offset: 50 });

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

// --- 4. Tabs Logic ---
const tabs = ['auto', 'electronics', 'packaging', 'agri', 'hardware'];

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