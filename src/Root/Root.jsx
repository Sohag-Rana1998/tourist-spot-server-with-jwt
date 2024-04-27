import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from '../Components/Shared/Nav/Nav';
import Footer from '../Components/Shared/Footer/Footer';

const Root = () => {
  return (
    <div className=" max-w-screen-2xl container  mx-auto">
      <NavBar></NavBar>
      <div className="max-w-7xl pt-24 container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;

// http://localhost:5000/