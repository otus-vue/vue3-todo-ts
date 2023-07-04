export interface Todo {
    id: number
    text: string
    isCompleted: boolean
}

export enum Mode {
    All = 'all',
    Active = 'active',
    Completed = 'completed'
}