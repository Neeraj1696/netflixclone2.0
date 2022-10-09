import React from "react";
import requests from "../Requests";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Row from "./Row";

function Home() {
  return (
    <div>
      <>
        <Navbar />
        <Banner />
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row
          title="Trending Movies"
          fetchUrl={requests.fetchTrending}
          isLargeRow
        />

        <Row
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
          isLargeRow
        />
        <Row
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
          isLargeRow
        />

        <Row
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
          isLargeRow
        />
        <Row
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
          isLargeRow
        />
        <Row
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
          isLargeRow
        />
        <Footer />
      </>
    </div>
  );
}

export default Home;
