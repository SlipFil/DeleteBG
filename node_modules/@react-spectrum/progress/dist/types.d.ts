import { ProgressBarProps, SpectrumProgressBarBaseProps, SpectrumProgressBarProps, SpectrumProgressCircleProps } from "@react-types/progress";
import React, { HTMLAttributes } from "react";
interface ProgressBarBaseProps extends SpectrumProgressBarBaseProps, ProgressBarProps {
    barClassName?: string;
    barProps?: HTMLAttributes<HTMLDivElement>;
    labelProps?: HTMLAttributes<HTMLLabelElement>;
}
export let ProgressBarBase: React.ForwardRefExoticComponent<ProgressBarBaseProps & React.RefAttributes<import("@react-types/shared").DOMRefValue<HTMLDivElement>>>;
/**
 * ProgressBars show the progression of a system operation: downloading, uploading, processing, etc., in a visual way.
 * They can represent either determinate or indeterminate progress.
 */
export let ProgressBar: React.ForwardRefExoticComponent<SpectrumProgressBarProps & React.RefAttributes<import("@react-types/shared").DOMRefValue<HTMLDivElement>>>;
/**
 * ProgressCircles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way.
 * They can represent determinate or indeterminate progress.
 */
export let ProgressCircle: React.ForwardRefExoticComponent<SpectrumProgressCircleProps & React.RefAttributes<import("@react-types/shared").DOMRefValue<HTMLDivElement>>>;

//# sourceMappingURL=types.d.ts.map
