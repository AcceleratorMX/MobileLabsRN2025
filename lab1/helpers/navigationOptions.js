import {Home} from "../Components/Screens/Home";
import {Gallery} from "../Components/Screens/Gallery";
import {Profile} from "../Components/Screens/Profile";

const screens = [
    {route: 'Home', icon: 'home', title: 'Головна', component: Home},
    {route: 'Gallery', icon: 'images', title: 'Галерея', component: Gallery},
    {route: 'Profile', icon: 'person', title: 'Профіль', component: Profile}
];

const routeTitles = {
    Home: 'Новини',
    Profile: 'Реєстрація'
};

const getTitleForRoute = (routeName) => {
    return routeTitles[routeName] || null;
};

export const navigationOptions = { screens, getTitleForRoute };