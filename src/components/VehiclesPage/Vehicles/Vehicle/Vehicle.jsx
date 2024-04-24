import classes from './Vehicle.module.css';
import { ThemeContext } from '../../../../App';
import { useContext } from 'react';


const Vehicle = (props) => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className={((theme === 'light') && (`${classes.flexContainer} ${classes.lightFlexContainer}`)) 
            || ((theme === 'dark') && (`${classes.flexContainer} ${classes.darkFlexContainer}`))}>
            <div className={`${classes.item}`}><h1 className={classes.name}>{props.name}</h1></div>
            {
                (props.cargoCapacity !== 'unknown')
                ?
                <div className={classes.item}>
                    <div className={classes.headerField}>Cargo capacity</div>
                    <div className={classes.field}>{props.cargoCapacity}</div>
                </div>
                : <></>
            }
            {
                (props.costInCredits !== 'unknown')
                ?
                <div className={classes.item}>
                    <div className={classes.headerField}>Cost in credits</div>
                    <div className={classes.field}>{props.costInCredits}</div>
                </div>
                : <></>
            }
            {
                (props.crew !== 'unknown')
                ?
                <div className={classes.item}>
                    <div className={classes.headerField}>Crew</div>
                    <div className={classes.field}>{props.crew}</div>
                </div>
                : <></>
            }
            {
                (props.length !== 'unknown')
                ?
                <div className={classes.item}>
                    <div className={classes.headerField}>Length</div>
                    <div className={classes.field}>{props.length}</div>
                </div>
                : <></>
            }
            {
                (props.manufacturer !== 'unknown')
                ?
                <div className={classes.item}>
                    <div className={classes.headerField}>Manufacturer</div>
                    <div className={classes.field}>{props.manufacturer}</div>
                </div>
                : <></>
            }
            {
                (props.maxAtmospheringSpeed !== 'unknown')
                ?
                <div className={classes.item}>
                    <div className={classes.headerField}>Max atmosphering speed</div>
                    <div className={classes.field}>{props.maxAtmospheringSpeed}</div>
                </div>
                : <></>
            }
            {
                (props.model !== 'unknown')
                ?
                <div className={classes.item}>
                    <div className={classes.headerField}>Model</div>
                    <div className={classes.field}>{props.model}</div>
                </div>
                : <></>
            }
            {
                (props.passengers !== 'unknown')
                ?
                <div className={classes.item}>
                    <div className={classes.headerField}>Passengers</div>
                    <div className={classes.field}>{props.passengers}</div>
                </div>
                : <></>
            }
            {
                (props.class !== 'unknown')
                ?
                <div className={classes.item}>
                    <div className={classes.headerField}>Сlass</div>
                    <div className={classes.field}>{props.class}</div>
                </div>
                : <></>
            }
        </div>
    );
};

export default Vehicle;