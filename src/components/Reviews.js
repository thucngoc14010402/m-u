import React from 'react';

  const Reviews = () => {
    return (
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Đánh Giá Từ Khách Hàng</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <p className="italic mb-2">"Dịch vụ đặt tour rất chuyên nghiệp, hướng dẫn viên thân thiện!"</p>
              <p className="font-semibold">Nguyễn Văn A - 5 sao</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <p className="italic mb-2">"Đặt phòng nhanh chóng, giá cả hợp lý, sẽ quay lại!"</p>
              <p className="font-semibold">Trần Thị B - 4.5 sao</p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Reviews;