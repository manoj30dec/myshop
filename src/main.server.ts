import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

// const bootstrap = () => bootstrapApplication(App, config);

// export default bootstrap;
// export default function bootstrap() {
//     return bootstrapApplication(App, config);
// }

const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);

export default bootstrap;