import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const LightModeContext = createContext();

function LightModeProvider({ children }) {
  const [isLightMode, setIsLightMode] = useLocalStorageState(
    !window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isLightMode"
  );

  useEffect(
    function () {
      if (isLightMode) {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      } else {
        document.documentElement.classList.remove("light-mode");
        document.documentElement.classList.add("dark-mode");
      }
    },
    [isLightMode]
  );

  function toggleLightMode() {
    setIsLightMode((isLight) => !isLight);
  }

  return (
    <LightModeContext.Provider value={{ isLightMode, toggleLightMode }}>
      {children}
    </LightModeContext.Provider>
  );
}

function useLightMode() {
  const context = useContext(LightModeContext);
  if (context === undefined)
    throw new Error("LightModeContext was used outside of LightModeProvider");
  return context;
}

export { LightModeProvider, useLightMode };
