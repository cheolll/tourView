import type { TourApiParam } from "../types/tour";


export const tourKeys = {
    all: ['tour'] as const,

    places: () => [...tourKeys.all] as const,

    placeList: (params: TourApiParam) => [...tourKeys.places(), 'list' ,params] as const
}