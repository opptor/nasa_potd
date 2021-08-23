import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PotdModel } from './potd.model';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PotdService {
    public currentPotd$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(
        private _http: HttpClient
    ) {
        this.getCurrentPicture();
    }

    public getCurrentPicture(): void {
        this._http.get<PotdModel>('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .pipe(take(1)).subscribe((response) => {
                this.currentPotd$.next(response);
            });
    }
}