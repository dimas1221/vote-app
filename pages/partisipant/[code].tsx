import Head from "next/head";
import { useRouter } from "next/router";
import Menu from "../../components/menu";
import CandidateItem from "../../components/CandidateItem";
import Button from "../../components/button";
import CountDown from "../../components/CountDown";

export default function DetailParticipant() {
  const router = useRouter();
  const { code } = router.query;

  return (
    <div className="container mx-auto">
      <Head>
        <title>Muali voting</title>
      </Head>

      <Menu />
      <div>
        <h1 className="text-4xl mt-10 text-center">Judul Voting</h1>
        {/* timner */}
        <CountDown/>
        {/* timner */}

        {/* candidat */}
        <div className="mt-10 space-y-3 w-2/3 mx-auto">
          <CandidateItem />
          <CandidateItem />
          <CandidateItem />
        </div>
        {/* candidat */}
        {/* submit */}
        <div className="text-center mt-10">
          <Button text="Kirim vote saya" />
        </div>
        {/* submit */}
      </div>
    </div>
  );
}
