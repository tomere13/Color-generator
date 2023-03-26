import React, { useState } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hexColor = rgbToHex(...rgb)
  return (
    <article
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexColor)
      }}
      className={`color ${index >= 10 && 'color-light'}`}
      style={{
        backgroundColor: `rgb(${bcg})`,
      }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColor}</p>
      <p style={{ fontSize: '18px' }}>
        {alert ? 'Coppied to the clipboard' : 'Press me to copy the color'}
      </p>
    </article>
  )
}

export default SingleColor
