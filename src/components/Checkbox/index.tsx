import React from "react"
type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  removeToDo: () => void;
}

export function Checkbox({ label, removeToDo, ...props }: CheckboxProps) {
  return (
    <div className="checkbox-container">
      <label className="custom-checkbox">
        <input type="checkbox"  {...props} />
        <span className="checkmark" style={{ textDecoration: props.checked ? 'line-through' : 'none' }}>{label}</span>
      </label>
      <button onClick={removeToDo}>Remover</button>
    </div>
  )
}