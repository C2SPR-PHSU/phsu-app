import Grid from "@mui/material/Grid";
import SectionTitle from "../AddressSection/Title";
import FirstNameField from "./FirstNameField";
import MiddleNameField from "./MiddleNameField";
import SecondLastNameField from "./SecondLastName";
import LastNameField from "./LastNameField";
import DateOrBirth from "./DateOrBirth";
import PhoneNumberField from "./PhoneNumberField";
import StudentIdField from "./StudentIdField";
import EmailField from "./EmailField";


const PersonalSecction = ({formik}) => {
  return (
    <Grid container spacing={2} sx={{ py: 1 }}>
    <SectionTitle title="Personal Information" />
          {/* FistName */}
          <FirstNameField formik={formik} />
          {/* ---------------------------Middle Name---------------------------------------- */}
          <MiddleNameField formik={formik} />
          {/* ---------------------------LastName------------------------------------------ */}
          <LastNameField formik={formik} />
          {/* ------------------------------Second LastName-------------------------------------- */}
          <SecondLastNameField formik={formik} />
          {/* ------------------------------------------- Date of Birth --------------------------------------- */}

          <DateOrBirth formik={formik} />

          {/* --------------------------------Phone Number-------------------------------------------------- */}
          <PhoneNumberField formik={formik} />

          {/* ----------------------------------------Email ---------------------------------------- */}
          <EmailField formik={formik} />

          {/*---------------------------Student Id--------------------------------------  */}
          <StudentIdField formik={formik} />
  </Grid>
  )
}

export default PersonalSecction
