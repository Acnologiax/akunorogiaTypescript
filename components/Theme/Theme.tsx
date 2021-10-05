import { VscColorMode } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useTheme } from "next-themes";
const Theme = () => {
  const { theme, setTheme } = useTheme();

  const mode = useSelector((state: RootState) => state.mode.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`${mode ? "" : "hidden"}`}
      >
        {theme === "light" ? (
          <VscColorMode
            className={`transition duration-500 ease-in-out hover:text-mine w-8 h-8  `}
            color={"#FF0A78 "}
          />
        ) : (
          <VscColorMode
            className={` transition duration-500 ease-in-out hover:text-mine w-8 h-8  `}
            color={"#9E1FFF"}
          />
        )}
      </button>
    </div>
  );
};

export default Theme;
