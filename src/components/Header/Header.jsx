import classes from './Header.module.css';
import lightLogo from '../../assets/img/star-wars-logo-light.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const Header = (props) => {
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

    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                <img src={lightLogo} />
            </div>
            <div className={classes.menu}>
                <div className={classes.item}>
                    <div 
                        className={classes.lineContainer} 
                        onMouseEnter={handleMouseEnterFilms} 
                        onMouseLeave={handleMouseLeaveFilms}>
                        <NavLink className={classes.link} to='/films'>Films</NavLink>
                        <div className={isHoveredFilms ? `${classes.line} ${classes.expanded}` : classes.line}></div>
                    </div>
                </div>
                <div>
                    <div 
                        className={classes.lineContainer} 
                        onMouseEnter={handleMouseEnterPeople} 
                        onMouseLeave={handleMouseLeavePeople}>
                        <NavLink className={classes.link} to='/people'>People</NavLink>
                        <div className={isHoveredPeople ? `${classes.line} ${classes.expanded}` : classes.line}></div>
                    </div>
                </div>
                <div>
                    <div 
                        className={classes.lineContainer} 
                        onMouseEnter={handleMouseEnterPlanets} 
                        onMouseLeave={handleMouseLeavePlanets}>
                        <NavLink className={classes.link} to='/planets'>Planets</NavLink>
                        <div className={isHoveredPlanets ? `${classes.line} ${classes.expanded}` : classes.line}></div>
                    </div>
                </div>
                <div>
                    <div 
                        className={classes.lineContainer} 
                        onMouseEnter={handleMouseEnterSpecies} 
                        onMouseLeave={handleMouseLeaveSpecies}>
                        <NavLink className={classes.link} to='/species'>Species</NavLink>
                        <div className={isHoveredSpecies ? `${classes.line} ${classes.expanded}` : classes.line}></div>
                    </div>
                </div>
                <div>
                    <div 
                        className={classes.lineContainer} 
                        onMouseEnter={handleMouseEnterStarships} 
                        onMouseLeave={handleMouseLeaveStarships}>
                        <NavLink className={classes.link} to='/starships'>Starships</NavLink>
                        <div className={isHoveredStarships ? `${classes.line} ${classes.expanded}` : classes.line}></div>
                    </div>
                </div>
                <div>
                    <div 
                        className={classes.lineContainer} 
                        onMouseEnter={handleMouseEnterVehicles} 
                        onMouseLeave={handleMouseLeaveVehicles}>
                        <NavLink className={classes.link} to='/vehicles'>Vehicles</NavLink>
                        <div className={isHoveredVehicles ? `${classes.line} ${classes.expanded}` : classes.line}></div>
                    </div>
                </div>
            </div>
            <div className={classes.themeSwitcher}>
                <i class={`fa-solid fa-toggle-on ${classes.icon}`}></i>
                {/* <i class={`fa-solid fa-toggle-off ${classes.icon}`}></i> */}
            </div>
        </div>
    );
};

export default Header;