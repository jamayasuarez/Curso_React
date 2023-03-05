import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App () {
  return (
    <section className="App">
      <TwitterFollowCard userName="midudev" initialIsFollowing={true}>
        Miguel Ángel Durán
      </TwitterFollowCard>
      
      <TwitterFollowCard userName="imaqtpie">
        Michael Santana
      </TwitterFollowCard>
    </section>
  );
}
