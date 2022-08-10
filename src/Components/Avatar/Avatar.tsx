import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { indigo } from "@mui/material/colors";

export default function LetterAvatars() {
  return (
    <Stack direction="row" spacing={1}>
      <Avatar sx={{ bgcolor: indigo[500] }}>Jean</Avatar>
    </Stack>
  );
}
