import classes from './Header.module.css';
import lightLogo from '../../assets/img/star-wars-logo-light.png';
import darkLogo from '../../assets/img/star-wars-logo-dark.png';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../App'; 


const Header = (props) => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        ((theme === 'light') && (setTheme('dark'))) || ((theme === 'dark') && (setTheme('light')))
    };

    return (
        <div className={classes.headerContainer}>
            <div className={((theme === 'light') && (`${classes.header} ${classes.lightHeader}`)) || 
                ((theme === 'dark') && (`${classes.header} ${classes.darkHeader}`))}>
                <div className={classes.logo}>
                    {(theme === 'light') && <img src={lightLogo} />}
                    {(theme === 'dark') && <img src={darkLogo} />}
                </div>
                <div className={classes.menu}>
                    <div className={classes.item}>
                        {(theme === 'light') && <NavLink className={`${classes.link} ${classes.lightLink}`} to='/films'>Films</NavLink>}
                        {(theme === 'dark') && <NavLink className={`${classes.link} ${classes.darkLink}`} to='/films'>Films</NavLink>}
                        <div className={( ((theme === 'light') && (`${classes.line} ${classes.expanded} ${classes.lightLine}`)) 
                            || ((theme === 'dark') && (`${classes.line} ${classes.expanded} ${classes.darkLine}`)) )}></div>
                    </div>
                    <div className={classes.item}>
                        {(theme === 'light') && <NavLink className={`${classes.link} ${classes.lightLink}`} to='/people'>People</NavLink>}
                        {(theme === 'dark') && <NavLink className={`${classes.link} ${classes.darkLink}`} to='/people'>People</NavLink>}
                        <div className={( ((theme === 'light') && (`${classes.line} ${classes.expanded} ${classes.lightLine}`)) 
                            || ((theme === 'dark') && (`${classes.line} ${classes.expanded} ${classes.darkLine}`)) )}></div>
                    </div>
                    <div className={classes.item}>
                        {(theme === 'light') && <NavLink className={`${classes.link} ${classes.lightLink}`} to='/planets'>Planets</NavLink>}
                        {(theme === 'dark') && <NavLink className={`${classes.link} ${classes.darkLink}`} to='/planets'>Planets</NavLink>}
                        <div className={( ((theme === 'light') && (`${classes.line} ${classes.expanded} ${classes.lightLine}`)) 
                            || ((theme === 'dark') && (`${classes.line} ${classes.expanded} ${classes.darkLine}`)) )}></div>
                    </div>
                    <div className={classes.item}>
                        {(theme === 'light') && <NavLink className={`${classes.link} ${classes.lightLink}`} to='/species'>Species</NavLink>}
                        {(theme === 'dark') && <NavLink className={`${classes.link} ${classes.darkLink}`} to='/species'>Species</NavLink>}
                        <div className={( ((theme === 'light') && (`${classes.line} ${classes.expanded} ${classes.lightLine}`)) 
                            || ((theme === 'dark') && (`${classes.line} ${classes.expanded} ${classes.darkLine}`)) )}></div>
                    </div>
                    <div className={classes.item}>
                        {(theme === 'light') && <NavLink className={`${classes.link} ${classes.lightLink}`} to='/starships'>Starships</NavLink>}
                        {(theme === 'dark') && <NavLink className={`${classes.link} ${classes.darkLink}`} to='/starships'>Starships</NavLink>}
                        <div className={( ((theme === 'light') && (`${classes.line} ${classes.expanded} ${classes.lightLine}`)) 
                            || ((theme === 'dark') && (`${classes.line} ${classes.expanded} ${classes.darkLine}`)) )}></div>
                    </div>
                    <div className={classes.item}>
                        {(theme === 'light') && <NavLink className={`${classes.link} ${classes.lightLink}`} to='/vehicles'>Vehicles</NavLink>}
                        {(theme === 'dark') && <NavLink className={`${classes.link} ${classes.darkLink}`} to='/vehicles'>Vehicles</NavLink>}
                        <div className={( ((theme === 'light') && (`${classes.line} ${classes.expanded} ${classes.lightLine}`)) 
                            || ((theme === 'dark') && (`${classes.line} ${classes.expanded} ${classes.darkLine}`)) )}></div>
                    </div>
                </div>
                <div className={classes.themeSwitcher} onClick={() => {toggleTheme()}}>
                    {(theme === 'light') && <i class={`fa-solid fa-sun ${classes.icon} ${classes.lightIcon}`}></i>}
                    {(theme === 'dark') && <i class={`fa-solid fa-moon ${classes.icon} ${classes.darkIcon}`}></i>}
                </div>
            </div>
        </div>
    );
};

export default Header;