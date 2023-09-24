export default function Icon({ icon, onClick, style }: IconProps) {
  return (
    <i style={style} className="material-symbols-outlined clickable" onClick={onClick}>
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
