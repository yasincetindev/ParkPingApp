// Çeviri dosyası - Türkçe ve İngilizce metinler
const translations = {
    tr: {
        // Ana sayfa
        pageTitle: "ParkPing - Destek",
        appName: "ParkPing",
        tagline: "Araç park lokasyonlarınızı kaydedin, harita üzerinde görüntüleyin",

        // Uygulama Özellikleri
        featuresTitle: "📱 Uygulama Özellikleri",
        featuresSubtitle: "ParkPing ile araç park ettiğiniz konumları kolayca kaydedin ve bir daha asla arabanızı kaybetmeyin!",

        locationSaveTitle: "Konum Kaydetme",
        locationSaveDesc: "Araç park ettiğiniz konumu tek dokunuşla kaydedin",

        mapKitTitle: "MapKit Entegrasyonu",
        mapKitDesc: "Apple MapKit ile park konumlarınızı harita üzerinde görüntüleyin",

        directionsTitle: "Yol Tarifi",
        directionsDesc: "Kaydettiğiniz park konumuna Apple Maps ile yol tarifi alın",

        // SSS
        faqTitle: "❓ Sık Sorulan Sorular",

        faq1Question: "ParkPing nasıl çalışır?",
        faq1Answer: "Arabanızı park ettiğinizde uygulamayı açın ve \"Park Konumunu Kaydet\" butonuna dokunun. GPS teknolojisi ile mevcut konumunuz otomatik olarak kaydedilir.",

        faq2Question: "İnternet bağlantısı olmadan çalışır mı?",
        faq2Answer: "Evet! Konum kaydetme işlemi internet bağlantısı olmadan da çalışır. Harita görünümü için internet gereklidir.",

        faq3Question: "Konum verilerim güvenli mi?",
        faq3Answer: "Tüm park konumu verileriniz sadece cihazınızda saklanır. Hiçbir konum bilginiz sunucularımıza gönderilmez.",

        // İletişim
        contactTitle: "💬 Bizimle İletişime Geçin",
        nameLabel: "Ad Soyad *",
        emailLabel: "E-posta Adresi *",
        subjectLabel: "Konu *",
        subjectPlaceholder: "Konu seçiniz...",
        subjectTech: "Teknik Destek",
        subjectLocation: "Konum Kaydetme",
        subjectMap: "Harita Görüntüleme",
        messageLabel: "Mesajınız *",
        messagePlaceholder: "Sorununuzu detaylı açıklayın...",
        submitButton: "Mesaj Gönder",

        // Footer
        footerTitle: "ParkPing Destek",
        emailContact: "📧 E-posta",
        appStoreContact: "📱 App Store",
        appStoreLink: "ParkPing İndir",
        copyright: "© 2025 Yasin Çetin. Tüm hakları saklıdır.",
        privacyPolicy: "🔒 Gizlilik Politikası",
        termsOfUse: "Kullanım Koşulları",
        support: "Destek"
    },

    en: {
        // Main page
        pageTitle: "ParkPing - Support",
        appName: "ParkPing",
        tagline: "Save your parking locations and view them on the map",

        // App Features
        featuresTitle: "📱 App Features",
        featuresSubtitle: "With ParkPing, easily save your parking locations and never lose your car again!",

        locationSaveTitle: "Location Saving",
        locationSaveDesc: "Save your parking location with a single touch",

        mapKitTitle: "MapKit Integration",
        mapKitDesc: "View your parking locations on the map with Apple MapKit",

        directionsTitle: "Directions",
        directionsDesc: "Get directions to your saved parking location with Apple Maps",

        // FAQ
        faqTitle: "❓ Frequently Asked Questions",

        faq1Question: "How does ParkPing work?",
        faq1Answer: "When you park your car, open the app and tap the \"Save Parking Location\" button. Your current location is automatically saved using GPS technology.",

        faq2Question: "Does it work without internet connection?",
        faq2Answer: "Yes! Location saving works without internet connection. Internet is required for map view.",

        faq3Question: "Is my location data secure?",
        faq3Answer: "All your parking location data is stored only on your device. No location information is sent to our servers.",

        // Contact
        contactTitle: "💬 Contact Us",
        nameLabel: "Full Name *",
        emailLabel: "Email Address *",
        subjectLabel: "Subject *",
        subjectPlaceholder: "Select subject...",
        subjectTech: "Technical Support",
        subjectLocation: "Location Saving",
        subjectMap: "Map Viewing",
        messageLabel: "Your Message *",
        messagePlaceholder: "Please describe your issue in detail...",
        submitButton: "Send Message",

        // Footer
        footerTitle: "ParkPing Support",
        emailContact: "📧 Email",
        appStoreContact: "📱 App Store",
        appStoreLink: "Download ParkPing",
        copyright: "© 2025 Yasin Çetin. All rights reserved.",
        privacyPolicy: "🔒 Privacy Policy",
        termsOfUse: "Terms of Use",
        support: "Support"
    }
};

