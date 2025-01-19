import { useState } from "react";
import Button from "./Button";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0)); // Array de longitud igual a la cantidad de anécdotas

  const handleNextClick = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomAnecdote);
  };

  const handleVoteClick = () => {
    const copyVotes = [...votes]; // Porque no se pueden modificar los estados directamente
    copyVotes[selected] = (copyVotes[selected] || 0) + 1; // Si no hay votos, se inicializa en 0
    setVotes(copyVotes);
  };

  const mostVoted = votes.reduce((previous, current, index) => {
    return current > votes[previous] ? index : previous;
  });

  console.log(anecdotes[mostVoted]);

  return (
    <div className="px-4 pb-6 m-4 flex flex-col items-center">
      <h1 className="text-pink-400 text-xl italic">
        &quot;{anecdotes[selected]}&quot;
      </h1>
      <p>This phrase has {votes[selected]} votes</p>
      <div className="flex mt-4">
        <Button text="Next anecdote" onClick={handleNextClick} />
        <Button text="Vote" onClick={handleVoteClick} />
      </div>
      <h2 className="mt-4 text-2xl font-bold">Most voted anecdote</h2>
      <p className="text-pink-600 text-lg italic">
        &quot;{anecdotes[mostVoted]}&quot;
      </p>
    </div>
  );
};

export default App;
