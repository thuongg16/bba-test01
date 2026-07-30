# GIT

## Git UNDO

- restore file cụ thể: **git restore --staged <file-name>**
- reset n commit: **git reset HEAD~n**


## Git branching

- pull code: **git pull origin main**
- push code: **git push origin main**
- check branch list: **git branch**
- tạo nhánh: **git branch <branch-name>**
- chuyển nhánh: **git checkout <branch-name>**
- tạo + chuyển nhánh: **git checkout -b <branch-name>**
- xóa nhánh: **git branch -D <branch-name>**

## Git .ignore file

- file .gitignore không được theo dõi và pull/push theo git
exp: add .env vào .gitignore


# JS

## Convention
- có format chung, dễ nhìn
- teammate dễ đọc code

### snake_case
- chữ viết thường, cách nhau bởi dấu gạch chân

### kebab-case
- viết thường, cách nhau bởi dấu gạch ngang

### camelCase
- chữ đầu viết thường, các chữ sau viết hoa chữ cái đầu tiên

### PascalCase
- Đầu chữ cái viết hoa


## Object
- Là một trong những kiểu dữ liệu quan trọng nhất trong JS
- Lưu trữ dạng: key-value

cú pháp:
const/let <variableName> = {
    key1: value1,
    key2: value2
};

- Object = đối tượng, lưu trữ tập hợp các giá trị cùng 1 biến hoặc hằng số

## Logical Operator
- &&
- ||
- !

## Array
-

## Function = hàm
- đoạn code được đặt tên và tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể

cú pháp:
function <functionName>() {
    ...
}

