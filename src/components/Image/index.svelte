<script lang="ts">
  import { onMount } from 'svelte';
  export let src: string;

  let loaded = false;
  let failed = false;
  let loading = false;

  onMount(() => {
    const img = new Image();
    img.src = src;
    loading = true;

    img.onload = () => {
      loading = false;
      loaded = true;
    };
    img.onerror = () => {
      loading = false;
      failed = true;
    };
  });
</script>

{#if loaded}
  <img {src} alt="Logo" class="object-center object-fill absolute h-full left-0 right-0 m-auto" />
{:else if failed}
  <div class="w-full h-full absolute bg-green-100" />
{:else if loading}
  <div class="w-full h-full absolute bg-green-300 animate-pulse" />
{/if}
