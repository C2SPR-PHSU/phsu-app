import { Grid, Box, Typography, Divider } from "@mui/material";
import profileScss from "./profile.module.scss";
import sxStyles from "./ItemSx";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { validationSchema } from "./validateconstants";
import { UserDetails } from "./users";
import { UserProfile } from "./users";
import useAuthStore from "@/hooks/useAuthStore";
import { UserModify } from "./users";
import { useMediaQueries } from "./components/BMediaQuerys";
import ProfileButtons from "./components/ProfileButtons";
import ProfilePhoto from "./components/ProfilePhoto";
import ProfileTitle from "./components/ProfileTitle";
import PersonalInformation from "./components/PersonalInformation";
import AcademicInformation from "./components/AcademicInformation";
import AddressInformation from "./components/AddressInformation";
import useAlert from "@/hooks/useAlert";
import PersonalInformation2 from "./components/PersonalInformation2";

const Profile = () => {
  const { isScreenLg, isVeryScreenSmall, isMedium } = useMediaQueries();
  const [isEditMode, setIsEditMode] = useState(false);
  const token = useAuthStore((state: any) => state.token);
  const { setAlert } = useAlert();

  const [userProfile, setUserProfile] = useState<Partial<UserProfile>>({});

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
        <Box sx={{ display: "flex" }}>
          {/*Items, Photo and Buttons content (Box main)  */}
          <Box sx={sxStyles(isVeryScreenSmall, isMedium, isScreenLg).boxMain}>
            {/*Box de foto y botones */}
            <Box
              sx={
                sxStyles(isVeryScreenSmall, isMedium, isScreenLg).boxButtoPhoto
              }
            >
              <Grid
                container
                sx={
                  sxStyles(isVeryScreenSmall, isMedium, null).containButtonPhoto
                }
              >
                <ProfileTitle />

                <ProfilePhoto />

                <ProfileButtons isEditMode={isEditMode} />
              </Grid>
            </Box>

            {/*Box con los grid de personal information */}
            <Box
              sx={
                sxStyles(isVeryScreenSmall, isMedium, isScreenLg)
                  .personalInformation
              }
            >
              <Typography
                variant="h6"
                className={profileScss["title-personal-information"]}
              >
                Personal information
              </Typography>
              <Grid container sx={{ paddingBottom: "10%" }}>
                <PersonalInformation isEditMode={isEditMode} formik={formik} />

                {/*Personal Information 2 */}
                <PersonalInformation2 isEditMode={isEditMode} formik={formik} />

                <Divider
                  orientation="horizontal"
                  sx={{
                    borderBottom: "1px solid gray",
                    width: "95%",
                    paddingTop: "1rem",
                  }}
                />

                {/*Academic Information */}
                <AcademicInformation isEditMode={isEditMode} formik={formik} />

                {/*Adress */}
                <AddressInformation isEditMode={isEditMode} formik={formik} />
              </Grid>
            </Box>
          </Box>
        </Box>
        s
      </form>
    </>
  );
};

export default Profile;
