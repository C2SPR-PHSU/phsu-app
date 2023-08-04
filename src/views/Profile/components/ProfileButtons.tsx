import { Grid, Button } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import profileScss from "../../Profile/Profile.module.scss";

interface IProfileButtons {
  isEditMode: boolean;
  activateEditForm: () => void;
  submitForm: () => void;
  uploadPhoto: (e: React.ChangeEvent) => void;
}

const ProfileButtons = ({ isEditMode, activateEditForm, submitForm, uploadPhoto }: IProfileButtons) => {
  return (
    <Grid
      item
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '2rem' }}
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
      <Button
        variant="outlined"
        className={profileScss["profiles-button"]}
        component="label"
      >
        Change
        <input type="file" id="avatar" name="avatar" accept="image/png" onChange={(e) => uploadPhoto(e)} hidden />
        &nbsp;
        <CameraAltIcon />
      </Button>
    </Grid>
  );
};

export default ProfileButtons;
