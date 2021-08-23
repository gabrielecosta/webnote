export  class  Note {
  id: number;
  title:  string;
  description:  string;
  status: Status;

  constructor(id: number, title: string, description: string, status: Status) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
  }
}

export enum Status {
  ToDo = 1,
  InProgress = 2,
  Done = 3,
}
