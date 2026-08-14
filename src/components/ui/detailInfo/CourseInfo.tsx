import type { CourseDetailInfo } from '../../../types/tourDetail';
import InfoItem from './InfoItem';

interface Props {
  item: CourseDetailInfo;
}

const CourseInfo = ({ item }: Props) => {
  return (
    <section className="travel-detail__section">
      <div className="travel-detail__section-title">
        <span>03</span>
        <h2>COURSE INFO</h2>
      </div>

      <div className="travel-detail__grid">
        <InfoItem label="코스 총거리" value={item.distance} />
        <InfoItem label="문의 및 안내" value={item.infocentertourcourse} />
        <InfoItem label="코스 일정" value={item.schedule} />
        <InfoItem label="총 소요시간" value={item.taketime} />
        <InfoItem label="코스 테마" value={item.theme} />
      </div>
    </section>
  );
};

export default CourseInfo;