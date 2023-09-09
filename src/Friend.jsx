export default function Friend({ friend }) {
  const { name, email, phone, website, id } = friend;

  return (
    <div className="box">
      <h4>Name: {name}</h4>
      <p>ID: {id}</p>
      <p>Email: {email} </p>
      <p>Phone: {phone} </p>
      <p>Website: {website} </p>
    </div>
  );
}
