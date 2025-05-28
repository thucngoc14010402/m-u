import React from 'react';

  const Services = () => {
    return (
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Dịch Vụ Nổi Bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Đặt Phòng Khách Sạn</h3>
              <p className="mb-4">Tìm và đặt phòng với giá tốt nhất, lọc theo tiện nghi.</p>
              <a href="#" className="text-blue-600 hover:underline">Xem Chi Tiết</a>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Đặt Vé Máy Bay</h3>
              <p className="mb-4">Tìm kiếm vé nhanh chóng, giá cạnh tranh.</p>
              <a href="#" className="text-blue-600 hover:underline">Xem Chi Tiết</a>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Đặt Tour Du Lịch</h3>
              <p className="mb-4">Tour trong nước và quốc tế với lịch trình chi tiết.</p>
              <a href="#" className="text-blue-600 hover:underline">Xem Chi Tiết</a>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Services;