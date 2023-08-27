import { useForm } from "react-hook-form";
import AddIcon from "../../assets/icon/AddIcon";

const Add = () => {
  const showModal = () => {
    window.myModal.showModal();
  };

  const { register } = useForm();

  const form = new FormData();

  return (
    <>
      <div
        className="fixed rounded-full bg-zinc-600 bottom-20 right-10 p-2 cursor-pointer hover:scale-110 transition-all"
        onClick={showModal}
      >
        <div>
          <AddIcon />
        </div>
      </div>
      <dialog id="myModal" className="modal">
        <form method="dialog" className="modal-box ">
          <div className="">
            <label className="label">
              <label className="label-text">title</label>
            </label>
            <input type="text" className="w-full input input-bordered" />
          </div>
          <div>
            <label className="label">
              <label className="label-text">contnet</label>
            </label>
          </div>
          <div>
            <textarea className="w-full textarea textarea-bordered"></textarea>
          </div>
          <div>
            <label className="label">
              <label className="label-text">foto</label>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-md w-full "
            />
          </div>
          <button className="mt-2 btn  rounded-sm">Upload</button>
        </form>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Add;
