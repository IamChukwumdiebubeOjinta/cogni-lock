import styles from "./landingpage.module.css"
import Button from "./partials/Button"

export default function Hero() {
  return (
    <div className={`w-full h-[650px] p-6 lg:px-8 flex items-center ${styles.hero}`}>
      <div className="max-w-[640px] w-full flex flex-col gap-6">
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-white font-bold text-5xl tracking-[-2px]">Enhance Campus Security <br /> with Facial Recognition.</h1>
          <p className="text-lg text-white leading-[24px]">Efficient, Secure, and Seamless Access Control for Educational Institutions.</p>
        </div>
        <Button text="Request a demo" className="bg-white text-[#380017] px-6 py-[10px] h-[60px]" />
      </div>
    </div>
  )
}
