import {ref, computed} from 'vue';
import {defineStore} from 'pinia';
import router from '@/router';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/project';

const token = JSON.parse(localStorage.getItem('user')).token;
const config = {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": 'application/JSON' }
  
    
};

export const useProjectStore = defineStore('characters', () => {

  const data = ref('');
  let jsonData = ref('')

  async function getProject() {

      try {
        const response = await axios.get(API_URL + '/',config) 
        console.log(response.data);
        if (!response) {
          throw new Error('Erreur lors du chargement des données');
        }
        jsonData = response.data;
        console.log(jsonData);
        return jsonData
        
    
        
       
      } catch (error) {
        console.error('Erreur:', error);
      }
      
    }
    
    console.log(jsonData);
    return {jsonData,getProject}
})


export const useGameStore = defineStore('games', ()=> {
  
  const games = ref([]);

  const gameForId = computed((gameId)=> games.value.find(g => g.id === gameId));

  function addGame(game){
    games.value.push(game);
  }

  function removeGame(game){
    games.value = games.value.filter(g => g!== game);
  }

return {games, gameForId, addGame, removeGame}

})

import router from '@/router';
import axios from 'axios';
import { ref } from 'vue';
import { defineStore } from "pinia";
const API_URL = 'http://localhost:3000/api/project';

const token = JSON.parse(localStorage.getItem('user')).token;
const config = {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": 'application/JSON' }
  
    
};

