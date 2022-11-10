![Nobackgroundlogo](https://user-images.githubusercontent.com/86020207/200137672-672cdcfc-91a6-44f5-8f9f-429660f25143.png)

# Support Local Backend

Support Local is THE one-stop shop for all things local. It compiles all local businesses, and services in an easy-to-use portal and allows them to offer their products and services to customers through the platform.

Main App Link: https://supportlocal.netlify.app/

Frontend Repository: https://github.com/WAD2-T05/support-local

API Endpoint: https://support-local.herokuapp.com/api

## Backend Tech Stack 
* Express
* Node.js
* MongoDB

## Project setup

### Download project repository to your local directory:
```
git clone git@github.com:WAD2-T05/support-local-backend.git
```

### Open your terminal in local project, and execute:
```
npm install
``` 

### Add `.env` file and configure database connection
```
MONGODB_URI=mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
PORT=3001
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Lints and fixes files
```
npm run lint
```

You may make API calls to the server locally via `localhost:3001`.

## Database Entity-Relationship Diagram
<img width="909" alt="Screenshot 2022-11-10 at 8 58 20 AM" src="https://user-images.githubusercontent.com/86020207/200974440-d8cb04be-0674-47a6-a615-6e0baed0e140.png">
