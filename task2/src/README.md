# Portfolio React + TypeScript SPA

Ini adalah hasil konversi landing page Module 1 (HTML/CSS statis) menjadi aplikasi Single Page Application (SPA) multi-page berbasis React + TypeScript menggunakan Vite.

## Implementasi Bonus

### 1. Custom Hook (`useLocalStorage`)
Kami membuat custom hook generic `useLocalStorage<T>` di `/src/hooks/useLocalStorage.ts`. Hook ini digunakan untuk menyimpan status tema (`light` atau `dark`) agar preferensi mode pengguna tetap bertahan meskipun halaman ditutup atau di-refresh.

### 2. Integrasi TailwindCSS
Seluruh styling asli dari berkas CSS pada Module 1 telah dimigrasikan sepenuhnya menggunakan **TailwindCSS inline utilities**.

**Alasan Migrasi ke TailwindCSS:**
- **Modular & Clean HTML:** Menghilangkan baris CSS statis yang panjang (mengurangi boilerplate class seperti `.light`, `.dark`, `.light:hover`).
- **Skalabilitas Dark Mode:** Dengan mengaktifkan opsi `darkMode: 'class'`, kami dengan mudah menyinkronkan perubahan warna teks dan latar belakang di seluruh halaman (`Home`, `Projects`, dan `About`) cukup dengan menuliskan prefix `dark:bg-neutral-950` atau `dark:text-white`.
- **Responsivitas Terbawa Sejak Awal:** Memanfaatkan utilitas screen-size breakpoints dari Tailwind (seperti `sm:flex-row`, `md:grid-cols-2`, `lg:text-5xl`) memangkas kerumitan menuliskan sintaks `@media (max-width: ...)` secara manual.
