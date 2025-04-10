import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model';

@Component({
    selector: 'app-find',
    templateUrl: './find.component.html',
})
export class FindComponent {
    title: string = '';
    foundBooks: Book[] = [];

    constructor(private bookService: BookService) {}

    searchBooks(): void {
        this.bookService.findByTitle(this.title).subscribe((results) => {
            this.foundBooks = results;
        });
    }
}
