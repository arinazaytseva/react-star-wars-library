import classes from './Starship.module.css';
import { ThemeContext } from '../../../../App';
import { useContext } from 'react';


const Starship = (props) => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className={((theme === 'light') && (`${classes.flexContainer} ${classes.lightFlexContainer}`)) 
            || ((theme === 'dark') && (`${classes.flexContainer} ${classes.darkFlexContainer}`))}>
            <div className={`${classes.item}`}><h1 className={classes.name}>{props.name}</h1></div>
            <div className={classes.item}>
                <div className={classes.headerField}>Crew</div>
                <div className={classes.field}>{props.crew}</div>
            </div>
            <div className={classes.item}>
                <div className={classes.headerField}>Hyperdrive rating</div>
                <div className={classes.field}>{props.hyperdriveRating}</div>
            </div>
            <div className={classes.item}>
                <div className={classes.headerField}>Length</div>
                <div className={classes.field}>{props.length}</div>
            </div>
            <div className={classes.item}>
                <div className={classes.headerField}>Manufacturer</div>
                <div className={classes.field}>{props.manufacturer}</div>
            </div>
            {
                ((props.maxAtmospheringSpeed === 'n/a') || (props.maxAtmospheringSpeed === 'unknown'))
                ?
                <div className={classes.item}>
                    <div className={classes.headerField}>Max atmosphering speed</div>
                    <div className={classes.field}>{props.maxAtmospheringSpeed}</div>
                </div>
                : <></>
            }
            {
                ((props.passengers === 'n/a') || (props.passengers === 'unknown'))
                ?
                <div className={classes.item}>
                    <div className={classes.headerField}>Passengers</div>
                    <div className={classes.field}>{props.passengers}</div>
                </div>
                : <></>
            }
        </div>
    );
};

export default Starship;