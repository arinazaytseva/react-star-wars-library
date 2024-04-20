import classes from './People.module.css';
import Person from './Person/Person';


const People = (props) => {
    const peopleElements = props.people.map(person => 
        <Person
            key={person.url}
            name={person.name} 
            height={person.height} 
            mass={person.mass} 
            hairColor={person.hair_color} 
            skinColor={person.skin_color} 
            eyeColor={person.eye_color} 
            birthYear={person.birth_year} 
            gender={person.gender} />
    );
    
    return (
        <div className={classes.people}>
            {peopleElements}
        </div>
    );
};

export default People;