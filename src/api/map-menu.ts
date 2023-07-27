/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuLinkProps } from '../components/MenuLink';
import { PageData } from './map-data';

export const mapMenu = (menu = {} as any): PageData['menu'] => {
  const { open_in_new_tab: newTab = false, logo_text: text = '', logo_link: link = '' } = menu;

  const links = menu.links || menu.menu_links || menu.menu || [];
  const srcImg = menu?.logo?.data?.attributes?.url || '';

  return {
    newTab,
    text,
    link,
    srcImg,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = [] as any): MenuLinkProps[] => {
  return links.map((item: any): MenuLinkProps => {
    const { open_in_new_tab: newTab = false, link_test: children = '', url: link = '' } = item;
    return {
      newTab,
      children,
      link,
    };
  });
};
