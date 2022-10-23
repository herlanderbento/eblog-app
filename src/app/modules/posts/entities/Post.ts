import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { randomUUID } from "node:crypto";

@Entity()
export class Posts {
  @PrimaryColumn()
  id?: string;

  @Column()
  user_id: string;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column()
  content: string;

  @Column()
  images: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}
