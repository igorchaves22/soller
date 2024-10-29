import { CtaLink, Logo } from "~components/atoms";
import * as S from "./styles";

export function Header() {
    return (
        <S.Container>
            <S.SubContainer>
                <Logo />
                <S.Box>
                    <S.Icon />
                    <S.Text>555 818 282</S.Text>
                    <CtaLink />
                </S.Box>
            </S.SubContainer>
        </S.Container>
    );
}
