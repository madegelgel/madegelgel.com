<div class="hero">

<figure class="hero__image hero__image--overlay">
<img src="https://madegelgel.com/media/posts/20/membuat-cms-dengan-publii.png" srcset="https://madegelgel.com/media/posts/20/responsive/membuat-cms-dengan-publii-xs.png 300w, https://madegelgel.com/media/posts/20/responsive/membuat-cms-dengan-publii-sm.png 480w, https://madegelgel.com/media/posts/20/responsive/membuat-cms-dengan-publii-md.png 768w, https://madegelgel.com/media/posts/20/responsive/membuat-cms-dengan-publii-lg.png 1024w, https://madegelgel.com/media/posts/20/responsive/membuat-cms-dengan-publii-xl.png 1360w, https://madegelgel.com/media/posts/20/responsive/membuat-cms-dengan-publii-2xl.png 1600w" sizes="(max-width: 1600px) 100vw, 1600px" loading="eager" width="1440" height="900" alt="tutorial publii cms bahasa indonesia" />
</figure>

<div class="hero__content">

<div class="wrapper">

<div class="post__meta">

01/05/2020

</div>

# Publii: CMS Alternatif Selain Wordpress/Blogger

</div>

</div>

</div>

<div class="wrapper post__entry">

Sebelum memulai, saya akan bercerita sedikit saja.

*Suwer, gak sampe 1 menit!*

Sebelumnya saya menggunakan blogger sebagai platform blogging, namun karena keterbatasan fitur yang dimiliki oleh blogger memaksa saya untuk pindah platform, di mana blogger tidak bisa menampilkan halaman statis saat domain/blog baru diakses.

Karena memiliki pengalaman yang kurang enak dengan wordpress, akhirnya saya memutuskan untuk menggunakan bootstrap, sampai akhirnya saya menyadari jika bootstrap tidak memiliki interface seperti blogger/wordpress (sepengetahuan saya).

Bingung, dan akhirnya saya menemukan Publii sebagai alternatif terbaik pengganti blogger.

