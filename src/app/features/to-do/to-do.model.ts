export class ToDo {
    constructor(
        public userId: number,
        public id: number | null,
        public title: string,
        public completed: boolean,
    ) {}
}