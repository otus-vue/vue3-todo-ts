export interface Todo {
    id: number
    title: string
    isCompleted: boolean
}
export enum TodoFilter {
    All = 'all',
    Completed = 'completed',
    Active = 'active'
}