import { SpectrumHelpTextProps } from "@react-types/shared";
import React, { HTMLAttributes } from "react";
import { SpectrumLabelProps, SpectrumFieldProps } from "@react-types/label";
interface HelpTextProps extends SpectrumHelpTextProps {
    /** Props for the help text description element. */
    descriptionProps: HTMLAttributes<HTMLElement>;
    /** Props for the help text error message element. */
    errorMessageProps: HTMLAttributes<HTMLElement>;
}
/**
 * Help text provides either an informative description or an error message that gives more context about what a user needs to input. It's commonly used in forms.
 */
export const HelpText: React.ForwardRefExoticComponent<HelpTextProps & React.RefAttributes<import("@react-types/shared").DOMRefValue<HTMLDivElement>>>;
export let Label: React.ForwardRefExoticComponent<SpectrumLabelProps & React.RefAttributes<import("@react-types/shared").DOMRefValue<HTMLLabelElement>>>;
export let Field: React.ForwardRefExoticComponent<SpectrumFieldProps & React.RefAttributes<HTMLElement>>;

//# sourceMappingURL=types.d.ts.map
