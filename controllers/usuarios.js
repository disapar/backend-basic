const { response } = require("express");

const usuariosGet = (req, res) => {
  res.json({
    msj: "get Api usuario inicial",
  });
};

const usuariosPut = (req, res) => {
  const {id,usuario} = req.params;
  res.json({
    msj: "put API desde el controlador",
    id,
    usuario
  });
};

const usuariosPost = (req, res) => {
  const {nombre, edad} = req.body

  res.json({
    msj: "post API desde el controlador",
    nombre,
    edad
  });
};

const usuariosPatch = (req, res) => {
  res.json({
    msj: "Patch API desde el controlador",
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    msj: "delete API desde el controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosPatch,
  usuariosDelete,
};
