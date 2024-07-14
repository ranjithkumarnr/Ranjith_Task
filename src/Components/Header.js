import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { PiSignOutThin } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { FcStatistics } from "react-icons/fc";

const Header = ({ toggle }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <div>
      <header className="header">
        <h1 className="logo">Logo</h1>
        <FaBars onClick={toggle} className="bars" />
        <div className="demo" onClick={handleDropdownToggle}>
          Demo Constructors
          {dropdownVisible ? <FaCaretUp /> : <FaCaretDown />}
          {dropdownVisible && (
            <div className="dropdown-content">
              <a href="#item1"><CgProfile />Profile</a>
              <a href="#item2"><CiLock />Update Password</a>
              <a href="#item3"><IoIosHelpCircleOutline />Help</a>
              <a href="#item3"><PiSignOutThin />Sign out</a>
              <a href="#item4"><FcStatistics />(413/480)</a>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
