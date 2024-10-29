import { Box } from "~components/atoms";
import { isTruthy, renderElementIfTrue } from "~utils";
import * as S from "./styles";

interface ISectionTextProps extends Omit<S.IStylesProps, "$font"> {
    subtitle?: string;
    title: string;
    description?: string;
}

export function SectionText({ subtitle, title, description, $color, $styleOnBigScreen }: ISectionTextProps) {
    return (
        <Box $rowGap="sm">
            <Box $rowGap="tny">
                {renderElementIfTrue(
                    isTruthy(subtitle),
                    <S.Text as="h6" $color="tertiary" $font="sm" $styleOnBigScreen={$styleOnBigScreen}>
                        {subtitle}
                    </S.Text>
                )}
                <S.Text as="h1" $color={$color} $font="huge" $styleOnBigScreen={$styleOnBigScreen}>
                    {title}
                </S.Text>
            </Box>
            {renderElementIfTrue(
                isTruthy(description),
                <S.Text $color={$color} $styleOnBigScreen={$styleOnBigScreen}>
                    {description}
                </S.Text>
            )}
        </Box>
    );
}
