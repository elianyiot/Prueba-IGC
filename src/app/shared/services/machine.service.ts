import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Machine } from '../interface/machine.interface';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  private readonly machinesUrl = 'json/machines.json';

  constructor(private http: HttpClient) {}

  getMachines(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.machinesUrl).pipe(
      map(machines =>
        machines.map(m => ({
          ...m,
          lastSync: new Date(m.lastSync)
        }))
      )
    );
  }
}
