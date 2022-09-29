import { Slider,TextField, Button } from '@mui/material';
import { Form } from 'react-bootstrap';
import './review.styles.scss'

const Review = () => {
    

    
    function valueRating(value) {
        return `${value}`;
    }


    return(
        <div className='review-container'>
            <Form action="" method="POST" noValidate>
                <Slider
                    aria-label="Rating"
                    defaultValue={5}
                    getAriaValueText={valueRating}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={10}
                />
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
            </Form>
        </div>
        
    )
}

export default Review;