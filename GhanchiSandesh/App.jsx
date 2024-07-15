import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Text, View, TouchableWithoutFeedback, TouchableOpacity, Image, Linking, Alert } from 'react-native';
import About from './src/screens/about/About';
import Contact from './src/screens/contact/Contact';
import Blogs from './src/screens/blogs/Blogs';
import Blog from './src/screens/blogs/Blog';
import Videos from './src/screens/videos/Videos';
import Articles from './src/screens/articles/Articles';
import Pdfs from './src/screens/pdfs/Pdfs';
import PdfReader from './src/screens/pdfs/PdfReader';
import Article from './src/screens/articles/Article';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Drawer content component
function DrawerContent(props) {
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
  const navigation = props.navigation;


  return (
    <View style={{
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 20,
      backgroundColor: '#e51a4b'
    }}>

      <TouchableWithoutFeedback onPress={() => navigation.navigate('Blogs')}>
        <Image
          source={require('./images/GS.jpg')}
          style={{
            width: '60%',
            height: 90,
            resizeMode: 'contain'
          }}
        />
      </TouchableWithoutFeedback>

      <TouchableOpacity onPress={() => navigation.navigate('Blogs')}>
        <Text style={{
          color: 'white',
          textDecorationLine: 'underline',
          fontSize: 16,
          marginVertical: 10,
          fontWeight: 'bold',
          letterSpacing: 2
        }}>HOME</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text style={{
          color: 'white',
          textDecorationLine: 'underline',
          fontSize: 16,
          marginVertical: 20,
          fontWeight: 'bold',
          letterSpacing: 2
        }}>ABOUT</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
        <Text style={{
          color: 'white',
          textDecorationLine: 'underline',
          fontSize: 16,
          marginVertical: 10,
          fontWeight: 'bold',
          letterSpacing: 2
        }}>CONTACT</Text>
      </TouchableOpacity>

      <View style={{
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 25
      }}>
        <TouchableOpacity onPress={() => openLink('fb://', 'https://www.facebook.com')}>
          <AntDesign name='facebook-square' size={20} color='white' />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink('twitter://', 'https://www.twitter.com')}>
          <FontAwesome5 name='twitter-square' size={20} color='white' />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink('instagram://', 'https://www.instagram.com')}>
          <FontAwesome5 name='instagram-square' size={20} color='white' />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink('whatsapp://send?phone=+919636941272', 'https://wa.me/919636941272')}>
          <FontAwesome5 name='whatsapp-square' size={20} color='white' />
        </TouchableOpacity>
      </View>
    </View >
  );
}

// About Stack Navigator for additional navigation within About
function AboutStack() {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen name="about" component={About} options={{ title: 'About' }} />
    </Stack.Navigator>
  );
}

// Contact Stack Navigator for additional navigation within Contact
function ContactStack() {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen name="contact" component={Contact} options={{ title: 'Contact' }} />
    </Stack.Navigator>
  );
}

// Contact Stack Navigator for additional navigation within Contact
function PdfStack() {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen name="Pdf" component={Pdfs} options={{ title: 'Pdfs' }} />
    </Stack.Navigator>
  );
}

// Contact Stack Navigator for additional navigation within Contact
function PdfReaderStack() {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen name="PdfReader" component={PdfReader} options={{ title: 'PdfReader' }} />
    </Stack.Navigator>
  );
}


// Main Tab Navigator including all primary navigation
function MainTabNavigator() {
  return (
    <Tab.Navigator screenOptions={() => ({ headerShown: false, tabBarShowLabel: false })}>
      <Tab.Screen name="Blogs" component={Blogs}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <Icon name={focused ? "home" : "home-outline"} color={focused ? '#e51a4b' : 'black'} size={33} />
          )
        })} />
      <Tab.Screen name="Videos" component={Videos}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <Icon name={focused ? "play-circle" : "play-circle-outline"} color={focused ? '#e51a4b' : 'black'} size={30} />
          )
        })} />
      <Tab.Screen name="Articles" component={Articles}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <Icon name={focused ? "file-edit" : "file-edit-outline"} color={focused ? '#e51a4b' : 'black'} size={30} />
          )
        })} />
      <Tab.Screen
        name="About"
        component={AboutStack}
        options={() => ({
          tabBarButton: () => null,
          tabBarVisible: false,
        })}
      />
      <Tab.Screen
        name="Contact"
        component={ContactStack}
        options={() => ({
          tabBarButton: () => null,
          tabBarVisible: false,
        })}
      />
      <Tab.Screen
        name="Pdfs"
        component={PdfStack}
        options={() => ({
          tabBarButton: () => null,
          tabBarVisible: false,
        })}
      />
      <Tab.Screen
        name="PdfReader"
        component={PdfReader}
        options={() => ({
          tabBarButton: () => null,
          tabBarVisible: false,
        })}
      />
      <Tab.Screen
        name="Blog"
        component={Blog}
        options={() => ({
          tabBarButton: () => null,
          tabBarVisible: false,
        })}
      />
      <Tab.Screen
        name="Article"
        component={Article}
        options={() => ({
          tabBarButton: () => null,
          tabBarVisible: false,
        })}
      />
    </Tab.Navigator>

  );
}

// Main App Component
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#e51a4b', // Set the header background color
          },
          drawerPosition: 'right',
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity style={{ justifyContent: 'center', marginRight: 15, paddingVertical: 3, paddingHorizontal: 8, height: 'auto', backgroundColor: 'white', borderRadius: 7 }} onPress={() => navigation.navigate('Pdfs')}>
                <Text style={{ color: '#e51a4b', fontWeight: '700', fontSize: 14, textAlign: 'center', verticalTextAlign: 'middle' }}>ई-संदेश</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Ionicons name="menu" size={40} color="white" style={{ marginRight: 15 }} />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Blogs')}>
              <Image
                source={require('./images/GS.jpg')}
                style={{ width: 120, height: 40, marginLeft: 10, marginTop: -4 }} // Adjust the size and margin as needed
              />
            </TouchableWithoutFeedback>
          ),
        })}
        drawerContent={props => <DrawerContent {...props}
        />}>
        <Drawer.Screen name="Home" component={MainTabNavigator} options={() => ({
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null
        })} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
