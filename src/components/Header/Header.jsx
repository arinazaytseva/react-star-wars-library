import classes from './Header.module.css';
import lightLogo from '../../assets/img/star-wars-logo-light.png';
import darkLogo from '../../assets/img/star-wars-logo-dark.png';
import { NavLink } from 'react-router-dom';
<<<<<<< HEAD
import { useContext } from 'react';
=======
import { useContext, useState } from 'react';
>>>>>>> 7ddb4fa88a7edfd256ef6169f1a98400c4f7a095
import { ThemeContext } from '../../App'; 


const Header = (props) => {
    const { theme, setTheme } = useContext(ThemeContext);
<<<<<<< HEAD
=======

    const useIsHovered = (initialState) => {
        const [isHovered, setIsHovered] = useState(initialState);
        
        const handleMouseEnter = () => {
            setIsHovered(true);
        };
>>>>>>> 7ddb4fa88a7edfd256ef6169f1a98400c4f7a095

    const toggleTheme = () => {
        ((theme === 'light') && (setTheme('dark'))) || ((theme === 'dark') && (setTheme('light')))
    };

    const toggleTheme = () => {
        ((theme === 'light') && (setTheme('dark'))) || ((theme === 'dark') && (setTheme('light')))
    };

    return (
<<<<<<< HEAD
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
=======
        <div className={((theme === 'light') && (`${classes.header} ${classes.lightHeader}`)) || 
            ((theme === 'dark') && (`${classes.header} ${classes.darkHeader}`))}>
            <div className={classes.logo}>
                {(theme === 'light') && <img src={lightLogo} />}
                {(theme === 'dark') && <img src={darkLogo} />}
            </div>
            <div className={classes.menu}>
                <div className={classes.item}>
                    <div 
                        className={classes.lineContainer} 
                        onMouseEnter={handleMouseEnterFilms} 
                        onMouseLeave={handleMouseLeaveFilms}>
                            {(theme === 'light') && <NavLink className={`${classes.link} ${classes.lightLink}`} to='/films'>Films</NavLink>}
                            {(theme === 'dark') && <NavLink className={`${classes.link} ${classes.darkLink}`} to='/films'>Films</NavLink>}
                        <div className={
                            isHoveredFilms 
                            ? ( ((theme === 'light') && (`${classes.line} ${classes.expanded} ${classes.lightLine}`)) 
                            || ((theme === 'dark') && (`${classes.line} ${classes.expanded} ${classes.darkLine}`)) )
                            : classes.line}></div>
                    </div>
                </div>
                <div>
                    <div 
                        className={classes.lineContainer} 
                        onMouseEnter={handleMouseEnterPeople} 
                        onMouseLeave={handleMouseLeavePeople}>
                            {(theme === 'light') && <NavLink className={`${classes.link} ${classes.lightLink}`} to='/people'>People</NavLink>}
                            {(theme === 'dark') && <NavLink className={`${classes.link} ${classes.darkLink}`} to='/people'>People</NavLink>}
                        <div className={
                            isHoveredPeople 
                            ? ( ((theme === 'light') && (`${classes.line} ${classes.expanded} ${classes.lightLine}`)) 
                            || ((theme === 'dark') && (`${classes.line} ${classes.expanded} ${classes.darkLine}`)) )
                            : classes.line}></div>
                    </div>
                </div>
                <div>
                    <div 
                        className={classes.lineContainer} 
                        onMouseEnter={handleMouseEnterPlanets} 
                        onMouseLeave={handleMouseLeavePlanets}>
                            {(theme === 'light') && <NavLink className={`${classes.link} ${classes.lightLink}`} to='/planets'>Planets</NavLink>}
                            {(theme === 'dark') && <NavLink className={`${classes.link} ${classes.darkLink}`} to='/planets'>Planets</NavLink>}
                        <div className={
                            isHoveredPlanets 
                            ? ( ((theme === 'light') && (`${classes.line} ${classes.expanded} ${classes.lightLine}`)) 
                            || ((theme === 'dark') && (`${classes.line} ${classes.expanded} ${classes.darkLine}`)) )
                            : classes.line}></div>
                    </div>
                </div>
                <div>
                    <div 
                        className={classes.lineContainer} 
                        onMouseEnter={handleMouseEnterSpecies} 
                        onMouseLeave={handleMouseLeaveSpecies}>
                            {(theme === 'light') && <NavLink className={`${classes.link} ${classes.lightLink}`} to='/species'>Species</NavLink>}
                            {(theme === 'dark') && <NavLink className={`${classes.link} ${classes.darkLink}`} to='/species'>Species</NavLink>}
                        <div className={
                            isHoveredSpecies 
                            ? ( ((theme === 'light') && (`${classes.line} ${classes.expanded} ${classes.lightLine}`)) 
                            || ((theme === 'dark') && (`${classes.line} ${classes.expanded} ${classes.darkLine}`)) )
                            : classes.line}></div>
                    </div>
                </div>
                <div>
                    <div 
                        className={classes.lineContainer} 
                        onMouseEnter={handleMouseEnterStarships} 
                        onMouseLeave={handleMouseLeaveStarships}>
                            {(theme === 'light') && <NavLink className={`${classes.link} ${classes.lightLink}`} to='/starships'>Starships</NavLink>}
                            {(theme === 'dark') && <NavLink className={`${classes.link} ${classes.darkLink}`} to='/starships'>Starships</NavLink>}
                        <div className={
                            isHoveredStarships 
                            ? ( ((theme === 'light') && (`${classes.line} ${classes.expanded} ${classes.lightLine}`)) 
                            || ((theme === 'dark') && (`${classes.line} ${classes.expanded} ${classes.darkLine}`)) )
                            : classes.line}></div>
                    </div>
                </div>
                <div>
                    <div 
                        className={classes.lineContainer} 
                        onMouseEnter={handleMouseEnterVehicles} 
                        onMouseLeave={handleMouseLeaveVehicles}>
                            {(theme === 'light') && <NavLink className={`${classes.link} ${classes.lightLink}`} to='/vehicles'>Vehicles</NavLink>}
                            {(theme === 'dark') && <NavLink className={`${classes.link} ${classes.darkLink}`} to='/vehicles'>Vehicles</NavLink>}
                        <div className={
                            isHoveredVehicles 
                            ? ( ((theme === 'light') && (`${classes.line} ${classes.expanded} ${classes.lightLine}`)) 
                            || ((theme === 'dark') && (`${classes.line} ${classes.expanded} ${classes.darkLine}`)) )
                            : classes.line}></div>
                    </div>
                </div>
            </div>
            <div className={classes.themeSwitcher} onClick={() => {toggleTheme()}}>
                {(theme === 'light') && <i class={`fa-solid fa-sun`}></i>}
                {(theme === 'dark') && <i class={`fa-solid fa-moon ${classes.darkIcon} ${classes.icon}`}></i>}
>>>>>>> 7ddb4fa88a7edfd256ef6169f1a98400c4f7a095
            </div>
        </div>
    );
};

export default Header;