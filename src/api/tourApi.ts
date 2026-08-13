import { regionNameMap } from "../constants/regions";
import type { Region, RegionApiItem } from "../types/region";
import type { TourSearchParams, TourPlacesParams, TourListResponse } from "../types/tour";
import { apiClient } from "./client";


const serviceKey = decodeURIComponent(
  import.meta.env.VITE_TOUR_API_KEY
);

export const getTourPlaces = async (
    params: TourPlacesParams
): Promise<TourListResponse> => {
    const response = await apiClient.get(
        '/areaBasedList2', 
        {
            params: {
                ...params,

                MobileOS: import.meta.env.VITE_TOUR_MOBILE_OS,
                MobileApp: import.meta.env.VITE_TOUR_MOBILE_APP,
                serviceKey,

                _type: 'json',
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
                ...params,

                MobileOS: import.meta.env.VITE_TOUR_MOBILE_OS,
                MobileApp: import.meta.env.VITE_TOUR_MOBILE_APP,
                serviceKey,

                _type: 'json',
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
                MobileOS: import.meta.env.VITE_TOUR_MOBILE_OS,
                MobileApp: import.meta.env.VITE_TOUR_MOBILE_APP,
                serviceKey,
                numOfRows: 20,
                _type: 'json',
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
