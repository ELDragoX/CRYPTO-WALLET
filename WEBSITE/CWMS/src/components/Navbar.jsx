/* eslint-disable no-unused-vars */     
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
          <nav className="navbar" >
            <ul className="nav-links">
              <li><Link to="/dashboard">Home</Link></li>
              <li><Link to="/searchcrypto">Cryptocurrencies</Link></li>
              {/* <li><Link to="/buysell">Trade</Link></li> */}
              <li><Link to="/transactions">Transactions</Link></li>
              <li><Link to="/watchlist">Watchlist</Link></li>
              <li><Link to="/wallet">Wallet</Link></li>
            </ul>
          </nav>
            );
}

export default Navbar;

