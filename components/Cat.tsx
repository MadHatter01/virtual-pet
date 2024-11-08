import React, {useEffect, useState} from 'react';
import { Stack, Text } from 'tamagui';
import { Animated } from 'react-native';


const Cat = () =>{
    const [catMood, setCatMood] = useState('🐱');
    const animatedTop = useState(new Animated.Value(0))[0];
    const animatedLeft = useState(new Animated.Value(0))[0];

    const moveCat = ()=>{
        const randomTop = Math.random()*400;
        const randomLeft = Math.random()*300;
        Animated.timing(animatedTop, {
            toValue: randomTop,
            duration:1000,
            useNativeDriver:false,
        }).start();

        Animated.timing(animatedLeft, {
            toValue: randomLeft,
            duration: 1000,
            useNativeDriver: false,
          }).start();
    }

    useEffect(()=>{
        const intervalId = setInterval(moveCat, 2000);
        return () => clearInterval(intervalId);
     
    }, []);

    return (
        <Animated.View style={{top:animatedTop, left:animatedLeft, position:'absolute'}}>

        <Stack>
            <Text fontSize={50}>{catMood}</Text>
        </Stack>
        </Animated.View>
    )
}

export default Cat;