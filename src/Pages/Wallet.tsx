import { useState, useEffect } from "react"
import { IapiCripto } from '../types'
import { toast } from "react-toastify";

import { Popover } from '@headlessui/react'
import Spinner from "../Components/Spinner";
import BarChart from "../Components/BarChat";
import LineChart from "../Components/LineChart";


export default function Wallet() {

  const [criptos, SetCriptos] = useState<string[]>([]);

  const [criptosInfo, setCriptosInfo] = useState<IapiCripto[]>([]);

  const [load, setLoad] = useState<boolean>();


  useEffect(() => {

    let api_url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,ADA,SOL,LTC, Dcoin&tsyms=USD,EUR";


    // DO THE REQUEST

    const getCriptoData = async () => {

      try {

        setLoad(true);

        const req: Response = await fetch(api_url);

        const response = await req.json();

        setLoad(false);

        setCriptosInfo(response.DISPLAY);

      } catch (error) {

        toast.error("upsss");
        setLoad(false);

      }
    }

    getCriptoData();
  }, [])

  useEffect(() => {

    SetCriptos(Object.keys(criptosInfo));

  }, [criptosInfo])

  return (
    <>
      {load ? (

        <Spinner />

      ) : (

        <section>

          <table className="bg-second text-center w-full rounded p-4 table-fixed border-collapse">

            {/* Table head  */}

            <thead className="text-white border-b pb-4">

              <tr>

                <th>
                  <button className="bg-green-400 hover:bg-green-600 px-4 py-2 rounded">Add</button>
                </th>

                <th>Value</th>

                <th>Low Day</th>

                <th>High day</th>

                <th></th>

              </tr>

            </thead>

            {/* Table Body  */}

            <tbody className="text-white">

              {criptos.length != 0 && criptos.map((cripto: any) => (

                <tr key={cripto} className=" hover:bg-main">

                  <td className="flex justify-center">

                    <Popover className="relative">

                      <Popover.Button><img width={50} src={`https://www.cryptocompare.com/${criptosInfo[cripto].USD.IMAGEURL}`} />
                      </Popover.Button>

                      <Popover.Panel className="absolute z-10 top-4 left-20">

                        <p>{cripto}</p>

                      </Popover.Panel>
                    </Popover>

                  </td>

                  <td>{criptosInfo[cripto].USD.PRICE}</td>

                  <td>{criptosInfo[cripto].USD.HIGHDAY}</td>

                  <td>{criptosInfo[cripto].USD.LOWDAY}</td>

                  <td>

                    <button className="bg-green-400 hover:bg-green-600 px-4 py-2 rounded">Buy</button>

                  </td>


                </tr>
              ))}


            </tbody>

          </table>

          <div className="mt-4 bg-second rounded-lg p-4">

            <BarChart />

          </div>

        </section>
      )}
    </>
  )
}
