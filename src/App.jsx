import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.calculator} aria-label="Calculator">
        <header className={styles.header}>
          <div className={styles.brandMark} aria-hidden="true">+</div>
          <div>
            <p className={styles.eyebrow}>Everyday tool</p>
            <h1 className={styles.title}>Calculator</h1>
          </div>
        </header>
        <Display displayVal={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
        <p className={styles.hint}>A little math goes a long way.</p>
      </section>
    </main>
  );
}

export default App;
