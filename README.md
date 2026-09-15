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
