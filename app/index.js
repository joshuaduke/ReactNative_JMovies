import { useStatem, React } from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";

import HomeSection from "../components/Home/HomeSection/HomeSection";

const myObj = [
    { title: "Coming Soon", key: '1' },
    { title: "In theatres", key: '2' },
    { title: "Movies Watched", key: '3' },
    { title: "Watchlist Soon", key: '4' },
    ]
// const myImgs = [
//     { link: '../../../assets/images/theBatman.jpg', key: "1"},
//     { link: "../../../assets/images/theBatman.jpg", key: "2"},
//     { link: "../../../assets/images/theBatman.jpg", key: "3"},
//     { link: "../../../assets/images/theBatman.jpg", key: "4"}
// ]

const myImgs = [
    { link: require('../assets/images/theBatman.jpg'), key: "1"},
    { link: require("../assets/images/theBatman.jpg"), key: "2"},
    { link: require("../assets/images/theBatman.jpg"), key: "3"},
    { link: require("../assets/images/theBatman.jpg"), key: "4"}
]

const Home = () =>{
    return (
        <SafeAreaView >
            <HomeSection content={myObj} images={myImgs}/>
        </SafeAreaView>
    )

}

export default Home;