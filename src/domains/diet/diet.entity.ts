export class Diet {
    id: string;
    doctorId: string;
    repeaterId: string;
    startingDate?: Date;
    endingDate?: Date;

    constructor(input: {
    id: string;
    doctorId: string;
    repeaterId: string;
    startingDate?: Date;
    endingDate?: Date;
  }) {
    this.id = input.id;
    this.doctorId = input.doctorId;
    this.repeaterId = input.repeaterId;
    this.startingDate = input.startingDate;
    this.endingDate = input.endingDate;
  }
}