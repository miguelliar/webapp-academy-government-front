<template>
  <div id="app">
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/info">About</router-link>
    </nav>
    <router-view />
    <footer>
      <a href="https://www.empathy.co/"> ©2021 Empathy.co, Inc. </a>
      <p>Hecho por los Academy de primavera</p>
    </footer>
  </div>
</template>

<style lang="scss">
:root {
  //Colours that will be used in the web
  --background-colour: rgb(255, 255, 255);
  --font-colour: rgb(36, 61, 72);
}
#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--font-colour);

  body {
    font-size: 1rem;
    font-weight: 300;
  }

  h1 {
    font-size: 3.3125rem;
    font-weight: 400;
    line-height: 4.3125rem;
  }

  h2 {
    font-size: 30px;
    font-weight: 300;
    line-height: 36px;
  }

  p {
    text-align: justify;
  }

  .sections-landing-page {
    display: grid;
  }

  @media only screen and (min-width: 640px) {
    .sections-landing-page {
      grid-template-columns: 100%;
    }
  }

  @media only screen and (min-width: 750px) {
    .sections-landing-page {
      grid-template-columns: 50% 50%;
    }
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

footer {
  display: flex;
  justify-content: space-between;
  a {
    color: var(--font-colour);
    text-decoration: none;
    align-self: center;
  }
}
</style>
