import styles from "./banner.module.css";

const subTitleStyle = {
  fontStyle: "italic",
  fontSize: "x-large",
  color: "coral"
}

type BannerProps = {
  headerText:string
}

const Banner = ({ headerText } : BannerProps) => {
  return(
    <header className="row mb-4">
      <div className="col-5">
        <img src="./vercel.svg" alt="log" className={styles.logo} />
      </div>
      <div className="col-7 mt-4" style={subTitleStyle}>
        {headerText}
      </div>

    </header>
  )
}

export default Banner;