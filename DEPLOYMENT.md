# Web Sitesini Yayınlama ve Domain Bağlama Rehberi

Web sitenizi **minimizepdf.com** adresinde yayınlamak için aşağıdaki adımları takip edebilirsiniz. En kolay ve ücretsiz yöntem **Vercel** veya **Netlify** kullanmaktır.

## Hazırlık
Projenize domain ayarları için gerekli dosyalar (`CNAME`, `robots.txt`, `meta tags`) tarafımdan eklenmiştir. Siteniz yayınlanmaya hazırdır.

---

## 1. Yöntem: Vercel ile Yayınlama (Önerilen)

En hızlı ve React projeleri için en optimize yöntemdir.

1. **GitHub'a Yükleyin**:
   - Kodlarınızı bir GitHub deposuna (repository) yükleyin.

2. **Vercel'e Üye Olun**:
   - [vercel.com](https://vercel.com) adresine gidin ve GitHub hesabınızla giriş yapın.

3. **Projeyi İçe Aktarın**:
   - "Add New Project" butonuna tıklayın.
   - GitHub'daki `Large-PDF-Minimizer` deponuzu seçin.
   - Ayarları değiştirmeden **Deploy** butonuna basın.

4. **Domain Bağlama**:
   - Proje panelinden **Settings** > **Domains** sekmesine gidin.
   - `minimizepdf.com` adresini kutuya yazın ve "Add" butonuna basın.
   - Vercel size 2 adet DNS kaydı (A Record ve CNAME) verecektir.

5. **DNS Ayarlarını Yapın (Domain Aldığınız Sitede)**:
   - Domaini satın aldığınız sitenin (GoDaddy, İsimtescil, Google Domains vb.) yönetim paneline girin.
   - **DNS Yönetimi** sayfasına gidin.
   - Vercel'in size verdiği değerleri girin:
     - **A Record**: `@` -> `76.76.21.21` (Vercel IP'si)
     - **CNAME Record**: `www` -> `cname.vercel-dns.com`

---

## 2. Yöntem: GitHub Pages (Alternatif)

Eğer GitHub Pages kullanacaksanız, proje içine eklediğim `CNAME` dosyası işinizi kolaylaştıracaktır.

1. Projenin `Settings` > `Pages` bölümüne gidin.
2. `Source` olarak `main` veya `master` dalını seçin.
3. `Custom domain` kısmına `minimizepdf.com` yazıp kaydedin.
4. Domain sağlayıcınızda (GoDaddy vb.) aşağıdaki DNS ayarını yapın:
   - **CNAME**: `www` -> `[kullaniciadi].github.io`
   - **A Kayıtları**: GitHub'ın standart IP adresleri (185.199.108.153 vb.)

---

## Önemli Notlar

- DNS değişikliklerinin tüm dünyada aktif olması 24-48 saati bulabilir.
- HTTPS (Güvenli Bağlantı) sertifikası Vercel veya Netlify tarafından otomatik olarak ücretsiz sağlanacaktır.
