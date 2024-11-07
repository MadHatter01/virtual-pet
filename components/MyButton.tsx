import React from 'react';

import {Button, ButtonProps} from 'tamagui';

type MyButtonProps = {
    title:string;
    onPress:()=>void;
} & ButtonProps;

const MyButton : React.FC<MyButtonProps> = ({title, onPress, ...props})=>{
    return (
        <Button onPress = {onPress} {...props}>{title}</Button>
    )
};

export default MyButton;