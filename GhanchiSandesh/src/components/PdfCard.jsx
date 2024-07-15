import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from '../screens/pdfs/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const PdfCard = ({ featured, title, link }) => {
    const navigation = useNavigation();
    const handleOpenPdf = () => {
        navigation.navigate('PdfReader', { link: link });
    }
    return (
        <View style={styles.pdfView}>
            <Image
                source={{ uri: featured }}
                style={{
                    width: '90%',
                    height: 177,
                    resizeMode: 'cover',
                    borderRadius: 5
                }}
            />
            <TouchableOpacity style={styles.btnPdf} onPress={handleOpenPdf}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#e51a4b',
                    marginTop: 10
                }}>
                    {title}
                    <MaterialCommunityIcons
                        name='open-in-new'
                        size={20}
                        color='#e51a4b'
                    />
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default PdfCard;
