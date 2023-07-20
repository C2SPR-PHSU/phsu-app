import { Grid, Box } from "@mui/material";
import styles from "./styles.module.scss";
import AppsIcon from "@mui/icons-material/Apps";
import FeedIcon from "@mui/icons-material/Feed";
import PersonIcon from "@mui/icons-material/Person";
import TransitEnterexitIcon from "@mui/icons-material/TransitEnterexit";
import Options from "./components/Options";
import { PATH } from "@/routes/constants";
import useAuthStore from "@/hooks/useAuthStore";
import { useMediaQueries } from "@/components/BMediaQueries";

const Sidebar = () => {
  const logout = useAuthStore((state: any) => state.setLogout);
  const { isScreenLg, isVeryScreenSmall, isMedium, isXLarge, isXsmall } =
    useMediaQueries();
  const handleLogout = () => {
    // Call the logout function to log out the user
    logout();
  };

  return (
    <Grid
      className={isMedium ? styles["container-small"] : styles["container"]}
      sx={{
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box>
        <Options
          children={
            <AppsIcon
              sx={{
                color: "white",
                fontSize: "1.5rem !important",
                ...(isMedium && {
                  color: "#009999",
                  fontSize: "3rem !important",
                }),
              }}
            />
          }
          text="Of Sense"
          textColor={isMedium ? "#009999" : "white"}
        />
      </Box>

      <Box>
        <Options
          children={
            <FeedIcon
              sx={{
                color: "white",
                fontSize: "1.5rem",
                ...(isMedium && {
                  color: "#009999",
                  fontSize: "2.8rem !important",
                }),
              }}
            />
          }
          text="Services Request"
          redirect={PATH.REQUEST_SERVICES}
          textColor={isMedium ? "#009999" : "white"}
        />
      </Box>

      <Box>
        <Options
          children={
            <PersonIcon
              sx={{
                color: "white",
                fontSize: "1.5rem",
                ...(isMedium && {
                  color: "#009999",
                  fontSize: "3rem !important",
                }),
              }}
            />
          }
          text="Profile"
          textColor={isMedium ? "#009999" : "white"}
        />
      </Box>

      <Box
        onClick={handleLogout}
        sx={{
          ...(isMedium && {
            display: "none",
          }),
        }}
      >
        <Options
          children={
            <TransitEnterexitIcon
              sx={{
                color: "white",
                fontSize: "1.5rem",
                ...(isMedium && {
                  color: "#009999",
                  fontSize: "3rem !important",
                }),
              }}
            />
          }
          text="Sign Out"
          textColor={isMedium ? "#009999" : "white"}
        />
      </Box>
    </Grid>
  );
};

export default Sidebar;
