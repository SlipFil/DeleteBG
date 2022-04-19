import React from "react";
import { SpectrumDialogProps, SpectrumAlertDialogProps, SpectrumDialogTriggerProps, SpectrumDialogContainerProps } from "@react-types/dialog";
/**
 * Dialogs are windows containing contextual information, tasks, or workflows that appear over the user interface.
 * Depending on the kind of Dialog, further interactions may be blocked until the Dialog is acknowledged.
 */
export let Dialog: React.ForwardRefExoticComponent<SpectrumDialogProps & React.RefAttributes<import("@react-types/shared").DOMRefValue<HTMLElement>>>;
/**
 * AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge.
 */
export let AlertDialog: React.ForwardRefExoticComponent<SpectrumAlertDialogProps & React.RefAttributes<import("@react-types/shared").DOMRefValue<HTMLElement>>>;
/**
 * DialogTrigger serves as a wrapper around a Dialog and its associated trigger, linking the Dialog's
 * open state with the trigger's press state. Additionally, it allows you to customize the type and
 * positioning of the Dialog.
 */
export let DialogTrigger: (props: SpectrumDialogTriggerProps) => JSX.Element;
/**
 * A DialogContainer accepts a single Dialog as a child, and manages showing and hiding
 * it in a modal. Useful in cases where there is no trigger element
 * or when the trigger unmounts while the dialog is open.
 */
export function DialogContainer(props: SpectrumDialogContainerProps): JSX.Element;
interface _DialogContainer1 {
    type: 'modal' | 'popover' | 'tray' | 'fullscreen' | 'fullscreenTakeover';
    dismiss(): void;
}
export function useDialogContainer(): _DialogContainer1;

//# sourceMappingURL=types.d.ts.map
