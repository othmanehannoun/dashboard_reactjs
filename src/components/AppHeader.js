import React from "react";
import { Link } from "react-router-dom";
import "../styles/headerApp.css";

export default function AppHeader() {
//   const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="headerApp">
      <div className="wrapper">
        {/* <div className="search">
          
        </div> */}
        <div className="items">
          
          {/* <div className="item">
                <i class="bi bi-bell"></i>
            <div className="counter">1</div>
          </div> */}

            <div className="item">
                <li className="nav-item dropdown d-flex align-items-center">
                    <Link className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" to={"#"}>
                        <i className="bi bi-bell"></i>
                        <div className="counter">1</div>
                    </Link>

                    <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                        <li className="mb-2 notificationItem">
                            <Link   to={"#"} className="dropdown-item border-radius-md" >
                                <div className="d-flex py-1">
                                <div className="my-auto">
                                    {/* <img src="./assets/img/team-2.jpg" className="avatar avatar-sm  me-3 "> */}
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                    <h6 className="text-sm font-weight-normal mb-1">
                                    <span className="font-weight-bold">New message from Laur</span> 
                                    </h6>
                                    <p className="text-xs text-secondary mb-0 notifDate">
                                    <i className="bi bi-clock-fill"></i>
                                    13 minutes ago
                                    </p>
                                </div>
                                </div>
                            </Link>
                        </li>
                        <li className="mb-2 notificationItem">
                            <Link  to={"#"} className="dropdown-item border-radius-md">
                                <div className="d-flex py-1">
                                <div className="my-auto">
                                    {/* <img src="./assets/img/small-logos/logo-spotify.svg" className="avatar avatar-sm bg-gradient-dark  me-3 "> */}
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                    <h6 className="text-sm font-weight-normal mb-1">
                                    <span className="font-weight-bold">New album by Travis Scott</span> 
                                    </h6>
                                    <p className="text-xs text-secondary mb-0 notifDate">
                                    <i className="bi bi-clock-fill"></i>
                                    1 day
                                    </p>
                                </div>
                                </div>
                            </Link>
                        </li>
                        <li className="mb-2 notificationItem">
                            <Link  to={"#"} className="dropdown-item border-radius-md" >
                                <div className="d-flex py-1">
                                <div className="my-auto">
                                    {/* <img src="./assets/img/small-logos/logo-spotify.svg" className="avatar avatar-sm bg-gradient-dark  me-3 "> */}
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                    <h6 className="text-sm font-weight-normal mb-1">
                                    <span className="font-weight-bold">New album by Travis Scott</span> 
                                    </h6>
                                    <p className="text-xs text-secondary mb-0 notifDate">
                                    <i className="bi bi-clock-fill"></i>
                                    1 day
                                    </p>
                                </div>
                                </div>
                            </Link>
                        </li>
                        
                    </ul>
                </li>
            </div>
          
            <div className="item">
                <div className="navbar-profile">
                    <img className="avatar" src='https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt="profile" />
                    <p className="mb-0 d-none d-sm-block navbar-profile-name">Othmane hn</p>
                    <i className="bi bi-caret-down"></i>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
