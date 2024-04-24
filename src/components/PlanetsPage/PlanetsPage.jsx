import classes from './PlanetsPage.module.css';
import { connect } from 'react-redux';
import { getPlanets, setCurrentPageAC } from '../../redux/planetsReducer';
import { useEffect } from 'react';
import Planets from './Planets/Planets';
import Pages from '../common/Pages/Pages';


const PlanetsPage = (props) => {
    useEffect(() => {
        props.getPlanets(props.currentPage);
    }, [props.currentPage]);

    return (
        <div className={classes.flexContainer}>
            <Planets planets={props.planets} />
            <Pages 
                totalCount={props.totalPlanetsCount} 
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage} />
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        planets: state.planetsPage.planets,
        totalPlanetsCount: state.planetsPage.totalPlanetsCount,
        currentPage: state.planetsPage.currentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPlanets: (currentPage) => {
            dispatch(getPlanets(currentPage));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        }
    };
};

const ConnectedPlanetsPage = connect(mapStateToProps, mapDispatchToProps)(PlanetsPage);

export default ConnectedPlanetsPage;