import React from 'react';
import { View, Button, Image, StyleSheet, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen(){
    return (

    <View style ={{flex: 1, alignItems:'center', justifyContent:'center'}}>
        <View style = {styles.container}>
        </View>
        <ScrollView>
        <View style = {styles.container}/>
        <View>
            <Image style={styles.tinyLogo}
                    source={{
                    uri: 'https://scontent.frec31-1.fna.fbcdn.net/v/t1.6435-9/229122177_4024710800971324_8777537293213063472_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeExpp8H3EpVgwTnaqU6xbrDe3nVsp6wq5l7edWynrCrmU18Ie_pDCr86uHoX3eID5F11JqlXPr6g8eyQtMUHX4S&_nc_ohc=Dr3_BLqPab8AX8UDuZp&_nc_ht=scontent.frec31-1.fna&oh=07d4d7234856d2a34276113c232cbaba&oe=612C3A13',
                    }}/>
        </View> 
        <View>
            <Image style={styles.tinyLogo}
                    source={{
                    uri: 'https://scontent.frec31-1.fna.fbcdn.net/v/t1.6435-9/227436569_4024710797637991_8994688771645762604_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeEjZsXzNi-UMlR5kAXt-UtZZ6SXodPFqPlnpJeh08Wo-dkRYan9SIEw81jbTcVPrVLyRU25uTW8Ta90DqnGKsbc&_nc_ohc=IyXapmxvJsoAX-mFqfM&_nc_ht=scontent.frec31-1.fna&oh=a3887ef9f78b6ec9d05af0256eda560f&oe=612B67B8',
                    }}/>
        </View> 
        <View>
            <Image style={styles.tinyLogo}
                    source={{
                    uri: 'https://scontent.frec31-1.fna.fbcdn.net/v/t1.6435-9/217524237_4024710930971311_908679880742604397_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeH2IhmxcUbUOznkuAAnZu_VJH0cyG8uuKMkfRzIby64o4vVXHfPTcbXlmG9UHDAvnhMfi59fYY96uFPyBotX68L&_nc_ohc=YgDAva4Pux8AX_CR01q&tn=72GiimqC7QX0-X-C&_nc_ht=scontent.frec31-1.fna&oh=4a294789e1973278e055f9a38c14bbf6&oe=612D3031',
                    }}/>
        </View> 
        <View>
            <Image style={styles.tinyLogo}
                    source={{
                    uri: 'https://scontent.frec31-1.fna.fbcdn.net/v/t1.6435-9/228101983_4024710924304645_1531546530766385967_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeGoSELEduExJ-HpkPrOaQGrhosMOTBfi1CGiww5MF-LUA7dXX39ASeX-5YrlxZ3jjDhj0VaifQpp-G9_dJb1Whk&_nc_ohc=zvA-Hfuyd7cAX9ypKCJ&_nc_ht=scontent.frec31-1.fna&oh=bd6987cea0eef0ae1f811e945bc499f5&oe=612C904E',
                    }}/>
        </View> 
        <View>
            <Image style={styles.tinyLogo}
                    source={{
                    uri: 'https://scontent.frec31-1.fna.fbcdn.net/v/t1.6435-9/227795002_4024744920967912_2992368347733141832_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeFXRtx_e_E3vNE0rVGLCJsqP5EUOYICg9Q_kRQ5ggKD1HtH08HBuxrQ8a4OjUruaFcbroqphQbRdtk1DI0w6L9Y&_nc_ohc=dpbjI0myznQAX_3jxqD&_nc_ht=scontent.frec31-1.fna&oh=f7201c3bd34ff80e28e445b4a450d772&oe=61298629',
                    }}/>
        </View> 
        <View>
            <Image style={styles.tinyLogo}
                    source={{
                    uri: 'https://scontent.frec31-1.fna.fbcdn.net/v/t1.6435-9/229193115_4024744950967909_1392087484166642906_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeF1gesPdjdNRTsIz0a0umhK9f5dErqT2Kr1_l0SupPYqrZMBJ7R3GzaeBAR2IFNQlsAu9ss4v3qC5zG4iJuxrPW&_nc_ohc=eTCeCn3oC3sAX-8X6vC&_nc_ht=scontent.frec31-1.fna&oh=143fefce8ebf145013a7c7c2a51e28ad&oe=612D290F',
                    }}/>
        </View> 
            </ScrollView>
        </View>
    
            
        )
    }
    const styles = StyleSheet.create({
        container: {
          paddingTop: 40,
          height:30
        },
        tinyLogo: {
          display: 'flex',
          flexDirection:'row',  
          margin:5,  
          width: 400,
          height: 200,
          borderRadius: 20,
        }
    })