import { ArrowRight } from "@phosphor-icons/react";
import styled, { css } from "styled-components";

export interface IStylesProps {
    $alternative?: boolean;
}

export const Container = styled.a<IStylesProps>(
    ({ theme, $alternative }) => css`
        width: max-content;
        height: min-content;
        padding: ${theme.spacing.sm} ${theme.spacing.lg};
        border: ${theme.border.size} solid ${theme.color[$alternative ? "tertiary" : "secondary"]};
        border-radius: ${theme.border.radius.secondary};
        display: grid;
        grid: min-content / repeat(2, max-content);
        column-gap: ${theme.spacing.sm};
        align-items: center;
        background-color: transparent;
        box-shadow: ${theme.color.blackShadow} 0 0.1875rem 0.5rem;
        text-decoration: none;
        transition: all ${theme.time.primary} ease-in-out;

        &:hover {
            background-color: ${theme.color[$alternative ? "tertiary" : "secondary"]};

            * {
                color: ${$alternative ? theme.color.variant.secondary : theme.color.tertiary};
            }
        }
    `
);

export const Text = styled.span<IStylesProps>(
    ({ theme, $alternative }) => css` 
        color: ${theme.color[$alternative ? "tertiary" : "secondary"]};
        font: ${theme.font.lg};
    `
);

export const Icon = styled(ArrowRight)<IStylesProps>(
    ({ theme, $alternative }) => css`
        display: block;
        color: ${theme.color[$alternative ? "tertiary" : "secondary"]};
        font-size: ${theme.icon.primary};
    `
);
