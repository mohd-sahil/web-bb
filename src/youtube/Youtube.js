import React from "react";
import YouTube from "react-youtube";
import style from "../youtube/style.css";

class Youtube extends React.Component {
  render() {
    const opts = {
      height: "300",
      width: "400",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div>
        <h1 className="text">trending in youtube</h1>
        <div className="grid-container">
          <div className="one">
            <YouTube
              videoId="y6fThXQPT6I"
              opts={opts}
              onReady={this._onReady}
            />
          </div>
          <div className="two">
            <YouTube
              videoId="bo_efYhYU2A"
              opts={opts}
              onReady={this._onReady}
            />
          </div>
          <div className="three">
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
