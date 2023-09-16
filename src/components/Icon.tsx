export default function Icon({ icon, onClick }: IconProps) {
  return (
    <i className="material-symbols-outlined clickable" onClick={onClick}>
      {icon}
    </i>
  );
}

type IconProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  icon: string;
};
