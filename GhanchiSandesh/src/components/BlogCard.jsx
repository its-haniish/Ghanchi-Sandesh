import React from 'react'
import { Text, View, Image, TouchableOpacity } from "react-native"
import styles from '../screens/blogs/styles'
import Icon from 'react-native-vector-icons/FontAwesome6'
import { useNavigation } from '@react-navigation/native';

const BlogCard = ({ title, para, featured, author, location, slug }) => {
    const navigation = useNavigation();
    const getFirst150Characters = (text) => {
        return text.length > 150 ? text.substring(0, 150) : text;
    };
    const handleClick = slug => {
        navigation.navigate('Blog', { slug })
    }

    return (
        <TouchableOpacity style={styles.card} onPress={() => handleClick(slug)}>
            <View style={styles.cardInfoWrapper}>
                <View style={styles.locationWrapper}>
                    <Icon name='location-dot' size={17} color='#e51a4b' />
                    <Text style={styles.cardLocation}>{location}</Text>
                </View>
                <Text style={styles.cardAuthor}>प्रेषक: {author}</Text>
            </View>
            <Image
                style={styles.image}
                source={{ uri: featured }}
                alt='Blog Image'
            />
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardPara}>
                {
                    getFirst150Characters(para)
                }
                <Text style={styles.readMore}> आगे पढ़े...</Text> </Text>
        </TouchableOpacity>
    )
}

export default BlogCard