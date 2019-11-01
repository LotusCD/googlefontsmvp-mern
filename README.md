 -- How to install and run: -- 

1. Do ‘npm i’ in the root folder.

2. Go to the ‘fronted’ folder and also do ‘npm i’.

3. From the root folder do ‘npm start’.

4. Go to config/keys.js and modify the ‘mongoURI’ variable with your mongo atlas user/password or else with your Mongo localhost.

5. To enable the google API, go to client/src/actions/index.js and modify the axios link with you Google API key.

Back-end

The back-end was made with NodeJS. The main fie ‘server.js’ is located on the root folder and the libraries express and mongoose were used.

    • models/User.js:  Creation of database Schemas.
      
    • routes/api/users.js: Logic for hadling the register and login functions. Can also recover all the entries in the database for use with software like postman.
      
    • validation/login && validation/register: logic for validating if the data was inputted correctly and to check various requirements (e.g. if an email already exist in the database).



Front-end

The front-end for this project is located in the src/client folder. React and Redux (versions up to October 2019) were used for building the client interface. The project was organized in the following sub-folder distribution:
      
    • /actions (redux actions. Needs some further refactoring).
    • /components (react components. Contain the App and Landing components)
    • /contants (constants for exporting to both, actions and reducers).
    • /helpers (communication with the backend, redux-store  creation, authorization header).
    • /reducers (redux reducers for handling various actions)
    • index.js (importing middlewares, actions, API and Root reducer)
      