import { IContact, Role } from "../models/interfaces/Contact.interface";

export const CONTACTOS: IContact[] = [
    {
        "id": 1,
        "email": "john@mail.com",
        "password": "changeme",
        "name": "Jhon",
        "role": Role.Customer,
        "avatar": "https://i.imgur.com/OARGZQW.jpeg",
    },
    {
        "id": 2,
        "email": "maria@mail.com",
        "password": "12345",
        "name": "Maria",
        "role": Role.Customer,
        "avatar": "https://i.imgur.com/RQL19O6.jpeg"
    },
    {
        "id": 3,
        "email": "admin@mail.com",
        "password": "admin123",
        "name": "Admin",
        "role": Role.Admin,
        "avatar": "https://i.imgur.com/Dm2pPfd.jpeg"
    },
    {
        "id": 4,
        "email": "A@gmail.com",
        "password": "sdasd",
        "name": "sadsa",
        "role": Role.Admin,
        "avatar": "https://th.bing.com/th/id/OIP.MBlOJPg-beF5E6q2yR5k9gHaLH?pid=ImgDet&rs=1"
    },
    {
        "id": 5,
        "email": "abghi99@gmail.com",
        "password": "abghi12399",
        "name": "Abghi99",
        "role": Role.Customer,
        "avatar": "https://api.lorem.space/image/face?w=640&h=480"
    },
    {
        "id": 6,
        "email": "dasdasd@gml.com",
        "password": "asdasdasdasdasd",
        "name": "dasdasdasd",
        "role": Role.Admin,
        "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867"
    },
    {
        "id": 7,
        "email": "developer@gmail.com",
        "password": "skillbasdasdox",
        "name": "dasdasd",
        "role": Role.Customer,
        "avatar": "https://www.tadviser.ru/images/f/fb/Google_logo_2015.png"
    },
    {
        "id": 8,
        "email": "wonnie8@gmail.com",
        "password": "vince020",
        "name": "Wonnie",
        "role": Role.Customer,
        "avatar": "https://api.escuelajs.co/api/v1/files/2656.jpg"
    },
    {
        "id": 9,
        "email": "agustakut@gmail.com",
        "password": "agus123",
        "name": "Agus",
        "role": Role.Customer,
        "avatar": "https://ui-avatars.com/api/?name=Agus"
    },
    {
        "id": 10,
        "email": "chris3@mail.com",
        "password": "12345",
        "name": "Christian2",
        "role": Role.Admin,
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH01ZJN9-L6VYwouNWGU1mdxm8dp99gjJ2ofi8tNw&s"
    }
]