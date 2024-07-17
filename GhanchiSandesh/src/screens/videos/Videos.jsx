import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity, ToastAndroid } from 'react-native';
import styles from './styles';
import VideoCard from '../../components/VideoCard';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Videos = () => {
    const [loading, setLoading] = useState(false);
    const [videos, setVideos] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchVideosFromApi = async () => {
        try {
            const response = await fetch('https://ghanchisandesh.live/get-all-gs-videos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            return data.response;
        } catch (error) {
            ToastAndroid.show('Something went wrong.', ToastAndroid.SHORT);
            setIsError(true);
            setLoading(false);
            return null;
        }
    };

    const loadVideos = async () => {
        setLoading(true);
        try {
            const cachedVideos = await AsyncStorage.getItem('videos');
            if (cachedVideos !== null) {
                setVideos(JSON.parse(cachedVideos));
                setLoading(false);
                // Fetch fresh data in background
                const freshVideos = await fetchVideosFromApi();
                if (freshVideos) {
                    setVideos(freshVideos);
                    await AsyncStorage.setItem('videos', JSON.stringify(freshVideos));
                }
            } else {
                // No cached data, fetch from API and show loader
                const freshVideos = await fetchVideosFromApi();
                if (freshVideos) {
                    setVideos(freshVideos);
                    await AsyncStorage.setItem('videos', JSON.stringify(freshVideos));
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
        const freshVideos = await fetchVideosFromApi();
        if (freshVideos) {
            setVideos(freshVideos.reverse());
            await AsyncStorage.setItem('videos', JSON.stringify(freshVideos));
        }
        setRefreshing(false);
    };

    useEffect(() => {
        loadVideos();
    }, []);

    return (
        <View style={styles.main}>
            <Text style={styles.heading}>TOP VIDEOS</Text>
            <ScrollView
                contentContainerStyle={styles.wrapper}
                refreshControl={<RefreshControl colors={['#e51a4b']} refreshing={refreshing} onRefresh={handleRefresh} />}
            >
                {!loading &&
                    !isError &&
                    videos.map(({ link, description }, index) => {
                        return <VideoCard key={index} link={link} description={description} />;
                    })}
                {loading && (
                    <View style={styles.loaderWrapper}>
                        <ActivityIndicator size={50} color="#e51a4b" />
                        <Text style={styles.loaderText}>Videos are loading...</Text>
                    </View>
                )}
                {isError && (
                    <View style={styles.loaderWrapper}>
                        <TouchableOpacity>
                            <Entypo name="cycle" size={50} color="#e51a4b" onPress={loadVideos} />
                        </TouchableOpacity>
                        <Text style={styles.loaderText}>Something went wrong.</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

export default Videos;
