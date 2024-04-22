import classes from './Film.module.css';
import { ThemeContext } from '../../../../App';
import { useContext } from 'react';


const Film = (props) => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className={((theme === 'light') && (`${classes.flexContainer} ${classes.lightFlexContainer}`)) 
            || ((theme === 'dark') && (`${classes.flexContainer} ${classes.darkFlexContainer}`))}>
                <div className={`${classes.item}`}>
                    <h2 className={classes.name}>Episode {props.episodeId}. {props.title}</h2>
                </div>
            <div className={classes.item}>
                <div className={classes.headerField}>Director</div>
                <div className={classes.field}>{props.director}</div>
            </div>
            <div className={classes.item}>
                <div className={classes.headerField}>Producers</div>
                <div className={classes.field}>{props.producer}</div>
            </div>
            <div className={classes.item}>
                <div className={classes.headerField}>Release date</div>
                <div className={classes.field}>{props.releaseDate}</div>
            </div>
        </div>
    );
};

export default Film;