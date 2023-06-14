import Countdown, { CountdownRendererFn } from "react-countdown";
import CountDownRenderer from "./CountDownRenderer";

export default function CountDown() {

    const countDown: CountdownRendererFn = ({
        days,
        hours,
        minutes,
        seconds,
    }) => {
      return (
        <CountDownRenderer days={days} hours={hours} minutes={minutes} seconds={seconds} />
      )
    };
  return (
    <div className="text-center">
      <p>Voting akan di mulai pada</p>
      <Countdown date={Date.now() + 10000} renderer={countDown}/>
    </div>
  );
}
