/* eslint-disable @typescript-eslint/no-explicit-any */
import { mapSections } from './map-sections';
import { mapMenu } from './map-menu';
import { LogoLinkProps } from '../components/LogoLink';
import { MenuLinkProps } from '../components/MenuLink';
import { GridImageProps } from '../components/GridImage';
import { GridTextProps } from '../components/GridText';
import { GridTwoColumnsProps } from '../components/GridTwoColumns';
import { GridContentProps } from '../components/GridContent';

export type PageData = {
  title: string;
  slug: string;
  footerHtml: string;
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  sections: SectionsProps[];
};

export type SectionsProps = GridImageProps | GridTextProps | GridTwoColumnsProps | GridContentProps;

export const mapData = (pagesData = [{}] as any): PageData[] => {
  return pagesData.map((data: any): PageData => {
    const { footer_text: footerHtml = '', slug = '', title = '', sections = [], menu = {} } = data;
    return {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
