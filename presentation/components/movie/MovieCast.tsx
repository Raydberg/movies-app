import { View, FlatList, Text } from 'react-native'
import React from 'react'
import { Cast } from '@/infrastructure/interfaces/creadits.interface'
import { ActorCard } from '../actors/ActorCard'

interface Props {
    actor: Cast[],
    title: string;
}

const MovieCast = ({ actor, title }: Props) => {
    return (
        <View className='mt-2'>
            {
                title && (
                    <Text className='font-black text-2xl ml-5'>
                        {title}
                    </Text>
                )
            }

            <FlatList
                horizontal
                data={actor}
                keyExtractor={(item) => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <ActorCard
                        actor={item}
                    />
                )}

            />
        </View>
    )
}

export default MovieCast