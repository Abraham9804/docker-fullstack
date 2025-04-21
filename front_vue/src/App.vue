<script setup>
    import axios from "axios"
    import {ref} from "vue"

    const usuarios = ref([])
    async function cargarDatos(){
        const {data} = await axios.get("http://localhost:3000/api/user")
        usuarios.value = data
    }

    cargarDatos()
</script>

<template>
  <h1>Listar Usuarios</h1>
  <table border="1">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Accion</th>
        </tr>
    </thead>
    <tbody>
      {{ usuarios }}
    </tbody>
  </table>
</template>

