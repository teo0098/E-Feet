import GoogleIcon from '@mui/icons-material/Google';

import { FontSizes } from '@utils/design';
import { IconProps } from './IconProps';

const Google: React.VFC<IconProps> = ({
  size = '3xl',
  color = '',
  styles = {},
  className = '',
}) => <GoogleIcon style={{ fontSize: FontSizes[size], color, ...styles }} className={className} />;

export default Google;
