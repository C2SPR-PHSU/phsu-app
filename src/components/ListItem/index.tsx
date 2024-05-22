import { Grid, Box, Typography, Link } from "@mui/material";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

interface ResponsiveComponentProps {
  number: string;
  listItem: string;
  description: string;
  url: string;
  note?: string
}

const ListItem: React.FC<ResponsiveComponentProps> = ({
  number,
  listItem,
  description,
  url,
  note = ''
}) => {

  const [customNote, setCustomNote] = useState('')

  useEffect(() => {
    if (note?.length > 0) setCustomNote(`${note}`)
  }, [])

  return (
    <Grid item xs={12} className={styles["container"]}>
      <Box className={styles["circle"]}>
        <Typography className={styles["number"]}>{number}</Typography>
      </Box>
      <Box className={styles["services"]}>
        {/* <Link href={url} className={styles["link"]}>
          <Typography variant="h5" className={styles["list-item"]}>
            {listItem}
          </Typography>
        </Link> */}
        <Typography variant="h5" className={styles["list-item"]}>
          <Link color={'#009999 !important'} href={url} rel="noopener" target="_blank"
            sx={{
              color: '#009999',
              textDecoration: 'underline',
              textDecorationThickness: '2px', // Ajusta el grosor del subrayado
              textUnderlineOffset: '4px', // Ajusta la posición del subrayado
              '&:hover': {
                textDecorationColor: 'inherit',
              },
            }}
          >{listItem}&nbsp;
            {customNote !== '' &&
              <Typography variant="h6" fontWeight={'bold'} fontSize={'1rem'} className={styles["list-item-note"]}>{customNote} </Typography >
            }
          </Link>
        </Typography>
        <Typography className={styles["list-item-description"]}>
          {description}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ListItem;
