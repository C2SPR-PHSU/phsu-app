// ProfilePhoto.js
import { Grid } from "@mui/material";
import { useMediaQueries } from "./BMediaQuerys";
import sxStyles from "../ItemSx";
import profileScss from "../../Profile/Profile.module.scss";

const ProfilePhoto = () => {
  const { isScreenLg, isVeryScreenSmall, isMedium } = useMediaQueries();
  return (
    <Grid 
      item 
      // sx={sxStyles(isVeryScreenSmall, null, null).itemPhoto}
      sx={{ display: 'flex', padding: 0, justifyContent: 'center'}}
    >
      <img
        src="https://randomuser.me/api/portraits/women/60.jpg"
        alt="user-photo"
        className={profileScss["img-profile-style"]} // Puedes utilizar sx para estilos específicos de la imagen
      />
    </Grid>
  );
};

export default ProfilePhoto;
