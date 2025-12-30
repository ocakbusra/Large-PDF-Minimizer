
import React from 'react';
import { ShieldCheck, Lock, Eye, Server, ArrowLeft } from 'lucide-react';
import { useLanguage } from './App';

export const PrivacyPolicy: React.FC = () => {
    const { language } = useLanguage();

    const content = {
        en: {
            title: "Privacy Policy",
            lastUpdated: "Last Updated: December 29, 2025",
            intro: "At MinimizePDF, we take your privacy seriously. Unlike other PDF tools, we have designed our service to process your files entirely within your web browser. This means your documents never leave your device.",
            sections: [
                {
                    icon: <Server className="text-indigo-600" size={24} />,
                    title: "No Server Uploads",
                    text: "We do not upload your files to any server. All compression and processing happen locally on your computer or mobile device using WebAssembly technology. Since your files are never transmitted to us, we cannot view, copy, or store your documents."
                },
                {
                    icon: <Eye className="text-indigo-600" size={24} />,
                    title: "Data Collection",
                    text: "We collect anonymous usage statistics to improve our service. This includes data like browser type, device type, and potential error logs. We do not collect personal information that can identify you directly unless you voluntarily provide it via contact forms."
                },
                {
                    icon: <Lock className="text-indigo-600" size={24} />,
                    title: "Cookies & Tracking",
                    text: "We use cookies to enhance your experience, such as remembering your language preference or consent settings. We also use third-party services like Google Analytics and Google AdSense, which may use cookies to serve relevant ads and analyze traffic. You can manage your cookie preferences via our Consent Banner."
                },
                {
                    icon: <ShieldCheck className="text-indigo-600" size={24} />,
                    title: "Third-Party Services",
                    text: "Our website may contain links to third-party websites or services (e.g., advertising partners). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies."
                }
            ],
            contact: {
                title: "Contact Us",
                text: "If you have any questions about this Privacy Policy, please contact us at support@minimizepdf.com"
            },
            back: "Back to Home"
        },
        tr: {
            title: "Gizlilik Politikası",
            lastUpdated: "Son Güncelleme: 29 Aralık 2025",
            intro: "MinimizePDF olarak gizliliğinizi ciddiye alıyoruz. Diğer PDF araçlarının aksine, hizmetimizi dosyalarınızı tamamen web tarayıcınız içinde işleyecek şekilde tasarladık. Bu, belgelerinizin cihazınızdan asla çıkmadığı anlamına gelir.",
            sections: [
                {
                    icon: <Server className="text-indigo-600" size={24} />,
                    title: "Sunucu Yüklemesi Yok",
                    text: "Dosyalarınızı herhangi bir sunucuya yüklemeyiz. Tüm sıkıştırma ve işleme işlemleri, WebAssembly teknolojisi kullanılarak yerel olarak bilgisayarınızda veya mobil cihazınızda gerçekleşir. Dosyalarınız bize iletilmediği için belgelerinizi görüntüleyemeyiz, kopyalayamayız veya depolayamayız."
                },
                {
                    icon: <Eye className="text-indigo-600" size={24} />,
                    title: "Veri Toplama",
                    text: "Hizmetimizi geliştirmek için anonim kullanım istatistikleri topluyoruz. Bu, tarayıcı türü, cihaz türü ve olası hata günlükleri gibi verileri içerir. İletişim formları aracılığıyla gönüllü olarak sağlamadığınız sürece sizi doğrudan tanımlayabilecek kişisel bilgiler toplamıyoruz."
                },
                {
                    icon: <Lock className="text-indigo-600" size={24} />,
                    title: "Çerezler & Takip",
                    text: "Dil tercihinizi veya izin ayarlarınızı hatırlamak gibi deneyiminizi geliştirmek için çerezler kullanıyoruz. Ayrıca, ilgili reklamları sunmak ve trafiği analiz etmek için çerez kullanabilen Google Analytics ve Google AdSense gibi üçüncü taraf hizmetleri de kullanıyoruz. Çerez tercihlerinizi İzin Banner'ımız aracılığıyla yönetebilirsiniz."
                },
                {
                    icon: <ShieldCheck className="text-indigo-600" size={24} />,
                    title: "Üçüncü Taraf Hizmetler",
                    text: "Web sitemiz üçüncü taraf web sitelerine veya hizmetlerine (örneğin, reklam ortakları) bağlantılar içerebilir. Bu harici sitelerin gizlilik uygulamalarından sorumlu değiliz. Gizlilik politikalarını incelemenizi öneririz."
                }
            ],
            contact: {
                title: "İletişim",
                text: "Bu Gizlilik Politikası hakkında sorularınız varsa, lütfen support@minimizepdf.com adresinden bizimle iletişime geçin."
            },
            back: "Ana Sayfaya Dön"
        }
    };

    const t = content[language];

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-900 py-12 px-6">
            <div className="max-w-3xl mx-auto">
                <a href="/" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:underline mb-8">
                    <ArrowLeft size={20} />
                    {t.back}
                </a>

                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200 border border-slate-100">
                    <h1 className="text-3xl md:text-4xl font-black mb-4">{t.title}</h1>
                    <p className="text-slate-400 font-medium mb-8 text-sm">{t.lastUpdated}</p>

                    <div className="prose prose-slate max-w-none">
                        <p className="text-lg leading-relaxed text-slate-600 mb-12">
                            {t.intro}
                        </p>

                        <div className="grid gap-8">
                            {t.sections.map((section, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="bg-indigo-50 p-3 rounded-xl shrink-0 mt-1">
                                        {section.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{section.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {section.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{t.contact.title}</h3>
                            <p className="text-slate-600">
                                {t.contact.text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
