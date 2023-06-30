import { Grid } from "@mui/material";
import { Navigator, Navbar, ListItem } from "@/components";
import styles from "./login.module.scss";
import { servicesList, description, welcomeTitle, serviceTitle } from "./constants";

const Login = () => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Navigator />
        <Navbar />
      </Grid>
      <Grid container>
        <Grid item xs={12} md={6}>
          <section className={styles['welcome-container']}>
            <div className={styles['background-image']}>
              <div className={styles['text']}>{welcomeTitle}</div>
              <div className={styles['description']}>{description}</div>
            </div>
          </section>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid item xs={12} sx={{padding: '2rem 3rem'}}>
            <div className={styles['title']}>{serviceTitle}</div>
              {servicesList.map((service) => {
                return (
                  <ListItem
                    key={service.number}
                    number={service.number}
                    listItem={service.listItem}
                    description={service.description}
                    url={service.url}
                  />
                );
              })}
          </Grid>
        </Grid>
      </Grid>
      {/* <div className={styles.footer}></div> */}
    </>
  );
};

export default Login;
