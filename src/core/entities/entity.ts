import { UniqueIdentityID } from './value-objects/unique-identity-id'

export abstract class Entity<Type> {
  protected readonly props: Type
  private readonly _id: UniqueIdentityID

  protected constructor(props: Type, id?: string) {
    this.props = props
    this._id = new UniqueIdentityID(id)
  }

  public get id() {
    return this._id
  }
}
