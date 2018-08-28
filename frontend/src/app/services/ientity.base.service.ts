import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IEntityBaseService<T> {
    getAll(): Observable<T[]>;

    getById(id: string): Observable<T>;

    // create(item: T): Observable<T> {
    // }

    // update(item: T): Observable<T> {
    // }

    // delete(id: number) {
    // }

}
