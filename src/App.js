import ThreeTest from "./components/Threetest";
import Zpage from "./components/Zpage";

function App() {
  return (
    <div className="w-full ">
      <article className="w-full h-screen hidden">
        {/* <ThreeTest></ThreeTest> */}
      </article>
      <article>
        <Zpage />
      </article>
    </div>
  );
}

export default App;
