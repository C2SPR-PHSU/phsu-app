import { Grid } from '@mui/material';
import './ListItem.sass'


interface ResponsiveComponentProps {
  number: string;
  listItem: string;
  descriptions: string;
  url: string;
}

const List_item: React.FC<ResponsiveComponentProps> = ({ number, listItem, descriptions, url }) => {
  return (
    <Grid item xs={12}>
        
        <a href={url} className="a">
            <div className="circle"><p className="number">{number}</p></div>
            
            <div className="two_elements">
            
                <div className="list_item">{listItem}</div>
                <div className="descriptions">{descriptions}</div>
            
            </div>
        </a>
    </Grid>
  );
};

export default List_item;
