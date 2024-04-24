import classes from './Pages.module.css';
import { ThemeContext } from '../../../App';
import { useContext } from 'react';


const Pages = (props) => {
    const { theme, setTheme } = useContext(ThemeContext);

    const pagesCount = Math.ceil(props.totalCount / 10);
    const pages = [];
    for (let index = 1; index <= pagesCount; index++) {
        pages.push(index);
    };

    const setCurrentPage = (page) => {
        console.log(page);
        props.setCurrentPage(page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const pagesElements = pages.map(page => 
        <span 
            key={page} 
            className={
                page === props.currentPage 
                    ? (((theme === 'light') && (`${classes.selectedPage} ${classes.lightSelectedPage }`)) 
                    || ((theme === 'dark') && (`${classes.selectedPage} ${classes.darkSelectedPage }`)))
                    : classes.page}
            onClick={() => {setCurrentPage(page)}}>{page}</span>
    );
    
    return (
        <div className={
            ((theme === 'light') && (`${classes.pages} ${classes.lightPages}`)) 
            || ((theme === 'dark') && (`${classes.pages} ${classes.darkPages}`))
        }>
            {pagesElements}
        </div>
    );
};

export default Pages;