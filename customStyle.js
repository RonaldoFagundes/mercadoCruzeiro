export default function App() {
    return (
      <View style={styles.container}>
        <MapView
          customMapStyle={customStyle}
          style={styles.mapStyle}
          initialRegion={{
            latitude: -2.893663,
            longitude:  -40.852778,
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
        <Text>dsadsada</Text>
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
    mapStyle: {
      width: Dimensions.get('window').width,
      height: '80%'
    }
  });
  