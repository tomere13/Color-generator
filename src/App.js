import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('#f15025')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])
  var colors = new Values(color).all(10)
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      setError(false)

      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <h5>Daniel</h5>
        <form className="color-form" method="submit" onSubmit={handleSubmit}>
          <input
            type="color"
            value={color}
            style={{
              appearance: 'auto',
              width: '50px',
              height: '42px',
              cursor: 'default',

              backgroundColor: color,
            }}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type={'text'}
            placeholder="#f15025"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? 'error' : null}`}
          />
          <button
            className="btn"
            style={{ backgroundColor: color }}
            method="submit">
            Generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />
        })}
      </section>
    </>
  )
}

export default App
