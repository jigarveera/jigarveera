import { openUrl } from '../../services/capacitor/browser.service';

const Button = () => {
  return (
    <>
        <button
        onClick={() => openUrl('https://www.ylw.co.in')}
        className='px-3 py-2 rounded-2xl bg-linear-to-br from-blue-400 via-blue-500 to-blue-300 text-white font-semibold'>
            Redirect
        </button>
    </>
  )
}

export default Button
