import { useState } from 'react';

const useLocationTracker = () => {
  const [lotIsActive, setlotIsActive] = useState<boolean>(false);

  const toggleLocationTracker = () => {
    setlotIsActive((prev) => !prev);
  };

  return {lotIsActive, toggleLocationTracker}
};

export default useLocationTracker;