Cerita selesai (padahal sebenarnya kisah ini sudah saya ceritakan di post <span style="text-decoration: underline;">**[pindah rumah](https://madegelgel.com/pindah-rumah/)**</span>).

------------------------------------------------------------------------

Oke saya rasa kata pengantarnya sudah cukup, sekarang mari kita lanjut ke inti pembahasan.

Artikel yang sedang anda baca ini menggunakan **[Publii CMS](https://madegelgel.com/publii-cms/)**.

Benar!

Ini bukan wordpress (beberapa orang mengira saya pindah ke wordpress), yang sedang anda baca ini adalah artikel yang dimuat pada HTML statis, bukan dari database.

Sebelum anda mengikuti jejak saya, silakan baca sampai selesai artikel ini sebelum anda memutuskan pindah platform.

Lanjut...

------------------------------------------------------------------------

<div class="post__toc">

### Panduan Dasar CMS Publii

- [Mengenal Publii CMS](#mcetoc_1e787525p0)
- [Cara upload Publii CMS ke hosting/server](#mcetoc_1e787afg41)
- [Kelebihan Publii CMS](#mcetoc_1e787gq880)
  - [Sangat sangat sangat cepat!](#mcetoc_1e78a18f43)
  - [Bisa dikerjakan saat offline](#mcetoc_1e79pifmt0)
  - [Fitur SEO dasar yang lengkap](#mcetoc_1e78918a30)
  - [Terintegrasi dengan Disqus](#mcetoc_1e78a0ka92)
  - [Fitur backup ke penyimpanan/drive lokal](#mcetoc_1e78a0ech1)
  - [Fitur lainnya](#mcetoc_1e789ug710)
- [Kekurangan Publii CMS](#mcetoc_1e78a1tlt4)
  - [Dashboard tidak bisa diakses secara online](#mcetoc_1e78abrmk5)
  - [Template masih sedikit](#mcetoc_1e78ah09o6)
  - [Tidak ada plugins](#mcetoc_1e78ainef7)
  - [Tidak ada page](#mcetoc_1e7d0jj4b0)

</div>

------------------------------------------------------------------------

## Mengenal Publii CMS

Saya rasa anda sudah tahu apa itu CMS.

Bagi yang belum tahu, kepanjangan CMS adalah Content Management System, di mana biasanya CMS digunakan untuk blogging atau membuat forum.

**Publii adalah CMS yang membuat halaman secara statis**, itu berarti Publii tidak menggunakan database. Bisa dikatakan Publii hampir sama seperti bootstrap hanya saja Publii memiliki halaman antar muka untuk mengatur tampilannya.

Pada umumnya dashboard CMS diakses melalui domain, sedangkan pada Publii anda harus install aplikasi Publii untuk mengakses dashboard.

<figure class="post__image post__image--center">
<a href="https://madegelgel.com/publii-cms/"><img src="https://2.bp.blogspot.com/-e0Qh0f5Q59E/XqwjlYqYVZI/AAAAAAAADrM/It22Jz1_-3U1KPrZa6LJFZZFFj0sx9QpgCLcBGAsYHQ/s1600/membuat-cms-dengan-publii.png" loading="lazy" data-is-external-image="true" width="1440" height="900" alt="cara install publii cms" /></a>
</figure>

Tampilan pembuka aplikasi Publii di laptop saya...

<figure class="post__image post__image--center">
<a href="https://madegelgel.com/publii-cms/"><img src="https://4.bp.blogspot.com/-GQUIAASPC5w/Xqwj1x0R3xI/AAAAAAAADrU/fBTr6sBxYv83vHBpze6vYgeWl3Be6w9GACLcBGAsYHQ/s1600/tampilan-awal-publii-cms.png" loading="lazy" data-is-external-image="true" width="1552" height="947" alt="tampilan awal publii" /></a>
</figure>

Dan inilah tampilan dashboard Publii, hampir sama seperti dashboard CMS pada umumnya hanya saja diakses dengan aplikasi.

<figure class="post__image post__image--center">
<a href="https://madegelgel.com/publii-cms/"><img src="https://1.bp.blogspot.com/-yj3aLsatFkM/Xqwkb9sKoJI/AAAAAAAADrc/SFdKXHUjt_wLhm-oUH1jb9qbFEi6YRtbgCLcBGAsYHQ/s1600/interface-cms-publii.png" loading="lazy" data-is-external-image="true" width="1552" height="947" alt="interface cms publii" /></a>
</figure>

Keren kan?

## Cara upload Publii CMS ke hosting/server

Sistem update artikel atau tema Publii adalah dengan cara upload. Karena sifatnya statis, setelah anda melakukan update konten/tema maka anda harus melakukan sinkron antara aplikasi dan hosting.

Pilihan untuk upload ada banyak, saya sendiri menggunakan metode FTP.

<figure class="post__image post__image--center">
<a href="https://madegelgel.com/publii-cms/"><img src="https://1.bp.blogspot.com/-M5RkWk6DSNw/XqwlZLofQxI/AAAAAAAADro/h_tgFi70aGAfNHRvIT_fRsx64KS1AkrUwCLcBGAsYHQ/s1600/upload-publii-ke-server-hosting.png" loading="lazy" data-is-external-image="true" width="1552" height="947" alt="cara upload publii dengan FTP" /></a>
</figure>

Anda bisa meminta username dan password FTP di layanan hosting masing-masing jika ingin upload menggunakan metode FTP.

## Kelebihan Publii CMS

Dari sekian lama saya menggunakan Publii, inilah beberapa kelebihan yang menurut saya menjadi daya tarik Publii.

### Sangat sangat sangat cepat!

Terkesan berlebihan ya?

Tapi coba anda lihat skor kecepatan akses Publii berikut.

Akses melalui smartphone:

<figure class="post__image post__image--center">
<a href="https://madegelgel.com/publii-cms/"><img src="https://1.bp.blogspot.com/-xVZiO5mQRGo/XqwojTsCtrI/AAAAAAAADr4/pLDbSdFo22s1NZuwkp4HceJg3FwkPJiXwCLcBGAsYHQ/s1600/kecepatan-akses-mobile-publii-cms.png" loading="lazy" data-is-external-image="true" width="1077" height="1600" alt="akses cms publii dengan smartphone" /></a>
</figure>

Akses melalui desktop:

<figure class="post__image post__image--center">
<a href="https://madegelgel.com/publii-cms/"><img src="https://3.bp.blogspot.com/-0eZ1jT4Himg/XqwojZGKdNI/AAAAAAAADr0/4hrx8h6l-5w55GlgTzanIdtLUI14FeP-ACLcBGAsYHQ/s1600/kecepatan-akses-desktop-publii-cms.png" loading="lazy" data-is-external-image="true" width="1140" height="1600" alt="skor kecepatan akses publii cms" /></a>
</figure>

Sudah lihat?

Saya sendiri sebenarnya tidak ingin angka sempurna tersebut, setidaknya memiliki page speed rata-rata 80-90 saja sudah cukup.

Page speed yang tinggi tentu akan membantu menaikkan ranking SEO dan membuat pengunjung betah untuk membaca.

Skor ini didapat karena Publii tidak tergantung pada database sehingga kecepatannya bisa sangat tinggi.

Jika itu masih belum cukup cepat, anda bisa mengaktifkan mode AMP.

<figure class="post__image post__image--center">
<a href="https://madegelgel.com/publii-cms/"><img src="https://1.bp.blogspot.com/-MW2cmS4EJrM/XqwryUmkUhI/AAAAAAAADsc/RFN2IIp-M50AILhEowH9bPbA7RSulBU4wCLcBGAsYHQ/s1600/fitur-amp-agar-blog-lebih-cepat.png" loading="lazy" data-is-external-image="true" width="1552" height="947" alt="enable AMP mode" /></a>
</figure>

Saya pribadi tidak mengaktifkan AMP karena sudah puas dengan page speed yang diberikan.

### Bisa dikerjakan saat offline

Tidak ada internet? Tidak masalah.

Anda bisa membuat konten Publii saat tidak terkoneksi internet dan melakukan sinkron saat online kembali. Pastikan saja konten yang anda buat sudah disimpan/save sebelum nantinya anda melakukan sinkron ke server/hosting.

Mengapa bisa begitu?

Jawabannya sudah ada di atas. Dashboard Publii diakses melalui aplikasi, bukan di domain, sehingga anda bisa mengerjakannya saat offline.

### Fitur SEO dasar yang lengkap

SEO adalah bagian terpenting dari sebuah situs dan Publii memberikan semuanya secara cuma-cuma. Anda dapat mengisi page title agar judulnya berbeda dengan judul post, mengganti URL (Post slug) agar lebih pendek, mengisi deskripsi dan mengatur meta robots.

<figure class="post__image post__image--center">
<a href="https://madegelgel.com/publii-cms/"><img src="https://2.bp.blogspot.com/-LYyrWB5z9jc/XqwqHIYWQ4I/AAAAAAAADsM/4fZ8Fc6LBTEZO243cmUn9zTpvtFR6CiOACLcBGAsYHQ/s1600/fitur-seo-publii-cms.png" loading="lazy" data-is-external-image="true" width="1552" height="947" alt="pengaturan seo publii" /></a>
</figure>

Meskipun halamannya HTML statis, tetapi anda dapat mengaktifkan fitur pretty URLs agar akhiran URL tidak mengandung .html.

<figure class="post__image post__image--center">
<a href="https://madegelgel.com/publii-cms/"><img src="https://3.bp.blogspot.com/-SuLzmnEnV-w/XqwryZmaJ9I/AAAAAAAADsY/04cOT23PGpQHvMMBjWHSTBz8Ltr234bEwCLcBGAsYHQ/s1600/menghilangkan-ektensi-html-publii-cms.png" loading="lazy" data-is-external-image="true" width="1552" height="947" alt="pretty URL Publii CMS" /></a>
</figure>

### Terintegrasi dengan Disqus

Untuk bagian komentar, Publii sudah otomatis terintegrasi dengan layanan disqus. Anda cukup memasukan disqus shortname di kolom yang sudah disediakan.

<figure class="post__image post__image--center">
<a href="https://madegelgel.com/publii-cms/"><img src="https://1.bp.blogspot.com/-NygskQKUokU/Xqwuh8uzf9I/AAAAAAAADss/gTcpXNbhgcE0TLLqgGM9Gpx6D1ZsnDhcACLcBGAsYHQ/s1600/cara-setting-komentar-publii.png" loading="lazy" data-is-external-image="true" width="1552" height="947" alt="cara mengatur komentar publii" /></a>
</figure>

Komentar akan terlihat pada bagian bawah setiap post.

<figure class="post__image post__image--center">
<a href="https://madegelgel.com/publii-cms/"><img src="https://4.bp.blogspot.com/-4v1cWkapByI/XqwvORQUPjI/AAAAAAAADs0/riwFLKeU-YcYkMWMAfvsNYdVBPhPzkQeACLcBGAsYHQ/s1600/kontak-madegelgel.png" loading="lazy" data-is-external-image="true" width="1282" height="1600" alt="set komentar publii" /></a>
</figure>

Anda juga bisa menyembunyikan kolom komentar pada halaman tertentu.

### Fitur backup ke penyimpanan/drive lokal

Saya selalu melakukan backup setiap kali update post baik di drive lokal atau cloud. Hal ini saya rasa wajib untuk dilakukan agar terhindar dari masalah kehilangan seluruh data website yang telah dibuat.

Untuk melakukan backup masuk menu Tools \> Backups \> Create backup.

<figure class="post__image post__image--center">
<a href="https://madegelgel.com/publii-cms/"><img src="https://4.bp.blogspot.com/-yT2cda-1kok/XqwwURKueuI/AAAAAAAADtA/VX0zjjrmnNMzkjZxBNkS2ZKVaSQRnzUEgCLcBGAsYHQ/s1600/cara-backup-cms-publii.png" loading="lazy" data-is-external-image="true" width="1552" height="947" alt="langkah backup publii cms" /></a>
</figure>

Simpanlah baik-baik file backup ini agar mudah diakses di saat tertentu.

### Fitur lainnya

Itu hanya beberapa fitur Publii yang sering saya gunakan. Sebenarnya masih banyak fitur lainnya hanya saja saya tidak menggunakannya. Lain kali akan dijelaskan pada artikel terpisah.

## Kekurangan Publii CMS

Segala hal di dunia ini tidak ada yang sempurna, begitu pula dengan Publii CMS. Berikut beberapa kekurangan Publii yang saya rasakan lengkap dengan solusinya.

### Dashboard tidak bisa diakses secara online

Seperti yang saya jelaskan sebelumnya, untuk mengakses dashboard Publii tidak bisa melalui domain, itu berarti anda harus membawa laptop ke mana anda pergi agar dapat melakukan update.

Menurut pendapat pribadi ini bukan masalah besar, saya rasa saat ini hampir tidak ada orang membuat website di tempat umum seperti warnet, tidak seperti jaman di mana saya memulai blogging (2009). Jika memang sangat terpaksa anda install Publii di tempat umum lalu simpan file backup agar tidak memulai dari nol lagi.

### Template masih sedikit

Anda bisa mengunjungi marketplace untuk melihat tema Publii dan bisa anda lihat sendiri tema Publii tidak sebanyak pesaingnya (saat artikel ini dibuat).

Bagi saya pribadi, tema gratis yang saya gunakan sudah cukup bagus, semua kembali lagi ke selera masing-masing.

### Tidak ada plugins

Publii sama seperti blogger di mana tidak ada pilihan untuk menggunakan plugins sehingga untuk tujuan tertentu mungkin tidak bisa dilakukan di Publii.

Tapi tenang, Publii menyediakan Custom HTML di mana anda bisa memasukan script tambahan seperti script tracker, iklan atau yang lain.

<figure class="post__image post__image--center">
<a href="https://madegelgel.com/publii-cms/"><img src="https://4.bp.blogspot.com/-QdIFC60WBwo/Xqw0aU3YjBI/AAAAAAAADtM/D-CIM2c7RUkLivd0D6X3jriEDkoJSoP4gCLcBGAsYHQ/s1600/cara-install-script-publii-cms.png" loading="lazy" data-is-external-image="true" width="1552" height="947" alt="cara pasang script di publii cms" /></a>
</figure>

### Tidak ada page

Sejak artikel ini dibuat, saya tidak menemukan fitur page pada Publii. Bagi anda yang tidak tahu, page adalah halaman statis yang berdiri sendiri.

Jangan khawatir, anda bisa menggunakan post sebagai page. Anda dapat mengatur post tersebut dengan menghilangkan tanggal, navigasi, related posts, komentar, bahkan menambahkan atribut nofollow dan noindex.

------------------------------------------------------------------------

Sementara hanya itu saja yang bisa saya bagikan kali ini.

Pendapat saya pribadi, untuk yang tidak puas dengan layanan blogger saya rasa Publii adalah solusinya. Namun jika anda membutuhkan service yang lebih lengkap, mau tidak mau sepertinya anda harus menggunakan wordpress. Harapan saya semoga ke depannya Publii bisa semakin populer dan memiliki banyak tema.

Jika anda membutuhkan bantuan atau memiliki pertanyaan tentang **[Publii CMS](https://madegelgel.com/publii-cms/)** silakan ajukan pada kolom komentar di bawah.

Oh ya, hanya sekadar informasi, seluruh informasi yang saya muat di sini adalah murni pengalaman pribadi dan bukan paid content, saya sama sekali tidak dibayar oleh Publii.

Sampai jumpa, semoga bermanfaat.

</div>

- [Uncategorized](https://madegelgel.com/tags/uncategorized/)

<div class="post__share">

<a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmadegelgel.com%2Fpublii-cms%2F" class="js-share facebook" rel="nofollow noopener noreferrer"><img src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiPjx1c2UgeGxpbms6aHJlZj0iaHR0cHM6Ly9tYWRlZ2VsZ2VsLmNvbS9hc3NldHMvc3ZnL3N2Zy1tYXAuc3ZnI2ZhY2Vib29rIiAvPjwvc3ZnPg==" class="icon" /> <span>Facebook</span></a> <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmadegelgel.com%2Fpublii-cms%2F&amp;via=MadeGelgel.com&amp;text=Publii%3A%20CMS%20Alternatif%20Selain%20Wordpress%2FBlogger" class="js-share twitter" rel="nofollow noopener noreferrer"><img src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiPjx1c2UgeGxpbms6aHJlZj0iaHR0cHM6Ly9tYWRlZ2VsZ2VsLmNvbS9hc3NldHMvc3ZnL3N2Zy1tYXAuc3ZnI3R3aXR0ZXIiIC8+PC9zdmc+" class="icon" /> <span>Twitter</span></a> <a href="https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fmadegelgel.com%2Fpublii-cms%2F&amp;media=https%3A%2F%2Fmadegelgel.com%2Fmedia%2Fposts%2F20%2Fmembuat-cms-dengan-publii.png&amp;description=Publii%3A%20CMS%20Alternatif%20Selain%20Wordpress%2FBlogger" class="js-share pinterest" rel="nofollow noopener noreferrer"><img src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiPjx1c2UgeGxpbms6aHJlZj0iaHR0cHM6Ly9tYWRlZ2VsZ2VsLmNvbS9hc3NldHMvc3ZnL3N2Zy1tYXAuc3ZnI3BpbnRlcmVzdCIgLz48L3N2Zz4=" class="icon" /> <span>Pinterest</span></a> <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmadegelgel.com%2Fpublii-cms%2F" class="js-share linkedin" rel="nofollow noopener noreferrer"><img src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiPjx1c2UgeGxpbms6aHJlZj0iaHR0cHM6Ly9tYWRlZ2VsZ2VsLmNvbS9hc3NldHMvc3ZnL3N2Zy1tYXAuc3ZnI2xpbmtlZGluIiAvPjwvc3ZnPg==" class="icon" /> <span>LinkedIn</span></a> <a href="https://api.whatsapp.com/send?text=Publii%3A%20CMS%20Alternatif%20Selain%20Wordpress%2FBlogger%20https%3A%2F%2Fmadegelgel.com%2Fpublii-cms%2F" class="js-share whatsapp" rel="nofollow noopener noreferrer"><img src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiPjx1c2UgeGxpbms6aHJlZj0iaHR0cHM6Ly9tYWRlZ2VsZ2VsLmNvbS9hc3NldHMvc3ZnL3N2Zy1tYXAuc3ZnI3doYXRzYXBwIiAvPjwvc3ZnPg==" class="icon" /> <span>WhatsApp</span></a>

</div>

<div class="post__bio bio">

<img src="https://madegelgel.com/media/website/madness-logo.jpg" class="bio__avatar" loading="lazy" width="1525" height="1617" alt="Made Gelgel" />

<div>

### <a href="https://madegelgel.com/authors/made-gelgel/" rel="author">Made Gelgel</a>

<div class="bio__desc">

Siang jadi karyawan, malam jadi trader, sisanya jadi orang tua + suami.

</div>

</div>

</div>

<div class="post__related related">

<div class="wrapper">

## You should also read:

<div class="feed__meta">

20/05/2025

</div>

### [Warung Jokwi Denpasar: Nasi Campur Legenda Sejak 1960an](https://madegelgel.com/nasi-campur-jokwi-denpasar/)

<div class="feed__meta">

05/12/2022

</div>

### [Cara Membuka Menu Disk Clean-up Windows 11 22H2](https://madegelgel.com/disk-clean-up-windows-11-22h2/)

<div class="feed__meta">

04/08/2022

</div>

### [Migrasi](https://madegelgel.com/migrasi/)

<div class="feed__meta">

03/03/2022

</div>

### [Kebiasaan Menunda yang Membuat Saya Semakin Kaya](https://madegelgel.com/menunda-pangkal-kaya/)

<div class="feed__meta">

13/09/2021

</div>

### [Sampai Jumpa](https://madegelgel.com/sampai-jumpa/)

<div class="feed__meta">

15/05/2020

</div>

### [Hukum Bilangan Besar: Rahasia Besar Konsisten Profit Sepanjang Waktu](https://madegelgel.com/hukum-bilangan-besar/)

<div class="feed__meta">

10/05/2020

</div>

### [Pengalaman Refund PlayStation Plus](https://madegelgel.com/playstation-plus-refund/)

<div class="feed__meta">

07/05/2020

</div>

### [5 Alasan Mengapa Akhirnya Saya Menjadi Trend Following Trader](https://madegelgel.com/5-alasan-menjadi-trend-following-trader/)

<div class="feed__meta">

05/05/2020

</div>

### [Mengenal Pelaku Pasar Forex](https://madegelgel.com/pelaku-pasar-forex/)

<div class="feed__meta">

03/05/2020

</div>

### [Diduga 15 Juta Data User Tokopedia Diretas](https://madegelgel.com/peretasan-tokopedia-2020/)

</div>

</div>

<div class="post__comments">

<div class="wrapper">

<div class="comments">

<div class="comments-wrapper">

### Tinggalkan komentar...

<div id="disqus_thread">

</div>

Please enable JS to use the comments form.

</div>

</div>

</div>

</div>
