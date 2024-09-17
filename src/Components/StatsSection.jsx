import React from 'react';

const StatsSection = () => {
  return (
    <div className="bg-teal-800 text-white py-12">
      <div className="container mx-auto flex justify-around text-center">
        <div>
          <h2 className="text-4xl font-bold">10000+</h2>
          <p className="mt-2">Happy Clients</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">100%</h2>
          <p className="mt-2">Satisfaction</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">15+</h2>
          <p className="mt-2">Years Experience</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;


