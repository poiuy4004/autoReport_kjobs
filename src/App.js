import { useState } from "react";
import Cover from "./Cover";
import Intro from "./Intro";
import Logbook from "./Logbook";

function App() {
  const [title, setTitle] = useState("주제 선택")
  const [count, setCount] = useState(0);
  const [date, setDate] = useState("2024-00-00")
  const [day, setDay] = useState("토")
  return (
    <div>
      <Cover title={title} setTitle={setTitle} count={count} setCount={setCount} date={date} setDate={setDate} day={day} setDay={setDay} />
      <Intro title={title} date={date} day={day} count={count} />
      <Logbook title={title} />
    </div>
  );
}
export default App;
