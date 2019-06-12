import {IEmployeeDTO} from '../api/employee/employee.dto';
import {parseDate} from '../utils/dateUtils';

/**
 * Employee Model
 */
export class EmployeeModel {

  key: number;
  name: string;
  dateOfBirth: Date;
  positionHeld: string;

  public static fromDTO(employeeDTO: IEmployeeDTO): EmployeeModel {
    const employeeModel = new EmployeeModel();
    employeeModel.name = employeeDTO.name;
    employeeModel.key = employeeDTO.key;
    employeeModel.dateOfBirth = new Date(employeeDTO.date_of_birth);
    employeeModel.positionHeld = employeeDTO.position_held;
    return employeeModel;
  }

  public toDTO(): IEmployeeDTO {
    // console.log('dob', this.dateOfBirth);
    // console.log('this', this);
    const dto: IEmployeeDTO = {} as any;
    dto.name = this.name;
    dto.key = this.key;
    const dateObj: Date = parseDate(this.dateOfBirth);
    dto.date_of_birth = dateObj.toLocaleDateString();
    dto.position_held = this.positionHeld;
    return dto;
  }

}
