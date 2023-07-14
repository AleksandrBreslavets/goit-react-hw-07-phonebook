import { SyncLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  marginTop: '40px',
  marginBottom: '40px',
  width: '100px',
};

export const Loader = () => (
  <SyncLoader
    color="#5b2a96"
    size={15}
    speedMultiplier={0.5}
    cssOverride={override}
  />
);