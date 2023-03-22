import InputsHeader from "./Inputs-header";

export default function User({ mood }) {
  return (
    <section
      className={`w-11/12 ${
        mood ? "bg-primaryBackgroundCard" : "bg-primaryBackgroundCardMoon"
      } flex items-center flex-col box-border transition-colors duration-1000`}>
      <InputsHeader bg={mood ? "bg-reposSun" : "bg-reposMoon"} />
    </section>
  );
}
