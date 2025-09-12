interface BotaoDropDownProps {
  text: string;
  onClick?: () => void | null;
}
export function BotaoDropdown({ text, onClick }: BotaoDropDownProps) {
  return (
    <li className="dropdown-item ">
      <button className="btn w-100 text-start" onClick={onClick}>
        {text}
      </button>
    </li>
  );
}
