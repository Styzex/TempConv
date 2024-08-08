import { useState } from "react"
import "./App.css"

function App() {
  const [output, setOutput] = useState("") // State for the converted temperature
  const [Units, setUnits] = useState("C to F") // State to manage the current conversion direction

  const Switch = () => {
    const swtch = () => {
      if (Units === "C to F") {
        setUnits("F to C")
      } else {
        setUnits("C to F")
      }
    }
    return <button onMouseDown={swtch}>Switch units</button>
  }

  function Convert() {
    let input = document.getElementById("uInput").value
    let result
    if (Units === "C to F") {
      result = input * (9 / 5) + 32
    } else {
      result = (input - 32) * (5 / 9)
    }

    setOutput(result.toFixed(2)) // Set the result to output state
  }

  const OutputFunc = () => {
    let cOf
    if (Units === "C to F") {
      cOf = "°F"
    } else {
      cOf = "°C"
    }
    return (
      <p>
        {output}
        {cOf}
      </p>
    )
  }

  const ConvertButton = () => {
    return <button onMouseDown={Convert}>Convert</button>
  }

  return (
    <>
      <div>
        <h1>Temperautre Converter</h1>
        <input type="number" id="uInput" />
        <ConvertButton />
        <OutputFunc />
        <Switch />
      </div>
    </>
  )
}

export default App
