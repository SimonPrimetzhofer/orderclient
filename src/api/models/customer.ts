/* tslint:disable */
import { Group } from './group';
export interface Customer {
  id: number;
  name: string;
  rank: string;
  groupId: number;
  group: Group;
}
