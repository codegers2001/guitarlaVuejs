<script>
// Supports weights 100-900
import "@fontsource-variable/onest";
</script>
<template>
  <header class="header">
    <div class="flex justify-between items-center container mx-auto py-14 px-6">
      <img src="/public/img/logo.svg" alt="logo imagen" class="w-52" />
      <img src="/public/img/carrito.png" alt="" class="w-10 h-10" />
    </div>
    <div class="container mx-auto py-14 px-6">
      <h1 class="text-amber-500 text-6xl font-bold">Modelo VAI</h1>
      <p class="mt-6 text-white text-pretty text-lg w-full md:w-[600px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, possimus
        quibusdam dolor nemo velit quo, fuga omnis, iure molestias optio tempore sint at
        ipsa dolorum odio exercitationem eos inventore odit.
      </p>

      <p class="text-amber-500 text-6xl font-bold my-14">$399</p>

      <a
        href="#"
        class="bg-amber-500 text-xl hover:bg-amber-600 hover:cursor-pointer transition text-white py-2 px-10 inline-block font-bold mb-10"
        >Agregar al Carrito</a
      >
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
</style>
