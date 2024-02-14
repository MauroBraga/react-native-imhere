import { View,Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


export function Participant(){

    function handleParticipantDelete(){}

    return(
        <View style={styles.container}>
            <Text style={styles.name}>Mauro Braga</Text>

            <TouchableOpacity style={styles.button} onPress={handleParticipantDelete}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>

        </View>
    )
}