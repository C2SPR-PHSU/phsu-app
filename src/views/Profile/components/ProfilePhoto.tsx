import { Grid } from "@mui/material";
import sxStyles from "../ItemSx";
import profileScss from "../../Profile/Profile.module.scss";
import useAuthStore from "@/hooks/useAuthStore";
import { useEffect, useState } from "react";

const ProfilePhoto = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL
  const token = useAuthStore((state: any) => state.token);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    console.log(BASE_URL)
    if (token) {
      setImageUrl(`${BASE_URL}/avatar.php?t=${token}`)
    } else {
      setImageUrl(`${BASE_URL}/avatar.php?t=4893439482342390482390432902390394085757895`)
    }
  }, [token])

  return (
    <Grid
      item
      sx={{ display: 'flex', padding: 0, justifyContent: 'center' }}
    >
      <img
        src={imageUrl}
        alt="user-photo"
        className={profileScss["img-profile-style"]}
      />
    </Grid>
  );
};

export default ProfilePhoto;
