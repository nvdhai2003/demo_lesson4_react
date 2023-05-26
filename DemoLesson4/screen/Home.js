import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            {/*Navigation*/}
            <Text>HOME</Text>
            <Button title={"Go to Profile"} onPress={() => {
                navigation.navigate('Profile')
            }}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
