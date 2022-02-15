import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from './mainNavigation.module.css'
import FavoritesContext from "../../store/favorites-context";

function MainNavigations () {
    const favoriteCtx = useContext(FavoritesContext)
    return (
    <header className= { classes.header }>
        <div className={classes.logo}>React Meetup</div>
        <nav>
            <ul>
                <li>
                    <Link to="/"> All Meetup</Link>
                </li>
                <li>
                    <Link to="/favorites"> Favorites
                        <span className={classes.badge}>
                            {favoriteCtx.totalFavorites}
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/new-meetup"> Add New Meetup</Link>
                </li>
            </ul>
        </nav>
    </header>)
}

export default MainNavigations;