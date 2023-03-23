import { useState } from "react";
import InputsHeader from "./Inputs-header";
import Avatar from "./Avatar";
import Information from "./Information";
import location from "./../assets/locationSun.svg";
import locationMoon from "./../assets/locationMoon.svg";
import getUsers from "../utils/api";

export default function User({ mood }) {
  const [user, setUser] = useState({
    name: "The Octocat",
    login: "@Octocat",
    location: "San Francisco",
    publicRepos: 0,
    followers: 0,
    following: 0,
    bio: "This profile has no bio",
  });
  async function handlerClickGetUser(e) {
    try {
      let res = await getUsers(e.target.dataset.value),
        json = await res.json();
      if (!res.ok) {
        throw {
          ...user,
          name: "User not registered",
          login: "Not found",
          location: "País de las maravillas",
          publicRepos: 0,
          followers: 0,
          following: 0,
        };
      }
      setUser({
        name: json.name,
        login: json.login,
        location: json.location,
        publicRepos: json.public_repos,
        followers: json.followers,
        following: json.following,
        bio: json.bio,
        src: json.avatar_url,
      });
    } catch (error) {
      setUser(error);
    }
  }
  return (
    <section
      className={`w-11/12 tablet:w-9/12 tabletXL:w-7/12 md:w-6/12  min-h-[400px] ${
        mood ? "bg-primaryBackgroundCard" : "bg-primaryBackgroundCardMoon"
      } flex items-center justify-around px-4 flex-col gap-3 box-border transition duration-1000 py-4`}>
      <InputsHeader
        bg={mood ? "bg-reposSun" : "bg-reposMoon"}
        border={
          mood ? "border-primaryBackgroundMoon" : "border-primaryBackgroundSun"
        }
        color={
          mood ? "text-primaryBackgroundMoon" : "text-primaryBackgroundSun"
        }
        getUsers={handlerClickGetUser}
      />
      <section className="w-full flex items-center flex-col gap-3 box-border screenMin:flex-row  justify-around">
        <Avatar mood={mood} src={user.src} />
        <Information
          colorName={mood ? "text-nameSun" : "text-reposSun"}
          colorRepo={mood ? "text-reposSun" : "text-reposMoon"}
          description={mood ? "text-descriptionSun" : "text-descriptionMoon"}
          color={
            mood ? "text-primaryBackgroundMoon" : "text-primaryBackgroundSun"
          }
          iconLocation={mood ? location : locationMoon}
          user={user}
        />
      </section>
    </section>
  );
}
