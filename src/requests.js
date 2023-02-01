const API_KEY = "00739cd0e6ff65f81a84bad777fbcdcd";

const requests = {
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  netflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  topRated: `/movie/top_rated?api_key=${API_KEY}&Language=eu-US`,
  actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  ComedyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romanticMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
