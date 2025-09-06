// App.jsx
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ProductDogPage from "./pages/ProductDogPage.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import ProductCatPage from "./pages/ProductCatPage.jsx";
import ProductDiscountPage from "./pages/ProductDiscountPage.jsx";
import NewProductPage from "./pages/NewProductPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Service1Page from "./pages/Service1Page.jsx";
import Service2Page from "./pages/Service2Page.jsx";
import ScrollToTop from "./components/ScrollTop.jsx";
import PayPage from "./pages/PayPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

// Reptile
import ReptileHomePage from "./pages/Reptile/ReptileHomePage.jsx";
import ProductDiscountReptile from "./pages/Reptile/ProductDiscountReptile.jsx";
import ContactPageReptile from "./pages/Reptile/ContactPageReptile.jsx";
import ServicePageReptile from "./pages/Reptile/ServicePageReptile.jsx";
import TakeCarePageReptile from "./pages/Reptile/TakeCarePageReptile.jsx";
import CartReptilePage from "./pages/Reptile/CartReptilePage.jsx";
import DanhMucRan from "./pages/Reptile/DanhMuc/DanhMucRan.jsx";
import DanhMucTran from "./pages/Reptile/DanhMuc/DanhMucTran.jsx";
import DanhMucThanLan from "./pages/Reptile/DanhMuc/DanhMucThanLan.jsx";
import DanhMucRua from "./pages/Reptile/DanhMuc/DanhMucRua.jsx";
import DanhMucChanKhop from "./pages/Reptile/DanhMuc/DanhMucChanKhop.jsx";
import DanhMucKyDa from "./pages/Reptile/DanhMuc/DanhMucKyDa.jsx";
import DanhMucLuongCu from "./pages/Reptile/DanhMuc/DanhMucLuongCu.jsx";
import DanhMucRong from "./pages/Reptile/DanhMuc/DanhMucRong.jsx";
import DanhMucTacKe from "./pages/Reptile/DanhMuc/DanhMucTacKe.jsx";
import DanhMucRuaNuoc from "./pages/Reptile/DanhMuc/DanhMucRuaNuoc.jsx";
import ChenNuoc from "./pages/Reptile/PhuKien/ChenNuoc.jsx";
import DenSuoi from "./pages/Reptile/PhuKien/DenSuoi.jsx";
import TankNhua from "./pages/Reptile/PhuKien/TankNhua.jsx";
import TankKinh from "./pages/Reptile/PhuKien/TankKinh.jsx";
import TankMica from "./pages/Reptile/PhuKien/TankMica.jsx";
import TankAcrylic from "./pages/Reptile/PhuKien/TankAcrylic.jsx";
import DoNhietDo from "./pages/Reptile/PhuKien/DoNhietDo.jsx";
import DoTrangTri from "./pages/Reptile/PhuKien/DoTrangTri.jsx";
import HangTru from "./pages/Reptile/PhuKien/HangTru.jsx";
import ThucPhamBoSung from "./pages/Reptile/PhuKien/ThucPhamBoSung.jsx";
import TinTucIguana from "./pages/Reptile/tintuc/TinTucIguana.jsx";
import TinTucRongUc from "./pages/Reptile/tintuc/TinTucRongUc.jsx";
import TinTucTranCay from "./pages/Reptile/tintuc/TinTucTranCay.jsx";
import TinTucLG from "./pages/Reptile/tintuc/TinTucLG.jsx";
import PayPageReptile from "./pages/Reptile/PayPagereptile.jsx";

