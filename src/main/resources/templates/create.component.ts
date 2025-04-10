import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
})
export class CreateComponent {
    book: Book = {
        title: '',
        authorName: '',
        price: 0,
        quantity: 0
    };

    constructor(private bookService: BookService) {}

    onSubmit() {
        this.bookService.createBook(this.book).subscribe(() => {
            alert('Book has been added.');
            this.book = { title: '', authorName: '', price: 0, quantity: 0 };
        });
    }
}
