import { url } from 'inspector';

export const BOOKS_URL = 'https://api.itbook.store/1.0/new';

export const FAVOURITES_LS_KEY = 'favourites';
export const BOOKS_LS_KEY = 'books';
export const CART_LS_KEY = 'cart';

export const SOURCE_CODE_GITHUB_URL = 'https://github.com/Vova-Pol/book-store';
export const AUTHOR_GITHUB_URL = 'https://github.com/Vova-Pol';

export interface TECH {
  title: string;
  link: string;
}

export const TECHS: TECH[] = [
  {
    title: 'react',
    link: 'https://react.dev/',
  },
  {
    title: 'redux',
    link: 'https://redux.js.org/',
  },
  {
    title: 'typescript',
    link: 'https://www.typescriptlang.org/',
  },
  {
    title: 'sass',
    link: 'https://sass-lang.com/',
  },
  {
    title: 'react-icons',
    link: 'https://react-icons.github.io/react-icons',
  },
];
