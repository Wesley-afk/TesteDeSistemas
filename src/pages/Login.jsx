import React, { useState } from 'react';  
import styles from './Login.module.css';

const Form = () => {
    const [Email, setEmail] = useState("");
    const [Senha, setSenha] = useState("");
    const [Error, setError] = useState("");

    //Validando se preencheu os campos
    const handleSubmit = (e) =>{
       e.preventDefault(); //Garantindo que não recarregue toda a página

       if(!Email || !Senha){ //Garante que nenhum dos campos seja vazio
            setError("Preencha todos os campos para prosseguir!");
            return;
       }

            setError(""); //Limpando o buffer
            alert("Autenticado com sucesso");
    }

    

    return (
        <div className={styles.corpo}>
            <h1 className={styles.H1}>Login</h1>

            {/* Exibindo a mensagem de erro */}
            {Error}

            <form onSubmit={handleSubmit}>
                <label htmlFor="Email">
                    <input 
                        type="email"
                        id="Email"
                        placeholder="E-mail"
                        className={styles.l1} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="Senha">
                    <input 
                        type="password"
                        id="Senha"
                        placeholder="Senha..."
                        className={styles.l2} 
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </label>

                <input 
                    type="submit"
                    value="Confirmar"
                    className={styles.button}
                />
            </form>
        </div>
    );
}

export default Form;
