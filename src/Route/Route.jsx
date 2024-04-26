import { createBrowserRouter } from 'react-router-dom';
import Root from '../Components/Root/Root';

import Home from '../Components/Home/Home';
import ErrorPage from '../ErrorPage/ErrorPage';
import ContactUs from '../Components/ContactUs/ContactUs';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';

import AllTouristSpot from '../Pages/AllTouristSpot/AllTouristSpot';
import MyListOfSpot from '../Pages/MyListOfSpot/MyListOfSpot';
import AddTouristSpot from '../Pages/AddTouristSpot/AddTouristSpot';
import ViewSpotDetails from '../Pages/ViewSpotDetails/ViewSpotDetails';
import UpdateTouristData from '../Pages/UpdateTouristData/UpdateTouristData';
import PrivateRoute from './PrivetRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/contact-us',
        element: <ContactUs></ContactUs>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/add_tourist_spot',
        element: <AddTouristSpot></AddTouristSpot>,
      },
      {
        path: '/all-tourist-spot',
        element: <AllTouristSpot></AllTouristSpot>,
      },
      {
        path: '/my-tourist-spot-list',
        element: (
          <PrivateRoute>
            <MyListOfSpot></MyListOfSpot>
          </PrivateRoute>
        ),
      },
      {
        path: '/view-details/:id',
        element: <ViewSpotDetails></ViewSpotDetails>,
      },
      {
        path: '/update-tourist-data/:id',
        element: <UpdateTouristData></UpdateTouristData>,
      },
    ],
  },
]);

export default router;
