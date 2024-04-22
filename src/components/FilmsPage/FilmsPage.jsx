<<<<<<< HEAD
import classes from './FilmsPage.module.css';
import { connect } from "react-redux";
import { getFilms } from '../../redux/filmsReducer';
import { useEffect } from 'react';
import Films from './Films/Films';


const FilmsPage = (props) => {
    useEffect(() => {
        props.getFilms();
    }, []);

    return (
        <div className={classes.flexContainer}>
            {console.log(props.films)}
            <Films films={props.films}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        films: state.filmsPage.films
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFilms: () => {
            dispatch(getFilms());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsPage);
=======
const FilmsPage = () => {
    return (
        <div></div>
    );
};

export default FilmsPage;
>>>>>>> 7ddb4fa88a7edfd256ef6169f1a98400c4f7a095
