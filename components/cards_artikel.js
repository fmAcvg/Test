import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Layout, Text } from '@ui-kitten/components';


const Header = (props) => (
    <View {...props}>
        <Text style={styles.header} category='h6'>{props.header2}</Text>
    </View>
);



export const CardArtikel = (props) => (
    <React.Fragment>
        <Card style={styles.card} header={() => <Header header2={props.header2} />} >
            <Text>
                {props.card_text}
            </Text>
        </Card>

    </React.Fragment>
);

const styles = StyleSheet.create({
    header:{
        margin:10,
        marginTop:10,
        marginBottom:15,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        flex: 1,
        margin: 20,
        marginTop:30,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footerControl: {
        marginHorizontal: 2,
    },
});