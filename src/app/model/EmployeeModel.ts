import {IEmployeeDTO} from '../api/employee/employee.dto';

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
    const dto: IEmployeeDTO = {} as any;
    dto.name = this.name;
    dto.key = this.key;
    dto.date_of_birth = this.dateOfBirth.toTimeString();
    dto.position_held = this.positionHeld;
    return dto;
  }

}
