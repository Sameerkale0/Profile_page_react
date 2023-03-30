export default function ProfileInfo({ info, currentIcon }) {
  let renderedInfo = `${info?.name?.title} ${info?.name?.first} ${info?.name?.last}`;

  if (currentIcon === "person") {
    renderedInfo = `${info.name.title} ${info.name.first} ${info.name.last}`;
  } else if (currentIcon === "call") {
    renderedInfo = `${info.phone}`;
  } else if (currentIcon === "mail") {
    renderedInfo = `${info.email}`;
  } else if (currentIcon === "location") {
    renderedInfo = `${info.location.city}, ${info.location.country}`;
  } else if (currentIcon === "calendar") {
    const date = new Date(info.dob.date);
    renderedInfo = date.toDateString();
  } else if (currentIcon === "linkedin") {
    renderedInfo = `${info.login.username}`;
  }
  return <div>{renderedInfo}</div>;
}
