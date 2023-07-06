import { Grid, Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import AppsIcon from "@mui/icons-material/Apps";
import FeedIcon from "@mui/icons-material/Feed";
import PersonIcon from "@mui/icons-material/Person";
import TransitEnterexitIcon from "@mui/icons-material/TransitEnterexit";
import Options from "./components/Options";
import { PATH } from "@/routes/constants";

const Sidebar = () => {
  return (
    <Grid className={styles["container"]} sx={{ flexDirection: "column" }}>
      <Options
        children={<AppsIcon sx={{ color: "white" }} />}
        text="Of Sense"
      />
      <Options
        children={<FeedIcon sx={{ color: "white" }} />}
        text="Services Request"
        redirect={PATH.REQUEST_SERVICES}
      />
      <Options
        children={<PersonIcon sx={{ color: "white" }} />}
        text="Profile"
      />
      <Options
        children={<TransitEnterexitIcon sx={{ color: "white" }} />}
        text="Sign Out"
      />
    </Grid>
  );
};

export default Sidebar;
