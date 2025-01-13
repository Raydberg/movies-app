import { View, Text } from 'react-native'
import React from 'react'
import { CompleteMovie } from '@/infrastructure/interfaces/movie.interface'
import { Formatter } from '@/config/helpers/formatter';

interface Props {
    movie: CompleteMovie;
}
const MovieDescription = ({ movie }: Props) => {
    return (
        <View className='mx-5'>
            <View className='flex flex-row'>
                <Text>{movie.rating}</Text>
                <Text> - {movie.genres.join(', ')} </Text>
            </View>
            <Text className='font-extrabold mt-5 text-2xl'>Historia</Text>
            <Text className='font-normal mt-2'>{movie.description}</Text>
            <Text className='font-bold text-2xl mt-2'>Presupuesto</Text>
            <Text className='font-bold mt-2 text-2xl'> {Formatter.currency(movie.budget)} </Text>
        </View>
    )
}

export default MovieDescription