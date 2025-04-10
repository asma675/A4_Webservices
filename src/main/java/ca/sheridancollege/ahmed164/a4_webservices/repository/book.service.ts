import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    private apiUrl = 'http://localhost:8080/api/books';

    constructor(private httpClient: HttpClient) {}

    addBook(data: Book): Observable<Book> {
        return this.httpClient.post<Book>(this.apiUrl, data);
    }

    getBooks(): Observable<Book[]> {
        return this.httpClient.get<Book[]>(this.apiUrl);
    }

    searchByTitle(title: string): Observable<Book[]> {
        return this.httpClient.get<Book[]>(`${this.apiUrl}/search?title=${title}`);
    }

    editBook(bookId: number, updatedData: Book): Observable<Book> {
        return this.httpClient.put<Book>(`${this.apiUrl}/${bookId}`, updatedData);
    }

    removeBook(bookId: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.apiUrl}/${bookId}`);
    }
}
