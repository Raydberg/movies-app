import { View, Text, FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Movie } from '@/infrastructure/interfaces/movie.interface'
import MoviePoster from './MoviePoster'

interface Props {
    title?: string;
    movies: Movie[],
    className?: string
    loadNextPage?: () => void
}

const MovieHorizontalList = ({ movies, title, className, loadNextPage }: Props) => {
    const isLoading = useRef(false);
    //* Si las peliculas cambian o viene nuevas pelis 
    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false;
        }, 2000)
    }, [movies])

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isLoading.current) return;
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent
        const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width
        if (!isEndReached) return;
        //*Si nuncan cambian esto se mantiene 
        isLoading.current = true;
        //SI TENEMOS UN VALOR DEFINIDO VA A EJECUTAR LA FUNCION
        console.log("Cargar las siguientes peliculas");
        loadNextPage && loadNextPage()
    }
    return (
        <View className={`${className}`}>
            {
                title && (
                    <Text className='text-2xl font-bold px-4 mb-2'>{title}</Text>
                )
            }
            <FlatList
                horizontal
                data={movies}
                keyExtractor={(item, i) => `${item.id}-${i}`}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <MoviePoster
                        id={item.id}
                        poster={item.poster}
                        smallPoster={true}
                    />
                )}
                // ! Evento que se emite cuando hacemos scroll
                onScroll={onScroll}
            />
        </View>

    )
}

export default MovieHorizontalList