<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import CloudBackground from './CloudBackground.svelte';
  import StartForm from './StartForm.svelte';

  let showTitle = false;
  let showForm = false;

  onMount(() => {
    // Delay the title appearance
    setTimeout(() => {
      showTitle = true;
      // Delay the form appearance after title
      setTimeout(() => {
        showForm = true;
      }, 1000);
    }, 1500);
  });
</script>

<div class="intro-container">
  <CloudBackground />
  
  {#if showTitle}
    <div class="title-container" transition:fade={{ duration: 2000 }}>
      <h1 class="title">The Simpsons</h1>
      <h2 class="subtitle">Unofficial Quiz</h2>
    </div>
  {/if}

  {#if showForm}
    <div class="form-container" transition:fade={{ duration: 1000 }}>
      <StartForm />
    </div>
  {/if}
</div>

<style>
  .intro-container {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .title-container {
    text-align: center;
    z-index: 2;
    margin-bottom: 2rem;
  }

  .title {
    font-family: 'Arial Black', sans-serif;
    font-size: 4rem;
    color: #ffd521;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin: 0;
  }

  .subtitle {
    font-family: 'Arial', sans-serif;
    font-size: 2rem;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin: 0.5rem 0 0 0;
  }

  .form-container {
    z-index: 2;
  }
</style>