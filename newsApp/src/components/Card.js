import React from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
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
               <Text style={styles.title}>Dummy Title</Text>
               <MaterialIcons name="favorite-border" color="#72bcd4" size={24} />
            </View>
            <View style={styles.descriptionWrapper}>
                <Text style={styles.description}>This is a dummy description</Text>
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
        height: "75%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
        resizeMode: 'stretch'
    },
    titleWrapper: {
        height: '10%',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    descriptionWrapper: {
        paddingHorizontal: 15
    },
    title: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 20,
        marginTop: 10
    },
    description: {
        fontFamily: 'Ubuntu',
        fontSize: 15,
        marginTop: 10
    }
});
export default Card;