import Scanner from "../Scanner";
import QRCard from "../components/QRMessage";
import { useAppContext } from "../context/appContext";
import LoadingPage from "./Loading";
const Scanning = () => {
  const { qrMessage, qrMessageType, isLoading } = useAppContext();
  if (isLoading) {
    return <LoadingPage />;
  }
  if (qrMessage) {
    return <QRCard qrMessage={qrMessage} qrMessageType={qrMessageType} />;
  } else {
    return <Scanner />;
  }
};

export default Scanning;
