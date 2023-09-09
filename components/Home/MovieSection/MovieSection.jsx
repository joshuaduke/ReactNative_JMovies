import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import useFetch from "../../../hook/useFetch";
import styles from "./moviesection.style";

const MovieSection = ( props ) =>{
    // const {data, isLoading, error } = useFetch(
    //     `${props.data.apiName}`, 
    //     {
    //       query: 'React developer',
    //       num_pages: 1
    //     })

const data = [
    { link: require('../../../assets/images/theBatman.jpg'), key: "1"},
    { link: require("../../../assets/images/theBatman.jpg"), key: "2"},
    { link: require("../../../assets/images/theBatman.jpg"), key: "3"},
    { link: require("../../../assets/images/theBatman.jpg"), key: "4"},
    { link: require("../../../assets/images/theBatman.jpg"), key: "5"},
    { link: require("../../../assets/images/theBatman.jpg"), key: "6"},
    { link: require("../../../assets/images/theBatman.jpg"), key: "7"},
    { link: require("../../../assets/images/theBatman.jpg"), key: "8"},
    { link: require("../../../assets/images/theBatman.jpg"), key: "9"},
]

    // console.log('Use Fetch: ', data)
    
    return (
        /* View For whole section with list of movies */
        <View style={styles.movieGroup}>
        {/* View For section title and see all button */}
            <View style={{flexDirection:'row', justifyContent: "space-between"}}>
                <Text style={styles.headerText}> {props.data.title}</Text>
                <TouchableOpacity>
                    <Text>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                renderItem={( {item} )  => 
                (
                <View>
                    <Image
                        style={styles.imageStyles}
                        source={ item.link }
                        // source={ {uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
                    />
                </View>
                )}
                keyExtractor={item => item.key}
                horizontal
            />
        </View>
    )
} 

export default MovieSection;



