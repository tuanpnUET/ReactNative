import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Header = () => {
    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Hot Girl News</Text>
            </View>
            {/* <View 
                style={{backgroundColor: 'silver', 
                        padding: 10, 
                        flex: 1, 
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'baseline'
            }}>
                <View style={{width: 60, height: 60, backgroundColor: 'red'}}>
                    <Text>VietNam</Text>
                </View>
                <View style={{width: 60, height: 60, backgroundColor: 'yellow'}}>
                    <Text>Chinese</Text>
                </View>
                <View style={{width: 60, height: 60, backgroundColor: 'green'}}>
                    <Text>Amerian</Text>
                </View>
            </View> */}
        </View>        
    );
};
const styles = StyleSheet.create({
    header: {
        backgroundColor: Platform.OS === 'android' ? '#72bcd4' : '#ffffff',
        padding: 5,
        borderBottomColor: Platform.OS === 'android' ? '#ffffff' : '#72bcd4',
        borderBottomWidth: 1
    },
    title: {
        marginTop: 10, 
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 20,
        color: Platform.OS === 'android' ? '#ffffff' : '#72bcd4'
    }
});
export default Header;