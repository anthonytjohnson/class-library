class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = {};
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

  getAverageRating() {
    let ratingsSum = this._ratings.reduce((acc, rating) => acc + rating, 0);
    return ratingsSum / this._ratings.length;
  }

  addRating(rating) {
    this._ratings.push(rating);
    return this._ratings;
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}