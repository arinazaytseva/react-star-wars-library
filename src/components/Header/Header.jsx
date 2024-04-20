import classes from './Header.module.css';
import lightLogo from '../../assets/img/star-wars-logo-light.png';
import darkLogo from '../../assets/img/star-wars-logo-dark.png';
import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../App'; 


const Header = (props) => {
    const { theme, setTheme } = useContext(ThemeContext);

    const useIsHovered = (initialState) => {
        const [isHovered, setIsHovered] = useState(initialState);
        
        const handleMouseEnter = () => {
            setIsHovered(true);
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
        };

        return [isHovered, handleMouseEnter, handleMouseLeave];
    }

    const [isHoveredFilms, handleMouseEnterFilms, handleMouseLeaveFilms] = useIsHovered(false);
    const [isHoveredPeople, handleMouseEnterPeople, handleMouseLeavePeople] = useIsHovered(false);
    const [isHoveredPlanets, handleMouseEnterPlanets, handleMouseLeavePlanets] = useIsHovered(false);
    const [isHoveredSpecies, handleMouseEnterSpecies, handleMouseLeaveSpecies] = useIsHovered(false);
    const [isHoveredStarships, handleMouseEnterStarships, handleMouseLeaveStarships] = useIsHovered(false);
    const [isHoveredVehicles, handleMouseEnterVehicles, handleMouseLeaveVehicles] = useIsHovered(false);

    const toggleTheme = () => {
        ((theme === 'light') && (setTheme('dark'))) || ((theme === 'dark') && (setTheme('light')))
    };

    return (
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
            </div>
        </div>
    );
};

export default Header;