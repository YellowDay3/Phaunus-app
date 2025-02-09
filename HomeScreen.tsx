import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Start: undefined;
  Home: undefined;
  Connection: undefined;
  Camera: undefined;
  Test: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


const HomeScreen = ({ navigation }: Props) => {
  const [isThereFlame, setisThereFlame] = useState(1);
  const [humidity, setHumidity] = useState(50);
  const [temperature, setTemperature] = useState(30);
  const [gaz, setGaz] = useState(85);

  const handleLocationPress = () => {
    Alert.alert('Location', 'Location button pressed!');
  };

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Connection')}>
          <Image
            source={require('./assets/images/wifi.png')}
            style={styles.topLogo}
          />
        </TouchableOpacity>
        <Image source={require('./assets/images/logo.png')} style={styles.oogo} />
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Test')}>
          <Image
            source={require('./assets/images/info.png')}
            style={styles.topLogo}
          />
        </TouchableOpacity>
      </View>

      {/* Map */}

      {/* Sensor Cards */}
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Flame</Text>
          <Text>   </Text>
          <AnimatedCircularProgress
            size={100}
            width={10}
            fill={(isThereFlame === 1 ? 100 : 0)}
            tintColor="#90f206"
            backgroundColor="#3d5875"
            rotation={-0}
          >
            {() => (
              <Image
                source={require('./assets/images/flame.png')}
                style={styles.logo}
              />
            )}
          </AnimatedCircularProgress>
          <Text>   </Text>
          <Text style={styles.progressText}>{(isThereFlame === 1 ? 'True' : 'false')}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Humidity</Text>
          <Text>   </Text>
          <AnimatedCircularProgress
            size={100}
            width={10}
            fill={humidity}
            tintColor="#90f206"
            backgroundColor="#3d5875"
            rotation={-0}
          >
            {() => (
              <Image
                source={require('./assets/images/humi.png')}
                style={styles.logo}
              />
            )}
          </AnimatedCircularProgress>
          <Text>   </Text>
          <Text style={styles.progressText}>{Math.round(humidity)}%</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Temperature</Text>
          <Text>   </Text>
          <AnimatedCircularProgress
            size={100}
            width={10}
            fill={temperature}
            tintColor="#90f206"
            backgroundColor="#3d5875"
            rotation={-0}
          >
            {() => (
              <Image
                source={require('./assets/images/temp.png')}
                style={styles.logo}
              />
            )}
          </AnimatedCircularProgress>
          <Text>   </Text>
          <Text style={styles.progressText}>{Math.round(temperature)} °C</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Gaz</Text>
          <Text>   </Text>
          <AnimatedCircularProgress
            size={100}
            width={10}
            fill={gaz}
            tintColor="#90f206"
            backgroundColor="#3d5875"
            rotation={-0}
          >
            {() => (
              <Image
                source={require('./assets/images/gas.png')}
                style={styles.logo}
              />
            )}
          </AnimatedCircularProgress>
          <Text>   </Text>
          <Text style={styles.progressText}>{Math.round(gaz)}%</Text>
        </View>
        <TouchableOpacity style={[styles.card, styles.button2]} onPress={() => navigation.navigate('Camera')}>
          <Text style={styles.cardTitle}>Camera</Text>
          <Text>   </Text>
          <AnimatedCircularProgress
            size={100}
            width={10}
            fill={100}
            tintColor="#90f206"
            backgroundColor="#3d5875"
            rotation={-0}
          >
            {() => (
              <Image
                source={require('./assets/images/camera.png')}
                style={styles.logo}
              />
            )}
          </AnimatedCircularProgress>
          <Text>   </Text>
          <Text>   </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, styles.button2]} onPress={handleLocationPress}>
          <Text style={styles.cardTitle}>Location</Text>
          <Text>   </Text>
          <AnimatedCircularProgress
            size={100}
            width={10}
            fill={100}
            tintColor="#90f206"
            backgroundColor="#3d5875"
            rotation={-0}
          >
            {() => (
              <Image
                source={require('./assets/images/location.png')}
                style={styles.logo}
              />
            )}
          </AnimatedCircularProgress>
          <Text>   </Text>
          <Text>   </Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>Emergency</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  topBar: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#303030',
    padding: 10,
  },
  oogo: {
    width: 155,
    height: 60,
    marginRight: 0,
  },
  topLogo: {
    width: 60,
    height: 60,
    marginRight: 0,
  },
  logo: {
    width: 55,
    height: 55,
    marginRight: 0,
  },
  iconContainer: {
    padding: 10,
  },
  iconText: {
    color: '#90f206',
    fontSize: 14,
  },
  map: {
    width: '100%',
    height: 200,
  },
  title: {
    color: '#90f206',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  cardsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  card: {
    width: '30%',
    backgroundColor: '#1e1e1e',
    margin: 5,
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#90f206',
  },
  button2: {
    backgroundColor: '#1e1e1e',
    color: '#90f206',
  },
  cardTitle: {
    color: '#90f206',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressText: {
    color: '#90f206',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#303030',
    padding: 10,
  },
  bottomButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#90f206',
    borderRadius: 10,
  },
  bottomButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
