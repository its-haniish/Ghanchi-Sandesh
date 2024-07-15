import React, { useEffect } from 'react';
import { Text, ScrollView, View, Linking, TouchableOpacity, Alert, ActivityIndicator, ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Contact = () => {
    const [message, setMessage] = React.useState({
        email: '',
        message: ''
    });
    const [loading, setLoading] = React.useState(false);
    const emailRef = React.useRef(null);
    const messageRef = React.useRef(null);
    const openLink = async (appUrl, webUrl) => {
        try {
            const supported = await Linking.canOpenURL(appUrl);
            if (supported) {
                await Linking.openURL(appUrl);
            } else {
                await Linking.openURL(webUrl);
            }
        } catch (error) {
            Alert.alert("Error", `Unable to open URL: ${webUrl}`);
        }
    };

    const handleSendMessage = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(message.email)) {
            ToastAndroid.show("Please enter a valid email address.", ToastAndroid.SHORT);
            emailRef.current.focus();
            return;
        }
        if (message.message.length < 10) {
            ToastAndroid.show("Please enter message properly.", ToastAndroid.SHORT);
            messageRef.current.focus();
            return;
        }
        setLoading(true);

        try {
            const response = await fetch('https://ghanchisandesh.live/send-msg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    msg: `
                    <div style="font-family: Arial, sans-serif; color: #333;">
                    <h2 style="color: #e51a4b;">New Contact Form Submission</h2>
                    <p style="font-size: 16px;">
                        <strong>Email:</strong> ${message.email}
                    </p>
                    <p style="font-size: 16px;">
                        <strong>Message:</strong><br />
                        ${message.message.replace(/\n/g, '<br />')}
                    </p>
                </div>

                    ` })
            })

            const result = await response.json()
            if (result.message === "Message sent successfully") {
                ToastAndroid.show("Thank you for your message. We will contact you soon.", ToastAndroid.SHORT);
                setMessage({ email: '', message: '' });
                emailRef.current.blur();
                messageRef.current.blur();
                setLoading(false);
            }

        } catch (error) {
            console.log(error);
            ToastAndroid.show("Unable to send message. Please try again later.", ToastAndroid.SHORT);
            setLoading(false);
            return;
        }
    };

    useEffect(() => {
        emailRef.current.focus()
    }, [])


    return (
        <View style={styles.main}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.heading}>
                    CONTACT US
                </Text>

                <View style={styles.infoWrapper}>
                    <Entypo name='location-pin' size={22} color='#e51a4b' />
                    <TouchableOpacity onPress={() => openLink('geo:0,0?q=D-347, SUMEL BUSINESS PARK-6, NEAR, HANUMATU PURA BRTS AHMEDABAD,380004', 'https://maps.google.com/?q=E-345, SUMEL BUSINESS PARK-6, NEAR, HANUMATU PURA BRTS AHMEDABAD,380004')}>
                        <Text style={styles.text}>
                            E-345, SUMEL BUSINESS PARK-6, NEAR, HANUMATU PURA BRTS AHMEDABAD,380004
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.infoWrapper}>
                    <FontAwesome name='whatsapp' size={22} color='#e51a4b' />
                    <TouchableOpacity onPress={() => openLink('whatsapp://send?phone=+919636941272', 'https://wa.me/919636941272')}>
                        <Text style={styles.text}>
                            +91 9636941272
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.infoWrapper}>
                    <Entypo name='phone' size={22} color='#e51a4b' style={{ transform: [{ rotateY: '180deg' }] }} />
                    <TouchableOpacity onPress={() => openLink('tel:+919460072276', 'tel:+919460072276')}>
                        <Text style={styles.text}>
                            +91 9460072276
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.infoWrapper}>
                    <Entypo name='mail' size={22} color='#e51a4b' />
                    <TouchableOpacity onPress={() => openLink('mailto:shreeghanchisandesh@gmail.com', 'mailto:shreeghanchisandesh@gmail.com')}>
                        <Text style={styles.text}>
                            shreeghanchisandesh@gmail.com
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.form}>

                    <Text style={styles.subHeading}>
                        Send us your message, we will contact you:
                    </Text>


                    <TextInput
                        ref={emailRef}
                        label="Your Email"
                        value={message.email}
                        onChangeText={text => setMessage({ ...message, email: text })}
                        multiline
                        numberOfLines={1}
                        style={styles.inputEmail}
                    />

                    <TextInput
                        ref={messageRef}
                        label="Your Message"
                        value={message.message}
                        onChangeText={text => setMessage({ ...message, message: text })}
                        multiline
                        numberOfLines={4}
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.button} onPress={
                        !loading ? handleSendMessage :
                            () => ToastAndroid.show("Please wait, message is sending.", ToastAndroid.SHORT)
                    }>
                        {
                            loading ?
                                <ActivityIndicator color='white' size='small' />
                                :
                                <Text style={styles.buttonText}>Send Message</Text>
                        }
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
};


export default Contact;
