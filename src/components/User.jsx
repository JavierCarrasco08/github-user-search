import InputsHeader from "./Inputs-header";
import Avatar from "./Avatar";
import Information from "./Information";
import location from "./../assets/locationSun.svg";
import locationMoon from "./../assets/locationMoon.svg";
import getUsers from "../utils/api";
import { useState } from "react";

export default function User({ mood }) {
  async function handlerClickGetUser(e) {}
  return (
    <section
      className={`w-11/12 min-h-[300px] ${
        mood ? "bg-primaryBackgroundCard" : "bg-primaryBackgroundCardMoon"
      } flex items-center flex-col box-border transition duration-1000 py-4`}>
      <InputsHeader
        bg={mood ? "bg-reposSun" : "bg-reposMoon"}
        border={
          mood ? "border-primaryBackgroundMoon" : "border-primaryBackgroundSun"
        }
        color={
          mood ? "text-primaryBackgroundMoon" : "text-primaryBackgroundSun"
        }
      />
      <Avatar mood={mood} />
      <Information
        colorName={mood ? "text-nameSun" : "text-reposSun"}
        colorRepo={mood ? "text-reposSun" : "text-reposMoon"}
        description={mood ? "text-descriptionSun" : "text-descriptionMoon"}
        color={
          mood ? "text-primaryBackgroundMoon" : "text-primaryBackgroundSun"
        }
        iconLocation={mood ? location : locationMoon}
      />
    </section>
  );
}
