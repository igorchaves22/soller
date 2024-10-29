import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled(motion.ul)(
    ({ theme }) => css`
        width: 100%;
        height: min-content;
        margin: ${theme.spacing.lg};
        padding-bottom: ${theme.spacing.xl};
        list-style: none;
        overflow-x: auto;
        display: grid;
        grid: min-content / repeat(6, max-content);
        column-gap: ${theme.spacing.xl};
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;

        &::-webkit-scrollbar {
            width: ${theme.border.size};
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: ${theme.border.radius.secondary};
            background-color: ${theme.color.tertiary};
        }
    `
);

export const Item = styled(motion.li)(
    ({ theme }) => css`
        width: 20rem;
        height: auto;
        padding: ${theme.spacing.giga} ${theme.spacing.lg} ${theme.spacing.md};
        border-radius: ${theme.border.radius.primary};
        background: ${theme.color.main};
        box-shadow: ${theme.color.blackShadow} 0 0.1875rem 0.5rem;
        scroll-snap-align: start;
    `
);
