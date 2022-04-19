import { FocusableRef } from "@react-types/shared";
import { ReactElement } from "react";
import { SpectrumComboBoxProps } from "@react-types/combobox";
/**
 * ComboBoxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.
 */
export const ComboBox: <T>(props: SpectrumComboBoxProps<T> & {
    ref?: FocusableRef<HTMLElement>;
}) => ReactElement;
export { Item, Section } from '@react-stately/collections';

//# sourceMappingURL=types.d.ts.map
