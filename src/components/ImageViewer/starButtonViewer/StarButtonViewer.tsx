import * as S from "./StarButtonViewer.style";
import { useEffect } from "react";
import { Text } from "react-native";
import AvatarImageViewer from "../avatarImageViewer/AvatarImageViewer";
import IconButton from "../../button/iconButton/IconButton";
import { iconData } from "../../../storage/dataStorage";
import { useAvatarLoad } from "../../../hooks/useAvatarLoad";
import { findIsCompleteById } from "../../../hooks/useFindisCompleteById";

const StarButtonViewer = () => {
  const iconOrder = iconData.slice(0);

  const { savedAvatar, HandleAvatarLoad } = useAvatarLoad();

  useEffect(() => {
    HandleAvatarLoad();
    const interval = setInterval(HandleAvatarLoad, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.StageContainer>
      {iconOrder.map(({ id, isComplete }, index) => (
        <S.ButtonContainer key={id}>
          {findIsCompleteById(id) === "current" && (
            <AvatarImageViewer top={30} avatarName={savedAvatar} />
          )}
          <IconButton
            iconName={
              isComplete === "complete"
                ? "completeShadowStar"
                : "incompleteShadowStar"
            }
            width={60}
            height={60}
            onPress={() => {
              console.log(`Button ${index + 1} is pressed.`); //수정
            }}
          />
          <Text style={{ fontWeight: "500" }}>{`${id}단계`}</Text>
        </S.ButtonContainer>
      ))}
    </S.StageContainer>
  );
};

export default StarButtonViewer;
