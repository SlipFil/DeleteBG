import { AriaButtonProps } from "@react-types/button";
import { AriaListBoxOptions } from "@react-aria/listbox";
import { AriaSelectProps } from "@react-types/select";
import React, { HTMLAttributes, RefObject, ReactNode } from "react";
import { KeyboardDelegate } from "@react-types/shared";
import { SelectState } from "@react-stately/select";
interface AriaSelectOptions<T> extends AriaSelectProps<T> {
    /**
     * An optional keyboard delegate implementation for type to select,
     * to override the default.
     */
    keyboardDelegate?: KeyboardDelegate;
}
interface SelectAria {
    /** Props for the label element. */
    labelProps: HTMLAttributes<HTMLElement>;
    /** Props for the popup trigger element. */
    triggerProps: AriaButtonProps;
    /** Props for the element representing the selected value. */
    valueProps: HTMLAttributes<HTMLElement>;
    /** Props for the popup. */
    menuProps: AriaListBoxOptions<unknown>;
    /** Props for the select's description element, if any. */
    descriptionProps: HTMLAttributes<HTMLElement>;
    /** Props for the select's error message element, if any. */
    errorMessageProps: HTMLAttributes<HTMLElement>;
}
/**
 * Provides the behavior and accessibility implementation for a select component.
 * A select displays a collapsible list of options and allows a user to select one of them.
 * @param props - Props for the select.
 * @param state - State for the select, as returned by `useListState`.
 */
export function useSelect<T>(props: AriaSelectOptions<T>, state: SelectState<T>, ref: RefObject<HTMLElement>): SelectAria;
interface AriaHiddenSelectProps {
    /**
     * Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).
     */
    autoComplete?: string;
    /** The text label for the select. */
    label?: ReactNode;
    /** HTML form input name. */
    name?: string;
    /** Sets the disabled state of the select and input. */
    isDisabled?: boolean;
}
interface HiddenSelectProps<T> extends AriaHiddenSelectProps {
    /** State for the select. */
    state: SelectState<T>;
    /** A ref to the trigger element. */
    triggerRef: RefObject<HTMLElement>;
}
/**
 * Provides the behavior and accessibility implementation for a hidden `<select>` element, which
 * can be used in combination with `useSelect` to support browser form autofill, mobile form
 * navigation, and native HTML form submission.
 */
