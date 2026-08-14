/**
addr1	주소	0	부산광역시 사하구 낙동남로 1240 (하단동)	주소(예, 서울 중구 다동)를 응답
addr2	상세주소	0		상세주소
contentid	콘텐츠 ID	1	127974	콘텐츠 ID
contenttypeid	관광타입 ID	1	12	관광타입(12: 관광지, 14: 문화시설, 15: 축제공연행사, 25: 여행코스, 28: 레포츠, 32: 숙박, 38: 쇼핑, 39: 음식점) ID
createdtime	등록일	1	20031208090000	콘텐츠 최초 등록일
firstimage	대표이미지(원본)	0	http://tong.visitkorea.or.kr/cms/resource/62/2487962_image2_1.jpg	원본 대표이미지 (약 500*333 size) URL 응답
firstimage2	대표이미지(썸네일)	0	http://tong.visitkorea.or.kr/cms/resource/62/2487962_image3_1.jpg	썸네일 대표이미지 (약 150*100 size) URL 응답
cpyrhtDivCd	저작권 유형	0	Type1	Type1: 제 1유형(출처표시-권장) Type3: 제 3유형(제1유형 + 변경금지)
mapx	GPS X좌표	0	128.9460030322	GPS X좌표(WGS84 경도좌표) 응답
mapy	GPS Y좌표	0	35.1045320626	GPS Y좌표(WGS84 위도좌표) 응답
mlevel	Map Level	0	6	Map Level 응답
modifiedtime	콘텐츠 수정일	1	20250618095454	콘텐츠 수정일
tel	전화번호	0		전화번호
title	제목	1	을숙도 공원	콘텐츠 제목
zipcode	우편번호	0	49435	우편번호
lDongRegnCd	법정동 시도 코드	0	26	법정동 시도 코드
lDongSignguCd	법정동 시군구 코드	0	380	법정동 시군구 코드
lclsSystm1	분류체계 대분류	0	NA	분류체계 대분류
lclsSystm2	분류체계 중분류	0	NA04	분류체계 중분류
lclsSystm3	분류체계 소분류	0	NA040500	분류체계 소분류
 */
export interface TourListItem {
    addr1?: string;
    addr2?: string;
    
    areacode?: string;
    
    cat1?: string;
    cat2?: string;
    cat3?: string;
    
    contentid: string;
    contenttypeid: string;
    
    createdtime: string;
    
    firstimage?: string;
    firstimage2?: string;
    
    cpyrhtDivCd?: string;
    
    mapx?: string;
    mapy?: string;
    mlevel?: string;
    
    modifiedtime: string;
    
    sigungucode?: string;
    
    tel?: string;
    title: string;
    zipcode?: string;
    
    lDongRegnCd?: string;
    lDongSignguCd?: string;
    
    lclsSystm1?: string;
    lclsSystm2?: string;
    lclsSystm3?: string;

}

export interface TourApiResponse {
    response: {
        header: {
            resultCode: string;
            resultMsg: string;
        };

        body: {
            items: {
                item: TourListItem[]
            }

            numOfRows: number;
            pageNo: number;
            totalCount: number;
        }
    }
}

export interface TourListResponse {
    items: TourListItem[];
    pageNo: number;
    numOfRows: number;
    totalCount: number;
}

export interface TourApiRequest {
    numOfRows?: number;
    pageNo?: number;

    MobileOS: 'IOS' | 'AND' | 'WEB' | 'ETC';
    MobileApp: string;
    serviceKey: string;
  
    _type?: 'json' | 'xml';
  
    arrange?: 'A' | 'C' | 'D' | 'O' | 'Q' | 'R';
  
    contentTypeId?: string;
  
    modifiedtime?: string;
  
    lDongRegnCd?: string;
    lDongSignguCd?: string;
  
    lclsSystm1?: string;
    lclsSystm2?: string;
    lclsSystm3?: string;
}




export interface TourSearchParams {
    pageNo?: number;
    numOfRows?: number;
    
    arrange?: 'A' | 'C' | 'D' | 'O' | 'Q' | 'R';
    
    keyword: string;
    
    lDongRegnCd?: string;
    lDongSignguCd?: string;
    
    lclsSystm1?: string;
    lclsSystm2?: string;
    lclsSystm3?: string;
}

export interface TourPlacesParams {
    pageNo?: number;
    numOfRows?: number;
    
    arrange?: 'A' | 'C' | 'D' | 'O' | 'Q' | 'R';
    
    contentTypeId?: string;
    modifiedtime?: string;
    
    lDongRegnCd?: string;
    lDongSignguCd?: string;
    
    lclsSystm1?: string;
    lclsSystm2?: string;
    lclsSystm3?: string;
}


export interface ContentType {
  name: string;
  code?: string;
}

export const contentTypes: ContentType[] = [
  { name: '전체' },
  { name: '관광지', code: '12' },
  { name: '문화시설', code: '14' },
  { name: '축제·공연·행사', code: '15' },
  { name: '여행코스', code: '25' },
  { name: '레포츠', code: '28' },
  { name: '숙박', code: '32' },
  { name: '쇼핑', code: '38' },
  { name: '음식점', code: '39' },
];


