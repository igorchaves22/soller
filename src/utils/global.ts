import { ChildrenType } from "~types";

export const isTruthy = <T>(value: T) => {
    return Boolean(value);
};

export const renderElementIfTrue = (condition: boolean, element: ChildrenType) => {
    return condition ? element : null;
};
