import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const getCategoryDetails = (categoryId) => {
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);
    return selectedCategory;
}

const CategoryMealsScreen = props => {

    const selectedCategoryId = props.navigation.getParam('categoryId');
    const selectedCategory = getCategoryDetails(selectedCategoryId);


    return (
        <View style={styles.screen}>
            <Text>Category Meals Screen Page</Text>
            <Text>{selectedCategory.title}</Text> 
            <Button title="Go to Meals Details" 
            onPress={() => {props.navigation.navigate('MealDetails')}}
            ></Button>
        </View>
    );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {

    const categoryDetails = getCategoryDetails(navigationData.navigation.getParam('categoryId'));
    return {
        title: categoryDetails.title,
    }

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default CategoryMealsScreen;