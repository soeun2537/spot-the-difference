import * as S from "./AvatarModule.style";
import IconButton from "../../button/iconButton/IconButton";
import AvatarImageViewer from "../../ImageViewer/avatarImageViewer/AvatarImageViewer";

export type AvatarModuleProps = {
  avatarName: string;
  onLeftArrowClick: () => void;
  onRightArrowClick: () => void;
};

const AvatarModule = ({
  avatarName,
  onLeftArrowClick,
  onRightArrowClick,
}: AvatarModuleProps) => {
  return (
    <S.AvatarModuleContainer>
      <IconButton
        iconName={"leftArrow"}
        width={50}
        height={50}
        onPress={onLeftArrowClick}
      />
      <AvatarImageViewer top={30} avatarName={avatarName} />
      <IconButton
        iconName={"rightArrow"}
        width={50}
        height={50}
        onPress={onRightArrowClick}
      />
    </S.AvatarModuleContainer>
  );
};

export default AvatarModule;
