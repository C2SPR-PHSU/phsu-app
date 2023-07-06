import { Alert } from "@mui/material";
import useAlert from "@/hooks/useAlert";
import { useGlobalContext } from "@/contexts/MainContext";

const AlertPopup = () => {
  const { text, type } = useAlert();
  const { globalState } = useGlobalContext();

  if (globalState.activate) {
    return (
      <Alert
        severity={type}
        sx={{
          position: "absolute",
          bottom: 0,
          zIndex: 10,
        }}
      >
        <p>{`${globalState.activate}`}</p>
      </Alert>
    );
  } else {
    return <></>;
  }
};

export default AlertPopup;
