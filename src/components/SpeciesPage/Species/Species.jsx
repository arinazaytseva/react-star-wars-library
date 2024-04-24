import classes from './Species.module.css';
import SingalSpecies from './SingalSpecies/SingalSpecies';


const Species = (props) => {
    const speciesElements = props.species.map(singalSpecies => 
        <SingalSpecies
            key={singalSpecies.url}
            name={singalSpecies.name}
            averageLifespan={singalSpecies.average_lifespan}
            averageHeight={singalSpecies.average_height}
            classification={singalSpecies.classification}
            eyeColors={singalSpecies.eye_colors}
            hairColors={singalSpecies.hair_colors}
            scinColors={singalSpecies.skin_colors} />
    );
    
    return (
        <div className={classes.elementsContainer}>
            {speciesElements}
        </div>
    );
};

export default Species;