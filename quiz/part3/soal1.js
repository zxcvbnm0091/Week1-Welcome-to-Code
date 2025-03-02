// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua


// CODE
// Looping Maju-Mundur
let num = 1;
let maju = true;

while (num != 0) {
    
    if(maju){
        num++;
        maju = !maju;
        console.log("LOOPING PERTAMA", num);
    }
    else{
        num -= 2;
        maju = !maju;
        console.log("LOOPING KEDUA", num);
    }
}

// Looping Maju dan Looping Mundur
// Looping pertama (maju)
let string = "LOOPING PERTAMA";
let i = 0;
let strLength = string.length;
while(i < strLength){
    console.log(string.substring(0, i+1));
    i++;
}

// Looping kedua (mundur)
let string2 = "LOOPING KEDUA";
let strLength2 = string2.length;
while(strLength2 > 0){
    console.log(string2.substring(0, strLength2));
    strLength2--;
}