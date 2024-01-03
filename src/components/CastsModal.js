import MuiModal from "@mui/material/Modal";
export default function CastModal(props) {
  let { open, setOff, casts } = props;
  let { temp, title } = casts;
  let mainImg, actorName;
  if (open) {
    mainImg = temp[0]?.img;
    actorName = temp[0]?.name;
    temp = temp.filter((_el, i) => i !== 0);
  }
  return (
    <MuiModal
      open={open}
      onClose={setOff}
      className="py-12 bg-gray-700 bg-opacity-50 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 "
    >
      <div
        role="alert"
        className=" container mx-auto w-11/12 md:w-2/3 max-w-[40%] "
      >
        <div className="relative py-4 px-5 md:px-5 bg-white shadow-md rounded border border-gray-400">
          <h1 className="text-gray-800 text-2xl font-bold tracking-normal leading-tight mb-1">
            {title + " Actors"}
          </h1>
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-[50%] px-4">
              <img
                src={mainImg}
                alt={actorName}
                className="shadow rounded max-w-full h-auto align-middle border-none"
              />
            </div>
            <div className="flex mt-5 justify-center items-center">
              {temp?.map((el, i) => (
                <div className="w-[30%] px-4" key={i}>
                  <img
                    src={el?.img}
                    alt={el?.name}
                    className="shadow rounded max-w-full h-auto align-middle border-none"
                  />
                </div>
              ))}
            </div>
          </div>
          <div
            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
            aria-label="close modal"
            role="button"
            onClick={setOff}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
      </div>
    </MuiModal>
  );
}
