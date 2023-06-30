import { createContext, ReactNode, useState } from "react";

const ALERT_TIME = 5000;
const initialState = {
  text: "",
  type: "",
};

type AlertProviderProps = { children: ReactNode };
type AlertColor = "success" | "info" | "warning" | "error";

const AlertContext = createContext({
  ...initialState,
  setAlert: () => {},
});

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const [text, setText] = useState("");
  const [type, setType] = useState("");

  const setAlert = (text: string, type: AlertColor) => {
    setText(text);
    setType(type);

    setTimeout(() => {
      setText("");
      setType("");
    }, ALERT_TIME);
  };

  return (
    <AlertContext.Provider
      value={{
        text,
        type,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
