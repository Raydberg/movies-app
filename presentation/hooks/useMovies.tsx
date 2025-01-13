import { nowPlatingAction } from "@/core/actions/movies/now-plating.actions"
import { popularMoviesAction } from "@/core/actions/movies/popular.action"
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action"
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

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
    const topRatedQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'rated'],
        queryFn: ({ pageParam }) => {
            console.log(pageParam)
            return topRatedMoviesAction({ page: pageParam })
        },
        staleTime: 1000 * 60 * 60 * 24,
        /**
         * * pages -> [[movie,movie],[movie,movie.movie],[movie,movie,movie]]
         */
        getNextPageParam: (lastPage, pages) => pages.length + 1
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