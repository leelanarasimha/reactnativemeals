import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';

const CategoryGridTile  = (props) => {

    let TouchableItem = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableItem = TouchableNativeFeedback;
    }

    return (
<View style={styles.itemData} >
        <TouchableItem 
            
            onPress={props.onSelect}s>
                <View style={{...styles.itemBox, ...{backgroundColor: props.item.color}}}>
                    <Text style={styles.item}>{props.item.title}</Text>
                </View>
        </TouchableItem>
        </View>
    );
}

const styles = StyleSheet.create({
    itemData: {
        flex: 1,
        margin: 15,
        height: 150,
        elevation: 3,
        

    },
    itemBox: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    item: {
        fontSize: 20,
        fontFamily: 'open-sans'
    }
});

export default CategoryGridTile;