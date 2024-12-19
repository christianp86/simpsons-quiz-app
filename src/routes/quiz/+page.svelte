<script lang="ts">
  import { onMount } from 'svelte';
  import { questions } from '$lib/questions';
  import type { Player } from '$lib/types';
  import { goto } from '$app/navigation';
  
  let currentQuestionIndex = 0;
  let player: Player;
  let selectedAnswer = '';
  let remainingOptions: string[] = [];
  let gameOver = false;

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    const playerName = params.get('player');
    
    if (!playerName) {
      goto('/');
      return;
    }

    player = {
      name: playerName,
      score: 0,
      fiftyFiftyJoker: true,
      correctAnswerJoker: true
    };

    resetQuestion();
  });

  function resetQuestion() {
    remainingOptions = [...questions[currentQuestionIndex].options];
  }

  function useFiftyFiftyJoker() {
    if (!player.fiftyFiftyJoker) return;
    
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const wrongAnswers = remainingOptions.filter(option => option !== correctAnswer);
    const answersToRemove = Math.floor(wrongAnswers.length / 2);
    
    for (let i = 0; i < answersToRemove; i++) {
      const randomIndex = Math.floor(Math.random() * wrongAnswers.length);
      const answerToRemove = wrongAnswers.splice(randomIndex, 1)[0];
      remainingOptions = remainingOptions.filter(option => option !== answerToRemove);
    }

    player.fiftyFiftyJoker = false;
  }

  function useCorrectAnswerJoker() {
    if (!player.correctAnswerJoker) return;
    selectedAnswer = questions[currentQuestionIndex].correctAnswer;
    player.correctAnswerJoker = false;
  }

  function checkAnswer() {
    if (!selectedAnswer) return;

    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      player.score += 10;
    }

    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      selectedAnswer = '';
      resetQuestion();
    } else {
      gameOver = true;
    }
  }

  function restartGame() {
    goto('/');
  }
</script>

{#if player && !gameOver}
  <div class="container">
    <div class="header">
      <h2>Question {currentQuestionIndex + 1}/{questions.length}</h2>
      <p>Player: {player.name} | Score: {player.score}</p>
    </div>

    <div class="question-card">
      <p class="question">{questions[currentQuestionIndex].text}</p>

      <div class="options">
        {#each remainingOptions as option}
          <label class="option">
            <input
              type="radio"
              name="answer"
              value={option}
              bind:group={selectedAnswer}
            />
            {option}
          </label>
        {/each}
      </div>

      <div class="jokers">
        {#if player.fiftyFiftyJoker}
          <button on:click={useFiftyFiftyJoker} class="joker">
            Use 50:50
          </button>
        {/if}
        {#if player.correctAnswerJoker}
          <button on:click={useCorrectAnswerJoker} class="joker">
            Show Answer
          </button>
        {/if}
      </div>

      <button on:click={checkAnswer} class="submit" disabled={!selectedAnswer}>
        Submit Answer
      </button>
    </div>
  </div>
{:else if gameOver}
  <div class="container">
    <div class="game-over">
      <h2>Game Over!</h2>
      <p>Congratulations {player.name}!</p>
      <p>Your final score: {player.score}</p>
      <button on:click={restartGame}>Play Again</button>
    </div>
  </div>
{/if}

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  .header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .question-card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .question {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem;
    border: 2px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
  }

  .option:hover {
    background: #f5f5f5;
  }

  .jokers {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .joker {
    background: #e74c3c;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
  }

  .joker:hover {
    background: #c0392b;
  }

  .submit {
    width: 100%;
    background: #2ecc71;
    color: white;
    border: none;
    padding: 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: background 0.3s;
  }

  .submit:hover {
    background: #27ae60;
  }

  .submit:disabled {
    background: #95a5a6;
    cursor: not-allowed;
  }

  .game-over {
    text-align: center;
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .game-over button {
    background: #3498db;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.1rem;
    margin-top: 1rem;
    transition: background 0.3s;
  }

  .game-over button:hover {
    background: #2980b9;
  }
</style>