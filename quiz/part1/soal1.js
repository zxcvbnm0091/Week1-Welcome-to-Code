// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)



function Cap(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function proxytia(PlyNama, PlyPeran){
    let nama = PlyNama || ""; 
    let peran = PlyPeran.toLowerCase() || "";

    const listPeran = ["ksatria", "tabib", "penyihir"];

    if (nama === "") {
        console.log("Nama wajib diisi");
    }
    else if (peran === "") {
        console.log("Pilih Peranmu untuk memulai game");
    }
    else{
        if (listPeran.includes(peran)) {
            if(peran === listPeran[0]){
                console.log(`Halo ${Cap(listPeran[0])} ${nama}, kamu dapat menyerang dengan senjatamu!`);
            }
            else if(peran === listPeran[1]){
                console.log(`Halo ${Cap(listPeran[1])} ${nama}, kamu akan membantu temanmu yang terluka`);
            }
            else if(peran ===  listPeran[2]){
                console.log(`Halo ${Cap(listPeran[2])} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
            }
        }
        else{
            console.log(`${nama} kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
        } 
    }
}

//code disini gunakan console.log untuk outputnya
proxytia("Bambang", "Ksatria");
proxytia("Bambang", "tabib");
proxytia("Bambang", "penyiHir");

proxytia("Bambang", "");
proxytia("", "Ksatria");


// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 21; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
if (tanggal < 1 || tanggal > 31) {
    console.log("Tanggal tidak valid");
}
else{
    if (bulan < 1 || bulan > 12) {
        console.log("Bulan tidak valid");
    }
    else{
        switch (bulan) {
            case 1:
                console.log(`${tanggal} Januari ${tahun}`);
                break;
            case 2:
                console.log(`${tanggal} Februari ${tahun}`);
                break;
            case 3:
                console.log(`${tanggal} Maret ${tahun}`);
                break;
            case 4:
                console.log(`${tanggal} April ${tahun}`);
                break;
            case 5:
                console.log(`${tanggal} Mei ${tahun}`);
                break;
            case 6:
                console.log(`${tanggal} Juni ${tahun}`);
                break;
            case 7:
                console.log(`${tanggal} Juli ${tahun}`);
                break;
            case 8:
                console.log(`${tanggal} Agustus ${tahun}`);
                break;
            case 9:
                console.log(`${tanggal} September ${tahun}`);
                break;
            case 10:
                console.log(`${tanggal} Oktober ${tahun}`);
                break;
            case 11:
                console.log(`${tanggal} November ${tahun}`);
                break;
            case 12:
                console.log(`${tanggal} Desember ${tahun}`);
                break;
            default:
                console.log("Bulan tidak valid");
                break;
        }
    }
}
