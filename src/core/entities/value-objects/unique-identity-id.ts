import { randomUUID } from 'crypto'

export class UniqueIdentityID {
  private readonly value: string

  constructor(aString?: string) {
    this.value = aString ?? randomUUID()
  }

  public toString(): string {
    return this.value
  }

  public equals(other: UniqueIdentityID): boolean {
    if (other instanceof UniqueIdentityID) {
      return this.value.toString() === other.value.toString()
    }
    return false
  }
}
