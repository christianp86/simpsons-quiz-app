<script lang="ts">
  import { goto } from '$app/navigation';
  
  let playerName = '';
  let error = '';

  function startGame() {
    if (playerName.trim() === '') {
      error = 'Please enter your name to start';
      return;
    }
    goto(`/quiz?player=${encodeURIComponent(playerName)}`);
  }
</script>

<div class="start-form">
  <input
    type="text"
    bind:value={playerName}
    placeholder="Enter your name"
    on:keydown={(e) => e.key === 'Enter' && startGame()}
  />
  {#if error}
    <p class="error">{error}</p>
  {/if}
  <button on:click={startGame}>Start Quiz</button>
</div>

<style>
  .start-form {
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  input {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 2px solid #ddd;
    border-radius: 4px;
    font-size: 1.1rem;
    box-sizing: border-box;
  }

  button {
    background: #ffd521;
    color: #000;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s, transform 0.1s;
    font-weight: bold;
  }

  button:hover {
    background: #ffed4a;
    transform: scale(1.05);
  }

  .error {
    color: #e74c3c;
    margin: 0.5rem 0;
    font-size: 0.9rem;
  }
</style>