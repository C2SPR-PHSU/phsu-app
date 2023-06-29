import { Grid } from '@mui/material';
import stylesItem from './ListItem.module.sass'

interface ResponsiveComponentProps {
  number: string;
  listItem: string;
  descriptions: string;
  url: string;
}

const List_item: React.FC<ResponsiveComponentProps> = ({ number, listItem, descriptions, url }) => {
  return (
    <Grid item xs={12}>
        
        <a href={url} className={stylesItem.a}>
            <div className={stylesItem.circle}><p className={stylesItem.number}>{number}</p></div>
            
            <div className={stylesItem.two_elements}>
            
                <div className={stylesItem.list_item}>{listItem}</div>
                <div className={stylesItem.descriptionsLogin}>{descriptions}</div>
            
            </div>
        </a>
    </Grid>
  );
};

export default List_item;
