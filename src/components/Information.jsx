export default function Information({
  nameId = "No encontrado",
  name = "Usuario no registrado",
  bio = "Este usuario no existe",
  location = "País de las maravillas",
  repos = 0,
  followers = 0,
  following = 1,
  colorRepo,
  colorName,
  description,
  color,
  iconLocation,
}) {
  return (
    <article className="text-center">
      <h1 className={`text-xl font-semibold ${colorName}`}>{name}</h1>
      <h2 className={`font-semibold ${color}`}>({nameId})</h2>
      <p className={`text-center ${description} font-medium`}>{bio}</p>
      <section
        className={`flex gap-2 text-sm mx-auto ${colorRepo} font-semibold`}>
        <h3 className="flex flex-col">
          Repositorios: <span>{repos}</span>
        </h3>
        <h3 className="flex flex-col">
          Followers: <span>{followers}</span>
        </h3>
        <h3 className="flex flex-col">
          Following: <span>{following}</span>
        </h3>
      </section>
      <h3 className={`${color} flex gap-2 justify-center`}>
        <img src={iconLocation} alt="Location" /> {location}
      </h3>
    </article>
  );
}
