import { useEffect, useState } from 'react'
import DisplayInput from './DisplayInput'
import EqualButton from './EqualButton'
import SumButton from './SumButton'
const CalcContainer = () => {
  const [currentInput, setCurrentInput] = useState(0)
  const [nums, setNums] = useState([])

  useEffect(() => {
    if (nums.length === 2) {
      console.log(nums)
      const copy = nums.slice()
      const sum = copy.reduce((prev, curr) => prev + curr)

      setCurrentInput(sum)
      setNums([])
    }
  }, [nums])

  const handleSum = () => {
    // Equivale a array.push(nuevoElemento)
    setNums([...nums, Number(currentInput)])

    setCurrentInput(0)
  }

  const handleEqual = () => {
    setNums([...nums, Number(currentInput)])
  }
  return (
    <div>
      <h5>Calculadora</h5>
      <DisplayInput value={currentInput} setValue={setCurrentInput} />
      <SumButton handleClick={handleSum} />
      <EqualButton handleClick={handleEqual} />
    </div>
  )
}

export default CalcContainer
