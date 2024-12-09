export const enum ELinkSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export const enum ELinkColorScheme {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface ILinkProps<> {
  href: string;
  class?: string;
  size?: ELinkSize;
  colorScheme?: ELinkColorScheme;
}
