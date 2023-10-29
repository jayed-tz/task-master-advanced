class Task {
    public id: string;
    constructor(public title: string) {
        this.id = new Date().toISOString();
    }
}

export default Task;