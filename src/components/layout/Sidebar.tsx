import React from 'react';
import { Button } from '../ui/button';

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="navbar">
        <input type="checkbox" className="checkbox" id="click" hidden />

        <div className="sidebar">
          <label htmlFor="click">
            <div className="menu-icon">
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
            </div>
          </label>

          <ul className="social-icons-links">
            <li>
              <a href="#" className="social-list">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" className="social-list">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="social-list">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#" className="social-list">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>

          <div className="year">
            <p>2022</p>
          </div>

        </div>

        <nav className="navigation">
          <div className="navigation-header">
            <h1 className="navigation-heading">Grand Hotel</h1>
            <form className="navigation-search">
              <input type="text" placeholder="Search..." className="navigation-search-input" />
              <Button className="navigation-search-btn">
                <i className="fa fa-search"></i>
              </Button>
            </form>
          </div>

          <ul className="navigation-list">
            <li className="navigation-item">
              <a href="#" className="navigation-link">Home</a>
            </li>
            <li className="navigation-item">
              <a href="#" className="navigation-link">About Us</a>
            </li>
            <li className="navigation-item">
              <a href="#" className="navigation-link">Rooms</a>
            </li>
            <li className="navigation-item">
              <a href="#" className="navigation-link">Events</a>
            </li>
            <li className="navigation-item">
              <a href="#" className="navigation-link">Contact</a>
            </li>
          </ul>

          <div className="copyright">
            <p>&copy; 2022. Grand Hotel. All Rights Reserved</p>

          </div>
        </nav>
      </div>
    </>
  )
}

export default Sidebar;