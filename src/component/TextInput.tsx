import React, { ChangeEvent, memo, useCallback } from "react";

export interface TextInputProps {
  /** size of input */
  size?: string | number;
  /** Optional label text */
  label?: string;
  /** The current value */
  value: string;
  /** Change handler */
  onChange: (value: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Optional error message */
  error?: string;
  /** Additional CSS class for the outer container */
  containerClassName?: string;
  /** Additional CSS class for the label area */
  labelClassName?: string;
  /** Additional CSS class for the input element */
  inputClassName?: string;
  /** Additional CSS class for the error message */
  errorClassName?: string;
  /** When provided, forces the label container's height (in pixels) */
  fixedLabelHeight?: number;
  /**
   * Callback ref for the label element.
   * Used by the parent InputRow to measure the label's natural height.
   */
  setLabelRef?: (el: HTMLDivElement | null) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  size,
  value,
  onChange,
  placeholder,
  error,
  fixedLabelHeight,
  setLabelRef,
}) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: `1 1 ${size || "100%"}`,
      }}
    >
      {label && (
        <div
          ref={setLabelRef}
          style={{
            display: "flex",
            alignItems: "flex-end",
            fontSize: 14,
            fontWeight: 500,
            height: fixedLabelHeight ? fixedLabelHeight : undefined,
            overflow: fixedLabelHeight ? "hidden" : undefined,
          }}
        >
          {label}
        </div>
      )}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        style={{
          height: 36,
          width: "100%",
          boxSizing: "border-box",
          padding: "0 8px",
          fontSize: 14,
          marginTop: "4px",
        }}
      />
      {error && (
        <div
          style={{
            fontSize: 12,
            color: "#c00",
            marginTop: "4px",
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default memo(TextInput);
