import { AriaLabelingProps, DOMProps, FocusStrategy, StyleProps, DOMRef } from "@react-types/shared";
import { AriaListBoxOptions } from "@react-aria/listbox";
import { ListLayout } from "@react-stately/layout";
import { ListState } from "@react-stately/list";
import { HTMLAttributes, ReactElement, ReactNode, RefObject } from "react";
import { SpectrumListBoxProps } from "@react-types/listbox";
interface ListBoxBaseProps<T> extends AriaListBoxOptions<T>, DOMProps, AriaLabelingProps, StyleProps {
    layout: ListLayout<T>;
    state: ListState<T>;
    autoFocus?: boolean | FocusStrategy;
    shouldFocusWrap?: boolean;
    shouldSelectOnPressUp?: boolean;
    focusOnPointerEnter?: boolean;
    domProps?: HTMLAttributes<HTMLElement>;
    disallowEmptySelection?: boolean;
    shouldUseVirtualFocus?: boolean;
    transitionDuration?: number;
    isLoading?: boolean;
    onLoadMore?: () => void;
    renderEmptyState?: () => ReactNode;
    onScroll?: () => void;
}
/** @private */
export function useListBoxLayout<T>(state: ListState<T>): ListLayout<T>;
export const ListBoxBase: <T>(props: ListBoxBaseProps<T> & {
    ref?: RefObject<HTMLDivElement>;
}) => ReactElement;
/**
 * A list of options that can allow selection of one or more.
 */
export const ListBox: <T>(props: SpectrumListBoxProps<T> & {
    ref?: DOMRef<HTMLDivElement>;
}) => ReactElement;
export { Item, Section } from '@react-stately/collections';

//# sourceMappingURL=types.d.ts.map
