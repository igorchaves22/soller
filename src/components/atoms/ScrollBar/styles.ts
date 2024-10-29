import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled(motion.div)(
    ({ theme }) => css`
        width: 100%;
        height: ${theme.scrollBarSize};
        position: fixed;
        inset: 0 0 auto 0;
        z-index: 30;
        background: ${theme.color.variant.primary};
        transform-origin: 0%;
    `
);
