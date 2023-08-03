import { Grid, Typography, Divider } from "@mui/material";
import profileScss from "./Profile.module.scss";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { validationSchema } from "./validateconstants";
import { UserProfile, UserDetails } from "./users";
import { UserModify } from "./users";
import useAuthStore from "@/hooks/useAuthStore";
import useAlert from "@/hooks/useAlert";
import { 
  ProfilePhoto, 
  ProfileButtons, 
  ProfileTitle, 
  PersonalInformation, 
  AcademicInformation, 
  AddressInformation, 
  PersonalInformation2 } from "./components";

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userProfile, setUserProfile] = useState<Partial<UserProfile>>({});

  const token = useAuthStore((state: any) => state.token);
  const { setAlert } = useAlert();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await UserDetails(token);
        setUserProfile(profile);
        console.log(profile);
        console.log(userProfile);
        // Actualizar las initialValues de formik con los datos obtenidos
        formik.setValues({
          email: profile?.email || "",
          cell_phone: profile?.cell_phone || "",
          studentid: profile?.student_id || "",
          firstname: profile?.first_name || "",
          middlename: profile?.middle_name || "",
          lastname: profile?.last_name || "",
          secondlastname: profile?.second_last_name || "",
          birthdate: profile?.birthdate || "",
          line1: profile?.address_line1 || "",
          line2: profile?.address_line2 || "",
          state: profile?.address_state || "",
          city: profile?.address_city || "",
          zipcode: profile?.address_zipcode || "",
          alternative_phone: profile?.alternative_phone || "",
          institucional_email: profile?.institucional_email || "",
          entranceYear: profile?.entrance_year || "",
          campusMain: profile?.campus || "",
          entranceTerm: profile?.entrance_terms || "",
          program: profile?.program || "",
        });
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUserProfile();
  }, [token]);

  const formik = useFormik({
    initialValues: {
      email: userProfile?.email || "",
      cell_phone: userProfile?.cell_phone || "",
      studentid: userProfile?.student_id || "",
      firstname: userProfile.first_name,
      middlename: userProfile?.middle_name || "",
      lastname: userProfile?.last_name || "",
      secondlastname: userProfile?.second_last_name || "",
      birthdate: userProfile?.birthdate || "",
      line1: userProfile?.address_line1 || "",
      line2: userProfile?.address_line2 || "",
      state: userProfile?.address_state || "",
      city: userProfile?.address_city || "",
      zipcode: userProfile?.address_zipcode || "",
      alternative_phone: userProfile?.alternative_phone || "",
      institucional_email: userProfile?.institucional_email || "",
      entranceYear: userProfile?.entrance_year || "",
      campusMain: userProfile?.campus || "",
      entranceTerm: userProfile?.entrance_terms || "",
      program: userProfile?.program || "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (formik.isValid) {
        console.log(values);
        setIsEditMode(!isEditMode);

        if (isEditMode) {
          const response = await UserModify(token, values);
          if (response.code === 200 && response.data.action === "update") {
            setAlert("Update successfullly", "success");
          }

          console.log("soy response", response);
        }
      } else {
        alert("Please fix the errors before saving."); // Advertencia de error
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid container sx={{ padding: '3rem' }}>
          <Grid item xs={12} sx={{ paddingLeft: '5rem', marginBottom: '2rem'}}>
            <ProfileTitle />
          </Grid>
          <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', paddingTop: '2rem' }}>
            <ProfilePhoto />
            <ProfileButtons isEditMode={isEditMode} />
          </Grid>
          <Grid item xs={9} sx={{ paddingTop: '2rem' }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  className={profileScss["title-address-information"]}
                  sx={{ paddingBottom: '1rem' }}
                >
                  Personal Information
                </Typography>
              </Grid>
              <PersonalInformation isEditMode={isEditMode} formik={formik} />
              <PersonalInformation2 isEditMode={isEditMode} formik={formik} />
              <Divider
                orientation="horizontal"
                sx={{
                  borderBottom: "1px solid gray",
                  width: "95%",
                  paddingTop: "1rem",
                }}
              />
              <AcademicInformation isEditMode={isEditMode} formik={formik} />
              <AddressInformation isEditMode={isEditMode} formik={formik} />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Profile;
