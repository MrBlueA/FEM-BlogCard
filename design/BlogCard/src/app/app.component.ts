import { Component } from '@angular/core';
import {CardContent} from './models/card-content.model';
import {BlogCardComponent} from './components/blog-card/blog-card.component';

@Component({
  selector: 'app-root',
  imports: [BlogCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  blogCard: CardContent = {
    category: 'Learning',
    date: 'Published 21 Dec 2023',
    title: 'HTML & CSS foundations',
    description: 'These languages are the backbone of every website, defining structure, content, and presentation.',
    author: 'Greg Hooper',
    cardThumbnail: 'images/illustration-article.svg'
  };
}
