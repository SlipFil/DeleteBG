import { Direction, Collection } from "@react-types/shared";
import React, { CSSProperties, HTMLAttributes, ReactNode, RefObject, FocusEvent, Key, ReactElement } from "react";
import { Rect, Size, ReusableView, LayoutInfo, Layout, VirtualizerState } from "@react-stately/virtualizer";
export type RTLOffsetType = 'negative' | 'positive-descending' | 'positive-ascending';
export function getRTLOffsetType(recalculate?: boolean): RTLOffsetType;
export function getScrollLeft(node: HTMLElement, direction: Direction): number;
export function setScrollLeft(node: HTMLElement, direction: Direction, scrollLeft: number): void;
interface ScrollViewProps extends HTMLAttributes<HTMLElement> {
    contentSize: Size;
    onVisibleRectChange: (rect: Rect) => void;
    children: ReactNode;
    innerStyle?: CSSProperties;
    sizeToFit?: 'width' | 'height';
    onScrollStart?: () => void;
    onScrollEnd?: () => void;
    scrollDirection?: 'horizontal' | 'vertical' | 'both';
}
export const ScrollView: React.ForwardRefExoticComponent<ScrollViewProps & React.RefAttributes<HTMLDivElement>>;
interface VirtualizerItemOptions<T extends object, V> {
    reusableView: ReusableView<T, V>;
    ref: RefObject<HTMLElement>;
}
export function useVirtualizerItem<T extends object, V>(options: VirtualizerItemOptions<T, V>): {
    updateSize: () => void;
};
interface VirtualizerItemProps<T extends object, V> {
    reusableView: ReusableView<T, V>;
    parent?: ReusableView<T, V>;
    className?: string;
}
export function VirtualizerItem<T extends object, V>(props: VirtualizerItemProps<T, V>): JSX.Element;
export function layoutInfoToStyle(layoutInfo: LayoutInfo, dir: Direction, parent?: LayoutInfo | null): CSSProperties;
interface VirtualizerProps<T extends object, V> extends HTMLAttributes<HTMLElement> {
    children: (type: string, content: T) => V;
    renderWrapper?: (parent: ReusableView<T, V> | null, reusableView: ReusableView<T, V>, children: ReusableView<T, V>[], renderChildren: (views: ReusableView<T, V>[]) => ReactElement[]) => ReactElement;
    layout: Layout<T>;
    collection: Collection<T>;
    focusedKey?: Key;
    sizeToFit?: 'width' | 'height';
    scrollDirection?: 'horizontal' | 'vertical' | 'both';
    transitionDuration?: number;
    isLoading?: boolean;
    onLoadMore?: () => void;
    shouldUseVirtualFocus?: boolean;
    scrollToItem?: (key: Key) => void;
}
interface VirtualizerOptions {
    focusedKey?: Key;
    scrollToItem?: (key: Key) => void;
    shouldUseVirtualFocus?: boolean;
}
export function useVirtualizer<T extends object, V, W>(props: VirtualizerOptions, state: VirtualizerState<T, V, W>, ref: RefObject<HTMLElement>): {
    virtualizerProps: {
        tabIndex: number;
        onFocus: (e: FocusEvent) => void;
        onBlur: (e: FocusEvent) => void;
    };
};
export const Virtualizer: <T extends object, V>(props: VirtualizerProps<T, V> & {
    ref?: RefObject<HTMLDivElement>;
}) => ReactElement;

//# sourceMappingURL=types.d.ts.map
