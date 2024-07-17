import React, { useCallback, useState } from 'react';
import { Text, View, Image, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity, ToastAndroid } from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const Blog = ({ route }) => {
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const { slug } = route.params;
    const [blog, setBlog] = useState({});
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = useState(false);

    const getPostInfo = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://ghanchisandesh.live/get-gs-post`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ slug })
            });
            const result = await res.json();
            if (result?.msg) {
                setLoading(false);
                return navigation.navigate('Blogs');
            }
            setBlog(result.response);
            setLoading(false);
            setIsError(false);
        } catch (error) {
            setIsError(true);
            setLoading(false);
        }
    };

    const handleRefresh = async () => {
        setRefreshing(true);
        try {
            const res = await fetch(`https://ghanchisandesh.live/get-gs-post`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ slug })
            });
            const result = await res.json();
            if (result?.msg) {
                setRefreshing(false);
                setLoading(false);
            }
            setBlog(result.response);
            setRefreshing(false);
            setLoading(false);
            setIsError(false);
        } catch (error) {
            ToastAndroid.show("Something went wrong.", ToastAndroid.SHORT);
            setRefreshing(false);
            setLoading(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            getPostInfo();
        }, [slug])
    );

    return (
        <ScrollView
            contentContainerStyle={styles.blogMain}
            refreshControl={<RefreshControl colors={['#e51a4b']} refreshing={refreshing} onRefresh={handleRefresh} />}
        >
            {!isError && !loading && (
                <>
                    <BlogInfo location={blog?.location || 'India'} author={blog.author} />
                    <Text style={[styles.cardTitle, { fontSize: 20, paddingHorizontal: 8 }]}>{blog.title}</Text>
                    <BlogImage uri={blog.featured} />
                    {blog.contents.map((content, index) => {
                        if (content.type === 'Paragraph') {
                            return <Text key={index} style={[styles.cardPara, { fontSize: 15, paddingHorizontal: 8 }]}>{content.content}</Text>;
                        } else if (content.type === 'Image') {
                            return <BlogImage key={index} uri={content.content} />;
                        } else {
                            return <Text key={index} style={[styles.cardPara, { fontSize: 20, fontWeight: 'bold', color: 'black', paddingHorizontal: 8, textAlign: 'left' }]}>{content.content}</Text>;
                        }
                    })}
                </>
            )}

            {loading && (
                <View style={styles.loaderWrapper}>
                    <ActivityIndicator size={50} color='#e51a4b' />
                    <Text style={styles.loaderText}>News is Loading...</Text>
                </View>
            )}
            {isError && (
                <View style={styles.loaderWrapper}>
                    <TouchableOpacity onPress={getPostInfo}>
                        <Entypo name='cycle' size={50} color='#e51a4b' />
                    </TouchableOpacity>
                    <Text style={styles.loaderText}>Something went wrong.</Text>
                </View>
            )}
        </ScrollView>
    );
};

const BlogInfo = ({ location, author }) => {
    return (
        <View style={[styles.cardInfoWrapper, { paddingHorizontal: 8 }]}>
            <View style={styles.locationWrapper}>
                <Entypo name='location-pin' size={15} color='black' />
                <Text style={[styles.cardLocation, { fontWeight: 'bold' }]}>{location}</Text>
            </View>
            <Text style={styles.cardAuthor}>प्रेषक: <Text style={[styles.cardAuthor, { fontWeight: 'bold' }]}>{author}</Text></Text>
        </View>
    );
};

const BlogImage = ({ uri }) => {
    return (
        <Image
            style={[styles.image, { height: undefined, width: '100%', aspectRatio: 16 / 9, resizeMode: 'contain', marginVertical: 10, paddingHorizontal: 8 }]}
            source={{ uri }}
            alt='Blog Image'
        />
    );
};

export default Blog;
