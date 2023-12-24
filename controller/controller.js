const db = require('../conexion/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');


const login = (req, res) => {
    const { email, password } = req.body;
    const consult = 'SELECT * FROM empleados WHERE email = ?';

    try {
        db.query(consult, [email], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Internal Server Error');
            }

            if (result.length > 0) {
                const user = result[0];
                bcrypt.compare(password, user.password, (bcryptErr, bcryptResult) => {
                    if (bcryptErr) {
                        console.error(bcryptErr);
                        return res.status(500).send('Internal Server Error');
                    }

                    if (bcryptResult) {
                        const token = jwt.sign({ email: user.email, id: user.id, rol: user.rol }, 'YourSecretKey', {
                            expiresIn: '3m'
                        });
                        res.send({ token, user: { nombre: user.nombre, id: user.id, email: user.email, rol: user.rol } });
                    } else {
                        console.log('Wrong password');
                        res.status(401).send({ message: 'Wrong password' });
                    }
                });
            } else {
                console.log('User not found');
                res.status(401).send({ message: 'User not found' });
            }
        });
    } catch (e) {
        console.error(e);
        res.status(500).send('Internal Server Error');
    }
};

const userCreate = (req, res) => {
    const { nombre, apellido, email, password, telefono, valor_hora, rol, edad, pais, experiencia } = req.body;
  
    const errores = validationResult(req);
  
    if (!errores.isEmpty()) {
        console.log(errores);
        return res.status(400).json({ success: false, message: 'Errores en los datos ingresados', errors: errores.array() });
    }

    try {
        const checkUserQuery = 'SELECT * FROM empleados WHERE email = ?';
        db.query(checkUserQuery, [email], (error, results) => {
          if (error) {
                console.log(error);
                return res.status(500).json({ success: false, message: 'Error en la verificación de usuario existente', error: error.message });
            }

            if (results.length > 0) {
                return res.status(400).json({ success: false, message: 'Usuario existente. Por favor, elija otro correo electrónico.' });
            }

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            const data = {
                nombre: nombre,
                apellido:apellido,
                email: email,
                password: hash,
                telefono: telefono,
                valor_hora: valor_hora || 876,
                rol: rol || 'empleado',
                edad: edad,
                pais: pais,
                experiencia: experiencia
              };

              const insertUserQuery = 'INSERT INTO empleados (nombre, apellido, email, password, telefono, valor_hora, rol, edad, pais, experiencia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
              const values = [data.nombre, data.apellido, data.email, data.password, data.telefono, data.valor_hora, data.rol, data.edad, data.pais, data.experiencia];
        
              db.query(insertUserQuery, values, (error, result) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ success: false, message: 'Error en la inserción', error: error.message });
                }
                res.status(200).json({ success: true, message: 'Usuario creado exitosamente' });
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error en el servidor', error: error.message });
    }
};




const createEmployee = (req, res) => {
    const { nombre, edad, pais, rol, experiencia, valor_hora } = req.body;

    db.query(
        "INSERT INTO empleados(nombre, apellido, edad, pais, rol, experiencia, valor_hora ) VALUES(?,?,?,?,?,?)",
        [nombre, edad, pais, rol, experiencia, valor_hora],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ success: false, message: 'Error en la creación del empleado', error: err.message });
            } else {
                res.status(200).json({ success: true, message: 'Empleado creado exitosamente' });
            }
        }
    );
};

const getEmployees = (req, res) => {
    db.query("SELECT * FROM empleados", (err, result) => {
        if (err) {
            console.error("Error al obtener empleados:", err);
            res.status(500).json({ success: false, message: 'Error interno del servidor', error: err.message });
        } else {
            res.status(200).json(result);
        }
    });
};

const updateEmployee = (req, res) => {
    const { id, nombre, apellido, edad, pais, rol, experiencia, valor_hora, telefono } = req.body;
  
    db.query(
      "UPDATE empleados SET nombre=?, apellido=?, edad=?, pais=?, rol=?, experiencia=?, valor_hora=?, telefono=? WHERE id=?",
      [nombre, apellido, edad, pais, rol, experiencia, valor_hora, telefono, id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ success: false, message: 'Error en la actualización del empleado', error: err.message });
        } else {
          res.status(200).json({ success: true, message: 'Empleado actualizado exitosamente' });
        }
      }
    );
  };

const deleteEmployee = (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM empleados WHERE id=?", id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ success: false, message: 'Error en la eliminación del empleado', error: err.message });
        } else {
            res.status(200).json({ success: true, message: 'Empleado eliminado exitosamente' });
        }
    });
};

const createText = (req, res) => {
    const { nombre, fecha, texto } = req.body;
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ success: false, message: 'Errores en los datos ingresados', errors: errores.array() });
    }
    const insertTextQuery = 'INSERT INTO informacion (nombre, fecha, texto) VALUES (?, ?, ?)';
    const values = [nombre, fecha, texto];
  
    db.query(insertTextQuery, values, (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Error en la inserción del texto' });
      }
      res.status(200).json({ success: true, message: 'Texto creado exitosamente' });
    });
  };
  
  const getInfo = (req, res) => {
    db.query("SELECT * FROM informacion", (err, result) => {
        if (err) {
            console.error("Error al obtener informacion:", err);
            res.status(500).json({ success: false, message: 'Error interno del servidor', error: err.message });
        } else {
            res.status(200).json(result);
        }
    });
};

const deletInfo = (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM informacion WHERE id=?", id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ success: false, message: 'Error en la eliminación del empleado', error: err.message });
        } else {
            res.status(200).json({ success: true, message: 'Empleado eliminado exitosamente' });
        }
    });
};

const updateInfo = (req, res) => {
    const { id, nombre, fecha, texto } = req.body;
    db.query(
      "UPDATE informacion SET nombre=?, fecha=?, texto=? WHERE id=?",
      [nombre, fecha, texto, id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ success: false, message: 'Error en la actualización de info', error: err.message });
        } else {
          res.status(200).json({ success: true, message: 'Empleado actualizado exitosamente' });
        }
      }
    );
  };

module.exports = {
    createEmployee,
    getEmployees,
    updateEmployee,
    deleteEmployee,
    login,
    userCreate,
    createText,
    getInfo,
    deletInfo,
    updateInfo
};
