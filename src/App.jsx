import { useState } from "react";

function App() {
  const [colors, setColors] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{
        backgroundColor: colors,
        width: "100vw",
        height: "100vh",
        transitionDuration: "200ms",
      }}
    >
      <div
        className="fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-2 "
        style={{
          position: "fixed",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          bottom: "3rem",
          left: "0px",
          right: "0px",
          padding: "0px 0.5rem 0px 0.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.5rem",
            backgroundColor: "white",
            paddingLeft: " 0.75rem",
            paddingRight: "0.75rem",
            borderRadius: " 1.5rem ",
            boxShadow: "2px 2px grey",
          }}
        >
          <button

          onClick={()=>setColors("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{
              backgroundColor: "red",
              color: "white",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "0.25rem",
              paddingBottom: "0.25rem",
              borderRadius: "9999px",
              boxShadow: "1px 1px grey",
            }}
          >
            RED
          </button>

          <button
          onClick={()=>setColors("green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{
              backgroundColor: "green",
              color: "white",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "0.25rem",
              paddingBottom: "0.25rem",
              borderRadius: "9999px",
              boxShadow: "1px 1px grey",
            }}
          >
            {" "}
            <span style={{ textTransform: "uppercase" }}> green </span>{" "}
          </button>

          <button
          onClick={()=>setColors("black")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{
              backgroundColor: "black",
              color: "white",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "0.25rem",
              paddingBottom: "0.25rem",
              borderRadius: "9999px",
              boxShadow: "1px 1px grey",
            }}
          >
            {" "}
            <span style={{ textTransform: "uppercase" }}> black </span>{" "}
          </button>

          <button
          onClick={()=>setColors("orange")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{
              backgroundColor: "orange",
              color: "white",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "0.25rem",
              paddingBottom: "0.25rem",
              borderRadius: "9999px",
              boxShadow: "1px 1px grey",
            }}
          >
            {" "}
            <span style={{ textTransform: "uppercase" }}> orange </span>{" "}
          </button>

          <button
          onClick={()=>setColors("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{
              backgroundColor: "blue",
              color: "white",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "0.25rem",
              paddingBottom: "0.25rem",
              borderRadius: "9999px",
              boxShadow: "1px 1px grey",
            }}
          >
            {" "}
            <span style={{ textTransform: "uppercase" }}> Blue </span>{" "}
          </button>

          <button
          onClick={()=>setColors("purple")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{
              backgroundColor: "purple",
              color: "white",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "0.25rem",
              paddingBottom: "0.25rem",
              borderRadius: "9999px",
              boxShadow: "1px 1px grey",
            }}
          >
            {" "}
            <span style={{ textTransform: "uppercase" }}> purple </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
