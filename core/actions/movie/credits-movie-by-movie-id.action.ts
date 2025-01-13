import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infrastructure/interfaces/creadits.interface";
import { CreditsResponse } from "@/infrastructure/interfaces/creditsdb-response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getCreditsByIdMovie = async (movieId: number | string): Promise<Cast[]> => {
    try {

        const { data } = await movieApi.get<CreditsResponse>(`/${movieId}/credits`);
        // console.log(data)
        console.log("Actor HTTP CARGADA");
        const cats = data.cast.map(CastMapper.fromMovieDBCastToEntity)
        return cats;
    } catch (error) {
        console.log(error);
        throw 'Cannot load now playing movies'
    }
}