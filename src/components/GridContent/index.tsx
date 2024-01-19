import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export type GridContentProps = {
  title: string;
  html: string;
  background?: boolean;
  sectionId?: string;
  component?: string;
  isFirstElement?: boolean;
};

export const GridContent = ({
  title,
  html,
  background = false,
  sectionId = '',
  isFirstElement = false,
}: GridContentProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId} isFirstElement={isFirstElement}>
      <Styled.Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};
