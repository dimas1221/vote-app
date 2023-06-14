import Image from "next/image"
import Button from "./button"
import { useRouter } from "next/router"
export default function Menu(){
    const router = useRouter()
    return (
        <div className="flex justify-between mt-3">
           <Image src={"/assets/jujurly.svg"} 
           width={100} 
           height={100} 
           alt="jujurly"
           onClick={()=> router.push("/")}
           className={"cursor-pointer"}
           />
           <Button text="Login" />
        </div>
    )
}