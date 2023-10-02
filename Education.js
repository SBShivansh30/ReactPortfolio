import React from 'react';

const Education = () => {
  return (
    <section className="education bg-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      <ul className="list-disc ml-6">
        <li>
          <h3 className="font-semibold">BTech. in Mechanical Engineering</h3>
          <p>Indian Institute of Technology Bombay (IITB)</p>
          <p>07/2018 - 05/2022, CPI: 8.7</p>
        </li>
        <li>
          <h3 className="font-semibold">Minor in Computer Science and Engineering</h3>
          <p>Indian Institute of Technology Bombay (IITB)</p>
          <p>07/2019 - 05/2022</p>
        </li>
        {/* Add more education entries as needed */}
      </ul>
    </section>
  );
};

export default Education;
