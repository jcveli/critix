import { Skeleton } from '@mui/material';


const DataSkeleton = ({...otherProps}) => { 
    return(
        <Skeleton sx={{ bgcolor:'grey.800'}} animation="wave" {...otherProps}/>
    )
}

export default DataSkeleton; 