// Rodent
import RodentHomePage from "./pages/Rodent/RodentHomePage.jsx";
import ProductDiscountRodent from "./pages/Rodent/ProductDiscountRodent.jsx";
import ContactPageRodent from "./pages/Rodent/ContactPageRodent.jsx";
import ServicePageRodent from "./pages/Rodent/ServicePageRodent.jsx";
import TakeCarePageRodent from "./pages/Rodent/TakeCarePageRodent.jsx";
import CartPageRodent from "./pages/Rodent/CartPageRodent.jsx";
import ChamSocHamster from "./pages/Rodent/TinTuc/ChamSocHamster.jsx";
import GiongChuotLang from "./pages/Rodent/TinTuc/GiongChuotLang.jsx";
import CheDoAnCuaTho from "./pages/Rodent/TinTuc/CheDoAnCuaTho.jsx";
import BiQuyetNuoiNhim from "./pages/Rodent/TinTuc/BiQuyetNuoiNhim.jsx";
import PayPageRodent from "./pages/Rodent/PayPageRodent.jsx";

//SugarGlider
import SugarGliderHomePage from "./pages/SugarGlider/SugarGliderHomePage.jsx";
import ProductDiscountSugar from "./pages/SugarGlider/ProductDiscountSugar.jsx";
import ContactPageSugar from "./pages/SugarGlider/ContactPageSugar.jsx";
import TakeCarePageSugar from "./pages/SugarGlider/TakeCarePageSugar.jsx";
import ServicePageSugar from "./pages/SugarGlider/ServicePageSugar.jsx";
import CartPageSugar from "./pages/SugarGlider/CartPageSugar.jsx";
import AllSugarGlider from "./pages/SugarGlider/AllSugarGlider.jsx";
import BiQuyetChamSoc from "./pages/SugarGlider/TinTuc/BiQuyetChamSoc.jsx";
import CacDongSocBay from "./pages/SugarGlider/TinTuc/CacDongSocBay.jsx";
import SocBayNormal from "./pages/SugarGlider/TinTuc/SocBayNormal.jsx";
import SocBayWhiteFace from "./pages/SugarGlider/TinTuc/SocBayWhiteFace.jsx";
import SocBayPlatinum from "./pages/SugarGlider/TinTuc/SocBayPlatinum.jsx";
import SocBayLeucy from "./pages/SugarGlider/TinTuc/SocBayLeucy.jsx";
import SocBayCreamino from "./pages/SugarGlider/TinTuc/SocBayCreamino.jsx";
import SocBayMosaic from "./pages/SugarGlider/TinTuc/SocBayMosaic.jsx";
import ThucAn from "./pages/SugarGlider/PhuKien/ThucAn.jsx";
import DoChoi from "./pages/SugarGlider/PhuKien/DoChoi.jsx";
import TuiNgu from "./pages/SugarGlider/PhuKien/TuiNgu.jsx";
import DinhDuong from "./pages/SugarGlider/PhuKien/DinhDuong.jsx";
import Chuong from "./pages/SugarGlider/PhuKien/Chuong.jsx";
import PayPageSugar from "./pages/SugarGlider/PayPageSugar.jsx";

