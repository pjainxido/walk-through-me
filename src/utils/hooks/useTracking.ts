import { useState } from 'react';

const useTracking= () => {
  const [lotIsActive, setlotIsActive] = useState<boolean>(false);

  const toggleLocationTracker = () => {
    setlotIsActive((prev) => !prev);
  };

  return {lotIsActive, toggleLocationTracker}
};

export default useTracking;