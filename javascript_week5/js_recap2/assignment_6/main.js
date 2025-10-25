// Ask the user how many movies they want to rate
let numMovies = parseInt(prompt("How many movies do you want to rate?"));

// Create an empty array to store movie objects
let movies = [];

// Collect movie details from the user
for (let i = 0; i < numMovies; i++) {
  let title = prompt(`Enter the title of movie ${i + 1}:`);
  let rating = parseFloat(prompt(`Enter your rating for "${title}" (1 to 5):`));

  // Create a movie object using object literal
  let movie = {
    title: title,
    rating: rating,
  };

  // Add the movie object to the array
  movies.push(movie);
}

// Sort movies based on ratings (highest to lowest)
movies.sort((a, b) => b.rating - a.rating);

// Determine the highest-rated movie
let highestRatedMovie = movies[0];

// Display results on the HTML document
let outputDiv = document.getElementById("output");

let movieListHTML = "<h2>Sorted Movie Ratings (Highest to Lowest)</h2><ul>";

// Create list items for each movie
for (let movie of movies) {
  movieListHTML += `<li><strong>${movie.title}</strong> — Rating: ${movie.rating}</li>`;
}
movieListHTML += "</ul>";

// Display the highest-rated movie
movieListHTML += `<h3>⭐ Highest Rated Movie: <strong>${highestRatedMovie.title}</strong> (Rating: ${highestRatedMovie.rating})</h3>`;

// Output everything to the page
outputDiv.innerHTML = movieListHTML;
