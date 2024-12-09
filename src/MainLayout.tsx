import { TParentComponent } from 'types';

import { Link } from 'components';

import styles from './MainLayout.module.scss';
import { ELinkColorScheme, ELinkSize } from './components/Link/Link.types';

export const MainLayout: TParentComponent = (props) => (
  <>
    <header class={styles.main_layout_header}>
      <h1 class={styles.main_layout_header_title}>Sudoku</h1>
      <nav>
        <Link
          href='/home'
          colorScheme={ELinkColorScheme.LIGHT}
          size={ELinkSize.LARGE}
        >
          Home
        </Link>
        <Link
          href='/plays'
          colorScheme={ELinkColorScheme.LIGHT}
          size={ELinkSize.LARGE}
        >
          Plays
        </Link>
        <Link
          href='/contact-me'
          colorScheme={ELinkColorScheme.LIGHT}
          size={ELinkSize.LARGE}
        >
          Contact me
        </Link>
      </nav>
    </header>
    <main class={styles.main_layout_main}>{props.children}</main>
    <footer class={styles.main_layout_footer}>© Kuzanatoliorg</footer>
  </>
);
