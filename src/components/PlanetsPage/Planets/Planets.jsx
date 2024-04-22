import classes from './Planets.module.css';
import Planet from './Planet/Planet';


const Planets = (props) => {
    const planetsElements = props.planets.map(planet => 
        <Planet
            key={planet.url}
            name={planet.name} 
            rotationPeriod={planet.rotation_period} 
            orbitalPeriod={planet.orbital_period} 
            diameter={planet.diameter} 
            climate={planet.climate} 
            gravity={planet.gravity} 
            terrain={planet.terrain} 
            surface_water={planet.surface_water}
            population={planet.population} />
    );
    
    return (
        <div className={classes.planets}>
            {planetsElements}
        </div>
    );
};

export default Planets;