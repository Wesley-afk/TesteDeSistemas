<<<<<<< Updated upstream
import React from 'react'

const Camp1 = (props) => {
    return (
        <div>
            <form>

                <input className='labelEmail' type="text" placeholder='Email...' />

                <hr />

                <button className='Login-botton'>
                    <p>Login</p>
                </button>

                <hr />

                <button className='Senha-botton'>
                    <p>Senha</p>
                </button>

            </form>
        </div>
    )
}
=======
import React from "react";
import styles from "./LoginCSS.module.css";

const Camp1 = (props) => {
  return (
    <div className={styles.body}>

    <h1 className={styles.login}>LOGIN</h1>

      <input type="text" placeholder="E-mail" className={styles.Email} />
>>>>>>> Stashed changes

      <input type="text" placeholder="Senha" className={styles.Senha}/>

      {/* <button className={styles.Loginbutton}>Login</button>

      <hr className={styles.hr} />

      <button className={styles.senhabutton}>Login</button> */}
    </div>
  );
};

export default Camp1;
