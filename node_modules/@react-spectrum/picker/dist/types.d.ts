import { DOMRef } from "@react-types/shared";
import { ReactElement } from "react";
import { SpectrumPickerProps } from "@react-types/select";
/**
 * Pickers allow users to choose a single option from a collapsible list of options when space is limited.
 */
export const Picker: <T>(props: SpectrumPickerProps<T> & {
    ref?: DOMRef<HTMLDivElement>;
}) => ReactElement;
export { Item, Section } from '@react-stately/collections';

//# sourceMappingURL=types.d.ts.map
