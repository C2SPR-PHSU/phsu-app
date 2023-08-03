// ProfileButtons.js
import { Grid, Button } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useMediaQueries } from "./BMediaQuerys";
import sxStyles from "../ItemSx";
import profileScss from "../../Profile/Profile.module.scss";

const ProfileButtons = ({ isEditMode }) => {
  const { isScreenLg, isVeryScreenSmall, isMedium } = useMediaQueries();
  return (
    <Grid
      item
      // sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).itemButtons}
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '2rem'}}
    >
      <Button
        variant="outlined"
        className={profileScss["profiles-button"]}
        type="submit"
      >
        {isEditMode ? "Save Profile" : "Edit Profile"}
      </Button>

      <Button variant="outlined" className={profileScss["profiles-button"]}>
        Change
        <CameraAltIcon />
      </Button>
    </Grid>
  );
};

export default ProfileButtons;
