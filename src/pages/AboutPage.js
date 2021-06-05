import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import AboutPageBodyComponent from '../components/AboutPageBodyComponent';
import AboutProjectComponent from '../components/AboutProjectComponent';
import HeaderComponent from '../components/HeaderComponent';

function AboutPage() {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (path !== '/about') {
      setPage(1);
    }
  }, [page, path]);

  return (
    <div className='about-page'>
      <HeaderComponent />
      {page === 1 && <AboutPageBodyComponent setPage={setPage} />}
      {page === 2 && <AboutProjectComponent setPage={setPage} />}
    </div>
  );
}

export default AboutPage;
