import { IChildren } from "~types";
import * as S from "./styles";

interface IBoxProps extends S.IStylesProps, IChildren {}

export function Box({ children, ...rest }: IBoxProps) {
    return <S.Container {...rest}>{children}</S.Container>;
}
