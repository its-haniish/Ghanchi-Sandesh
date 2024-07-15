import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview'; // Correct import statement
import styles from '../screens/videos/styles'; // Adjust path as necessary

const VideoCard = ({ link, description }) => {
    const videoId = link.split('/')[link.split('/').length - 1].split('?')[0];
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <View style={styles.card} onPress={() => handleClick('the-best-blog')}>
            <View style={styles.webviewWrapper}>
                <WebView
                    style={[styles.webview, { flex: 1 }]}
                    source={{ uri: youtubeEmbedUrl }}
                    allowsFullscreenVideo
                />
            </View>
            <Text style={styles.cardDescription}>{description}</Text>
        </View>
    );
};

export default VideoCard;
