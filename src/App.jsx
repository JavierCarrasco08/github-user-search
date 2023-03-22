import { useState } from "react";
import sun from "./assets/sun.svg";
import moon from "./assets/moon.svg";
import gitHub from "./assets/github.svg";
import instagram from "./assets/instagram.svg";
import User from "./components/User";
function App() {
  const [mood, setMood] = useState(true);
  return (
    <main>
      <header>
        <button>
          <img src={sun} alt="Icon Mood" />
        </button>
      </header>
      <User />
      <footer>
        <nav>
          <a
            href="https://github.com/JavierCarrasco08"
            title="Github"
            target="_blank"
            rel="noopener referrer">
            <img src={gitHub} alt="Github" />
          </a>
          <a
            href="https://www.instagram.com/javier_carrasco08/?hl=es-la"
            title="Instagram"
            target="_blank"
            rel="noopener referrer">
            <img src={instagram} alt="Instagram" />
          </a>
        </nav>
      </footer>
    </main>
  );
}

export default App;
