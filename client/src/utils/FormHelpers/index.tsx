import React from "react";

export const InputField = React.forwardRef<HTMLInputElement, {
  Icon: React.ReactNode;
  type: string;
  placeholder: string;
  id: string;
  name?: string;
  children?: React.ReactNode;
  onInputChange?: (value: string) => void;
}>(
  ({ Icon, type, placeholder, id, name, children, onInputChange, ...rest }, ref) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      // If parent provided an `onInputChange` callback, call it
      if (onInputChange) {
        onInputChange(value);
      }
    };

    return (
      <div className="input-css">
        <label className="block">{children}</label>
        <label className="relative">
          <input
            type={type}
            placeholder={placeholder}
            id={id}
            name={name} // Important for React Hook Form
            onInput={handleInputChange}
            ref={ref}  // Forwarding ref to the input element
            {...rest}
          />
          {Icon}
        </label>
      </div>
    );
  }
);

// Give the component a display name for better debugging
InputField.displayName = "InputField";