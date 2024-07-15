import React from 'react'
import { Text, ScrollView, Image, View } from 'react-native'
const About = () => {
    return (
        <View style={{
            width: '100%',
            flex: 1,
            backgroundColor: 'white',
        }}>
            <ScrollView contentContainerStyle={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'flex-start'
            }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: '#e51a4b',
                    marginVertical: 20,
                    letterSpacing: 2,
                    textDecorationLine: 'underline'
                }}>
                    ABOUT US
                </Text>
                <Image
                    source={require('../../../images/Icon.jpg')}
                    alt='image'
                    style={{
                        width: 200,
                        height: 200
                    }}
                />
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#333',
                    marginTop: 10,
                    width: '85%',
                    textAlign: 'justify',
                    lineHeight: 25
                }}>
                    विभिन्न पट्टी पारों में विभाजित क्षत्रिय घांची समाज में आपसी परिचय व संपर्क बढ़ाने के उद्देश्य से दिनेश चौहान भीनमाल द्वारा श्री घाँची संदेश पत्रिका का प्रकाशन प्रारंभ किया गया था। श्री घाँची संदेश द्वारा वर्ष 2001 में जालोर जिले में बसे समाजबंधुओं को एक माला में पिरोने के उद्देश्य से 'जालोर जिले की निर्देशिका' प्रकाशन किया गया था। इसके बाद समाजबंधुओं के सहयोग से श्री घाँची संदेश लगातार प्रकाशित हो रही थी, लेकिन 2020 में कोरोना के कारण इसका प्रकाशन बंद करना पड़ा था। वर्ष 2023 में समाज के अग्रणीय बंधुओं द्वारा मिले सकारात्मक सहयोग से श्री घाँची संदेश का प्रकाशन पुनः प्रारंभ किया था। वर्तमान समय में बढ़ते मोबाइल के उपयोग को ध्यान में रखते श्री घाँची संदेश पत्रिका डिजीटल प्लेटफार्म पर उपलब्ध करवाया जा रहा हैं। आशा हैं हमारा यह प्रयास आपको प्रसंद आएगा।
                </Text>
                <View style={{
                    height: 200,
                    width: '100%',
                    backgroundColor: '#e34d71',
                    marginBottom: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image
                        source={require('../../../images/dinesh.jpg')}
                        alt='image'
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 75
                        }}
                    />
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'white',
                        marginTop: 10
                    }}>
                        दिनेश चौहान
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: 'white',
                    }}>
                        संपादक - श्री घाँची-संदेश
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default About