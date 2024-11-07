import React from 'react';
import { Text } from 'react-native';

type PetImageProps = {
    happiness : number
}

const PetImage: React.FC<PetImageProps> = ({happiness}) =>{
    const PetEmoji = happiness < 30 ? '😿': '😸';
    return (
        <Text style={{fontSize:50}}>
            {PetEmoji}
        </Text>
    )
}

export default PetImage;