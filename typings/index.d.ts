import { ComponentType } from 'react';

type StrengthFunction = (
    rect: {
        x: number; 
        y: number;
        w: number;
        h: number;
    }, 
    point: {
        x: number;
        y: number;
    }
) => number;

declare function createHorizontalStrength(_buffer: number): StrengthFunction;
declare function createVerticalStrength(_buffer: number): StrengthFunction;

declare const defaultHorizontalStrength: StrengthFunction;
declare const defaultVerticalStrength: StrengthFunction;

declare function createScrollingComponent<Props>(Component: ComponentType<Props> ): ComponentType<Props>;
export default createScrollingComponent;