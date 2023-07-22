import { useEffect } from "react";

const useModalVisibilityEffect = (isOpen) => {
  useEffect(() => {
    console.log("Modal visibility changed:", isOpen); // Logging for debugging
  }, [isOpen]);
};

export default useModalVisibilityEffect;
