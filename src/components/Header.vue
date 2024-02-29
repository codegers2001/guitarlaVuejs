<script>
// Supports weights 100-900
import "@fontsource-variable/onest";
</script>
<template>
  <header class="header relative">
    <nav class="flex justify-between items-center container mx-auto py-14 px-6">
      <img src="/public/img/logo.svg" alt="logo imagen" class="w-52" />
      <button id="compras">
        <img src="/public/img/carrito.png" alt="imagen de logo carrito" class="w-10 h-10" />
      </button>
    </nav>

    <div id="carrito" class="absolute rounded-lg right-3 hidden shadow-lg bg-white w-[360px] p-3 md:w-[450px] ">
      <p class="text-center mb-2">El carrito esta vacio</p>
      <table>
        <thead>
          <tr class="flex gap-2 justify-between items-center w-[340px] p-3 md:w-[430px]">
            <th class="text-sm">Imagen</th>
            <th class="text-sm">Nombre</th>
            <th class="text-sm">Precio</th>
            <th class="text-sm">Cantidad</th>
            <th class="text-sm">x</th>
          </tr>
        </thead>
        <tbody>
          <tr class="flex justify-between items-center w-[340px] p-3 md:w-[430px]">
            <td>
              <img src="/public/img/guitarra_01.jpg" alt="" class="w-6 md:w-10" />
            </td>
            <td>
              <p class="text-xs">Guitarra</p>
            </td>
            <td>
              <p class="text-xs font-bold">$300</p>
            </td>
            <td class="flex gap-2 items-center">
              <button class="  text-amber-500 text-xs md:text-md w-6 h-6 md:w-10 md:h-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </button>

              <span class="text-sm">1</span>

              <button class="  text-amber-500 text-xs md:text-md w-6 h-6 md:w-10 md:h-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </button>
            </td>
            <td>
              <button class="text-xs text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="text-right mb-2 mt-2 text-sm">
        Total pagar: <span class="fw-bold">$899</span>
      </p>
      <button class="rounded-lg bg-amber-500 w-full py-2 text-white text-md hover:bg-amber-600">
        Vaciar Carrito
      </button>
    </div>

    <div class="container mx-auto py-14 px-6">
      <h1 class="text-amber-500 text-6xl font-bold">Modelo VAI</h1>
      <p class="mt-6 text-white text-pretty text-lg w-full md:w-[600px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, possimus
        quibusdam dolor nemo velit quo, fuga omnis, iure molestias optio tempore sint at
        ipsa dolorum odio exercitationem eos inventore odit.
      </p>

      <p class="text-amber-500 text-6xl font-bold my-14">$399</p>

      <a href="#"
        class="bg-amber-500 text-xl hover:bg-amber-600 hover:cursor-pointer transition text-white py-2 px-10 inline-block font-bold mb-10">Agregar
        al Carrito</a>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/public/img/header.jpg");
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("../public/img/header.jpg");
  background-position: 50%;
  background-size: cover;
  min-height: auto;
}

h1,
p,
a {
  font-family: "Onest Variable", sans-serif;
}

.mostrar {
  display: block;
  transition: all 0.7s ease-in-out;
}
</style>
