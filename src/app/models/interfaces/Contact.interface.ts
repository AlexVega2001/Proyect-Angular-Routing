export interface IContact {
    id:         number;
    email:      string;
    password:   string;
    name:       string;
    role:       Role;
    avatar:     string;
}

export enum Role {
    Admin = "admin",
    Customer = "customer",
    Invitado = "invitado"
}
