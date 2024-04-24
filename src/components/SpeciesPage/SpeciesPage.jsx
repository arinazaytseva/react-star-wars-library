import classes from './SpeciesPage.module.css';
import { connect } from 'react-redux';
import { getSpecies, setCurrentPageAC } from '../../redux/speciesReducer';
import { useEffect } from 'react';
import Species from './Species/Species';
import Pages from '../common/Pages/Pages';


const SpeciesPage = (props) => {
    useEffect(() => {
        console.log(props.currentPage);
        props.getSpecies(props.currentPage);
    }, [props.currentPage]);

    return (
        <div className={classes.flexContainer}>
            <Species species={props.species} />
            <Pages 
                totalCount={props.totalSpeciesCount} 
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage} />
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        species: state.speciesPage.species,
        totalSpeciesCount: state.speciesPage.totalSpeciesCount,
        currentPage: state.speciesPage.currentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSpecies: (currentPage) => {
            dispatch(getSpecies(currentPage));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        }
    };
};

const ConnectedSpeciesPage = connect(mapStateToProps, mapDispatchToProps)(SpeciesPage);

export default ConnectedSpeciesPage;