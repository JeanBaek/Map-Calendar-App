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
  defaultAlignment: ButtonName | null;
} & ToggleButtonGroupProps;

export default function ToggleButtons({
  buttons,
  defaultAlignment,
  ...groupProps
}: ToggleButtonsProps) {
  const [alignment, setAlignment] = React.useState<ButtonName | null>(
    defaultAlignment
  );

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: ButtonName | null
  ) => {
    setAlignment(newAlignment);
  };

  console.log({ alignment });

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      {...groupProps}
    >
      <ToggleButton value="plan" aria-label="plan">
        Plan
      </ToggleButton>
      <ToggleButton value="actual" aria-label="actual">
        Actual
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
