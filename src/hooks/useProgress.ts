import { useState, useCallback } from 'react';
import { modules } from '@/data/modules';

const STORAGE_KEY = 'cpp-master-progress';

interface ProgressData {
  completedTopics: string[];
  quizScores: Record<string, number>;
}

const getStoredProgress = (): ProgressData => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return { completedTopics: [], quizScores: {} };
};

export const useProgress = () => {
  const [progress, setProgress] = useState<ProgressData>(getStoredProgress);

  const saveProgress = useCallback((data: ProgressData) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setProgress(data);
  }, []);

  const completeQuiz = useCallback((topicId: string, score: number) => {
    const current = getStoredProgress();
    const newProgress: ProgressData = {
      completedTopics: current.completedTopics.includes(topicId)
        ? current.completedTopics
        : [...current.completedTopics, topicId],
      quizScores: { ...current.quizScores, [topicId]: score }
    };
    saveProgress(newProgress);
  }, [saveProgress]);

  const isCompleted = useCallback((topicId: string) => {
    return progress.completedTopics.includes(topicId);
  }, [progress]);

  const getModuleProgress = useCallback((moduleId: number) => {
    const mod = modules.find(m => m.id === moduleId);
    if (!mod) return 0;
    const completed = mod.topics.filter(t => progress.completedTopics.includes(t.id)).length;
    return Math.round((completed / mod.topics.length) * 100);
  }, [progress]);

  return {
    completedTopics: progress.completedTopics,
    quizScores: progress.quizScores,
    completeQuiz,
    isCompleted,
    getModuleProgress
  };
};
