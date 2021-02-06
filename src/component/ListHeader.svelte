<script lang="ts">
  export let count: number = 0;
</script>

<div class="text-centered">
  <div class="title">
      <h1>Symfony 5.2</h1>
      <h3 class="opacity-75">Full List of {count}x Components</h3>
  </div>
  <div class="meta">
    <h1>inspired by</h1>
    <h3 class="opacity-75">
      <a href="https://www.meetup.com/sfugberlin/events/276113252/">"QOSSMIC & Cartographing Symfony"</a>
    </h3>
  </div>
</div>

<style>
  .title {
    padding: 8rem 0;
    letter-spacing: -1px;
  }
  .meta {
    color: rgba(0, 128, 0, 0.63);
  }
  h1,
  h3 {
    margin-bottom: 1px;
    font-weight: 900;
  }
  h1 {
    font-size: 10vw;
  }
  h3 {
    font-size: 6vw;
  }
  @media screen and (min-width: 640px) {
  h1 {
     font-size: 64px;
  }
  h3 {
    font-size: 38px;
  }
}
</style>
