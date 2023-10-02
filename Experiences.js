import React from 'react';

const Experiences = () => {
  return (
    <section className="experiences bg-white p-4">
      <h2 className="text-xl font-semibold mb-4">Experiences</h2>
      <ul className="list-disc ml-6">
        <li>
          <h3 className="font-semibold">Trading Analyst - Equities</h3>
          <p>Barclays Investment Bank</p>
          <p>06/2022 - 08/2023, Mumbai</p>
          <p>Fully-Automated the post-trade performance & invoicing analysis of various ET products using Python, Pyspark, SQL and KDB+</p>
        </li>
        <li>
          <h3 className="font-semibold">Quantitative Strategist Intern - Derivatives</h3>
          <p>Stellar Alpha (MFT)</p>
          <p>03/2022 - 04/2022, Gurgaon</p>
          <p>Tested strategies for candle sizes (5M to 6H) in C# on BANKNIFTY</p>
        </li>
        <li>
          <h3 className="font-semibold">Credit Risk Analytics Intern</h3>
          <p>LendingKart</p>
          <p>11/2021 - 02/2022, Ahmedabad</p>
          <p>Analytical Model for quantifying Bounce and Delinquency rate</p>
        </li>
        <li>
          <h3 className="font-semibold">Research Scholar - NLP & Finance</h3>
          <p>Prof. Shantanu Dutta</p>
          <p>03/2020 - 05/2020, University of Ottawa, Canada</p>
          <p>Exploited BERT, LDA, CS model to quantify risk-exposure of companies</p>
        </li>
        <li>
          <h3 className="font-semibold">Data Science Intern</h3>
          <p>Reliance Industries Ltd.</p>
          <p>05/2020 - 06/2020, Mumbai</p>
          <p>Time Series Analysis: LSTM, ARIMA Model for crude oil forecasting</p>
        </li>
        {/* Add more experience entries as needed */}
      </ul>
    </section>
  );
};

export default Experiences;
