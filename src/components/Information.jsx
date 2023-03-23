export default function Information({
  colorRepo,
  colorName,
  description,
  color,
  iconLocation,
  user,
}) {
  return (
    <article className="flex flex-col items-center gap-2 px-2 screenMin:items-start">
      <h1 className={`text-xl tablet:text-2xl font-semibold ${colorName}`}>
        {user.name}
      </h1>
      <h2 className={`font-semibold ${color} tablet:text-base text-sm`}>
        ( {user.login} )
      </h2>
      <p
        className={`text-center ${description} font-medium screenMin:text-left`}>
        {user.bio ? user.bio : "This profile has not bio"}
      </p>
      <section
        className={`flex gap-2 justify-between text-sm mx-auto ${colorRepo} font-semibold`}>
        <h3 className="flex flex-col items-center">
          Repositorios: <span>{user.publicRepos}</span>
        </h3>
        <h3 className="flex flex-col items-center">
          Followers: <span>{user.followers}</span>
        </h3>
        <h3 className="flex flex-col items-center">
          Following: <span>{user.following}</span>
        </h3>
      </section>
      <h3 className={`${color} flex gap-2 justify-center`}>
        <img src={iconLocation} alt="Location" />{" "}
        {user.location ? user.location : "Not found"}
      </h3>
    </article>
  );
}
