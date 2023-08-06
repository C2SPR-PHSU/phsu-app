import { Grid, Box } from "@mui/material";
import styles from "./styles.module.scss";
import AppsIcon from "@mui/icons-material/Apps";
import FeedIcon from "@mui/icons-material/Feed";
import PersonIcon from "@mui/icons-material/Person";
import TransitEnterexitIcon from "@mui/icons-material/TransitEnterexit";
import Options from "./components/Options";
import { PATH } from "@/routes/constants";
import useAuthStore from "@/hooks/useAuthStore";
import { logOut } from "@/utils/";
import { useMediaQueries } from "@/components/BMediaQuerys";

const Sidebar = () => {
  const logout = useAuthStore((state: any) => state.setLogout);
  const token = useAuthStore((state: any) => state.token);

  const handleLogout = async () => {
    try {
      await logOut(token);
      logout();
    } catch (error) {
      console.log("error");
      logout();
    }
  };
  const { isScreenLg, isVeryScreenSmall, isMedium } = useMediaQueries();

  const iconSizeNormal = "1rem";
  const iconSizeMedium = "2rem";

  // Variables para colores
  const normalColor = "white";
  const mediumColor = "#009999";

  const textSmall = "0.6rem";
  const textNormal = "1rem";

  return (
    <Grid
      className={isMedium ? styles["container-small"] : styles["container"]}
      sx={{ flexDirection: "column", height: "100%" }}
    >
      <Options
        fontSze={isVeryScreenSmall ? textSmall : textNormal}
        textColor={isMedium ? mediumColor : normalColor}
        children={
          <AppsIcon
            sx={{
              color: isMedium ? mediumColor : normalColor,
              fontSize: isMedium ? iconSizeMedium : iconSizeNormal,
            }}
          />
        }
        text="Of Sense"
      />

      <Options
        fontSze={isVeryScreenSmall ? textSmall : textNormal}
        textColor={isMedium ? mediumColor : normalColor}
        children={
          <FeedIcon
            sx={{
              color: isMedium ? "#009999" : "white",
              fontSize: isMedium ? iconSizeMedium : iconSizeNormal,
            }}
          />
        }
        text="Services Request"
        redirect={PATH.REQUEST_SERVICES}
      />
      <Options
        fontSze={isVeryScreenSmall ? textSmall : textNormal}
        textColor={isMedium ? mediumColor : normalColor}
        children={
          <PersonIcon
            sx={{
              color: isMedium ? mediumColor : normalColor,
              fontSize: isMedium ? iconSizeMedium : iconSizeNormal,
            }}
          />
        }
        text="Profile"
        redirect={PATH.PROFILE}
      />

      <Box onClick={handleLogout}>
        <Options
          fontSze={isVeryScreenSmall ? textSmall : textNormal}
          textColor={isMedium ? mediumColor : normalColor}
          children={
            <TransitEnterexitIcon
              sx={{
                color: isMedium ? mediumColor : normalColor,
                fontSize: isMedium ? iconSizeMedium : iconSizeNormal,
              }}
            />
          }
          text="Sign Out"
        />
      </Box>
    </Grid>
  );
};

export default Sidebar;
