import { assets } from "~utils";
import * as S from "./styles";

export function Logo() {
    return (
        <S.Container>
            <S.Image src={assets.logo} alt="Logo" loading="lazy" />
            <S.Text>Soller</S.Text>
        </S.Container>
    );
}
