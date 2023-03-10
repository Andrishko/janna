import React, { useState } from 'react';

function Main() {

  let [text, setText] = useState('')
  let [foto, setFoto] = useState('')
  
  const onFotoChangeHandler = (event) => {
    setFoto(event.target.value)
  }

  const onTextChangeHandler = (event) => {
    setText(event.target.value)
  }

  function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  const generateRandom = () => {
    setFoto('foto' + randomInteger(1, 4))
    setText('text' + randomInteger(1, 4))
  }


  return (
    <div>
      <p>Створи собі листівку <img className="header-img" src={process.env.PUBLIC_URL + '/images/heart.png'} alt="" /></p>

      <select name="foto" id="foto" onChange={onFotoChangeHandler}>
        <option  value="foto1">Фото 1</option>
        <option  value="foto2">Фото 2</option>
        <option  value="foto3">Фото 3</option>
        <option  value="foto4">Фото 4</option>
      </select>
      <select name="text" id="text" onChange={onTextChangeHandler}>
        <option value="text1">Підпис 1</option>
        <option value="text2">Підпис 2</option>
        <option value="text3">Підпис 3</option>
        <option value="text4">Підпис 4</option>
      </select>
      <div>
        <button onClick={generateRandom}>створити випадкову</button>
      </div>
      
      <div className="imageField">
          <img className="img-bg" src={`/images/${foto}.jpg`} alt="" />
          <img className="img-front" src={`/images/${text}.png`} alt="" />
      </div>
    </div>
  )
}

export default Main