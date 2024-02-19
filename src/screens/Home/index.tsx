import { Text, View,TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../components/Participant';
import { useState } from 'react';

export default function Home() {

    const [participants, setParticipants] = useState<string[]>([]); 
    const [participantName, setParticipantName] = useState(''); 


    function handleParticipantAdd(){
        
        if(participantName===''){
            return Alert.alert("Participante","Campo Nome Participante está vazio")
         }
        
        if(participants.includes(participantName.trim())){
           return Alert.alert("Participante","Já existe participante com esse nome")
        } 
         
        setParticipants(prevState => [...prevState, participantName.trim()]);
        setParticipantName(''); 
    }

    function handleParticipantRemove(name:string){
        console.log(name)
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
              text: 'Sim',
              onPress: () => {
                setParticipants(prevState => prevState.filter(partipant => partipant !=name))
                Alert.alert("Deletado!");
              }
            },
            {
              text: 'Não',
              style: 'cancel'
            }
          ])
    }

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
                onChangeText={setParticipantName}
                value={participantName}
                />
                
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
                </TouchableOpacity>
            </View>
           
            <FlatList 
                data={participants}
                keyExtractor={item => item}
                renderItem={ ({item}) =>(
                    <Participant    
                    key={item} 
                    name={item}
                    onRemove={() => handleParticipantRemove(item)}/>
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                    Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                </Text>
                )}
            />

                 
        </View>
    );
}