import './cast.styles.scss';
import CastCard from '../cast-card/cast-card.component';

const Cast = ({actors}) => {
    if(actors.length > 13){
        actors = actors.slice(0,13);
    }

    return(
		
        <div className="cast-container">
            {
                actors.map((actor) => {
                   	return(
						<CastCard key={actor.id} actor={actor} />
                   	)
                })
            }
        </div>
    )

}

export default Cast;