//Winger
import WingerHomePage from "./pages/Winger/WingerHomePage.jsx";
import ProductDiscountWinger from "./pages/Winger/ProductDiscountWinger.jsx";
import ContactPageWinger from "./pages/Winger/ContactPageWinger.jsx";
import TakeCarePageWinger from "./pages/Winger/TakeCarePageWinger.jsx";
import ServicePageWinger from "./pages/Winger/ServicePageWinger.jsx";
import CartPageWinger from "./pages/Winger/CartPageWinger.jsx";
import AllRodent from "./pages/Rodent/AllRodent.jsx";
import ThucAnRodent from "./pages/Rodent/PhuKien/ThucAnRodent.jsx";
import ChuongRodent from "./pages/Rodent/PhuKien/ChuongRodent.jsx";
import DinhDuongRodent from "./pages/Rodent/PhuKien/DinhDuongRodent.jsx";
import DoChoiRodent from "./pages/Rodent/PhuKien/DoChoiRodent.jsx";
import ThucAnChoCho from "./pages/PhuKien/ThucAnChoCho.jsx";
import VeSinhChoCho from "./pages/PhuKien/VeSinhChoCho.jsx";
import PhuKienChoCho from "./pages/PhuKien/PhuKienChoCho.jsx";
import ThuocMenChoCho from "./pages/PhuKien/ThuocMenChoCho.jsx";
import BiQuyetNuoiVet from "./pages/Winger/TinTuc/BiQuyetNuoiVet.jsx";
import GiongVet from "./pages/Winger/TinTuc/GiongVet.jsx";
import PhuKienCanThiet from "./pages/Winger/TinTuc/PhuKienCanThiet.jsx";
import CheDoAnUong from "./pages/Winger/TinTuc/CheDoAnUong.jsx";
import PhuKienSocBay from "./pages/SugarGlider/TinTuc/PhuKienSocBay.jsx";
import CheDoAnUongSocBay from "./pages/SugarGlider/TinTuc/CheDoAnUongSocBay.jsx";
import LamQuenVaThuanSoc from "./pages/SugarGlider/TinTuc/LamQuenVaThuanSoc.jsx";
import PhuKienChoMeo from "./pages/PhuKien/PhuKienChoMeo.jsx";
import ThucAnChoMeo from "./pages/PhuKien/ThucAnChoMeo.jsx";
import VeSinhChoMeo from "./pages/PhuKien/VeSinhChoMeo.jsx";
import ThuocMenChoMeo from "./pages/PhuKien/ThuocMenChoMeo.jsx";
import DoChoiChimVet from "./pages/Winger/PhuKien/DoChoi.jsx";
import ThuocMen from "./pages/Winger/PhuKien/ThuocMen.jsx";
import ChuongChimVet from "./pages/Winger/PhuKien/Chuong.jsx";
import ThucAnChimVet from "./pages/Winger/PhuKien/ThucAn.jsx";
import PayPageWinger from "./pages/Winger/PayPageWinger.jsx";

//Admin
import AdminHomePage from "./pages/Admin/pages/AdminHomePage.jsx";
import QuanLyNguoiDung from "./pages/Admin/pages/QuanLyNguoiDung.jsx";
import BaoCaoThongKe from "./pages/Admin/pages/BaoCaoThongKe.jsx";
import DanhSachDonHang from "./pages/Admin/pages/DanhSachDonHang.jsx";
import ThongKeDoanhThu from "./pages/Admin/pages/ThongKeDoanhThu.jsx";
import ChiTietTaiKhoan from "./pages/Admin/pages/ChiTietTaiKhoan.jsx";
import ThemSanPhamChoCho from "./pages/Admin/pages/ChoMeo/ThemSanPhamChoCho.jsx";
import ThemSanPhamChoMeo from "./pages/Admin/pages/ChoMeo/ThemSanPhamChoMeo.jsx";
import ThemThuCungBoSat from "./pages/Admin/pages/BoSat/ThemThuCungBoSat.jsx";
import ThemPhuKienBosat from "./pages/Admin/pages/BoSat/ThemPhuKienBosat.jsx";
import ThemThuCungGamNham from "./pages/Admin/pages/GamNham/ThemThuCungGamNham.jsx";
import ThemPhuKienGamNham from "./pages/Admin/pages/GamNham/ThemPhuKienGamNham.jsx";
import ThemPhuKienSocBay from "./pages/Admin/pages/SocBay/ThemPhuKienSocBay.jsx";
import ThemThuCungSocBay from "./pages/Admin/pages/SocBay/ThemThuCungSocBay.jsx";
import ThemThuCungChimVet from "./pages/Admin/pages/ChimVet/ThemThuCungChimVet.jsx";
import ThemPhuKienChimVet from "./pages/Admin/pages/ChimVet/ThemPhuKienChimVet.jsx";
import DatLich from "./pages/Admin/pages/DatLich.jsx";
import ChinhSuaThongTin from "./pages/Admin/pages/ChinhSuaThongTin.jsx";
import DatLichChamHoReptile from "./pages/Reptile/DatLichChamHoReptile.jsx";
import DatLichVeSinh from "./pages/Reptile/DatLichVeSinh.jsx";
import BookTakeCarePage from "./pages/BookTakeCarePage.jsx";
import BookTakeCareLuxuryPage from "./pages/BookTakeCareLuxuryPage.jsx";
import DatLichChamHoRodent from "./pages/Rodent/DatLichChamHoRodent.jsx";
import DatLichVeSinhRodent from "./pages/Rodent/DatLichVeSinhRodent.jsx";
import DatLichChamHoSugar from "./pages/SugarGlider/DatLichChamHoSugar.jsx";
import DatLichVeSinhSugar from "./pages/SugarGlider/DatLichVeSinhSugar.jsx";
import DatLichChamHoChimVet from "./pages/Winger/DatLichChamHoChimVet.jsx";
import DatLichVeSinhChimVet from "./pages/Winger/DatLichVeSinhChimVet.jsx";

