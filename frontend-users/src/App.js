import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate, useLocation  } from "react-router-dom";
import Register from "./component/register"
import Home from "./component/home";
import Navbar from "./common/navbar";

const ConditionalNavbar = () => {
  const location = useLocation();
  const showNavbar = ['/home', '/register'].includes(location.pathname);
  
  return showNavbar ? <Navbar /> : null;
};

function App() {

  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ConditionalNavbar />
          <Routes>

            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />


            {/* <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route> */}

           
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
