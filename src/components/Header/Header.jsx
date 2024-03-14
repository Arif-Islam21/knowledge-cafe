import profile from "../../../src/knowled cafe/front-view-cup-cappuccino-with-cookies-book-table.jpg";

const Header = () => {
  return (
    <header className="flex p-4 mx-4 items-center  border-b-2 justify-between">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img className="w-12 rounded-full  h-12" src={profile} alt="" />
    </header>
  );
};

export default Header;
