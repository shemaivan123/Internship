<template>
  <div>
    <h1>Game Dashboard</h1>
    <button @click="handleGameOver">Submit My Score</button>
    <button @click="loadScores">View Leaderboard</button>

    <ul v-if="scores.length">
      <li v-for="item in scores" :key="item.id">
        Player ID: {{ item.id }} - Score: {{ item.id * 100 }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { gameService } from './services/gameService';

const scores = ref([]);

const handleGameOver = async () => {
  const name = prompt("Enter your player name:");
  if (name) {
    await gameService.submitHighScore(name, 5000);
    alert("Score submitted! Check the console (F12) for the server response.");
  }
};

const loadScores = async () => {
  const data = await gameService.fetchHighScores();
  scores.value = data;
};
</script>