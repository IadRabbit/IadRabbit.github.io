import styles from "../styles/title.module.css";
import Typical from "react-typical";

const SUCA = () => {
	return (
		<Typical
			steps={["Work In Progress", 3000, "It is going to be a great resume", 5000]}
			loop={3}
			wrapper="p"
			className={styles.title}
		/>
	);
};

export default SUCA;
