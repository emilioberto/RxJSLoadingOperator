
import { defer, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { BaseComponent } from './base.component';

/**
 * Handles the loading variable. Sets isLoading to true on subscription and to false on completion.
 * @param component: BaseComponent | { isLoading: boolean }
 */
export function handleLoading<T>(component: BaseComponent | { isLoading: boolean }): (source: Observable<T>) => Observable<T> {
    return function inner(source: Observable<T>): Observable<T> {
        return defer(() => {
            component.isLoading = true;
            return source.pipe(finalize(() => component.isLoading = false));
        });
    };
}
