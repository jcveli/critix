import { useNavigate } from "react-router-dom";
import {img_original} from '../../config';
export const CarouselImage = ({movie}) => {
    

    const navigate = useNavigate(); 
    const goToDetails = () => { 
        navigate(`/detail/${movie.id}`)
    }
    return(
        <img src={`${img_original}${movie.backdrop_path}`} onClick={goToDetails} alt='carousel poster'/>
    )


}

export default CarouselImage;