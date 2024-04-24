import classes from './VehiclesPage.module.css';
import { connect } from 'react-redux';
import { getVehicles, setCurrentPageAC } from '../../redux/vehiclesReducer';
import { useEffect } from 'react';
import Vehicles from './Vehicles/Vehicles';
import Pages from '../common/Pages/Pages';


const VehiclesPage = (props) => {
    useEffect(() => {
        props.getVehicles(props.currentPage);
    }, [props.currentPage]);

    console.log(props.vehicles);

    return (
        <div className={classes.flexContainer}>
            <Vehicles vehicles={props.vehicles} />
            <Pages 
                totalCount={props.totalVehiclesCount} 
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage} />
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        vehicles: state.vehiclesPage.vehicles,
        totalVehiclesCount: state.vehiclesPage.totalVehiclesCount,
        currentPage: state.vehiclesPage.currentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getVehicles: (currentPage) => {
            dispatch(getVehicles(currentPage));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        }
    };
};

const ConnectedVehiclesPage = connect(mapStateToProps, mapDispatchToProps)(VehiclesPage);

export default ConnectedVehiclesPage;