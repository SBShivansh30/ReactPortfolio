import React from 'react';

const Certifications = () => {
  return (
    <section className="certifications bg-white p-4">
      <h2 className="text-xl font-semibold mb-4">Certifications</h2>
      <ul className="list-disc ml-6">
        <li>Trading Strategies in Emerging Markets - 5-course Specialization - ISB MOOC (Coursera)</li>
        <li>Quantitative Trading & System building - Quantify Capital</li>
        <li>Technical Analysis Training</li>
        {/* Add more certifications as needed */}
      </ul>
    </section>
  );
};

export default Certifications;
