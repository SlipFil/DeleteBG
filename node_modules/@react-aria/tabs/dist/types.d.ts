import { AriaTabProps, AriaTabPanelProps, AriaTabListProps } from "@react-types/tabs";
import { HTMLAttributes, RefObject } from "react";
import { TabListState } from "@react-stately/tabs";
interface TabAria {
    /** Props for the tab element. */
    tabProps: HTMLAttributes<HTMLElement>;
}
/**
 * Provides the behavior and accessibility implementation for a tab.
 * When selected, the associated tab panel is shown.
 */
export function useTab<T>(props: AriaTabProps, state: TabListState<T>, ref: RefObject<HTMLElement>): TabAria;
interface TabPanelAria {
    /** Props for the tab panel element. */
    tabPanelProps: HTMLAttributes<HTMLElement>;
}
/**
 * Provides the behavior and accessibility implementation for a tab panel. A tab panel is a container for
 * the contents of a tab, and is shown when the tab is selected.
 */
export function useTabPanel<T>(props: AriaTabPanelProps, state: TabListState<T>, ref: RefObject<HTMLElement>): TabPanelAria;
interface TabListAria {
    /** Props for the tablist container. */
    tabListProps: HTMLAttributes<HTMLElement>;
}
/**
 * Provides the behavior and accessibility implementation for a tab list.
 * Tabs organize content into multiple sections and allow users to navigate between them.
 */
export function useTabList<T>(props: AriaTabListProps<T>, state: TabListState<T>, ref: RefObject<HTMLElement>): TabListAria;

//# sourceMappingURL=types.d.ts.map
