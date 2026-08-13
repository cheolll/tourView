import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { tourKeys } from "./tourKeys"
import { getRegions, getTourPlaces, getTourSearch } from "../api/tourApi"
import type { TourPlacesParams, TourSearchParams } from "../types/tour"


export const useRegions = (
) => {
    return useQuery({
        queryKey: ['regions'],
        queryFn: getRegions,
        staleTime: Infinity,
    });
}

export const useTourPlaces = (
    params: TourPlacesParams,
    options?: {enabled?: boolean}
) => {
    return useInfiniteQuery({
        queryKey: tourKeys.placeList(params),
        queryFn: ({pageParam}) => getTourPlaces({
            ...params,
            pageNo: pageParam
        }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const firstPage = allPages[0];

            const totalPages = Math.ceil(
                firstPage.totalCount / firstPage.numOfRows
            );

            if (lastPage.pageNo >= totalPages) {
                return undefined;
            }

            return lastPage.pageNo + 1;
        },
        enabled: options?.enabled,
    });
}

export const useTourSearch = (
    params: TourSearchParams,
) => {
    return useInfiniteQuery({
        queryKey: tourKeys.placeList(params),
        queryFn: ({pageParam}) => getTourSearch({
            ...params,
            pageNo: pageParam
        }),
        initialPageParam: 1,
        getNextPageParam: (lastPage,allPages) => {
            const firstPage = allPages[0];

            const totalPages = Math.ceil(
                firstPage.totalCount / firstPage.numOfRows
            );

            if (lastPage.pageNo >= totalPages) {
                return undefined;
            }

            return lastPage.pageNo + 1;
        },
        enabled: !!params.keyword,
    });
}


