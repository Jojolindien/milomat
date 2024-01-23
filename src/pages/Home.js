import { useEffect, useState } from "react";
import { Table, Tag, Space } from "antd";
import { Link } from "react-router-dom";
import RenderPicture from "../component/RenderPicture";

const Home = () => {
  const [records, setRecords] = useState({});

  // Charger les données au chargement de la page
  useEffect(() => {
    if (typeof window !== "undefined") {
      const records = JSON.parse(localStorage.getItem("records"));
      if (records) {
        console.log(JSON.stringify(records, null, 4));
        setRecords(records);
      }
    }
  }, []);

  // Colonnes pour le tableau
  const columns = [
    {
      dataIndex: "index",
      key: "index",
      render: (text, record) => (
        <Link
          to={`/table/${record.tableNumber}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          {text}
        </Link>
      ),
      sorter: {
        compare: (a, b) => a.tableNumber - b.tableNumber,
        multiple: 1,
      },
    },

    {
      title: "Level",
      dataIndex: "level",
      key: "level",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
      sorter: {
        compare: (a, b) => a.score - b.score,
        multiple: 1,
      },
    },
    {
      title: "Badge",
      dataIndex: "badge",
      key: "badge",
      render: (text, record) => (
        <RenderPicture bestLevel={record.level} width="50px" />
      ),
    },
  ];

  // Données pour le tableau
  const data = Object.entries(records).map(([key, record], index) => ({
    key: index.toString(),
    index:
      key === "multiplications" ? "Multiplications" : `Table ${key.slice(5)}`,
    score: record.bestScore || 0,
    level: record.bestLevel || "No level yet",
    tableNumber: key === "multiplications" ? "multiplications" : key.slice(5),
  }));

  return (
    <div
      className="container-fluid"
      style={{
        margin: "auto",
        maxWidth: "1000px",
        height: "100vh",
        overflowY: "auto", // Ajout de la gestion du débordement vertical
      }}
    >
      {/* {JSON.stringify(records, null, 4)} */}
      <h2 className="my-5">Table des Records</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Home;
