import type { TouristDetailInfo } from '../../../types/tourDetail';
import InfoItem from './InfoItem';

interface Props {
  item: TouristDetailInfo;
}

const TouristInfo = ({ item }: Props) => {
  return (
    <section className="travel-detail__section">
      <div className="travel-detail__section-title">
        <span>03</span>
        <h2>TOURIST INFO</h2>
      </div>

      <div className="travel-detail__grid">
        <InfoItem label="수용인원" value={item.accomcount} />
        <InfoItem label="유모차 대여" value={item.chkbabycarriage} />
        <InfoItem label="신용카드" value={item.chkcreditcard} />
        <InfoItem label="반려동물" value={item.chkpet} />
        <InfoItem label="체험가능연령" value={item.expagerange} />
        <InfoItem label="체험안내" value={item.expguide} />
        <InfoItem label="세계문화유산" value={item.heritage1} />
        <InfoItem label="세계자연유산" value={item.heritage2} />
        <InfoItem label="세계기록유산" value={item.heritage3} />
        <InfoItem label="문의 및 안내" value={item.infocenter} />
        <InfoItem label="개장일" value={item.opendate} />
        <InfoItem label="주차시설" value={item.parking} />
        <InfoItem label="쉬는날" value={item.restdate} />
        <InfoItem label="이용시기" value={item.useseason} />
        <InfoItem label="이용시간" value={item.usetime} />
      </div>
    </section>
  );
};

export default TouristInfo;