import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEntityBaseService } from './ientity.base.service';

export abstract class EntityBaseService<T> implements IEntityBaseService<T> {
    constructor(protected _httpClient: HttpClient, protected actionUrl: string) {
    }

    getAll(): Observable<T[]> {
        return this._httpClient.get<T[]>(this.actionUrl);
    }

    getById(id: string): Observable<T> {
        return this._httpClient.get<T>(`${this.actionUrl}${id}`);
    }

    create(item: T):  Observable<T> {
        console.log(item);
        return this._httpClient.post<T>(`${this.actionUrl}`, item);
    }

    update(id: string, item: T): Observable<T> {
        return this._httpClient.put<T>(`${this.actionUrl}${id}`, item);
    }

    // delete(id: number) {
    // }

}