// Privacy Policy çevirileri
const privacyTranslations = {
    tr: {
        pageTitle: "Gizlilik Politikası - ParkPing",
        headerTitle: "🔒 Gizlilik Politikası",
        headerSubtitle: "ParkPing Uygulaması",
        backToHome: "← Ana Sayfaya Dön",

        lastUpdated: "Son güncelleme:",
        lastUpdatedDate: "17 Eylül 2025",
        introText: "ParkPing, bir junior iOS geliştiricisi tarafından kişisel proje olarak geliştirilen bir mobil uygulamadır. Bu Gizlilik Politikası, uygulamanın kullanıcı bilgilerini nasıl ele aldığını açıklar.",

        infoCollectTitle: "📍 Topladığımız Bilgiler",
        infoCollectText: "Uygulama, temel işlevselliğini sağlamak için cihazınızın konum bilgilerine erişim isteyebilir. Bu konum verileri yalnızca Core Data aracılığıyla cihazınızda yerel olarak park yerlerini kaydetmek için kullanılır. İsim, e-posta veya iletişim bilgileri gibi kişisel bilgiler toplanmaz.",

        howUsedTitle: "🛡️ Bilgileriniz Nasıl Kullanılır",
        dataStaysLocal: "Verileriniz cihazınızda kalır - hiçbir şey toplamıyoruz!",
        howUsedList: [
            "Konum verileri sadece cihazınızda saklanır.",
            "Veriler dış sunuculara veya üçüncü taraflara iletilmez.",
            "Uygulama, harita görünümlerini ve yol tariflerini göstermek için Apple Haritalar ile entegre olur. Apple'ın kendi gizlilik politikası onların hizmetinin kullanımı için geçerlidir."
        ],

        dataSharingTitle: "🤝 Veri Paylaşımı",
        dataSharingText: "Verilerinizi hiçbir üçüncü tarafla paylaşmaz, satmaz veya aktarmayız. Tüm konum verileri cihazınızda kalır.",

        childrenPrivacyTitle: "👶 Çocukların Gizliliği",
        childrenPrivacyText: "Bu uygulama, 13 yaşın altındaki çocuklardan bilerek hiçbir kişisel veri toplamaz.",

        changesTitle: "📝 Bu Politikada Değişiklikler",
        changesText: "Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Güncellemeler bu sayfada yayınlanacak ve \"Son güncelleme\" tarihi buna göre revize edilecektir.",

        contactTitle: "📧 Bize Ulaşın",
        contactText: "Bu Gizlilik Politikası hakkında sorularınız varsa, benimle iletişime geçebilirsiniz:",
        emailContact: "E-posta ile: yasincetin.dev@gmail.com",

        effectiveDate: "Bu politika 17 Eylül 2025 tarihinden itibaren geçerlidir"
    },

    en: {
        pageTitle: "Privacy Policy - ParkPing",
        headerTitle: "🔒 Privacy Policy",
        headerSubtitle: "ParkPing Application",
        backToHome: "← Back to Home",

        lastUpdated: "Last updated:",
        lastUpdatedDate: "September 17, 2025",
        introText: "ParkPing is a mobile application developed as a personal project by a junior iOS developer. This Privacy Policy explains how the application handles user information.",

        infoCollectTitle: "📍 Information We Collect",
        infoCollectText: "The application may request access to your device's location information in order to provide its core functionality. This location data is used only to save parking spots locally on your device via Core Data. No personal information such as name, email, or contact details is collected.",

        howUsedTitle: "🛡️ How Your Information is Used",
        dataStaysLocal: "Your data stays on your device - we don't collect anything!",
        howUsedList: [
            "Location data is stored only on your device.",
            "Data is not transmitted to external servers or third parties.",
            "The app integrates with Apple Maps to show map views and directions. Apple's own privacy policy applies to the use of their service."
        ],

        dataSharingTitle: "🤝 Data Sharing",
        dataSharingText: "We do not share, sell, or transfer your data to any third parties. All location data remains on your device.",

        childrenPrivacyTitle: "👶 Children's Privacy",
        childrenPrivacyText: "This application does not knowingly collect any personal data from children under the age of 13.",

        changesTitle: "📝 Changes to This Policy",
        changesText: "We may update this Privacy Policy from time to time. Updates will be posted on this page, and the \"Last updated\" date will be revised accordingly.",

        contactTitle: "📧 Contact Us",
        contactText: "If you have any questions about this Privacy Policy, you can contact me:",
        emailContact: "By email: yasincetin.dev@gmail.com",

        effectiveDate: "This policy is effective as of September 17, 2025"
    }
};