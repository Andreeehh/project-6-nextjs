import { useEffect, useRef, useState } from 'react';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export type SectionBackgroundProps = {
  children: React.ReactNode;
  background?: boolean;
  sectionId?: string;
  isFirstElement?: boolean;
};

export const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
  isFirstElement = false,
}: SectionBackgroundProps) => {
  // Utilize o hook useRef para referenciar o elemento do post
  const postRef = useRef(null);
  // Utilize o estado para controlar se a classe deve ser adicionada
  const [shouldShow, setShouldShow] = useState(isFirstElement);

  // Função para verificar se o post está visível na tela
  const isElementVisible = () => {
    if (!postRef.current) return false;

    const rect = postRef.current.getBoundingClientRect();
    return rect.top <= window.innerHeight;
  };

  // Efeito para adicionar a classe quando o post estiver visível
  useEffect(() => {
    const handleScroll = () => {
      if (isElementVisible()) {
        setShouldShow(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Remova o listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Styled.Container background={background} id={sectionId} className={`${shouldShow ? 'show' : ''}`} ref={postRef}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};
