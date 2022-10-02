/** @format */

import React, { Component } from "react";

export default class Movie extends Component {
  // the prop is the movie title and we can configure the backend according to that only
  //   timer = null;

  state = {
    movie: null,
  };

  componentDidMount = async () => {
    console.log("Component did mount done for the project!");
    this.fetchMovie();
    // this.timer = setInterval(() => console.log("Counting"), 1000);
  };

  fetchMovie = async () => {
    try {
      let res = await fetch(
        "http://localhost:3001/movies/" + this.props.selectedMovie
      );
      //   configure from the backend that we will send the response to be the object having all the info about the movie
      if (res.ok) {
        let data = await res.json();
        console.log(data);
        this.setState({
          movie: data,
        });
        console.log("The data is fetched");
      }
      console.log("Good line 31");
    } catch (error) {
      console.log("There is some error : ", error);
    }
  };
  componentDidUpdate(prevProps, prevState) {
    console.log("Good line 37");
    console.log("Movie got updated");
    console.log(prevProps.selectedMovie);
    console.log(this.props.selectedMovie);

    if (prevProps.selectedMovie !== this.props.selectedMovie) {
      this.fetchMovie();
      console.log("Good line 44");
    }
  }
  componentWillUnmount() {
    console.log("Good line 49");
    console.log("The component will unmount");
    // clearImmediate(this.timer);
  }
  render() {
    console.log("Render of the Movie");
    return (
      <div style={{ color: "white" }}>
        {this.state.movie ? (
          <img
            src={this.state.movie.url}
            style={{ width: "200px" }}
            alt="Movie Pic"
          />
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    );
  }
}
