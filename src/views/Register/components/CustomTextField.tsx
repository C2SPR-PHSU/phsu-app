const primaryColor = "#009999";
const placeholderColor = "rgba(51, 51, 51, 0.4)";

export const customTextField = {
  "& .MuiInputBase-input": {
    height: "1.8rem",
    width: "90%",
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: primaryColor,
    borderRadius: 0,
    border: "2px solid " + primaryColor,
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: primaryColor,
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: primaryColor,
  },
  "& .MuiInputLabel-outlined": {
    fontSize: "1rem",
    color: placeholderColor,
  },
  "& .MuiInputLabel-outlined.Mui-focused": {
    color: primaryColor,
  },
  "& .MuiOutlinedInput-input": {
    padding: "0.7rem",
  },
};
