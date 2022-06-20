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
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
    color: #2c3e50;
    border: solid 5px;
    border-radius: 30px;

    &.router-link-exact-active {
      color: #42b983;
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
</style>
