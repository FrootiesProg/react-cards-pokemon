
import { useState } from "react";


function useFlip() {
  // Create a state variable isFacingUp and a function setIsFacingUp using the useState hook
  const [isFacingUp, setIsFacingUp] = useState(true);

  // Define a function flipCard that toggles the value of isFacingUp
  const flipCard = () => {
    // Use the setIsFacingUp function to update the state by toggling the value
    setIsFacingUp((isUp) => !isUp);
  };


  return [isFacingUp, flipCard];
}

export default useFlip;
