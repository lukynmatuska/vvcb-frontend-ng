export class User{
    //The sub parameter of access token
    private _userId: string;
    private _username: string;
    private _firstname: string;
    private _lastname: string;
    private _roles: Array<string>;

    public constructor(userId: string, username: string, firstname: string, lastname: string, roles: Array<string>){
        this._userId = userId;
        this._username = username;
        this._firstname = firstname;
        this._lastname = lastname;
        this._roles = roles;
    }

    public get userId(): string{
        return this._userId;
    }

    public get username(): string{
        return this._username;
    }

    public get firstname(): string{
        return this._firstname;
    }

    public get lastname(): string{
        return this._lastname;
    }

    public get roles(): Array<string>{
        return this._roles;
    }

    //Checks whether user has all of the roles
    public hasRole(role: string | Array<string>): boolean{
        if(role instanceof Array){
            let contains = true;
            role.forEach((r) => {
                contains = contains && this._roles.includes(r);
            });
            return contains;
        }
        return this._roles.includes(role);
    }
}