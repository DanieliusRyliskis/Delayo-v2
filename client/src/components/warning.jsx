import Danger from "../assets/danger";

function Warning(props) {
  return (
    <div className="w-4/5 mx-auto flex items-center bg-[#FFBEBE] py-3 rounded-md">
      <div className="ml-2 mr-1">
        <Danger />
      </div>
      <h2 className="text-sm text-[#5F0505]">{props.err}</h2>
    </div>
  );
}

export default Warning;
