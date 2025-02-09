import React, {
  cloneElement,
  isValidElement,
  ReactNode,
  useLayoutEffect,
  useState,
} from "react";
import Dropdown, { DropdownProps } from "./Dropdown";
import TextInput, { TextInputProps } from "./TextInput";

interface InputRowProps {
  children: ReactNode;
  inputSizes?: string | number[];
}

const InputRow: React.FC<InputRowProps> = ({ children, inputSizes }) => {
  const [maxLabelHeight, setMaxLabelHeight] = useState<number>(0);
  // We'll hold a ref for each child’s label element.
  const labelRefs = React.useRef<Array<HTMLDivElement | null>>([]);

  // Reset the refs array on every render so its length matches the number of children.
  labelRefs.current = [];

  // For a given child index, return a callback ref that stores that child's label element.
  const registerLabelRef = (index: number) => (el: HTMLDivElement | null) => {
    labelRefs.current[index] = el;
  };

  // Use useLayoutEffect so that the measurements occur synchronously after render.
  useLayoutEffect(() => {
    const heights = labelRefs.current.map((ref) =>
      ref ? ref.offsetHeight : 0
    );
    const max = Math.max(...heights);
    if (max !== maxLabelHeight) {
      setMaxLabelHeight(max);
    }
  }, [children, maxLabelHeight]);

  // Clone each child to inject the fixedLabelHeight and a ref callback for its label.
  const clonedChildren = React.Children.map(children, (child, index) => {
    if (
      isValidElement(child) &&
      (child.type === TextInput || child.type === Dropdown)
    ) {
      return cloneElement(child, {
        size: inputSizes
          ? inputSizes?.[index]
          : (child?.props as TextInputProps)?.size,
        fixedLabelHeight: maxLabelHeight || undefined,
        setLabelRef: registerLabelRef(index),
      } as TextInputProps | DropdownProps);
    }
    return child;
  });

  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
      }}
    >
      {clonedChildren}
    </div>
  );
};

export default InputRow;
