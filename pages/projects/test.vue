<template>
  <div>
    <div class="heading">
      <img src="https://images.unsplash.com/photo-1537871429205-24f5acbf8b9f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c78f6f5d9b88c9fdf0d3e3c2528157ad&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb" alt="">
      <h1>My amazing post</h1>
    </div>
  </div>
</template>

<style lang="scss">
.heading {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto repeat(3, 1fr);

  img {
    grid-column: 2 / 6;
    grid-row: 1 / -1;
    height: auto;
    max-width: 100%;
  }

  h1 {
    grid-column: 1 / -1;
    grid-row: 3 / 4;
    align-self: center;
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
    color: #ff6347;
    background: white;
  }
}
</style>
