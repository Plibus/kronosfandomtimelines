import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../../post.component';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent extends PostComponent implements OnInit {


}
