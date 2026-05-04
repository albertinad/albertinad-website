import { headerCss, titleCss } from './styles';

type SectionHeaderProps = {
  title: string;
};

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className={headerCss}>
      <h2 className={titleCss}>{title}</h2>
    </div>
  );
};
