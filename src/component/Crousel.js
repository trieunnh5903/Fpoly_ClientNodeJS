import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'

const carouselData = [
    { id: 1, image: require('../asset/carousel-1.png') },
    { id: 2, image: require('../asset/carousel-1.png') },
    { id: 3, image: require('../asset/carousel-1.png') },
];

const Dots = ({ active }) => {
    return (
        <View style={active ? styles.dotActive : styles.dot}></View>
    )
}

const Carousel = () => {
    const window = useWindowDimensions();
    const ITEM_SIZE = window.width - 2 * 14;
    const [activeIndiccator, setActiveIndicator] = React.useState(0);
    const onScroll = event => {
        const index = Math.round(event.nativeEvent.contentOffset.x / window.width)
        setActiveIndicator(index);
    }
    return (
        <View>
            <ScrollView
                onScroll={onScroll}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}>
                {
                    carouselData.map(item => (
                        <Image
                            key={item.id}
                            source={require('../asset/carousel-1.png')}
                            style={{ width: ITEM_SIZE, height: ITEM_SIZE * 0.4, }}
                            resizeMode='contain' />
                    ))
                }
            </ScrollView>
            <View style={styles.dotContainer}>
                <View style={styles.dotInner}>
                    {carouselData.map((item, index) => (
                        <Dots key={item.id} active={index == activeIndiccator} />
                    ))}
                </View>

            </View>
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({
    dot: {
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor: '#d9d9d9',
        marginHorizontal: 4
    },
    dotContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        margin: 14
    },
    dotActive: {
        width: 24,
        height: 8,
        borderRadius: 8,
        backgroundColor: '#26d38d',
        marginHorizontal: 4
    },
    dotInner: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        padding: 6,
        backgroundColor: '#f8f8f8',
        borderRadius: 8

    }
})