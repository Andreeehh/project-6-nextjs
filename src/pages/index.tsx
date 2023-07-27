import config from '../config';
import Home from '../templates/Home';
import { loadPages } from '../api/load-pages';
import { GetStaticProps } from 'next';
import { PageData } from '../api/map-data';

export type HomeProps = {
  data: PageData[];
};

export default function Index({ data = null }: HomeProps) {
  return <Home data={data} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let data;

  try {
    data = await loadPages(config.defaultSlug);
  } catch {
    data = null;
  }

  if (!data || data.title === '') {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
};
