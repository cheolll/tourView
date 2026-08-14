import type { ShoppingDetailInfo } from '../../../types/tourDetail';
import InfoItem from './InfoItem';

interface Props {
  item: ShoppingDetailInfo;
}

const ShoppingInfo = ({ item }: Props) => {
  return (
    <section className="travel-detail__section">
      <div className="travel-detail__section-title">
        <span>03</span>
        <h2>SHOPPING INFO</h2>
      </div>

      <div className="travel-detail__grid">
        <InfoItem
          label="유모차 대여"
          value={item.chkbabycarriageshopping}
        />

        <InfoItem
          label="신용카드"
          value={item.chkcreditcardshopping}
        />

        <InfoItem
          label="반려동물"
          value={item.chkpetshopping}
        />

        <InfoItem
          label="문화센터"
          value={item.culturecenter}
        />

        <InfoItem
          label="장서는 날"
          value={item.fairday}
        />

        <InfoItem
          label="문의 및 안내"
          value={item.infocentershopping}
        />

        <InfoItem
          label="개장일"
          value={item.opendateshopping}
        />

        <InfoItem
          label="영업시간"
          value={item.opentime}
        />

        <InfoItem
          label="주차시설"
          value={item.parkingshopping}
        />

        <InfoItem
          label="쉬는날"
          value={item.restdateshopping}
        />

        <InfoItem
          label="화장실"
          value={item.restroom}
        />

        <InfoItem
          label="판매품목"
          value={item.saleitem}
        />

        <InfoItem
          label="판매품목별 가격"
          value={item.saleitemcost}
        />

        <InfoItem
          label="규모"
          value={item.scaleshopping}
        />

        <InfoItem
          label="매장안내"
          value={item.shopguide}
        />
      </div>
    </section>
  );
};

export default ShoppingInfo;