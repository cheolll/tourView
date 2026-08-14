import { useNavigate } from 'react-router-dom';

const TravelDetailHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="travel-detail__header">
      <button
        type="button"
        className="travel-detail__back"
        onClick={() => navigate(-1)}
      >
        <span>←</span>
        BACK
      </button>
    </header>
  );
};

export default TravelDetailHeader;