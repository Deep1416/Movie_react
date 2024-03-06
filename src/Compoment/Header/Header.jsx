import React from "react";
import logo from "../../assets/image/logo.svg"
function Header() {
  return (
    <div>
      <Header>
        <nav>
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <h3>UNLIMITED TV SHOWS & MOVIES</h3>
            <div>
              <button>JOIN NOW</button>
            </div>
            <div>
              <button>SIGN IN</button>
            </div>
          </div>
        </nav>
      </Header>
    </div>
  );
}

export default Header;
