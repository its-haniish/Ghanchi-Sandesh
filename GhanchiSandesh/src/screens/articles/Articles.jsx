import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, ActivityIndicator, RefreshControl, ToastAndroid, TouchableOpacity } from 'react-native';
import styles from './styles';
import ArticleCard from '../../components/ArticleCard';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Articles = () => {
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [articles, setArticles] = useState([]);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [isAllLoaded, setIsAllLoaded] = useState(false);

    const fetchArticlesFromApi = async (pageNum) => {
        try {
            const response = await fetch('https://ghanchisandesh.live/get-all-gs-articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ page: pageNum })
            });
            const data = await response.json();
            if (data?.msg) {
                setLoading(false);
                return null;
            }
            return data.response;
        } catch (error) {
            ToastAndroid.show('Something went wrong.', ToastAndroid.SHORT);
            setIsError(true);
            setLoading(false);
            return null;
        }
    };

    const loadArticles = async () => {
        setLoading(true);

        try {
            const cachedArticles = await AsyncStorage.getItem('articles');
            if (cachedArticles !== null) {
                setIsAllLoaded(true);
                setArticles(JSON.parse(cachedArticles));
                setLoading(false);
                // Fetch fresh data in background
                const freshArticles = await fetchArticlesFromApi(page);
                if (freshArticles) {
                    setArticles(freshArticles);
                    await AsyncStorage.setItem('articles', JSON.stringify(freshArticles));
                }
            } else {
                // No cached data, fetch from API and show loader
                const freshArticles = await fetchArticlesFromApi(page);
                setIsAllLoaded(false)
                if (freshArticles) {
                    setArticles(freshArticles);
                    await AsyncStorage.setItem('articles', JSON.stringify(freshArticles));
                }
            }
            setLoading(false);
            setIsError(false);
        } catch (error) {
            setIsError(true);
            setLoading(false);
        }
    };

    const loadMoreArticles = async () => {
        if (isLoadingMore) return;
        if (loading) return;
        if (refreshing) return;

        setIsLoadingMore(true);
        const nextPage = page + 1;
        const moreArticles = await fetchArticlesFromApi(nextPage);
        if (moreArticles) {
            const updatedArticles = [...articles, ...moreArticles];
            await AsyncStorage.setItem('articles', JSON.stringify(updatedArticles));
            setArticles(updatedArticles);
            if (moreArticles.length === 10) {
                setPage(nextPage);
                setIsLoadingMore(false);
                return;
            } else {
                setIsAllLoaded(true);
                setIsLoadingMore(false);
                return;
            }
        }
        setIsLoadingMore(false);
    };


    const handleRefresh = async () => {
        setRefreshing(true);
        setIsAllLoaded(false);
        const freshArticles = await fetchArticlesFromApi(1);
        if (freshArticles) {
            setArticles(freshArticles);
            await AsyncStorage.setItem('articles', JSON.stringify(freshArticles));
            setPage(1);
        }
        setRefreshing(false);
    };

    useEffect(() => {
        loadArticles();
    }, []);

    const handleScroll = ({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent) && !isAllLoaded) {
            loadMoreArticles();
        }
    };

    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
    };

    return (
        <View style={styles.main}>
            <Text style={styles.heading}>TOP ARTICLES</Text>
            <ScrollView
                contentContainerStyle={styles.wrapper}
                refreshControl={<RefreshControl colors={['#e51a4b']} refreshing={refreshing} onRefresh={handleRefresh} />}
                onScroll={handleScroll}

            >
                {!loading &&
                    !isError &&
                    articles?.map((item, index) => {
                        const { title, featured, contents } = item;
                        const paragraph = contents.find(content => content.type === 'Paragraph');
                        return <ArticleCard
                            key={index}
                            para={paragraph.content || ''}
                            title={title}
                            featured={featured}
                            data={item} />;
                    })}
                {loading && (
                    <View style={styles.loaderWrapper}>
                        <ActivityIndicator size={50} color="#e51a4b" />
                        <Text style={styles.loaderText}>Articles are loading...</Text>
                    </View>
                )}
                {isError && (
                    <View style={styles.loaderWrapper}>
                        <TouchableOpacity>
                            <Entypo name="cycle" size={50} color="#e51a4b" onPress={loadArticles} />
                        </TouchableOpacity>
                        <Text style={styles.loaderText}>Something went wrong.</Text>
                    </View>
                )}
                {isLoadingMore && !isAllLoaded && !isError && (
                    <View style={styles.moreLoaderWrapper}>
                        <ActivityIndicator size={20} color="#e51a4b" />
                        <Text style={styles.moreLoaderText}>Loading more articles...</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

export default Articles;
