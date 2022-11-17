import React, { useEffect, useState } from "react";
import logo from "../assets/logo/logoHestia.png";
import logoHestiaMobil from "../assets/logo/logoHestiaMobil.png";


import user from "../assets/user.png";

import MenuItem from "./MenuItem";
import "../styles/sideMenu.css"

/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    iconClassName: "bi bi-speedometer2",
  },
  {
    name: "Admin",
    exact: true,
    // to: `/`,
    iconClassName: "bi bi-person",
    subMenus: [
      { name: "Afficher", to: "/admin/afficher", iconClassName: "bi bi-person-add"},
      { name: "Ajouter", to: "/admin/ajouter", iconClassName: "bi bi-people"},
    ],
  },
  { name: "users", to: `/users`, iconClassName: "bi bi-people" },
  { name: "Setting", to: `/setting`, iconClassName: "bi bi-gear" },
  { name: "LogOut", to: `/logout`, iconClassName: "bi bi-box-arrow-right" },
  
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

   props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        {
          !inactive ?
          <div className="logo">
            <img src={logo} alt="webscript" />
          </div>
        :
          <div className="logoMobile">
            <img src={logoHestiaMobil} alt="webscript" />
          </div>
        }
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i className="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i className="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>

      {/* <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>Othmane Hannoune</h5>
          <p>DEVELOPPER WEB</p>
        </div>
      </div> */}
    </div>
  );
};

export default SideMenu;
