import { createContext, useContext, useState, useEffect } from "react";
import { createTheme } from "@mui/material/styles";

const DarkThemeContext = createContext();

// Func will be called to fetch any data from passed values by construction
export const ChangeTheme = () => {
  return useContext(DarkThemeContext);
};

const DarkThemeProvider = ({ children }) => {
  const [myMode, setMyMode] = useState("");

  const myPalette =
    myMode == "light"
      ? {
          background: {
            default: "#FFFFFF",
            mainColor: "#e60000",
            secColor: "#fec223",
          },
          text: {
            primary: "#131313",
            mainColor: "#e60000",
            secColor: "#fec223",
          },
          divider: {
            primary: "#dddcdc",
          },
          border: {
            primary: "#898989",
          },
        }
      : {
          background: {
            default: "#131313",
            secColor: "#e60000",
            mainColor: "#fec223",
          },
          text: {
            primary: "#E7E8E8",
            mainColor: "#e60000",
            secColor: "#fec223",
          },
          divider: {
            primary: "#5c5a5a",
          },
          border: {
            primary: "#898989",
          },
        };

  const lightTheme = createTheme({
    palette: {
      background: {
        default: "#FFFFFF",
      },
      text: {
        primary: "#131313",
      },
      divider: {
        primary: "#dddcdc",
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
      divider: {
        primary: "#5c5a5a",
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
      value={{ myMode, setMyMode, lightTheme, darkTheme, myPalette }}
    >
      {children}
    </DarkThemeContext.Provider>
  );
};

export default DarkThemeProvider;
