import React from 'react';

const Leadership = () => {
  return (
    <section className="leadership bg-white p-4">
      <h2 className="text-xl font-semibold mb-4">Leadership</h2>
      <ul className="list-disc ml-6">
        <li>
          <h3 className="font-semibold">Algorithmic Trading IIT Bombay</h3>
          <p>Team Lead</p>
          <p>Generated returns of over 3400% for ETH, 2700% for XRP, 1700% for ADA (1.5 yr)</p>
          <p>Outperformed market by > 4x in back-testing & forward-testing periods with Sharpe > 2.5</p>
        </li>
        {/* Add more leadership entries as needed */}
      </ul>
    </section>
  );
};

export default Leadership;
