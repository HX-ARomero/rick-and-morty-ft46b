import { useState } from "react";
import validation from "./validation";
import styles from './Form.module.css'

function Form({ login }) {
    const [userData, setUserData] = useState({
        email:'',
        password:''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (evento) =>{
        setErrors(validation({...userData, [evento.target.name]:evento.target.value }))
        setUserData({...userData, [evento.target.name]:evento.target.value })
    }

    const handleSubmit = (evento) => {
        evento.preventDefault()
        login(userData)
    }

  return <div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">
            Email:
            <input type="text" placeholder="Ingrese un email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className={ errors.email && styles.warning }
            />
        </label>
        { errors.email && <p className={styles.danger}>{errors.email}</p> } 
        <br />
        <label htmlFor="password">
            Contraseña:
            <input type="password" id="password" name="password"
            value={userData.password}
            onChange={handleChange}
            className={ errors.password && styles.warning }
            />
        </label>
        { errors.password && <p className={styles.danger}>{errors.password}</p> }
        <br />
        <button>Submit</button>
    </form>
  </div>;
}

export default Form;
