import { useState } from "react";
import { AVATAR_URLS } from "../constants";

export function useAvatarSelect() {
  const avatarArray = Object.keys(AVATAR_URLS);
  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentAvatarIndex((prevIndex) =>
      prevIndex === 0 ? avatarArray.length - 1 : prevIndex - 1
    );
  };

  const handleRightArrowClick = () => {
    setCurrentAvatarIndex((prevIndex) =>
      prevIndex === avatarArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentAvatarName = avatarArray[currentAvatarIndex];

  return {
    handleLeftArrowClick,
    handleRightArrowClick,
    currentAvatarName,
  };
}
