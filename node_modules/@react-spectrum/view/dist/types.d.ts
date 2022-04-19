import React from "react";
import { ViewProps, ContentProps, FooterProps, HeaderProps } from "@react-types/view";
/**
 * View is a general purpose container with no specific semantics that can be used for custom styling purposes.
 * It supports Spectrum style props to ensure consistency with other Spectrum components.
 */
export const View: React.ForwardRefExoticComponent<ViewProps & React.RefAttributes<import("@react-types/shared").DOMRefValue<HTMLElement>>>;
/**
 * Content represents the primary content within a Spectrum container.
 */
export const Content: React.ForwardRefExoticComponent<ContentProps & React.RefAttributes<import("@react-types/shared").DOMRefValue<HTMLElement>>>;
/**
 * Footer represents a footer within a Spectrum container.
 */
export const Footer: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<import("@react-types/shared").DOMRefValue<HTMLElement>>>;
/**
 * Header represents a header within a Spectrum container.
 */
export const Header: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<import("@react-types/shared").DOMRefValue<HTMLElement>>>;

//# sourceMappingURL=types.d.ts.map
