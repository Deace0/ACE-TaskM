import { CssBaseline } from "@mui/material";
import { grey, deepPurple, amber, green, red } from "@mui/material/colors";
import darkScrollbar from "@mui/material/darkScrollbar";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { useSelector } from "react-redux";

const PRIMARY = {
  main: "#7E57C2",
  light: "#B085F5",
  lighter: "#9C71D9",
  morelighter: "#A678CB",
  mostlighter: "#C3AED6",
  white: "#FFFFFF",
};

const SECONDARY = {
  lighter: "#FFD54F",
  light: "#FFB300",
  main: "#FFD54F",
  dark: "#FF8F00",
  darker: "#FF6F00",
  contrastText: "#000",
};

const TERTIARY = {
  light: { main: "#212121" },
  dark: { main: "#FAFAFA" },
};

const TEXT = {
  light: "#333333",
  dark: "#FFFFFF",
  disabled: "#BDBDBD",
};

const ERROR = {
  main: "#E57373",
  light: "#FF8A80",
  dark: "#D32F2F",
};

const WARNING = {
  main: "#FFD54F",
  light: "#FFE082",
  dark: "#F57C00",
};

const SUCCESS = {
  lighter: "#CCFF90",
  light: "#81C784",
  main: "#4CAF50",
  dark: "#388E3C",
  darker: "#1B5E20",
  contrastText: "#FFF",
};

const CANVASCOLOR = {
  light: "#FFFFFF",
  dark: "#212121",
};

const BACKGROUND = {
  paper: { light: "#FFFFFF", dark: "#212121" },
};

const TYPOGRAPHY = {
  fontFamily: '"Be Vietnam Pro", sans-serif',
  fontSize: 12,
};

function ThemeProvider({ children }) {
  let { theme: modeState } = useSelector((state) => state.theme);
  const modeStorage = window.localStorage.getItem("theme");
  if (modeStorage && modeState !== modeStorage) {
    modeState = modeStorage;
  }

  const themeOptions = {
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            ...darkScrollbar(
              modeState === "light"
                ? {
                    track: grey[200],
                    thumb: grey[400],
                    active: grey[400],
                  }
                : undefined
            ),
            scrollbarWidth: "thin",
          },
        },
      },
    },
    palette: {
      mode: modeState,
      primary: PRIMARY,
      secondary: SECONDARY,
      tertiary: TERTIARY,
      error: ERROR,
      warning: WARNING,
      success: SUCCESS,
      text: TEXT,
      background: BACKGROUND,
      canvasColor: CANVASCOLOR,
    },
    typography: TYPOGRAPHY,
    shape: { borderRadius: 8 },
  };

  const theme = createTheme(themeOptions);

  return (
    <>
      <MUIThemeProvider theme={theme}>
        <CssBaseline>{children}</CssBaseline>
      </MUIThemeProvider>
    </>
  );
}

export default ThemeProvider;
