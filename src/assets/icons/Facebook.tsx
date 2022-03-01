import FacebookIcon from '@mui/icons-material/Facebook';

import { FontSizes } from '@utils/design';
import { IconProps } from './IconProps';

const Facebook: React.VFC<IconProps> = ({
  size = '3xl',
  color = '',
  styles = {},
  className = '',
}) => (
  <FacebookIcon style={{ fontSize: FontSizes[size], color, ...styles }} className={className} />
);

export default Facebook;
