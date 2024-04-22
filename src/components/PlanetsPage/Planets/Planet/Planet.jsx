import classes from './Planet.module.css';
import { ThemeContext } from '../../../../App';
import { useContext } from 'react';


const Planet = (props) => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className={((theme === 'light') && (`${classes.flexContainer} ${classes.lightFlexContainer}`)) 
            || ((theme === 'dark') && (`${classes.flexContainer} ${classes.darkFlexContainer}`))}>
            <div className={`${classes.item}`}><h1 className={classes.name}>{props.name}</h1></div>
            {
                (props.rotationPeriod !== 'unknown')
                ? 
                <div className={classes.item}>
                    <div className={classes.headerField}>Rotation period</div>
                    <div className={classes.field}>{props.rotationPeriod}</div>
                </div>
                : <></>
            }
            {
                (props.orbitalPeriod !== 'unknown')
                ? 
                <div className={classes.item}>
                    <div className={classes.headerField}>Orbital period</div>
                    <div className={classes.field}>{props.orbitalPeriod}</div>
                </div>
                : <></>
            }
            {
                (props.diameter !== 'unknown')
                ? 
                <div className={classes.item}>
                    <div className={classes.headerField}>Diameter</div>
                    <div className={classes.field}>{props.diameter}</div>
                </div>
                : <></>
            }
            {
                (props.climate !== 'unknown')
                ? 
                <div className={classes.item}>
                    <div className={classes.headerField}>Climate</div>
                    <div className={classes.field}>{props.climate}</div>
                </div>
                : <></>
            }
            {
                (props.gravity !== 'unknown')
                ? 
                <div className={classes.item}>
                    <div className={classes.headerField}>Gravity</div>
                    <div className={classes.field}>{props.gravity}</div>
                </div>
                : <></>
            }
            {
                (props.terrain !== 'unknown')
                ? 
                <div className={classes.item}>
                    <div className={classes.headerField}>Terrain</div>
                    <div className={classes.field}>{props.terrain}</div>
                </div>
                : <></>
            }
            {
                (props.surface_water !== 'unknown')
                ? 
                <div className={classes.item}>
                    <div className={classes.headerField}>Surface water</div>
                    <div className={classes.field}>{props.surface_water}</div>
                </div>
                : <></>
            }
            {
                (props.population !== 'unknown')
                ? 
                <div className={classes.item}>
                    <div className={classes.headerField}>Population</div>
                    <div className={classes.field}>{props.population}</div>
                </div>
                : <></>
            }
        </div>
    );
};

export default Planet;