import { useLayoutEffect } from 'react';

import { Layout } from '@/components/Layout';
import { Home } from '@/pages/home/Home';
import { Article } from '@/pages/page/Article';
import { Category } from '@/pages/category/Category';
import { SearchResult } from '@/pages/search/SearchResult';

import '@/assets/styles/reset.scss';
import '@/assets/styles/global.scss';

import 'virtual:stylex.css';

export function App() {
  useLayoutEffect(() => {
    if (document.getElementById('tt-body-page')) {
      document.querySelector('body')!.id = 'tt-body-page';
    }
  }, []);

  return (
    <Layout>
      {document.getElementById('tt-body-index') && <Home />}
      {document.getElementById('tt-body-page') && <Article />}
      {document.getElementById('tt-body-category') && <Category />}
      {document.getElementById('tt-body-search') && <SearchResult />}
    </Layout>
  );
}
