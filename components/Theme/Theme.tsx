import { VscColorMode } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { dark, light } from "../../redux/darkMode/mode";

const Theme = () => {
  const mode = useSelector((state: RootState) => state.mode.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(light())}
        className={`${mode ? "" : "hidden"}`}
      >
        <VscColorMode
          className={` transition duration-500 ease-in-out hover:text-mine w-8 h-8  `}
          color={"#9E1FFF"}
        />
      </button>
      <button
        onClick={() => dispatch(dark())}
        className={`${mode ? "hidden" : ""}`}
      >
        <VscColorMode
          className={`transition duration-500 ease-in-out hover:text-mine w-8 h-8  `}
          color={"#FF0A78 "}
        />
      </button>
    </div>
  );
};

export default Theme;
