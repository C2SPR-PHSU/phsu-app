import { Grid } from "@mui/material";
import sxStyles from "../ItemSx";
import profileScss from "../../Profile/Profile.module.scss";
import useAuthStore from "@/hooks/useAuthStore";
import { useEffect, useState } from "react";

const ProfilePhoto = () => {
  const token = useAuthStore((state: any) => state.token);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if(token) { 
      setImageUrl(`http://apiphsu.lobsys.net/avatar.php?t=${token}`) 
    } else {
      setImageUrl('http://apiphsu.lobsys.net/avatar.php?t=4893439482342390482390432902390394085757895')
    }
  }, [token])
  
  console.log(imageUrl)
  return (
    <Grid 
      item 
      // sx={sxStyles(isVeryScreenSmall, null, null).itemPhoto}
      sx={{ display: 'flex', padding: 0, justifyContent: 'center'}}
    >
      <img
        // src="https://randomuser.me/api/portraits/women/60.jpg"
        src={imageUrl}
        alt="user-photo"
        className={profileScss["img-profile-style"]} // Puedes utilizar sx para estilos específicos de la imagen
      />
    </Grid>
  );
};

export default ProfilePhoto;
