import classes from './SingalSpecies.module.css';
import { ThemeContext } from '../../../../App';
import { useContext } from 'react';


const SingalSpecies = (props) => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className={((theme === 'light') && (`${classes.flexContainer} ${classes.lightFlexContainer}`)) 
            || ((theme === 'dark') && (`${classes.flexContainer} ${classes.darkFlexContainer}`))}>
            <div className={`${classes.item}`}><h1 className={classes.name}>{props.name}</h1></div>
            {
                (props.averageLifespan !== 'n/a')
                ? 
                <div className={classes.item}>
                    <div className={classes.headerField}>Average lifespan</div>
                    <div className={classes.field}>{props.averageLifespan}</div>
                </div>
                : <></>
            }
            {
                (props.averageHeight !== 'n/a')
                ? 
                <div className={classes.item}>
                    <div className={classes.headerField}>Average height</div>
                    <div className={classes.field}>{props.averageHeight}</div>
                </div>
                : <></>
            }
            {
                (props.classification !== 'n/a')
                ? 
                <div className={classes.item}>
                    <div className={classes.headerField}>Classification</div>
                    <div className={classes.field}>{props.classification}</div>
                </div>
                : <></>
            }
            {
                (props.eyeColors !== 'n/a')
                ? 
                <div className={classes.item}>
                    <div className={classes.headerField}>Eye colors</div>
                    <div className={classes.field}>{props.eyeColors}</div>
                </div>
                : <></>
            }
            {
                (props.hairColors !== 'n/a')
                ? 
                <div className={classes.item}>
                    <div className={classes.headerField}>Hair colors</div>
                    <div className={classes.field}>{props.hairColors}</div>
                </div>
                : <></>
            }
            {
                (props.skinColors !== 'n/a')
                ? 
                <div className={classes.item}>
                    <div className={classes.headerField}>Skin colors</div>
                    <div className={classes.field}>{props.scinColors}</div>
                </div>
                : <></>
            }
        </div>
    );
};

export default SingalSpecies;