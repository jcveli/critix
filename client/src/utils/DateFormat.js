export const DateFormat = (date) => {
    let newDate = ''; 

    date = date.split('T')[0];
    date = date.split('-');
    newDate = `${date[1]}/${date[2]}/${date[0]}`

    return newDate; 
}