// Danh Mục Thú Cưng
import DanhMucBoSat from "./pages/Admin/pages/DanhMucSanPham/BoSat/DanhMucBoSat.jsx";
import DanhMucChimVet from "./pages/Admin/pages/DanhMucSanPham/ChimVet/DanhMucChimVet.jsx";
import DanhMucGamNham from "./pages/Admin/pages/DanhMucSanPham/GamNham/DanhMucGamNham.jsx";
import DanhMucSocBay from "./pages/Admin/pages/DanhMucSanPham/Socbay/DanhMucSocBay.jsx";

//Danh Mục Phụ Kiện
import DanhMucPhuKienBoSat from "./pages/Admin/pages/DanhMucSanPham/BoSat/DanhMucPhuKienBoSat.jsx";
import DanhMucPhuKienChimVet from "./pages/Admin/pages/DanhMucSanPham/ChimVet/DanhMucPhuKienChimVet.jsx";
import DanhMucPhuKienGamNham from "./pages/Admin/pages/DanhMucSanPham/GamNham/DanhMucPhuKienGamNham.jsx";
import DanhMucPhuKienSocBay from "./pages/Admin/pages/DanhMucSanPham/Socbay/DanhMucPhuKienSocBay.jsx";
import DanhMucChoMeo from "./pages/Admin/pages/DanhMucSanPham/DanhMucChoMeo.jsx";
import DanhMucChoCho from "./pages/Admin/pages/DanhMucSanPham/DanhMucChoCho.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="mx-auto max-w-[390px] border border-gray-300"></div>
      <Routes>
        {/* Main PetShop */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/gio-hang" element={<CartPage />} />
        <Route path="/dang-nhap" element={<LoginPage />} />
        <Route path="/dang-ky" element={<RegisterPage />} />
        <Route path="/san-pham-cho-cho" element={<ProductDogPage />} />
        <Route path="/san-pham-cho-meo" element={<ProductCatPage />} />
        <Route path="/san-pham/:id" element={<ProductDetail />} />
        <Route path="/san-pham-khuyen-mai" element={<ProductDiscountPage />} />
        <Route path="/san-pham-moi-ve" element={<NewProductPage />} />
        <Route path="/lien-he" element={<ContactPage />} />
        <Route path="/dich-vu-1" element={<Service1Page />} />
        <Route path="/dich-vu-2" element={<Service2Page />} />
        <Route path="/thuc-an-cho-cho" element={<ThucAnChoCho />} />
        <Route path="/ve-sinh-cho-cho" element={<VeSinhChoCho />} />
        <Route path="/phu-kien-cho-cho" element={<PhuKienChoCho />} />
        <Route path="/thuoc-men-cho-cho" element={<ThuocMenChoCho />} />
        <Route path="/phu-kien-cho-meo" element={<PhuKienChoMeo />} />
        <Route path="/thuc-an-cho-meo" element={<ThucAnChoMeo />} />
        <Route path="/ve-sinh-cho-meo" element={<VeSinhChoMeo />} />
        <Route path="/thuoc-men-cho-meo" element={<ThuocMenChoMeo />} />
        <Route path="/thanh-toan" element={<PayPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        {/* Reptile Page */}
        <Route path="/san-pham-bo-sat" element={<ReptileHomePage />} />
        <Route
          path="/san-pham-bo-sat-khuyen-mai"
          element={<ProductDiscountReptile />}
        />
        <Route path="/lien-he-bo-sat" element={<ContactPageReptile />} />
        <Route path="/dich-vu-bo-sat" element={<ServicePageReptile />} />
        <Route path="/cham-soc-bo-sat" element={<TakeCarePageReptile />} />
        <Route path="/gio-hang-bo-sat" element={<CartReptilePage />} />
        <Route path="/danh-muc-ran" element={<DanhMucRan />} />
        <Route path="/danh-muc-tran" element={<DanhMucTran />} />
        <Route path="/danh-muc-than-lan" element={<DanhMucThanLan />} />
        <Route path="/danh-muc-rua" element={<DanhMucRua />} />
        <Route path="/danh-muc-chan-khop" element={<DanhMucChanKhop />} />
        <Route path="/danh-muc-ky-da" element={<DanhMucKyDa />} />
        <Route path="/danh-muc-luong-cu" element={<DanhMucLuongCu />} />
        <Route path="/danh-muc-rong" element={<DanhMucRong />} />
        <Route path="/danh-muc-tac-ke" element={<DanhMucTacKe />} />
        <Route path="/danh-muc-rua-nuoc" element={<DanhMucRuaNuoc />} />
        <Route path="/chen-nuoc" element={<ChenNuoc />} />
        <Route path="/den-suoi" element={<DenSuoi />} />
        <Route path="/tank-nhua" element={<TankNhua />} />
        <Route path="/tank-kinh" element={<TankKinh />} />
        <Route path="/tank-mica" element={<TankMica />} />
        <Route path="/tank-acrylic" element={<TankAcrylic />} />
        <Route path="/do-nhiet-do" element={<DoNhietDo />} />
        <Route path="/do-trang-tri" element={<DoTrangTri />} />
        <Route path="/hang-tru" element={<HangTru />} />
        <Route path="/thuc-pham-bo-sung" element={<ThucPhamBoSung />} />
        <Route path="/tin-tuc-iguana" element={<TinTucIguana />} />
        <Route path="/tin-tuc-rong-uc" element={<TinTucRongUc />} />
        <Route path="/tin-tuc-tran-cay" element={<TinTucTranCay />} />
        <Route path="/tin-tuc-lg" element={<TinTucLG />} />
        <Route path="/thanh-toan-bo-sat" element={<PayPageReptile />} />

        {/* Rodent Page */}
        <Route path="/san-pham-gam-nham" element={<RodentHomePage />} />
        <Route
          path="/san-pham-gam-nham-khuyen-mai"
          element={<ProductDiscountRodent />}
        />
        <Route path="/lien-he-gam-nham" element={<ContactPageRodent />} />
        <Route path="/dich-vu-gam-nham" element={<ServicePageRodent />} />
        <Route path="/cham-soc-gam-nham" element={<TakeCarePageRodent />} />
        <Route path="/gio-hang-gam-nham" element={<CartPageRodent />} />
        <Route path="/cham-soc-hamster" element={<ChamSocHamster />} />
        <Route path="/giong-chuot-lang" element={<GiongChuotLang />} />
        <Route path="/che-do-an-cua-tho" element={<CheDoAnCuaTho />} />
        <Route path="/bi-quyet-nuoi-nhim" element={<BiQuyetNuoiNhim />} />
        <Route path="/tat-ca-gam-nham" element={<AllRodent />} />
        <Route path="/thuc-an-gam-nham" element={<ThucAnRodent />} />
        <Route path="/chuong-gam-nham" element={<ChuongRodent />} />
        <Route path="/dinh-duong-gam-nham" element={<DinhDuongRodent />} />
        <Route path="/do-choi-gam-nham" element={<DoChoiRodent />} />
        <Route path="/thanh-toan-gam-nham" element={<PayPageRodent />} />

        {/* Sugar Glider Page */}
        <Route path="/san-pham-soc-bay" element={<SugarGliderHomePage />} />
        <Route
          path="/san-pham-soc-bay-khuyen-mai"
          element={<ProductDiscountSugar />}
        />
        <Route path="/lien-he-soc-bay" element={<ContactPageSugar />} />
        <Route path="/cham-soc-soc-bay" element={<TakeCarePageSugar />} />
        <Route path="/dich-vu-soc-bay" element={<ServicePageSugar />} />
        <Route path="/gio-hang-soc-bay" element={<CartPageSugar />} />
        <Route path="/tat-ca-soc-bay" element={<AllSugarGlider />} />
        <Route path="/bi-quyet-cham-soc" element={<BiQuyetChamSoc />} />
        <Route path="/tin-tuc-soc-bay" element={<CacDongSocBay />} />
        <Route path="/soc-bay-normal" element={<SocBayNormal />} />
        <Route path="/soc-bay-whiteface" element={<SocBayWhiteFace />} />
        <Route path="/soc-bay-platinum" element={<SocBayPlatinum />} />
        <Route path="/soc-bay-leucy" element={<SocBayLeucy />} />
        <Route path="/soc-bay-creamino" element={<SocBayCreamino />} />
        <Route path="/soc-bay-mosaic" element={<SocBayMosaic />} />
        <Route path="/thuc-an-cho-soc" element={<ThucAn />} />
        <Route path="/tui-ngu-cho-soc" element={<TuiNgu />} />
        <Route path="/chuong-cho-soc" element={<Chuong />} />
        <Route path="/dinh-duong-cho-soc" element={<DinhDuong />} />
        <Route path="/do-choi-cho-soc" element={<DoChoi />} />
        <Route
          path="/tin-tuc-phu-kien-cho-soc-bay"
          element={<PhuKienSocBay />}
        />
        <Route path="/tin-tuc-che-do-an-uong" element={<CheDoAnUongSocBay />} />
        <Route path="/tin-tuc-thuan-soc" element={<LamQuenVaThuanSoc />} />
        <Route path="/thanh-toan-soc-bay" element={<PayPageSugar />} />

        {/* Winger Page */}
        <Route path="/san-pham-chim-vet" element={<WingerHomePage />} />
        <Route
          path="/san-pham-chim-vet-khuyen-mai"
          element={<ProductDiscountWinger />}
        />
        <Route path="/lien-he-chim-vet" element={<ContactPageWinger />} />
        <Route path="/cham-soc-chim-vet" element={<TakeCarePageWinger />} />
        <Route path="/dich-vu-chim-vet" element={<ServicePageWinger />} />
        <Route path="/gio-hang-chim-vet" element={<CartPageWinger />} />
        <Route path="/bi-quyet-cham-chim-vet" element={<BiQuyetNuoiVet />} />
        <Route path="/giong-vet-pho-bien" element={<GiongVet />} />
        <Route path="/phu-kien-can-thiet" element={<PhuKienCanThiet />} />
        <Route path="/che-do-an" element={<CheDoAnUong />} />
        <Route path="/thuc-an-chim-vet" element={<ThucAnChimVet />} />
        <Route path="/thuoc-men-chim-vet" element={<ThuocMen />} />
        <Route path="/chuong-nuoi-chim-vet" element={<ChuongChimVet />} />
        <Route path="/do-choi-chim-vet" element={<DoChoiChimVet />} />
        <Route path="/thanh-toan-chim-vet" element={<PayPageWinger />} />

        {/* Admin */}
        <Route path="/Admin" element={<AdminHomePage />} />
        <Route path="/Admin/quan-ly-nguoi-dung" element={<QuanLyNguoiDung />} />
        <Route path="/Admin/bao-cao-thong-ke" element={<BaoCaoThongKe />} />
        <Route path="/Admin/danh-sach-don-hang" element={<DanhSachDonHang />} />
        <Route path="/Admin/thong-ke-doanh-thu" element={<ThongKeDoanhThu />} />
        <Route path="/Admin/chi-tiet-tai-khoan" element={<ChiTietTaiKhoan />} />
        <Route
          path="/Admin/them-san-pham-cho-cho"
          element={<ThemSanPhamChoCho />}
        />
        <Route
          path="/Admin/them-san-pham-cho-meo"
          element={<ThemSanPhamChoMeo />}
        />
        <Route
          path="/Admin/them-thu-cung-bo-sat"
          element={<ThemThuCungBoSat />}
        />
        <Route
          path="/Admin/them-phu-kien-bo-sat"
          element={<ThemPhuKienBosat />}
        />
        <Route
          path="/Admin/them-thu-cung-gam-nham"
          element={<ThemThuCungGamNham />}
        />
        <Route
          path="/Admin/them-phu-kien-gam-nham"
          element={<ThemPhuKienGamNham />}
        />
        <Route
          path="/Admin/them-phu-kien-soc-bay"
          element={<ThemPhuKienSocBay />}
        />
        <Route
          path="/Admin/them-thu-cung-soc-bay"
          element={<ThemThuCungSocBay />}
        />
        <Route
          path="/Admin/them-thu-cung-chim-vet"
          element={<ThemThuCungChimVet />}
        />
        <Route
          path="/Admin/them-phu-kien-chim-vet"
          element={<ThemPhuKienChimVet />}
        />
        <Route path="/Admin/dat-lich" element={<DatLich />} />
        <Route
          path="/Admin/chinh-sua-thong-tin"
          element={<ChinhSuaThongTin />}
        />
        <Route
          path="/Admin/dat-lich-cham-ho-bo-sat"
          element={<DatLichChamHoReptile />}
        />
        <Route
          path="/Admin/dat-lich-ve-sinh-bo-sat"
          element={<DatLichVeSinh />}
        />
        <Route
          path="/Admin/dat-lich-ve-sinh-cho-meo"
          element={<BookTakeCarePage />}
        />
        <Route
          path="/Admin/dat-lich-cham-ho-cho-meo"
          element={<BookTakeCareLuxuryPage />}
        />
        <Route
          path="/Admin/dat-lich-cham-ho-gam-nham"
          element={<DatLichChamHoRodent />}
        />
        <Route
          path="/Admin/dat-lich-ve-sinh-gam-nham"
          element={<DatLichVeSinhRodent />}
        />
        <Route
          path="/Admin/dat-lich-cham-ho-soc-bay"
          element={<DatLichChamHoSugar />}
        />
        <Route
          path="/Admin/dat-lich-ve-sinh-soc-bay"
          element={<DatLichVeSinhSugar />}
        />
        <Route
          path="/Admin/dat-lich-cham-ho-chim-vet"
          element={<DatLichChamHoChimVet />}
        />
        <Route
          path="/Admin/dat-lich-ve-sinh-chim-vet"
          element={<DatLichVeSinhChimVet />}
        />

        {/* Danh mục thú cưng */}
        <Route path="/Admin/danh-muc-bo-sat" element={<DanhMucBoSat />} />
        <Route path="/Admin/danh-muc-chim-vet" element={<DanhMucChimVet />} />
        <Route path="/Admin/danh-muc-gam-nham" element={<DanhMucGamNham />} />
        <Route path="/Admin/danh-muc-soc-bay" element={<DanhMucSocBay />} />
        <Route path="/Admin/danh-muc-cho-meo" element={<DanhMucChoMeo />} />
        <Route path="/Admin/danh-muc-cho-cho" element={<DanhMucChoCho />} />

        {/* Danh mục phụ kiện */}
        <Route
          path="/Admin/danh-muc-phu-kien-bo-sat"
          element={<DanhMucPhuKienBoSat />}
        />
        <Route
          path="/Admin/danh-muc-phu-kien-chim-vet"
          element={<DanhMucPhuKienChimVet />}
        />
        <Route
          path="/Admin/danh-muc-phu-kien-gam-nham"
          element={<DanhMucPhuKienGamNham />}
        />
        <Route
          path="/Admin/danh-muc-phu-kien-soc-bay"
          element={<DanhMucPhuKienSocBay />}
        />
        <Route path="/Admin/danh-muc-cho-meo" element={<DanhMucChoMeo />} />
        <Route path="/Admin/danh-muc-cho-cho" element={<DanhMucChoCho />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
