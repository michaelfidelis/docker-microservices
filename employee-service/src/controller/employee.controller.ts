import * as Express from 'express';
import { Employee } from '../model/employee.model';
import { EmployeeRepository } from '../repository/employee.repository';
import { ErrorModel } from '../model/error.model';

export class EmployeeController {
    public async list(request: Express.Request, response: Express.Response) {
        const repository = new EmployeeRepository();
        repository
            .list(request.query.limit, request.query.offset)
            .then((employees: Employee[]) =>
                response.status(200).send(employees)
            )
            .catch(error => {
                return response
                    .status(500)
                    .send(new ErrorModel(500, error.message));
            });
    }

    public async add(request: Express.Request, response: Express.Response) {
        const repository = new EmployeeRepository();
        repository
            .add(request.body)
            .then((employee: Employee) => response.status(201).send(employee))
            .catch(error => {
                return response
                    .status(500)
                    .send(new ErrorModel(500, error.message));
            });
    }

    public async update(request: Express.Request, response: Express.Response) {
        const repository = new EmployeeRepository();
        let employee: Employee = request.body;
        employee._id = request.params.id;
        employee.lastUpdate = new Date();
        repository
            .update(employee)
            .then((employee: Employee) => response.status(200).send(employee))
            .catch(error => {
                return response
                    .status(500)
                    .send(new ErrorModel(500, error.message));
            });
    }

    public async getById(request: Express.Request, response: Express.Response) {
        const repository = new EmployeeRepository();
        repository
            .getById(request.params.id)
            .then((employee: Employee) => response.status(200).send(employee))
            .catch(error => {
                return response
                    .status(500)
                    .send(new ErrorModel(500, error.message));
            });
    }
}
