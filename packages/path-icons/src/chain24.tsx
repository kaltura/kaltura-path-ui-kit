import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const Chain24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fillRule="nonzero" d="M13.4142 14.8284c.3626.3627.3885.9345.0777 1.327l-.0777.0872-2.1213 2.1214-.1446.1377c-1.5701 1.423-3.9975 1.377-5.5123-.1377-1.5147-1.5148-1.5606-3.9422-.1377-5.5123l.1377-.1446 2.1214-2.1213.0872-.0777c.3925-.3108.9643-.285 1.327.0777.3626.3626.3885.9345.0777 1.327L9.1716 12l-2.1213 2.1213-.1017.1094c-.6778.7858-.6439 1.9735.1017 2.719.7455.7456 1.9332.7795 2.719.1017l.1094-.1017L12 14.8284l.0872-.0777c.3925-.3108.9644-.2849 1.327.0777zm.7071-4.9497c.3905.3905.3905 1.0237 0 1.4142l-2.8284 2.8284c-.3905.3905-1.0237.3905-1.4142 0-.3905-.3905-.3905-1.0237 0-1.4142l2.8284-2.8284c.3905-.3905 1.0237-.3905 1.4142 0zM18.364 5.636c1.5147 1.5148 1.5606 3.9422.1377 5.5123l-.1377.1446-2.1214 2.1213c-.3905.3905-1.0236.3905-1.4142 0-.3626-.3626-.3885-.9345-.0777-1.327L14.8284 12l2.1213-2.1213c.7811-.781.7811-2.0474 0-2.8284-.7455-.7456-1.9332-.7795-2.719-.1017l-.1094.1017L12 9.1716c-.3905.3905-1.0237.3905-1.4142 0-.3626-.3627-.3885-.9345-.0777-1.327l.0777-.0872L12.707 5.636c1.5621-1.562 4.0948-1.562 5.6569 0z" /></svg>
);

export const Chain24Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={Chain24Svg} {...rest} style={style} />;
}