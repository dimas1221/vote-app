import Head from "next/head";
import Image from "next/image";
import Form from "../../components/Form";
import { useState } from "react";
import { useRouter } from "next/router";
import Button from "../../components/button";

export default function Partisipant() {
  const router = useRouter()
  const [code, setCode] = useState("");

  const handleSubmit = ()=>{
    router.push("/partisipant/kode-voting")
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-5 container mx-auto">
      <Head>
        <title>Ikut partisipasi</title>
      </Head>

      <Image
        alt="partisipant"
        src={"/assets/partisipan.svg"}
        width={200}
        height={100}
      />

      <h1 className="text-4xl font-bold">Ikutan voting</h1>
      <h2 className="w-1/3 text-center">
        Untuk ikutan voting masukan kode voting yang sudah di dapat dari panitia
      </h2>
      <Form
        value={code}
        onchange={setCode}
        placeHolder="Masukan kode"
        className="w-1/3 mt-3"
      />
      
      <Button onClick={handleSubmit} text="Lanjutkan" className="" />
      <button className="text-sm" onClick={()=> router.push("/")}>
        kembali
      </button>
    </div>
  );
}
