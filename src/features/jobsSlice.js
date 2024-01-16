import { createSlice } from "@reduxjs/toolkit";

// Créez une slice pour les jobs
const jobsSlice = createSlice({
  name: "jobs", // Nom de la slice
  initialState: [], // État initial
  reducers: {
    addJob: (state, action) => {
      // Ajoutez un job à l'état
      state.push(action.payload);
    },
    removeJob: (state, action) => {
      // Supprimez un job de l'état en utilisant son id
      return state.filter((job) => job.id !== action.payload);
    },
  },
});

// Exportez les actions générées automatiquement par la slice
export const { addJob, removeJob } = jobsSlice.actions;

// Exportez le réducteur de la slice
export default jobsSlice.reducer;
