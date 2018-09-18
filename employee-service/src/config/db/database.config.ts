import * as Mongoose from 'mongoose';

export function connect(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        Mongoose.connect(
            'mongodb://database/fidelis-corp',
            error => {
                if (error) {
                    return reject(error);
                }
                return resolve('Success');
            }
        );
    });
}
