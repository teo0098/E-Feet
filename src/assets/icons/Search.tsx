import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import colors from 'tailwindcss/colors';

import { FontSizes } from '@utils/design';
import { IconProps } from './IconProps';

const Search: React.VFC<IconProps> = ({
  size = '3xl',
  color = colors.neutral[900],
  styles = {},
  className = '',
}) => (
  <SearchRoundedIcon
    className={className}
    style={{ fontSize: FontSizes[size], color, ...styles }}
  />
);

export default Search;
