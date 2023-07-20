import { FlatList, Image, PixelRatio, Text, TouchableOpacity, View } from "react-native";
import styles from '../HomeSection/homesection.style';


const HomeSection = (props) =>{
    console.log(props.images);
    return (
        <FlatList 
            style={styles.container}
            data={props.content}
            renderItem={( {item} ) => (
                /* View For whole section with list of movies */
                <View style={styles.movieGroup}>
                    {/* View For section title and see all button */}
                    <View style={{flexDirection:'row', justifyContent: "space-between"}}>
                        <Text style={styles.headerText}>{item.title}</Text>
                        <TouchableOpacity>
                            <Text>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={props.images}
                        renderItem={( {item} )  => (
                            <View>
                                <Image
                                    style={styles.imageStyles}
                                    source={item.link}
                                />
                            </View>
                        )}
                        horizontal
                    />
                </View>
            )}
            keyExtractor={item => item.key}
    />
    )
}

export default  HomeSection;

/* <Image 
        //         style={{height:PixelRatio.getPixelSizeForLayoutSize(40), width: PixelRatio.getPixelSizeForLayoutSize(30)}} 
        //         source={require('../../../assets/images/theBatman.jpg')}/> */