import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AddresLine2 from "./AddressLine2"; // Asegúrate de ajustar la ruta
import AddresCity from "./AddressCity"; // Asegúrate de ajustar la ruta
import StateField from "./StateField"; // Asegúrate de ajustar la ruta
import ZipCodeField from "./ZipCodeField"; // Asegúrate de ajustar la ruta
import AddresLine1 from "./Address1Field";
import SectionTitle from "./Title";
const AddressSection = ({ formik }) => {
  return (
    <Grid container spacing={2} sx={{ py: 1 }}>
      <SectionTitle title="Address" />
      <AddresLine1 formik={formik} />
      <AddresLine2 formik={formik} />
      <AddresCity formik={formik} />
      <StateField formik={formik} />
      <ZipCodeField formik={formik} />
    </Grid>
  );
};

export default AddressSection;
