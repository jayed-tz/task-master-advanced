class Task {
    public id: string;
    public name: string;
    constructor(public title: string) {
        this.id = new Date().toISOString();
        this.name = 'My Task';
    }
}

export default Task;