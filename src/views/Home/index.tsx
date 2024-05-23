import { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import styles from "./styles.module.scss";
import BasicTable from "./components/table/index";
import useAlert from "@/hooks/useAlert";
import RequiredDocuments from "./components/RequiredDocuments";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import useAuthStore from "@/hooks/useAuthStore";
import { useNavigate } from "react-router-dom";
import { logOut } from "@/utils/";
import Logo from "../../assets/images/logo-phsu.png";

const Home = () => {
  const { setAlert } = useAlert();
  const logout = useAuthStore((state: any) => state.setLogout);
  const token = useAuthStore((state: any) => state.token);
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [docTitle, setDocTitle] = useState("");
  const [campusId, setCampusId] = useState("");
  const [documentId, setDocumentId] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const handleModal = (prop: string) => {
    setDocTitle(prop);
    setOpenModal(true);
  };

  const handleLogout = async () => {
    try {
      await logOut(token);
      logout();
      navigate('/')
    } catch (error) {
      navigate('/')
      logout();
    }
  };

  setTimeout(() => {
    //LogOut after 60min - 3600000ms
    setAlert("Session expired", "warning")
    handleLogout()
  }, 3600000);

  return (
    <Grid
      container
      sx={{
        minHeight: "90vh",
        ...(isMobile && {
          minHeight: "73vh",
          paddingBottom: "30vh",
        }),
      }}
    >

      {isMobile ?
        <Grid sx={{
          display: "flex",
          justifyContent: 'center',
          maxHeight: "25vh",
          marginBottom: "0rem",
          padding: '1rem'
        }}>
          <img
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
            src={Logo}
            alt="logo-phsu" />
        </Grid>
        :
        <Grid
          item
          xs={12}
          className={styles["image-banner"]}
        >
          <Box className={styles["text-container"]}></Box>
        </Grid>

      }

      <Grid
        item
        xs={12}
        py={4}
        px={8}
        className={styles["information-container"]}
        sx={{
          ...(isMobile && {
            paddingLeft: "0rem",
            paddingTop: "0rem",
            paddingRight: "0rem",
          }),
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h5"
            className={styles["subtitle"]}
            sx={{
              marginTop: "2rem",
              fontSize: "2rem",
              paddingBottom: "0.7rem",
              ...(isMobile && {
                fontSize: "1.4rem",
                paddingLeft: "1rem",
                paddingTop: "2rem",
                textAlign: 'center'
              }),
            }}
          >
            Requested Services
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            className={styles["description"]}
            sx={{
              marginTop: "2rem",
              fontSize: "1rem",
              ...(isMobile && {
                fontSize: "0.9rem",
                paddingTop: "1rem",
                paddingLeft: "1rem",
              }),
            }}
          >
            Review your service request status and any pending actions.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            padding: "2rem 0",
          }}
        >
          <BasicTable
            handleModal={(prop) => handleModal(prop)}
            setDocumentId={(prop) => setDocumentId(prop)}
            setCampusId={(prop) => setCampusId(prop)}
          />
          {openModal && (
            <RequiredDocuments
              title={docTitle}
              open={openModal}
              campusId={campusId}
              documentId={documentId}
              handleClose={() => setOpenModal(false)}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
