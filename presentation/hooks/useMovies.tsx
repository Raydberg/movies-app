import { nowPlatingAction } from "@/core/actions/movies/now-plating.actions"
import { popularMoviesAction } from "@/core/actions/movies/popular.action"
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action"
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action"
import { useQuery } from "@tanstack/react-query"

export const useMovies = () => {
    const nowPlayingQuery = useQuery({
        //*Identificador unico
        queryKey: ['movies', 'nowPlaying'],
        // queryFn: () => nowPlatingAction()
        //*Funcion que hace la peticion
        queryFn: nowPlatingAction,
        staleTime: 1000 * 60 * 60 * 24 // 24 Horas
    })
    const popularQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24
    })
    const topRatedQuery = useQuery({
        queryKey: ['movies', 'rated'],
        queryFn: topRatedMoviesAction,
        staleTime: 1000 * 60 * 60 * 24
    })
    const upcomingQuery = useQuery({
        queryKey: ['movies', 'upcoming'],
        queryFn: upcomingMoviesAction,
        staleTime: 1000 * 60 * 60 * 24
    })
    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery
    }
}