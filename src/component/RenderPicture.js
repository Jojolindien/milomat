// Picture.js
import React from "react";
import griezmann from "../griezmann.png";
import haaland from "../haaland.png";
import giroud from "../giroud.png";
import vinicius from "../vinicius.png";
import messi from "../messi.png";
import neymar from "../neymar.png";
import mbappe from "../mbappe.png";

const RenderPicture = ({ bestLevel, width }) => {
  switch (bestLevel) {
    case "Griezmann":
      return (
        <img
          src={griezmann}
          className="rounded-circle text-center"
          style={{ width }}
          alt="Avatar"
        />
      );
    case "Haaland":
      return (
        <img
          src={haaland}
          className="rounded-circle text-center"
          style={{ width }}
          alt="Avatar"
        />
      );
    case "Giroud":
      return (
        <img
          src={giroud}
          className="rounded-circle text-center"
          style={{ width }}
          alt="Avatar"
        />
      );
    case "Vinícius Júnior":
      return (
        <img
          src={vinicius}
          className="rounded-circle text-center"
          style={{ width }}
          alt="Avatar"
        />
      );
    case "Messi":
      return (
        <img
          src={messi}
          className="rounded-circle text-center"
          style={{ width }}
          alt="Avatar"
        />
      );
    case "Neymar":
      return (
        <img
          src={neymar}
          className="rounded-circle text-center"
          style={{ width }}
          alt="Avatar"
        />
      );
    case "MBappe":
      return (
        <img
          src={mbappe}
          className="rounded-circle text-center"
          style={{ width }}
          alt="Avatar"
        />
      );
    default:
      return null;
  }
};

export default RenderPicture;
