import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TravelDetailFloatingNav = () => {
  const navigate = useNavigate();
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="travel-detail__floating-nav">
      {showTopButton && 
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="맨 위로 이동"
        >
          <span>↑</span>
          <small>TOP</small>
        </button>
      }

      <button
          type="button"
          onClick={handleBack}
          aria-label="이전 페이지로 이동"
      >
          <span>←</span>
          <small>BACK</small>
      </button>
    </div>
  );
};

export default TravelDetailFloatingNav;