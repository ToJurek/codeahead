import Loader from "react-loader-spinner";

export const LoadingSpinner = () => (
  <div id={"loading-spinner"}>
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  </div>
);
