import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [UsersModule, ConfigModule.forRoot(
    {envFilePath: '.env'},
    
  )],
})
export class AppModule {}
