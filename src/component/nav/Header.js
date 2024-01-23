import React, { useState } from "react";
import { HomeOutlined, CloseOutlined } from "@ant-design/icons";
import { Badge, Menu } from "antd";
import { NavLink, Link } from "react-router-dom";

const items = [
  {
    label: (
      <NavLink to="/" style={{ textDecoration: "none" }}>
        Home
      </NavLink>
    ),
    key: "home",
    icon: <HomeOutlined />,
    className: "float-start",
    // className: "bg-dark text-white",
  },
  {
    label: "Multiplications",
    key: "multiplications",
    icon: <CloseOutlined />,
    // className: "bg-dark text-white",
    children: [
      {
        key: "setting:1",
        label: (
          <Link to="/table/multiplications" style={{ textDecoration: "none" }}>
            Toutes Multiplications
          </Link>
        ),
      },
      {
        key: "setting:2",
        label: (
          <Link to="/table/2" style={{ textDecoration: "none" }}>
            Table de 2
          </Link>
        ),
      },
      {
        key: "setting:3",
        label: (
          <Link to="/table/3" style={{ textDecoration: "none" }}>
            Table de 3
          </Link>
        ),
      },
      {
        key: "setting:4",
        label: (
          <Link to="/table/4" style={{ textDecoration: "none" }}>
            Table de 4
          </Link>
        ),
      },
      {
        key: "setting:5",
        label: (
          <Link to="/table/5" style={{ textDecoration: "none" }}>
            Table de 5
          </Link>
        ),
      },
      {
        key: "setting:6",
        label: (
          <Link to="/table/6" style={{ textDecoration: "none" }}>
            Table de 6
          </Link>
        ),
      },
      {
        key: "setting:7",
        label: (
          <Link to="/table/7" style={{ textDecoration: "none" }}>
            Table de 7
          </Link>
        ),
      },
      {
        key: "setting:8",
        label: (
          <Link to="/table/8" style={{ textDecoration: "none" }}>
            Table de 8
          </Link>
        ),
      },
      {
        key: "setting:9",
        label: (
          <Link to="/table/9" style={{ textDecoration: "none" }}>
            Table de 9
          </Link>
        ),
      },
    ],
  },
];

const Header = () => {
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    // console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      theme="dark"
      className="mb-5"
    />
  );
};

export default Header;
