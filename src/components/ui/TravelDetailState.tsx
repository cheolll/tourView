import { useNavigate } from 'react-router-dom';

interface Props {
  message: string;
}

const TravelDetailState = ({
  message,
}: Props) => {
  const navigate = useNavigate();

  return (
    <main className="travel-detail">
      <div className="travel-detail__inner">
        <button
          type="button"
          className="travel-detail__back"
          onClick={() => navigate(-1)}
        >
          <span>←</span>
          BACK
        </button>

        <div className="travel-detail__state">
          {message}
        </div>
      </div>
    </main>
  );
};

export default TravelDetailState;