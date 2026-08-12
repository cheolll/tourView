import type { TourApiResponse } from "../types/tour";
import { apiClient } from "./client";



export const getTourPlaces = async (
    keyword: string
): Promise<TourApiResponse> => {
    const response = await apiClient.get('/travel');

    return response.data;
}