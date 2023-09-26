import { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import useCripto from '../hook/UseCripto'

export default function Modal({ children, Description, title }: { children: ReactNode, Description?: string, title?: string }) {

  const { isOpen, HandleModal } = useCripto();

  return (
    <>
      <Transition  appear show={isOpen} as={Fragment}>

        <Dialog className="fixed bg-black  bg-opacity-90 top-0 bottom-0 left-0 right-0 z-50 grid place-items-center" onClose={() => HandleModal(false)}>

          {/* TRANSITION  */}

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-400"
            enterFrom="opacity-0 -translate-y-96"
            enterTo="opacity-100 scale-100 translate-y-0"

            leave="ease-in duration-400 "
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo="opacity-0 scale-95 -translate-y-96 bg-black">

            <Dialog.Panel className="w-11/12 h-auto mt-4  max-w-3xl inset-0 overflow-y-auto bg-white shadow shadow-white rounded-lg  
           transform transition-all p-4 ">

              <Dialog.Title className="text-center text-naranja uppercase text-2xl" as='h3'>{title}</Dialog.Title>

              <section className='grid justify-center items-center'>

                {Description != undefined}{

                  <Dialog.Description className="text-justify text-lg font-bold mt-8" as='p'>

                    {Description}

                  </Dialog.Description>
                }

                {children}

              </section>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}