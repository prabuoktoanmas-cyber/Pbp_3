const readline = require("readline/promises");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function main() {
  let total = 0;
  let daftar = [];
  let lagi = "y";

  while (lagi === "y") {
    let jenis = (await rl.question("Jenis olahraga (lari/push up/plank): "))
      .toLowerCase()
      .replace(/[\s-]/g, ""); // "Push Up" / "push-up" jadi "pushup"
    let durasi = Number(await rl.question("Durasi (menit): "));

    if (durasi > 0) {
      if (jenis === "lari") {
        let kalori = (durasi / 5) * 60;
        total += kalori;
        daftar.push({ nama: "Lari", durasi: durasi, kalori: kalori });
      } else {
        if (jenis === "pushup") {
          let kalori = (durasi / 30) * 200;
          total += kalori;
          daftar.push({ nama: "Push-up", durasi: durasi, kalori: kalori });
        } else {
          if (jenis === "plank") {
            let kalori = durasi * 5;
            total += kalori;
            daftar.push({ nama: "Plank", durasi: durasi, kalori: kalori });
          } else {
            console.log("Jenis olahraga tidak dikenal.");
          }
        }
      }
    } else {
      console.log("Durasi harus lebih dari 0.");
    }

    lagi = (await rl.question("Tambah olahraga lain? (y/n): ")).toLowerCase();
  }

  console.log("\nJenis Olahraga | Durasi | Kalori");
  for (let i = 0; i < daftar.length; i++) {
    console.log(daftar[i].nama + " | " + daftar[i].durasi + " menit | " + daftar[i].kalori + " kalori");
  }
  console.log("Total kalori terbakar: " + total + " kalori");

  rl.close();
}

main();
