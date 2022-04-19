import { DOMRef } from "@react-types/shared";
import { ReactElement } from "react";
import { SpectrumTableProps, SpectrumColumnProps } from "@react-types/table";
/**
 * Tables are containers for displaying information. They allow users to quickly scan, sort, compare, and take action on large amounts of data.
 */
export const TableView: <T>(props: SpectrumTableProps<T> & {
    ref?: DOMRef<HTMLDivElement>;
}) => ReactElement;
export const Column: <T>(props: SpectrumColumnProps<T>) => JSX.Element;
export { TableHeader, TableBody, Section, Row, Cell } from '@react-stately/table';

//# sourceMappingURL=types.d.ts.map
