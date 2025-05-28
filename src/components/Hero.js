import React from 'react';

  const Hero = () => {
    return (
      <section className="bg-blue-100 py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Khám Phá Việt Nam</h2>
          <p className="text-lg mb-6">Hành trình khám phá vẻ đẹp thiên nhiên và văn hóa độc đáo</p>
          <div className="flex justify-center">
            <input type="text" placeholder="Tìm kiếm điểm đến..." className="border p-2 rounded-l w-64" />
            <button className="bg-blue-600 text-white p-2 rounded-r hover:bg-blue-700">Tìm</button>
          </div>
        </div>
      </section>
    );
  };

  export default Hero;