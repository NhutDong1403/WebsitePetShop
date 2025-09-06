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
│── node_modules/                             # Thư viện cài bằng npm/yarn
│── public/                                   # Ảnh tĩnh, favicon...
  │── images/                                 # Ảnh, icon sử dụng để design website
    │── Admin/                                # Ảnh, icon, gif sử dụng để design trang Admin
    │── Reptile/                              # Ảnh, icon, gif sử dụng để design trang Bò Sát
    │── Rodent/                               # Ảnh, icon, gif sử dụng để design trang Gặm Nhấm
    │── SugarSliger/                          # Ảnh, icon, gif sử dụng để design trang Sóc Bay Úc
    │── Winger/                               # Ảnh, icon, gif sử dụng để design trang Chim Vẹt
    │── Các ảnh khác...
  │── vite.svg
│── src/                                      # Code chính (component, page, service...)
  │── assets/
  │── components/                             # Các component sử dụng để xây dựng Website
    │── AdminComponent/                       # Các component của trang Admin
    │── ReptileComponet/                      # Các component của trang Bò Sát
    │── RodentComponent/                      # Các component của trang Gặm Nhấm
    │── SugarComponent/                       # Các component của trang Sóc Bay Úc
    │── WingerComponent/                      # Các component của trang Chim Vẹt
    │── Các component của Trang Chủ...
  │── contexts/
    │── AuthContext.jsx
    │── UserContext.jsx
  │── hooks/
  │── pages/
    │── Admin/                                # Các trang thêm sản phẩm và thú cưng cho Website
      │── pages/
        │── BoSat/                            # Các trang thêm phụ kiện cho bò sát & thêm thú cưng bò sát
          │── ThemPhuKienBoSat.jsx            # Trang thêm phụ kiện cho bò sát
          │── ThemThuCungBoSat.jsx            # Trang thêm thú cưng bò sát
        │── ChimVet/                          # Các trang Thêm phụ kiện cho chim vẹt & Thêm thú cưng chim vẹt
          │── ThemPhuKienChimVet.jsx          # Trang Thêm phụ kiện cho chim vẹt
          │── ThemThuCungChimVet.jsx          # Trang thêm thú cưng chim vẹt
        │── ChoMeo/                           # Các trang Thêm sản phẩm cho chó & Thêm sản phẩm cho mèo
          │── ThemSanPhamChoCho.jsx           # Trang Thêm sản phẩm cho chó
          │── ThemSanPhamChoMeo.jsx           # Trang Thêm sản phẩm cho mèo
        │── DanhMucSanPham/                   # Các trang Danh mục sản phẩm cho Website
          │── BoSat/                          # Các trang Danh mục thú cưng bò sát & Danh mục phụ kiện bò sát
            │── DanhMucBoSat.jsx              # Các trang Danh mục thú cưng bò sát
            │── DanhMucPhuKienBoSat.jsx       # Các trang Danh mục phụ kiện cho bò sát
          │── ChimVet/                        # Các trang Danh mục thú cưng chim vẹt & Danh mục phụ kiện chim vẹt
            │── DanhMucChimVet.jsx            # Các trang Danh mục thú cưng chim vẹt
            │── DanhMucPhuKienChimVet.jsx     # Các trang Danh mục phụ kiện cho chim vẹt
          │── GamNham/                        # Các trang Danh mục thú cưng gặm nhấm & Danh mục phụ kiện gặm nhấm
            │── DanhMucGamNham.jsx            # Các trang Danh mục thú cưng gặm nhấm
            │── DanhMucPhuKienGamNham.jsx     # Các trang Danh mục phụ kiện cho gặm nhấm
          │── SocBay/                         # Các trang Danh mục thú cưng sóc bay úc & Danh mục phụ kiện sóc bay úc
            │── DanhMucSocBay.jsx             # Các trang Danh mục thú cưng sóc bay úc
            │── DanhMucPhuKienSocBay.jsx      # Các trang Danh mục phụ kiện cho sóc bay úc
          │── DanhMucChoCho.jsx               # Các trang Danh mục phụ kiện cho chó
          │── DanhMucChoMeo.jsx               # Các trang Danh mục phụ kiện cho mèo
        │── GamNham/                          # Các trang Thêm phụ kiện cho gặm nhấm & Thêm thú cưng gặm nhấm
          │── ThemPhuKienGamNham.jsx          # Trang thêm phụ kiện cho gặm nhấm
          │── ThemThuCungGamNham.jsx          # Trang thêm thú cưng gặm nhấm
        │── SocBay/                           # Các trang Thêm phụ kiện cho sóc bay úc & Thêm thú cưng sóc bay úc
          │── ThemPhuKienSocBay.jsx           # Trang thêm phụ kiện cho sóc bay úc
          │── ThemThuCungSocBay.jsx           # Trang thêm thú cưng sóc bay úc
        │── AdminHomePage.jsx
        │── BaoCaoThongKe.jsx
        │── ChinhSuaThongTin.jsx
        │── ChiTietTaiKhoan.jsx
        │── DanhSachDonHang.jsx
        │── DatLich.jsx
        │── QuanLyNguoiDung.jsx
        │── ThongKeDoanhThu.jsx
    │── PhuKien/                              # Các trang phụ kiện của Bò Sát
    │── Reptile/                              # Các trang để xây dựng trang Bò Sát (bao gồm Danh mục, Phụ kiện, Tin tức, ...)
      │── DanhMuc/                            # Các trang danh mục của Bò Sát
      │── PhuKien/                            # Các trang phụ kiện cho Bò Sát
      │── tintuc/                             # Các trang tin tức của Bò Sát
      │── Các trang khác của Bò Sát...
    │── Rodent/
      │── PhuKien/                            # Các trang phụ kiện cho Gặm Nhấm
      │── TinTuc/                             # Các trang tin tức của Gặm Nhấm
      │── Các trang khác của Gặm Nhấm... 
    │── SugarGlider/
      │── PhuKien/                            # Các trang phụ kiện cho Sóc Bay Úc
      │── TinTuc/                             # Các trang tin tức của Sóc Bay Úc
      │── Các trang khác của Sóc Bay...
    │── Winger/
      │── PhuKien/                            # Các trang phụ kiện cho Chim Vẹt
      │── TinTuc/                             # Các trang tin tức của Chim Vẹt
      │── Các trang khác của Chim Vẹt...
    │── Các trang khác của Trang chủ...
  │── service/
    │── API/                                  # File tạo một axios instance chung để gọi API và tự động gắn token vào header
    │── authService.js/                       # File dùng để làm việc với API liên quan đến xác thực người dùng
    │── categoryService.js/                   # File dùng để làm việc với API danh mục (Category API) trong dự án
    │── TokenService.js/                      # File để quản lý access token (thường dùng cho xác thực - authentication/authorization) trong dự án
  │── untils/
  │── App.jsx                                 # File để import các component để sử dụng thư viện routing cho React, giúp điều hướng chuyển trang
  │── index.css
  │── main.jsx
│── .gitignore          # File cấu hình Git
│── eslint.config.js    # Quy tắc lint code
│── index.html          # File HTML gốc
│── package.json        # Thông tin & dependencies
│── package-lock.json   # Quản lý phiên bản dependencies
│── vite.config.js      # Cấu hình Vite
│── README.md           # Tài liệu dự án
