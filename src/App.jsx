import Heading from "./components/Heading";
import Row1 from "./components/Row1";
import Row2 from "./components/Row2";
import Row3 from "./components/Row3";
import Row4 from "./components/Row4";
import Row5 from "./components/Row5";
import Row6 from "./components/Row6";
import Row7 from "./components/Row7";
import Overlay from "./components/Overlay";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
      <Heading />
      <div className="board-wrap">
        <div className="grid">
          <Row1 />
          <Row2 />
          <Row3 />
          <Row4 />
          <Row5 />
          <Row6 />
          <Row7 />
        </div>
        <Overlay />
      </div>
    </div>
  );
}