import classes from './Person.module.css';


const Person = (props) => {
    return (
        <div className={classes.flexContainer}>
            <div className={`${classes.item}`}><h1 className={classes.name}>{props.name}</h1></div>
            <div className={classes.item}>
                <div className={classes.headerField}>Height</div>
                <div className={classes.field}>{props.height}</div>
            </div>
            <div className={classes.item}>
                <div className={classes.headerField}>Mass</div>
                <div className={classes.field}>{props.mass}</div>
            </div>
            <div className={classes.item}>
                <div className={classes.headerField}>Hair color</div>
                <div className={classes.field}>{props.hairColor}</div>
            </div>
            <div className={classes.item}>
                <div className={classes.headerField}>Skin color</div>
                <div className={classes.field}>{props.skinColor}</div>
            </div>
            <div className={classes.item}>
                <div className={classes.headerField}>Eye color</div>
                <div className={classes.field}>{props.eyeColor}</div>
            </div>
            <div className={classes.item}>
                <div className={classes.headerField}>Birth year</div>
                <div className={classes.field}>{props.birthYear}</div>
            </div>
            <div className={classes.item}>
                <div className={classes.headerField}>Gender</div>
                <div className={classes.field}>{props.gender}</div>
            </div>
        </div>
    );
};

export default Person;