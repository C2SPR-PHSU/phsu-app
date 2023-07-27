// ProfileButtons.js
import { Grid, Button } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useMediaQueries } from "./BMediaQuerys";
import sxStyles from "../ItemSx";
import profileScss from "../../Profile/profile.module.scss";
import { useFormikContext } from 'formik';

interface IProfileButtons {
  isEditMode: boolean;
  submitClick: (param: string) => void;
}

const ProfileButtons = ({ isEditMode, submitClick }: IProfileButtons) => {
  const { isScreenLg, isVeryScreenSmall, isMedium } = useMediaQueries();
  const { submitForm } = useFormikContext() ?? {};
  return (
    <Grid
      item
      sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).itemButtons}
    >
      <Button
        variant="outlined"
        className={profileScss["profiles-button"]}
        type="submit"
        onClick={() =>  submitForm()}
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
