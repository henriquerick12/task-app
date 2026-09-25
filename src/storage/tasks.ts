import type { Task } from '../domain/task'

const STORAGE_KEY = 'task-app:tasks'

function isTask(value: unknown): value is Task {
  if (typeof value !== 'object' || value === null) return false

  const task = value as Record<string, unknown>
  return (
    typeof task.id === 'string' &&
    typeof task.title === 'string' &&
    typeof task.createdAt === 'string' &&
    !Number.isNaN(Date.parse(task.createdAt))
  )
}

export function loadTasks(): Task[] {
  try {
    const storedTasks = localStorage.getItem(STORAGE_KEY)
    if (!storedTasks) return []

    const parsed: unknown = JSON.parse(storedTasks)
    if (!Array.isArray(parsed) || !parsed.every(isTask)) return []

    return parsed
  } catch {
    return []
  }
}

export function saveTasks(tasks: Task[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}