import { Moment } from 'moment';

export interface Mascota {
    id?: number;
    nombre: string;
    fechaNacimiento: Moment;
    fechaFallecimiento?: Moment;
    estado: string;
    propietarioId: number;
    tipoId: number;
    version?: number;
}

