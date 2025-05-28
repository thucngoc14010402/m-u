import React, { useState, useEffect } from 'react';
  import axios from 'axios';

  const Tours = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8080/api/tours')
        .then(response => setTours(response.data))
        .catch(error => console.error('Lỗi khi lấy tour:', error));
    }, []);

    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Tour Du Lịch Nổi Bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tours.length > 0 ? (
              tours.map(tour => (
                <div key={tour.id} className="bg-white shadow-md p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                  <p className="mb-4">{tour.description}</p>
                  <p className="text-lg font-bold text-blue-600 mb-4">{tour.price.toLocaleString()} VND</p>
                  <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Đặt Ngay</a>
                </div>
              ))
            ) : (
              <p className="text-center col-span-3">Không có tour nào để hiển thị.</p>
            )}
          </div>
        </div>
      </section>
    );
  };

  export default Tours;