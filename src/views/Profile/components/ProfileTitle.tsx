import { Typography } from "@mui/material";
import { useMediaQueries } from "./BMediaQuerys";
import sxStyles from "../ItemSx";
import profileScss from "../../Profile/profile.module.scss";

const ProfileTitle = () => {
  const { isScreenLg, isVeryScreenSmall, isMedium } = useMediaQueries();
  return (
    <Typography
      variant="h3"
      className={profileScss["title"]}
      sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).title}
    >
      Profile
    </Typography>
  );
};

export default ProfileTitle;
