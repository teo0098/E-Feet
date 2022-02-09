import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import colors from 'tailwindcss/colors';

import { FontSizes } from '@utils/design';
import { IconProps } from './IconProps';

const Heart: React.VFC<IconProps> = ({
  size = '3xl',
  color = colors.neutral[900],
  styles = {},
  className = '',
}) => (
  <FavoriteRoundedIcon
    className={className}
    style={{ fontSize: FontSizes[size], color, ...styles }}
  />
);

export default Heart;
