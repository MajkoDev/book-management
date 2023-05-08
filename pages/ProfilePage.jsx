//? personal profile with your books

const ProfilePage = () => {
  return (
    <div>
      <h1>Profile</h1>
      <p>personal profile with your books</p>

      <div className="personal_info">
        <div id="person_avatar"></div>
        <div id="person_information"></div>

      </div>

      <div className="personal_lists">
        <div id="list_read"></div>
        <div id="list_reading"></div>
        <div id="list_to-read"></div>
      
      </div>
    </div>
  );
};

export default ProfilePage;
