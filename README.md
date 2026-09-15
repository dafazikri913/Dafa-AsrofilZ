# Portfolio - Dafa Asrofil Z

Website Portfolio Pribadi berbasis **React 19**, **TypeScript**, **Vite**, dan **Tailwind CSS**.

---

## 📁 Lokasi Gambar & Asset (Cara Mengubah Foto Profil)

Gambar pada proyek ini dapat disimpan dan diubah melalui dua lokasi:

### 1. Folder `public/` (Cara Termudah)
* **Lokasi Folder:** `public/`
* **Cara Mengganti Foto Profil / Avatar:**
  1. Letakkan file gambar Anda (contoh: `profil.jpg`) ke dalam folder `public/`.
  2. Buka file [`src/data/portfolio.ts`](file:///c:/Users/DafaA/Projects/Dafa-AsrofilZ/src/data/portfolio.ts).
  3. Ubah nilai `avatarSrc` pada objek `HERO` menjadi nama file Anda:
     ```typescript
     export const HERO = {
       name: 'Dafa Asrofil Z',
       expertise: 'Frontend Developer & UI/UX Specialist',
       tagline: 'Pengembang Web yang berfokus pada pembuatan antarmuka modern...',
       avatarSrc: '/profil.jpg', // <-- Ubah ke nama file di folder public/
     }
     ```

### 2. Folder `src/assets/`
* **Lokasi Folder:** `src/assets/`
* **Kegunaan:** Untuk menyimpan asset gambar/foto yang di-import langsung di dalam komponen kode React/TypeScript (seperti `src/assets/hero.png`).

---

## ⚡ Fitur Autoreset / Fallback Avatar
Jika gambar belum ditemukan atau bermasalah saat dimuat, sistem akan otomatis menampilkan **Initial Nama** (contoh: `DZ`) secara elegan sebagai fallback.

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

```bash
# 1. Install dependensi
npm install

# 2. Jalankan server pengembangan
npm run dev

# 3. Build untuk produksi
npm run build
```

---

## 🐙 Panduan Inisialisasi & Push ke GitHub dari Awal

Berikut adalah langkah-langkah lengkap yang dilakukan untuk menginisialisasi Git dan mengunggah (*push*) proyek ini ke GitHub dari awal:

### Cara 1: Menggunakan GitHub CLI (`gh`) — *Otomatis & Tercepat*

```bash
# 1. Inisialisasi repository Git lokal
git init

# 2. Ubah nama branch utama menjadi 'main'
git branch -M main

# 3. Tandai seluruh file proyek
git add .

# 4. Buat commit pertama
git commit -m "Initial commit: Portfolio Dafa Asrofil Z"

# 5. Buat repository di GitHub dan langsung push otomatis
gh repo create dafazikri913/Dafa-AsrofilZ --public --source=. --remote=origin --push
```

---

### Cara 2: Menggunakan Git Manual (Lewat Web GitHub)

Jika Anda tidak menggunakan GitHub CLI (`gh`), berikut langkah manualnya:

```bash
# 1. Inisialisasi Git & Commit lokal
git init
git branch -M main
git add .
git commit -m "Initial commit: Portfolio Dafa Asrofil Z"

# 2. Buat Repository baru di web GitHub (https://github.com/new)
# 3. Hubungkan lokasi remote ke repository GitHub Anda
git remote add origin https://github.com/dafazikri913/Dafa-AsrofilZ.git

# 4. Upload / Push kode ke GitHub
git push -u origin main
```

---

### 🔄 Cara Update Kode jika Ada Perubahan di Masa Mendatang

Jika Anda telah melakukan perubahan file atau menambah fitur baru di komputer lokal, ikuti langkah berikut untuk meng-update repository GitHub Anda:

```bash
# 1. Tambahkan seluruh perubahan
git add .

# 2. Catat pesan perubahan
git commit -m "Deskripsi singkat mengenai perubahan yang Anda buat"

# 3. Push ke GitHub
git push
```
