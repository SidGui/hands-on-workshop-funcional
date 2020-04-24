"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = {
    type: 'mssql',
    host: 'localhost',
    username: 'sa',
    password: 'asheEHop19',
    entities: [__dirname + '/../**/*.entity.{js, ts}'],
    database: 'sample_nestjs',
    synchronize: false,
    logging: true,
};
//# sourceMappingURL=typeorm.config.js.map