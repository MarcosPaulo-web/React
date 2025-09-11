interface BotaoDropDownProps {
  text: string;
}
export function BotaoDropDown({ text }: BotaoDropDownProps) {
  return (
    <li className="dropdown-item">
      <button className="btn w-100 text-start">{text}</button>
    </li>
  );
}
