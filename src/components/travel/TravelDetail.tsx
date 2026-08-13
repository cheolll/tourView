import { useNavigate, useParams } from 'react-router-dom';
import './TravelDetail.css';

const TravelDetail = () => {
  const { contentId } = useParams();
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
        
        <p>CONTENT ID: {contentId}</p>

        <h1>여행지 상세</h1>

        <p>
          여행지 상세 정보를 불러오는 중입니다.
        </p>
      </div>
    </main>
  );
};

export default TravelDetail;