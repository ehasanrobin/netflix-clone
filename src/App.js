import "./App.css";
import instence from "./axios";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import requests from "./requests";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Banner></Banner>
      <Row title="netflix originals" fetchUrl={requests.netflixOriginals}></Row>
      <Row title="trending now" fetchUrl={requests.trending} isLarge></Row>
      <Row title="Top Rated" fetchUrl={requests.topRated} isLarge></Row>
      <Row title="Action Movies" fetchUrl={requests.actionMovies} isLarge></Row>
      <Row title="Comedy Movies" fetchUrl={requests.ComedyMovie} isLarge></Row>
      <Row title="Horror Movies" fetchUrl={requests.horrorMovie} isLarge></Row>
      <Row title="documentries" fetchUrl={requests.documentries} isLarge></Row>
    </div>
  );
}

export default App;
