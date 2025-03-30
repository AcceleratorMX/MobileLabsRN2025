import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const newsData = [
    {id: '1', title: 'Новина 1', date: '30-03-2025', text: 'Текст новини 1', image: ''},
    {id: '2', title: 'Новина 2', date: '29-03-2025', text: 'Текст новини 2', image: require('../../assets/images/ztu-logo.png')},
    {id: '3', title: 'Новина 3', date: '28-03-2025', text: 'Текст новини 3', image: ''},
    {id: '4', title: 'Новина 4', date: '27-03-2025', text: 'Текст новини 4', image: require('../../assets/images/ztu-logo.png')},
    {id: '5', title: 'Новина 5', date: '26-03-2025', text: 'Текст новини 5', image: ''},
    {id: '6', title: 'Новина 6', date: '25-03-2025', text: 'Текст новини 6', image: require('../../assets/images/ztu-logo.png')},
    {id: '7', title: 'Новина 7', date: '24-03-2025', text: 'Текст новини 7', image: ''},
    {id: '8', title: 'Новина 8', date: '23-03-2025', text: 'Текст новини 8', image: require('../../assets/images/ztu-logo.png')},
    {id: '9', title: 'Новина 9', date: '22-03-2025', text: 'Текст новини 9', image: ''},
    {id: '10', title: 'Новина 10', date: '21-03-2025', text: 'Текст новини 10', image: require('../../assets/images/ztu-logo.png')},
];

export const Home = () => {
    const itemsPerPage = 5;
    const [currentData, setCurrentData] = useState(newsData.slice(0, itemsPerPage));
    const [page, setPage] = useState(1);

    const loadMoreData = () => {
        const startIndex = page * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        if (startIndex < newsData.length) {
            setCurrentData((prevData) => [...prevData, ...newsData.slice(startIndex, endIndex)]);
            setPage((prevPage) => prevPage + 1);
        }
    };

    const renderNewsItem = ({item}) => (
        <View style={homeStyles.newsList}>
            <View style={homeStyles.newsListItem}>
                <View>
                    {item.image ? (
                        <Image
                            source={item.image}
                            style={homeStyles.newsItemImage}
                            resizeMode="contain"
                        />
                    ) : (
                        <Icon style={homeStyles.newsItemIcon} name={'images'} size={70} color={'#707070'}/>
                    )}
                </View>
                <View style={homeStyles.newsItemTextContainer}>
                    <Text style={homeStyles.newsItemTitle}>{item.title}</Text>
                    <Text style={homeStyles.newsItemDate}>{item.date}</Text>
                    <Text style={homeStyles.newsItemText}>{item.text}</Text>
                </View>
            </View>
        </View>
    );

    return (
        <View style={homeStyles.container}>
            <FlatList
                data={currentData}
                keyExtractor={(item) => item.id}
                renderItem={renderNewsItem}
                onEndReached={loadMoreData}
                onEndReachedThreshold={0.1}
                initialData={itemsPerPage}
            />
        </View>
    );
};

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    newsList: {
        marginTop: 20,
    },
    newsListItem: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    newsItemIcon: {
        backgroundColor: '#f3f3f3',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    newsItemImage: {
        width: 100,
        height: 100,
    },
    newsItemTextContainer: {
        flex: 1,
        marginLeft: 10,
        gap: 10
    },
    newsItemTitle: {
        fontSize: 18,
        fontWeight: '500',
    },
    newsItemDate: {
        fontWeight: '200',
        color: '#707070',
    },
    newsItemText: {
        color: '#333',
    },
});
