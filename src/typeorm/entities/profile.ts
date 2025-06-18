import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "user_profiles"})
export class Profile {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    lastName: string;

    @Column()
    dob: string

    @Column()
    age: Number

}