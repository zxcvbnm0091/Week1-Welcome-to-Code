// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua


// CODE
let n = 1;

console.log("LOOPING PERTAMA");
while (n <= 10) {
    console.log(n);
    n++;
}

console.log("LOOPING KEDUA");
while (n > 1) {
    n--;
    console.log(n);
}