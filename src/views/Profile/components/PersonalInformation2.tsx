import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import profileScss from "../../Profile/Profile.module.scss";
import customTextField from "../sxTexField";
import { FormikProps } from "formik";
import { UserProfile } from "@/types/user";
import { getFormattedDate } from '@/utils/helpers';
import { CustomTextField } from '../constants';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { PhoneInput } from "@/components";

interface IPersonalInformation2 {
  isEditMode: boolean;
  formik: FormikProps<UserProfile>
}


const PersonalInformation2 = ({ isEditMode, formik }: IPersonalInformation2) => {

  const formatPhoneNumber = (phoneNumber: string): string => {
    const cleaned = phoneNumber.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phoneNumber;
  };


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      {
        !isEditMode ? (
          <>
            <Box sx={{ display: 'flex', paddingBottom: '1rem' }}>
              <Typography>Date of Birth: &nbsp;</Typography>
              <Typography sx={{ lineBreak: 'anywhere' }}>{getFormattedDate(formik.values.birthdate)}</Typography>
            </Box>
            <Box sx={{ display: 'flex', paddingBottom: '1rem' }}>
              <Typography>Phone number: &nbsp;</Typography>
              <Typography sx={{ lineBreak: 'anywhere' }}>{formatPhoneNumber(formik.values.cell_phone)}</Typography>
            </Box>
            <Box sx={{ display: 'flex', paddingBottom: '1rem' }}>
              <Typography>Email: &nbsp;</Typography>
              <Typography sx={{ lineBreak: 'anywhere' }}>{formik.values.email}</Typography>
            </Box>
          </>
        ) : (
          <>
            <Grid container sx={{ display: 'flex', paddingBottom: '1rem', width: '100%', textAlign: isMobile ? 'center' : 'start' }}>
              <Grid xs={12} lg={4}>
                <Typography>Date of Birth: &nbsp;</Typography>
              </Grid>

              <Grid xs={12} lg={8}>
                <TextField
                  id="birthdate"
                  name="birthdate"
                  value={formik.values.birthdate}
                  onChange={formik.handleChange}
                  error={formik.touched.birthdate && !!formik.errors.birthdate}
                  helperText={formik.touched.birthdate && formik.errors.birthdate}
                  sx={{ ...CustomTextField, width: '80%' }}
                  type="date"
                />
              </Grid>
            </Grid>

            <Grid container sx={{ display: 'flex', paddingBottom: '1rem', width: '100%', textAlign: isMobile ? 'center' : 'start' }}>
              <Grid xs={12} lg={4}>
                <Typography>Phone number: &nbsp;</Typography>
              </Grid>
              <Grid xs={12} lg={8}>
                {/* <TextField
                  id="cell_phone"
                  name="cell_phone"
                  value={formik.values.cell_phone}
                  onChange={formik.handleChange}
                  error={formik.touched.cell_phone && !!formik.errors.cell_phone}
                  helperText={
                    formik.touched.cell_phone && formik.errors.cell_phone
                  }
                  sx={{ ...CustomTextField, width: '80%' }}
                /> */}
                <PhoneInput
                  sx={{ ...CustomTextField, width: '80%' }}
                  placeholder="Phone Number"
                  id="cell_phone"
                  name="cell_phone"
                  formik={formik}
                />
              </Grid>
            </Grid>

            <Grid container sx={{ display: 'flex', paddingBottom: '1rem', width: '100%', textAlign: isMobile ? 'center' : 'start' }}>
              <Grid xs={12} lg={4}>
                <Typography>Email: &nbsp;</Typography>
              </Grid>

              <Grid xs={12} lg={8}>
                <TextField
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && !!formik.errors.email}
                  helperText={formik.touched.email && formik.errors.email}
                  sx={{ ...CustomTextField, width: '80%' }}
                />
              </Grid>
            </Grid>
          </>
        )
      }
    </Box >
  );
};

export default PersonalInformation2;