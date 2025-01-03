import {Component, Input} from '@angular/core';
import {CardContentComponent} from '../card-content/card-content.component';
import {CardContent} from '../../models/card-content.model';
import {CardAuthorComponent} from '../card-author/card-author.component';

@Component({
  selector: 'app-blog-card',
  imports: [
    CardContentComponent,
    CardAuthorComponent
  ],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {
  @Input({required: true}) blogCard!: CardContent;

}
