const sxStyles = (isVeryScreenSmall: any, isMedium: any, isScreenLg: any) => ({
  infoGridItem: {
    flexDirection: "column",
    display: "flex",
    padding: "1rem -6rem 0rem",
  },

  boxMain: {
    height: "100vh",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    ...(isVeryScreenSmall && {
      display: "flex",
      flexDirection: "column",
    }),
  },

  boxButtoPhoto: {
    height: "90%",
    width: "30%",
    paddingLeft: "10%",
    marginLeft: "20%",

    ...(isVeryScreenSmall && {
      width: "100%",
    }),
  },

  containButtonPhoto: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    paddingTop: "6%",
    height: "80%",
    ...(isVeryScreenSmall && {
      width: "100%",
      height: "100%",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingTop: "6%",
      paddingBottom: "10%",
    }),

    ...(isMedium && {
      paddingRight: "70%",
    }),
  },

  itemPhoto: {
    paddingLeft: "10%",
    ...(isVeryScreenSmall && {
      paddingLeft: "1%",
      display: "flex",
      flexDirection: "column",
    }),
  },

  itemButtons: {
    paddingLeft: "10%",
    ...(isVeryScreenSmall && {
      paddingLeft: "1%",
      display: "flex",
      flexDirection: "column",
    }),

    ...(isMedium && {
      display: "flex",
      flexDirection: "column",
      paddingRight: "16%",
    }),
  },

  personalInformation: {
    height: "90%",
    width: "65%",
    ...(isVeryScreenSmall && {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    }),

    ...(isMedium && {
      paddingLeft: "6%",
    }),
  },

  sidebarBox: {
    width: "12%",
    height: "110vh",
    ...(isVeryScreenSmall && {
      display: "none",
    }),

    ...(isScreenLg && {
      height: "110vh",
    }),
  },
});

export default sxStyles;
