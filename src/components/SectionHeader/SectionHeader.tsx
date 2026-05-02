import { headerCss, titleCss } from './styles';

type SectionHeaderProps = {
  title: string;
};

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className={headerCss}>
      <span className={titleCss}>{title}</span>
    </div>
  );
};
