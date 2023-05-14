const createBookSlice = (set, get) => ({
  books: [],
  personalBooks: [],
  fetchBooks: async () => {
    const res = await fetch("http://localhost:3000/books");
    set({ books: await res.json() });
  },
  addBook: (book) =>
    set({
      personalBooks: [...new Set([...get().personalBooks, book])]
    }),
});

{
  /*

      personalBooks: [...get().personalBooks, book]
        => this adds same user multiple times
            we have changed it with Set object (makes sure that data in array is unique)
            then spreading the value of Set to new array

    */
}

export default createBookSlice;
