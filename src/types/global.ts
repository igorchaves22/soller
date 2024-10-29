import { ImgHTMLAttributes, ReactNode } from "react";

export type ImageType = ImgHTMLAttributes<HTMLImageElement>;
export type ChildrenType = ReactNode;

export interface IChildren {
    children: ChildrenType;
}
