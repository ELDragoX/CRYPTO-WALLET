/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Wallet() {
  const location = useLocation();
  // console.log(location);
  const walletDetails = location.state;
  console.log(walletDetails)
  
  return (
    <div>
    {/* <Navbar /> */}
    <section className="wallet">
        <h2>Your Wallet</h2>
        <div className="wallet-info">
          <p><strong>Balance:</strong> 0.00 BTC</p>
          <p><strong>Address:</strong> Your Wallet Address</p>
        </div>
        <div className="wallet-actions">
        <Link to="/sendreceive" className="cta-button">Send BTC</Link>
          <a href="#" className="cta-button">Receive BTC</a>
        </div>
        <br></br>
        <a href="#" className="view-button">View</a>
      </section>
      </div>
  );
}

export default Wallet;

