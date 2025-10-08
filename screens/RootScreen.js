import { StyleSheet } from "react-native/types_generated/index";

export default function RootNavigator() {
    return (
        <View style={StyleSheet.container}>
            <Text>Root page</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});