export type Task = {
  id: string
  title: string
  createdAt: string
}

export type TaskValidationError = 'required' | 'too-long' | 'duplicate'

export function normalizeTitle(title: string): string {
  return title.trim()
}

export function validateTaskTitle(
  title: string,
  tasks: Task[],
): TaskValidationError | null {
  if (!title) return 'required'
  if (title.length > 100) return 'too-long'

  const normalizedTitle = title.toLocaleLowerCase()
  if (tasks.some((task) => task.title.toLocaleLowerCase() === normalizedTitle)) {
    return 'duplicate'
  }

  return null
}

export function createTask(title: string): Task {
  return {
    id: crypto.randomUUID(),
    title: normalizeTitle(title),
    createdAt: new Date().toISOString(),
  }
}

export function sortTasksByNewest(tasks: Task[]): Task[] {
  return [...tasks].sort(
    (first, second) => Date.parse(second.createdAt) - Date.parse(first.createdAt),
  )
}