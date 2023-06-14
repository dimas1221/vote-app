
interface Props{
    onchange:(value:string)=> void
    value:string
    placeHolder: string
    className? : string
    type?:string
}
export default function Form(props: Props) {
    return(
        <input 
        type={props.type ? props.type : "text"}
        className={`bg-zinc-100 py-2 px-3 ${props.className}`}
        onChange={(e)=> props.onchange(e.target.value)}
        value={props.value}
        />
    )
}