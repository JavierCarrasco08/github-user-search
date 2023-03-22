import github from "./../assets/github.svg";
import githubMoon from "./../assets/githubMoon.svg";

export default function Avatar({ src = true, mood }) {
  if (src) {
    return (
      <figure className="w-4/5">
        <img
          src={!mood ? githubMoon : github}
          alt="Avatar Github User"
          className="w-full max-w-full h-auto"
        />
      </figure>
    );
  }
  return (
    <figure className="w-4/5">
      <img
        src={src}
        alt="Avatar Github User"
        className="w-full max-w-full h-auto"
      />
    </figure>
  );
}
