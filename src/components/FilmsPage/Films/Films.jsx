import classes from './Films.module.css';
import Film from './Film/Film';


const Films = (props) => {
    const filmsElements = props.films.map(film => 
        <Film 
            key={film.episode_id}
            title={film.title}
            director={film.director}
            producer={film.producer}
            releaseDate={film.release_date}
            episodeId={film.episode_id} />
    );

    return (
        <div className={classes.films}>
            {filmsElements}
        </div>
    );
};

export default Films;