import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-card-author',
  imports: [],
  templateUrl: './card-author.component.html',
  styleUrl: './card-author.component.css'
})
export class CardAuthorComponent {
  @Input({required: true}) highlightedAuthor!: string;

  get imagePath() {
    return 'images/' + this.highlightedAuthor + '.webp'
  }
}
