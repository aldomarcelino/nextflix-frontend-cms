import { useState } from "react";
export function useToggle(val = false) {
  const [open, setOpen] = useState(val);
  const setOn = () => setOpen(true);
  const setOff = () => setOpen(false);

  return { open, setOn, setOff };
}

export function useToggleCasts(val = false) {
  const [openCast, setOpenCast] = useState(val);
  const setOnCast = () => setOpenCast(true);
  const setOffCast = () => setOpenCast(false);

  return { openCast, setOnCast, setOffCast };
}
