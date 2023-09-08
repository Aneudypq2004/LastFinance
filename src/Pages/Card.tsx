import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { IcardData } from "../types";
import Modal from "../Components/Modal";
import useCripto from "../hook/UseCripto";
import { IconAlertTriangle, IconX } from "@tabler/icons-react";
import { GetNewId } from "../Helpers";
import UseUser from "../hook/UseUser";

export default function CardsPage() {

  // DATA CARD

  const [OwnerCard, setOwnerCard] = useState<string>("");
  const [NumberCard, setNumberCard] = useState<string>("");
  const [CodeSecurity, setCodeSecurity] = useState<string>("");
  const [Expiration, setExpiration] = useState<string>("");
  const [Month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const [error, setError] = useState("");
  const [showBack, setShowBack] = useState<boolean>(false);
  const [years, setYears] = useState<number[]>([]);


  // SELECT DATE

  const Months: string[] = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // YEARS

  useEffect(() => {

    let array = [];

    for (let i = 2024; i <= 2050; i++) {
      array.push(i);
    }

    setYears(array)

  }, [])

  // CARDS

  const [cards, setCards] = useState<IcardData[]>(JSON.parse(localStorage.getItem("Card") ?? '[]'));

  // GET THE CARDS ADDED

  const cardExample: IcardData = {
    cardId: "12345",
    OwnerCard,
    NumberCard,
    CodeSecurity,
    Expiration: Month + '/' + year
  }

  const cardDefault: IcardData = {
    cardId: "12345",
    OwnerCard: "Luis Aneudy De Los Santos",
    NumberCard: "99393932",
    CodeSecurity: "211",
    Expiration: "1/29"
  }

  // SHOW MODAL

  const [openModal, setOpenModal] = useState<boolean>(false);

  const { HandleModal } = useCripto();

  const handleAddCard = () => {
    HandleModal(true);
    setOpenModal(true);
  }

  // ADD THE NEW CAR TO localStorage
  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    setExpiration(Month + '/' + year);

    // VALIDATE

    if (OwnerCard.length == 0 || NumberCard.trim().length == 0 || CodeSecurity.trim().length == 0
    ) {

      setError("All field are required");

      setTimeout(() => {

        setError("");

      }, 5000);

      return;
    }

    if (NumberCard.length != 16) {

      setError("The Number card must have 16 digit");

      setTimeout(() => {

        setError("");

      }, 5000);

      return;

    }

    if (CodeSecurity.length != 3) {

      setError("The code must have 3 digit");

      setTimeout(() => {

        setError("");

      }, 5000);

      return;

    }

    const cardId = GetNewId();

    localStorage.setItem("Card", JSON.stringify([...cards, {
      cardId, OwnerCard, NumberCard, CodeSecurity, Expiration
    }]));

    setCards(JSON.parse(localStorage.getItem("Card") ?? '[]'));

    // RESET STATES

    setOwnerCard("");
    setNumberCard("");
    setCodeSecurity("");
    setExpiration("");
    setMonth("");
    setYear("");

    setTimeout(() => {
      HandleModal(false);
      setOpenModal(false);
    }, 1000);
  }


  // DELETE ALERT

  const handleDeleteAlert = () => {
    setError("");
  }

  // Delete a card

  const handleDeleteCard = (id: string) => {

    const newCards: IcardData[] = cards.filter(card => card.cardId != id);

    setCards(newCards);

    localStorage.setItem("Card", JSON.stringify(newCards));
  }


  return (
    <>

      <h1 className="text-naranja text-center text-2xl font-bold">My cards</h1>

      <button onClick={handleAddCard} className="text-center text-white uppercase mt-4 px-4 py-2 rounded bg-naranja font-bold">Add Card</button>

      <section className="flex flex-wrap mt-4 gap-4 justify-center md:justify-start">

        {cards.length > 0 ? cards.map((card: IcardData) => (

          <div key={card.cardId} className="relative">

            <IconX className="absolute top-1 right-2 text-naranja z-50 cursor-pointer"
              onClick={() => handleDeleteCard(card.cardId)} size={29} />

            <Card CardData={card} />

          </div>
        )

        ) : < Card CardData={cardDefault} />}

      </section>

      {/* MODAL  */}

      {openModal && (

        <Modal>

          <div className="flex justify-center -mb-14">

            <Card isShowBack={showBack} CardData={cardExample} />

          </div>

          {/* Alert */}

          {error && (

            <div onClick={handleDeleteAlert} className="text-center relative text-2xl p-2 
            px-8 rounded bg-red-700 mb-2 text-white uppercase font-bold">

              <IconAlertTriangle className="absolute" size={30} />

              <h4>{error}</h4>

            </div>
          )}

          <form onSubmit={handleSubmit} action="" className="border pt-8 border-naranja rounded py-4 px-2">

            {/* owner name  */}

            <fieldset>

              <label className="uppercase my-2 block  font-bold text-sm text-gray-700" htmlFor="Owner">Owner Card</label>

              <input className="w-full border-naranja rounded outline-none border py-2 px-4" id="Owner"
                type="text" placeholder="Owner Card" required
                onFocus={() => setShowBack(false)}
                value={OwnerCard}
                onChange={e => setOwnerCard(e.target.value)} />

            </fieldset>


            {/* // Number card  */}


            <fieldset>

              <label className="uppercase my-2 block  font-bold text-sm text-gray-700" htmlFor="NumberCard">Number Card</label>

              <input className="w-full border-naranja rounded outline-none border py-2 px-4" id="NumberCard"
                type="text" placeholder="Number of the Card" required
                value={NumberCard}
                onChange={e => setNumberCard(e.target.value)} />

            </fieldset>



            {/* DATE Expiration  */}

            <fieldset>

              <label className="uppercase my-2 block  font-bold text-sm text-gray-700" htmlFor="Expiration">Date Expiration</label>

              <div className="flex gap-4">

                <select name="month" value={Month} className="w-full border-naranja rounded border py-2 px-4"

                  onChange={e => setMonth(e.target.value)}>

                  <option disabled>Months</option>

                  {Months.map((month, i) => (

                    <option key={month} value={i + 1}>{month}</option>

                  ))};

                </select>

                {/* GENERATE YEAR */}

                <select className="w-full border-naranja rounded border py-2 px-4" id="Expiration" name="year" value={year}
                  onChange={e => setYear(e.target.value)}>

                  <option value="" disabled defaultValue={0}>Year</option>

                  {years && years.map(year => (
                    <option key={year} value={year - 2000}> {year} </option>
                  ))}

                </select>

              </div>

            </fieldset>

            {/* Code Security  */}

            <fieldset>

              <label className="uppercase my-2 block  font-bold text-sm text-gray-700" htmlFor="Code">Code</label>

              <input className="w-full border-naranja rounded outline-none border py-2 px-4" id="Code"
                type="text" placeholder="Code eg: 999" maxLength={3}
                onChange={e => setCodeSecurity(e.target.value)}
                onFocus={() => setShowBack(true)}
                value={CodeSecurity}
              />

            </fieldset>

            {/* Buttons  */}

            <div className="flex justify-between w-full gap-2 mt-4">

              <button className="bg-naranja font-bold  text-xl w-full  text-white px-6 py-3 rounded-lg hover:bg-red-800
                 transition-all duration-400 uppercase"
                type="submit"
              >Add</button>

              <button className="bg-second  font-bold text-xl w-full  text-white px-6 py-3 rounded-lg hover:bg-gray-800
                 transition-all duration-400 uppercase"
                type="button"
                onClick={() => { HandleModal(false); setOpenModal(false) }}>Cancel</button>

            </div>
          </form>
        </Modal>
      )}
    </>
  )
}
