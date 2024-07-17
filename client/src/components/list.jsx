import KebabMenu from "../assets/kebabMenu";
import AddTask from "../assets/addTask";

function List(props) {
  return (
    <div className="w-72 mx-auto h-fit shadow-md pb-6 ">
      <div className="flex justify-around items-center py-2">
        <h1 className="font-bold grow ml-1">{props.category}</h1>
        <div className="cursor-pointer">
          <KebabMenu />
        </div>
      </div>
      <div className="border-black border-dashed border-[1px] flex justify-center py-[0.125rem] rounded-sm mt-2 w-[96%] mx-auto">
        <div className=" cursor-pointer">
          <AddTask />
        </div>
      </div>
    </div>
  );
}

export default List;
