import { Entity } from '@/core/entities/entity'
import { UniqueIdentityID } from '@/core/entities/value-objects/unique-identity-id'

export interface TodoProps {
  userId: UniqueIdentityID
  title: string
  completed: boolean
}

export class Todo extends Entity<TodoProps> {
  static create(props: TodoProps, id?: string) {
    return new Todo(props, id)
  }

  get userId() {
    return this.props.userId
  }

  get title() {
    return this.props.title
  }

  get completed() {
    return this.props.completed
  }

  public complete() {
    this.props.completed = true
  }
}
