import React, { useState, useRef, useCallback } from 'react';
import { View, StyleSheet, Dimensions, BackHandler, Text, RefreshControl, TouchableWithoutFeedback } from 'react-native';
import { WebView } from 'react-native-webview';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

const PdfReader = ({ route }) => {
    const { link } = route.params;
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = useState(false);
    const pdfUrl = link.replace('view?usp=sharing', 'preview');
    const webViewRef = useRef(null);

    const injectedJS = `
        const signInButton = document.querySelector("button");
        if (signInButton) {
            signInButton.style.display = "none";
        }
    `;

    const handleRefresh = () => {
        setRefreshing(true);
        if (webViewRef.current) {
            webViewRef.current.reload();
        }
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                navigation.navigate('Pdfs');
                return true;
            };

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () => {
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
            };
        }, [navigation])
    );

    return (
        <View style={styles.container}>
            <View style={{
                zIndex: 1,
                flexDirection: 'row',
                backgroundColor: '#e51a4b',
                position: 'absolute',
                top: 13,
                right: 10,
                backgroundColor: '#e51a4b',
                paddingVertical: 5,
                paddingHorizontal: 10,
                alignItems: 'center',
                borderRadius: 10,
            }} >
                <>
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate('Pdfs')}
                    >
                        <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate('Pdfs')}
                    >
                        <Text style={{
                            fontSize: 18,
                            marginLeft: 5,
                            color: 'white',
                        }}>Back</Text>

                    </TouchableWithoutFeedback>
                </>
            </View>
            <WebView
                ref={webViewRef}
                source={{ uri: pdfUrl }}
                injectedJavaScript={injectedJS}
                style={styles.webview}
                refreshControl={
                    <RefreshControl
                        colors={['#e51a4b']}
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                    />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f0f0f0',
        zIndex: 1,
    },
    backButtonText: {
        fontSize: 18,
        marginLeft: 5,
    },
    webview: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default PdfReader;
