import { ComponentProps, forwardRef } from 'react';
import { TamaguiElement } from 'tamagui';

import { Button as TButton } from '../tamagui.config';

type ButtonProps = {
  title: string;
} & ComponentProps<typeof TButton>;

export const MyButton = forwardRef<TamaguiElement, ButtonProps>(({ title, ...tButtonProps }, ref) => {
  return (
    <TButton {...tButtonProps} ref={ref}>
      {title}
    </TButton>
  );
});
