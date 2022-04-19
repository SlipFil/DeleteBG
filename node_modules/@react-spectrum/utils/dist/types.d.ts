import { ReactElement, ReactNode, RefObject, CSSProperties, HTMLAttributes } from "react";
import { DOMRef, DOMRefValue, FocusableRef, FocusableRefValue, DimensionValue, Direction, Responsive, StyleProps, ViewStyleProps } from "@react-types/shared";
import { useValueEffect } from "@react-aria/utils";
export let shouldKeepSpectrumClassNames: boolean;
export function keepSpectrumClassNames(): void;
export function classNames(cssModule: {
    [key: string]: string;
}, ...values: Array<string | Object>): string;
export function getWrappedElement(children: string | ReactElement | ReactNode): ReactElement;
export function useMediaQuery(query: string): boolean;
export function createDOMRef<T extends HTMLElement = HTMLElement>(ref: RefObject<T>): DOMRefValue<T>;
export function createFocusableRef<T extends HTMLElement = HTMLElement>(domRef: RefObject<T>, focusableRef?: RefObject<HTMLElement>): FocusableRefValue<T>;
export function useDOMRef<T extends HTMLElement = HTMLElement>(ref: DOMRef<T>): RefObject<T>;
export function useFocusableRef<T extends HTMLElement = HTMLElement>(ref: FocusableRef<T>, focusableRef?: RefObject<HTMLElement>): RefObject<T>;
export function unwrapDOMRef<T extends HTMLElement>(ref: RefObject<DOMRefValue<T>>): RefObject<T>;
export function useUnwrapDOMRef<T extends HTMLElement>(ref: RefObject<DOMRefValue<T>>): RefObject<T>;
interface Breakpoints {
    S?: number;
    M?: number;
    L?: number;
    [custom: string]: number | undefined;
}
interface BreakpointContext {
    matchedBreakpoints: string[];
}
interface BreakpointProviderProps {
    children?: ReactNode;
    matchedBreakpoints: string[];
}
export function BreakpointProvider(props: BreakpointProviderProps): JSX.Element;
export function useMatchedBreakpoints(breakpoints: Breakpoints): string[];
export function useBreakpoint(): BreakpointContext;
type Breakpoint = 'base' | 'S' | 'M' | 'L' | string;
type StyleName = string | string[] | ((dir: Direction) => string);
type StyleHandler = (value: any) => string;
export interface StyleHandlers {
    [key: string]: [StyleName, StyleHandler];
}
export const baseStyleProps: StyleHandlers;
export const viewStyleProps: StyleHandlers;
export function dimensionValue(value: DimensionValue): string;
export function responsiveDimensionValue(value: Responsive<DimensionValue>, matchedBreakpoints: Breakpoint[]): string;
export function convertStyleProps(props: ViewStyleProps, handlers: StyleHandlers, direction: Direction, matchedBreakpoints: Breakpoint[]): CSSProperties;
type StylePropsOptions = {
    matchedBreakpoints?: Breakpoint[];
};
export function useStyleProps<T extends StyleProps>(props: T, handlers?: StyleHandlers, options?: StylePropsOptions): {
    styleProps: HTMLAttributes<HTMLElement>;
};
export function passthroughStyle(value: any): any;
export function getResponsiveProp<T>(prop: Responsive<T>, matchedBreakpoints: Breakpoint[]): T;
export function useSlotProps<T>(props: T & {
    id?: string;
}, defaultSlot?: string): T;
export function cssModuleToSlots(cssModule: any): {};
export function SlotProvider(props: any): JSX.Element;
export function ClearSlots(props: any): JSX.Element;
export function useHasChild(query: string, ref: RefObject<HTMLElement>): boolean;
export { useResizeObserver } from '@react-aria/utils';
export function useIsMobileDevice(): boolean;
export { useValueEffect };

//# sourceMappingURL=types.d.ts.map
