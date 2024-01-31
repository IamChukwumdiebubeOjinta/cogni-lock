import { FEATURES_ITEMS } from "@/lib/data";
import styles from "./landingpage.module.css";
import Badge from "./partials/badge";
import Feature from "./partials/feature";

export default function Features() {
  return (
    <div className="w-full h-[718.16px] flex items-center">
      <div className={styles.features}></div>
      <div className="w-6/12 h-full p-6 lg:px-8">
        <div className="flex flex-col gap-8 items-center">
          <Badge text="Features" classname="mt-10" />
          <Feature featureItems={FEATURES_ITEMS} />
        </div>
      </div>
    </div>
  );
}
