import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
////

function App() {
  const [movieName, setMovieName] = useState("");
  const [movieReview, setMovieReview] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieReviewList, setMovieList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:2000/api/get").then((response) => {
      setMovieList(response.data);
    });
  });

  const submitReview = () => {
    Axios.post("http://localhost:2000/api/insert", {
      movieName: movieName,
      movieReview: movieReview,
      movieRating: movieRating,
    }).then(() => {
      alert("success");
    });
  };
  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <div className="Movie">
        <label>Movie Name:</label>
        <input
          type="text"
          name="movieName"
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />

        <label>Movie Review:</label>
        <input
          type="text"
          name="movieReview"
          onChange={(e) => {
            setMovieReview(e.target.value);
          }}
        />
        <label>Movie Rating:</label>
        <input
          type="number"
          name="movieRating"
          onChange={(e) => {
            setMovieRating(e.target.value);
          }}
        />
        <button type="submit" onClick={submitReview}>
          Submit
        </button>

        {movieReviewList.map((val) => {
          return (
            <h1>
              MovieName:{val.movieName}|MovieReview:{val.movieReview}|MovieRate:
              {val.movieRating}
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default App;
//exploring data
