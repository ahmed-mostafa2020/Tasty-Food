import { Button } from "@mui/material";
import { ChangeTheme } from "../context/ThemeContext";
import { Brightness7, Brightness4 } from "@mui/icons-material";

const Navbar = () => {
  const { myMode, setMyMode } = ChangeTheme();
  console.log(myMode);

  const handleClick = () => {
    localStorage.setItem("currentMode", myMode === "light" ? "dark" : "light");
    setMyMode(myMode === "light" ? "dark" : "light");
  };

  return (
    <div className="navbar">
      <h1>Hii, i am navbar</h1>

      <Button sx={{ ml: 1 }} onClick={handleClick} color="inherit">
        {myMode === "dark" ? (
          <Brightness7 sx={{ color: "orange" }} />
        ) : (
          <Brightness4 />
        )}
      </Button>
    </div>
  );
};

export default Navbar;
