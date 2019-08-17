import React from "react";
import YouTube from "react-youtube";
import style from "../youtube/style.css";

class Youtube extends React.Component {
  render() {
    const opts = {
      height: "300",
      width: "340",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div className="container">
    <h1 className="text">trending in youtube</h1>

    <div className="row justify-content-center">
      <div className="col-xs-12 col-md-4">
        <YouTube
          videoId="y6fThXQPT6I"
          opts={opts}
          onReady={this._onReady}
        />
      </div>
      <div className="col-xs-12 col-md-4">
        <YouTube
          videoId="bo_efYhYU2A"
          opts={opts}
          onReady={this._onReady}
        />
      </div>
      <div className="col-xs-12 col-md-4">
        <YouTube
          videoId="3AtDnEC4zak"
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    </div>
  </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Youtube;
