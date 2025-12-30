import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';
import { ulid } from 'ulid';

@Entity()
export class Profile {
  // 128ビットを表現するために、Base32では128/5=25.6->26文字必要
  @PrimaryColumn('char', { length: 26 })
  id: string;

  @BeforeInsert()
  generateId() {
    if (!this.id) {
      this.id = ulid();
    }
  }

  @Column('char', { length: 100 })
  name: string;

  @Column('char', { length: 255 })
  description: string;
}
