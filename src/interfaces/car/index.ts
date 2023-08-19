import { BookingInterface } from 'interfaces/booking';
import { DriverInterface } from 'interfaces/driver';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  model: string;
  year: number;
  color: string;
  license_plate: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  driver?: DriverInterface[];

  _count?: {
    booking?: number;
    driver?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  model?: string;
  color?: string;
  license_plate?: string;
  status?: string;
}
