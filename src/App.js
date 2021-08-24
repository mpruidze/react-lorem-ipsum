import React, { useState } from "react";
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count); //because typeof(count) is a string

    // 1st solution
    const newData = data.filter((item, index) => {
      if (amount > 0) {
        return index <= amount - 1
      } else {
        return index == 0
      }

    });
    setText(newData);

    // 2nd solution
    // setText(data.slice(0,amount))

  }

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit} >
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input type="number" name='amount' id='amount' value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className="btn">generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return (
            <p key={index} >{item}</p>
          )
        })}
      </article>
    </section>
  )

}

export default App;
