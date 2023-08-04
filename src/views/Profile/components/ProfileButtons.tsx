// ProfileButtons.js
import { Grid, Button } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import profileScss from "../../Profile/Profile.module.scss";
// import { useFormikContext } from 'formik';

interface IProfileButtons {
  isEditMode: boolean;
  activateEditForm: () => void;
  submitForm: () => void;
}

const ProfileButtons = ({ isEditMode, activateEditForm, submitForm }: IProfileButtons) => {
  return (
    <Grid
      item
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '2rem'}}
    >
      {
        isEditMode ? 
        <Button
          variant="outlined"
          className={profileScss["profiles-button"]}
          type="submit"
          onClick={submitForm}
        >
          Save Profile
        </Button> : 
        <Button
            variant="outlined"
            className={profileScss["profiles-button"]}
            type="button"
            onClick={() => activateEditForm()}
          >
            Edit Profile
          </Button>
      }
      <Button variant="outlined" className={profileScss["profiles-button"]}>
        Change
        <CameraAltIcon />
      </Button>
    </Grid>
  );
};

export default ProfileButtons;
