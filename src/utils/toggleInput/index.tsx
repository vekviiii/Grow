import { useState } from "react";

interface IToggleInput
{
    checked: boolean
}

const ToggleInput: React.FC<React.PropsWithChildren<IToggleInput>> = ({checked}) => {
    let [IsChecked, setIsChecked] = useState(checked);

  return (
    <label className="toggle mx-2">
      <input
        type="checkbox"
        id="checker"
        checked={IsChecked}
        onChange={() => setIsChecked(!IsChecked)} // Update the state when toggled
      />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleInput;
