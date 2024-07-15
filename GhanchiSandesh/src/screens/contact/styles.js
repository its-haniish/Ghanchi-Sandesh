import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main: {
        width: '100%',
        flex: 1,
        backgroundColor: 'white',
    },
    scrollView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#e51a4b',
        marginVertical: 20,
        letterSpacing: 2,
        textDecorationLine: 'underline'
    },
    text: {
        fontSize: 14,
        color: 'black',
        marginVertical: 10,
    },
    infoWrapper: {
        width: '100%',
        paddingHorizontal: 20,
        gap: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    form: {
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'white',
        width: '90%'
        // borderWidth: 2,
        // borderColor: '#e51a4b',
        // borderRadius: 10,
        // marginVertical: 10,
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
    }
    ,
    inputEmail: {
        backgroundColor: 'white',
        width: '90%'
        // borderWidth: 2,
        // borderColor: '#e51a4b',
        // borderRadius: 10,
        // marginVertical: 10,
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
    },
    subHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#e51a4b'
    },
    button: {
        marginTop: 20,
        backgroundColor: '#e51a4b',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
        width: '50%'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
})

export default styles;