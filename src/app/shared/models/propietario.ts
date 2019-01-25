import { Moment } from 'moment';
import * as moment from 'moment';

export interface Owner {
    id?: number;
    firstName: string;
    lastName: string;
    birthDay: Moment;
    address: string;
    city: number;
    telephone: string;
    version?: number;
}

export class Owner {
    constructor(parameters?: any) {
        // if (parameters) {
        //     Object.assign(this, parameters);
        //     if (parameters.birthDay && typeof parameters.birthDay === 'string') {
        //         const splitDate = parameters.fechaNacimiento.split('/');
        //         this.fechaNacimiento = moment(`${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`);
        //     }
        // }
    }
}
