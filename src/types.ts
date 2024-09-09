export interface IUser{
    id:number
    name: string
    age:number
    salary: number
    isMarried?: boolean
}

export type IUserAdd = Omit<IUser, 'id'>

export interface IContext{
    users: IUser[]
    handleRemove: (id:number)=> void
    handleAdd: (user: IUserAdd)=> void
}