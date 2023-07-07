import { Box } from "@mui/material";
import { Apps, Feed, Person, TransitEnterexit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import Options from "./components/Options";
import { PATH } from "@/routes/constants";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleOptionClick = (path: string) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <Grid className={styles["container"]} sx={{ flexDirection: "column", height: '100%' }}>
      <Options
        children={<Apps sx={{ color: "white" }} />}
        text="Of Sense"
        path="/" // Agregado el valor de la ruta para la opción "Of Sense"
        onClick={handleOptionClick}
      />
      <Options
        children={<Feed sx={{ color: "white" }} />}
        text="Services Request"
        redirect={PATH.REQUEST_SERVICES}
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
