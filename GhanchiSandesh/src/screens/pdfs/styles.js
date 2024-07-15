import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: 'white',
    },
    scrollView: {
        padding: 20,
        width: '100%',
        alignItems: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#e51a4b',
        borderRightWidth: 1,
        borderRightColor: '#e51a4b',
        borderLeftWidth: 1,
        borderLeftColor: '#e51a4b',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 5,
    },
    pdfsWrapper: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 20,
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
    pdfView: {
        width: '45%',
        height: 200,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    btnPdf: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }

});

export default styles;
