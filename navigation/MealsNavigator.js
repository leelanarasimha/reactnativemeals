import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';



const MealNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetails: MealDetailScreen
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor,
        },
        headerTintColor: 'white',
        title: 'A Screen'
    }
}
);

export default createAppContainer(MealNavigator);