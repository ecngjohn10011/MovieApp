const fetch = require("node-fetch");

const processUrl = (names) => {
  let url = "http://www.omdbapi.com/?apikey=23dd8738&t=";
  const name = names.split(" "); //returns array with each word tokenized

  if (name.length <= 1) {
    url += `${name[0]}`;
    return url;
  } else {
    for (var i = 0; i < name.length; i++) {
      url += `${name[i]}+`;
    }
    url = url.slice(0, -1);

    console.log(url)
    return url;
  }
};

export const fetchUsers3 = async (names2) => {
  let url = processUrl(names2);
  //let url = "http://www.omdbapi.com/?apikey=23dd8738&t=The+Matrix"
  const response = await fetch(url);
  const results = await response.json();
  //console.log(results.Title, results.Plot, results.Poster, results.Year, results.Rated); //Runtime, Genre, Director, Actors, imdbRating, Production

  if (results.Response === "True") {
    return [...results.Plot, results.Title, results.Poster, results.Year, results.Rated, results.Runtime, results.Genre, results.Director, results.Actors, results.imdbRating, results.Production];
  } else {
    return results.Error;
  }
};
