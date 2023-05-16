//? personal profile with your books

import PersonalItem from "../components/PersonalItem";
import useBookStore from "../store/useBookStore";

const ProfilePage = () => {
  const personalBooks = useBookStore((state) => state.personalBooks);
  const deleteBook = useBookStore((state) => state.deleteBook);

  function removeBook() {
   deleteBook(personal.id);
  }

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: "40px " }}>Profile</h1>
      <h3
        style={{
          color: "darkred",
          fontWeight: "400",
          fontSize: "16px",
          marginBottom: "20px",
          textTransform: "uppercase",
        }}
      >
        you have <b>{personalBooks.length}</b> books
      </h3>

      {personalBooks.map((personal) => (
        <PersonalItem personal={personal} />
      ))}
    </div>
  );
};

export default ProfilePage;
