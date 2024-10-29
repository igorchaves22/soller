import { useScroll } from "framer-motion";
import * as S from "./styles";

export function ScrollBar() {
    const { scrollYProgress } = useScroll();

    return <S.Container style={{ scaleX: scrollYProgress }} />;
}
