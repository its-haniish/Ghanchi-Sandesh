import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, ActivityIndicator, RefreshControl, ToastAndroid, TouchableOpacity } from 'react-native';
import styles from './styles';
import BlogCard from '../../components/BlogCard';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Blogs = () => {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [isError, setIsError] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const fetchBlogsFromApi = async () => {
        try {
            const response = await fetch('https://ghanchisandesh.live/get-gs-blog-cards', {
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
            return data;
        } catch (error) {
            setIsError(true);
            ToastAndroid.show('Something went wrong.', ToastAndroid.SHORT);
            setLoading(false);
            return null;
        }
    };

    const loadBlogs = async () => {
        setLoading(true);
        try {
            const cachedBlogs = await AsyncStorage.getItem('blogs');
            if (cachedBlogs !== null) {
                setBlogs(JSON.parse(cachedBlogs).reverse());
                setLoading(false);
                // Fetch fresh data in background
                const freshBlogs = await fetchBlogsFromApi();
                if (freshBlogs) {
                    setBlogs(freshBlogs.reverse());
                    await AsyncStorage.setItem('blogs', JSON.stringify(freshBlogs));
                }
            } else {
                // No cached data, fetch from API and show loader
                const freshBlogs = await fetchBlogsFromApi();
                if (freshBlogs) {
                    setBlogs(freshBlogs.reverse());
                    await AsyncStorage.setItem('blogs', JSON.stringify(freshBlogs));
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
        const freshBlogs = await fetchBlogsFromApi();
        if (freshBlogs) {
            setBlogs(freshBlogs.reverse());
            await AsyncStorage.setItem('blogs', JSON.stringify(freshBlogs));
        }
        setRefreshing(false);
    };

    useEffect(() => {
        loadBlogs();
    }, []);

    return (
        <View style={styles.main}>
            <Text style={styles.heading}>टॉप न्यूज़</Text>
            <ScrollView
                contentContainerStyle={styles.wrapper}
                refreshControl={<RefreshControl colors={['#e51a4b']} refreshing={refreshing} onRefresh={handleRefresh} />}
            >
                {!loading && !isError && blogs.map((blog, index) => {
                    const { author, featured, location, title, slug, contents } = blog;
                    function isObject(value) {
                        return value !== null && typeof value === 'object' && !Array.isArray(value);
                    }
                    return (
                        <BlogCard
                            key={index}
                            para={contents?.content || ''}
                            title={title}
                            featured={featured}
                            author={author}
                            location={location}
                            slug={slug}
                        />
                    );
                })}
                {loading && (
                    <View style={styles.loaderWrapper}>
                        <ActivityIndicator size={50} color="#e51a4b" />
                        <Text style={styles.loaderText}>Blogs are loading...</Text>
                    </View>
                )}
                {isError && (
                    <View style={styles.loaderWrapper}>
                        <TouchableOpacity onPress={loadBlogs}>
                            <Entypo name="cycle" size={50} color="#e51a4b" />
                        </TouchableOpacity>
                        <Text style={styles.loaderText}>Something went wrong.</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

export default Blogs;
