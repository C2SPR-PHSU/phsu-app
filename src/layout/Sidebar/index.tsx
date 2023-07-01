import { Box } from "@mui/material";
import { Apps, Feed, Person, TransitEnterexit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import Options from "./components/Options";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleOptionClick = (path: string) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <Box className={styles.container} sx={{ flexDirection: "column" }}>
      <Options
        children={<Apps sx={{ color: "white" }} />}
        text="Of Sense"
        path="/" // Agregado el valor de la ruta para la opción "Of Sense"
        onClick={handleOptionClick}
      />
      <Options
        children={<Feed sx={{ color: "white" }} />}
        text="Services Request"
        path="/services" // Agregado el valor de la ruta para la opción "Services Request"
        onClick={handleOptionClick}
      />
      <Options
        children={<Person sx={{ color: "white" }} />}
        text="Profile"
        path="/profile" // Agregado el valor de la ruta para la opción "Profile"
        onClick={handleOptionClick}
      />
      <Options
        children={<TransitEnterexit sx={{ color: "white" }} />}
        text="Sign Out"
        path="/signout" // Agregado el valor de la ruta para la opción "Sign Out"
        onClick={handleOptionClick}
      />
    </Box>
  );
};

export default Sidebar;
