import React from 'react';

  const Header = () => {
    return (
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Du Lịch Việt Nam</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:underline">Trang Chủ</a></li>
              <li><a href="#" className="hover:underline">Đặt Phòng</a></li>
              <li><a href="#" className="hover:underline">Đặt Vé Máy Bay</a></li>
              <li><a href="#" className="hover:underline">Đặt Tour</a></li>
              <li><a href="#" className="hover:underline">Thông Tin Du Lịch</a></li>
              <li><a href="#" className="hover:underline">Liên Hệ</a></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">Đăng Nhập</a>
            <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">Đăng Ký</a>
          </div>
        </div>
      </header>
    );
  };

  export default Header;