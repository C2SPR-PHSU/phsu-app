import { Grid } from '@mui/material';
import styles from './styles.module.scss';

interface ResponsiveComponentProps {
  number: string;
  listItem: string;
  description: string;
  url: string;
}

const ListItem: React.FC<ResponsiveComponentProps> = ({ number, listItem, description, url }) => {
  return (
    <Grid item xs={12} sx={{paddingBottom: '2rem'}}>
      <a href={url} className={styles['link']}>
        <div className={styles['circle']}><p className={styles['number']}>{number}</p></div>
        <div className={styles['services']}>
          <div className={styles['list-item']}>{listItem}</div>
          <div className={styles['list-item-description']}>{description}</div>
        </div>
      </a>
    </Grid>
  );
};

export default ListItem;