export function useHiddenSelect<T>(props: AriaHiddenSelectProps, state: SelectState<T>, triggerRef: RefObject<HTMLElement>): {
    containerProps: {
        'aria-hidden': boolean;
        defaultChecked?: boolean;
        defaultValue?: string | number | readonly string[];
        suppressContentEditableWarning?: boolean;
        suppressHydrationWarning?: boolean;
        accessKey?: string;
        className?: string;
        contentEditable?: "inherit" | (boolean | "false" | "true");
        contextMenu?: string;
        dir?: string;
        draggable?: boolean | "false" | "true";
        hidden?: boolean;
        id?: string;
        lang?: string;
        placeholder?: string;
        slot?: string;
        spellCheck?: boolean | "false" | "true";
        style?: React.CSSProperties;
        tabIndex?: number;
        title?: string;
        translate?: "yes" | "no";
        radioGroup?: string;
        role?: React.AriaRole;
        about?: string;
        datatype?: string;
        inlist?: any;
        prefix?: string;
        property?: string;
        resource?: string;
        typeof?: string;
        vocab?: string;
        autoCapitalize?: string;
        autoCorrect?: string;
        autoSave?: string;
        color?: string;
        itemProp?: string;
        itemScope?: boolean;
        itemType?: string;
        itemID?: string;
        itemRef?: string;
        results?: number;
        security?: string;
        unselectable?: "on" | "off";
        inputMode?: "search" | "numeric" | "none" | "url" | "text" | "tel" | "email" | "decimal";
        is?: string;
        'aria-activedescendant'?: string;
        'aria-atomic'?: boolean | "false" | "true";
        'aria-autocomplete'?: "inline" | "both" | "none" | "list";
        'aria-busy'?: boolean | "false" | "true";
        'aria-checked'?: boolean | "mixed" | "false" | "true";
        'aria-colcount'?: number;
        'aria-colindex'?: number;
        'aria-colspan'?: number;
        'aria-controls'?: string;
        'aria-current'?: boolean | "location" | "time" | "page" | "false" | "true" | "step" | "date";
        'aria-describedby'?: string;
        'aria-details'?: string;
        'aria-disabled'?: boolean | "false" | "true";
        'aria-dropeffect'?: "link" | "none" | "copy" | "move" | "execute" | "popup";
        'aria-errormessage'?: string;
        'aria-expanded'?: boolean | "false" | "true";
        'aria-flowto'?: string;
        'aria-grabbed'?: boolean | "false" | "true";
        'aria-haspopup'?: boolean | "grid" | "dialog" | "menu" | "listbox" | "false" | "true" | "tree";
        'aria-invalid'?: boolean | "false" | "true" | "grammar" | "spelling";
        'aria-keyshortcuts'?: string;
        'aria-label'?: string;
        'aria-labelledby'?: string;
        'aria-level'?: number;
        'aria-live'?: "off" | "assertive" | "polite";
        'aria-modal'?: boolean | "false" | "true";
        'aria-multiline'?: boolean | "false" | "true";
        'aria-multiselectable'?: boolean | "false" | "true";
        'aria-orientation'?: "horizontal" | "vertical";
        'aria-owns'?: string;
        'aria-placeholder'?: string;
        'aria-posinset'?: number;
        'aria-pressed'?: boolean | "mixed" | "false" | "true";
        'aria-readonly'?: boolean | "false" | "true";
        'aria-relevant'?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals";
        'aria-required'?: boolean | "false" | "true";
        'aria-roledescription'?: string;
        'aria-rowcount'?: number;
        'aria-rowindex'?: number;
        'aria-rowspan'?: number;
        'aria-selected'?: boolean | "false" | "true";
        'aria-setsize'?: number;
        'aria-sort'?: "none" | "other" | "ascending" | "descending";
        'aria-valuemax'?: number;
        'aria-valuemin'?: number;
        'aria-valuenow'?: number;
        'aria-valuetext'?: string;
        children?: React.ReactNode;
        dangerouslySetInnerHTML?: {
            __html: string;
        };
        onCopy?: React.ClipboardEventHandler<HTMLElement>;
        onCopyCapture?: React.ClipboardEventHandler<HTMLElement>;
        onCut?: React.ClipboardEventHandler<HTMLElement>;
        onCutCapture?: React.ClipboardEventHandler<HTMLElement>;
        onPaste?: React.ClipboardEventHandler<HTMLElement>;
        onPasteCapture?: React.ClipboardEventHandler<HTMLElement>;
        onCompositionEnd?: React.CompositionEventHandler<HTMLElement>;
        onCompositionEndCapture?: React.CompositionEventHandler<HTMLElement>;
        onCompositionStart?: React.CompositionEventHandler<HTMLElement>;
        onCompositionStartCapture?: React.CompositionEventHandler<HTMLElement>;
        onCompositionUpdate?: React.CompositionEventHandler<HTMLElement>;
        onCompositionUpdateCapture?: React.CompositionEventHandler<HTMLElement>;
        onFocus?: React.FocusEventHandler<HTMLElement>;
        onFocusCapture?: React.FocusEventHandler<HTMLElement>;
        onBlur?: React.FocusEventHandler<HTMLElement>;
        onBlurCapture?: React.FocusEventHandler<HTMLElement>;
        onChange?: React.FormEventHandler<HTMLElement>;
        onChangeCapture?: React.FormEventHandler<HTMLElement>;
        onBeforeInput?: React.FormEventHandler<HTMLElement>;
        onBeforeInputCapture?: React.FormEventHandler<HTMLElement>;
        onInput?: React.FormEventHandler<HTMLElement>;
        onInputCapture?: React.FormEventHandler<HTMLElement>;
        onReset?: React.FormEventHandler<HTMLElement>;
        onResetCapture?: React.FormEventHandler<HTMLElement>;
        onSubmit?: React.FormEventHandler<HTMLElement>;
        onSubmitCapture?: React.FormEventHandler<HTMLElement>;
        onInvalid?: React.FormEventHandler<HTMLElement>;
        onInvalidCapture?: React.FormEventHandler<HTMLElement>;
        onLoad?: React.ReactEventHandler<HTMLElement>;
        onLoadCapture?: React.ReactEventHandler<HTMLElement>;
        onError?: React.ReactEventHandler<HTMLElement>;
        onErrorCapture?: React.ReactEventHandler<HTMLElement>;
        onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
        onKeyDownCapture?: React.KeyboardEventHandler<HTMLElement>;
        onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
        onKeyPressCapture?: React.KeyboardEventHandler<HTMLElement>;
        onKeyUp?: React.KeyboardEventHandler<HTMLElement>;
        onKeyUpCapture?: React.KeyboardEventHandler<HTMLElement>;
        onAbort?: React.ReactEventHandler<HTMLElement>;
        onAbortCapture?: React.ReactEventHandler<HTMLElement>;
        onCanPlay?: React.ReactEventHandler<HTMLElement>;
        onCanPlayCapture?: React.ReactEventHandler<HTMLElement>;
        onCanPlayThrough?: React.ReactEventHandler<HTMLElement>;
        onCanPlayThroughCapture?: React.ReactEventHandler<HTMLElement>;
        onDurationChange?: React.ReactEventHandler<HTMLElement>;
        onDurationChangeCapture?: React.ReactEventHandler<HTMLElement>;
        onEmptied?: React.ReactEventHandler<HTMLElement>;
        onEmptiedCapture?: React.ReactEventHandler<HTMLElement>;
        onEncrypted?: React.ReactEventHandler<HTMLElement>;
        onEncryptedCapture?: React.ReactEventHandler<HTMLElement>;
        onEnded?: React.ReactEventHandler<HTMLElement>;
        onEndedCapture?: React.ReactEventHandler<HTMLElement>;
        onLoadedData?: React.ReactEventHandler<HTMLElement>;
        onLoadedDataCapture?: React.ReactEventHandler<HTMLElement>;
        onLoadedMetadata?: React.ReactEventHandler<HTMLElement>;
        onLoadedMetadataCapture?: React.ReactEventHandler<HTMLElement>;
        onLoadStart?: React.ReactEventHandler<HTMLElement>;
        onLoadStartCapture?: React.ReactEventHandler<HTMLElement>;
        onPause?: React.ReactEventHandler<HTMLElement>;
        onPauseCapture?: React.ReactEventHandler<HTMLElement>;
        onPlay?: React.ReactEventHandler<HTMLElement>;
        onPlayCapture?: React.ReactEventHandler<HTMLElement>;
        onPlaying?: React.ReactEventHandler<HTMLElement>;
        onPlayingCapture?: React.ReactEventHandler<HTMLElement>;
        onProgress?: React.ReactEventHandler<HTMLElement>;
        onProgressCapture?: React.ReactEventHandler<HTMLElement>;
        onRateChange?: React.ReactEventHandler<HTMLElement>;
        onRateChangeCapture?: React.ReactEventHandler<HTMLElement>;
        onSeeked?: React.ReactEventHandler<HTMLElement>;
        onSeekedCapture?: React.ReactEventHandler<HTMLElement>;
        onSeeking?: React.ReactEventHandler<HTMLElement>;
        onSeekingCapture?: React.ReactEventHandler<HTMLElement>;
        onStalled?: React.ReactEventHandler<HTMLElement>;
        onStalledCapture?: React.ReactEventHandler<HTMLElement>;
        onSuspend?: React.ReactEventHandler<HTMLElement>;
        onSuspendCapture?: React.ReactEventHandler<HTMLElement>;
        onTimeUpdate?: React.ReactEventHandler<HTMLElement>;
        onTimeUpdateCapture?: React.ReactEventHandler<HTMLElement>;
        onVolumeChange?: React.ReactEventHandler<HTMLElement>;
        onVolumeChangeCapture?: React.ReactEventHandler<HTMLElement>;
        onWaiting?: React.ReactEventHandler<HTMLElement>;
        onWaitingCapture?: React.ReactEventHandler<HTMLElement>;
        onAuxClick?: React.MouseEventHandler<HTMLElement>;
        onAuxClickCapture?: React.MouseEventHandler<HTMLElement>;
        onClick?: React.MouseEventHandler<HTMLElement>;
        onClickCapture?: React.MouseEventHandler<HTMLElement>;
        onContextMenu?: React.MouseEventHandler<HTMLElement>;
        onContextMenuCapture?: React.MouseEventHandler<HTMLElement>;
        onDoubleClick?: React.MouseEventHandler<HTMLElement>;
        onDoubleClickCapture?: React.MouseEventHandler<HTMLElement>;
        onDrag?: React.DragEventHandler<HTMLElement>;
        onDragCapture?: React.DragEventHandler<HTMLElement>;
        onDragEnd?: React.DragEventHandler<HTMLElement>;
        onDragEndCapture?: React.DragEventHandler<HTMLElement>;
        onDragEnter?: React.DragEventHandler<HTMLElement>;
        onDragEnterCapture?: React.DragEventHandler<HTMLElement>;
        onDragExit?: React.DragEventHandler<HTMLElement>;
        onDragExitCapture?: React.DragEventHandler<HTMLElement>;
        onDragLeave?: React.DragEventHandler<HTMLElement>;
        onDragLeaveCapture?: React.DragEventHandler<HTMLElement>;
        onDragOver?: React.DragEventHandler<HTMLElement>;
        onDragOverCapture?: React.DragEventHandler<HTMLElement>;
        onDragStart?: React.DragEventHandler<HTMLElement>;
        onDragStartCapture?: React.DragEventHandler<HTMLElement>;
        onDrop?: React.DragEventHandler<HTMLElement>;
        onDropCapture?: React.DragEventHandler<HTMLElement>;
        onMouseDown?: React.MouseEventHandler<HTMLElement>;
        onMouseDownCapture?: React.MouseEventHandler<HTMLElement>;
        onMouseEnter?: React.MouseEventHandler<HTMLElement>;
        onMouseLeave?: React.MouseEventHandler<HTMLElement>;
        onMouseMove?: React.MouseEventHandler<HTMLElement>;
        onMouseMoveCapture?: React.MouseEventHandler<HTMLElement>;
        onMouseOut?: React.MouseEventHandler<HTMLElement>;
        onMouseOutCapture?: React.MouseEventHandler<HTMLElement>;
        onMouseOver?: React.MouseEventHandler<HTMLElement>;
        onMouseOverCapture?: React.MouseEventHandler<HTMLElement>;
        onMouseUp?: React.MouseEventHandler<HTMLElement>;
        onMouseUpCapture?: React.MouseEventHandler<HTMLElement>;
        onSelect?: React.ReactEventHandler<HTMLElement>;
        onSelectCapture?: React.ReactEventHandler<HTMLElement>;
        onTouchCancel?: React.TouchEventHandler<HTMLElement>;
        onTouchCancelCapture?: React.TouchEventHandler<HTMLElement>;
        onTouchEnd?: React.TouchEventHandler<HTMLElement>;
        onTouchEndCapture?: React.TouchEventHandler<HTMLElement>;
        onTouchMove?: React.TouchEventHandler<HTMLElement>;
        onTouchMoveCapture?: React.TouchEventHandler<HTMLElement>;
        onTouchStart?: React.TouchEventHandler<HTMLElement>;
        onTouchStartCapture?: React.TouchEventHandler<HTMLElement>;
        onPointerDown?: React.PointerEventHandler<HTMLElement>;
        onPointerDownCapture?: React.PointerEventHandler<HTMLElement>;
        onPointerMove?: React.PointerEventHandler<HTMLElement>;
        onPointerMoveCapture?: React.PointerEventHandler<HTMLElement>;
        onPointerUp?: React.PointerEventHandler<HTMLElement>;
        onPointerUpCapture?: React.PointerEventHandler<HTMLElement>;
        onPointerCancel?: React.PointerEventHandler<HTMLElement>;
        onPointerCancelCapture?: React.PointerEventHandler<HTMLElement>;
        onPointerEnter?: React.PointerEventHandler<HTMLElement>;
        onPointerEnterCapture?: React.PointerEventHandler<HTMLElement>;
        onPointerLeave?: React.PointerEventHandler<HTMLElement>;
        onPointerLeaveCapture?: React.PointerEventHandler<HTMLElement>;
        onPointerOver?: React.PointerEventHandler<HTMLElement>;
        onPointerOverCapture?: React.PointerEventHandler<HTMLElement>;
        onPointerOut?: React.PointerEventHandler<HTMLElement>;
        onPointerOutCapture?: React.PointerEventHandler<HTMLElement>;
        onGotPointerCapture?: React.PointerEventHandler<HTMLElement>;
        onGotPointerCaptureCapture?: React.PointerEventHandler<HTMLElement>;
        onLostPointerCapture?: React.PointerEventHandler<HTMLElement>;
        onLostPointerCaptureCapture?: React.PointerEventHandler<HTMLElement>;
        onScroll?: React.UIEventHandler<HTMLElement>;
        onScrollCapture?: React.UIEventHandler<HTMLElement>;
        onWheel?: React.WheelEventHandler<HTMLElement>;
        onWheelCapture?: React.WheelEventHandler<HTMLElement>;
        onAnimationStart?: React.AnimationEventHandler<HTMLElement>;
        onAnimationStartCapture?: React.AnimationEventHandler<HTMLElement>;
        onAnimationEnd?: React.AnimationEventHandler<HTMLElement>;
        onAnimationEndCapture?: React.AnimationEventHandler<HTMLElement>;
        onAnimationIteration?: React.AnimationEventHandler<HTMLElement>;
        onAnimationIterationCapture?: React.AnimationEventHandler<HTMLElement>;
        onTransitionEnd?: React.TransitionEventHandler<HTMLElement>;
        onTransitionEndCapture?: React.TransitionEventHandler<HTMLElement>;
    };
    inputProps: {
        type: string;
        tabIndex: number;
        style: {
            fontSize: number;
        };
        onFocus: () => void;
        disabled: boolean;
    };
    selectProps: {
        tabIndex: number;
        autoComplete: string;
        disabled: boolean;
        name: string;
        size: number;
        value: React.Key;
        onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    };
};
/**
 * Renders a hidden native `<select>` element, which can be used to support browser
 * form autofill, mobile form navigation, and native form submission.
 */
export function HiddenSelect<T>(props: HiddenSelectProps<T>): JSX.Element;

//# sourceMappingURL=types.d.ts.map
