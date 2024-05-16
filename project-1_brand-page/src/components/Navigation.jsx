const Navigation = () => {
  return (
    <div>
      <header>
        <nav className="container">
          {/* navbar logo section  */}
          <div className="logo">
            <img src="../public/images/brand_logo.png" alt="logo" />
          </div>

          <a className="menu_btn" href="#">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </a>
          {/* menu section */}
          <div className="menu__nav">

            <ul>
              <li href="#">Menu</li>
              <li href="#">Location</li>
              <li href="#">About</li>
              <li href="#">Contact</li>
            </ul>

            {/* button section */}
            <button>Login</button>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navigation;
