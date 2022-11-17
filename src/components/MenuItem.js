import React from "react";
import { NavLink, Link } from "react-router-dom";


const MenuItem = (props) => {
  const { name, subMenus, iconClassName, to, exact } = props;
  // const [expand, setExpand] = useState(false);

  return (
    <li onClick={props.onClick}>
      <Link
        // exact
        to={to}
        // onClick={() => {
        //   setExpand((e) => !e);
        // }}
        className={`menu-item`}
      >
        <div className="menu-icon">
          <i className={iconClassName}></i>
        </div>
        <span>{name}</span>
      </Link>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu`}>
          {subMenus.map((menu, index) => (
            <>
              {/* <div className="menu-icon">
                <i className={iconClassName}></i>
              </div> */}
              <li key={index}>
                <NavLink to={menu.to}>{menu.name}</NavLink>
              </li>
            </>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;
