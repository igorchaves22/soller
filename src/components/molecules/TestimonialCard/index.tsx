import { Box } from "~components/atoms";
import { ImageType } from "~types";
import * as S from "./styles";

interface ITestimonialCardProps extends Pick<ImageType, "src"> {
    testimonial: string;
    name: string;
    subtitle: string;
}

export function TestimonialCard({ src, testimonial, name, subtitle }: ITestimonialCardProps) {
    return (
        <Box>
            <S.Text>{testimonial}</S.Text>
            <S.Box>
                <S.Image src={src} alt="Avatar" />
                <S.Text>{name}</S.Text>
                <S.Text $font="sm">{subtitle}</S.Text>
            </S.Box>
        </Box>
    );
}
