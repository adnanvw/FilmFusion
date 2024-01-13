# FilmFusion

FilmFusion is a web app for everything related to Movies, Shows, and Artists. The movie database is taken from the [TMDB](https://www.themoviedb.org/) API and built using technologies including [ReactJS](https://reactjs.org/), [ReduxJS/Toolkit](https://redux-toolkit.js.org/), [TailwindCSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/), [NodeJS](https://nodejs.org/), [ExpressJS](https://expressjs.com/), and [MongoDB](https://www.mongodb.com/).

## Features

- Search Movies, Shows, and Artists
- Complete Details of Movies, Shows, and Artists
- Watch Trailers
- Browse Backdrops and Posters
- Add to Liked and Watch Later Collection


## Installation & Setup

### Client Setup

1. Open your terminal and navigate to the client folder by running:

```bash
cd client
```

2. Install the required dependencies for the client:

```bash
npm install
```

3. Start the client application:

```bash
npm start
```

The client should now be running locally.

### Server Setup

1. Open a new terminal window and navigate to the server folder by running:

```bash
cd server
```

2. Install the required dependencies for the server:

```bash
npm install
```

3. Create an environment file by renaming the `.env_sample` file to `.env` inside the server folder.

4. Provide your **MONGODB_URI**, **JWT_SECRET_KEY**, **PORT**, **BASE_URL**, and **API_KEY** inside the `.env` file.

5. Start the server:

```bash
npm start
```

The server should now be running locally.
