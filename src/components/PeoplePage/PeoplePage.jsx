import classes from './PeoplePage.module.css';
import { connect } from 'react-redux';
import { getPeople, setCurrentPageAC } from '../../redux/peopleReducer';
import { useEffect } from 'react';
import People from './People/People';
import Pages from './Pages/Pages';


const PeoplePage = (props) => {
    useEffect(() => {
        props.getPeople(props.currentPage);
    }, [props.currentPage]);

    return (
        <div className={classes.flexContainer}>
            <People people={props.people} />
            <Pages 
                totalPeopleCount={props.totalPeopleCount} 
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage} />
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        people: state.peoplePage.people,
        totalPeopleCount: state.peoplePage.totalPeopleCount,
        currentPage: state.peoplePage.currentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPeople: (currentPage) => {
            dispatch(getPeople(currentPage));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        }
    };
};

const ConnectedPeoplePage = connect(mapStateToProps, mapDispatchToProps)(PeoplePage);

export default ConnectedPeoplePage;