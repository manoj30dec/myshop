import { inject, provideAppInitializer } from "@angular/core";
import { AuthService } from "./auth-service";
import { firstValueFrom } from "rxjs";
// export const authInitializer = provideAppInitializer(
//     config = inject(AuthService);
//     return config.login()

// )