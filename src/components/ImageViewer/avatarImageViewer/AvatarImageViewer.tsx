import * as S from "./AvatarImageViewer.style";
import { AVATAR_URLS } from "../../../constants";

export type AvatarImageViewerProps = {
  avatarName: string;
};

const AvatarImageViewer = ({ avatarName }: AvatarImageViewerProps) => {
  return (
    <S.AvatarContainer>
      <S.ImageElement source={AVATAR_URLS[avatarName]} />
    </S.AvatarContainer>
  );
};

export default AvatarImageViewer;
