import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mssql',
    host: 'localhost',
    username: 'sa',
    password: 'wow-nice-sample',
    entities: [__dirname + '/../**/*.entity.{js, ts}'],
    database: 'sample_nestjs',
    synchronize: false,
    logging: false,
}

