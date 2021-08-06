import { func } from 'prop-types';
import React from 'react';
import { View, Text,Button, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default function Home ({navigation}){

  const caroulselItems=[
   { title: 'pão',
    image:'https://www.google.com/search?q=p%C3%A3o&sxsrf=ALeKk01ioQFhAaPE5FXqa3oOt2JB49Vwug:1628195823710&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjjqcmN3pryAhWQpJUCHTGXAR4Q_AUoAXoECAIQAw&biw=887&bih=637&dpr=1#imgrc=5l1cR_FqJMtuuM',
},
{ title: 'pão',
image:'https://www.google.com/search?q=p%C3%A3o&sxsrf=ALeKk01ioQFhAaPE5FXqa3oOt2JB49Vwug:1628195823710&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjjqcmN3pryAhWQpJUCHTGXAR4Q_AUoAXoECAIQAw&biw=887&bih=637&dpr=1#imgrc=5l1cR_FqJMtuuM',
},
{ title: 'pão',
image:'https://www.google.com/search?q=p%C3%A3o&sxsrf=ALeKk01ioQFhAaPE5FXqa3oOt2JB49Vwug:1628195823710&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjjqcmN3pryAhWQpJUCHTGXAR4Q_AUoAXoECAIQAw&biw=887&bih=637&dpr=1#imgrc=5l1cR_FqJMtuuM',
},
{ title: 'pão',
image:'https://www.google.com/search?q=p%C3%A3o&sxsrf=ALeKk01ioQFhAaPE5FXqa3oOt2JB49Vwug:1628195823710&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjjqcmN3pryAhWQpJUCHTGXAR4Q_AUoAXoECAIQAw&biw=887&bih=637&dpr=1#imgrc=5l1cR_FqJMtuuM',
},

{ title: 'pão',
image:'https://www.google.com/search?q=p%C3%A3o&sxsrf=ALeKk01ioQFhAaPE5FXqa3oOt2JB49Vwug:1628195823710&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjjqcmN3pryAhWQpJUCHTGXAR4Q_AUoAXoECAIQAw&biw=887&bih=637&dpr=1#imgrc=5l1cR_FqJMtuuM',
},
{ title: 'pão',
image:'https://www.google.com/search?q=p%C3%A3o&sxsrf=ALeKk01ioQFhAaPE5FXqa3oOt2JB49Vwug:1628195823710&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjjqcmN3pryAhWQpJUCHTGXAR4Q_AUoAXoECAIQAw&biw=887&bih=637&dpr=1#imgrc=5l1cR_FqJMtuuM',
},



  ];

  function renderItem({item}){
    return(
      <View>
        <Text>{item.title}</Text>
        <Image source={{uri:`${item.image}`}}/>
      </View>
    )
  }

  return(
    <>
    <Statusbar basStyle="dark-content" backgroundColor="#fff"/>
    <View style={{flex:1,alignItems:'center' ,justifyContent:'center'}}>
      <Text>Tela - Home</Text>
      <Carousel data={caroulselItems}
      sliderWidth={300}
      itemWidth={300}
      renderItem={renderItem}/>

    

      <Button title=" Abrir menu lateral " onPress={() => navigation.openDrawer()}/>
    </View>
    </>
);

  


}