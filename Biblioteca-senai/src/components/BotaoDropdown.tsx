interface BotaoDropDownProps {
  text: String;
}
export function BotaoDropDown({ text }: BotaoDropDownProps) {
  return (
    <>
      <button className="btn w-100 text-start">{text}</button>
    </>
  );
}
