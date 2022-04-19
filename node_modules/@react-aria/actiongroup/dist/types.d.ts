import { AriaActionGroupProps } from "@react-types/actiongroup";
import { HTMLAttributes, RefObject, Key } from "react";
import { ListState } from "@react-stately/list";
import { PressProps } from "@react-aria/interactions";
export interface ActionGroupAria {
    actionGroupProps: HTMLAttributes<HTMLElement>;
}
export function useActionGroup<T>(props: AriaActionGroupProps<T>, state: ListState<T>, ref: RefObject<HTMLElement>): ActionGroupAria;
interface ActionGroupItemProps {
    key: Key;
}
interface ActionGroupItemAria {
    buttonProps: HTMLAttributes<HTMLElement> & PressProps;
}
export function useActionGroupItem<T>(props: ActionGroupItemProps, state: ListState<T>, ref?: RefObject<HTMLElement>): ActionGroupItemAria;

//# sourceMappingURL=types.d.ts.map
