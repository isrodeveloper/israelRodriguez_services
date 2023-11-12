import { DynamicModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";
import { ConnectionOptions } from "typeorm";
import { Environment } from "src/common/environment.enum";

export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    async useFactory(config: ConfigService){
        const isDevelopementEnv = config.get("NODE_ENV")!== Environment.Production;
            const dbConfig = {
                type: 'postgres',
                host: 'localhost',
                port :5432,
                username:'admin',
                password : 'my-weak-password',
                database:'postgres',
                autoLoadEntities:true,
                synchronize:true
            } as ConnectionOptions;
            return dbConfig;
        },});