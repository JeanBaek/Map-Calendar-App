import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup, {
  ToggleButtonGroupProps,
} from "@mui/material/ToggleButtonGroup";

type ButtonName = string;
type ToggleButtonsProps = {
  buttons: Array<{
    name: ButtonName;
  }>;
  defaultAlignment?: ButtonName;
} & ToggleButtonGroupProps;

export default function ToggleButtons({
  buttons,
  defaultAlignment,
  ...groupProps
}: ToggleButtonsProps) {
  const [alignment, setAlignment] = React.useState<ButtonName | null>(
    defaultAlignment || null
  );

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: ButtonName | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      {...groupProps}
    >
      {buttons.map(({ name }) => (
        <ToggleButton value={name} aria-label={name}>
          {name}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
