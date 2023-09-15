import { useState } from "react";
import UseUser from "../hook/UseUser";
import { Switch } from "@headlessui/react";
import { toast } from 'react-toastify';

export default function Settings() {

  const { Name, Location } = UseUser();


  const [name, setName] = useState<string>(Name);
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [location, setLocation] = useState<string>(Location);
  const [notification, setNotification] = useState<boolean>(true);


  // ADD THE NEW CAR TO localStorage
  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    if (password != repeatPassword) {
      return toast.error("The password are not equals");
    }

    toast.error("The password is invalid");
    


  }

  return (
    <section className="bg-second">

      <form onSubmit={handleSubmit} action="" className="shadow shadow-white rounded py-4 px-2">

        <legend className="text-white uppercase text-center text-2xl font-bold -mt-8">Update account</legend>

        {/* Name  */}

        <fieldset>

          <label className="uppercase my-2 block  font-bold text-sm text-white" htmlFor="Name">Name</label>

          <input className="w-full border-black  rounded outline-none border py-2 px-4" id="Name"
            type="text" placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)} />

        </fieldset>

        {/* Location  */}

        <fieldset>

          <label className="uppercase my-2 block  font-bold text-sm text-white" htmlFor="Location">Location</label>

          <input className="w-full border-black rounded outline-none border py-2 px-4" id="Location"
            type="text" placeholder="Your Location"
            value={location}
            onChange={e => setLocation(e.target.value)} />

        </fieldset>


        {/* Password  */}

        <fieldset>

          <label className="uppercase my-2 block  font-bold text-sm text-white" htmlFor="Password">Password</label>

          <input className="w-full border-black rounded outline-none border py-2 px-4" id="Password"
            type="password" placeholder="Your current password"
            value={password}
            onChange={e => setPassword(e.target.value)} />

        </fieldset>


        {/* Repeat password */}

        <fieldset>

          <label className="uppercase my-2 block  font-bold text-sm text-white" htmlFor="rPassword">Repeat Password</label>

          <input className="w-full border-black rounded outline-none border py-2 px-4" id="rPassword"
            type="password" placeholder="Repeat Your Password"
            value={repeatPassword}
            onChange={e => setRepeatPassword(e.target.value)} />

        </fieldset>

        {/* Get notification  */}

        <fieldset>

          <label className="uppercase my-2 block  font-bold text-sm text-white" htmlFor="rPassword">Receive Notification</label>

          <Switch
            checked={notification}
            onChange={setNotification}
            className={`${notification ? "bg-naranja" : "bg-naranja bg-opacity-50"} relative inline-flex h-6 w-11 items-center rounded-full`}
          >

            <span className="sr-only">Use setting</span>

            <span
              className={`${notification ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />


          </Switch>

        </fieldset>

        {/* Buttons  */}

        <button className="bg-naranja mt-4 font-bold cursor-pointer text-xl md:w-auto w-full  text-white px-6 py-3 rounded-lg hover:bg-red-800
          transition-all  duration-400 uppercase disabled:bg-opacity-80"
          type="submit"
        >Save Changes</button>

      </form>
    </section>
  )
}
