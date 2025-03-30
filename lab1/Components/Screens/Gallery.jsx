import React from 'react';
import { FlatList, StyleSheet, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const galleryData = [
    { id: '1', image: '' },
    { id: '2', image: require('../../assets/images/ztu-logo.png') },
    { id: '3', image: '' },
    { id: '4', image: require('../../assets/images/ztu-logo.png') },
    { id: '5', image: '' },
    { id: '6', image: require('../../assets/images/ztu-logo.png') },
    { id: '7', image: '' },
    { id: '8', image: require('../../assets/images/ztu-logo.png') },
    { id: '9', image: '' },
    { id: '10', image: require('../../assets/images/ztu-logo.png') },
];

export const Gallery = () => {
    const renderGalleryItem = ({ item }) => (
        <View style={galleryStyles.itemContainer}>
            {item.image ? (
                <Image
                    source={item.image}
                    style={galleryStyles.image}
                    resizeMode="contain"
                />
            ) : (
                <Icon name="images" size={70} color="#707070" style={galleryStyles.icon} />
            )}
        </View>
    );

    return (
        <View style={galleryStyles.container}>
            <FlatList
                data={galleryData}
                keyExtractor={(item) => item.id}
                renderItem={renderGalleryItem}
                numColumns={2}
                columnWrapperStyle={galleryStyles.row}
            />
        </View>
    );
};

const galleryStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemContainer: {
        flex: 1,
        aspectRatio: 1,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    icon: {
        padding: 15,
    },
    row: {
        justifyContent: 'space-between',
    },
});