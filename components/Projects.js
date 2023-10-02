import React from 'react';

const Projects = () => {
  return (
    <section className="projects bg-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <ul className="list-disc ml-6">
        <li>
          <h3 className="font-semibold">Portfolio Recommendation Engine - ME781</h3>
          <p>Built a UI where investors enter their current portfolio & get completely personalized stock-recommendation</p>
        </li>
        <li>
          <h3 className="font-semibold">Online Voting Portal - Blockchain and Cryptography - CS416</h3>
          <p>Worked on the intricacies & eradicated loopholes present in the currently prevailing voting systems</p>
        </li>
        <li>
          <h3 className="font-semibold">Taxi Fare Prediction - CS419</h3>
          <p>Implemented ML methods like batch & stochastic gradient descent, Ridge (L1) and LASSO (L2) regression</p>
        </li>
        {/* Add more project entries as needed */}
      </ul>
    </section>
  );
};

export default Projects;
