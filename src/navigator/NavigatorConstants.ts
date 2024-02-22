import React from "react";
import Image from "../screens/Image";
import Game from "../screens/Game";
import Avatar from "../screens/Avatar";

export type TabsProps = {
  name: string;
  component: React.ComponentType;
  icon: "image" | "game-controller" | "person";
  iconOutline: "image-outline" | "game-controller-outline" | "person-outline";
};

export const TABS: TabsProps[] = [
  {
    name: "사진",
    component: Image,
    icon: "image",
    iconOutline: "image-outline",
  },
  {
    name: "게임",
    component: Game,
    icon: "game-controller",
    iconOutline: "game-controller-outline",
  },
  {
    name: "아바타",
    component: Avatar,
    icon: "person",
    iconOutline: "person-outline",
  },
];
