import { toast, ToastContainer } from "react-toastify"
import observable from "./Observable"
import "react-toastify/dist/ReactToastify.css"

function logger(data) {
  console.log(Date.now(), data)
}

function toastify(data) {
  toast.info(data, {
    position: "bottom-right",
    closeButton: false,
    autoClose: 2000,
  })
}

observable.subscribe(logger)
observable.subscribe(toastify)

function handleClick() {
  observable.notify("Button clicked!")
}

function handleToggle() {
  observable.notify("Toggle clicked!")
}

export default function App() {
  return (
    <div className="flex h-dvh items-center justify-center gap-5 font-serif">
      <button className="btn" onClick={handleClick}>
        Button
      </button>
      <input type="checkbox" className="toggle" onChange={handleToggle} />
      <ToastContainer />
    </div>
  )
}
