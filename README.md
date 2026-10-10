# Revo_Electronics_Shop

Revo_Electronics_Shop adalah aplikasi web toko online sederhana yang dibangun menggunakan **Next.js (App Router)**, **TypeScript**, dan **Tailwind CSS**. Proyek ini menampilkan daftar produk elektronik beserta status stoknya, dan dirancang sebagai latihan membangun antarmuka berbasis komponen yang dapat dipakai ulang.


## Fitur

- Menampilkan daftar produk dalam bentuk kartu (`ProductCard`).
- Menampilkan status stok produk melalui komponen `Badge` (In stock / Out of stock).
- Komponen pembungkus yang dapat dipakai ulang: `Card`, `PageSection`, dan `Modal` (menggunakan `children`).
- Tipe data terpusat di folder `types/` menggunakan `interface` dan `type` TypeScript.
- Konfigurasi alamat API lewat variabel lingkungan (`.env`).

## Teknologi

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 5
- [Tailwind CSS](https://tailwindcss.com/) 4

## Struktur Proyek

```
revoshop/
├── app/
│   ├── layout.tsx      # Layout utama: membungkus <html> & <body>, memasang font & metadata
│   ├── page.tsx        # Halaman utama (route "/")
│   └── globals.css     # Style global
├── components/
│   ├── Header.tsx      # Bagian header
│   ├── Footer.tsx      # Bagian footer
│   ├── ProductCard.tsx # Kartu produk (menerima prop `product`)
│   └── pageSection.tsx # Komponen pembungkus: Card, PageSection, Modal
├── types/
│   └── product.ts      # Definisi interface & type (Product, Category, dsb.)
├── public/             # Aset statis (gambar, ikon)
├── .env.example        # Contoh variabel lingkungan
└── package.json
```

## Prasyarat

- [Node.js](https://nodejs.org/) versi 18.18 atau lebih baru.
- npm (sudah termasuk saat memasang Node.js).

## Cara Menjalankan

1. Masuk ke folder proyek:

   ```bash
   cd revoshop
   ```

2. Pasang dependensi:

   ```bash
   npm install
   ```

3. Siapkan Environment (lihat bagian [Environmentn](#Environment)):

   ```bash
   cp .env.example .env.local
   ```

4. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

5. Buka [http://localhost:3000](http://localhost:3000) di browser.

## Environment

Buat file `.env.local` di folder `revoshop/` dengan isi berikut:

| Variabel                   | Keterangan                        | Contoh                  |
| -------------------------- | --------------------------------- | ----------------------- |
| `NEXT_PUBLIC_API_BASE_URL` | Alamat dasar (base URL) API backend | `http://localhost:5000` |

