import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import colors from 'tailwindcss/colors';

import { FontSizes } from '@utils/design';
import { IconProps } from './IconProps';

const User: React.VFC<IconProps> = ({ size = '3xl', color = colors.neutral[900], styles = {} }) => (
  <PersonRoundedIcon style={{ fontSize: FontSizes[size], color, ...styles }} />
);

export default User;
