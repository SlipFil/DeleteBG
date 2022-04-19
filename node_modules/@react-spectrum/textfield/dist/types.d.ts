import { PressEvents } from "@react-types/shared";
import React, { HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, ReactElement, RefObject, TextareaHTMLAttributes } from "react";
import { SpectrumTextFieldProps, TextFieldRef } from "@react-types/textfield";
interface TextFieldBaseProps extends Omit<SpectrumTextFieldProps, 'onChange'>, PressEvents {
    wrapperChildren?: ReactElement | ReactElement[];
    inputClassName?: string;
    validationIconClassName?: string;
    multiLine?: boolean;
    labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
    inputProps: InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>;
    descriptionProps?: HTMLAttributes<HTMLElement>;
    errorMessageProps?: HTMLAttributes<HTMLElement>;
    inputRef?: RefObject<HTMLInputElement | HTMLTextAreaElement>;
    loadingIndicator?: ReactElement;
    isLoading?: boolean;
}
export const TextFieldBase: React.ForwardRefExoticComponent<TextFieldBaseProps & React.RefAttributes<TextFieldRef>>;
/**
 * TextAreas are multiline text inputs, useful for cases where users have
 * a sizable amount of text to enter. They allow for all customizations that
 * are available to text fields.
 */
export let TextArea: React.ForwardRefExoticComponent<SpectrumTextFieldProps & React.RefAttributes<TextFieldRef>>;
/**
 * TextFields are text inputs that allow users to input custom text entries
 * with a keyboard. Various decorations can be displayed around the field to
 * communicate the entry requirements.
 */
export const TextField: React.ForwardRefExoticComponent<SpectrumTextFieldProps & React.RefAttributes<TextFieldRef>>;

//# sourceMappingURL=types.d.ts.map
