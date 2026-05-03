export const HeaderIconLink = ({
  href,
  icon: Icon,
  label,
  className,
}: {
  href: string;
  icon: React.ComponentType;
  label: string;
  className: string,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <Icon />
      {label}
    </a>
  );
};