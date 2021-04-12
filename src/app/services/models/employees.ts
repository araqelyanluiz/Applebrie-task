export class Employees {
    picture: any;
    gender: string;
    name: any;
    fullName?: string;
    email: string;
    cell: string;
    location:{
        city:string;
        coordinates:{
            latitude:string;
            longitude:string
        }
        country:string;
        postcode:string;
        state:string;
        street:{
            number:string;
            name:string
        }
    }
    fullAddress:string
}
