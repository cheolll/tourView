import type { LodgingDetailInfo } from '../../../types/tourDetail';
import InfoItem from './InfoItem';

interface Props {
  item: LodgingDetailInfo;
}

const LodgingInfo = ({ item }: Props) => {
  return (
    <section className="travel-detail__section">
      <div className="travel-detail__section-title">
        <span>03</span>
        <h2>LODGING INFO</h2>
      </div>

      <div className="travel-detail__grid">
        <InfoItem label="수용가능인원" value={item.accomcountlodging} />
        <InfoItem label="입실시간" value={item.checkintime} />
        <InfoItem label="퇴실시간" value={item.checkouttime} />
        <InfoItem label="객실내 취사" value={item.chkcooking} />
        <InfoItem label="식음료장" value={item.foodplace} />
        <InfoItem label="문의 및 안내" value={item.infocenterlodging} />
        <InfoItem label="주차시설" value={item.parkinglodging} />
        <InfoItem label="픽업서비스" value={item.pickup} />
        <InfoItem label="객실수" value={item.roomcount} />
        <InfoItem label="예약안내" value={item.reservationlodging} />
        <InfoItem label="예약 홈페이지" value={item.reservationurl} />
        <InfoItem label="객실유형" value={item.roomtype} />
        <InfoItem label="규모" value={item.scalelodging} />
        <InfoItem label="부대시설" value={item.subfacility} />

        <InfoItem label="바비큐장" value={item.barbecue} />
        <InfoItem label="뷰티시설" value={item.beauty} />
        <InfoItem label="식음료장 여부" value={item.beverage} />
        <InfoItem label="자전거 대여" value={item.bicycle} />
        <InfoItem label="캠프파이어" value={item.campfire} />
        <InfoItem label="휘트니스센터" value={item.fitness} />
        <InfoItem label="노래방" value={item.karaoke} />
        <InfoItem label="공용 샤워실" value={item.publicbath} />
        <InfoItem label="공용 PC실" value={item.publicpc} />
        <InfoItem label="사우나" value={item.sauna} />
        <InfoItem label="세미나실" value={item.seminar} />
        <InfoItem label="스포츠시설" value={item.sports} />
        <InfoItem label="환불규정" value={item.refundregulation} />
      </div>
    </section>
  );
};

export default LodgingInfo;