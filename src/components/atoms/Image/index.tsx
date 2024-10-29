import { ImageType } from "~types";
import * as S from "./styles";

interface IImageProps extends Pick<ImageType, "src"> {}

export function Image({ ...rest }: IImageProps) {
    return <S.Container alt="Background image" loading="lazy" {...rest} />;
}
