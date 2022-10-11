# Critix, the social media app for movie critics! 

Critix is a full-stack web application built with JavaScript using the React framework along with the Bootstrap library and CSS files for styling. In the backend, the application used Node.js and Express to fetch and post with the movie API from themoviedb.org. 


## Technologies
- Frontend
  - JavaScript
  - SASS
  - React
  - BootStrap
  - Material UI
- Backend
  - Mongoose
  - Node.js/Express.js
  - MongoDB

- Other
  - themoviedb.org API 
  

## Lessons Learned
- Need to keep in mind of the number images that is being fetched in the main menu; high
  data usage from the carousel because of poster size & quality. 
    - Why visit a site if it might take half of the user's data limit...
- Skeleton animations for data loading is a good idea for UI design purposes to look 
  a bit nicer while things are loading. 
- Implementing an environment file to keep the API key for databases
  - **BAD IDEA ** to put the API key in the fetch URL