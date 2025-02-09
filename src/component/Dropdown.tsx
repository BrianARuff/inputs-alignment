import React, { ChangeEvent, memo, useCallback } from "react";

export interface DropdownProps {
  /** size of input */
  size?: string | number;
  /** Optional label text */
  label?: string;
  /** The current value */
  value: string;
  /** Change handler */
  onChange: (value: string) => void;
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

const TextInput: React.FC<DropdownProps> = ({
  label,
  size,
  value,
  onChange,
  error,
  fixedLabelHeight,
  setLabelRef,
}) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
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
      <select
        value={value}
        onChange={handleChange}
        style={{
          height: 36,
          width: "100%",
          boxSizing: "border-box",
          padding: "0 8px",
          fontSize: 14,
          marginTop: "4px",
        }}
      >
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option>
        <option value="6">Option 6</option>
        <option value="7">Option 7</option>
        <option value="8">Option 8</option>
        <option value="9">Option 9</option>
        <option value="10">Option 10</option>
      </select>
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
