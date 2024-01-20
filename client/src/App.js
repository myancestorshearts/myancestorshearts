import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./scenes/dashboard/index";
import Register from "./components/register"
import Layout from './scenes/layout/index'
import Login from "./components/Login";
import Navbar from "./components/navbar";


function App() {

  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Routes>

            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />

            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            <Route path="/register" element={<Register />} />

          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
