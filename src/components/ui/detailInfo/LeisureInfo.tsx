import type { LeisureDetailInfo } from '../../../types/tourDetail';
import InfoItem from './InfoItem';

interface Props {
  item: LeisureDetailInfo;
}

const LeisureInfo = ({ item }: Props) => {
  return (
    <section className="travel-detail__section">
      <div className="travel-detail__section-title">
        <span>03</span>
        <h2>LEISURE INFO</h2>
      </div>

      <div className="travel-detail__grid">
        <InfoItem label="수용인원" value={item.accomcountleports} />
        <InfoItem label="유모차 대여" value={item.chkbabycarriageleports} />
        <InfoItem label="신용카드" value={item.chkcreditcardleports} />
        <InfoItem label="반려동물" value={item.chkpetleports} />
        <InfoItem label="체험가능연령" value={item.expagerangeleports} />
        <InfoItem label="문의 및 안내" value={item.infocenterleports} />
        <InfoItem label="개장기간" value={item.openperiod} />
        <InfoItem label="주차요금" value={item.parkingfeeleports} />
        <InfoItem label="주차시설" value={item.parkingleports} />
        <InfoItem label="예약안내" value={item.reservation} />
        <InfoItem label="쉬는날" value={item.restdateleports} />
        <InfoItem label="규모" value={item.scaleleports} />
        <InfoItem label="입장료" value={item.usefeeleports} />
        <InfoItem label="이용시간" value={item.usetimeleports} />
      </div>
    </section>
  );
};

export default LeisureInfo;