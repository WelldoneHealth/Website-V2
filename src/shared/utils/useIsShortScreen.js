import { useEffect, useState } from 'react';

// Custom hook to detect if the screen height is smaller than 900px
function useIsShortScreen() {
  const [isShortScreen, setIsShortScreen] = useState(false);

  useEffect(() => {
    const checkHeight = () => setIsShortScreen(window.innerHeight < 900);

    // Check the initial screen height
    checkHeight();

    // Add event listener to detect window resizing
    window.addEventListener("resize", checkHeight);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", checkHeight);
  }, []); // Empty dependency array, so it runs once on mount

  return isShortScreen; // Return the state to be used in your component
}

export default useIsShortScreen;
