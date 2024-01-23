import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import griezmann from "../griezmann.png";
import mbappe from "../mbappe.png";
import neymar from "../neymar.png";
import { Avatar, Divider, Tooltip } from "antd";

const Table = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [level, setLevel] = useState("");
  const [bestScore, setBestScore] = useState(0);
  const [bestLevel, setBestLevel] = useState(0);
  const [image, setImage] = useState(null); // Changer la valeur initiale à null

  const { number } = useParams();

  //get BestScore on reload page
  useEffect(() => {
    console.log("reboot");
    if (typeof window !== "undefined") {
      setScore(0);
      setBestScore(0);
      setBestLevel("");
      const record = JSON.parse(localStorage.getItem("records"));
      if (record) {
        const tableData = record[`table${number}`];
        if (tableData) {
          const { bestScore, bestLevel } = tableData;
          setBestScore(bestScore);
          setBestLevel(bestLevel);
        }
      }
    }
  }, [number]);

  //getLevel when score change + setBestrecord if so
  useEffect(() => {
    // console.log("reboot");
    generateRandomNumbers();

    if (score === 0) {
      setLevel("E. Martinez");
    } else if (score > 5 && score < 10) {
      setLevel("Camavinga");
    } else if (score >= 10 && score < 20) {
      setLevel("Dembele");
    } else if (score >= 20 && score < 30) {
      setLevel("Griezmann");
    } else if (score >= 30 && score < 50) {
      setLevel("Neymar");
    } else if (score >= 50) {
      setLevel("MBappe");
    } else {
      console.log(`Sorry, we are out of ${score}.`);
    }

    if (score > bestScore) {
      console.log("nouveau record");
      setBestScore(score);
      if (typeof window !== "undefined") {
        // 1. Récupérer les données existantes
        const existingData = JSON.parse(localStorage.getItem("records")) || {};

        // 2. Ajouter la nouvelle table de huit aux données existantes
        const newData = {
          ...existingData,
          [`table${number}`]: { bestScore: score, bestLevel: level },
        };

        // 3. Enregistrer les données mises à jour dans le stockage local
        localStorage.setItem("records", JSON.stringify(newData));
      }
    }

    setImage(picture());
  }, [score, number, level]);

  const picture = () => {
    switch (level) {
      case "E. Martinez":
        return null; // Aucune image pour E. Martinez
      case "Camavinga":
        return null; // Ajoutez une image pour Camavinga si nécessaire
      case "Dembele":
        return null; // Ajoutez une image pour Dembele si nécessaire
      case "Griezmann":
        return (
          <img
            src={griezmann}
            className="rounded-circle text-center"
            style={{ width: "150px" }}
            alt="Avatar"
            text-center
          />
        );
      case "Neymar":
        return (
          <img
            src={neymar}
            className="rounded-circle text-center"
            style={{ width: "150px" }}
            alt="Avatar"
            text-center
          />
        ); // Ajoutez une image pour Neymar si nécessaire
      case "MBappe":
        return (
          <img
            src={mbappe}
            className="rounded-circle text-center"
            style={{ width: "150px" }}
            alt="Avatar"
            text-center
          />
        ); // Ajoutez une image pour MBappe si nécessaire
      default:
        return null; // Logique par défaut si le niveau n'est pas reconnu
    }
  };

  const generateRandomNumbers = () => {
    // const newNum1 = Math.floor(Math.random() * 10) + 1;
    const newNum1 = number;
    const newNum2 = Math.floor(Math.random() * 10) + 1;
    setNum1(newNum1);
    setNum2(newNum2);
  };

  const checkAnswer = () => {
    if (!answer || isNaN(Number(answer))) {
      return;
    }
    const product = num1 * num2;
    if (parseInt(answer, 10) === product) {
      setScore(score + 1);
      setMessage("Bonne réponse !");
    } else {
      setScore(0);
      setMessage(`Mauvaise réponse. La réponse correcte était ${product}.`);
    }

    generateRandomNumbers();
    setAnswer("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      checkAnswer();
    }
  };

  return (
    <div className="container">
      <h1 className="my-5">Table de {number}</h1>
      <div className="row text-center my-5">
        <h4 className="col ">
          <p className=" p-5 text-center">Vous êtes niveau : {level}</p>
        </h4>
        <div className="col text-center">{image}</div>
      </div>
      <p>
        {num1} x {num2} = ?
      </p>
      <input
        autoFocus
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyUp={handleKeyPress}
      />
      <button onClick={checkAnswer}>Vérifier</button>
      <p>Score: {score}</p>
      <p>
        Best score : {bestScore} <br />
      </p>
      <p>{message}</p>
    </div>
  );
};
