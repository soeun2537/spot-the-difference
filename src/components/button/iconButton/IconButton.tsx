import * as S from "./IconButton.style";
import { ICON_URLS } from "../../../constants";

export type IconButtonProps = {
  iconName: string;
  width: number;
  height: number;
  onPress: () => void;
};

const IconButton = ({
  iconName,
  width,
  height,
  onPress,
  ...props
}: IconButtonProps) => {
  return (
    <S.Container onPress={onPress} width={width} height={height} {...props}>
      <S.ImageElement source={ICON_URLS[iconName]} />
    </S.Container>
  );
};
export default IconButton;
