import { useStatem, React } from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import useFetch from "../hook/useFetch";

import HomeSection from "../components/Home/HomeSection/HomeSection";

const myObj = [
    { title: "Coming Soon", key: '1', apiName: 'upcoming' },
    { title: "In theatres", key: '2', apiName: 'now_playing' },
    { title: "Movies Watched", key: '3', apiName: 'upcoming' },
    { title: "Watchlist Soon", key: '4', apiName: 'upcoming' },
    ]
// const myImgs = [
//     { link: '../../../assets/images/theBatman.jpg', key: "1"},
//     { link: "../../../assets/images/theBatman.jpg", key: "2"},
//     { link: "../../../assets/images/theBatman.jpg", key: "3"},
//     { link: "../../../assets/images/theBatman.jpg", key: "4"}
// ]

// const myImgs = [
//     { link: require('../assets/images/theBatman.jpg'), key: "1"},
//     { link: require("../assets/images/theBatman.jpg"), key: "2"},
//     { link: require("../assets/images/theBatman.jpg"), key: "3"},
//     { link: require("../assets/images/theBatman.jpg"), key: "4"},
//     { link: require("../assets/images/theBatman.jpg"), key: "5"},
//     { link: require("../assets/images/theBatman.jpg"), key: "6"},
//     { link: require("../assets/images/theBatman.jpg"), key: "7"},
//     { link: require("../assets/images/theBatman.jpg"), key: "8"},
//     { link: require("../assets/images/theBatman.jpg"), key: "9"},
// ]

const Home = () =>{

    return (
        <SafeAreaView >
            <HomeSection />
            {/* <HomeSection content={myObj}/> */}
        </SafeAreaView>
    )

}

export default Home;