
import React, { useState, useEffect } from 'react';
import {
  FileUp, FileCheck, Download, Trash2, AlertCircle, Loader2, Zap, Sparkles,
  ArrowRight, ShieldCheck, Menu, X, CheckCircle2, Lock, Cpu, Globe
} from 'lucide-react';
import { CompressionStatus, PDFFile } from './types';
import { compressPDF, formatBytes } from './services/pdfService';

// --- COMPONENTS ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-2 rounded-xl">
            <Zap className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900">Minimize<span className="text-indigo-600">PDF</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <a href="#nasil-calisir" className="hover:text-indigo-600 transition-colors">Nasıl Çalışır?</a>
          <a href="#ozellikler" className="hover:text-indigo-600 transition-colors">Özellikler</a>
          <a href="#sss" className="hover:text-indigo-600 transition-colors">S.S.S.</a>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-slate-800 transition-all hover:shadow-lg active:scale-95">
            Pro Sürüm
          </button>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 md:hidden flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-4">
          <a href="#nasil-calisir" className="text-lg font-medium text-slate-600" onClick={() => setMobileMenuOpen(false)}>Nasıl Çalışır?</a>
          <a href="#ozellikler" className="text-lg font-medium text-slate-600" onClick={() => setMobileMenuOpen(false)}>Özellikler</a>
          <button className="bg-indigo-600 text-white py-3 rounded-xl font-bold w-full">Pro Sürüm</button>
        </div>
      )}
    </nav>
  );
};

