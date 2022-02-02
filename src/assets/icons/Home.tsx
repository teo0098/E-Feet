import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import colors from 'tailwindcss/colors';

import { FontSizes } from '@utils/design';
import { IconProps } from './IconProps';

const Home: React.VFC<IconProps> = ({ size = '3xl', color = colors.neutral[900], styles = {} }) => (
  <HomeRoundedIcon style={{ fontSize: FontSizes[size], color, ...styles }} />
);

export default Home;
