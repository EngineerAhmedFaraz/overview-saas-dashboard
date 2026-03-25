// src/stores/useAuthStore.ts
import { create } from 'zustand';

interface User {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  joinedDate?: string;
  role: 'Admin' | 'User' | 'Editor';
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: string | null;
  successMessage: string | null;

  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
  successMessage: null,

  // ==================== LOGIN ====================
  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Dummy credentials for testing
      if (email === 'test@example.com' && password === '123456') {
        set({
          isAuthenticated: true,
          user: {
            name: 'Ahmed Faraz',
            email: 'ahmed@example.com',
            phone: '+92 300 1234567',
            location: 'Hyderabad, Sindh, Pakistan',
            joinedDate: 'January 15, 2025',
            role: 'Admin',
          },
          isLoading: false,
          error: null,
        });
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err: any) {
      set({
        error: err.message || 'Login failed',
        isLoading: false,
      });
      throw err;
    }
  },

  // ==================== SIGNUP ====================
  signup: async (name: string, email: string, password: string) => {
    set({ isLoading: true, error: null });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      set({
        isAuthenticated: true,
        user: {
          name,
          email,
          phone: '+92 300 9876543',
          location: 'Hyderabad, Sindh, Pakistan',
          joinedDate: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
          role: 'User',
        },
        isLoading: false,
        error: null,
      });
    } catch (err: any) {
      set({
        error: 'Registration failed. Please try again.',
        isLoading: false,
      });
      throw err;
    }
  },

  // ==================== FORGOT PASSWORD ====================
  forgotPassword: async (email: string) => {
    set({ isLoading: true, error: null, successMessage: null });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      set({
        successMessage: `Password reset link sent to ${email}`,
        isLoading: false,
      });
    } catch {
      set({
        error: 'Failed to send reset link. Please try again.',
        isLoading: false,
      });
    }
  },

  // ==================== LOGOUT ====================
  logout: () => {
    set({
      isAuthenticated: false,
      user: null,
      error: null,
      successMessage: null,
    });
    localStorage.removeItem('token'); // Clear any saved token
  },
}));