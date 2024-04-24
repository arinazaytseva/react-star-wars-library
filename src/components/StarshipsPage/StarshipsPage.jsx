import classes from './StarshipsPage.module.css';
import { connect } from 'react-redux';
import { getStarships, setCurrentPageAC } from '../../redux/starshipsReducer';
import { useEffect } from 'react';
import Starships from './Starships/Starships';
import Pages from '../common/Pages/Pages';


const StarshipsPage = (props) => {
    useEffect(() => {
        props.getStarships(props.currentPage);
    }, [props.currentPage]);

    return (
        <div className={classes.flexContainer}>
            <Starships starships={props.starships} />
            <Pages 
                totalCount={props.totalStarshipsCount} 
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage} />
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        starships: state.starshipsPage.starships,
        totalStarshipsCount: state.starshipsPage.totalStarshipsCount,
        currentPage: state.starshipsPage.currentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStarships: (currentPage) => {
            dispatch(getStarships(currentPage));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        }
    };
};

const ConnectedStarshipsPage = connect(mapStateToProps, mapDispatchToProps)(StarshipsPage);

export default ConnectedStarshipsPage;