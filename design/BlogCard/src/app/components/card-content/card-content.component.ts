import {Component, Input} from '@angular/core';
import {CardContent} from '../../models/card-content.model';

@Component({
  selector: 'app-card-content',
  imports: [],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.css'
})
export class CardContentComponent {
  @Input({required: true}) cardContent!: CardContent;
}
