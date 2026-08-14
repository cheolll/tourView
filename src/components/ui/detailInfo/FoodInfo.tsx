import type { FoodDetailInfo } from "../../../types/tourDetail";
import InfoItem from "./InfoItem";

interface Props {
  item: FoodDetailInfo;
}

const FoodInfo = ({ item }: Props) => {
  return (
    <section className="travel-detail__section">
      <div className="travel-detail__section-title">
        <span>03</span>
        <h2>RESTAURANT</h2>
      </div>

      <div className="travel-detail__grid">
        <InfoItem
          label="대표메뉴"
          value={item.firstmenu}
        />

        <InfoItem
          label="취급메뉴"
          value={item.treatmenu}
        />

        <InfoItem
          label="영업시간"
          value={item.opentimefood}
        />

        <InfoItem
          label="쉬는날"
          value={item.restdatefood}
        />

        <InfoItem
          label="주차"
          value={item.parkingfood}
        />

        <InfoItem
          label="예약"
          value={item.reservationfood}
        />

        <InfoItem
          label="포장"
          value={item.packing}
        />

        <InfoItem
          label="좌석수"
          value={item.seat}
        />

        <InfoItem
          label="문의"
          value={item.infocenterfood}
        />
      </div>
    </section>
  );
};

export default FoodInfo;