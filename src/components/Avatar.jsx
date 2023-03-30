import { useContext } from "react";
import { moodContext } from "./../context/mood";
import github from "./../assets/github.svg";
import githubMoon from "./../assets/githubMoon.svg";

export default function Avatar({ src = false }) {
  const moodPageContext = useContext(moodContext);
  if (!src) {
    return (
      <figure className="w-3/5 screenMin:w-2/6">
        <img
          src={!moodPageContext ? githubMoon : github}
          alt="Avatar Github User"
          className="w-full max-w-full h-auto rounded-full"
        />
      </figure>
    );
  }
  return (
    <figure className="w-3/5">
      <img
        src={src}
        alt="Avatar Github User"
        className="w-full max-w-full h-auto rounded-full object-cover"
      />
    </figure>
  );
}
