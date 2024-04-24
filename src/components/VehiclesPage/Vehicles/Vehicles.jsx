import classes from './Vehicles.module.css';
import Vehicle from './Vehicle/Vehicle';


const Vehicles = (props) => {
    const vehiclesElements = props.vehicles.map(vehicle => 
        <Vehicle
            key={vehicle.url}
            name={vehicle.name}
            cargoCapacity={vehicle.cargo_capacity}
            costInCredits={vehicle.cost_in_credits}
            crew={vehicle.crew}
            length={vehicle.crew}
            manufacturer={vehicle.manufacturer}
            maxAtmospheringSpeed={vehicle.max_atmosphering_speed}
            model={vehicle.model} 
            passengers={vehicle.passengers}
            class={vehicle.vehicle_class} />
    );
    
    return (
        <div className={classes.elementsContainer}>
            {vehiclesElements}
        </div>
    );
};

export default Vehicles;