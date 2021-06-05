import HeaderComponent from '../components/HeaderComponent';
import LandingPageBodyComponent from '../components/LandingPageBodyComponent';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showToast } from '../redux/toastSlice';
import 'react-toastify/dist/ReactToastify.css';

function LandingPage() {
  const activeToast = useSelector((state) => state.toast.activeToast);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeToast === true) {
      toast.dark('Message sent', {
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
    dispatch(showToast(false));
  }, [activeToast, dispatch]);

  return (
    <div className='landing-page'>
      <HeaderComponent />
      <LandingPageBodyComponent />
      <ToastContainer />
    </div>
  );
}

export default LandingPage;
