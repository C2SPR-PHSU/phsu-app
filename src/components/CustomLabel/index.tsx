import { Typography } from "@mui/material";
import styles from "./label.module.scss";

interface CustomLabelProps {
  name: string;
  required: boolean;
}

const CustomLabel = ({ name, required }: CustomLabelProps) => (
  <Typography variant="body1" sx={{ py: 1 }} className={styles["title"]}>
    {name}{" "}
    {required && (
      <span style={{ color: "red", position: "relative", bottom: "-0.2em" }}>
        *
      </span>
    )}
  </Typography>
);

export default CustomLabel;
