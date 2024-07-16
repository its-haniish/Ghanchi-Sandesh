import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
    },
    heading: {
        backgroundColor: '#e51a4b',
        width: 110,
        fontSize: 14,
        marginLeft: 16,
        marginTop: 5,
        padding: 2,
        borderRadius: 5,
        color: 'white',
        textAlign: 'center',
        marginBottom: 6,
        fontWeight: '600'
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        padding: 16,
        paddingTop: 2
    },
    loaderWrapper: {
        height: 500,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderText: {
        color: '#e51a4b',
        fontSize: 17,
        fontWeight: '700'
    },
    card: {
        backgroundColor: '#DCDCDC',
        width: '100%',
        borderRadius: 10,
        fontWeight: '700',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        elevation: 5
    },
    image: {
        borderRadius: 10,
        width: '50%',
        height: 95,
        objectFit: 'cover'
    },
    cardTitle: {
        fontSize: 18,
        color: '#e51a4b',
        textDecorationLine: 'underline',
        fontWeight: '600',
        textAlign: 'justify',
        width: '100%'
    },
    cardPara: {
        width: '50%',
        textAlign: 'justify',
        color: 'black',
        fontSize: 14,
        height: 95
    },
    readMore: {
        color: '#e51a4b',
        fontWeight: '500'
    },
    cardInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        gap: 5
    },
    moreLoaderWrapper: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    moreLoaderText: {
        color: '#e51a4b',
        fontSize: 12,
        fontWeight: '700'
    },
})