import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between p-4 mt-12 mx-4 items-center border-b-2">
      <h1 className="text-[40px] font-bold ">Knowledge Cafe</h1>
      <img src={profile} />
    </header>
  );
};

export default Header;
