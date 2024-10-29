import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled.li`
    width: max-content;
    height: min-content;
`;

export const Link = styled(motion.a)(
    ({ theme }) => css`
        display: inline-block; 
        color: ${theme.color.primary};
        font: ${theme.font.sm};
        text-decoration: none;
        
        &:hover {
        color: ${theme.color.secondary};
        }
    `
);
