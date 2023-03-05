import {getBaseUrl} from "./main";

export { AppServerModule } from './app/app.server.module';

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
