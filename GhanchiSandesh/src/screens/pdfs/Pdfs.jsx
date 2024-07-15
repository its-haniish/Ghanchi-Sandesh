import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, ActivityIndicator, RefreshControl, ToastAndroid, TouchableOpacity } from 'react-native';
import styles from './styles';
import PdfCard from '../../components/PdfCard';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Pdfs = () => {
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [pdfs, setPdfs] = useState([]);
    const [isError, setIsError] = useState(false);

    const fetchPdfsFromApi = async () => {
        try {
            const response = await fetch('https://ghanchisandesh.live/get-all-gs-pdfs', {
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

    const loadPdfs = async () => {
        setLoading(true);
        try {
            const cachedPdfs = await AsyncStorage.getItem('pdfs');
            if (cachedPdfs !== null) {
                setPdfs(JSON.parse(cachedPdfs).reverse());
                setLoading(false);
                // Fetch fresh data in background
                const freshPdfs = await fetchPdfsFromApi();
                if (freshPdfs) {
                    setPdfs(freshPdfs.reverse());
                    await AsyncStorage.setItem('pdfs', JSON.stringify(freshPdfs));
                }
            } else {
                // No cached data, fetch from API and show loader
                const freshPdfs = await fetchPdfsFromApi();
                if (freshPdfs) {
                    setPdfs(freshPdfs.reverse());
                    await AsyncStorage.setItem('pdfs', JSON.stringify(freshPdfs));
                }
            }
            setLoading(false);
            setIsError(false);
        } catch (error) {
            console.error('Error loading pdfs:', error);
            setIsError(true);
            setLoading(false);
        }
    };

    const handleRefresh = async () => {
        setRefreshing(true);
        const freshPdfs = await fetchPdfsFromApi();
        if (freshPdfs) {
            setPdfs(freshPdfs.reverse());
            await AsyncStorage.setItem('pdfs', JSON.stringify(freshPdfs));
        }
        setRefreshing(false);
    };

    useEffect(() => {
        loadPdfs();
    }, []);

    return (
        <View style={styles.main}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={<RefreshControl colors={['#e51a4b']} refreshing={refreshing} onRefresh={handleRefresh} />}
            >
                <Text style={styles.heading}>ई-संदेश</Text>
                {!loading && !isError && (
                    <View style={styles.pdfsWrapper}>
                        {pdfs.map((pdf) => (
                            <PdfCard key={pdf._id} title={pdf.title} link={pdf.link} featured={pdf.featured} />
                        ))}
                    </View>
                )}
                {loading && (
                    <View style={styles.loaderWrapper}>
                        <ActivityIndicator size={50} color="#e51a4b" />
                        <Text style={styles.loaderText}>Pdfs are loading...</Text>
                    </View>
                )}
                {isError && (
                    <View style={styles.loaderWrapper}>
                        <TouchableOpacity>
                            <Entypo name="cycle" size={50} color="#e51a4b" onPress={loadPdfs} />
                        </TouchableOpacity>
                        <Text style={styles.loaderText}>Something went wrong.</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

export default Pdfs;
