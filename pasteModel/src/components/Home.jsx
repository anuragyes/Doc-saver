import { Copy, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updatePastes } from "../redux/pasteSlice";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [searchParams, setSearchParams] = useSearchParams(); // Destructure useSearchParams
  const pasteId = searchParams.get("pasteId"); // Get pasteId from the search params
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  const createPaste = () => {
    if (value.length > 0 && title.length > 0) {
      const paste = {
        title: title,
        content: value,
        _id:
          pasteId ||
          Date.now().toString(36) + Math.random().toString(36).substring(2),
        createdAt: new Date().toISOString(),
      };

      if (pasteId) {
        // If pasteId is present, update the paste
        dispatch(updatePastes(paste));
      } else {
        dispatch(addToPastes(paste));
      }

      setTitle("");
      setValue("");

      // Remove the pasteId from the URL after creating/updating a paste
      setSearchParams({});
    } else {
      toast.error("Content and Title cannot be empty.", {
        position: "top-right",
      });
    }
  };

  const resetPaste = () => {
    setTitle("");
    setValue("");
    setSearchParams({});
  };

  useEffect(() => {
    if (pasteId) {
      const paste = pastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, pastes]);

  return (
    <div className="w-full h-full py-10 border-black max-w-[1200px] mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-5 items-start  border-black  ">
        <div className="w-full flex flex-col lg:flex-row gap-y-4 lg:gap-x-4 justify-between items-center font-medium text-2xl text-black">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`${
              pasteId ? "flex-1" : "w-full"
            } text-black border border-input rounded-md p-2  border-black`}
          />
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2  border-black"
            onClick={createPaste}
          >
            {pasteId ? "Update Paste" : "Create My Paste"}
          </button>

          {pasteId && (
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4   focus:ring-blue-300 border-black font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
              onClick={resetPaste}
            >
              <PlusCircle size={20} />
            </button>
          )}
        </div>

        <div className="w-full flex flex-col items-start relative rounded bg-opacity-10 border border-[rgba(128,121,121,0.3)] backdrop-blur-2xl">
          <div className="w-full rounded-t flex items-center justify-between gap-x-4 px-4 py-2 border-b border-[rgba(128,121,121,0.3)]">
            <div className="w-full flex gap-x-[6px] items-center select-none group">
              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(255,95,87)]" />
              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(254,188,46)]" />
              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(45,200,66)]" />
            </div>
            <div className="w-fit rounded-t flex items-center justify-between gap-x-4 px-4">
              <button
                className="flex justify-center items-center transition-all duration-300 ease-in-out group"
                onClick={() => {
                  navigator.clipboard.writeText(value);
                  toast.success("Copied to Clipboard", {
                    position: "top-right",
                  });
                }}
              >
                <Copy className="group-hover:text-success-500" size={20} />
              </button>
            </div>
          </div>

          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Write Your Content Here...."
            className="text-2xl w-full p-3 focus-visible:ring-0"
            style={{ caretColor: "#000" }}
            rows={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
