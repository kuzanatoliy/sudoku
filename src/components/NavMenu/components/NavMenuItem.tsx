import { Link } from '../../Link';
//import { useNavMenuItem } from '../hooks/use-nav-menu-item';

export const NavMenuItem: typeof Link = (props) => {
  //useNavMenuItem(props.);

  return <Link {...props} />;
};
