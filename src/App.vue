<template>
  <div id="app">
    <nav>
      <router-link to="/"><i class="fa fa-home fa-2x"></i></router-link>
      <router-link to="/busca"><i class="fa fa-search fa-2x"></i></router-link>
      <router-link to="/explora"
        ><i class="fa fa-line-chart fa-2x"></i
      ></router-link>
      <router-link to="/info"
        ><i class="fa fa-info-circle fa-2x"></i
      ></router-link>
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
  --font-selected-link: #42b983;
  --font-unselected-link: rgb(36, 61, 72);
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
    margin-left: 3rem;
    margin-right: 3rem;
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
  padding: 20px 20px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  right: 0;
  a {
    margin-right: 10px;
    padding: 8px 10px;
    font-weight: bold;
    color: var(--font-unselected-link);
    border: solid 5px;
    border-radius: 30px;
    transition: 0.5s;

    &.router-link-exact-active {
      color: var(--font-selected-link);
    }
  }

  i:hover:after {
    content: "Otro";
    padding-left: 10px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 22px;
  }

  .fa-home:hover:after {
    content: "Inicio";
  }
  .fa-search:hover:after {
    content: "Busca";
  }
  .fa-line-chart:hover:after {
    content: "Explora";
  }
  .fa-info-circle:hover:after {
    content: "Info";
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
