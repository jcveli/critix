//import {Card} from 'react-bootstrap';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { img_300 } from '../../config';
import missingPoster from '../../assets/missing_image.png';

import './cast.styles.scss';

const Cast = ({actors}) => {
    if(actors.length > 13){
        actors = actors.slice(0,13);
    }

    return(
		
        <div className="cast-container">
            {
                actors.map((actor) => {
					const {id,name,character, profile_path} = actor;
                   	return(
						<Card className='cast-card' key={id}  sx={{ minWidth: 150 }} >
						<CardMedia 
							component="img"
							image={profile_path ? `${img_300}${profile_path}` : `${missingPoster}`}
							className='cast-image'
						/>
						<CardContent>
							<Typography variant='h6' style={{fontWeight: 'bold'}}>{name}</Typography>
							<Typography variant='span'>{character}</Typography>
						</CardContent>
						
						
						{/*<Card.Img 
						className='cast-image' 
						variant="top" src={profile_path ? `${img_300}${profile_path}` : `${missingPoster}`} />
						<Card.Body>
							<Card.Title>{name}</Card.Title>
							<footer>
								{character}
							</footer>
					</Card.Body>*/}
                		</Card>
                   	)
                })
            }
        </div>
    )

}

export default Cast;