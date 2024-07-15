import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
    },
    heading: {
        backgroundColor: '#e51a4b',
        width: 95,
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
    cardDescription: {
        textAlign: 'justify',
        color: 'black',
        fontSize: 14,
    },
    webviewWrapper: {
        width: '100%',
        height: 150,
        backgroundColor: 'red',
        objectFit: 'contain',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#DCDCDC'
    },
    webview: {
        width: 310
    }

})