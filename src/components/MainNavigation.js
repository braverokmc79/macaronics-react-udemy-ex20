import { NavLink, useMatch } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li><NavLink to="/" className={useMatch("/") ?classes.active :undefined  }  >Home</NavLink></li>
                <li><NavLink to="/products" className={useMatch("/products") ?classes.active :undefined} >Products</NavLink></li>                
            </ul>
        </nav>
    </header>
}

export default MainNavigation;
