import * as S from "./styles";

interface ICtaLinkProps extends S.IStylesProps {}

export function CtaLink({ $alternative }: ICtaLinkProps) {
    return (
        <S.Container href="/" target="_blank" $alternative={$alternative}>
            <S.Text $alternative={$alternative}>Request a Quote</S.Text>
            <S.Icon $alternative={$alternative} />
        </S.Container>
    );
}
