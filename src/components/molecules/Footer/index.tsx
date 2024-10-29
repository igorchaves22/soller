import { FooterLink, Logo } from "~components/atoms";
import * as S from "./styles";

export function Footer() {
    return (
        <S.Container>
            <S.SubContainer>
                <Logo />
                <S.Text>@ 2023 Soller, Inc. All rights reserved.</S.Text>
                <S.List>
                    <FooterLink text="Terms" />
                    <FooterLink text="Privacy" />
                    <FooterLink text="Support" />
                </S.List>
            </S.SubContainer>
        </S.Container>
    );
}
