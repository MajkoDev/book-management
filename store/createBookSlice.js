const createBookSlice = (set, get) => ({
  books: [],
  fetchBooks: async () => {
    const res = await fetch("http://localhost:3000/books");
    set({ books: await res.json() });
  },
});

export default createBookSlice