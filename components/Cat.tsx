import React, {useEffect, useState} from 'react';
import { Stack, Text } from 'tamagui';
import { Animated, Easing } from 'react-native';


const Cat = () =>{
    const [catMood, setCatMood] = useState('🐱');
    const animatedTop = useState(new Animated.Value(0))[0];
    const animatedLeft = useState(new Animated.Value(0))[0];

    const moveCat = ()=>{
        const randomTop = Math.random()*400;
        const randomLeft = Math.random()*300;

        Animated.parallel([
            Animated.timing(animatedTop, {
                toValue: randomTop,
                duration:1000,
                easing:Easing.bounce,
                useNativeDriver:false,
            }),
    
            Animated.timing(animatedLeft, {
                toValue: randomLeft,
                duration: 1000,
                useNativeDriver: false,
                easing:Easing.inOut(Easing.ease),
              }),

              

        ]).start()

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