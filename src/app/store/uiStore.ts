// src/store/uiStore.ts
import { create } from "zustand";

interface UIState {
  // Sidebar
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;

  // Modal
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;

  // Theme
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  // Sidebar state
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),

  // Modal state
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),

  // Theme state
  theme: "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));
