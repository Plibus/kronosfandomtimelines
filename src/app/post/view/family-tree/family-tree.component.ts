import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../../post.component';

@Component({
  selector: 'family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.css']
})
export class FamilyTreeComponent extends PostComponent implements OnInit {

}
