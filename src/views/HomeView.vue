<template>
  <div class="home">
    <h1>¿Qué es esto?</h1>
    <div class="content-landing-page">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
        arcu consequat, sodales diam sed, interdum justo. Suspendisse sit amet
        diam egestas, volutpat risus id, rutrum mi. Proin commodo porta ante,
        eget bibendum massa blandit blandit. Praesent at ipsum quam. Suspendisse
        id lacus in enim vehicula elementum ac nec est.
      </p>

      <p>
        Pellentesque id elementum nunc. Vivamus rhoncus volutpat malesuada.
        Praesent iaculis dui id maximus tristique. Phasellus eu vulputate massa.
        Curabitur ex orci, hendrerit eu facilisis sit amet, cursus nec erat.
      </p>
    </div>
    <div class="sections-landing-page">
      <article>
        <h2>Explora</h2>
        <p>
          ¿Nunca te has planteado qué pasa con las subvenciones que se dan?
          Entra y explora con nuestros recursos las distintas distribuciones de
          cómo se están concediendo las subvenciones. Entra
          <router-link to="/explora">aquí</router-link> para ello.
        </p>
        <img src="../assets/WIP.jpeg" alt="Work in progress" />
      </article>
      <article>
        <h2>Busca</h2>
        <p>
          Quizás has recibido una subvención o quieres buscar algunos datos en
          concreto. Con nuestro sistema de búsqueda encontrar lo que buscas será
          pan comido (o al menos más fácil que por la vía convencional). Entra
          <router-link to="/explora">aquí</router-link> para ello.
        </p>
        <img src="../assets/WIP.jpeg" alt="Work in progress" />
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "HomeView",
  components: {},
});
</script>

<style>
article,
.content-landing-page {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}
a {
  color: var(--font-colour);
  align-self: center;
}
</style>
