# JS Basic

- cú pháp: **console.log("nội dung")**
- chạy lệnh: node file-name.js


## Comment

- // this is a comment

- /* this is a comment */

## Biến và Hằng

### Biến

- Biến: trong biến thiên, có thể thay đổi được

**<từ khóa> <tên biến> = <giá trị>**
- Từ khóa: var hoặc let

exp: var myName = "Thuong";
    let isLovePlaywright = true;
    console.log(myName);

- var: được khai báo lại, var có phạm vi global

- let: không được khai báo lại, let có phạm vi trong block

code nằm trong {} gọi là 1 block code

{
    var a = 10;
    let b = 20;
}

console.log(a); //in ra: 10 
console.log(b); // lỗi ReferenceError: b is not defined

### Hằng

- là các giá trị không thể thay đổi
**<từ khóa> <tên hằng> = <giá trị>**
- Từ khóa: const

exp: const logan = "Học Kỹ - Hiểu Bản Chât - Mentor tận tình";


## Data Type

Một biến/hằng luôn có **kiểu dữ liệu**.
Kiểu dữ liệu là **loại dữ liệu** mà biến đó **đang mang**.

Trong JavaScript, có 8 kiểu dữ liệu, chia làm 2 nhóm chính:

- Kiểu **nguyên thuỷ** (primitive types)
  - Number
  - String
  - Boolean
  - Undefined
  - Null
  - Symbol
  - BigInt
- Kiểu **tham chiếu** (reference types)
  - Object

### Number
- số nguyên và số thực (không phân biệt int/float)
exp: const age = 25;

### string
- chuỗi kí tự
exp: const name = "Thuong";
    const temp = `Age: 10`;

### Boolean
- Giá trị logic
exp: isActive = true;

=> Check type: **typeof(variable)**

### Toán tử so sánh
- == or ===
- !=
-   < > >= <=

### Toán Tử Logic
- &&
- ||

### Toán tử một ngôi
- là toán tử chỉ cần 1 toán hạng để thực hiện

exp:
let x = 5;

- **Prefix**: toán tử nằm trước - tăng trước, trả về sau
++x;
--x;
- **Postfix**: Toán tử nằm sau - trả về trước, tăng sau
x--;
x++;

### Toán tử Toán Học

- Tương tự các phép toán +, -, *, :
- khi chia cho 0, sẽ ra kết quả infinity (vô cực)

## Câu Điều Kiện

- if() {}
- if() {} else {}
- if() {} elseif (){} else {}
- switch ... case

## Loop
- for
- foreach
- for (of)
- while
- do...while
