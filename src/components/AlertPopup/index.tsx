import { Alert, Stack, AlertTitle } from "@mui/material";
import useAlert from "@/hooks/useAlert";

const AlertPopup = () => {
  const { text, type } = useAlert();

  if (text.length) {
    return (
      <Stack
        sx={{ 
          width: '20%',
          position: 'absolute',
          right: '2%',
          top: '2%'
        }} 
        spacing={2}
      >
        <Alert severity={type}>
          <AlertTitle sx={{ textTransform: 'capitalize' }}>{ type }</AlertTitle>
          { text }
        </Alert>
      </Stack>
    );
  } else {
    return <></>;
  }
};

export default AlertPopup;
