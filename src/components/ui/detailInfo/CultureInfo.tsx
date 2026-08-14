import type { CultureDetailInfo } from '../../../types/tourDetail';
import InfoItem from './InfoItem';

interface Props {
  item: CultureDetailInfo;
}

const CultureInfo = ({ item }: Props) => {
  return (
    <section className="travel-detail__section">
      <div className="travel-detail__section-title">
        <span>03</span>
        <h2>CULTURE INFO</h2>
      </div>

      <div className="travel-detail__grid">
        <InfoItem label="수용인원" value={item.accomcountculture} />
        <InfoItem label="유모차 대여" value={item.chkbabycarriageculture} />
        <InfoItem label="신용카드" value={item.chkcreditcardculture} />
        <InfoItem label="반려동물" value={item.chkpetculture} />
        <InfoItem label="할인정보" value={item.discountinfo} />
        <InfoItem label="문의 및 안내" value={item.infocenterculture} />
        <InfoItem label="주차시설" value={item.parkingculture} />
        <InfoItem label="주차요금" value={item.parkingfee} />
        <InfoItem label="쉬는날" value={item.restdateculture} />
        <InfoItem label="이용요금" value={item.usefee} />
        <InfoItem label="이용시간" value={item.usetimeculture} />
        <InfoItem label="규모" value={item.scale} />
        <InfoItem label="관람소요시간" value={item.spendtime} />
      </div>
    </section>
  );
};

export default CultureInfo;