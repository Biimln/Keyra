const tombolBuka =
    document.getElementById("tombolBuka");

const halamanAwal =
    document.getElementById("halamanAwal");

const halamanSurat =
    document.getElementById("halamanSurat");

const musik =
    document.getElementById("musik");

const linkVideo =
    document.getElementById("linkVideo");


/*
========================================
TOMBOL BUKA SURAT
========================================
*/

tombolBuka.addEventListener("click", function() {

    // Sembunyikan halaman awal
    halamanAwal.style.display = "none";

    // Tampilkan surat
    halamanSurat.style.display = "flex";

    // Cek apakah ada posisi musik
    const posisiMusik =
        localStorage.getItem("posisiMusik");


    if (posisiMusik !== null) {

        musik.currentTime =
            parseFloat(posisiMusik);

    }


    // Putar musik
    musik.play().catch(function() {

        console.log(
            "Musik tidak dapat diputar."
        );

    });

});


/*
========================================
KETIKA MAU MASUK KE VIDEO
========================================
*/

linkVideo.addEventListener("click", function() {

    // Simpan posisi lagu
    localStorage.setItem(
        "posisiMusik",
        musik.currentTime
    );

});