export const Home = ({ books, children, addBook }) => {
  console.log("props.books", books);

  return (
    <>
      {children}
      <button
        className="btn"
        onClick={() =>
          addBook({
            id: books.length + 1,
            title: `Title ${books[books.length - 1].id + 1}`,
            description: `description ${books[books.length - 1].id + 1}`,
          })
        }
      >
        Add
      </button>
    </>
  );
};
