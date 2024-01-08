import React from "react";
import {X, Circle} from 'lucide-react';

const ChoosePlayer = ({
  setPlayer,
}: {
  setPlayer: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  return (
    <div>
      <h2>Choose your player</h2>
      <button onClick={() => setPlayer("X")}><X size={50}/></button>
      <button onClick={() => setPlayer("O")}><Circle size={50} /></button>
    </div>
  );
};

export default ChoosePlayer;
