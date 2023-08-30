import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from '../HomeSection/homesection.style';
import MovieSection from "../MovieSection/MovieSection";

const myObj = [
    { title: "Coming Soon", key: '1', apiName: 'upcoming' },
    { title: "In theatres", key: '2', apiName: 'now_playing' },
    { title: "Movies Watched", key: '3', apiName: 'upcoming' },
    { title: "Watchlist", key: '4', apiName: 'upcoming' }
    ]


const HomeSection = () =>{

    return (
        <FlatList 
            style={styles.container}
            data={myObj}
            renderItem={( {item} ) => (
                <MovieSection  data={item}/>
            )}
            keyExtractor={item => item.key}
        />
    )
}

export default  HomeSection;
