import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mssql',
    host: 'localhost',
    username: 'sa',
    password: 'asheEHop19',
    entities: [__dirname + '/../**/*.entity.{js, ts}'],
    database: 'sample_nestjs',
    synchronize: false,
    logging: true,
}