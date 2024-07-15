import { Text, View, Image, TouchableOpacity } from "react-native"
import styles from '../screens/articles/styles'
import { useNavigation } from "@react-navigation/native";

const ArticleCard = ({ title, para, featured, slug, data }) => {
    const navigation = useNavigation();
    const getFirst100Characters = (text) => {
        return text.length > 100 ? text.substring(0, 100) : text;
    };
    const handleClick = () => {
        navigation.navigate('Article', { data })
    }
    return (
        <TouchableOpacity style={styles.card} onPress={() => handleClick()}>
            <Text style={styles.cardTitle}>{title}</Text>
            <View style={styles.cardInfoWrapper}>
                <Text style={styles.cardPara}>
                    {
                        getFirst100Characters(para)
                    }
                    <Text style={styles.readMore}> आगे पढ़े...</Text></Text>
                <Image
                    style={styles.image}
                    source={{ uri: featured }}
                    alt='Articles image'
                />

            </View>
        </TouchableOpacity>
    )
}

export default ArticleCard