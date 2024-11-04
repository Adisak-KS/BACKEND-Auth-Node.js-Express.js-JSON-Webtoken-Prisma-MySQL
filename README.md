### 📖 BACKEND Auth Node.js Express.js JWT Prisma MySQL

###### ✍️แก้ไขเมื่อ : 4/11/2567

###### 👨‍💻ผู้จัดทำ : Adisak

---

ศึกษาและเรียนรู้การใช้งาน Node.js

---

### ⭐ ระบบภายในเว็บไซต์

        ✅ สามารถเพิ่ม ลบ แก้ไขข้อมูลได้
        ✅ สามารถ login ได้

---

### ✍️ ภาษาที่ใช้ในการพัฒนาระบบ

        1. Node.js
            1.1 express
            1.2 nodemon (รีสตาร์ทเซิร์ฟเวอร์ให้โดยอัตโนมัติ)
            1.3 body-parser (รับข้อมูลจาก request body)
            1.4 cors (ทำการ request ข้อมูลข้ามโดเมนได้)
            1.5 morgan (ใช้ในการบันทึก log ของ request ที่เข้ามา)
            1.6 prisma (ใช้ในการโต้ตอบกับฐานข้อมูล โดยไม่ต้องเขียน SQL โดยตรง)
            1.7 ่json web token
            1.8 bcrypt
        2. MySQL

---

### 🛠️ เครื่องมือที่ใช้

        1. Visual Studio Code
        2. MySQL Workbench
        3. Microsoft Edge
        4. Postman

---

### 📥วิธีติดตั้งโปรเจ็ค

        1. git clone
        2. ไปที่โฟเดอร์ชื่อ server และสร้างไฟล์ .env  โดยมีเนื้อหา เช่น
                DATABASE_URL="mysql://prisma:adisak123456@localhost:3306/workshop2"
        3. เข้า cmd ที่โฟเดอร์ชื่อ server และใช้คำสั่ง
                npm install @prisma/client
                npx prisma generate
                npx prisma migrate dev --name workshop2_init (ใช้ในการสร้างและอัพเดตฐานข้อมูล)
                npx prisma migrate dev (อัพเดต Prisma schema)
                npm start (เปิด server)

---

### 📥วิธี Import Data

        1. เข้า MySQL Workbench
        2. คลิกที่ชื่อ Database
        3. ไปที่ เมนู Server > Data Import > Import from disk
        4. Import from dump project folder เลือกเป็น เช่น D:\develop\BACKEND-Auth-Node.js-Express.js-JWT-Prisma-MySQL\server\backup_db
        5. สังเกตุที่ Select Database Object to import จะแสดงชื่อ database
        6. ไปที่ Import progress และคลิก import

---
