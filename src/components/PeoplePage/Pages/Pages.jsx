import classes from './Pages.module.css';


const Pages = (props) => {
    const pagesCount = Math.ceil(props.totalPeopleCount / 10);
    const pages = [];
    for (let index = 1; index <= pagesCount; index++) {
        pages.push(index);
    };

    const pagesElements = pages.map(page => 
        <span 
            key={page} 
            className={
            page === props.currentPage ? classes.selectedPage : classes.page}
            onClick={() => {props.setCurrentPage(page)}}>{page}</span>
    );
    
    return (
        <div className={classes.pages}>
            {pagesElements}
        </div>
    );
};

export default Pages;