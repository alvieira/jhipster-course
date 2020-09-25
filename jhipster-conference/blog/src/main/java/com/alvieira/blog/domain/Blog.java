package com.alvieira.blog.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * A Blog.
 */
@Document(collection = "blog")
public class Blog implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Field("title")
    private String title;

    @NotNull
    @Field("author")
    private String author;

    @Field("post")
    private byte[] post;

    @Field("post_content_type")
    private String postContentType;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public Blog title(String title) {
        this.title = title;
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public Blog author(String author) {
        this.author = author;
        return this;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public byte[] getPost() {
        return post;
    }

    public Blog post(byte[] post) {
        this.post = post;
        return this;
    }

    public void setPost(byte[] post) {
        this.post = post;
    }

    public String getPostContentType() {
        return postContentType;
    }

    public Blog postContentType(String postContentType) {
        this.postContentType = postContentType;
        return this;
    }

    public void setPostContentType(String postContentType) {
        this.postContentType = postContentType;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Blog)) {
            return false;
        }
        return id != null && id.equals(((Blog) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Blog{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", author='" + getAuthor() + "'" +
            ", post='" + getPost() + "'" +
            ", postContentType='" + getPostContentType() + "'" +
            "}";
    }
}
