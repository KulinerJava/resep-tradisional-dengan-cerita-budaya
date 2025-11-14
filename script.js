// Script untuk interaktifitas website

// Smooth scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// Ensure the "Beranda" nav always scrolls to the very top (handles sticky header or missing anchor edge cases)
const berandaLink = document.querySelector('a[href="#beranda"]');
if (berandaLink) {
    berandaLink.addEventListener('click', function(e) {
        e.preventDefault();
        // smooth scroll to top of document
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Event listener untuk tombol "Lihat Resep"

// Data resep dan cerita budaya
const resepData = {
    "Gado-gado": {
        cerita: "Gado-gado adalah hidangan sayuran rebus khas Indonesia yang disiram dengan saus kacang kental. Campurannya biasanya terdiri dari sayuran seperti kentang, bayam, tauge, dan kacang panjang, serta tahu goreng, tempe goreng, dan telur rebus. Hidangan ini kaya rasa gurih, manis, asin, dan pedas, sering disajikan dengan pelengkap seperti emping atau kerupuk dan taburan bawang goreng. ",
        bahan: [
            "1 ikat bayam",
    "1 ikat kangkung",
    "1 ikat selada",
    "Taoge 1 plastik gula sekiloan",
    "3 buah kentang",
    "6 buah tahu",
    "1 ikat kacang panjang",
    "1/2 kg mie kuning",
    "1 buah timun",
    "2 sambel pecel instan(terserah merknya)",
    "2 sun kara bungkus kecil",
    "-ALat: Panci untuk merebus, Wajan untuk menggoreng, Mangkok untuk mengaduk saus, Pisau dan talenan ",
           
   

        ],
        cara: [
            "Rebus semua sayuran hingga matang, tiriskan.",
            "Goreng tahu dan tempe, potong-potong.",
            "Haluskan kacang tanah, cabai, bawang putih, gula merah, dan air untuk membuat saus kacang.",
            "Susun sayuran, tahu, tempe, dan telur di piring.",
            "Siram dengan saus kacang dan taburi kerupuk."
        ]
    },
    "Soto Ayam": {
        cerita: "Soto merupakan salah satu kuliner khas Indonesia yang telah menjadi bagian tak terpisahkan dari identitas budaya berbagai daerah, termasuk Jawa Timur. Makanan berkuah yang satu ini tidak hanya menggugah selera, tetapi juga kaya akan nilai-nilai budaya dan sejarah.",
        bahan: [
            "Daging ayam",
            "Soun atau bihun",
            "Telur rebus",
            "Kol, daun seledri, bawang goreng",
            "Rempah (kunyit, serai, daun salam)",
            "Alat: Panci, saringan"
        ],
        cara: [
           "Rebus ayam sampai empuk, lalu angkat dan suwir-suwir dagingnya.",
    "Tumis bumbu halus sampai harum, lalu masukkan serai, daun jeruk, dan daun salam.",
    "Tuang tumisan ke dalam air rebusan ayam, aduk rata.",
    "Bumbui dengan garam, gula, dan kaldu bubuk sesuai selera.",
    "Masak sampai kuahnya wangi dan bumbunya meresap ke ayam.",
    "Siapkan mangkuk, tata pelengkap seperti tauge, bihun, telur rebus, dan suwiran ayam.",
    "Siram dengan kuah panas, lalu taburi bawang goreng, daun bawang, dan beri perasan jeruk nipis.",
    "Sajikan selagi hangat bersama sambal jika suka pedas."
        ]
    },
    "Rendang Daging": {
        cerita: "Rendang daging berasal dari Minangkabau, Sumatera Barat. Awalnya dibuat untuk mengawetkan daging dengan cara dimasak lama bersama santan dan rempah. Hidangan ini jadi simbol kebanggaan masyarakat Minang dan pernah dinobatkan sebagai salah satu makanan terenak di dunia oleh CNN Travel.",
        bahan: [
            "Daging sapi",
            "Santan",
            "Bumbu halus (cabai, bawang merah, bawang putih, jahe, lengkuas)",
            "Daun jeruk, daun salam",
            "Alat: Wajan besar, spatula"
        ],
        cara: [
            "Potong daging sapi ukuran sedang, jangan terlalu kecil biar nggak hancur saat dimasak.",
    "Haluskan semua bumbu halus seperti bawang merah, bawang putih, cabai, jahe, lengkuas, dan kunyit.",
    "Panaskan sedikit minyak, lalu tumis bumbu halus sampai harum dan matang.",
    "Masukkan serai, daun jeruk, daun salam, dan daun kunyit, aduk rata.",
    "Tambahkan santan kental dan santan encer ke dalam wajan, aduk terus agar santan tidak pecah.",
    "Masukkan potongan daging sapi ke dalam santan berbumbu.",
    "Masak dengan api sedang sambil terus diaduk hingga mendidih.",
    "Setelah mendidih, kecilkan api dan masak perlahan selama 2–3 jam hingga kuah mengental dan berubah warna jadi cokelat tua.",
    "Aduk sesekali supaya rendang tidak gosong di dasar wajan.",
    "Kalau sudah kering dan berminyak, rendang siap disajikan."
        ]
    },
    "Lumpia Goreng": {
        cerita: "Lumpia goreng adalah camilan khas Indonesia, terutama terkenal dari Semarang, Jawa Tengah. Isinya biasanya campuran sayuran seperti rebung, wortel, dan kadang ditambah ayam atau udang, dibungkus kulit tipis lalu digoreng garing. Rasanya gurih, renyah di luar, lembut di dalam, dan makin enak kalau disantap pakai saus manis pedas atau cabai rawit",
        bahan: [
            "10 lembar kulit lumpia siap pakai",
    "100 gram ayam cincang (bisa diganti udang atau tanpa daging)",
    "100 gram rebung, iris tipis dan rebus sebentar",
    "1 buah wortel, potong korek api",
    "2 siung bawang putih, cincang halus",
    "2 siung bawang merah, cincang halus",
    "1 sdm kecap manis",
    "Garam, gula, dan lada secukupnya",
    "Minyak untuk menumis dan menggoreng",
    "Putih telur atau air untuk merekatkan kulit lumpia",
    "-ALat: Wajan untuk menumis dan menggoreng, Pisau dan talenan, Mangkok untuk mencampur isian",
   
    

        ],
        cara: [
            "Tumis bawang putih dan bawang merah hingga harum.",
    "Masukkan wortel, rebung, dan ayam cincang, lalu aduk rata.",
    "Tambahkan garam, lada, gula, dan sedikit kecap manis, masak hingga matang dan agak kering.",
    "Ambil selembar kulit lumpia, isi dengan tumisan, lalu lipat dan gulung rapat.",
    "Rekatkan ujungnya dengan sedikit air atau putih telur agar tidak lepas saat digoreng.",
    "Panaskan minyak, goreng lumpia sampai kuning keemasan dan garing.",
    "Angkat, tiriskan, dan sajikan hangat dengan saus manis pedas atau cabai rawit."
        ]
    },
    "Bakso Tradisional": {
        cerita: "Konon, asal-usul bakso berawal dari kisah seorang pemuda Tionghoa bernama Meng Bo di kota Fuzhou, China, yang ingin membuatkan makanan lembut untuk ibunya yang sudah tua dan sulit mengunyah daging. Ia kemudian menumbuk daging sampai halus, membentuknya jadi bulatan kecil, dan merebusnya — dari sanalah nama bak-so (artinya “daging giling”) muncul. Saat budaya Tionghoa menyebar ke Nusantara, cara membuat bakso ini diadaptasi oleh masyarakat lokal dengan menambahkan bumbu khas Indonesia dan kuah kaldu sapi. Hasilnya, lahirlah bakso tradisional Indonesia yang gurih, kenyal, dan kini jadi salah satu makanan paling dicintai di seluruh negeri.",
        bahan: [
            "500 gram daging sapi giling",
    "100 gram tepung tapioka",
    "3 siung bawang putih, haluskan",
    "1 butir putih telur",
    "1 sdt garam",
    "½ sdt lada bubuk",
    "½ sdt baking powder (opsional, biar lebih kenyal)",
    "Air es secukupnya untuk membantu menggiling adonan",
    "Air untuk merebus bakso",
    "-Alat: Blender atau food processor, Panci untuk merebus, Sendok atau tangan untuk membentuk bakso",
    
        ],
        cara: [
           "Giling daging sapi bersama bawang putih hingga halus.",
    "Tambahkan putih telur, garam, lada, tepung tapioka, dan sedikit air es, aduk hingga adonan lembut dan bisa dipulung.",
    "Didihkan air dalam panci, kecilkan api hingga tidak bergolak.",
    "Bentuk adonan bakso bulat menggunakan tangan atau sendok, lalu masukkan ke air panas.",
    "Rebus sampai bakso mengapung, tandanya sudah matang, lalu angkat dan tiriskan.",
    "Sajikan bakso dengan kuah kaldu, mi, tahu, sawi, bawang goreng, dan sambal sesuai selera."
        ]
    },
    "Pecel": {
        cerita: "Pecel adalah makanan tradisional khas Jawa yang terdiri dari sayuran rebus seperti kangkung, bayam, dan tauge, disiram sambal kacang yang gurih pedas. Hidangan ini sudah ada sejak zaman kerajaan Jawa kuno dan dikenal sebagai makanan rakyat karena bahannya sederhana tapi bergizi. Pecel sering disantap dengan nasi, rempeyek, atau tempe goreng, dan sampai sekarang tetap jadi kuliner khas yang merakyat di berbagai daerah Indonesia.",
        bahan: [
            "1 ikat kangkung, siangi dan rebus sebentar",
    "1 ikat bayam, rebus sebentar",
    "100 gram tauge, seduh air panas",
    "1 buah mentimun, iris tipis",
    "1 genggam kacang panjang, potong dan rebus",
    "Nasi putih secukupnya untuk penyajian",

"bahan_membuat_kacang",
    "150 gram kacang tanah goreng",
    "3 siung bawang putih, goreng sebentar",
    "3 buah cabai rawit (sesuai selera pedas)",
    "2 lembar daun jeruk",
    "1 sdm gula merah, sisir halus",
    "1 sdt garam",
    "Air hangat secukupnya untuk mengencerkan",
    "-Alat: Panci untuk merebus sayuran, Blender atau cobek untuk menghaluskan sambal dan kacang, Mangkok untuk menyajikan"
    

    
],
        cara: [
           "Haluskan kacang tanah goreng, bawang putih, cabai rawit, daun jeruk, gula merah, dan garam.",
    "Tambahkan air hangat sedikit demi sedikit sampai sambal kacang bertekstur kental.",
    "Siapkan sayuran yang sudah direbus di piring saji.",
    "Siram dengan sambal kacang di atasnya.",
    "Sajikan bersama nasi putih, rempeyek, atau lauk sesuai selera."
        ]
    },
    "Bika Ambon": {
        cerita: "BBika Ambon adalah kue khas Medan, Sumatera Utara, yang terkenal dengan teksturnya yang berserat dan kenyal. Meski namanya “Ambon,” kue ini sebenarnya tidak berasal dari kota Ambon, melainkan disebut begitu karena dulu pertama kali dijual di Jalan Ambon, Medan. Rasanya manis, lembut, dan harum dari santan serta daun jeruk, bikin banyak orang ketagihan.",
        bahan: [
            "250 ml santan kental",
    "6 lembar daun jeruk",
    "2 batang serai, memarkan",
    "100 gram tepung terigu",
    "150 gram tepung tapioka",
    "200 gram gula pasir",
    "5 butir kuning telur",
    "1 sdt ragi instan",
    "100 ml air hangat",
    "1 sdt vanili",
    "Margarin untuk olesan loyang",
    "-Alat: Loyang bulat diameter 20 cm, Mixer atau whisk, Wadah untuk mencampur adonan"

        ],
        cara: [
             "Rebus santan bersama daun jeruk dan serai sampai harum, lalu dinginkan.",
    "Larutkan ragi instan dengan air hangat dan sedikit gula, diamkan 10 menit hingga berbuih.",
    "Kocok kuning telur dan gula sampai larut.",
    "Tambahkan tepung terigu, tepung tapioka, larutan ragi, dan santan sedikit demi sedikit sambil diaduk rata.",
    "Diamkan adonan selama 1 jam agar mengembang dan muncul gelembung.",
    "Panaskan loyang yang sudah diolesi margarin, tuang adonan.",
    "Panggang dengan api kecil hingga bagian atasnya kecokelatan dan matang merata.",
    "Angkat, dinginkan, lalu potong-potong dan sajikan."
        ]
    },
    "Gudeg": {
        cerita: "Gudeg adalah makanan khas Yogyakarta yang terbuat dari nangka muda dimasak lama dengan santan dan bumbu khas hingga warnanya kecokelatan dan rasanya manis gurih. Biasanya disajikan dengan ayam kampung, telur pindang, krecek, dan nasi hangat. Gudeg dikenal sebagai simbol kelezatan kuliner Jawa karena cita rasanya yang lembut dan aroma santannya yang khas.",
        bahan: [
            "1 kg nangka muda, potong kecil",
    "500 ml santan kental",
    "1 liter santan encer",
    "3 lembar daun salam",
    "3 lembar daun jeruk",
    "2 batang serai, memarkan",
    "100 gram gula merah, sisir halus",
    "Garam secukupnya",
    "5 butir telur rebus (opsional)",
    "Ayam kampung potong-potong (opsional)",
    "-Bumbu halus:",
    " 8 siung bawang merah",
    "5 siung bawang putih",
    "4 butir kemiri, sangrai",
    "1 sdt ketumbar",
    "1 ruas lengkuas",
    "1 ruas kencur",
    "-Alat: Panci besar, Blender atau cobek untuk menghaluskan bumbu"
        ],
        cara: [
             "Tata daun salam dan daun jati (jika ada) di dasar panci, masukkan potongan nangka muda di atasnya.",
    "Tambahkan bumbu halus, serai, daun jeruk, gula merah, dan garam.",
    "Tuang santan encer hingga nangka terendam, masak dengan api kecil.",
    "Masukkan telur rebus dan ayam bila pakai, aduk perlahan agar tidak hancur.",
    "Setelah mulai meresap, tuang santan kental, lanjutkan memasak sampai kuah menyusut dan gudeg berwarna cokelat kemerahan.",
    "Masak lama dengan api kecil hingga nangka lembut dan bumbu meresap sempurna.",
    "Sajikan dengan nasi hangat, ayam, telur, dan sambal krecek."
        ]
    },
    "Pempek": {
        cerita: "Pempek adalah makanan khas Palembang, Sumatera Selatan, yang terbuat dari ikan giling dan tepung tapioka, disajikan dengan kuah cuko yang asam, manis, dan pedas. Konon, makanan ini sudah ada sejak masa kolonial Belanda, diciptakan oleh seorang warga keturunan Tionghoa bernama “Apek,” yang menjual olahan ikan di tepi sungai — dari situlah nama “empek-empek” atau pempek muncul. Kini, pempek jadi kuliner ikonik Indonesia yang digemari di seluruh daerah.",
        bahan: [
           "500 gram daging ikan tenggiri giling",
    "250 gram tepung tapioka",
    "200 ml air es",
    "2 siung bawang putih, haluskan",
    "1 sdt garam",
    "1 sdt gula",
    "Minyak untuk menggoreng",
    "-Bahan kuah cuko:",
    "250 gram gula merah, sisir halus",
    "10 buah cabai rawit merah (sesuai selera)",
    "5 siung bawang putih",
    "1 sdt garam",
    "2 sdm cuka",
    "600 ml air",
    "-Alat: Panci untuk merebus, Wajan untuk menggoreng, Mangkok untuk mencampur adonan"
        ],
        cara: [
            "Campur ikan giling dengan bawang putih, garam, dan gula.",
    "Tambahkan air es sedikit demi sedikit sambil diaduk hingga rata.",
    "Masukkan tepung tapioka, aduk perlahan sampai kalis dan bisa dibentuk.",
    "Bentuk adonan sesuai selera (lenjer, kapal selam, atau bulat kecil).",
    "Rebus pempek dalam air mendidih hingga mengapung, angkat dan tiriskan.",
    "Goreng pempek hingga kecokelatan saat akan disajikan.",
    "Untuk membuat cuko, rebus semua bahan hingga mendidih dan sedikit mengental, lalu saring.",
    "Sajikan pempek goreng dengan siraman kuah cuko dan potongan mentimun segar."
        ]
    },
    "Rawon": {
        cerita: "Rawon adalah makanan khas Jawa Timur, terutama dari daerah Surabaya dan Malang. Hidangan ini berupa sup daging sapi dengan kuah hitam pekat dari kluwek, rempah khas Indonesia yang memberi rasa gurih dan aroma unik. Rawon biasanya disajikan dengan nasi hangat, tauge pendek, telur asin, sambal, dan kerupuk udang. Rasanya gurih, sedikit manis, dan punya cita rasa khas yang bikin nagih.",
        bahan: [
            "500 gram daging sapi (biasanya bagian sandung lamur atau sengkel)",
    "2 batang serai, memarkan",
    "3 lembar daun jeruk",
    "2 lembar daun salam",
    "2 liter air",
    "2 sdm minyak untuk menumis",
    "Garam, gula, dan kaldu bubuk secukupnya",
    "-Bumbu halus:",
     "5 buah kluwek, ambil isinya dan rendam air panas",
    "6 siung bawang merah",
    "4 siung bawang putih",
    "3 butir kemiri, sangrai",
    "1 ruas kunyit, bakar",
    "1 ruas jahe",
    "1 sdt ketumbar",
    "½ sdt merica",
    "Bahan pelengkap:",
    "Tauge pendek",
    "Telur asin, belah dua",
    "Sambal terasi",
    "Kerupuk udang",
    "-Alat: Panci besar, Wajan untuk menumis, Blender atau cobek untuk menghaluskan bumbu"
        ],
        cara: [
           "Rebus daging sapi hingga empuk, potong-potong, lalu sisihkan kaldu rebusannya.",
    "Tumis bumbu halus sampai harum dan matang, lalu masukkan serai, daun jeruk, dan daun salam.",
    "Tuang tumisan ke dalam kaldu daging, aduk rata.",
    "Masukkan potongan daging sapi, bumbui dengan garam, gula, dan kaldu bubuk.",
    "Masak dengan api kecil hingga kuah mengental dan berwarna hitam pekat.",
    "Sajikan rawon panas dengan nasi, tauge, telur asin, sambal, dan kerupuk."
        ]
    },
    "Mie Aceh": {
        cerita: "Mie Aceh adalah makanan khas Provinsi Aceh yang terkenal dengan cita rasa pedas, gurih, dan kaya rempah. Mie ini menggunakan mie kuning tebal yang dimasak dengan bumbu rempah seperti kari, disajikan bersama potongan daging sapi, kambing, atau seafood. Biasanya dinikmati dalam tiga versi: mie Aceh goreng, rebus, atau nyemek (setengah basah). Rasanya kuat, harum rempah, dan khas banget Nusantara!",
        bahan: [
             "300 gram mie kuning basah",
    "150 gram daging sapi atau udang, potong kecil",
    "3 siung bawang putih, cincang halus",
    "5 siung bawang merah, iris tipis",
    "2 batang daun bawang, potong kasar",
    "2 sdm kecap manis",
    "1 sdm kecap asin",
    "1 sdm saus tomat",
    "1 sdt garam",
    "1 sdt gula",
    "Air secukupnya (sesuai versi rebus atau nyemek)",
    "Minyak untuk menumis",
    "-Bumbu halus:",
             "5 butir cabai merah (bisa tambah kalau mau lebih pedas)",
    "2 butir kemiri sangrai",
    "1 ruas kunyit",
    "1 ruas jahe",
    "1 sdt kari bubuk",
    "1 sdt merica bubuk",
"-Alat: Wajan untuk menumis, Panci untuk merebus mie"
        ],
        cara: [
           "Haluskan semua bumbu halus, lalu tumis dengan minyak sampai harum.",
    "Masukkan bawang merah, bawang putih, dan daging atau udang, tumis hingga matang.",
    "Tambahkan kecap manis, kecap asin, saus tomat, garam, gula, dan sedikit air.",
    "Masukkan mie kuning, aduk rata sampai bumbu meresap.",
    "Tambahkan daun bawang, aduk sebentar, lalu angkat.",
    "Sajikan mie Aceh panas-panas dengan bawang goreng, emping, acar, dan jeruk nipis."
        ]
    },
    "Ayam Betutu": {
        cerita: "Ayam betutu adalah makanan khas Bali yang terkenal dengan cita rasa pedas, gurih, dan aroma rempah yang kuat. Hidangan ini dibuat dari ayam utuh yang dilumuri bumbu khas Bali, lalu dimasak perlahan hingga empuk dan bumbunya meresap sempurna. Biasanya disajikan dalam upacara adat atau acara besar, menjadikan ayam betutu simbol kelezatan kuliner tradisional Bali.",
        bahan: [
           "1 ekor ayam utuh (sekitar 1 kg)",
    "2 batang serai, memarkan",
    "5 lembar daun jeruk",
    "3 lembar daun salam",
    "2 sdm air jeruk nipis",
    "2 sdt garam",
    "Minyak secukupnya untuk menumis",
    "-Bumbu halus:",
   "10 siung bawang merah",
    "5 siung bawang putih",
    "5 buah cabai merah keriting",
    "10 cabai rawit (sesuai selera pedas)",
    "3 butir kemiri sangrai",
    "1 ruas kunyit",
    "1 ruas jahe",
    "1 ruas lengkuas",
    "1 sdt ketumbar",
    "1 sdt terasi bakar",
    "½ sdt lada bubuk",
    "1 sdt gula merah",
    "-Alat: Daun pisang untuk membungkus, Wajan untuk menumis, Panci atau oven untuk memasak ayam"
        ],
        cara: [
           "Bersihkan ayam, lumuri dengan air jeruk nipis dan garam, lalu diamkan 15 menit.",
    "Haluskan semua bumbu halus, lalu tumis sampai harum dan matang.",
    "Tambahkan daun jeruk, daun salam, dan serai ke dalam tumisan.",
    "Lumuri seluruh bagian ayam dengan bumbu tumis hingga rata, termasuk bagian dalamnya.",
    "Bungkus ayam dengan daun pisang atau aluminium foil agar bumbu meresap sempurna.",
    "Kukus ayam selama 1,5 jam atau sampai empuk.",
    "Setelah dikukus, ayam bisa dipanggang sebentar supaya lebih harum dan berwarna keemasan.",
    "Sajikan ayam betutu dengan nasi hangat, sambal matah, dan sayur urap khas Bali."
        ]
    }
};

// Modal interaktif
const modal = document.getElementById('resepModal');
const modalTitle = document.getElementById('modal-title');
const modalCerita = document.getElementById('modal-cerita');
const modalBahan = document.getElementById('modal-bahan');
const modalCara = document.getElementById('modal-cara');
const closeButton = document.querySelector('.close-button');

function showResepModal(namaResep) {
    const data = resepData[namaResep];
    if (!data) return;
    modalTitle.textContent = namaResep;
    modalCerita.textContent = data.cerita;
    modalBahan.innerHTML = '';
    data.bahan.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        modalBahan.appendChild(li);
    });
    modalCara.innerHTML = '';
    data.cara.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        modalCara.appendChild(li);
    });
    modal.style.display = 'block';
}

closeButton.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Event listener untuk tombol "Lihat Resep"
document.querySelectorAll('.resep-button').forEach(button => {
    button.addEventListener('click', function() {
        const resepCard = this.closest('.resep-card');
        const resepName = resepCard.querySelector('h3').textContent;
        showResepModal(resepName);
    });
});

// Event listener untuk tombol CTA
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        document.querySelector('#resep').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// Tambah efek parallax pada hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    let scrollPosition = window.pageYOffset;
    if (scrollPosition < 500) {
        hero.style.backgroundPosition = '0 ' + (scrollPosition * 0.5) + 'px';
    }
});

// Animasi saat card terlihat
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.resep-card').forEach(card => {
    observer.observe(card);
});

console.log('Script berhasil dimuat! Website Resep Nenek siap digunakan.');