const PDFCompressor = () => {
  const [status, setStatus] = useState<CompressionStatus>(CompressionStatus.IDLE);
  const [file, setFile] = useState<PDFFile | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type !== 'application/pdf') {
        setError('Lütfen geçerli bir PDF seçin.');
        return;
      }
      setFile({
        name: selectedFile.name,
        size: selectedFile.size,
        blob: selectedFile
      });
      setStatus(CompressionStatus.IDLE);
      setError(null);
    }
  };

  const startDeepCompression = async () => {
    if (!file) return;
    try {
      setStatus(CompressionStatus.COMPRESSING);
      setProgress(0);
      const result = await compressPDF(file.blob as File, (p) => setProgress(p));
      setFile(prev => prev ? {
        ...prev,
        compressedSize: result.size,
        compressedBlob: result.blob
      } : null);
      setStatus(CompressionStatus.COMPLETED);
    } catch (err: any) {
      setError(err.message || 'Sıkıştırma sırasında bir hata oluştu.');
      setStatus(CompressionStatus.ERROR);
    }
  };

  const reset = () => {
    setFile(null);
    setStatus(CompressionStatus.IDLE);
    setProgress(0);
    setError(null);
  };

  const downloadFile = () => {
    if (file?.compressedBlob) {
      const url = URL.createObjectURL(file.compressedBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `min_devpdf_${file.name}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const ratio = file?.compressedSize && file.size
    ? Math.round((1 - file.compressedSize / file.size) * 100)
    : 0;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="glass-panel rounded-[3rem] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.08)] relative overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_rgba(79,70,229,0.15)]">
        {/* Decorative gradients */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        {status === CompressionStatus.IDLE && !file && (
          <div className="relative group text-center py-12 md:py-20">
            <input type="file" accept=".pdf" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
            <div className="bg-indigo-50 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-indigo-100">
              <FileUp className="text-indigo-600 w-12 h-12 md:w-16 md:h-16" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4 tracking-tight">PDF Dosyanızı Buraya Bırakın</h2>
            <p className="text-slate-500 text-lg mb-8 max-w-md mx-auto">200MB, 500MB veya 1GB+ fark etmeksizin tüm büyük dosyalarınızı saniyeler içinde küçültün.</p>
            <button className="bg-indigo-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-indigo-200 group-hover:shadow-2xl group-hover:-translate-y-1 transition-all">
              Dosya Seçin
            </button>
          </div>
        )}

        {file && status !== CompressionStatus.COMPLETED && status !== CompressionStatus.COMPRESSING && (
          <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center gap-6 bg-slate-50/80 p-6 rounded-[2rem] border border-slate-100">
              <div className="bg-indigo-600 p-4 rounded-2xl shadow-lg shadow-indigo-200 shrink-0">
                <FileCheck className="text-white" size={32} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-black text-xl text-slate-800 truncate mb-1">{file.name}</h4>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-slate-500 font-medium">Boyut:</span>
                  <span className="text-indigo-600 font-black">{formatBytes(file.size)}</span>
                </div>
              </div>
              <button onClick={reset} className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
                <Trash2 size={24} />
              </button>
            </div>

            <div className="bg-amber-50 rounded-3xl p-6 border border-amber-100 flex gap-4">
              <ShieldCheck className="text-amber-600 shrink-0 mt-1" size={24} />
              <p className="text-sm text-amber-900 leading-relaxed font-medium">
                <strong>Akıllı Render Modu:</strong> Dosyanız yeniden yapılandırılarak gereksiz veriler temizlenecek. Görsel kalite korunurken dosya boyutu minimuma indirilir.
              </p>
            </div>

            <button
              onClick={startDeepCompression}
              className="w-full bg-slate-900 hover:bg-black text-white font-bold py-6 rounded-[2rem] shadow-2xl hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-xl group"
            >
              <Zap size={24} className="text-indigo-400 group-hover:scale-125 transition-transform" />
              Sıkıştırmayı Başlat
            </button>
          </div>
        )}

        {status === CompressionStatus.COMPRESSING && (
          <div className="py-12 text-center space-y-8">
            <div className="relative w-40 h-40 mx-auto">
              <div className="absolute inset-0 border-4 border-slate-100 rounded-full" />
              <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-3xl font-black text-indigo-600">%{progress}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">İşleniyor</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Optimizasyon Başladı</h3>
              <p className="text-slate-500 font-medium max-w-sm mx-auto">Yapay zeka motorumuz dosyanızı analiz ediyor ve en iyi sıkıştırma oranını hesaplıyor.</p>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden max-w-md mx-auto">
              <div className="h-full bg-indigo-600 transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        {status === CompressionStatus.COMPLETED && file && (
          <div className="space-y-10 animate-in zoom-in-95 duration-500">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6 relative">
                <Sparkles className="absolute -top-2 -right-2 text-yellow-400 animate-bounce" />
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-2">Harika İş!</h3>
              <p className="text-slate-500 font-medium">Dosyanız başarıyla küçültüldü.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                <p className="text-xs font-bold text-slate-400 uppercase mb-1">Eski Boyut</p>
                <p className="text-xl font-bold text-slate-600 line-through">{formatBytes(file.size)}</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-600/5 rotate-12 scale-150 transform transition-transform" />
                <p className="text-xs font-bold text-indigo-400 uppercase mb-1">Yeni Boyut</p>
                <p className="text-3xl font-black text-indigo-600">{formatBytes(file.compressedSize || 0)}</p>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl border border-green-100 text-center">
                <p className="text-xs font-bold text-green-600 uppercase mb-1">Kazanç</p>
                <p className="text-3xl font-black text-green-600">%{ratio}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={downloadFile}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-6 rounded-2xl shadow-xl shadow-indigo-200 transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-xl"
              >
                <Download size={24} />
                Dosyayı İndir
              </button>
              <button
                onClick={reset}
                className="w-full bg-white text-slate-500 font-bold py-4 rounded-xl hover:bg-slate-50 transition-all text-sm"
              >
                Yeni Dosya Yükle
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="p-6 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-4 text-red-600">
            <AlertCircle size={24} />
            <div className="flex-1 font-medium">{error}</div>
            <button onClick={reset} className="text-sm font-bold underline">Tekrar Dene</button>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Lock className="text-indigo-600" size={32} />,
      title: "Tamamen Güvenli",
      desc: "Dosyalarınız tarayıcınızda işlenir. Sunucularımıza asla yüklenmez, gizliliğiniz %100 güvendedir."
    },
    {
      icon: <Zap className="text-amber-500" size={32} />,
      title: "Yıldırım Hızında",
      desc: "WASM teknolojisi sayesinde dosyalarınız saniyeler içinde analiz edilir ve sıkıştırılır."
    },
    {
      icon: <Cpu className="text-cyan-500" size={32} />,
      title: "Akıllı Algoritma",
      desc: "Gereksiz meta verileri temizler ve görselleri kalite kaybı olmadan optimize eder."
    }
  ];

  return (
    <section id="ozellikler" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Neden Minimize PDF?</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Standart sıkıştırıcıların ötesinde, büyük dosyalar için özel olarak geliştirilmiş mimari.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="group p-8 rounded-[2rem] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 border border-slate-100">
              <div className="bg-white group-hover:bg-indigo-600 group-hover:text-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-100 mb-8 transition-colors duration-300">
                <div className="group-hover:text-white transition-colors">{f.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const HowItWorks = () => {
  return (
    <section id="nasil-calisir" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">Teknolojimiz Nasıl Çalışıyor?</h2>
            <p className="text-indigo-200 text-lg leading-relaxed max-w-lg">
              Minimize PDF, PDF yapısını elementer düzeyde analiz eder. Görünmeyen ve gereksiz katmanları kaldırır, vektörleri basitleştirir ve görselleri yeni nesil formatlarda yeniden işler.
            </p>
            <div className="flex flex-col gap-6">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border-2 border-indigo-500 flex items-center justify-center font-bold text-indigo-400">
                    0{step}
                  </div>
                  <p className="font-medium text-slate-300">
                    {step === 1 && "Dosya analizi ve yapı haritalama"}
                    {step === 2 && "Gereksiz verilerin temizlenmesi"}
                    {step === 3 && "Akıllı yeniden oluşturma"}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 bg-indigo-600/20 backdrop-blur-lg border border-white/10 p-8 rounded-[2rem] aspect-square flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="flex justify-center -space-x-4">
                  <div className="w-16 h-16 rounded-full bg-red-400 border-4 border-slate-900" />
                  <div className="w-16 h-16 rounded-full bg-amber-400 border-4 border-slate-900" />
                  <div className="w-16 h-16 rounded-full bg-cyan-400 border-4 border-slate-900" />
                </div>
                <h4 className="text-2xl font-bold">PDF Katmanları</h4>
                <p className="text-sm text-indigo-300">Karmaşık yapı basitleştirilir</p>
              </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500 rounded-full blur-2xl opacity-50 animate-blob" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-fuchsia-500 rounded-full blur-2xl opacity-50 animate-blob animation-delay-2000" />
          </div>
        </div>
      </div>
    </section>
  );
}

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Zap className="text-white w-4 h-4" />
            </div>
            <span className="text-lg font-black text-white">Minimize<span className="text-indigo-500">PDF</span></span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed">
            Büyük dosyalar için tasarlanmış profesyonel PDF sıkıştırma aracı. Güvenli, hızlı ve ücretsiz.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Ürün</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Özellikler</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pro Sürüm</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Yasal</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a></li>
            <li><a href="#" className="hover:text-white transition-colors">İletişim</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Minimize PDF. Tüm hakları saklıdır.</p>
        <div className="flex items-center gap-2">
          <Globe size={14} />
          <span>Türkiye / Türkçe</span>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 right-0 h-[80vh] bg-gradient-to-b from-indigo-50 via-white to-transparent -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-100 mb-8 animate-in slide-in-from-top-4 fade-in duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">v2.0 Yayında</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 leading-[1.1] animate-in slide-in-from-bottom-4 fade-in duration-700 delay-100">
              PDF Dosyalarınız <br />
              <span className="text-indigo-600 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-600">Rejim Yapsın.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-200">
              Görüntü kalitesini bozmadan dosya boyutunu %90'a kadar küçültün. Kurumsal seviyede sıkıştırma, şimdi tarayıcınızda.
            </p>
          </div>

          <div className="animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300">
            <PDFCompressor />
          </div>
        </div>
      </main>

      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default App;
