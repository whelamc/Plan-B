<script lang="ts">
  import { fade } from 'svelte/transition';
  // not all the icon can use the viewBox
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import CgArrowsExchange from 'svelte-icons-pack/cg/CgArrowsExchange';

  import Image from "@/components/Image/index.svelte"

  export let planAname: string
  export let planAlogo: string
  export let planAurl: string
  export let planBname: string
  export let planBlogo: string
  export let planBurl: string
</script>

<div
  class="cube-container h-auto rounded-lg bg-green-400 opacity-90 shadow-2xl flex gap-1 items-center justify-center text-white p-4 px-6"
  transition:fade
>
  <div class="plan-a w-1/3 text-center overflow-hidden flex flex-col gap-2">
    <div class="logo w-full rounded-lg relative pb-[100%] overflow-hidden">
      <Image src={planAlogo} />
    </div>
    <a href={planAurl} class="text-2xl font-semibold md:text-lg">{planAname}</a>
  </div>
  <div class="arrow w-1/3 text-center">
    <Icon src={CgArrowsExchange} size="100%" className="m-auto" color="white" />
  </div>
  <div class="plan-b w-1/3 text-center overflow-hidden flex flex-col gap-2">
    <div class="logo w-full rounded-lg relative pb-[100%] overflow-hidden">
      <Image src={planBlogo} />
    </div>
    <a href={planBurl} class="text-2xl font-semibold md:text-lg">{planBname}</a>
  </div>
</div>

<style lang="scss">
  .cube-container {
    position: relative;
  }
</style>
