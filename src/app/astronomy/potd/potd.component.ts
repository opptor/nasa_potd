import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PotdModel } from './potd.model';
import { PotdService } from './potd.service';

@Component({
  selector: 'app-potd',
  templateUrl: './potd.component.html',
  styleUrls: ['./potd.component.scss']
})
export class PotdComponent implements OnInit {
  public model$ :BehaviorSubject<PotdModel> = new BehaviorSubject<PotdModel>(new PotdModel());

  constructor(private __potdService: PotdService) { }

  ngOnInit(): void {
    this.model$ = this.__potdService.currentPotd$;
  }

}
