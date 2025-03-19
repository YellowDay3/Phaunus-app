import React, { useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getData, saveData } from './storage';

type RootStackParamList = {
    Start: undefined;
    Home: undefined;
    Connection: undefined;
    Camera: undefined;
    Test: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList, 'Connection'>;

const ConnectionScreen = ({ navigation }: Props) => {
  const [ipAddress, setIpAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = await getData('Url');
      setIpAddress(url);
      if (url === '') {setIsConnected(false);}
      else {setIsConnected(true);}
    };
    fetchData();
  }, []);

  const handleConnect = () => {
    if (ipAddress.trim() !== '') {
      //setIsConnected(true);
      for (let index = 0; index < 5 && isConnected === false; index++) {
        const fetchData = async () => {
          try {
            const response = await fetch('http://' + ipAddress.trim() + '/check');
            //console.error(ipAddress.trim());
            const result = await response.text();
            console.log(response.text());
            if (result === '240') {
              setIsConnected(true);
              saveData('Url', ipAddress.trim());
            } else {
              //console.error('Can not find the device');
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }
    }
  };

  const handleDisconnect = () => {
    setIpAddress('');
    saveData('Url', '');
    setIsConnected(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.spacer}> </Text>
      <Image
        source={require('./assets/images/logooriginal.png')}
      />

      <Image
        source={require('./assets/images/conection.png')}
      />

      <Text style={styles.spacer2}>   </Text>
      <Text style={styles.prompt}>Please enter the IP Address</Text>

      <TextInput
        style={[styles.input, isConnected && styles.connectedInput]}
        value={ipAddress}
        onChangeText={setIpAddress}
        editable={!isConnected}
        placeholder="192.168.0.0"
        placeholderTextColor="#a0a0a0"
      />

      {isConnected ? (
        <TouchableOpacity style={styles.disconnectButton} onPress={handleDisconnect}>
          <Text style={styles.buttonText}>Disconnect</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.connectButton} onPress={handleConnect}>
          <Text style={styles.buttonText}>Connect</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.spacer3}>   </Text>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('./assets/images/back.png')}
          style={styles.backText}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  spacer: {
    height: 75,
  },
  spacer2: {
    height: 75,
  },
  spacer3: {
    height: 185,
  },
  logo: {
    fontSize: 32,
    color: '#A4E100',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    color: '#A4E100',
    marginBottom: 20,
  },
  prompt: {
    fontSize: 26,
    color: '#A4E100',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 52,
    borderColor: '#A4E100',
    borderWidth: 2,
    color: '#A4E100',
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  connectedInput: {
    //backgroundColor: '#192618',
  },
  connectButton: {
    backgroundColor: '#A4E100',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  disconnectButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  backButton: {
    marginTop: 20,
    alignSelf: 'flex-start',

  },
  backText: {
    marginRight: 0,
  },
});

export default ConnectionScreen;
