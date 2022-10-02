module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#softwrk",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          main: "var(--color-primary-main)",
          light: "var(--color-primary-light)",
          lighter: "var(--color-primary-lighter)",
          dark: "var(--color-primary-dark)",
          contrastText: "var(--color-primary-contrastText)",
          
         
        },
        secondary: {
          main: "var(--color-secondary-main)",
          light: "var(--color-secondary-light)",
          dark: "var(--color-secondary-dark)",
          contrastText: "var(--color-secondary-contrastText)",
        },
        success: {
          main: "var(--color-success-main)",
          light: "var(--color-success-light)",
          dark: "var(--color-success-dark)",
          contrastText: "var(--color-success-contrastText)",
        },
        info: {
          main: "var(--color-info-main)",
          light: "var(--color-info-light)",
          dark: "var(--color-info-dark)",
          contrastText: "var(--color-info-contrastText)",
        },
        warning: {
          main: "var(--color-warning-main)",
          light: "var(--color-warning-light)",
          dark: "var(--color-warning-dark)",
          contrastText: "var(--color-warning-contrastText)",
        },
        error: {
          main: "var(--color-error-main)",
          light: "var(--color-error-light)",
          dark: "var(--color-error-dark)",
          contrastText: "var(--color-error-contrastText)",
        },
        common: {
          black: "var(--color-common-black)",
          white: "var(--color-common-white)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tetiary: "red",
          disabled: "var(--color-text-disabled)",
        },
        background: {
          paper: "var(--color-background-paper)",
          default: "var(--color-background-default)",
        },
        action: {
          active: "var(--color-action-active)",
          hover: "var(--color-action-hover)",
          selected: "var(--color-action-selected)",
          disabled: "var(--color-action-disabled)",
          disabledBackground: "var(--color-action-disabledBackground)",
          focus: "var(--color-action-focus)",
        },

      },
      fontFamily: {
        inherit: ["inherit"],
        merriweather: ["'Merriweather'", "serif"],
      },
      zIndex: {
        mobileStepper: 1000,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500,
      },
      padding: {
        general: '1% 7%',
      },
      fontSize: {
        ssm: '0.6rem',
        
      }
     
    },
  },
  plugins: [],
};
