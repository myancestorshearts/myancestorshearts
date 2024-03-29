import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { BrowserRouter, Route, Routes, Navigate, useLocation  } from "react-router-dom";
import Dashboard from "./scenes/dashboard/index";
import Register from "./components/admin-register"
import Layout from './scenes/layout/index'
import Login from "./components/admin-login";
import Navbar from "./components/navbar";

const ConditionalNavbar = () => {
  const location = useLocation();
  const showNavbar = ['/admin-login', '/admin-register'].includes(location.pathname);
  
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

            <Route path="/" element={<Navigate to="/admin-login" replace />} />
            <Route path="/admin-login" element={<Login />} />
            <Route path="/admin-register" element={<Register />} />


            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

           
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
