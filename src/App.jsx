import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//components
import Main from "./components/Main";
import MuiTypography from "./components/MuiTypography";
import MuiTextField from "./components/MuiTextField";
import MuiButton from "./components/MuiButton";
import MuiSelect from "./components/MuiSelect";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiSwitch from "./components/MuiSwitch";
import MuiRating from "./components/MuiRating";
import MuiAutocomplete from "./components/MuiAutocomplete";
import MuiLayout from "./components/MuiLayout";
import MuiStyledComponents from "./components/MuiStyledComponents";
import MuiCard from "./components/MuiCard";
import MuiAccordion from "./components/MuiAccordion";
import MuiImageList from "./components/MuiImageList";
import MuiNavbar from "./components/MuiNavbar";
import MuiMenu from "./components/MuiMenu";
import MuiLink from "./components/MuiLink";
import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
import MuiDrawer from "./components/MuiDrawer";
import MuiSpeedDial from "./components/MuiSpeedDial";
import MuiBottomNavigation from "./components/MuiBottomNavigation";
import MuiAvatar from "./components/MuiAvatar";
import MuiBadge from "./components/MuiBadge";
import MuiList from "./components/MuiList";
import MuiTable from "./components/MuiTable";
import MuiAlert from "./components/MuiAlert";
import MuiSnackbar from "./components/MuiSnackbar";
import MuiDialog from "./components/MuiDialog";
import MuiProgress from "./components/MuiProgress";
import MuiSkeleton from "./components/MuiSkeleton";
import MuiSkeletonDemo from "./components/MuiSkeletonDemo";
import MuiLoadingButton from "./components/MuiLoadingButton";
import MuiDateAndTimePicker from "./components/MuiDateAndTimePicker";
import MuiTabs from "./components/MuiTabs";
import MuiTimeline from "./components/MuiTimeline";
import MuiMasonry from "./components/MuiMasonry";
import MuiSlider from "./components/MuiSlider";
import MuiResponsives from "./components/MuiResponsives";

// NOTE: For Create customization theme
import {
  createTheme,
  // colors,
  ThemeProvider,
} from "@mui/material";

// NOTE: View all colors shade that mui provide
// https://mui.com/material-ui/customization/color/

