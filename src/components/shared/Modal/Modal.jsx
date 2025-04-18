import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

const Modal = ({ isOpen, onClose, title, description, onButtonClick }) => {
  return <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
    <div className="fixed inset-0 z-[99999] w-screen bg-black/25 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <DialogPanel
          transition
          className="w-full max-w-md rounded-xl bg-white/90 p-6 backdrop-blur-3xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
        >
          <DialogTitle as="h3" className="text-xl font-bold text-black">
            {title}
          </DialogTitle>
          <div className="mt-2 text-base text-gray-600">
            {description}
          </div>
          <div className="mt-4 flex gap-3">
            <Button
              className="inline-flex items-center gap-2 rounded-md bg-red-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
              onClick={onButtonClick}
            >
              Ok
            </Button>
            <Button
              className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
              onClick={onClose}
            >
              Cancel
            </Button>
          </div>
        </DialogPanel>
      </div>
    </div>
  </Dialog>
}


export default Modal