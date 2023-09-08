import { useEffect, useState } from "react";
import { FormatDate, FormatMoney } from "../Helpers";
import { Close, Notification, Search, SidebarRight } from "../Helpers/icons";
import useCripto from "../hook/UseCripto";
import Modal from "./Modal";

export default function Header() {

  const { HandleModal, money } = useCripto();
  const [close, setClose] = useState<boolean>(false);
  const [notification, setNotification] = useState<boolean>(false);
  const { HandleExpandSidebar } = useCripto();
  const [hour, setHour] = useState<string>("");

  // MANAGE MODAL

  const HandleCloseAppModal = () => {
    HandleModal(true);
    setClose(true);
    setNotification(false);
  }

  const HandleNotificationModal = () => {
    HandleModal(true);
    setNotification(true);
    setClose(false);
  }

  // SEARCH THE CRYPTO

  const handleKey = (e: KeyboardEvent) => {

    if (e.key === 'Enter') {
      console.log("Precionaste enter");
    }

  }

  // ADD The event

  useEffect(() => {
    document.addEventListener('keydown', handleKey, false);

    return () => {
      document.removeEventListener('keydown', handleKey, false);
    };
  }, [])

  // GET THE HOUR

  useEffect(() => {

    const getHour = () => {
      
      let hours: string = new Date(Date.now()).getHours() + ":";

      let minutes: number = new Date(Date.now()).getMinutes();

      let dateToday: string = hours + (minutes < 10 ? `0${minutes}`  : minutes);

      setHour(dateToday);
    }

    setInterval(getHour, 1000);

  }, []);

  return (
    <>
      <header className="fixed right-0 top-0 content-center justify-between w-full flex md:box-border md:pl-52 left-0 text-white p-4 ">

        <div className="hidden md:block">

          <h3 className="text-lg font-bold">Good Luck, Luis!</h3>

          <div className="flex justify-between gap-2 text-gray-400 text-sm">

            <p>{hour}</p>

            <p>{FormatDate(new Date(Date.now()))}</p>

          </div>

        </div>

        {/* Search INPUT  */}

        <div className="flex  flex-1 relative justify-center content-center mr-3">

          <input type="text" placeholder="Search" className="bg-second h-14 border w-full rounded px-4 md:w-1/2" />

          <Search className="-ml-10 mt-4" />

        </div>

        {/* ICONS  */}

        <div className="flex gap-2">

          <SidebarRight onClick={HandleExpandSidebar} size={30} className="cursor-pointer md:hidden" />

          <Notification size={30} className=" cursor-pointer" onClick={HandleNotificationModal} />

          <Close size={30} className=" cursor-pointer" onClick={HandleCloseAppModal} />

        </div>


      </header>

      {/* MODAL TO CLOSE THE APP  */}

      {close && (
        <Modal title="See you later" Description="You can invest in all the cryptocurrencies that exist, you must invest intelligently">

          <h4 className="text-lg my-8">You have this mount of money:
            <span className="font-bold text-naranja"> {FormatMoney(money)} </span></h4>

          <div className="flex justify-between w-full gap-2">

            <button className="bg-naranja font-bold  text-xl w-full  text-white px-6 py-3 rounded-lg hover:bg-red-800
              transition-all duration-400 uppercase"
              onClick={() => HandleModal(false)}>Logout</button>

            <button className="bg-second  font-bold text-xl w-full  text-white px-6 py-3 rounded-lg hover:bg-gray-800
              transition-all duration-400 uppercase"
              onClick={() => HandleModal(false)}>Cancel</button>
          </div>
        </Modal>
      )}

      {/* MODAL TO SHOW NOTIFICATION */}

      {notification && (

        <Modal title="Notification" >

          <h4 className="text-lg my-8 uppercase font-extrabold">You dont have notification</h4>

          <button className="bg-second  font-bold text-xl w-1/2  text-white px-6 py-3 rounded-lg hover:bg-gray-800
             transition-all duration-400 uppercase"
            onClick={() => HandleModal(false)}>Close</button>
        </Modal>
      )}

    </>
  )
}
