import { IChildren } from "~types";
import * as S from "./styles";

interface ISectionContainerProps extends S.IStylesProps, IChildren {}

export function SectionContainer({ children, ...rest }: ISectionContainerProps) {
    return <S.Container {...rest}>{children}</S.Container>;
}
