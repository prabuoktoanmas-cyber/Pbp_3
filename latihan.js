let totalBelanja = 45000;
let persen = 0;
if (totalBelanja >= 250000) {
  diskon = totalBelanja * 0.10;
  totalBayar = totalBelanja - diskon;
  console.log("Total belanja anda adalah Rp" + totalBelanja);
  console.log("Diskon yang diperoleh adalah Rp" + diskon);
  console.log("Total yang harus dibayar adalah Rp" + totalBayar);
} 

else if (totalBelanja >= 100000) {
  diskon = totalBelanja * 0.5
  totalBayar = totalBelanja - diskon;
  console.log("Total belanja anda adalah Rp" + totalBelanja);
  console.log("Diskon yang diperoleh adalah Rp" + diskon);
  console.log("Total yang harus dibayar adalah Rp" + totalBayar);
}

else if (totalBelanja >= 50000) {
  diskon = totalBelanja * 0.3
  totalBayar = totalBelanja - diskon;
  console.log("Total belanja anda adalah Rp" + totalBelanja);
  console.log("Diskon yang diperoleh adalah Rp" + diskon);
  console.log("Total yang harus dibayar adalah Rp" + totalBayar);
} 

else {
  console.log("Total bayar dan total belanja, Tidak mendapat diskon")
}
