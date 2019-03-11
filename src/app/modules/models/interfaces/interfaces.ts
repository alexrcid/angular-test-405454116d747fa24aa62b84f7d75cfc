export interface InterfaceUser {
    id: Number;
    name: string;
    username: string;
    email: string;
    adress: {
        street: string;
        suite: string;
        city: string;
        zipcode: Number;
        geo: {
        lat: Number;
        lng: Number;
        };
    };
    phone: Number;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export interface InterfacePost {
    userId: Number;
    id: Number;
    title: string;
    body: string;
}