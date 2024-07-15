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

    const fetchArticlesFromApi = async () => {
        try {
            const response = await fetch('https://ghanchisandesh.live/get-all-gs-articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
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
                setArticles(JSON.parse(cachedArticles).reverse());
                setLoading(false);
                // Fetch fresh data in background
                const freshArticles = await fetchArticlesFromApi();
                if (freshArticles) {
                    setArticles(freshArticles.reverse());
                    await AsyncStorage.setItem('articles', JSON.stringify(freshArticles));
                }
            } else {
                // No cached data, fetch from API and show loader
                const freshArticles = await fetchArticlesFromApi();
                if (freshArticles) {
                    setArticles(freshArticles.reverse());
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

    const handleRefresh = async () => {
        setRefreshing(true);
        const freshArticles = await fetchArticlesFromApi();
        if (freshArticles) {
            setArticles(freshArticles.reverse());
            await AsyncStorage.setItem('articles', JSON.stringify(freshArticles));
        }
        setRefreshing(false);
    };

    useEffect(() => {
        loadArticles();
    }, []);

    return (
        <View style={styles.main}>
            <Text style={styles.heading}>TOP ARTICLES</Text>
            <ScrollView
                contentContainerStyle={styles.wrapper}
                refreshControl={<RefreshControl colors={['#e51a4b']} refreshing={refreshing} onRefresh={handleRefresh} />}
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
            </ScrollView>
        </View>
    );
};

export default Articles;
