import { useState } from "react";
import sun from "./assets/sun.svg";
import moon from "./assets/moon.svg";
import gitHub from "./assets/github.svg";
import gitHubMoon from "./assets/githubMoon.svg";
import instagram from "./assets/instagram.svg";
import instagramMoon from "./assets/instagramMoon.svg";
import User from "./components/User";
function App() {
  const [mood, setMood] = useState(true);
  function handlerChangeMood() {
    setMood(!mood);
  }
  let bg = mood ? "bg-primaryBackgroundSun" : "bg-primaryBackgroundMoon";
  return (
    <main
      className={`w-full h-full ${bg} flex flex-col justify-between items-center transition-colors duration-1000`}>
      <header className="w-full flex justify-end h-24 items-center">
        <button className="mr-8" onPointerDown={handlerChangeMood}>
          <img src={mood ? sun : moon} alt="Icon Mood" />
        </button>
      </header>
      <User mood={mood} />
      <footer className="w-full h-24 flex justify-center">
        <nav className="flex gap-4">
          <a
            href="https://github.com/JavierCarrasco08"
            title="Github"
            target="_blank"
            rel="noopener referrer">
            <img src={mood ? gitHub : gitHubMoon} alt="Github" />
          </a>
          <a
            href="https://www.instagram.com/javier_carrasco08/?hl=es-la"
            title="Instagram"
            target="_blank"
            rel="noopener referrer">
            <img src={mood ? instagram : instagramMoon} alt="Instagram" />
          </a>
        </nav>
      </footer>
    </main>
  );
}

export default App;
