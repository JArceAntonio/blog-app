import {Text, TouchableOpacity} from 'react-native';
import React, {PropsWithChildren} from 'react';
import colors from '../utilities/colors';
import globalStyles from '../utilities/globalStyles';

const buttonVariants = {
  normal: {
    backgroundColor: colors.normalTransparent,
  },
  danger: {
    backgroundColor: colors.dangerTransparent,
  },
};

const buttonSizes = {
  normal: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  large: {
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
};

const textStyle = {
  normal: {
    ...globalStyles.subtitle,
    color: colors.normal,
  },
  danger: {
    ...globalStyles.subtitle,
    color: colors.danger,
  },
};

type ButtonProps = {
  text: string;
  onPress: Function;
  variant?: string;
  size?: string;
} & PropsWithChildren;

const Button = ({
  text,
  onPress,
  variant = 'normal',
  size = 'normal',
}: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      style={[buttonSizes[size], buttonVariants[variant]]}
      onPress={onPress}>
      <Text style={textStyle[variant]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
