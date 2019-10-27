import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';





const CategoriesScreen = props => {

    const renderData = (itemData) => {
        return (
            <CategoryGridTile 
            item={itemData.item}
            onSelect={() => props.navigation.navigate({
                routeName: 'CategoryMeals',
                params: {
                    categoryId: itemData.item.id
                }
            })}/>
        );

    }


    return (
        <View>
            <FlatList
            numColumns={2}
            data={CATEGORIES}
            keyExtractor={(item, index) => item.id}
            renderItem={(itemdata) => renderData(itemdata)}>
            </FlatList>
            </View>


    );
}

CategoriesScreen.navigationOptions = {
  title: 'Meals Category'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    
});


export default CategoriesScreen;
