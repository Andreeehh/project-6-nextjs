import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';

import linksMock from '../NavLinks/mock';
import { theme } from '../../styles/theme';
const logoData = {
  text: 'logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('should render Logo and Main Menu Nav', () => {
    const { container } = renderTheme(<Menu links={linksMock} logoData={logoData} />);
    expect(screen.getByRole('heading', { name: /Logo/i })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /Main menu/i })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render menu mobile and button for open and close the menu', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);
    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;
    // Div do Botão, apesar de estar na tela, não estar aparecendo
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    expect(button).toHaveStyleRule('display', 'none');
    // Aparecer com tela menor q medium
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });
    // Sumir com tela menor q 0 até clicar no botão
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });

    fireEvent.click(button);
    // Aparecer na tela lteMedium depois de clicado
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });
    // Estar no documento depois de clicado
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);
    // Sumir da tela lteMedium depois de clicado
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    // Voltar a tela depois de clicado, mesmo so aparecendo com letMedium
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);
    const nav = screen.getByRole('navigation', { name: /Main menu/i });
    expect(nav.firstChild).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
