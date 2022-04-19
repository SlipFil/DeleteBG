import { FocusableRef, DOMProps, StyleProps } from "@react-types/shared";
import React, { ReactElement, ElementType } from "react";
import { SpectrumButtonProps, SpectrumActionButtonProps, ButtonProps, SpectrumLogicButtonProps, AriaButtonElementTypeProps, SpectrumToggleButtonProps } from "@react-types/button";
/**
 * Buttons allow users to perform an action or to navigate to another page.
 * They have multiple styles for various needs, and are ideal for calling attention to
 * where a user needs to do something in order to move forward in a flow.
 */
export let Button: <T extends React.ElementType<any> = "button">(props: SpectrumButtonProps<T> & {
    ref?: FocusableRef<HTMLElement>;
}) => ReactElement;
/**
 * ActionButtons allow users to perform an action.
 * They’re used for similar, task-based options within a workflow, and are ideal for interfaces where buttons aren’t meant to draw a lot of attention.
 */
export let ActionButton: React.ForwardRefExoticComponent<SpectrumActionButtonProps & React.RefAttributes<import("@react-types/shared").FocusableRefValue<HTMLButtonElement, HTMLButtonElement>>>;
interface FieldButtonProps extends ButtonProps, DOMProps, StyleProps {
    isQuiet?: boolean;
    isActive?: boolean;
    validationState?: 'valid' | 'invalid';
    focusRingClass?: string;
}
export let FieldButton: React.ForwardRefExoticComponent<FieldButtonProps & React.RefAttributes<import("@react-types/shared").FocusableRefValue<HTMLElement, HTMLElement>>>;
/**
 * A LogicButton displays an operator within a boolean logic sequence.
 */
export let LogicButton: React.ForwardRefExoticComponent<SpectrumLogicButtonProps & React.RefAttributes<import("@react-types/shared").FocusableRefValue<HTMLButtonElement, HTMLButtonElement>>>;
interface ClearButtonProps<T extends ElementType = 'button'> extends ButtonProps, AriaButtonElementTypeProps<T>, DOMProps, StyleProps {
    focusClassName?: string;
    variant?: 'overBackground';
    excludeFromTabOrder?: boolean;
    preventFocus?: boolean;
}
export let ClearButton: React.ForwardRefExoticComponent<ClearButtonProps<"button"> & React.RefAttributes<import("@react-types/shared").FocusableRefValue<HTMLButtonElement, HTMLButtonElement>>>;
/**
 * ToggleButtons allow users to toggle a selection on or off, for example
 * switching between two states or modes.
 */
export let ToggleButton: React.ForwardRefExoticComponent<SpectrumToggleButtonProps & React.RefAttributes<import("@react-types/shared").FocusableRefValue<HTMLButtonElement, HTMLButtonElement>>>;

//# sourceMappingURL=types.d.ts.map
