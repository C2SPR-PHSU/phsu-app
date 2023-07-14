import { Grid, Box, Typography, Link } from "@mui/material";
import styles from "./styles.module.scss";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ResponsiveComponentProps {
  number: string;
  listItem: string;
  description: string;
  url: string;
}

const ListItem: React.FC<ResponsiveComponentProps> = ({
  number,
  listItem,
  description,
  url,
}) => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      item
      xs={12}
      className={styles["container"]}
      sx={{
        ...(isScreenSmall && {
          gap: "0.5rem",
          paddingRight: "1rem",
        }),
      }}
    >
      <Box className={styles["circle"]}>
        <Typography className={styles["number"]}>{number}</Typography>
      </Box>
      <Box className={styles["services"]}>
        <Link href={url} className={styles["link"]}>
          <Typography variant="h5" className={styles["list-item"]}>
            {listItem}
          </Typography>
        </Link>

        <Typography className={styles["list-item-description"]}>
          {description}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ListItem;
