import React from "react";
import ImageSlideshow from "../components/ImageSlideshow";
import UserBio from "../components/UserBio";
import FoodInterests from "../components/FoodInterests";
import BackBtn from "../components/Buttons/BackBtn";
import ForwardBtn from "../components/Buttons/ForwardBtn";
import LikeBtn from "../components/Buttons/LikeBtn";
import PassBtn from "../components/Buttons/PassBtn";

function Explore(props) {
  return (
    <div>
      <h1>Explore Page</h1>
      <div>
        <BackBtn />
        <ImageSlideshow />
        <ForwardBtn />
      </div>
      <div>
        <UserBio />
        <FoodInterests />
      </div>
      <div>
        <LikeBtn />
        <PassBtn />
      </div>
    </div>
  );
}

export default Explore;
