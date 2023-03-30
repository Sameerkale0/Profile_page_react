import ProfilePhoto from "./components/ProfilePhoto";
import ProfileInfo from "./components/ProfileInfo";
import Icons from "./components/Icons";
import { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [profileData, setProfileData] = useState([]);
  const [currentIcon, setCurrentIcon] = useState("");

  useEffect(() => {
    console.log("calledddddd");
    const fetchData = async () => {
      const result = await fetch("https://randomuser.me/api/");
      const output = await result.json();

      setProfileData(output.results[0]);
    };
    fetchData();
  }, []);

  const handleIconHover = (iconName) => {
    setCurrentIcon(iconName);
  };

  return (
    <div className="container">
      <ProfilePhoto source={profileData?.picture?.large} />
      <ProfileInfo currentIcon={currentIcon} info={profileData} />
      <Icons handleIconHover={handleIconHover} />
    </div>
  );
}

export default App;
