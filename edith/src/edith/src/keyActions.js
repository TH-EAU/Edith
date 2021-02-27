import { useKeyPress } from "./resources";

// const handleEnter = useKeyPress("Enter");
// const handleShift = useKeyPress("Shift");

export const HandleSave = () => {
  const handleCrtl = useKeyPress("Meta");
  const handleS = useKeyPress("s");
  return handleCrtl && handleS;
};
