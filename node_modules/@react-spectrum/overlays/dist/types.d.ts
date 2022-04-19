import { OverlayProps, PopoverProps, ModalProps, TrayProps } from "@react-types/overlays";
import React from "react";
/**
 * Timeout issues adding css animations to enter may be related to
 * https://github.com/reactjs/react-transition-group/issues/189 or
 * https://github.com/reactjs/react-transition-group/issues/22
 * my VM isn't good enough to debug accurately and get a better answer.
 *
 * As a result, use enter 0 so that is-open is applied once entered
 * it doesn't matter if we know when the css-animation is done on entering
 * for exiting though, give time for the css-animation to play
 * before removing from the DOM
 * **note** hitting esc bypasses exit animation for anyone testing.
 */
export function OpenTransition(props: any): JSX.Element;
export let Overlay: React.ForwardRefExoticComponent<OverlayProps & React.RefAttributes<import("@react-types/shared").DOMRefValue<HTMLDivElement>>>;
export let Popover: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<import("@react-types/shared").DOMRefValue<HTMLDivElement>>>;
export let Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<import("@react-types/shared").DOMRefValue<HTMLDivElement>>>;
export let Tray: React.ForwardRefExoticComponent<TrayProps & React.RefAttributes<import("@react-types/shared").DOMRefValue<HTMLDivElement>>>;

//# sourceMappingURL=types.d.ts.map
