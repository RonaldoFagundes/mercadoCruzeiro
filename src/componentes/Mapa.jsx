import React from 'react';
import { StyleSheet, View, Text, Dimensions, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import customStyle from '../../customStyle'

export default function Mapa({ navigation }) {
    return (
        <View style={styles.container}>
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Tela - Home</Text>
                <Button title=" Abrir menu lateral " onPress={() => navigation.openDrawer()} />
            </View>

            <MapView
                customMapStyle={customStyle}
                style={styles.mapStyle}
                initialRegion={{
                    latitude: -2.893663,
                    longitude: -40.852778,
                    latitudeDelta: 0.0022,
                    longitudeDelta: 0.0021,
                }}
            >

                <Marker
                    coordinate={{
                        latitude: -2.893663,
                        longitude: -40.852778,
                    }}
                    title="Cruzeiro Frios"
                    description="R. Quintino Bocaiúva, 964"

                />
            </MapView>
            <View>
                <Text style={styles.text}>Localização Cruzeiro Frios</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: '80%'
    },
    text: {
        fontWeight: 'bold'
    }
});
