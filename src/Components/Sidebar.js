import React, { useState } from "react";
import { FaTh } from "react-icons/fa";
import { TfiViewListAlt } from "react-icons/tfi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const Sidebar = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };

  const menuitems = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/projects",
      name: "Projects",
      icon: <TfiViewListAlt />,
    },
    {
      path: "/paymentgateway",
      name: "PaymentGateway",
      icon: <RiSecurePaymentFill />,
    },
  ];
  return (
    <div>
      <Header toggle={toggle} /><br/>&nbsp;&nbsp;
      <div className="container">
        <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
          <div className="top_section">
            {/* <h1 style={{display:isOpen ?"block":"none"}} className="logo">Logo</h1> */}

            {/* <div style={{marginLeft:isOpen?"50px":"0px"}} className="bars">
            <FaBars onClick={toggle}/>
          </div> */}
          </div>
          {menuitems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
