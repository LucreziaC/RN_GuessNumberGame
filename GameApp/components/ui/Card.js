import {View, StyleSheet} from 'react-native';

import Colors from "../../constants/colors";


function Card({children}){
    return (
        <View style={styles.inputContainer}>{children}</View>

    );
}

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4, //only for android
        shadowColor: "black", //iOS
        shadowOffset: { width: 0, height: 2 }, //for iOS
        shadowRadius: 6, //iOS
        shadowOpacity: 0.25, //iOS
        padding: 16,
        backgroundColor: Colors.primary800,
      },
})