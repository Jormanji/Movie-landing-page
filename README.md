**MovieDB - Movie Discovery Platform**
 
This project is a responsive movie discovery landing page that dynamically fetches and displays data from the TMDb API. The page showcases trending, popular, and top-rated movies in a visually appealing and user-friendly layout. Built using Next.js, the app also features search functionality and a responsive design for optimal viewing on both desktop and mobile devices.

**Getting Started**
Prerequisites
To run this project locally, you will need the following installed on your machine:

Node.js (v14.x or newer)
A TMDb API key to fetch movie data.


**Installation**
Clone the repository:

- Copy code:
git clone https://github.com/your-username/moviedb.git
- Navigate to the project directory


**Install the dependencies:**

- Copy code:
npm install
 or
yarn install


**Create a .env.local file in the root directory and add your TMDb API key:**

Copy code:
NEXT_PUBLIC_TMDB_API_KEY=INSERT_API_KEY_HERE   ( <--- Put your API key from TMDB here.)


**Run the development server:**

- Copy code:
npm run dev
 or
yarn dev
Open http://localhost:3000 with your browser to view the app.




**PROJECT DECISIONS**

API Selection
I chose to use the TMDb API due to its API being well-documented, making it easy to integrate into the project. Its simplicity and the wide range of available data made it an ideal choice for building a visually engaging website.

Key Decisions:
Responsive Design: Ensuring the site is fully functional and visually appealing on both desktop and mobile devices was a priority. Media queries were used to adjust the layout, especially for movie cards and the navigation bar.

UI/UX: I aimed to create an intuitive interface by displaying movie posters prominently, allowing users to quickly get a sense of trending films. The inclusion of interactive elements like search bars and filter options helped enhance the user experience.

Component-Based Structure: I followed a component-based architecture to keep the code modular and reusable, particularly for elements like movie cards and headers, allowing for future scalability.

Error Handling: I implemented basic error handling for fetching data from the API, displaying appropriate messages when API data fails to load.
