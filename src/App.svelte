<script lang="ts">
  import Home from "@/pages/Home/index.svelte";
  import Footer from "@/components/Footer/index.svelte";
</script>

<div
  class="main-container w-screen h-screen bg-gradient-to-b from-teal-500 to-emerald-500"
>
  <Home />
  <Footer />
</div>

<style lang="scss">
  .main-container {
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
