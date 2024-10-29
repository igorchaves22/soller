import * as S from "./styles";

interface IFooterLinkProps {
    text: string;
}

export function FooterLink({ text }: IFooterLinkProps) {
    return (
        <S.Container>
            <S.Link href="/" target="_blank" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                {text}
            </S.Link>
        </S.Container>
    );
}
