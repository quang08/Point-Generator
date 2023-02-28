import React, { useState } from "react";

function App() {
  const [points, setPoints] = useState([]);
  const [popped, setPopped] = useState([]);

  const handlePlaceCircle = (e) => {
    console.log(e);
    const { clientX, clientY } = e;
    setPoints([...points, { x: clientX, y: clientY }]);
  };

  const handleUndo = () => {
    //remove last item from array
    const newPoints = [...points];
    const poppedPoint = newPoints.pop();
    if (!poppedPoint) return;
    setPopped([...popped, poppedPoint]);
    setPoints(newPoints);
  };

  const handleRedo = () => {
    // const newPopped = [...popped];
    // const newPoints = [...points];
    // const poppedPoint = newPopped.pop();
    // if (!poppedPoint) return;
    // newPoints.push(poppedPoint);
    // setPoints(newPoints);
    // setPopped(newPopped); => this is the same as below:

    const newPopped = [...popped];
    const poppedPoint = newPopped.pop();
    if (!poppedPoint) return;
    setPoints([...points, poppedPoint]);
    setPopped(newPopped);
  };

  return (
    <>
      <button
        disabled={points.length === 0}
        onClick={handleUndo}
        className="p-2 bg-slate-500 ml-10 mt-10 rounded-lg text-sm hover:-translate-y-1 transition duration-300 absolute disabled:opacity-70"
      >
        Undo
      </button>
      <button
        disabled={popped.length === 0}
        onClick={handleRedo}
        className="p-2 bg-slate-500 ml-[100px] mt-10 rounded-lg text-sm hover:-translate-y-1 transition duration-300 absolute disabled:opacity-70"
      >
        Redo
      </button>

      <div
        onClick={handlePlaceCircle}
        className="bg-black h-screen w-screen text-left text-white cursor-pointer"
      >
        {points.map((point, i) => (
          <div
            key={i}
            className="absolute text-3xl text-blue-500"
            style={{
              top: point.y - 10,
              left: point.x - 10,
            }}
          >
            <div className="w-5 h-5 rounded-full bg-blue-500"></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
