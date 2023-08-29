import { createContext, useContext, useState, useEffect } from "react";
import { createTheme } from "@mui/material/styles";

const DarkThemeContext = createContext();

// Func will be called to fetch any data from passed values by construction
export const ChangeTheme = () => {
  return useContext(DarkThemeContext);
};

const DarkThemeProvider = ({ children }) => {
  const [myMode, setMyMode] = useState("");

  const lightTheme = createTheme({
    palette: {
      background: {
        default: "#FFFFFF",
      },
      text: {
        primary: "#131313",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      background: {
        default: "#131313",
      },
      text: {
        primary: "#E7E8E8",
      },
    },
  });

  useEffect(() => {
    let currentMode;
    // Get the value from local storage if it exists
    currentMode = localStorage.getItem("currentMode") || "light";
    setMyMode(currentMode);
  }, []);

  return (
    <DarkThemeContext.Provider
      // Values provider will provide
      value={{ myMode, setMyMode, lightTheme, darkTheme }}
    >
      {children}
    </DarkThemeContext.Provider>
  );
};

export default DarkThemeProvider;
