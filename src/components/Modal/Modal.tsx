import React from "react";
import { Project } from "../../utils/types";
import ImageCarousel from "../ImageCarousel/imageCarousel";
import SkillBadge from "../skillBadge";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: Project | null;
}

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, data }) => {
  //   const [showModal, setShowModal] = React.useState(false);
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto no-scrollbar fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm md:max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-BgDarkGray outline-none focus:outline-none">
                <div className="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-lg md:text-3xl font-semibold">
                    {data?.name}
                  </h3>
                  {data?.liveLink && (
                    <button
                      onClick={() => openInNewTab(data.liveLink)}
                      className="flex-2 text-left text-green-500 font-semibold text-xs md:text-base border-green-500 border-2 rounded-md m-2 mb-0 p-2"
                    >
                      Visit Website
                    </button>
                  )}
                </div>
                {data && (
                  <div className="relative p-6 flex-col h-[350px] md:h-[600px] overflow-y-auto gap-0">
                    <ImageCarousel images={data.images} autoplay={true} />
                    <p className="text-sm md:text-lg text-gray-300 mt-6">
                      {data.description}
                    </p>
                    <h1 className="text-lg md:text-2xl text-white font-semibold mt-6">
                      Technologies Used
                    </h1>
                    {data.skills.length === 0 && (
                      <p className="text-lg text-center text-gray-300 mt-6">
                        No skills Added
                      </p>
                    )}
                    {data.skills.length > 0 && (
                      <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
                        {data.skills.map((item, index) => {
                          return <SkillBadge data={item} key={index} />;
                        })}
                      </div>
                    )}
                    <h1 className="text-lg md:text-2xl text-white font-semibold mt-6">
                      Features
                    </h1>
                    {data.projectFeatures.length > 0 && (
                      <ul className="list-disc mx-10 my-3 space-y-3">
                        {data.projectFeatures.map((item, index) => {
                          return <li key={index} className="text-gray-300 text-sm md:text-base">{item}</li>;
                        })}
                      </ul>
                    )}
                  </div>
                )}
                {/*footer*/}
                <div className="flex items-center justify-end p-3 border-t border-solid border-gray-500 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
