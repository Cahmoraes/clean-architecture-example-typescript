export interface Presenter<Type> {
  present(todos: Type[]): Type[]
}
