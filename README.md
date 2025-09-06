# 🐾 PawShop - Website Bán Thú Cưng & Phụ Kiện

PawShop là dự án cá nhân về **website thương mại điện tử** dành cho thú cưng và phụ kiện.  
Mục tiêu: xây dựng một nền tảng giúp người dùng dễ dàng mua sắm, quản lý sản phẩm, và thanh toán trực tuyến.

---

## 🚀 Tính năng chính
- Đăng ký, đăng nhập, quản lý tài khoản người dùng (admin)  
- Danh mục thú cưng & phụ kiện dành cho thú cưng
- Các tin tức liên quan đến từng loại thú cưng
- Tìm kiếm sản phẩm
- Giỏ hàng và thanh toán
- Chi tiết sản phẩm
- Quản lý đơn hàng (người dùng & admin)
- Trang sản phẩm khuyến mãi
- Trang liên hệ với admin

---

## 🛠️ Công nghệ sử dụng
- **Frontend:** Vite + ReactJS    
- **Styling:** CSS, TailwindCSS  
- **Backend (dự kiến):** C#
- **Database (dự kiến):** SQL Server Management Studio (SSMS) 
- **Quản lý mã nguồn:** Git & GitHub  

---

## 📂 Cấu trúc thư mục
```bash
MY-PETSHOP/
│── node_modules/       # Thư viện cài bằng npm/yarn
│── public/             # Ảnh tĩnh, favicon...
  │── images/           # Ảnh, icon sử dụng để design
    │── Admin/
      │── Các ảnh, icon, gif để design trang Admin
    │── Reptile/
      │── Các ảnh, icon, gif để design trang Bò Sát
    │── Rodent/
      │── Các ảnh, icon, gif để design trang Gặm Nhấm
    │── SugarSliger/
      │── Các ảnh, icon, gif để design trang Sóc Bay Úc
    │── Winger/
      │── Các ảnh, icon, gif để design trang Chim Vẹt
    │── Các ảnh khác...
  │── vite.svg
│── src/                # Code chính (component, page, service...)
  │── assets/
  │── components/
  │── contexts/
  │── hooks/
  │── pages/
  │── service/
  │── untils/
  │── App.jsx
  │── index.css
  │── main.jsx
│── .gitignore          # File cấu hình Git
│── eslint.config.js    # Quy tắc lint code
│── index.html          # File HTML gốc
│── package.json        # Thông tin & dependencies
│── package-lock.json   # Quản lý phiên bản dependencies
│── vite.config.js      # Cấu hình Vite
│── README.md           # Tài liệu dự án
