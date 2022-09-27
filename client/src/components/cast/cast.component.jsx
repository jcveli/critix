import {Card} from 'react-bootstrap';
import { img_300 } from '../../config';
import './cast.styles.scss';

const Cast = ({actors}) => {
    if(actors.length > 13){
        actors = actors.slice(0,13);
        console.log(actors);
    }

    return(
		
        <div className="cast-container">
            {
                actors.map((actor) => {
					const {id,name,character, profile_path} = actor;
                   	return(
						<Card className='cast-card' key={id}>
							<Card.Img variant="top" src={`${img_300}${profile_path}`} />
							<Card.Body>
								<Card.Title>{name}</Card.Title>
								<footer>
									{character}
								</footer>
							</Card.Body>
                		</Card>
                   	)
                })
            }
        </div>
    )

}

export default Cast;