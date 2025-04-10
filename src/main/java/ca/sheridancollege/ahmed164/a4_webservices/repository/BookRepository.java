package ca.sheridancollege.ahmed164.a4_webservices.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ca.sheridancollege.ahmed164.a4_webservices.model.Book;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findByTitleContainingIgnoreCase(String title);
}