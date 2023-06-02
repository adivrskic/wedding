import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import Div100vh from "react-div-100vh";

function App() {
  const [selectedVideo, setSelectedVideo] = useState("");

  //https://youtu.be/4FOV-G4fDjU
  return (
    <Div100vh className="app">
      <main className="main">
        <h1>Dajla & Adi</h1>
        <div
          className="wedding-highlights"
          onClick={() =>
            setSelectedVideo(
              "https://youtube.com/embed/4FOV-G4fDjU?controls=0&rel=0&showinfo=0&modestbranding=1&allowfullscreen=1"
            )
          }
        >
          <p>
            Svadba
            <br />
            Highlights
          </p>
          <img src="/assets/images/highlights.png" alt="wedding highlights" />
        </div>
        <div
          className="wedding-full"
          onClick={() =>
            setSelectedVideo(
              "https://player.vimeo.com/video/832386284?h=0cba7347e0&autoplay=1"
            )
          }
        >
          <p>
            Svadba
            <br />
            Full
          </p>
          <img src="/assets/images/full.png" alt="wedding full" />
        </div>

        {selectedVideo && (
          <div className="video">
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo}
              autoplay
              preload="auto"
              title="videos"
            />
            <button className="video-close">
              <IoCloseCircleOutline onClick={() => setSelectedVideo("")} />
            </button>
          </div>
        )}
      </main>
    </Div100vh>
  );
}

export default App;
