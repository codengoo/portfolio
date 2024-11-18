import MomentumScrolling from "../components/momentum_scroll";
import Detail from "./components/detail";
import Profile from "./components/profile";

export default function Home() {
  return (
    <section className="container grid grid-cols-2 mx-auto min-h-screen px-24">
      <Profile />
      <MomentumScrolling>
        <Detail />
      </MomentumScrolling>
    </section>
  );
}
