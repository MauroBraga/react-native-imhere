import { Text, View,TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';

export default function Home() {

    function handlerParticipanteAdd(){
        console.log('Você clicou no botão add')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate}>Seta, 4 de Novembro de 2022</Text>
      
      <TextInput 
        style={styles.input}
        placeholder='Nome do Participante'
        placeholderTextColor="#6b6b6b"/>

    <TouchableOpacity style={styles.button} onPress={handlerParticipanteAdd}>
        <Text style={styles.buttonText}>
            +
        </Text>    
    </TouchableOpacity>  

    </View>
  );
}