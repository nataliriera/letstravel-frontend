import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import TechNews from "../pages/TechNews";
import ProtectedPage from "../pages/ProtectedPage";
import Explore from "../pages/Explore";
import MaptoMeet from "../pages/MaptoMeet";
import CreateEvent from "../pages/CreateEvent";
import * as PATHS from "../utils/paths";

const routes = (props) => {
  const { user } = props;
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
    {
      path: PATHS.SIGNUPPAGE,
      element: <Signup {...props} />,
    },
    {
      path: PATHS.TECHNEWS,
      element: <TechNews {...props} />,
    },
    {
      path: PATHS.EXPLORE,
      element: <Explore {...props} />,
    },
    {
      path: PATHS.MAPTOMEET,
      element: <MaptoMeet {...props} />,
    },
    {
      path: PATHS.CREATEEVENT,
      element: <CreateEvent {...props} />,
    },
    {
      path: PATHS.LOGINPAGE,
      element: <Login {...props} />,
    },
    {
      path: PATHS.PROTECTEDPAGE,
      element: user ? (
        <ProtectedPage {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
  ];
};

export default routes;
