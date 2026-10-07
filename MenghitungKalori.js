const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan durasi Lari (dalam menit): ", (waktuLari) => {
    rl.question("Masukkan durasi Push-up (dalam menit): ", (waktuPushUp) => {
        rl.question("Masukkan durasi Plank (dalam menit): ", (waktuPlank) => {
            
            let lari = Number(waktuLari);
            let pushUp = Number(waktuPushUp);
            let plank = Number(waktuPlank);

            let kaloriLari = (lari / 5) * 60;
            let kaloriPushUp = (pushUp / 30) * 200;
            let kaloriPlank = plank * 5;

            let totalKalori = kaloriLari + kaloriPushUp + kaloriPlank;

            console.log("\n--- HASIL PERHITUNGAN KALORI ---");
            console.log("Total Kalori yang Terbakar Adalah: " + totalKalori + " kalori");

            if (totalKalori >= 200) {
                if (totalKalori >= 500) {
                    console.log("Status: Luar biasa! Pembakaran kalori sangat tinggi hari ini.");
                } else {
                    console.log("Status: Bagus! Target pembakaran kalori menengah tercapai.");
                }

            } else {
                console.log("Status: Kalori yang terbakar masih sedikit, ayo olahraga lebih lama lagi!");
            }

            rl.close();
        });
    });
});
