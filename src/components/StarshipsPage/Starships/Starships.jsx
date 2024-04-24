import classes from './Starships.module.css';
import Starship from './Starship/Starship';


const Starships = (props) => {
    const starshipsElements = props.starships.map(starship => 
        <Starship
            key={starship.url}
            name={starship.name}
            crew={starship.crew}
            hyperdriveRating={starship.hyperdrive_rating}
            length={starship.length}
            manufacturer={starship.manufacturer}
            maxAtmospheringSpeed={starship.max_atmosphering_speed}
            passengers={starship.passengers} />
    );
    
    return (
        <div className={classes.elementsContainer}>
            {starshipsElements}
        </div>
    );
};

export default Starships;