//Bài 1. Khai báo mảng một chiều có tên arrayInt
let arrayInt = [];
//a. Nhập 5 giá trị số nguyên cho mảng từ bàn phím
for (let i = 0; i < 5; i++) {
    arrayInt[i] = parseInt(prompt("Nập giá trị số nguyên thứ " + (i + 1) + ": "));
}
//b. Hiển thị giá trị các phần tử của mảng
console.log(arrayInt);

//c. In các phần tử có giá trị chẵn và tính tổng
let tongGiatriChan = 0;
for (let i = 0; i < 5; i++) {
    if (arrayInt[i] % 2 == 0) {
        console.log("Phần tử có giá trị chẵn là: " + arrayInt[i]);
        tongGiatriChan += arrayInt[i];
    }
}
console.log("Tổng các phần tử có giá trị chẵn là: " + tongGiatriChan);

//d. In các phần tử có chỉ số lẻ và tính tổng
let tongChisoLe = 0;
for (let i = 1; i < arrayInt.length; i += 2) {
    console.log("Phần tử có chỉ số lẻ: " + arrayInt[i]);
    tongChisoLe += arrayInt[i];
    }
console.log("Tổng phần tử có chỉ số lẻ là: " + tongChisoLe);

//e. In giá trị các phần tử trong mảng là số nguyên tố
for (let i = 0; i< arrayInt.length; i++) {
    let check = true;
    for (let j = 2; j < arrayInt[i]; j++) {
        if (arrayInt[i] % j == 0){
            check = false; 
            break;
        }
    }
    if (check){
        console.log("Số nguyên tố là: " + arrayInt[i]);
    }
}

//f. In các phần tử có giá trị là max hoặc min
let max = arrayInt[0];
let min = arrayInt[0];
for (let i = 1; i < arrayInt.length; i++) {
    if(arrayInt[i] > max ){
        max = arrayInt[i];
    }
    if (arrayInt[i] < min ){
        min = arrayInt[i];
    }
}
console.log("Max = " + max);
console.log("Min = " + min);

//g.Sắp xếp mảng giảm dần và in giá trị các phần tử mảng sau khi sắp xếp(không và có sử dụng hàm sort)
let soSosanh;
for(let i = 0; i < arrayInt.length - 1; i++){
    for(let j = i + 1; j < arrayInt.length; j++ ) {
        if(arrayInt[i] < arrayInt[j]){
            let soSosanh = arrayInt[i];
            arrayInt[i] = arrayInt[j];
            arrayInt[j] = soSosanh; 
        }
    }
}
console.log("Các phần tử sau khi sắp xếp giảm dần là " + arrayInt.join(", "));

//h. Nhập vào một số nguyên và thống kê có bao nhiêu phần tử có giá trị như vậy
let number = parseInt(prompt("Nhập số nguyên cần thống kê"));
let count = 0;
for (let i = 0; i < arrayInt.length; i++) {
    if (arrayInt[i] === number) {
        count++;
    }
}
console.log(`Có ${count} phần tử trong mảng có giá trị bằng ${number}`);