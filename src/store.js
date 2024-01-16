import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './features/jobsSlice';

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    // Autres réducteurs de votre application
  },
});

export default store;
