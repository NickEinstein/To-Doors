import { useEffect } from "react";
import { ThemeProvider, CssBaseline, useMediaQuery } from "@mui/material";
import { lightTheme, darkTheme } from "configs/ThemeConfig";
import useThemeMode from "hooks/useThemeMode";

/**
 *
 * @param {import('@mui/material').ThemeProviderProps} props
 */
export function AppThemeProvider(props) {
  const isSystemDark = useMediaQuery("(prefers-color-scheme: dark)");
  const themeMode = useThemeMode();

  const isDark =
    (themeMode === "media" && isSystemDark) || themeMode === "dark";

  const theme = isDark ? darkTheme : lightTheme;

  useEffect(() => {
    if (isDark) {
      // document.documentElement.classList.add("dark");
      document.documentElement
        .getElementsByTagName("body")[0]
        .classList.add("dark");
    } else {
      // document.documentElement.classList.remove("dark");
      document.documentElement
        .getElementsByTagName("body")[0]
        .classList.remove("dark");
    }
    [
      "primary",
      "secondary",
      "success",
      "info",
      "warning",
      "error",
      "common",
      "text",
      "background",
      "action",
    ].forEach((palatteKey) => {
      Object.keys(theme.palette[palatteKey]).forEach((palatteKeyColor) => {
        document.documentElement.style.setProperty(
          `--color-${palatteKey}-${palatteKeyColor}`,
          theme.palette[palatteKey][palatteKeyColor]
        );
      });
    });
  }, [isDark, theme.palette]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
