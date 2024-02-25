import React from "react";
import Image from "../../screens/Image";
import Game from "../../screens/Game";
import Avatar from "../../screens/Avatar";
import GameStackNavigator from "../gameStackNavigator/GameStackNavigator";

export type TabsProps = {
  name: string;
  component: React.ComponentType;
  icon: "image" | "game-controller" | "person";
  iconOutline: "image-outline" | "game-controller-outline" | "person-outline";
  title: string;
};

export const TABS: TabsProps[] = [
  {
    name: "사진",
    component: Image,
    icon: "image",
    iconOutline: "image-outline",
    title: "사진을 업로드해요!"
  },
  {
    name: "게임",
    component: GameStackNavigator,
    icon: "game-controller",
    iconOutline: "game-controller-outline",
    title: "틀린그림찾기 게임을 해봐요!"
  },
  {
    name: "아바타",
    component: Avatar,
    icon: "person",
    iconOutline: "person-outline",
    title: "나만의 아바타를 꾸며봐요!"
  },
];
