import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { tourKeys } from "./tourKeys"
import { getRegions, getTourDetailCommon, getTourDetailInfo, getTourPlaces, getTourSearch } from "../api/tourApi"
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
    options?: { enabled?: boolean }
) => {
    return useInfiniteQuery({
        queryKey: tourKeys.placeList(params),
        queryFn: ({ pageParam }) => getTourPlaces({
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
        queryFn: ({ pageParam }) => getTourSearch({
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
        enabled: !!params.keyword,
    });
}

export const useTourDetailCommon = (
    contentId?: string
) => {
    return useQuery({
        queryKey: tourKeys.detailCommon(contentId),
        queryFn: () => getTourDetailCommon({ contentId: contentId! }),
        enabled: !!contentId
    })
}

export const useTourDetailInfo = (
    contentId?: string,
    contentTypeId?: string
) => {
    return useQuery({
        queryKey: contentId && contentTypeId ? tourKeys.detailInfo(contentId ,contentTypeId ) : ['tours', 'detailInfo', 'disabled'],
        queryFn: () => getTourDetailInfo({ 
            contentId: contentId!,
            contentTypeId: contentTypeId!
        }),
        enabled: !!contentId  && !!contentTypeId
    })
}

