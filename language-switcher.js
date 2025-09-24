// Dil değiştirme JavaScript fonksiyonları

class LanguageSwitcher {
    constructor() {
        this.currentLanguage = this.getStoredLanguage() || 'tr';
        this.init();
    }

    // LocalStorage'dan dil tercihi al
    getStoredLanguage() {
        return localStorage.getItem('parkping-language');
    }

    // Dil tercihini kaydet
    setStoredLanguage(lang) {
        localStorage.setItem('parkping-language', lang);
    }

    // Başlangıç
    init() {
        this.createLanguageSwitcher();
        this.updateContent();
        this.updateHTMLLang();
    }

    // Dil değiştirici butonu oluştur
    createLanguageSwitcher() {
        const switcher = document.createElement('div');
        switcher.className = 'language-switcher';
        switcher.innerHTML = `
            <div class="language-toggle">
                <button class="lang-btn ${this.currentLanguage === 'tr' ? 'active' : ''}" data-lang="tr">
                    🇹🇷 TR
                </button>
                <button class="lang-btn ${this.currentLanguage === 'en' ? 'active' : ''}" data-lang="en">
                    🇺🇸 EN
                </button>
            </div>
        `;

        // Header'a ekle
        const header = document.querySelector('.header');
        if (header) {
            header.appendChild(switcher);
        }

        // Event listener ekle
        switcher.addEventListener('click', (e) => {
            if (e.target.classList.contains('lang-btn')) {
                this.switchLanguage(e.target.dataset.lang);
            }
        });
    }

    // Dil değiştir
    switchLanguage(newLang) {
        if (newLang === this.currentLanguage) return;

        this.currentLanguage = newLang;
        this.setStoredLanguage(newLang);
        this.updateContent();
        this.updateHTMLLang();
        this.updateActiveButton();
    }

    // HTML lang attribute güncelle
    updateHTMLLang() {
        document.documentElement.lang = this.currentLanguage;
    }

