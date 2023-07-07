import { Typography } from "@mui/material";

interface CustomLabelProps {
  name: string;
  textRed: string;
  required: boolean;
}

const LabelForServicesRequest = ({
  name,
  required,
  textRed,
}: CustomLabelProps) => (
  <Typography
    variant="body1"
    sx={{ py: 1, display: "flex", flexDirection: "row", gap: "0.3rem" }}
  >
    {name}
    <Typography sx={{ color: "red" }}>{textRed}</Typography>

    {required && (
      <span style={{ color: "red", position: "relative", bottom: "-0.2em" }}>
        *
      </span>
    )}
  </Typography>
);

export default LabelForServicesRequest;
