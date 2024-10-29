import { TestimonialCard } from "~components/molecules";
import { ImageType } from "~types";
import * as S from "./styles";

interface IScrollListProps {
    items: ({ testimonial: string; name: string; subtitle: string } & Pick<ImageType, "src">)[];
}
export function ScrollList({ items }: IScrollListProps) {
    return (
        <S.Container>
            {items.map((data) => (
                <S.Item key={data.name}>
                    <TestimonialCard {...data} />
                </S.Item>
            ))}
        </S.Container>
    );
}
