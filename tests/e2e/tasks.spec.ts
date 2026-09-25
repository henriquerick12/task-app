import { expect, test } from '@playwright/test'

test('CA-07: exibe o estado vazio sem tarefas', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.clear())
  await page.goto('/')

  await expect(page.getByText('Nenhuma tarefa cadastrada.')).toBeVisible()
})

test('CA-01: cria e persiste uma tarefa válida', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.clear())
  await page.goto('/')

  const titleInput = page.getByLabel('ADICIONAR À LISTA')
  await titleInput.fill('  Planejar a semana  ')
  await page.getByRole('button', { name: 'Adicionar' }).click()

  await expect(page.getByText('Planejar a semana')).toBeVisible()
  await expect(titleInput).toHaveValue('')

  const storedTasks = await page.evaluate(() =>
    JSON.parse(window.localStorage.getItem('task-app:tasks') ?? '[]'),
  )
  expect(storedTasks).toHaveLength(1)
  expect(storedTasks[0].title).toBe('Planejar a semana')
})

test('CA-02: rejeita título vazio', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.clear())
  await page.goto('/')

  await page.getByRole('button', { name: 'Adicionar' }).click()

  await expect(page.getByRole('status')).toHaveText('Digite um título para continuar.')
  await expect(page.getByText('Nenhuma tarefa cadastrada.')).toBeVisible()
})

test('CA-03: rejeita título acima de 100 caracteres e preserva o texto', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.clear())
  await page.goto('/')

  const title = 'x'.repeat(101)
  const titleInput = page.getByLabel('ADICIONAR À LISTA')
  await titleInput.fill(title)
  await page.getByRole('button', { name: 'Adicionar' }).click()

  await expect(page.getByRole('status')).toHaveText('O título deve ter no máximo 100 caracteres.')
  await expect(titleInput).toHaveValue(title)
  await expect(page.getByText('Nenhuma tarefa cadastrada.')).toBeVisible()
})

test('CA-04: rejeita duplicidade sem diferenciar maiúsculas', async ({ page }) => {
  await page.addInitScript(() => window.localStorage.clear())
  await page.goto('/')

  const titleInput = page.getByLabel('ADICIONAR À LISTA')
  await titleInput.fill('Estudar Git')
  await page.getByRole('button', { name: 'Adicionar' }).click()
  await titleInput.fill('estudar git')
  await page.getByRole('button', { name: 'Adicionar' }).click()

  await expect(page.getByRole('status')).toHaveText('Já existe uma tarefa com esse título.')
  await expect(titleInput).toHaveValue('estudar git')
  await expect(page.locator('.task-item')).toHaveCount(1)
})

test('CA-06: exibe tarefas da mais recente para a mais antiga', async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem(
      'task-app:tasks',
      JSON.stringify([
        { id: 'older', title: 'Tarefa antiga', createdAt: '2026-01-01T10:00:00.000Z' },
        { id: 'newer', title: 'Tarefa recente', createdAt: '2026-09-25T10:00:00.000Z' },
      ]),
    )
  })
  await page.goto('/')

  await expect(page.locator('.task-title')).toHaveText([
    'Tarefa recente',
    'Tarefa antiga',
  ])
})

test('CA-05: mantém a tarefa após recarregar a página', async ({ page }) => {
  await page.goto('/')

  await page.getByLabel('ADICIONAR À LISTA').fill('Enviar proposta')
  await page.getByRole('button', { name: 'Adicionar' }).click()
  await expect(page.getByText('Enviar proposta')).toBeVisible()

  await page.reload()

  await expect(page.getByText('Enviar proposta')).toBeVisible()
})

test('TASK-017: mantém o fluxo sem overflow em desktop, tablet e smartphone', async ({ page }) => {
  await page.goto('/')

  for (const viewport of [
    { width: 1440, height: 900 },
    { width: 768, height: 1024 },
    { width: 390, height: 844 },
  ]) {
    await page.setViewportSize(viewport)
    await expect(page.getByLabel('ADICIONAR À LISTA')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Adicionar' })).toBeVisible()

    const documentWidth = await page.evaluate(() => document.documentElement.scrollWidth)
    expect(documentWidth).toBeLessThanOrEqual(viewport.width)
  }
})

test('TASK-018: mostra feedback visual e animação sutil', async ({ page }) => {
  await page.goto('/')

  await expect.poll(() =>
    page.locator('.intro').evaluate((element) => getComputedStyle(element).animationName),
  ).toBe('rise-in')

  await page.getByRole('button', { name: 'Adicionar' }).click()

  const feedback = page.locator('.feedback')
  await expect(feedback).toHaveClass(/error/)
  await expect(feedback).toHaveCSS('color', 'rgb(173, 73, 54)')
  await expect(page.getByLabel('ADICIONAR À LISTA')).toHaveAttribute('aria-invalid', 'true')
})

test('CA-08: preserva o título quando o armazenamento falha', async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.setItem = () => {
      throw new DOMException('Falha simulada', 'QuotaExceededError')
    }
  })
  await page.goto('/')

  const titleInput = page.getByLabel('ADICIONAR À LISTA')
  await titleInput.fill('Salvar relatório')
  await page.getByRole('button', { name: 'Adicionar' }).click()

  await expect(page.getByRole('status')).toHaveText(
    'Não foi possível salvar. Verifique o armazenamento do navegador.',
  )
  await expect(titleInput).toHaveValue('Salvar relatório')
  await expect(page.getByText('Nenhuma tarefa cadastrada.')).toBeVisible()
})