const theme = createTheme({
  // NOTE: To add custom key in TypeScript we want a type in theme.d.ts
  status: {
    danger: "#e52e3e",
    success: "#7fb400",
  },
  // palette: {
  //   secondary: {
  //     main: colors.orange[500],
  //   },
  // },
});

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => setIsNavVisible(!isNavVisible);
  const closeNav = () => setIsNavVisible(false);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {isNavVisible && (
          <nav className="nav">
            <ul className="ul">
              <li
                style={{
                  fontWeight: "bolder",
                  padding: "2rem 0",
                }}
              >
                <Link to="/" style={{ color: "#fff" }} onClick={closeNav}>
                  Material UI Demo
                </Link>
              </li>
              <li className="li">
                <Link to="/typography" onClick={closeNav}>
                  Typography
                </Link>
              </li>
              <li className="li">
                <Link to="/button" onClick={closeNav}>
                  Button
                </Link>
              </li>
              <li className="li">
                <Link to="/textfield" onClick={closeNav}>
                  TextField
                </Link>
              </li>
              <li className="li">
                <Link to="/select" onClick={closeNav}>
                  Select
                </Link>
              </li>
              <li className="li">
                <Link to="/radio" onClick={closeNav}>
                  Radio
                </Link>
              </li>
              <li className="li">
                <Link to="/checkbox" onClick={closeNav}>
                  Checkbox
                </Link>
              </li>
              <li className="li">
                <Link to="/switch" onClick={closeNav}>
                  Switch
                </Link>
              </li>
              <li className="li">
                <Link to="/rating" onClick={closeNav}>
                  Rating
                </Link>
              </li>
              <li className="li">
                <Link to="/autocomplete" onClick={closeNav}>
                  Autocomplete
                </Link>
              </li>
              <li className="li">
                <Link to="/layout" onClick={closeNav}>
                  Layout
                </Link>
              </li>
              <li className="li">
                <Link to="/card" onClick={closeNav}>
                  Card
                </Link>
              </li>
              <li className="li">
                <Link to="/styled" onClick={closeNav}>
                  StyledComponents
                </Link>
              </li>
              <li className="li">
                <Link to="/accordion" onClick={closeNav}>
                  Accordion
                </Link>
              </li>
              <li className="li">
                <Link to="/imagelist" onClick={closeNav}>
                  ImageList
                </Link>
              </li>
              <li className="li">
                <Link to="/navbar" onClick={closeNav}>
                  Navbar
                </Link>
              </li>
              <li className="li">
                <Link to="/navbar-menu" onClick={closeNav}>
                  Navbar & Menu
                </Link>
              </li>
              <li className="li">
                <Link to="/link" onClick={closeNav}>
                  Link
                </Link>
              </li>
              <li className="li">
                <Link to="/breadcrumbs" onClick={closeNav}>
                  Breadcrumbs
                </Link>
              </li>
              <li className="li">
                <Link to="/drawer" onClick={closeNav}>
                  Drawer
                </Link>
              </li>
              <li className="li">
                <Link to="/speed-dial" onClick={closeNav}>
                  SpeedDial
                </Link>
              </li>
              <li className="li">
                <Link to="/bottom-navigation" onClick={closeNav}>
                  Bottom Navigation
                </Link>
              </li>
              <li className="li">
                <Link to="/avatar" onClick={closeNav}>
                  Avatar
                </Link>
              </li>
              <li className="li">
                <Link to="/badge" onClick={closeNav}>
                  Badge
                </Link>
              </li>
              <li className="li">
                <Link to="/list" onClick={closeNav}>
                  List
                </Link>
              </li>
              <li className="li">
                <Link to="/table" onClick={closeNav}>
                  Table
                </Link>
              </li>
              <li className="li">
                <Link to="/alert" onClick={closeNav}>
                  Alert
                </Link>
              </li>
              <li className="li">
                <Link to="/snackbar" onClick={closeNav}>
                  Snackbar
                </Link>
              </li>
              <li className="li">
                <Link to="/dialog" onClick={closeNav}>
                  Dialog
                </Link>
              </li>
              <li className="li">
                <Link to="/progress" onClick={closeNav}>
                  Progress
                </Link>
              </li>
              <li className="li">
                <Link to="/skeleton" onClick={closeNav}>
                  Skeleton
                </Link>
              </li>
              <li className="li">
                <Link to="/skeleton-demo" onClick={closeNav}>
                  Skeleton Demo
                </Link>
              </li>
              <li className="li">
                <Link to="/loading-button" onClick={closeNav}>
                  Loading Button
                </Link>
              </li>
              <li className="li">
                <Link to="/datetime" onClick={closeNav}>
                  Datetime Picker
                </Link>
              </li>
              <li className="li">
                <Link to="/tabs" onClick={closeNav}>
                  Tabs
                </Link>
              </li>
              <li className="li">
                <Link to="/timeline" onClick={closeNav}>
                  Timeline
                </Link>
              </li>
              <li className="li">
                <Link to="/masonry" onClick={closeNav}>
                  Masonry
                </Link>
              </li>
              <li className="li">
                <Link to="/slider" onClick={closeNav}>
                  Slider
                </Link>
              </li>
              <li className="li">
                <Link to="/responsives" onClick={closeNav}>
                  Responsives
                </Link>
              </li>

              <li className="li" style={{ paddingTop: "7rem" }} />
            </ul>
          </nav>
        )}
        <button
          onClick={toggleNav}
          style={{
            position: "fixed",
            bottom: "16px",
            left: "16px",
            fontSize: "14px",
            zIndex: "10",
            backgroundColor: "#545bf2",
            color: "#fff",
          }}
        >
          Menu
        </button>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/typography" element={<MuiTypography />} />
          <Route path="/button" element={<MuiButton />} />
          <Route path="/textfield" element={<MuiTextField />} />
          <Route path="/select" element={<MuiSelect />} />
          <Route path="/radio" element={<MuiRadioButton />} />
          <Route path="/checkbox" element={<MuiCheckbox />} />
          <Route path="/switch" element={<MuiSwitch />} />
          <Route path="/rating" element={<MuiRating />} />
          <Route path="/autocomplete" element={<MuiAutocomplete />} />
          <Route path="/layout" element={<MuiLayout />} />
          <Route path="/card" element={<MuiCard />} />
          <Route path="/styled" element={<MuiStyledComponents />} />
          <Route path="/accordion" element={<MuiAccordion />} />
          <Route path="/imagelist" element={<MuiImageList />} />
          <Route path="/navbar" element={<MuiNavbar />} />
          <Route path="/navbar-menu" element={<MuiMenu />} />
          <Route path="/link" element={<MuiLink />} />
          <Route path="/breadcrumbs" element={<MuiBreadcrumbs />} />
          <Route path="/drawer" element={<MuiDrawer />} />
          <Route path="/speed-dial" element={<MuiSpeedDial />} />
          <Route path="/bottom-navigation" element={<MuiBottomNavigation />} />
          <Route path="/avatar" element={<MuiAvatar />} />
          <Route path="/badge" element={<MuiBadge />} />
          <Route path="/list" element={<MuiList />} />
          <Route path="/table" element={<MuiTable />} />
          <Route path="/alert" element={<MuiAlert />} />
          <Route path="/snackbar" element={<MuiSnackbar />} />
          <Route path="/dialog" element={<MuiDialog />} />
          <Route path="/progress" element={<MuiProgress />} />
          <Route path="/skeleton" element={<MuiSkeleton />} />
          <Route path="/skeleton-demo" element={<MuiSkeletonDemo />} />
          <Route path="/loading-button" element={<MuiLoadingButton />} />
          <Route path="/datetime" element={<MuiDateAndTimePicker />} />
          <Route path="/tabs" element={<MuiTabs />} />
          <Route path="/timeline" element={<MuiTimeline />} />
          <Route path="/masonry" element={<MuiMasonry />} />
          <Route path="/slider" element={<MuiSlider />} />
          <Route path="/responsives" element={<MuiResponsives />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
