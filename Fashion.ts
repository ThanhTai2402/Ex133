export class Fashion {
    constructor(
      public _id: any = null,
      public title: string = "",
      public details: string = "",
      public thumbnail: string = "",
      public style: string = "",
      public creationDate: Date = new Date()
    ) {}
}
  
export interface IFashion{
  _id: any
  title: string
  details: string
  thumbnail: string
  style: string
  creationDate: Date 
}