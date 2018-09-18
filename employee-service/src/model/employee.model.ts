import { Document, model, Schema, Model } from 'mongoose';

export interface Employee extends Document {
    _id: string;
    name?: string;
    email?: string;
    salary?: number;
    lastUpdate?: Date; 
}

export const EmployeeSchema = new Schema({
    name: { type: String, required: [true, 'Name is required.'] },
    email: { type: String, required: [true, 'Email is required'] },
    salary: { type: Number, required: [true, 'Salary is required'] },
    lastUpdate: { type: Date, default: Date.now }
});

export const EmployeeModel: Model<Employee> = model<Employee>('Employee', EmployeeSchema);
