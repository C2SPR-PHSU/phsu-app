import Grid from "@mui/material/Grid";
import SectionTitle from "../AddressSection/Title";
import PasswordField from "./PasswordField";
import PasswordFieldConfirn from "./PasswordConfirm";

const PasswordSection = ({
  formik,
  showPassword,
  handleTogglePasswordVisibility,
}) => {
  return (
    <Grid container spacing={2} sx={{ py: 1 }}>
      <SectionTitle title="Creation of password" />
      {/* -------------------------------------------------Password -----------------------------------------*/}

      <PasswordField
        formik={formik}
        handleTogglePasswordVisibility={handleTogglePasswordVisibility}
        showPassword={showPassword}
      />

      <PasswordFieldConfirn
        formik={formik}
        handleTogglePasswordVisibility={handleTogglePasswordVisibility}
        showPassword={showPassword}
      />
    </Grid>
  );
};

export default PasswordSection;
