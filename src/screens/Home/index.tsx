import { Text, View,TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import { Participant } from '../components/Participant';

export default function Home() {

    const participantes = ['Rodrigo','Vini','Diego','Biro']

    function handleParticipantAdd(){
        console.log('Você clicou no botão add')
    }

    function handleParticipantRemove(name:string){}

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>
            <Text style={styles.eventDate}>Seta, 4 de Novembro de 2022</Text>
            
            <View style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholder="Nome do participante"
                placeholderTextColor="#6B6B6B"
                />
                
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>

            {
                participantes.map(participante =>(
                    <Participant    key={participante} 
                                    name={participante}
                                    onRemove={() => handleParticipantRemove(participante)}/>
                ))
            }
            </ScrollView>            
        </View>
    );
}