<script lang="ts">
  import { onMount } from 'svelte';
  
  let clouds: HTMLDivElement[];
  
  onMount(() => {
    clouds = Array.from(document.querySelectorAll('.cloud'));
    animateClouds();
  });

  function animateClouds() {
    clouds.forEach((cloud, index) => {
      const speed = 15 + Math.random() * 10;
      cloud.style.animation = `float ${speed}s linear infinite`;
      cloud.style.animationDelay = `${index * -2}s`;
    });
  }
</script>

<div class="cloud-container">
  {#each Array(5) as _, i}
    <div class="cloud" />
  {/each}
</div>

<style>
  .cloud-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #00bfff, #87ceeb);
    overflow: hidden;
    z-index: 1;
  }

  .cloud {
    position: absolute;
    width: 150px;
    height: 50px;
    background: #fff;
    border-radius: 50px;
    opacity: 0.8;
  }

  .cloud::before,
  .cloud::after {
    content: '';
    position: absolute;
    background: #fff;
    border-radius: 50%;
  }

  .cloud::before {
    width: 70px;
    height: 70px;
    top: -20px;
    left: 15px;
  }

  .cloud::after {
    width: 100px;
    height: 100px;
    top: -35px;
    right: 15px;
  }

  @keyframes float {
    from {
      transform: translateX(-200px);
    }
    to {
      transform: translateX(calc(100vw + 200px));
    }
  }
</style>