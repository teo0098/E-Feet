import TwitterIcon from '@mui/icons-material/Twitter';

import { FontSizes } from '@utils/design';
import { IconProps } from './IconProps';

const Twitter: React.VFC<IconProps> = ({
  size = '3xl',
  color = '',
  styles = {},
  className = '',
}) => <TwitterIcon style={{ fontSize: FontSizes[size], color, ...styles }} className={className} />;

export default Twitter;
