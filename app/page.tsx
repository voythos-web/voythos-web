import Main from "./components/main/Main";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voythos | Transforming the delivery of aortic care.",
  description: "Building innovative, multimodal AI solutions centered around clinical care and rigorous research.",
};

export default function Home() {
  return (
    <div>
      <div>
        <Main />
      </div>
    </div>
  );
}
