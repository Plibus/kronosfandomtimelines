export class Post {
    private type: string;
    private id: number;
    private name: string;
    private description: string;
    private update: Date;
    private created: Date;
    private likes: number;
    private views: number;
    private file: string;
    private text;

    constructor() {
        this.type = 'fandom';
        this.id = 0;
        this.name = 'name unassigned';
        this.description = 'description unassigned';
        this.update = null;
        this.created = null;
        this.likes = 0;
        this.views = 0;
        this.file = 'assets/posts/posts/'+this.type+'/'+this.id+'.html';
    }

    getType() {
        return this.type;
    }

    getID() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getUpdate() {
        return this.update;
    }

    getCreated() {
        return this.created;
    }

    getLikes() {
        return this.likes;
    }

    getViews() {
        return this.views;
    }

    getFile() {
        return this.file;
    }

    getPageInfo() {
        return this.text;
    }

    setPageInfo() {
        this.text = ['TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY', 'TEST THE TEXT ARRAY'];
    }
}