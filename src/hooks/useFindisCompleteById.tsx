import { iconData } from "../storage/dataStorage";

export const findIsCompleteById = (id) => {
  const foundIcon = iconData.find((icon) => icon.id === id);
  return foundIcon.isComplete;
};
