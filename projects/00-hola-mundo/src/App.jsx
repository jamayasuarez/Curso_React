import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    initialIsFollowing: true,
  },
  {
    userName: "imaqtpie",
    name: "Michael Santana",
    initialIsFollowing: false,
  },
  {
    userName: "sindresorhus",
    name: "Sindre Sorhus",
    initialIsFollowing: false,
  },
  {
    userName: "kentcdodds",
    name: "Kent C. Dodds",
    initialIsFollowing: true,
  },
  {
    userName: "gaearon",
    name: "Dan Abramov",
    initialIsFollowing: false,
  },
];

export function App () {
  return (
    <section className="App">
      {
        users.map(({ userName, name, initialIsFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={initialIsFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  );
}
