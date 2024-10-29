import { Box, CtaLink, GridList, Image, ScrollBar, SectionContainer } from "~components/atoms";
import { SectionText, TestimonialCard } from "~components/molecules";
import { ScrollList } from "~components/organisms";
import { ImageType } from "~types";
import * as S from "./styles";

interface IMainTemplateProps {
    content1: {
        title: string;
        description: string;
        testimonial: {
            testimonial: string;
            name: string;
            subtitle: string;
        } & Pick<ImageType, "src">;
    };
    content2: {
        subtitle: string;
        title: string;
        description: string;
    } & Pick<ImageType, "src">;
    content3: {
        subtitle: string;
        title: string;
        description: string;
        list: { title: string; text: string }[];
    } & Pick<ImageType, "src">;
    content4: {
        subtitle: string;
        title: string;
        description: string;
        list: { title: string; text: string }[];
    } & Pick<ImageType, "src">;
    content5: {
        subtitle: string;
        title: string;
        description: string;
        list: ({ testimonial: string; name: string; subtitle: string } & Pick<ImageType, "src">)[];
    };
    content6: {
        subtitle: string;
        title: string;
    } & Pick<ImageType, "src">;
}

export function MainTemplate({ content1, content2, content3, content4, content5, content6 }: IMainTemplateProps) {
    return (
        <>
            <ScrollBar />
            <S.Container>
                <SectionContainer $paddingTopVariant $bgImage="1">
                    <Box
                        $rowGap="giga"
                        $styleOnBigScreen={{
                            breakpoint: "md",
                            gridColumn: "primary",
                            align: "start"
                        }}
                    >
                        <Box
                            $rowGap="xxl"
                            $styleOnBigScreen={{
                                breakpoint: "md",
                                align: "start"
                            }}
                        >
                            <SectionText
                                $styleOnBigScreen={{
                                    breakpoint: "md",
                                    textAlign: "left"
                                }}
                                {...content1}
                            />
                            <CtaLink />
                        </Box>
                        <TestimonialCard {...content1.testimonial} />
                    </Box>
                </SectionContainer>
                <SectionContainer $bgImage="2">
                    <Box
                        $rowGap="giga"
                        $styleOnBigScreen={{
                            breakpoint: "md",
                            gridColumn: "main"
                        }}
                    >
                        <SectionText {...content2} />
                        <Image src={content2.src} />
                    </Box>
                </SectionContainer>
                <SectionContainer $bgImage="3">
                    <Box
                        $rowGap="giga"
                        $styleOnBigScreen={{
                            breakpoint: "md",
                            gridColumn: "secondary"
                        }}
                    >
                        <Box
                            $rowGap="giga"
                            $styleOnBigScreen={{
                                breakpoint: "md",
                                gridColumn: "main"
                            }}
                        >
                            <SectionText
                                $styleOnBigScreen={{
                                    breakpoint: "md",
                                    textAlign: "left"
                                }}
                                {...content3}
                            />
                            <GridList
                                items={content3.list}
                                $styleOnBigScreen={{
                                    breakpoint: "md",
                                    textAlign: "left"
                                }}
                            />
                        </Box>
                        <Image src={content3.src} />
                    </Box>
                </SectionContainer>
                <SectionContainer $bgImage="4">
                    <Box
                        $rowGap="giga"
                        $styleOnBigScreen={{
                            breakpoint: "md",
                            gridColumn: "tertiary"
                        }}
                    >
                        <Box $rowGap="giga">
                            <SectionText
                                $styleOnBigScreen={{
                                    breakpoint: "md",
                                    textAlign: "left"
                                }}
                                {...content4}
                            />
                            <GridList
                                items={content4.list}
                                $styleOnBigScreen={{
                                    breakpoint: "md",
                                    textAlign: "left"
                                }}
                            />
                        </Box>
                        <Image src={content4.src} />
                    </Box>
                </SectionContainer>
                <SectionContainer $bgColor="primary">
                    <Box $rowGap="giga">
                        <Box
                            $styleOnBigScreen={{
                                breakpoint: "md",
                                gridColumn: "quaternary"
                            }}
                        >
                            <SectionText
                                $color="main"
                                $styleOnBigScreen={{
                                    breakpoint: "md",
                                    textAlign: "left"
                                }}
                                {...content5}
                            />
                            <CtaLink $alternative />
                        </Box>
                        <ScrollList items={content5.list} />
                    </Box>
                </SectionContainer>
                <SectionContainer $bgColor="secondary" $bgImage="5">
                    <Box $rowGap="giga">
                        <Box
                            $styleOnBigScreen={{
                                breakpoint: "md",
                                gridColumn: "quaternary"
                            }}
                        >
                            <SectionText
                                $color="main"
                                $styleOnBigScreen={{
                                    breakpoint: "md",
                                    textAlign: "left"
                                }}
                                {...content6}
                            />
                            <CtaLink $alternative />
                        </Box>
                        <Image src={content6.src} />
                    </Box>
                </SectionContainer>
            </S.Container>
        </>
    );
}
