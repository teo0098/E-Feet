import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import colors from 'tailwindcss/colors';

import { FontSizes } from '@utils/design';
import { IconProps } from './IconProps';

const Cart: React.VFC<IconProps> = ({ size = '3xl', color = colors.neutral[900], styles = {} }) => (
  <LocalMallRoundedIcon style={{ fontSize: FontSizes[size], color, ...styles }} />
);

export default Cart;
