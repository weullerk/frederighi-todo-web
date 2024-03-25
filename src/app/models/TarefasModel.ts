export interface TarefasModel {
  tarefas: [
    {
      id: number,
      descricao: string,
      status: string,
      user_id: number,
      created_at: string,
      updated_at: string
    }
  ]
}
