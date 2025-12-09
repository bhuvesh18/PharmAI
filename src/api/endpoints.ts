import axios from 'axios';

// 1. Get Base URL from .env
//const API_BASE_URL = import.meta.env.VITE_API_URL;
const API_BASE_URL = (import.meta as ImportMeta).env.VITE_API_URL;

// 2. Define Types (Interfaces)
export interface AgentRequestPayload {
  query: string;
  complexity: number;
}

export interface AgentResponseData {
  agent_id: string;
  analysis: string;
  recommendation: string;
}

// 3. Create Axios Instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 4. Export API Functions
export const AgentAPI = {
  runAgent: async (payload: AgentRequestPayload) => {
    const response = await apiClient.post<AgentResponseData>('/api/run-agent', payload);
    return response.data;
  },
  // Add more endpoints here later...
  // getStatus: async () => ...
};