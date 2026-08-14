import type { FestivalDetailInfo } from '../../../types/tourDetail';
import InfoItem from './InfoItem';

interface Props {
  item: FestivalDetailInfo;
}

const FestivalInfo = ({ item }: Props) => {
  return (
    <section className="travel-detail__section">
      <div className="travel-detail__section-title">
        <span>03</span>
        <h2>FESTIVAL INFO</h2>
      </div>

      <div className="travel-detail__grid">
        <InfoItem label="관람가능연령" value={item.agelimit} />
        <InfoItem label="예매처" value={item.bookingplace} />
        <InfoItem label="할인정보" value={item.discountinfofestival} />
        <InfoItem label="행사 시작일" value={item.eventstartdate} />
        <InfoItem label="행사 종료일" value={item.eventenddate} />
        <InfoItem label="행사 홈페이지" value={item.eventhomepage} />
        <InfoItem label="행사장소" value={item.eventplace} />
        <InfoItem label="축제등급" value={item.festivalgrade} />
        <InfoItem label="행사장 위치" value={item.placeinfo} />
        <InfoItem label="공연시간" value={item.playtime} />
        <InfoItem label="행사 프로그램" value={item.program} />
        <InfoItem label="관람소요시간" value={item.spendtimefestival} />
        <InfoItem label="주최자" value={item.sponsor1} />
        <InfoItem label="주최자 연락처" value={item.sponsor1tel} />
        <InfoItem label="주관사" value={item.sponsor2} />
        <InfoItem label="주관사 연락처" value={item.sponsor2tel} />
        <InfoItem label="부대행사" value={item.subevent} />
        <InfoItem label="이용요금" value={item.usetimefestival} />
      </div>
    </section>
  );
};

export default FestivalInfo;