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
    return (
      other instanceof UniqueIdentityID &&
      this.value.toString() === other.value.toString()
    )
  }
}
