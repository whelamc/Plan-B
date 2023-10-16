<script lang="ts">
  import Cube from "@/components/Cube/index.svelte";
  import { onMount } from "svelte";

  type dataType = {
    planAname: string;
    planAlogo: string;
    planAurl: string;
    planBname: string;
    planBlogo: string;
    planBurl: string;
  };

  let allData: dataType[] = [];
  const fetchData = () => {
    fetch("/data/all.json")
      .then((response) => response.json())
      .then((data) => (allData = data))
      .catch((error) => console.error(error));
  };
  onMount(() => {
    fetchData();
  });
</script>

<div class="home w-full grid grid-cols-[repeat(auto-fill,minmax(theme(width.80),1fr))] gap-4 p-4">
  {#each allData as item, i}
    <Cube {...item} />
  {/each}
</div>

<style lang="scss">
</style>
