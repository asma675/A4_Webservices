import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
    selector: 'app-delete',
    templateUrl: './delete.component.html',
})
export class DeleteComponent {
    id!: number;

    constructor(private bookService: BookService) {}

    deleteBook(): void {
        this.bookService.deleteBook(this.id).subscribe(() => {
            alert('Book deleted.');
            this.id = 0;
        });
    }
}
