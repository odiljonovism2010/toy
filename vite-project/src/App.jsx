

import { useRef, useState } from "react";
import "./App.css";

function App() {
  const audioRef = useRef(null);
  const [musicOn, setMusicOn] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (musicOn) {
      audioRef.current.pause();
      setMusicOn(false);
    } else {
      audioRef.current.play();
      setMusicOn(true);
    }
  };

  return (
    <div className="page">

      <audio
        ref={audioRef}
        src="/music/piano.mp3"
        
        loop
        preload="auto"
      />

      <div className="overlay"></div>

      <button className="music-button" onClick={toggleMusic}>
        {musicOn ? "♫  Musiqa o‘chirish" : "♫  Musiqani yoqish"}
      </button>

      <div className="invitation">
        <p className="small-title">SIZNI TAKLIF QILAMIZ</p>

        <h1>To‘yimizga</h1>

        <div className="ornament">✦</div>

        <h2>taklif qilamiz</h2>

        <p className="text">
          Hayotimizdagi eng baxtli kunimizni
          siz bilan birga nishonlashdan
          mamnun bo‘lamiz.
        </p>

        <div className="names">
          <span>Aziz</span>
          <b>&</b>
          <span>Malika</span>
        </div>

        <div className="info">
          <div>
            <strong>15</strong>
            <span>OKTABR</span>
            <small>2026</small>
          </div>

          <div className="line"></div>

          <div>
            <strong>18:00</strong>
            <span>BOSHLANISHI</span>
            <small>Shanba</small>
          </div>
        </div>

        <div className="location">
          <span className="location-icon">⌖</span>

          <p>
            <strong>Navbahor To‘yxonasi</strong>
            <br />
            Toshkent shahri
          </p>
        </div>

        <button className="map-button">
          📍 Manzilni ko‘rish
        </button>

        <p className="bottom-text">
          Sizni kutib qolamiz!
        </p>
      </div>
    </div>
  );
}

export default App;

