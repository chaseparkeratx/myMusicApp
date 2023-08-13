import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function button() {
  return (
    <Stack spacing={10} direction="row">
      <Button variant="contained">LOGIN</Button>
    </Stack>
  );
}