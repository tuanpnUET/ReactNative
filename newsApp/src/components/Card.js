import React from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const Card = () => {
    return(
        <View style={styles.card}>
            <View style={styles.imageWrapper}>
                <Image
                    source={require('../../assets/unnamed.jpg')}
                    // source={{uri: 'https://tintrading.net/wp-content/uploads/2019/08/tintrading-news2-1.jpg'}}
                    style={styles.image}
                />
            </View>
            <View style={styles.titleWrapper}>
               <Text>Dummy Title</Text>
            </View>
            <View style={styles.descriptionWrapper}>
                <Text>This is a dummy description</Text>
            </View>
        </View>   
    );
};
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        height: 300,
        margin: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5
    },
    imageWrapper: {
        width: "100%",
        height: "80%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
        resizeMode: 'stretch'
    },
    titleWrapper: {
        height: '10%',
        paddingHorizontal: 15
    },
    descriptionWrapper: {
        paddingHorizontal: 15
    }
});
export default Card;