    // Aktif buton stilini güncelle
    updateActiveButton() {
        const buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === this.currentLanguage) {
                btn.classList.add('active');
            }
        });
    }

    // Ana sayfa içeriğini güncelle
    updateMainPageContent() {
        const t = translations[this.currentLanguage];

        // Title
        document.title = t.pageTitle;

        // Header
        const appName = document.querySelector('.header h1');
        if (appName) appName.textContent = `🅿️ ${t.appName}`;

        const tagline = document.querySelector('.header p');
        if (tagline) tagline.textContent = t.tagline;

        // Features section
        const featuresTitle = document.querySelector('.section h2');
        if (featuresTitle) featuresTitle.innerHTML = t.featuresTitle;

        const featuresSubtitle = document.querySelector('.section p[style*="text-align: center"]');
        if (featuresSubtitle) featuresSubtitle.textContent = t.featuresSubtitle;

        // Feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        if (featureCards.length >= 3) {
            featureCards[0].querySelector('h3').textContent = t.locationSaveTitle;
            featureCards[0].querySelector('p').textContent = t.locationSaveDesc;

            featureCards[1].querySelector('h3').textContent = t.mapKitTitle;
            featureCards[1].querySelector('p').textContent = t.mapKitDesc;

            featureCards[2].querySelector('h3').textContent = t.directionsTitle;
            featureCards[2].querySelector('p').textContent = t.directionsDesc;
        }

        // FAQ section
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const title = section.querySelector('h2');
            if (title && title.textContent.includes('❓')) {
                title.innerHTML = t.faqTitle;
            }
        });

        // FAQ items
        const faqItems = document.querySelectorAll('.faq-item');
        if (faqItems.length >= 3) {
            faqItems[0].querySelector('h3').textContent = t.faq1Question;
            faqItems[0].querySelector('p').textContent = t.faq1Answer;

            faqItems[1].querySelector('h3').textContent = t.faq2Question;
            faqItems[1].querySelector('p').textContent = t.faq2Answer;

            faqItems[2].querySelector('h3').textContent = t.faq3Question;
            faqItems[2].querySelector('p').textContent = t.faq3Answer;
        }

        // Contact section
        const contactSection = document.querySelector('.section:has(.contact-form)');
        if (contactSection) {
            const contactTitle = contactSection.querySelector('h2');
            if (contactTitle) contactTitle.innerHTML = t.contactTitle;
        }

        // Form labels
        const labels = document.querySelectorAll('.form-group label');
        if (labels.length >= 4) {
            labels[0].textContent = t.nameLabel;
            labels[1].textContent = t.emailLabel;
            labels[2].textContent = t.subjectLabel;
            labels[3].textContent = t.messageLabel;
        }

        // Form elements
        const selectElement = document.querySelector('select');
        if (selectElement) {
            selectElement.innerHTML = `
                <option value="">${t.subjectPlaceholder}</option>
                <option value="teknik">${t.subjectTech}</option>
                <option value="konum">${t.subjectLocation}</option>
                <option value="harita">${t.subjectMap}</option>
            `;
        }

        const textarea = document.querySelector('textarea');
        if (textarea) textarea.placeholder = t.messagePlaceholder;

        const submitBtn = document.querySelector('.submit-btn');
        if (submitBtn) submitBtn.textContent = t.submitButton;

        // Footer
        const footerTitle = document.querySelector('.footer h3');
        if (footerTitle) footerTitle.textContent = t.footerTitle;

        const contactItems = document.querySelectorAll('.contact-item');
        if (contactItems.length >= 2) {
            contactItems[0].innerHTML = `<strong>${t.emailContact}</strong><br><a href="mailto:yasincetin.dev@gmail.com">yasincetin.dev@gmail.com</a>`;
            contactItems[1].innerHTML = `<strong>${t.appStoreContact}</strong><br><a href="#">${t.appStoreLink}</a>`;
        }

        const copyright = document.querySelector('.legal-links p');
        if (copyright) copyright.textContent = t.copyright;

        const legalLinks = document.querySelectorAll('.legal-links a');
        if (legalLinks.length >= 3) {
            legalLinks[0].innerHTML = t.privacyPolicy;
            legalLinks[1].textContent = t.termsOfUse;
            legalLinks[2].textContent = t.support;
        }
    }

    // Privacy sayfası içeriğini güncelle
    updatePrivacyPageContent() {
        const t = privacyTranslations[this.currentLanguage];

        // Title
        document.title = t.pageTitle;

        // Header
        const headerTitle = document.querySelector('.header h1');
        if (headerTitle) headerTitle.innerHTML = t.headerTitle;

        const headerSubtitle = document.querySelector('.header p');
        if (headerSubtitle) headerSubtitle.textContent = t.headerSubtitle;

        // Back link
        const backLink = document.querySelector('.back-link');
        if (backLink) backLink.textContent = t.backToHome;

        // Intro
        const introStrong = document.querySelector('.intro strong');
        if (introStrong) introStrong.textContent = t.lastUpdated;

        const introParagraphs = document.querySelectorAll('.intro p');
        if (introParagraphs.length >= 2) {
            introParagraphs[0].innerHTML = `<strong>${t.lastUpdated}</strong> ${t.lastUpdatedDate}`;
            introParagraphs[1].textContent = t.introText;
        }

        // Sections
        const sections = document.querySelectorAll('.section');
        sections.forEach((section, index) => {
            const title = section.querySelector('h2');
            const paragraphs = section.querySelectorAll('p');
            const lists = section.querySelectorAll('ul');

            switch(index) {
                case 0: // Information We Collect
                    if (title) title.innerHTML = t.infoCollectTitle;
                    if (paragraphs[0]) paragraphs[0].textContent = t.infoCollectText;
                    break;

                case 1: // How Your Information is Used
                    if (title) title.innerHTML = t.howUsedTitle;
                    const highlightBox = section.querySelector('.highlight-box p strong');
                    if (highlightBox) highlightBox.textContent = t.dataStaysLocal;

                    const listItems = section.querySelectorAll('li');
                    t.howUsedList.forEach((item, i) => {
                        if (listItems[i]) listItems[i].innerHTML = item;
                    });
                    break;

                case 2: // Data Sharing
                    if (title) title.innerHTML = t.dataSharingTitle;
                    if (paragraphs[0]) paragraphs[0].textContent = t.dataSharingText;
                    break;

                case 3: // Children's Privacy
                    if (title) title.innerHTML = t.childrenPrivacyTitle;
                    if (paragraphs[0]) paragraphs[0].textContent = t.childrenPrivacyText;
                    break;

                case 4: // Changes to This Policy
                    if (title) title.innerHTML = t.changesTitle;
                    if (paragraphs[0]) paragraphs[0].textContent = t.changesText;
                    break;

                case 5: // Contact
                    const contactTitle = section.querySelector('.contact-section h2');
                    if (contactTitle) contactTitle.innerHTML = t.contactTitle;

                    const contactText = section.querySelector('.contact-section p');
                    if (contactText) contactText.textContent = t.contactText;

                    const contactLink = section.querySelector('.contact-section li');
                    if (contactLink) contactLink.innerHTML = `${t.emailContact}: <a href="mailto:yasincetin.dev@gmail.com">yasincetin.dev@gmail.com</a>`;
                    break;
            }
        });

        // Last updated
        const lastUpdated = document.querySelector('.last-updated p');
        if (lastUpdated) lastUpdated.textContent = t.effectiveDate;
    }

    // İçeriği güncelle
    updateContent() {
        // Sayfa tipini belirle
        const isPrivacyPage = window.location.pathname.includes('Privacy') ||
                             document.title.toLowerCase().includes('privacy');

        if (isPrivacyPage) {
            this.updatePrivacyPageContent();
        } else {
            this.updateMainPageContent();
        }
    }
}

// Sayfa yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', () => {
    new LanguageSwitcher();
});