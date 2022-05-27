import { Link } from "react-router-dom";
import { showWatchList } from "../modules/watchListMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

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
          {/* <button className="menu-button" aria-hidden="true" onClick={toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button> */}

          <Link to="/home">
            <p><FontAwesomeIcon icon={faCoins}/></p>
          </Link>
          <div className="navigation-menu">
            <div>
              <button className="button" onClick={showWatchList}>View Watchlist</button>
              {/* <button className="button">Sign in</button> */}
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Nav;