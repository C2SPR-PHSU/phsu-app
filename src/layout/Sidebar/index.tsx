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
    <Grid className={styles["container"]} sx={{ flexDirection: "column", height: '100%' }}>
      <Options
        children={<AppsIcon sx={{ color: "white", fontSize: '1.5rem !important' }} />}
        text="Of Sense"
      />
      <Options
        children={<FeedIcon sx={{ color: "white", fontSize: '1.5rem' }} />}
        text="Services Request"
        redirect={PATH.REQUEST_SERVICES}
      />
      <Options
        children={<PersonIcon sx={{ color: "white", fontSize: '1.5rem' }} />}
        text="Profile"
      />

      <Options
        children={<TransitEnterexitIcon sx={{ color: "white", fontSize: '1.5rem' }} />}
        text="Sign Out"
      />

    </Grid>
  );
};

export default Sidebar;
