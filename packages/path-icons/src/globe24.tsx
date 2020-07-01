import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const Globe24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fillRule="nonzero" d="M12 3.1947c1.0466 0 2.0514.1786 2.9857.507a.5945.5945 0 01.0876.0301C18.5303 4.9886 21 8.3032 21 12.1947c0 4.9705-4.0294 9-9 9s-9-4.0295-9-9c0-4.9706 4.0294-9 9-9zm.3314 2c-1.0143 0-1.9783.2157-2.8485.6038l-.379.8109a.9866.9866 0 01-.3305.3913L6.2251 8.7698a6.962 6.962 0 00-.533 1.2012l-.1223.7147a.9866.9866 0 00.2638.8534l.614.6338.9571.9447a.9866.9866 0 01.2909.63l.2877 3.9332c1.1943.9478 2.7051 1.5139 4.3481 1.5139 3.866 0 7-3.134 7-7a6.9857 6.9857 0 00-.4324-2.4279l-2.1174-.072.588.6456a.511.511 0 01-.0114.7002.483.483 0 01-.6814.0111l-.3683-.3549a.3007.3007 0 00-.4577.048.4782.4782 0 00.0266.5718l.4295.5224a.55.55 0 01.1209.4183l-.2358 1.866a.55.55 0 00-.0037.0953l.0346.7224a.55.55 0 01-.0794.312l-1.315 2.1627a.55.55 0 01-.5028.2632l-.7937-.0475a.55.55 0 01-.511-.4672l-.2-1.3296a.55.55 0 00-.039-.1362l-.7162-1.659a.55.55 0 00-.3698-.3151l-1.693-.4293a.55.55 0 01-.39-.37l-.5085-1.6363a.55.55 0 01.1574-.572l1.4051-1.2643a.55.55 0 01.296-.1365l1.2662-.167a.55.55 0 01.2371.0206l1.8628.5864 1.155-.527-.1783-1.3263-1.6146.2664-1.4806.1897s-1.55.4393-1.775.3117c-.163-.0924.3582-1.2073.3582-1.2073l1.1646-1.0617 1.129-.9792.1331-.1716a7.068 7.068 0 00-.889-.056z" /></svg>
);

export const Globe24Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={Globe24Svg} {...rest} style={style} />;
}