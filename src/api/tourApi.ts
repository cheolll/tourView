import { regionNameMap } from "../constants/regions";
import type { Region, RegionApiItem } from "../types/region";
import type { TourSearchParams, TourPlacesParams, TourListResponse} from "../types/tour";
import type { TourDetailCommonParams, TourDetailCommonResponse, TourDetailInfoParams, TourDetailInfoResponse } from "../types/tourDetail";
import { apiClient } from "./client";


const serviceKey = decodeURIComponent(
    import.meta.env.VITE_TOUR_API_KEY
);

const commonParams = {
    MobileOS: import.meta.env.VITE_TOUR_MOBILE_OS,
    MobileApp: import.meta.env.VITE_TOUR_MOBILE_APP,
    serviceKey: serviceKey,
    _type: 'json',
};

export const getTourPlaces = async (
    params: TourPlacesParams
): Promise<TourListResponse> => {
    const response = await apiClient.get(
        '/areaBasedList2', 
        {
            params: {
                ...commonParams,
                ...params,
            },
        }
    ); 

    const body = response.data.response.body

    // return response.data;
    return {
        items: body.items?.item ?? [],
        pageNo: body.pageNo,
        numOfRows: body.numOfRows,
        totalCount: body.totalCount,
    };
}

export const getTourSearch = async (
    params: TourSearchParams
): Promise<TourListResponse> => {
    const response = await apiClient.get(
        '/searchKeyword2', 
        {
            params: {
                ...commonParams,
                ...params,
            },
        }
    ); 

    const body = response.data.response.body

    // return response.data;
    return {
        items: body.items?.item ?? [],
        pageNo: body.pageNo,
        numOfRows: body.numOfRows,
        totalCount: body.totalCount,
    };
};


export const getRegions = async ():Promise<Region[]> => {
    const response = await apiClient.get('/ldongCode2',
        {
            params: {
                ...commonParams,
                numOfRows: 20,
            }
        }
    )

    const items = response.data.response.body.items.item;

    return [
        { name: '전체'},
        ...items.map((item: RegionApiItem) => ({
            name: regionNameMap[item.code] ?? item.name,
            code: item.code,
        })),
    ];
};


/**
 * 상세페이지 API
 */
export const getTourDetailCommon = async (
    params: TourDetailCommonParams
): Promise<TourDetailCommonResponse> => {
    const response = await apiClient.get('/detailCommon2',{
        params: {
            ...commonParams,
            ...params
        }
    })

    const body = response.data.response.body

    return {
        item: body.items?.item?.[0] ?? null
    };
}

export const getTourDetailInfo = async (
    params: TourDetailInfoParams
): Promise<TourDetailInfoResponse> => {
    const response = await apiClient.get('/detailIntro2',{
        params: {
            ...commonParams,
            ...params
        }
    })

    const body = response.data.response.body

    return {
        item: body.items?.item?.[0] ?? null
    };
}