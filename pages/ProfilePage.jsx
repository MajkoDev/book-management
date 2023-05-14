//? personal profile with your books

import useBookStore from "../store/useBookStore";

const ProfilePage = () => {
  const personals = useBookStore((state) => state.personalBooks);

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
        you have <b>{personals.length}</b> books
      </h3>

      {personals.map((personal) => (
        <h5 key={personal.id}> {personal.title} </h5>
      ))}
    </div>
  );
};

export default ProfilePage;
