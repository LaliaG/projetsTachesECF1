// import router from '@/router';
// import axios from 'axios';
// import { ref, computed } from 'vue';
// import { defineStore } from "pinia";

// const API_URL = 'http://localhost:3000/api/project';

// const token = JSON.parse(localStorage.getItem('user')).token;// à revoir

// const config = {
//     headers: { Authorization: `Bearer ${token}`, "Content-Type": 'application/JSON' }
  
    
// };


// export const useProjectStore = defineStore('projectStore', () => {
    
//     const error = ref(null);
//     const token = ref(localStorage.getItem('token') || null);
//     const project = ref([]);

//     const setToken = (newToken) => {
//         token.value = newToken;
//         localStorage.setItem('token', newToken);
//     };

//     const createProject = async (projectname, description, etat) => {
//         try {
//             const response = await axios.post(
//                 'http://localhost:3000/project/create',
//                 { projectname, description, etat },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token.value}`,
//                     },
//                 }
//             );

//             console.log('Réponse du serveur:', response);
//             error.value = null;
//         } catch (err) {
//             console.error('Erreur lors de la récupération des données:', err);
//             error.value = 'Erreur lors de la récupération des données';
//         }
//     };
//     const AllProject = async (userId) => {
//         try {
        
//             if (userId !== "null") {
//                 const response = await axios.get(
//                     `http://localhost:3000/project/user/${userId}`,
//                     {
//                         headers: {
//                             Authorization: `Bearer ${token.value}`, 
//                         },
//                     }
//                 );
    
//                 project.value = response.data.results;
    
//                 console.log('Réponse du serveur:', response);
//             } else {
//                 console.log('UserId est "null", ajustez votre logique côté client.');
//             }
//         } catch (err) {
//             console.error('Erreur lors de la récupération des données:', err);
//             error.value = 'Erreur lors de la récupération des données';
//         }
//     };
//     return {
//         createProject, 
//         token,
//         setToken,
//         AllProject
//     };
// });