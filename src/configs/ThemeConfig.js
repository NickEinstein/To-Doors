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
        main: "#006600",
      },
      secondary: {
        main: "#006600",
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
      fontFamily: ["'Merriweather'", "serif"].join(),
      fontSize: 12,
      button: {
        textTransform: "none",
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
            borderRadius: 24,
          }),
        },
      },
      MuiTextField: {
        defaultProps: {
          size: "small",
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            "&.MuiInputBase-formControl": {
              borderRadius: 24,
            },
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
