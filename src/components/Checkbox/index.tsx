import React from "react"
type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}

export function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <div className="checkbox-container">
      <label className="custom-checkbox">
        <input type="checkbox"  {...props} />
        <span className="checkmark">{label}</span>
      </label>
    </div>
  )
}