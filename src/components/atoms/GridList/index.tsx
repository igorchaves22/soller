import * as S from "./styles";

interface IGridListProps extends Pick<S.IStylesProps, "$styleOnBigScreen"> {
    items: { title: string; text: string }[];
}

export function GridList({ items, $styleOnBigScreen }: IGridListProps) {
    return (
        <S.Container>
            {items.map(({ title, text }) => (
                <S.Item key={title}>
                    <S.Text as="h5" $font="lg" $styleOnBigScreen={$styleOnBigScreen}>
                        {title}
                    </S.Text>
                    <S.Text $styleOnBigScreen={$styleOnBigScreen}>{text}</S.Text>
                </S.Item>
            ))}
        </S.Container>
    );
}
