import { red } from "@mui/material/colors";
import { createTheme, alpha } from "@mui/material/styles";
import { DateFormatEnum } from "constants/DateContants";

export const lightTheme = customizeComponents({});
export const darkTheme = customizeComponents({ palette: { mode: "dark" } });

/**
 *
 * @param {import("@mui/material").Theme} theme
 */
export function customizeComponents(theme) {
  return createTheme({
    ...theme,
    palette: {
      ...theme.palette,
      primary: {
        lighter: "#C1F6C15E",
        // main: "#006600",
        main: "#0C3BAA",
      },
      secondary: {
        main: "#000051",
        light: "#646464",
      },
      tetiary: {
        main: "#5B0877",
      },
      cardhead: {
        main: "#858585",
      },
      buttonhead: {
        main: "#EBEBEB",
      },
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536,
      },
    },
    typography: {
      fontFamily: ["DM+Sans", "serif"].join(),
      fontSize: 12,
      button: {
        textTransform: "none",
        width: "w-28",
      },
    },
    components: {
      MuiDatePicker: {
        defaultProps: {
          inputFormat: DateFormatEnum.FORMAT,
        },
      },
      MuiDesktopDatePicker: {
        defaultProps: {
          inputFormat: DateFormatEnum.FORMAT,
        },
      },
      MuiMobileDatePicker: {
        defaultProps: {
          inputFormat: DateFormatEnum.FORMAT,
        },
      },
      MuiTabs: {
        defaultProps: {
          variant: "scrollable",
          scrollButtons: "auto",
          allowScrollButtonsMobile: true,
        },
      },
      MuiLoadingButton: {
        defaultProps: {
          variant: "contained",
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
        },
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            // borderRadius: 24,
          }),
        },
      },
      MuiTextField: {
        // defaultProps: {
        //   size: "small",

        // },
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            // "&.MuiInputBase-formControl": {
            // borderRadius: 24,
            // minWidth:295
            // },
          }),
        },
      },
      MuiInputBase: {
        defaultProps: {
          size: "small",
          // InputProps: {
          //   borderRadius: 24,
          // },
        },
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            // borderRadius: 24,
            // backgroundColor: red
          }),
        },
      },
      MuiInput: {
        defaultProps: {
          variant: "contained",
        },
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            // borderRadius: 24,
          }),
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            // "&.MuiInputBase-formControl": {
            borderRadius: 24,
            // minWidth:295
            // },
          }),
        },
      },
      MuiDialog: {
        defaultProps: {
          maxWidth: "xs",
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: ({ theme }) => ({
            // backgroundColor: theme.palette.grey[100],
          }),
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: ({ theme }) => ({
            // backgroundColor: theme.palette.grey[100],
          }),
        },
      },
    },
  });
}
