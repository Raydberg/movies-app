import { View, Text, Dimensions, useWindowDimensions } from 'react-native'
import React, { useRef } from 'react'
import { Movie } from '@/infrastructure/interfaces/movie.interface'

import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel'
import MoviePoster from './MoviePoster'

interface Props {
    movies: Movie[]
}

// Dimensions.get('screen').width -> Si cambia o giramos la pantalla estas dimensiones no cambian
const MainSlideshow = ({ movies }: Props) => {
    const ref = useRef<ICarouselInstance>(null);
    //* Si cambia las dimensiones giro o se abrio un telefono
    //* desplegable el width si va a cambiar dinamicamente
    const width = useWindowDimensions().width
    return (
        <View className='h-[250px] w-full '>
            <Carousel
                ref={ref}
                data={movies}
                renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} />}
                //Grosor de tarjetas
                width={200}
                height={350}
                style={{
                    width: width,
                    height: 350,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                mode='parallax'
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50
                }}
                defaultIndex={1}
            />
        </View>
    )
}

export default MainSlideshow

