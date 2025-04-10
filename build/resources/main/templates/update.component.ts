import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model';

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
})
export class UpdateComponent implements OnInit {
    books: Book[] = [];

    constructor(private bookService: BookService) {}

    ngOnInit(): void {
        this.fetchBooks();
    }

    fetchBooks(): void {
        this.bookService.getAll().subscribe((data) => {
            this.books = data.map(book => ({ ...book, edit: false }));
        });
    }

    saveChanges(book: Book): void {
        if (book.edit) {
            this.bookService.updateBook(book.id!, book).subscribe(() => {
                book.edit = false;
                alert('Book details updated.');
            });
        }
    }
}
