import { type } from "os";

interface Props {
  text: string;
  type?: "primary" | "secondary";
  className?: string;
  onClick?: ()=>void
}
export default function Button(props: Props) {
  return (
    <div>
      <button
      onClick={props.onClick}
        className={`bg-black border-2 border-black text-white px-3 py-2 hover:bg-zinc-400
            ${
              props.type === "secondary" &&
              "bg-white border-2 border-black text-green-400 px-3 py-2 hover:bg-black hover:text-black"
            }
            ${props.className}
            `}
      >
        {props.text}
      </button>
    </div>
  );
}
