import { Slider,TextField, Button, Rating } from '@mui/material';
import { Form } from 'react-bootstrap';
import './review.styles.scss'

const Review = () => {
    

    
    function valueRating(value) {
        return `${value}`;
    }


    return(
        <div className='review-container'>
            <Form action="" method="POST" noValidate className='form-container'>
                <Rating className='star-rating' size='large' named="10-star-rating" defaultValue={5} max={10} />

                <div className='text-field'>
                    <TextField
                        id="outlined-multiline-static"
                        focused
                        fullWidth
                        inputProps={{
                            className: 'review-body-input'
                        }}
                        color='error'
                        size='medium'
                        label="Review"
                        multiline
                        rows={4}
                        placeholder="Make sure your review abids to the Terms of Service."   
                        required  
                    />    
                    <Button variant="contained" className="submit-button">Submit</Button>
                </div>
            </Form>
        </div>
        
    )
}

export default Review;