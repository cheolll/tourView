import type { TourDetailInfo } from "../../types/tourDetail";
import CourseInfo from "./detailInfo/CourseInfo";
import CultureInfo from "./detailInfo/CultureInfo";
import FestivalInfo from "./detailInfo/FestivalInfo";
import FoodInfo from "./detailInfo/FoodInfo";
import LeisureInfo from "./detailInfo/LeisureInfo";
import LodgingInfo from "./detailInfo/LodgingInfo";
import ShoppingInfo from "./detailInfo/ShoppingInfo";
import TouristInfo from "./detailInfo/TouristInfo";

interface Props {
  item: TourDetailInfo;
}

const TravelDetailInfo = ({ item }: Props) => {
  switch (item.contenttypeid) {
    case '12':
      return <TouristInfo item={item} />;

    case '14':
      return <CultureInfo item={item} />;

    case '15':
      return <FestivalInfo item={item} />;

    case '25':
      return <CourseInfo item={item} />;

    case '28':
      return <LeisureInfo item={item} />;

    case '32':
      return <LodgingInfo item={item} />;

    case '38':
      return <ShoppingInfo item={item} />;

    case '39':
      return <FoodInfo item={item} />;

    default:
      return null;
  }
};

export default TravelDetailInfo;