import {NavLink} from "react-router-dom";
import css from './Header.module.css';

const Header = () => {
    return(
        <header className={css.Header}>
            <NavLink to={'/'}>home page</NavLink>
            <NavLink to={'users'}>users page</NavLink>
            <NavLink to={'posts'}>posts page</NavLink>
        </header>
    );
}

export default Header;