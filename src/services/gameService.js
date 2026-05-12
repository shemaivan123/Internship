import axios from 'axios';

// We use JSONPlaceholder as a test API since mock-game-api.com doesn't exist
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const gameService = {
  
  // POST: Send the player's name and score to the server
  async submitHighScore(playerName, score) {
    try {
      const response = await axios.post(`${API_BASE_URL}/posts`, {
        title: playerName, // Mapping to a standard field
        body: score,
        userId: 1
      });
      console.log('Score successfully submitted:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error submitting high score:', error);
      throw error;
    }
  },

  // GET: Fetch the list of scores
  async fetchHighScores() {
    try {
      const response = await axios.get(`${API_BASE_URL}/posts?_limit=10`);
      console.log('High scores fetched:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching high scores:', error);
      throw error;
    }
  }
};