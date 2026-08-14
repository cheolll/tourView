import type { TourPlacesParams, TourSearchParams } from "../types/tour";


export const tourKeys = {
    all: ['tour'] as const,

    places: () => [...tourKeys.all] as const,

    placeList: (params: TourPlacesParams) => [...tourKeys.places(), 'list' ,params] as const,

    search: () => [...tourKeys.all, 'search'] as const,

    searchList: (params: TourSearchParams) => [...tourKeys.search(), 'list', params] as const,

    detailCommon: (contentId: string ) => [...tourKeys.all, 'detailCommon', contentId] as const,

    detailInfo: (contentId: string, contentTypeId: string ) => [...tourKeys.all, 'detailInfo', contentId, contentTypeId] as const,

}