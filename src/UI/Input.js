import React from "react";
const Input = React.forwardRef(
  ({ label, input, value, onChange, index }, ref) => {
    return (
      <div>
        <label htmlFor={input.id}>{label}</label>
        <input
          ref={ref}
          id={input.id}
          value={value}
          {...input}
          onChange={(event) => onChange(index, event)}
        />
      </div>
    );
  }
);

export default Input;
