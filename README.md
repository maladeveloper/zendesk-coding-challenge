# Zendesk Coding Challenge
Made an application to display a list of tickets related to a specific account, paged by 25 tickets per page. 

**The deployed application can be found here: https://zd-ticket-viewer.herokuapp.com/**

(takes approx 1min to load as free heroku/azure servers were used.)
### Demo of System
<p align="center">
<img src="./static/demo_gif.gif" width="800" height="500" />
</p>


## Running the Application Locally

To run the application locally make sure the machine used to run the application has *Node* and its associated package manager *npm* installed and in the PATH of the terminal.

The port *3001* and *3000* should be available on the machine such that the backend and frontend parts respectively can run.

Follow the following instructions to get the app running.

1. Download this repository. 
2. In this repository open terminal.
3. Navigate into the Backend folder.
```
cd Backend
```
4. Run the following commands.
```
npm install
npm start
```
5. Now that the backend is up and running navigate to the frontend folder.
```
cd .. 
cd Frontend
```
6. Run the following commands. 
```
npm install
npm start
```
7. Once the terminal shows the frontend application is serving correctly, navigate to the URL below on your browser. 
```
http://localhost:3000/
```
8. The application should be serving at this URL and working correctly 😃

## Testing the Application
_Follow these steps after the application is up and running following the steps outlined in "Running the Application" section above._

### Testing Backend
**NOTE**: The backend must be running in order to execute the full suite of tests.
1. Navigate to the _Backend_ folder. 
```
cd Backend
```
2. Run the following commands.
```
npm install
npm test
```
### Testing Frontend
1. Navigate to the _frontend_ folder. 
```
cd Frontend
```
2. Run the following commands.
```
npm install
npm test
```
## System Architecture
The application uses a modified version of Model-View-Architecture (MVC) wherein the "Backend" encapsulates the duties of the Model and the Controller with the "Frontend" taking on the duties of the View. 

The *Frontend* uses the React libray and runs on NodeJS, whilst the *Backend* uses the Express framework which also runs on NodeJS. This *"JavaScript Everywhere"* approach allows for seamlesss integration between the two parts.

To summarise the roles in the end-to-end application, the Express Backend cleans processes data from the Zendesk API and present this via API call to the React Frontend.

<p align="center">
  <img width="250" height="500" src="./static/end_to_end_design.png">
</p>



