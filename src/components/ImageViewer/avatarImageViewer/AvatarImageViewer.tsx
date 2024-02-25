import * as S from "./AvatarImageViewer.style";
import { AVATAR_URLS } from "../../../constants";

export type AvatarImageViewerProps = {
  avatarName: string;
  top?: number | "none";
};

const AvatarImageViewer = ({
  avatarName,
  top = "none",
}: AvatarImageViewerProps) => {
  return (
    <S.AvatarContainer top={top}>
      <S.ImageElement source={AVATAR_URLS[avatarName]} />
    </S.AvatarContainer>
  );
};

export default AvatarImageViewer;
