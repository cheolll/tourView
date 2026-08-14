/**
 * 상세 페이지
 */
export interface TourDetailCommon {
    contentid: string;
    contenttypeid: string;
    title: string;

    addr1: string;
    addr2: string;

    areacode: string;
    sigungucode: string;

    firstimage: string;
    firstimage2: string;

    mapx: string;
    mapy: string;
    mlevel: string;

    overview: string;

    tel: string;
    telname: string;

    homepage: string;
    zipcode: string;

    createdtime: string;
    modifiedtime: string;

    lDongRegnCd: string;
    lDongSignguCd: string;

    lclsSystm1: string;
    lclsSystm2: string;
    lclsSystm3: string;

    cpyrhtDivCd: string;
}


export interface TourDetailCommonResponse {
    item: TourDetailCommon;
}

export interface TourDetailCommonParams {
    contentId: string;
}

/**
 * 상세 - 소개정보
 */
export interface TourDetailInfoBase {
  contentid: string;
}

/** 관광지 12 */
export interface TouristDetailInfo extends TourDetailInfoBase {
    contenttypeid: '12';
  accomcount: string;
  chkbabycarriage: string;
  chkcreditcard: string;
  chkpet: string;
  expagerange: string;
  expguide: string;
  heritage1: string;
  heritage2: string;
  heritage3: string;
  infocenter: string;
  opendate: string;
  parking: string;
  restdate: string;
  useseason: string;
  usetime: string;
}

/** 문화시설 14 */
export interface CultureDetailInfo extends TourDetailInfoBase {
    contenttypeid: '14';
  accomcountculture: string;
  chkbabycarriageculture: string;
  chkcreditcardculture: string;
  chkpetculture: string;
  discountinfo: string;
  infocenterculture: string;
  parkingculture: string;
  parkingfee: string;
  restdateculture: string;
  usefee: string;
  usetimeculture: string;
  scale: string;
  spendtime: string;
}

/** 축제/공연/행사 15 */
export interface FestivalDetailInfo extends TourDetailInfoBase {
    contenttypeid: '15';
  agelimit: string;
  bookingplace: string;
  discountinfofestival: string;
  eventenddate: string;
  eventhomepage: string;
  eventplace: string;
  eventstartdate: string;
  festivalgrade: string;
  placeinfo: string;
  playtime: string;
  program: string;
  spendtimefestival: string;
  sponsor1: string;
  sponsor1tel: string;
  sponsor2: string;
  sponsor2tel: string;
  subevent: string;
  usetimefestival: string;
}

/** 여행코스 25 */
export interface CourseDetailInfo extends TourDetailInfoBase {
    contenttypeid: '25';
  distance: string;
  infocentertourcourse: string;
  schedule: string;
  taketime: string;
  theme: string;
}

/** 레포츠 28 */
export interface LeisureDetailInfo extends TourDetailInfoBase {
    contenttypeid: '28';
  accomcountleports: string;
  chkbabycarriageleports: string;
  chkcreditcardleports: string;
  chkpetleports: string;
  expagerangeleports: string;
  infocenterleports: string;
  openperiod: string;
  parkingfeeleports: string;
  parkingleports: string;
  reservation: string;
  restdateleports: string;
  scaleleports: string;
  usefeeleports: string;
  usetimeleports: string;
}

/** 숙박 32 */
export interface LodgingDetailInfo extends TourDetailInfoBase {
    contenttypeid: '32';
  accomcountlodging: string;
  checkintime: string;
  checkouttime: string;
  chkcooking: string;
  foodplace: string;
  infocenterlodging: string;
  parkinglodging: string;
  pickup: string;
  roomcount: string;
  reservationlodging: string;
  reservationurl: string;
  roomtype: string;
  scalelodging: string;
  subfacility: string;

  barbecue: string;
  beauty: string;
  beverage: string;
  bicycle: string;
  campfire: string;
  fitness: string;
  karaoke: string;
  publicbath: string;
  publicpc: string;
  sauna: string;
  seminar: string;
  sports: string;

  refundregulation: string;
}

/** 쇼핑 38 */
export interface ShoppingDetailInfo extends TourDetailInfoBase {
    contenttypeid: '38';
  chkbabycarriageshopping: string;
  chkcreditcardshopping: string;
  chkpetshopping: string;
  culturecenter: string;
  fairday: string;
  infocentershopping: string;
  opendateshopping: string;
  opentime: string;
  parkingshopping: string;
  restdateshopping: string;
  restroom: string;
  saleitem: string;
  saleitemcost: string;
  scaleshopping: string;
  shopguide: string;
}

/** 음식점 39 */
export interface FoodDetailInfo extends TourDetailInfoBase {
    contenttypeid: '39';

  chkcreditcardfood: string;
  discountinfofood: string;
  firstmenu: string;
  infocenterfood: string;
  kidsfacility: string;
  opendatefood: string;
  opentimefood: string;
  packing: string;
  parkingfood: string;
  reservationfood: string;
  restdatefood: string;
  scalefood: string;
  seat: string;
  smoking: string;
  treatmenu: string;
  lcnsno: string;
}

export interface TourDetailInfoResponse {
  item: TourDetailInfo | null;
}

export interface TourDetailInfoParams {
  contentId: string;
  contentTypeId: string;
}

export type TourDetailInfo =
  | TouristDetailInfo
  | CultureDetailInfo
  | FestivalDetailInfo
  | CourseDetailInfo
  | LeisureDetailInfo
  | LodgingDetailInfo
  | ShoppingDetailInfo
  | FoodDetailInfo;
