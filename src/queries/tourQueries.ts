import { useQuery } from "@tanstack/react-query"
import { tourKeys } from "./tourKeys"
import { getTourPlaces } from "../api/tourApi"
import type { TourApiParam } from "../types/tour"


export const useTourPlaces = (params: TourApiParam) => {
    return useQuery({
        queryKey: tourKeys.placeList(params),
        queryFn: () => getTourPlaces(params),
    });
}