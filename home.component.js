import React from 'react';
import {ImageBackground, SafeAreaView, ScrollView, View} from 'react-native';
import Constants from 'expo-constants';
const image = { uri: "https://www.ernstabbegymnasium.de/images/album/schulgebaeude/resizedimages/haus1_2.jpg" };
import {
    BottomNavigation,
    BottomNavigationTab,
    Button,
    Divider,
    Layout,
    Text,
    TopNavigation
} from '@ui-kitten/components';
import {StyleSheet } from 'react-native';
import {CardArtikel} from "./components/cards_artikel";
export const HomeScreen = ({ navigation}) => {
    console.log()

    const navigateDetails = () => {
        navigation.navigate('Details');
    };
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <Text category={"h6"} style={styles.text}>
                        ABBE-APP
                    </Text>
            </ImageBackground>
            <CardArtikel header2="" card_text="Am 25.05.22 sah es kurz so aus, als hätten sich sechs Schüler und ein Lehrer des Ernst-Abbe-Gymnasiums für eine Reise in tropische Gefilde in Schale geworfen, die Gründe für den seltsamen Aufzug waren aber weitaus makabrer: Ein Mord war geschehen und im Rahmen des vierten Krimidinners mussten die sieben kostümierten Darsteller herausfinden, wer unter ihnen die üble Tat vollbracht hatte." />
            <CardArtikel header2="Viertes Krimidinner" card_text="Am 25.05.22 sah es kurz so aus, als hätten sich sechs Schüler und ein Lehrer des Ernst-Abbe-Gymnasiums für eine Reise in tropische Gefilde in Schale geworfen, die Gründe für den seltsamen Aufzug waren aber weitaus makabrer: Ein Mord war geschehen und im Rahmen des vierten Krimidinners mussten die sieben kostümierten Darsteller herausfinden, wer unter ihnen die üble Tat vollbracht hatte." />
            <CardArtikel header2="Viertes Krimidinner" card_text="Am 25.05.22 sah es kurz so aus, als hätten sich sechs Schüler und ein Lehrer des Ernst-Abbe-Gymnasiums für eine Reise in tropische Gefilde in Schale geworfen, die Gründe für den seltsamen Aufzug waren aber weitaus makabrer: Ein Mord war geschehen und im Rahmen des vierten Krimidinners mussten die sieben kostümierten Darsteller herausfinden, wer unter ihnen die üble Tat vollbracht hatte." />
            <CardArtikel header2="Viertes Krimidinner" card_text="Am 25.05.22 sah es kurz so aus, als hätten sich sechs Schüler und ein Lehrer des Ernst-Abbe-Gymnasiums für eine Reise in tropische Gefilde in Schale geworfen, die Gründe für den seltsamen Aufzug waren aber weitaus makabrer: Ein Mord war geschehen und im Rahmen des vierten Krimidinners mussten die sieben kostümierten Darsteller herausfinden, wer unter ihnen die üble Tat vollbracht hatte." />
            <CardArtikel header2="Viertes Krimidinner" card_text="Am 25.05.22 sah es kurz so aus, als hätten sich sechs Schüler und ein Lehrer des Ernst-Abbe-Gymnasiums für eine Reise in tropische Gefilde in Schale geworfen, die Gründe für den seltsamen Aufzug waren aber weitaus makabrer: Ein Mord war geschehen und im Rahmen des vierten Krimidinners mussten die sieben kostümierten Darsteller herausfinden, wer unter ihnen die üble Tat vollbracht hatte." />
            <CardArtikel header2="Viertes Krimidinner" card_text="Am 25.05.22 sah es kurz so aus, als hätten sich sechs Schüler und ein Lehrer des Ernst-Abbe-Gymnasiums für eine Reise in tropische Gefilde in Schale geworfen, die Gründe für den seltsamen Aufzug waren aber weitaus makabrer: Ein Mord war geschehen und im Rahmen des vierten Krimidinners mussten die sieben kostümierten Darsteller herausfinden, wer unter ihnen die üble Tat vollbracht hatte." />
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color:"rgba(255,255,255,0.72)",
        margin: 15 ,
        fontSize: 58,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    card: {
        margin:20
    }
});