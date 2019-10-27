import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Meals Details Screen Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default MealDetailScreen;