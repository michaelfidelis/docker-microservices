import * as Express from 'express';
import { EmployeeController } from './controller/employee.controller';

export class App {
    public server: Express.Application;
    private employeeController: EmployeeController;

    constructor(server: Express.Application) {
        this.server = server;
        this.employeeController = new EmployeeController();

        this.server.get('/employees', this.employeeController.list);
        this.server.post('/employees', this.employeeController.add);
        this.server.put('/employees/:id', this.employeeController.update);
        this.server.get('/employees/:id', this.employeeController.getById);
        
    }
}

