import { Employee, EmployeeModel } from '../model/employee.model';

export class EmployeeRepository {
    list(limit: number = 10, offset: number = 0): Promise<Employee[]> {
        return new Promise<Employee[]>(async (resolve, reject) => {
            return await EmployeeModel.find()
                .limit(limit)
                .skip(offset)
                .then(docs => resolve(docs))
                .catch(error => reject(error));
        });
    }

    add(employee: Employee): Promise<Employee> {
        return new Promise<Employee>(async (resolve, reject) => {
            return EmployeeModel.create(employee)
                .then(docs => resolve(docs))
                .catch(error => reject(error));
        });
    }

    update(employee: Employee): Promise<Employee> {
        return new Promise<Employee>(async (resolve, reject) => {
            return EmployeeModel.findByIdAndUpdate(employee._id, employee)
                .then(() => resolve(employee))
                .catch(error => reject(error));
        });
    }

    getById(_id: string): Promise<Employee> {
        return new Promise<Employee>(async (resolve, reject) => {
            return EmployeeModel.findById(_id)
                .then(doc => resolve(doc))
                .catch(error => reject(error));
        });
    }

    
}
