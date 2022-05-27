import { Link } from "react-router-dom";
import { showWatchList } from "../modules/watchListMenu";

function Nav(props){
  // Todo add props - watchlist counter?
    const menuButton = document.querySelector(".menu-button");
    const navMenu = document.querySelector(".navigation-menu");

    const toggleMenu = () => {
        menuButton.classList.toggle("active");
        navMenu.classList.toggle("open-menu");
    }

    const hideMenu = () => {
        menuButton.classList.remove("active");
        navMenu.classList.remove("open-menu");
    }

    return (
      <nav>
        <div className="outer-wrapper">
          <button className="menu-button" aria-hidden="true" onClick={toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>

          {/* //todo change to link */}
          <Link to="/home">
            <p>StockApp</p>
          </Link>
          <div className="navigation-menu">
            <div>
              <button class="button" onClick={showWatchList}>View Watchlist</button>
              <button class="button">Sign in</button>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Nav;